// Collection index built by build.py from github.com/NationalGalleryOfArt/opendata.
// Each object row: [id, uuid, w, h, title, date, year, artists[], nats[], cls, medium,
//                   styles[], schools[], techs[], themes[], keywords, alt, accession, credit]
export let T = {};
export let O = [];
export const byId = new Map();
export const state = { loaded: 0, total: 0, done: false };

let hay = [];
const listeners = new Set();
export const onData = fn => (listeners.add(fn), () => listeners.delete(fn));

export const IIIF = u => 'https://api.nga.gov/iiif/' + u;
export const thumbUrl = u => IIIF(u) + '/full/500,/0/default.jpg';
export const heroUrl = u => IIIF(u) + '/full/!1600,1600/0/default.jpg';
export const fullUrl = u => IIIF(u) + '/full/max/0/default.jpg';

// lowercase, strip accents and punctuation, so a term matches at word starts: "gerome" finds Gérôme
export const norm = s => ' ' + String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ');
export const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
export const artistsOf = o => o[7].map(a => T.artist[a]);

export async function load() {
  const meta = await (await fetch('data/meta.json')).json();
  T = meta.tables; state.total = meta.count;
  emit('meta');
  const parts = new Array(meta.chunks.length);
  await Promise.all(meta.chunks.map(async (fn, i) => {
    const rows = await (await fetch('data/' + fn)).json();
    parts[i] = rows;
    for (const o of rows) {
      byId.set(o[0], O.length);
      O.push(o);
      hay.push([o[4], artistsOf(o).join(' '), o[10], o[5], o[11].map(s => T.style[s]).join(' '),
        o[12].map(s => T.school[s]).join(' '), o[13].map(s => T.tech[s]).join(' '), o[14].map(s => T.theme[s]).join(' '),
        o[15], o[8].map(s => T.nat[s]).join(' '), T.cls[o[9]], o[16]].map(norm).join(' \u0001 '));
    }
    state.loaded += rows.length;
    emit('chunk');
  }));
  state.done = true;
  emit('done');
}
function emit(kind) { listeners.forEach(fn => fn(kind)) }

export const get = id => O[byId.get(+id)];
// resolves once the object is in memory, or null when the whole index has loaded without it
export function whenObject(id) {
  return new Promise(res => {
    const check = () => { const o = get(id); if (o) { off(); res(o) } else if (state.done) { off(); res(null) } };
    const off = onData(check); check();
  });
}

let seed = Math.random() * 1e9 | 0;
export const reshuffle = () => { seed = Math.random() * 1e9 | 0 };
const rnd = id => { let x = (id ^ seed) >>> 0; x = Math.imul(x ^ x >>> 16, 0x45d9f3b); x = Math.imul(x ^ x >>> 16, 0x45d9f3b); return (x ^ x >>> 16) >>> 0 };

// f: {q, cls, style, tech, theme, nat, artist, medium, orient, from, to, sort}; returns object ids
export function search(f) {
  const terms = norm(f.q).split(' ').filter(Boolean).map(t => ' ' + t);
  const num = v => v === '' || v == null ? -1 : +v;
  const cls = num(f.cls), st = num(f.style), te = num(f.tech), th = num(f.theme), na = num(f.nat);
  const artist = (f.artist || '').trim().toLowerCase(), medium = (f.medium || '').trim().toLowerCase();
  const from = parseInt(f.from), to = parseInt(f.to);
  const out = [];
  for (let i = 0; i < O.length; i++) {
    const o = O[i];
    if (cls >= 0 && o[9] !== cls) continue;
    if (st >= 0 && !o[11].includes(st)) continue;
    if (te >= 0 && !o[13].includes(te)) continue;
    if (th >= 0 && !o[14].includes(th)) continue;
    if (na >= 0 && !o[8].includes(na)) continue;
    if (artist && !o[7].some(a => T.artist[a].toLowerCase().includes(artist))) continue;
    if (medium && !(o[10] || '').toLowerCase().includes(medium)) continue;
    if (from && !(o[6] != null && o[6] >= from)) continue;
    if (to && !(o[6] != null && o[6] <= to)) continue;
    if (f.orient) {
      const r = o[2] / o[3];
      if (f.orient === 'cover' && !(r >= .58 && r <= .76)) continue;
      if (f.orient === 'portrait' && !(r < .9)) continue;
      if (f.orient === 'landscape' && !(r > 1.1)) continue;
      if (f.orient === 'square' && !(r >= .9 && r <= 1.1)) continue;
    }
    let score = 0;
    if (terms.length) {
      const h = hay[i]; let ok = true;
      const tEnd = h.indexOf('\u0001'), aEnd = h.indexOf('\u0001', tEnd + 1), altStart = h.lastIndexOf('\u0001');
      for (const t of terms) {
        const p = h.indexOf(t);
        if (p < 0) { ok = false; break }
        score += p < tEnd ? 10 : p < aEnd ? 6 : p < altStart ? 3 : 1;
      }
      if (!ok) continue;
    }
    out.push([i, score]);
  }
  const sort = f.sort === 'rel' && !terms.length ? 'shuffle' : f.sort || 'shuffle';
  const yr = i => O[i][6] ?? 99999;
  if (sort === 'rel') out.sort((a, b) => b[1] - a[1] || rnd(O[a[0]][0]) - rnd(O[b[0]][0]));
  else if (sort === 'old') out.sort((a, b) => yr(a[0]) - yr(b[0]));
  else if (sort === 'new') out.sort((a, b) => (O[b[0]][6] ?? -1e9) - (O[a[0]][6] ?? -1e9));
  else if (sort === 'big') out.sort((a, b) => O[b[0]][2] * O[b[0]][3] - O[a[0]][2] * O[a[0]][3]);
  else out.sort((a, b) => rnd(O[a[0]][0]) - rnd(O[b[0]][0]));
  let ids = out.map(x => O[x[0]][0]);
  // on a plain shuffle, lead with paintings, drawings, prints and photographs so the first screen looks like art, not furniture plates
  if (sort === 'shuffle' && !terms.length && cls < 0) {
    const fav = new Set(['Painting', 'Drawing', 'Print', 'Photograph'].map(n => T.cls.indexOf(n)));
    const a = [], b = [];
    for (const id of ids) (fav.has(get(id)[9]) ? a : b).push(id);
    ids = a.concat(b);
  }
  return ids;
}

// works that share an artist, then a movement or subject, with the given one
export function related(o, n = 12) {
  const seen = new Set([o[0]]), out = [];
  const add = pred => { for (const x of O) { if (out.length >= n) return; if (!seen.has(x[0]) && pred(x)) { seen.add(x[0]); out.push(x[0]) } } };
  if (o[7].length) add(x => x[7].some(a => o[7].includes(a)));
  if (o[11].length) add(x => x[11].some(s => o[11].includes(s)) && x[9] === o[9]);
  if (o[14].length) add(x => x[14].some(s => o[14].includes(s)) && x[9] === o[9]);
  return out;
}
