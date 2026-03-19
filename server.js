const express = require('express');
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');
const archiver = require('archiver');
const https = require('https');
const http = require('http');
const crypto = require('crypto');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ── ROTA SECRETA DO PAINEL ADMIN ───────────────────────
const ADMIN_PANEL_ROUTE = '/sys-' + crypto.createHash('md5').update('lovablecloner-admin').digest('hex').slice(0, 10);
console.log('🛡️  Painel admin:', ADMIN_PANEL_ROUTE);
app.get(ADMIN_PANEL_ROUTE, (req, res) => {
  res.sendFile(path.join(__dirname, 'admin-panel.html'));
});

// ── CONFIGURAÇÕES ──────────────────────────────────────
const ADMIN_KEY = process.env.ADMIN_KEY || 'admin-' + crypto.randomBytes(16).toString('hex');
const MAX_CLONES_PER_IP = 3;      // por hora
const CLONE_COOLDOWN_MS = 60 * 60 * 1000;

// Armazena tokens válidos: token -> { ip, expiresAt, usedClones }
const validTokens = new Map();
// Rate limit por IP: ip -> [timestamps]
const ipUsage = new Map();

console.log('\n🔑 ADMIN KEY:', ADMIN_KEY, '\n');

// ── ROTAS ADMIN ────────────────────────────────────────
function adminAuth(req, res, next) {
  if (req.headers['x-admin-key'] !== ADMIN_KEY) return res.status(401).json({ error: 'Não autorizado' });
  next();
}

// Listar todos os tokens
app.get('/admin/tokens', adminAuth, (req, res) => {
  const list = [];
  for (const [token, data] of validTokens.entries()) {
    list.push({ token, ...data });
  }
  res.json(list);
});

// Criar token
app.post('/admin/token', adminAuth, (req, res) => {
  const token = crypto.randomBytes(24).toString('hex');
  const expiresAt = Date.now() + (req.body.hours || 24) * 60 * 60 * 1000;
  const maxClones = req.body.maxClones || 10;
  const label = req.body.label || '';
  validTokens.set(token, { label, expiresAt, maxClones, usedClones: 0, createdAt: Date.now() });
  res.json({ token, expiresAt: new Date(expiresAt).toISOString(), maxClones, label });
});

// Revogar token
app.delete('/admin/token/:token', adminAuth, (req, res) => {
  validTokens.delete(req.params.token);
  res.json({ ok: true });
});



// ── MIDDLEWARE DE AUTENTICAÇÃO ─────────────────────────
function authMiddleware(req, res, next) {
  const token = req.headers['x-token'] || req.query.token;
  if (!token) return res.status(401).json({ error: 'Token obrigatório' });

  const data = validTokens.get(token);
  if (!data) return res.status(401).json({ error: 'Token inválido' });
  if (Date.now() > data.expiresAt) {
    validTokens.delete(token);
    return res.status(401).json({ error: 'Token expirado' });
  }
  if (data.usedClones >= data.maxClones) return res.status(429).json({ error: 'Limite de clones atingido' });

  // rate limit por IP
  const ip = req.ip;
  const now = Date.now();
  const times = (ipUsage.get(ip) || []).filter(t => now - t < CLONE_COOLDOWN_MS);
  if (times.length >= MAX_CLONES_PER_IP) return res.status(429).json({ error: 'Muitas requisições. Aguarde.' });

  req.tokenData = data;
  req.token = token;
  next();
}

function saveFile(filePath, buffer) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, buffer);
}

function urlToLocalPath(url, baseOrigin) {
  try {
    const u = new URL(url);
    if (u.origin === baseOrigin) {
      let p = u.pathname.startsWith('/') ? u.pathname.slice(1) : u.pathname;
      return p || 'index.html';
    }
    return 'assets/external/' + u.hostname + u.pathname;
  } catch { return null; }
}

function downloadBuffer(url) {
  return new Promise((resolve) => {
    const proto = url.startsWith('https') ? https : http;
    const chunks = [];
    proto.get(url, { timeout: 10000 }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadBuffer(res.headers.location).then(resolve);
      }
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', () => resolve(null));
  });
}

