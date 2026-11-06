// The wall: giant headline, then an endless masonry of results. Results, scroll position and
// how far you got survive a trip to an artwork page, so coming back lands where you left.
import { O, T, get, search, state as data, onData, reshuffle, artistsOf, esc } from '../data.js';
import { filters, onFilters, hideLoader } from '../ui.js';
import { unobserveAll } from '../gl.js';
import { Masonry, bindSaves, columnsFor } from './tiles.js';

const mem = { ids: null, info: null, shown: 0, scroll: 0, key: '' };
let root, masonry, io, offs = [], resizeT;

const item = o => ({ id: o[0], u: o[1], w: o[2], h: o[3], title: o[4], artist: artistsOf(o).join(', '), date: o[5] });
const keyOf = f => JSON.stringify({ ...f, sort: f.sort });

export const namespace = 'wall';
export const savedScroll = () => mem.scroll;
export const tileFor = id => root?.querySelector(`.tile[data-id="${id}"]`);

export function enter(container, { restore = false } = {}) {
  root = container;
  root.innerHTML = `
    <section class="intro">
      <p class="eyebrow"><span>National Gallery of Art</span><span>Open access</span><span>CC0</span></p>
      <h1 class="headline" id="headline"></h1>
      <div class="status"><span id="status"></span>
        <label class="sort" for="sort-proxy">Order
          <select id="sort-proxy"><option value="shuffle">Shuffle</option><option value="rel">Best match</option><option value="old">Oldest first</option><option value="new">Newest first</option><option value="big">Largest image</option></select>
        </label></div>
      <p class="also" id="also" hidden></p>
    </section>
    <div class="wall" id="wall"></div>
    <div class="sentinel" id="sentinel"></div>
    <div class="empty" id="empty" hidden><h2>Nothing on the wall for that</h2><p>Try fewer words or clear a filter. Movement tags cover only about 11,000 works, so a keyword such as “impressionist” often finds more than the Movement menu.</p></div>`;
  masonry = new Masonry(root.querySelector('#wall'));
  // switch between related themes and exact words right from the results line
  root.querySelector('#also').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    const r = document.getElementById('f-rel'); r.value = b.dataset.rel; r.dispatchEvent(new Event('change'));
  });
  bindSaves(root, get);
  const sortProxy = root.querySelector('#sort-proxy'), sortReal = document.getElementById('f-sort');
  sortProxy.value = sortReal.value;
  sortProxy.addEventListener('change', () => { sortReal.value = sortProxy.value; sortReal.dispatchEvent(new Event('change')) });

  io = new IntersectionObserver(es => { if (es[0].isIntersecting) more() }, { rootMargin: '1400px 0px' });
  io.observe(root.querySelector('#sentinel'));

  offs.push(onFilters((f, opt) => { if (opt?.reshuffle) reshuffle(); sortProxy.value = f.sort; compute(true) }));
  offs.push(onData(kind => {
    if (kind === 'chunk' && !mem.ids) { compute(true); hideLoader() }
    else if (kind === 'chunk' || kind === 'done' || kind === 'related' && filters().q.trim()) merge();
  }));
  const onResize = () => { clearTimeout(resizeT); resizeT = setTimeout(() => { if (columnsFor(masonry.el) !== masonry.cols.length) redraw(mem.shown) }, 180) };
  addEventListener('resize', onResize); offs.push(() => removeEventListener('resize', onResize));

  if (O.length) {
    hideLoader();
    if (restore && mem.ids && mem.key === keyOf(filters())) { redraw(mem.shown); return { scroll: mem.scroll } }
    compute(false);
  }
  return { scroll: 0 };
}
export function leave() {
  mem.scroll = scrollY;
  io?.disconnect(); offs.forEach(f => f()); offs = [];
}

function compute(scrollTop) {
  const f = filters();
  mem.key = keyOf(f); mem.ids = search(f); mem.info = mem.ids.info; mem.shown = 0;
  heading(f);
  unobserveAll(); masonry.reset(); more(40);
  if (scrollTop) window.__lenis?.scrollTo(0, { immediate: true }) ?? scrollTo(0, 0);
}
// when more of the index arrives, keep what's already on screen in place and add the new matches after it
function merge() {
  if (!mem.ids) return;
  const shownIds = mem.ids.slice(0, mem.shown), on = new Set(shownIds), next = search(filters());
  mem.ids = shownIds.concat(next.filter(id => !on.has(id))); mem.info = next.info;
  heading(filters());
  if (mem.shown < 40) more(40 - mem.shown);
}
function redraw(n) {
  unobserveAll(); masonry.reset();
  const target = n; mem.shown = 0; more(target); heading(filters());
}
function more(n = 36) {
  if (!mem.ids) return;
  const end = Math.min(mem.ids.length, mem.shown + n);
  for (; mem.shown < end; mem.shown++) masonry.add(item(get(mem.ids[mem.shown])));
}
function heading(f) {
  const h = root.querySelector('#headline'), s = root.querySelector('#status');
  const n = mem.ids?.length ?? 0, fmt = n.toLocaleString();
  const loading = !data.done;
  const bits = [];
  if (f.artist) bits.push(esc(f.artist));
  if (f.style !== '') bits.push(esc(T.style?.[f.style] ?? ''));
  if (f.theme !== '') bits.push(esc(T.theme?.[f.theme] ?? ''));
  if (f.cls !== '') bits.push(esc(T.cls?.[f.cls] ?? ''));
  if (f.q.trim()) h.innerHTML = `<em>“${esc(f.q.trim())}”</em>`;
  else if (bits.length) h.innerHTML = bits.filter(Boolean).map((b, i) => i ? b : `<em>${b}</em>`).join(', ');
  else h.innerHTML = `<em>${loading ? 'Sixty-three thousand' : fmt}</em> works,<br>free for your covers.`;
  s.textContent = loading ? `${fmt} found so far, still loading the collection` : `${fmt} ${n === 1 ? 'work' : 'works'}`;
  // with a search, say how many works have the words themselves and what related words were searched too
  const a = root.querySelector('#also'), info = mem.info, q = f.q.trim();
  a.hidden = !q || loading;
  if (q && !loading) {
    if (f.rel === 'exact') a.innerHTML = `Exact words only. <button type="button" class="linkish" data-rel="">Include related themes</button>`;
    else if (info?.related && info.also.length) {
      const ex = info.exact.toLocaleString(), shown = info.also.slice(0, 10).map(esc).join(', '), more = info.also.length - 10;
      const lead = info.exact ? `${ex} mention “${esc(q)}” directly, then works matching related words` : `Nothing mentions “${esc(q)}” directly, so these match related words`;
      a.innerHTML = `${lead}: ${shown}${more > 0 ? ` and ${more} more` : ''}. <button type="button" class="linkish" data-rel="exact">Exact words only</button>`;
    } else a.innerHTML = '';
    a.hidden = !a.innerHTML;
  }
  root.querySelector('#empty').hidden = !!n || loading;
}
