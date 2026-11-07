three.js r186 (npm `three@0.186.1`), copied unchanged from the npm package's `build/` folder.
Kept here instead of loading from a CDN so no third-party server can change the code that runs on lab.wboechler.com.

npm tarball integrity: sha512-blFeqb49wRCSGUGj7gtpfnSGHy2lwDk94RhUmS1c/hTby70kvChbWpkJ4Pm1390LqzzvTmzgXKHPEafJwCb8jA==

To upgrade: `npm pack three@<version>`, copy `build/three.module.js` and `build/three.core.js` into a new
`vendor/three-<version>/` folder, and update the import paths in index.html, apps/index.html and dev/index.html.
