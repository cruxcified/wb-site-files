#!/usr/bin/env python3
"""Stamp a content hash on every script and the stylesheet so browsers fetch new code after a deploy.

GitHub Pages lets browsers cache files for 10 minutes. Without this, a visitor right after a
deploy can get the new HTML with yesterday's JavaScript and CSS. The import map in each page
sends every module URL (however a file imports it) to `file.js?v=<hash>`, so only files whose
contents changed are fetched again. Run it before committing any change to js/ or css/:

    python3 tools/version.py
"""
import hashlib, json, pathlib, re

root = pathlib.Path(__file__).resolve().parent.parent
h = lambda p: hashlib.sha1(p.read_bytes()).hexdigest()[:8]

imports = {"three": "./vendor/three.module.min.js"}
for p in sorted((root / "js").rglob("*.js")) + sorted((root / "vendor").glob("*.mjs")):
    rel = "./" + p.relative_to(root).as_posix()
    imports[rel] = f"{rel}?v={h(p)}"
imap = '<script type="importmap">' + json.dumps({"imports": imports}, indent=2).replace("\n", "\n  ") + "</script>"

for page in ("index.html", "artwork.html", "boards.html", "cover.html"):
    f = root / page
    s = f.read_text()
    s = re.sub(r'<script type="importmap">.*?</script>', lambda m: imap, s, count=1, flags=re.S)
    s = re.sub(r'href="css/style\.css(\?v=\w+)?"', f'href="css/style.css?v={h(root / "css/style.css")}"', s)
    s = re.sub(r'src="js/main\.js(\?v=\w+)?"', f'src="js/main.js?v={h(root / "js/main.js")}"', s)
    f.write_text(s)
print("stamped", len(imports) - 1, "modules")
