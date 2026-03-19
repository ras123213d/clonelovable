const urlInput = document.getElementById('urlInput');
const tokenInput = document.getElementById('tokenInput');
const cloneBtn = document.getElementById('cloneBtn');
const progressSection = document.getElementById('progressSection');
const progressTitle = document.getElementById('progressTitle');
const assetCount = document.getElementById('assetCount');
const terminalBody = document.getElementById('terminalBody');
const downloadArea = document.getElementById('downloadArea');
const downloadBtn = document.getElementById('downloadBtn');

let assetTotal = 0;

function addLine(text, cls) {
  const p = document.createElement('p');
  p.className = cls;
  p.textContent = text;
  terminalBody.appendChild(p);
  terminalBody.parentElement.scrollTop = terminalBody.parentElement.scrollHeight;
}

function reset() {
  terminalBody.innerHTML = '';
  downloadArea.style.display = 'none';
  assetTotal = 0;
  assetCount.textContent = '0 assets';
  progressTitle.textContent = 'Clonando...';
}

cloneBtn.addEventListener('click', () => {
  const url = urlInput.value.trim();
  const token = tokenInput.value.trim();

  if (!token) { tokenInput.style.borderColor = '#ef4444'; setTimeout(() => tokenInput.style.borderColor = '', 1500); return; }
  if (!url) return urlInput.focus();

  try { new URL(url); } catch {
    urlInput.style.borderColor = '#ef4444';
    setTimeout(() => urlInput.style.borderColor = '', 1500);
    return;
  }

  reset();
  cloneBtn.disabled = true;
  progressSection.style.display = 'block';
  progressSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const evtSource = new EventSource(`/clone?url=${encodeURIComponent(url)}&token=${encodeURIComponent(token)}`);

  evtSource.onmessage = (e) => {
    const { type, data } = JSON.parse(e.data);

    if (type === 'log') {
      addLine(data, 'log');
    } else if (type === 'asset') {
      assetTotal++;
      assetCount.textContent = `${assetTotal} assets`;
      addLine(data, 'asset');
    } else if (type === 'done') {
      progressTitle.textContent = 'Concluído';
      downloadBtn.href = `/download/${data}?token=${encodeURIComponent(token)}`;
      document.getElementById('previewBtn').href = `/preview/${data}/?token=${encodeURIComponent(token)}`;
      downloadArea.style.display = 'block';
      cloneBtn.disabled = false;
      evtSource.close();
    } else if (type === 'error') {
      addLine('❌ Erro: ' + data, 'err');
      progressTitle.textContent = 'Erro';
      cloneBtn.disabled = false;
      evtSource.close();
    }
  };

  evtSource.onerror = () => {
    addLine('❌ Conexão perdida com o servidor', 'err');
    cloneBtn.disabled = false;
    evtSource.close();
  };
});

urlInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') cloneBtn.click();
});
