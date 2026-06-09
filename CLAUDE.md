# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Orbs Network website — a static site built with **Cuttlebelle** (React-based static site generator). Content is authored in Markdown with YAML frontmatter; React components render pages server-side. No TypeScript — plain JavaScript/JSX with Babel.

## Important: Do NOT Run Locally

Never run `cuttlebelle`, `yarn watch`, `npm run build`, or any build/dev commands. The site has 480+ pages and takes 10+ minutes to build. There is no way to test blog posts locally — just follow the file formats exactly.

## Deployment

Circle CI on commits to `main` → builds → deploys to GitHub Pages (`gh-pages` branch) at orbs.com. Node 18.

## Primary Workflow: Adding Blog Posts

This repo is primarily used to add new blog posts. The user provides a Google Doc as a link. Pull the doc + embedded images using the `scripts/blog-pull.sh` helper, which uses the [`gog`](https://gogcli.sh) CLI (already installed and authed on jeeves with `sukh@orbs.com`).

### Steps to Add a Blog Post

1. **Create a branch** from `main` named `blog/<slug>` (e.g., `blog/Kodiak-Integrates-dSLTP`).
2. **Create the slug** from the blog title (e.g., "Kodiak Integrates dSLTP" → `Kodiak-Integrates-dSLTP`).
3. **Pull the doc + images:**
   ```bash
   scripts/blog-pull.sh <slug> <docId>
   ```
   - Extracts the doc ID from the URL: `docs.google.com/document/d/<docId>/edit`.
   - Stages the markdown body at `/tmp/<slug>-pull/post.md`.
   - Stages embedded images directly into `assets/img/blog/<slug>/` as `image1.<ext>`, `image2.<ext>`, … (extension preserved from source upload — usually `.jpg` or `.png`).
   - Re-run with `--force` to overwrite if you need to re-pull.
4. **Create `content/blog/<slug>/`** and the three files below.
5. **Create 3 files** in `content/blog/<slug>/`:

#### `index.yml`
```yaml
layout: pages/page
script: blog/index

header:
  - /_shared/navbar/index.md
main: body.md
footer:
  - /_shared/footer/footer.md
subscribe:
  - /_shared/subscribe/subscribe.md
meta_description:
meta_keywords:
title: "Full Blog Title Here"
image: /assets/img/blog/<slug>/image1.<ext>
gdpr:
  - /_shared/gdpr/index.md
```

#### `body.md`
```markdown
---
layout: partials/blog-inner/main
blog:
  - blog.md
bottomSection:
  - /blog/common/blog-bottom-section.md
---

```
This file is identical for every blog post. No body content after frontmatter.

#### `blog.md`
```markdown
---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/<slug>/image1.<ext>
blogUrl: <slug>
date: YYYY-MM-DD
title: "Full Blog Title Here"
author:
  - /blog/common/authors/AuthorName.md
type:
short_description: "1-2 sentence description for listing page"
publish_at: YYYY-MM-DD HH:MM
---

Full markdown body here. Images referenced as:
![alt](/assets/img/blog/<slug>/image1.<ext>)
```

6. **Register the post** in `content/blog/blogs.md` — add `<slug>/blog.md` as the FIRST entry in the `list:` array (newest posts go on top).
7. **Generate a preview** and share it for review (see *Previewing a Post* below).
8. **Commit, push, and open a PR** targeting `main` for review before merging.

### Previewing a Post (without a full build)

The site can't be built locally (480+ pages, 10+ min — see *Do NOT Run Locally*), but a single post can be previewed without a build. `scripts/blog-preview.js` renders one post's `blog.md` into a standalone HTML file using the blog-inner template's exact DOM/classes (`code/partials/blog-inner/*.js` + `markdown.js`) and the real compiled `assets/css/index.css`, then screenshots it at desktop (1440) and mobile (390) widths with the cached Playwright chromium under `~/.cache/ms-playwright`. No `node_modules` or network needed.

```bash
node scripts/blog-preview.js <slug>
# → /tmp/<slug>-preview/{preview.html,desktop.png,mobile.png}
```

Send the two PNGs to the user (e.g. via Telegram) as a pre-merge preview. Caveats: the post-body, headings, images, separators, and footer render faithfully; the **header layout and share icons are approximated** (they come from React components not rendered here), so don't read exact header spacing from the screenshot. The screenshots use tall fixed viewports, so expect trailing whitespace at the bottom; if a post is unusually long and gets cut off, bump the heights in the script.

### Converting the Pulled Markdown to `blog.md`

The markdown coming out of `gog docs export` is close to publishable but needs a few mechanical edits — these are deterministic enough that the agent should do them automatically:

- **Demote heading levels.** Google Docs exports document h1 as `**bold**` and section h2 as `###`. In `blog.md`, sections should be `##` and subsections `###`. Demote `###` → `##` and `####` → `###` throughout.
- **Inline the hero image.** The first image is exported as a reference-style `![][image1]` with the base64 data appended at the file end. Replace with `![](/assets/img/blog/<slug>/image1.<ext>)` and drop the base64 ref-definition.
- **Convert section separators.** Google Docs page/section breaks come through as `---` (horizontal rule). Replace with `<div class='line-separator'> </div>`.
- **Strip the byline line.** The author line (e.g. `**By Ran Hammer · May 2026**`) is redundant — the template renders it from frontmatter. Remove it.
- **Italic TL;DR opening.** Google Docs often italicises the TL;DR — keep it as-is, it renders fine.

### Formatting Rules for blog.md Content

- Image paths must be absolute: `/assets/img/blog/<slug>/imageN.<ext>`
- Use `##` and `###` for headings (not `#`)
- Section dividers use: `<div class='line-separator'> </div>`
- Links use standard markdown: `[text](url)`
- The `type` field in frontmatter is always present but left empty
- Author files are at `content/blog/common/authors/` (e.g., `RanHammer.md`)
- Date format: `YYYY-MM-DD`
- `publish_at` format: `YYYY-MM-DD HH:MM` (e.g., `2026-03-17 11:00`)
- If the Google Doc has a subtitle/tagline, use it as the `short_description` and remove it from the body content
- Remove any author sign-off line at the end of the post (e.g., "Written by X") — the author is already in the template frontmatter
- **Every blog post MUST end with the standard "About Orbs" footer** (even if the Google Doc doesn't include it). Add it after the last section, preceded by a `<div class='line-separator'> </div>`. The exact text:

```
**About Orbs**

Orbs is a decentralized Layer-3 (L3) blockchain designed specifically for advanced on-chain trading. Utilizing a Proof-of-Stake consensus, Orbs acts as a supplementary execution layer, facilitating complex logic and scripts beyond the native functionalities of smart contracts. Orbs-powered protocols, including dLIMIT, dTWAP, Liquidity Hub, and Perpetual Hub, push the boundaries of DeFi by introducing CeFi-level execution to on-chain trading.

With a global team of over forty dedicated contributors based in Tel Aviv, London, New York, Tokyo, Seoul, Lisbon, and Limassol, Orbs continues to innovate at the forefront of blockchain technology.

For more information, visit www.orbs.com or join our community:

Telegram: https://t.me/OrbsNetwork

X: https://x.com/orbs_network
```

## Architecture (Reference)

### Content/Code Separation

- **`content/`** — Markdown files with YAML frontmatter. Directory structure maps to URL routes. The `layout` frontmatter property specifies which React component renders the page.
- **`code/partials/`** — React components that render content. Feature-specific subdirectories plus `shared/` for reusable components.
- **`code/pages/page.js`** — Single root page layout wrapping all pages.
- **`code/util/`** — Utility functions (blog helpers, date formatting, URL mapping, language detection).

### Styling

SCSS source in `assets/sass/` compiles to `assets/css/index.css`.

### Custom Markdown

`markdown.js` customizes the Marked renderer with heading classes, special link types (email, disabled, blog), and relative path handling.

### Build Pipeline

`prebuild.sh` reorganizes blog content → Cuttlebelle generates static HTML to `site/` → `build-rss-feed.js` parses built HTML to generate RSS.

### Key Conventions

- Shared content (navbar, footer) lives in `content/_shared/`.
- i18n support for English, Japanese, Korean (date prefixes in `code/consts.js`).
- Base URL switches between localhost:8080 (dev) and https://www.orbs.com (prod) via `IS_DEV` env var in `code/consts.js`.
