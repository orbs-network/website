# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Orbs Network website — a static site built with **Cuttlebelle** (React-based static site generator). Content is authored in Markdown with YAML frontmatter; React components render pages server-side. No TypeScript — plain JavaScript/JSX with Babel.

## Important: Do NOT Run Locally

Never run `cuttlebelle`, `yarn watch`, `npm run build`, or any build/dev commands. The site has 480+ pages and takes 10+ minutes to build. There is no way to test blog posts locally — just follow the file formats exactly.

## Deployment

Circle CI on commits to `main` → builds → deploys to GitHub Pages (`gh-pages` branch) at orbs.com. Node 18.

## Primary Workflow: Adding Blog Posts

This repo is primarily used to add new blog posts. The user provides a Google Doc (either as a link or as downloaded files — a `.md` markdown export and a `.zip` HTML export containing images).

### Steps to Add a Blog Post

1. **Create a branch** from `main` named `blog/<slug>` (e.g., `blog/Kodiak-Integrates-dSLTP`).
2. **Create the slug** from the blog title (e.g., "Kodiak Integrates dSLTP" → `Kodiak-Integrates-dSLTP`)
3. **Create directories:**
   - `content/blog/<slug>/`
   - `assets/img/blog/<slug>/`
4. **Copy images** from the Google Doc export into `assets/img/blog/<slug>/`, naming them `image1.png`, `image2.png`, etc.
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
image: /assets/img/blog/<slug>/image1.png
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
image: /assets/img/blog/<slug>/image1.png
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
![alt](/assets/img/blog/<slug>/image1.png)
```

6. **Register the post** in `content/blog/blogs.md` — add `<slug>/blog.md` as the FIRST entry in the `list:` array (newest posts go on top).
7. **Commit, push, and open a PR** targeting `main` for review before merging.

### Formatting Rules for blog.md Content

- Image paths must be absolute: `/assets/img/blog/<slug>/imageN.png`
- Use `##` and `###` for headings (not `#`)
- Section dividers use: `<div class='line-separator'> </div>`
- Links use standard markdown: `[text](url)`
- The `type` field in frontmatter is always present but left empty
- Author files are at `content/blog/common/authors/` (e.g., `RanHammer.md`)
- Date format: `YYYY-MM-DD`
- `publish_at` format: `YYYY-MM-DD HH:MM` (e.g., `2026-03-17 11:00`)
- If the Google Doc has a subtitle/tagline, use it as the `short_description`
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
