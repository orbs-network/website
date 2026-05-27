#!/usr/bin/env bash
#
# blog-pull.sh — pull a Google Doc + embedded images for a new blog post.
#
# Usage:
#   scripts/blog-pull.sh <slug> <docId> [--force]
#
# Example:
#   scripts/blog-pull.sh Orbs-V5-Update 1Yqygde7OyrCQZyU3qPRMQy-yr0aR3-jaDfQ152ScfKU
#
# Outputs:
#   /tmp/<slug>-pull/post.md          — raw markdown export from Google Docs
#   /tmp/<slug>-pull/post.docx        — docx export (kept for reference)
#   assets/img/blog/<slug>/imageN.<ext>  — embedded images, copied in order
#
# Requires:
#   - gog CLI installed and authed (https://gogcli.sh)
#   - GOG_ACCOUNT env var, or default account configured for sukh@orbs.com
#
# The script only stages files. The agent (or you) still composes
# content/blog/<slug>/{index.yml,body.md,blog.md} and registers the post in
# content/blog/blogs.md — see CLAUDE.md "Adding Blog Posts".

set -euo pipefail

ACCOUNT="${GOG_ACCOUNT:-sukh@orbs.com}"

usage() {
  cat >&2 <<EOF
Usage: $0 <slug> <docId> [--force]

  <slug>   e.g. Orbs-V5-Update
  <docId>  Google Doc ID (the part of the URL between /d/ and /edit)
  --force  Overwrite assets/img/blog/<slug>/ if it already has files

Reads gog account from GOG_ACCOUNT (currently: $ACCOUNT).
EOF
  exit 2
}

if [[ $# -lt 2 ]]; then
  usage
fi

SLUG="$1"
DOC_ID="$2"
FORCE="${3:-}"

if [[ -z "$SLUG" || -z "$DOC_ID" ]]; then
  usage
fi

if ! command -v gog >/dev/null 2>&1; then
  echo "error: gog CLI not found on PATH — see https://gogcli.sh" >&2
  exit 1
fi

REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || true)"
if [[ -z "$REPO_ROOT" ]]; then
  echo "error: not inside a git repository" >&2
  exit 1
fi

WORK_DIR="/tmp/${SLUG}-pull"
IMG_DIR="${REPO_ROOT}/assets/img/blog/${SLUG}"

# Guard against accidental overwrite of an existing image dir.
if [[ -d "$IMG_DIR" ]] && [[ -n "$(ls -A "$IMG_DIR" 2>/dev/null)" ]]; then
  if [[ "$FORCE" != "--force" ]]; then
    echo "error: $IMG_DIR already has files; pass --force to overwrite" >&2
    exit 1
  fi
  rm -rf "$IMG_DIR"
fi

rm -rf "$WORK_DIR"
mkdir -p "$WORK_DIR" "$IMG_DIR"

echo "[1/4] Exporting markdown..."
gog docs export "$DOC_ID" \
  --account "$ACCOUNT" \
  --format md \
  --out "$WORK_DIR/post.md" >/dev/null

echo "[2/4] Downloading docx (for embedded images)..."
gog drive download "$DOC_ID" \
  --account "$ACCOUNT" \
  --format docx \
  --out "$WORK_DIR/post.docx" >/dev/null

echo "[3/4] Extracting images from docx..."
unzip -qo "$WORK_DIR/post.docx" -d "$WORK_DIR/docx-extracted/"

MEDIA_DIR="$WORK_DIR/docx-extracted/word/media"
if [[ -d "$MEDIA_DIR" ]]; then
  # Copy media in lexical order — Google Docs names them image1, image2, ...
  # which is also the insertion order in the document.
  i=1
  # shellcheck disable=SC2045
  for src in $(ls -1 "$MEDIA_DIR" | sort -V); do
    ext="${src##*.}"
    cp "$MEDIA_DIR/$src" "$IMG_DIR/image${i}.${ext}"
    i=$((i + 1))
  done
  IMG_COUNT=$((i - 1))
else
  IMG_COUNT=0
fi

echo "[4/4] Done."
echo
echo "Markdown:  $WORK_DIR/post.md"
echo "Images:    $IMG_DIR ($IMG_COUNT file(s))"
if [[ "$IMG_COUNT" -gt 0 ]]; then
  ls -1 "$IMG_DIR" | sed 's/^/             /'
fi
echo
echo "Next: compose content/blog/$SLUG/{index.yml,body.md,blog.md} per CLAUDE.md,"
echo "      then register $SLUG/blog.md at the top of content/blog/blogs.md list:."