app.get('/clone', authMiddleware, async (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl) return res.status(400).json({ error: 'URL obrigatória' });
  try { new URL(targetUrl); } catch {
    return res.status(400).json({ error: 'URL inválida' });
  }

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const send = (type, data) => res.write('data: ' + JSON.stringify({ type, data }) + '\n\n');

  const sessionId = Date.now().toString();
  const outputDir = path.join(__dirname, 'tmp', sessionId);
  fs.mkdirSync(outputDir, { recursive: true });

  // registra uso
  const ip = req.ip;
  const times = ipUsage.get(ip) || [];
  times.push(Date.now());
  ipUsage.set(ip, times);
  req.tokenData.usedClones++;

  try {
    send('log', '🚀 Iniciando clonagem de ' + targetUrl);

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    const baseOrigin = new URL(targetUrl).origin;
    const savedAssets = new Map();

    page.on('response', async (response) => {
      const url = response.url();
      if (!url.startsWith('http') || savedAssets.has(url)) return;
      const status = response.status();
      if (status < 200 || status >= 400) return;

      const ct = response.headers()['content-type'] || '';
      const isAsset =
        ct.includes('javascript') || ct.includes('css') ||
        ct.includes('image') || ct.includes('font') ||
        ct.includes('woff') || ct.includes('svg') ||
        /\.(js|css|png|jpg|jpeg|gif|svg|ico|woff2|woff|ttf|eot|webp|avif)(\?|$)/.test(url);

      if (!isAsset) return;

      try {
        const buffer = await response.body();
        const localPath = urlToLocalPath(url, baseOrigin);
        if (!localPath || localPath.endsWith('/')) return;
        saveFile(path.join(outputDir, localPath), buffer);
        savedAssets.set(url, localPath);
        send('asset', localPath);
      } catch (_) {}
    });

    send('log', '⏳ Carregando página...');
    await page.goto(targetUrl, { waitUntil: 'networkidle', timeout: 60000 });

    send('log', '📜 Carregando imagens lazy...');
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let total = 0;
        const timer = setInterval(() => {
          window.scrollBy(0, 400);
          total += 400;
          if (total >= document.body.scrollHeight) {
            clearInterval(timer);
            window.scrollTo(0, 0);
            resolve();
          }
        }, 80);
      });
    });

    await page.waitForLoadState('networkidle').catch(() => {});
    await page.waitForTimeout(1500);

    send('log', '📸 Capturando HTML...');
    let html = await page.content();
    await browser.close();

    // coleta URLs de imagens externas que ainda não foram baixadas
    const imgRegex = /src=["']((https?:\/\/[^"']+\.(?:png|jpg|jpeg|gif|webp|avif|svg|ico))[^"']*)["']/gi;
    const extraImgs = [];
    let m;
    while ((m = imgRegex.exec(html)) !== null) {
      const imgUrl = m[1];
      if (!savedAssets.has(imgUrl)) extraImgs.push(imgUrl);
    }

    if (extraImgs.length > 0) {
      send('log', '🖼️ Baixando ' + extraImgs.length + ' imagens externas...');
      for (const imgUrl of extraImgs) {
        const localPath = urlToLocalPath(imgUrl, baseOrigin);
        if (!localPath) continue;
        const buf = await downloadBuffer(imgUrl);
        if (buf) {
          saveFile(path.join(outputDir, localPath), buf);
          savedAssets.set(imgUrl, localPath);
          send('asset', localPath);
        }
      }
    }

    // inline CSS antes de reescrever caminhos
    html = html.replace(/<link[^>]+rel=["']stylesheet["'][^>]*href=["']([^"']+)["'][^>]*\/?>/gi, (match, href) => {
      let localHref = href;
      if (localHref.startsWith(baseOrigin)) localHref = localHref.slice(baseOrigin.length);
      if (localHref.startsWith('/')) localHref = localHref.slice(1);
      const cssPath = path.join(outputDir, localHref);
      if (fs.existsSync(cssPath)) {
        const css = fs.readFileSync(cssPath, 'utf-8');
        return '<style>' + css + '</style>';
      }
      return match;
    });

    // reescreve URLs absolutas do mesmo domínio para relativas
    html = html.split(baseOrigin).join('');
    html = html.replace(/(href|src)="\/assets\//g, '$1="assets/');
    html = html.replace(/(href|src)='\/assets\//g, "$1='assets/");

    // reescreve URLs externas para cópias locais
    for (const [assetUrl, localPath] of savedAssets.entries()) {
      if (!assetUrl.startsWith(baseOrigin)) {
        html = html.split(assetUrl).join(localPath);
      }
    }

    saveFile(path.join(outputDir, 'index.html'), Buffer.from(html, 'utf-8'));
    fs.writeFileSync(
      path.join(outputDir, 'serve.json'),
      JSON.stringify({ rewrites: [{ source: '**', destination: '/index.html' }] })
    );

    send('log', '✅ ' + savedAssets.size + ' assets capturados');
    send('done', sessionId);

  } catch (err) {
    send('error', err.message);
    res.end();
  }
});

app.get('/download/:sessionId', authMiddleware, (req, res) => {
  const outputDir = path.join(__dirname, 'tmp', req.params.sessionId);
  if (!fs.existsSync(outputDir)) return res.status(404).send('Sessão não encontrada');

  res.setHeader('Content-Type', 'application/zip');
  res.setHeader('Content-Disposition', 'attachment; filename="cloned-page.zip"');

  const archive = archiver('zip', { zlib: { level: 6 } });
  archive.pipe(res);
  archive.directory(outputDir, false);
  archive.finalize();

  setTimeout(() => fs.rmSync(outputDir, { recursive: true, force: true }), 5 * 60 * 1000);
});

// preview: abre um servidor estático numa porta livre para a sessão
const previewServers = new Map();

app.get('/start-preview/:sessionId', authMiddleware, (req, res) => {
  const sessionId = req.params.sessionId;
  const outputDir = path.join(__dirname, 'tmp', sessionId);
  if (!fs.existsSync(outputDir)) return res.status(404).json({ error: 'Sessão não encontrada' });

  // se já tem servidor rodando, retorna a porta
  if (previewServers.has(sessionId)) {
    return res.json({ port: previewServers.get(sessionId) });
  }

  const previewApp = express();
  // serve arquivos estáticos
  previewApp.use(express.static(outputDir));
  // fallback para React Router
  previewApp.use('*', (_, r) => r.sendFile(path.join(outputDir, 'index.html')));

  const server = previewApp.listen(0, () => {
    const port = server.address().port;
    previewServers.set(sessionId, port);
    // limpa após 10 min
    setTimeout(() => {
      server.close();
      previewServers.delete(sessionId);
      fs.rmSync(outputDir, { recursive: true, force: true });
    }, 10 * 60 * 1000);
    res.json({ port });
  });
});

app.use('/preview/:sessionId*', (req, res) => {
  res.send('<script>fetch("/start-preview/'+req.params.sessionId+'").then(r=>r.json()).then(d=>location.href="http://localhost:"+d.port)</script>Redirecionando...');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('\n🚀 LovableCloner rodando em http://localhost:' + PORT + '\n'));
