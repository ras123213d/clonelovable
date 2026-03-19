const https = require('https');
const fs = require('fs');
const path = require('path');

const imgs = [
  { url: 'https://frontend.lowify.me/products/banner/91f87911c221099b4f178283.jpg', name: 'banner.jpg' },
  { url: 'https://frontend.lowify.me/products/thumb/7ddd25bad4396efd46d9e945.webp', name: 'produto.webp' },
  { url: 'https://frontend.lowify.me/products/thumb/688d15120808d99d5f2d7335.webp', name: 'bump1.webp' },
  { url: 'https://frontend.lowify.me/products/thumb/769991c8338a40bd4a860b94.webp', name: 'bump2.webp' },
  { url: 'https://frontend.lowify.me/products/thumb/884ac480bbe27063a30574ab.webp', name: 'bump3.webp' },
  { url: 'https://frontend.lowify.me/products/thumb/e952e23901fc1fe15e814803.jpg', name: 'bump4.jpg' },
  { url: 'https://dashboard.lowify.com.br//img/depoimentos/850308e5c75817c2b38aa0ef99eee874.webp', name: 'dep1.webp' },
  { url: 'https://dashboard.lowify.com.br//img/depoimentos/360a3a490de92bf5625fa8aa18cbbaa9.webp', name: 'dep2.webp' },
  { url: 'https://dashboard.lowify.com.br//img/depoimentos/c41a2495e7391396901fe05b07ba5a5d.webp', name: 'dep3.webp' },
  { url: 'https://dashboard.lowify.com.br//img/depoimentos/a9171f11d2f3b7fb178a01f4b5300438.webp', name: 'dep4.webp' },
  { url: 'https://dashboard.lowify.com.br/img/icone.webp', name: 'logo.webp' },
];

const outDir = path.join(__dirname, '..', 'checkout', 'imgs');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function download(url, dest) {
  return new Promise((resolve) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        return download(res.headers.location, dest).then(resolve);
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', (e) => { console.error('Erro:', url, e.message); resolve(); });
  });
}

(async () => {
  for (const img of imgs) {
    const dest = path.join(outDir, img.name);
    process.stdout.write(`Baixando ${img.name}... `);
    await download(img.url, dest);
    console.log('✓');
  }
  console.log('\nPronto!');
})();
