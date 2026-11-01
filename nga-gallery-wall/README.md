# Gallery Wall

A WebGL tile wall of the National Gallery of Art's 63,862 open-access (CC0) artworks, for finding book cover art.
Live at https://lab.wboechler.com/nga-gallery-wall/

- `index.html`, `artwork.html?id=…`, `boards.html` share one shell. barba.js swaps the `data-barba="container"` between them.
- `js/gl.js` runs one three.js canvas under the page. Artwork images are planes that track their DOM placeholders, with shader motion: scroll bend, a gentle hover zoom, flight between pages. A post pass draws the fog (day and night palettes), pointer glow, grain and page curtain.
- Type is Adobe Jenson Pro (fonts/, from Will's own files). Images stream from NGA's IIIF server (`api.nga.gov/iiif`). If the browser can't read them into WebGL (CORS), the page falls back to plain `<img>` tiles.
- Light and dark themes: the head script picks one before first paint (saved choice in `gw-theme`, else the system setting). CSS tokens switch on `html[data-theme]`; the shaders tween a `uDark` uniform.
- Boards are kept in localStorage. Export/import on the Boards page moves them between browsers.
- After changing anything in js/ or css/, run `python3 tools/version.py`. It stamps content hashes into each page's import map so visitors don't get stale cached code after a deploy.
- Vendored: three.js 0.180.0, @barba/core 2.10.3, lenis 1.1.20. No build step.
- Add `?debug` to a URL to see barba's transition logs. `window.__gw` exposes the renderer state.

## Refreshing the data

```sh
git clone --depth 1 https://github.com/NationalGalleryOfArt/opendata /tmp/nga
python3 tools/build.py /tmp/nga/data data
```
