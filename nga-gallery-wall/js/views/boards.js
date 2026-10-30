// Boards: saved artworks grouped for a project. Stored in this browser; export/import carries them elsewhere.
import { get, esc } from '../data.js';
import { boards, keys, lastKey, setLast, create, remove, rename, onBoards, exportJson, importJson } from '../store.js';
import { toast, hideLoader } from '../ui.js';
import { unobserveAll } from '../gl.js';
import { Masonry, bindSaves } from './tiles.js';

export const namespace = 'boards';
let root, current, masonry, off, armed = null;

export function enter(container) {
  root = container; current = lastKey(); hideLoader();
  root.innerHTML = `
    <section class="intro">
      <p class="eyebrow"><span>Your boards</span><span>Saved in this browser</span></p>
      <h1 class="headline" id="b-title"></h1>
      <div class="board-bar">
        <div class="chips" id="b-chips"></div>
        <form class="newboard" id="b-new"><input id="b-new-name" placeholder="New board" aria-label="New board name" autocomplete="off"><button class="linkish" type="submit">Add board</button></form>
      </div>
      <div class="board-tools">
        <button class="linkish" type="button" id="b-rename">Rename</button>
        <button class="linkish danger" type="button" id="b-delete"></button>
        <span class="sep"></span>
        <button class="linkish" type="button" id="b-export">Export boards</button>
        <label class="linkish" for="b-import">Import boards<input type="file" id="b-import" accept="application/json,.json" hidden></label>
      </div>
      <form class="newboard" id="b-rename-form" hidden><input id="b-rename-name" aria-label="Board name" autocomplete="off"><button class="linkish" type="submit">Save name</button></form>
    </section>
    <div class="wall" id="b-wall"></div>
    <div class="empty" id="b-empty" hidden><h2>Nothing pinned here yet</h2><p>Tap the bookmark on any artwork to save it to this board. On an artwork’s page you can pick a different board or start a new one.</p><p><a href="./">Go to the wall</a></p></div>`;
  masonry = new Masonry(root.querySelector('#b-wall'));
  bindSaves(root.querySelector('#b-wall'), id => get(id) || snapRow(id));
  draw();
  off = onBoards(() => draw(true));

  root.querySelector('#b-chips').addEventListener('click', e => { const c = e.target.closest('.chip'); if (c) { current = c.dataset.k; setLast(current); armed = null; draw() } });
  root.querySelector('#b-new').addEventListener('submit', e => { e.preventDefault(); const k = create(root.querySelector('#b-new-name').value); if (k) { current = k; setLast(k); draw() } });
  root.querySelector('#b-delete').addEventListener('click', () => {
    if (armed === current) { const name = boards[current].name; remove(current); current = lastKey(); armed = null; draw(); toast(`Deleted ${name}`) }
    else { armed = current; draw(true) }
  });
  root.querySelector('#b-rename').addEventListener('click', () => { const f = root.querySelector('#b-rename-form'); f.hidden = !f.hidden; root.querySelector('#b-rename-name').value = boards[current].name; if (!f.hidden) root.querySelector('#b-rename-name').focus() });
  root.querySelector('#b-rename-form').addEventListener('submit', e => { e.preventDefault(); rename(current, root.querySelector('#b-rename-name').value); e.currentTarget.hidden = true });
  root.querySelector('#b-export').addEventListener('click', () => {
    const blob = new Blob([exportJson()], { type: 'application/json' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'gallery-wall-boards.json'; a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });
  root.querySelector('#b-import').addEventListener('change', async e => {
    const file = e.target.files[0]; if (!file) return;
    try { const n = importJson(await file.text()); toast(n ? `Imported ${n} artworks` : 'Those boards were already here') }
    catch (err) { toast(err.message || 'That file could not be read.') }
    e.target.value = '';
  });
}
export function leave() { off?.(); off = null }

// rows rebuilt from the snapshot stored on the board, used before the index has loaded
function snapRow(id) {
  for (const b of Object.values(boards)) { const it = b.items.find(x => x.id === id); if (it) return [it.id, it.u, it.w, it.h, it.t, it.d, null, [], [], 0, '', [], [], [], [], '', '', '', ''] }
  return null;
}
function draw(keepWall) {
  if (!boards[current]) current = lastKey();
  const b = boards[current];
  root.querySelector('#b-title').innerHTML = `<em>${esc(b.name)}</em>`;
  root.querySelector('#b-chips').innerHTML = keys().map(k => `<button type="button" class="chip" data-k="${k}" aria-pressed="${k === current}">${esc(boards[k].name)}<span class="n">${boards[k].items.length}</span></button>`).join('');
  const del = root.querySelector('#b-delete');
  del.hidden = keys().length < 2;
  del.textContent = armed === current ? `Tap again to delete ${b.name}` : 'Delete board';
  // a save or unsave elsewhere only changes counts; rebuild the wall only when its items changed
  const sig = b.items.map(x => x.id).join(',');
  if (keepWall && masonry.sig === sig) return;
  masonry.sig = sig;
  unobserveAll(); masonry.reset();
  for (const it of b.items) masonry.add({ id: it.id, u: it.u, w: it.w, h: it.h, title: it.t, artist: it.a, date: it.d });
  root.querySelector('#b-empty').hidden = !!b.items.length;
}
