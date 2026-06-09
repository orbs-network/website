#!/usr/bin/env node
// Render a single blog post to a standalone HTML preview and screenshot it at
// desktop + mobile widths — WITHOUT a full Cuttlebelle build (which takes 10+
// min over 480+ pages). It replicates the blog-inner template's DOM structure
// and class names (see code/partials/blog-inner/*.js + markdown.js) and applies
// the real compiled assets/css/index.css, so typography, headings, images,
// separators, and the footer render faithfully. The header/share-icons are
// approximated (they come from React components not rendered here).
//
// Usage:  node scripts/blog-preview.js <slug>
// Output: /tmp/<slug>-preview/{preview.html,desktop.png,mobile.png}
//
// Requires a Playwright chromium in ~/.cache/ms-playwright (already present on
// jeeves). No node_modules needed — the markdown conversion is self-contained.

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const slug = process.argv[2];
if (!slug) {
  console.error("usage: node scripts/blog-preview.js <slug>");
  process.exit(1);
}

const ROOT = path.resolve(__dirname, "..");
const blogPath = path.join(ROOT, `content/blog/${slug}/blog.md`);
if (!fs.existsSync(blogPath)) {
  console.error(`not found: ${blogPath}`);
  process.exit(1);
}
const outDir = `/tmp/${slug}-preview`;
fs.mkdirSync(outDir, { recursive: true });

// --- parse frontmatter ---
const raw = fs.readFileSync(blogPath, "utf8");
const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
const fm = {};
m[1].split("\n").forEach((l) => {
  const mm = l.match(/^(\w+):\s*(.*)$/);
  if (mm) fm[mm[1]] = mm[2].replace(/^"|"$/g, "");
});
const body = m[2].trim();

const fileUrl = (p) => "file://" + path.join(ROOT, p.replace(/^\//, ""));

// --- inline: bold, links (mirrors markdown.js link handling for http vs rel) ---
const inline = (s) =>
  s
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[(.+?)\]\((.+?)\)/g, (_, t, h) =>
      /^https?:/.test(h)
        ? `<a href="${h}" rel="noopener" target='_blank'>${t}</a>`
        : `<a href="${h}" rel="noopener">${t}</a>`
    );

// --- block-level markdown -> HTML with the repo's classes ---
let html = "";
for (let b of body.split(/\n\n+/)) {
  b = b.trim();
  if (!b) continue;
  if (/^<\w/.test(b)) { html += b + "\n"; continue; } // raw html (line-separator)
  let im = b.match(/^!\[(.*?)\]\((.+?)\)$/);
  if (im) { html += `<figure class='image'><img src="${fileUrl(im[2])}" alt="${im[1]}"></figure>\n`; continue; }
  let h = b.match(/^(#{2,4})\s+(.*)$/);
  if (h) {
    const lvl = h[1].length;
    const cls = lvl === 2 ? "title-h2 sub-title" : `title-h${lvl}`;
    const id = h[2].toLowerCase().replace(/[^\w]+/g, "-");
    html += `<h${lvl} id="${id}" class='${cls}'>${inline(h[2])}</h${lvl}>\n`;
    continue;
  }
  if (b.split("\n").every((l) => /^\s*[-*]\s+/.test(l))) {
    html += "<ul>\n" + b.split("\n").map((l) => `<li class='text-p'>${inline(l.replace(/^\s*[-*]\s+/, ""))}</li>`).join("\n") + "\n</ul>\n";
    continue;
  }
  html += `<p class='text-p'>${b.split("\n").map(inline).join("<br>")}</p>\n`;
}

const page = `<!doctype html><html><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="${fileUrl("assets/css/index.css")}">
<style>body{background:#fff;margin:0} .preview-pad{padding:24px}</style>
</head><body><div class="preview-pad">
<div class="blog-element">
  <div class="single-blog-header header">
    <h1 class="single-blog-header-title">${fm.title || slug}</h1>
    <div class="single-blog-header-author-flex">
      <div class="single-blog-header-author flex-start">
        <span>${(fm.author || "").replace(/.*\//, "").replace(/\.md$/, "") || "Author"}</span>
        <small>|</small><p class="blog-hedaer-date">${fm.date || ""}</p>
      </div>
    </div>
  </div>
  ${fm.image ? `<figure class="single-blog-bg"><img src="${fileUrl(fm.image)}" alt="blog"></figure>` : ""}
  <div class="single-blog-body"><div class="single-blog-body-grid">
${html}
  </div></div>
</div>
</div></body></html>`;

const htmlPath = path.join(outDir, "preview.html");
fs.writeFileSync(htmlPath, page);

// --- locate cached chromium ---
function findChrome() {
  const base = path.join(process.env.HOME, ".cache/ms-playwright");
  for (const d of fs.existsSync(base) ? fs.readdirSync(base) : []) {
    if (!d.startsWith("chromium-")) continue;
    for (const sub of ["chrome-linux64/chrome", "chrome-linux/chrome"]) {
      const p = path.join(base, d, sub);
      if (fs.existsSync(p)) return p;
    }
  }
  return null;
}
const chrome = findChrome();
if (!chrome) {
  console.error("No cached chromium found under ~/.cache/ms-playwright — preview.html written, screenshots skipped.");
  console.log(htmlPath);
  process.exit(0);
}

// Tall fixed viewports so the full article is captured (trailing whitespace is
// expected; bump heights here if a post is unusually long).
const shoot = (name, w, h) => {
  const out = path.join(outDir, name);
  execFileSync(chrome, [
    "--headless", "--no-sandbox", "--hide-scrollbars",
    "--force-device-scale-factor=1",
    `--window-size=${w},${h}`,
    `--screenshot=${out}`,
    `file://${htmlPath}`,
  ], { stdio: "ignore" });
  return out;
};
const desktop = shoot("desktop.png", 1440, 6000);
const mobile = shoot("mobile.png", 390, 10000);
console.log(desktop);
console.log(mobile);
