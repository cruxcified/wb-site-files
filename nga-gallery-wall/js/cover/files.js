// Saved covers (localStorage) and the export files: PNG, JPEG, and a one-page print PDF.
const KEY = 'gw-covers';
const ls = (() => { try { return window.localStorage } catch { return null } })();

export function allCovers() { try { return JSON.parse(ls.getItem(KEY)) || {} } catch { return {} } }
export const getCover = id => allCovers()[id] || null;
export const coversFor = artId => Object.entries(allCovers()).filter(([, c]) => c.art?.id === artId).sort((a, b) => b[1].updated - a[1].updated);
// returns false when the browser is out of room (uploaded pictures make a cover large)
export function putCover(id, cover) {
  const all = allCovers(); all[id] = { ...cover, updated: Date.now() };
  try { ls.setItem(KEY, JSON.stringify(all)); return true } catch { return false }
}
export function dropCover(id) { const all = allCovers(); delete all[id]; try { ls.setItem(KEY, JSON.stringify(all)) } catch {} }
export const newCoverId = () => 'c' + Date.now().toString(36);

export const toBlob = (canvas, type, q) => new Promise((res, rej) => {
  try { canvas.toBlob(b => b ? res(b) : rej(new Error('The browser could not encode the image.')), type, q) } catch (e) { rej(e) }
});

export function download(blob, name) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = name;
  a.setAttribute('data-barba-prevent', 'self');
  document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}

// A one-page PDF holding the sheet as a JPEG, sized exactly in points, with a TrimBox and BleedBox so
// print uploaders (Blurb, KDP, IngramSpark) see where the trim falls.
export async function pdfFromJpeg(jpeg, pxW, pxH, wIn, hIn, bleedIn) {
  const img = new Uint8Array(await jpeg.arrayBuffer());
  const W = +(wIn * 72).toFixed(3), H = +(hIn * 72).toFixed(3), b = +(bleedIn * 72).toFixed(3);
  const enc = new TextEncoder(), parts = [], offsets = [];
  let len = 0;
  const push = x => { const u = typeof x === 'string' ? enc.encode(x) : x; parts.push(u); len += u.length };
  const obj = (n, body) => { offsets[n] = len; push(`${n} 0 obj\n`); body(); push('\nendobj\n') };
  const content = `q ${W} 0 0 ${H} 0 0 cm /Im0 Do Q`;
  push('%PDF-1.4\n%\xE2\xE3\xCF\xD3\n');
  obj(1, () => push('<< /Type /Catalog /Pages 2 0 R >>'));
  obj(2, () => push('<< /Type /Pages /Kids [3 0 R] /Count 1 >>'));
  obj(3, () => push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${W} ${H}] /BleedBox [0 0 ${W} ${H}] /TrimBox [${b} ${b} ${+(W - b).toFixed(3)} ${+(H - b).toFixed(3)}] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>`));
  obj(4, () => { push(`<< /Type /XObject /Subtype /Image /Width ${pxW} /Height ${pxH} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${img.length} >>\nstream\n`); push(img); push('\nendstream') });
  obj(5, () => push(`<< /Length ${content.length} >>\nstream\n${content}\nendstream`));
  const xref = len;
  push(`xref\n0 6\n0000000000 65535 f \n${[1, 2, 3, 4, 5].map(n => String(offsets[n]).padStart(10, '0') + ' 00000 n \n').join('')}trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`);
  return new Blob(parts, { type: 'application/pdf' });
}
