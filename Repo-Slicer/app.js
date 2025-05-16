const input = document.getElementById('urlInput');
const btn = document.getElementById('downloadBtn');
const status = document.getElementById('status');
let JSZip = window.JSZip;

btn.addEventListener('click', async () => {
  const url = input.value.trim();
  status.classList.add('error');
  if (!url) return updateStatus('Please enter a URL.');

  // Parse GitHub URL
  const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)\/tree\/([^\/]+)\/(.+)/);
  if (!match) return updateStatus('Invalid GitHub folder URL.');
  const [_, owner, repo, branch, folder] = match;
  status.classList.remove('error');

  // Start animation
  status.classList.add('downloading');
  updateStatus('Fetching file list...');

  const zip = new JSZip();
  try {
    await fetchFolder(owner, repo, branch, folder, zip);
    updateStatus('Generating ZIP...');
    const blob = await zip.generateAsync({ type: 'blob' });
    saveAs(blob, `${repo}-${folder.split('/').pop()}.zip`);
    updateStatus('Download ready!');
  } catch (err) {
    status.classList.add('error');
    updateStatus('Error: ' + err.message);
  } finally {
   status.classList.remove('downloading'); 
  }
});

// Recursively fetch folder contents
async function fetchFolder(owner, repo, branch, path, zip) {
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;
  const res = await fetch(apiUrl);
  if (!res.ok) throw new Error('Folder not found or rate-limited.');
  const items = await res.json();
  for (let item of items) {
    if (item.type === 'dir') {
      await fetchFolder(owner, repo, branch, item.path, zip);
    } else if (item.type === 'file') {
      const fileData = await fetch(item.download_url).then(r => r.blob());
      const relativePath = item.path.replace(new RegExp(`^${path}/`), '');
      zip.file(relativePath, fileData);
    }
  }
}

function updateStatus(msg) {
  status.textContent = msg;
}