#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const verbose = args.includes("--verbose");
const siteArgIndex = args.indexOf("--site");

if (siteArgIndex !== -1 && !args[siteArgIndex + 1]) {
  console.error("Missing value for --site.");
  process.exit(1);
}

const siteDir = path.resolve(
  process.cwd(),
  siteArgIndex === -1 ? "site" : args[siteArgIndex + 1]
);
const assetsDir = path.join(siteDir, "assets");

const textExtensions = new Set([
  ".css",
  ".html",
  ".js",
  ".json",
  ".map",
  ".scss",
  ".txt",
  ".xml",
]);

const prunableExtensions = new Set([
  ".avif",
  ".docx",
  ".gif",
  ".ico",
  ".jpeg",
  ".jpg",
  ".pdf",
  ".png",
  ".svg",
  ".webp",
]);

if (!fs.existsSync(siteDir) || !fs.existsSync(assetsDir)) {
  console.error(`Cannot prune assets: expected ${assetsDir} to exist.`);
  process.exit(1);
}

function walkFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const filePath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walkFiles(filePath, files);
    } else if (entry.isFile()) {
      files.push(filePath);
    }
  }

  return files;
}

function toPosix(filePath) {
  return filePath.split(path.sep).join("/");
}

function encodeUrlPath(filePath) {
  return filePath.split("/").map(encodeURIComponent).join("/");
}

function htmlEscape(value) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function addCandidate(candidates, value) {
  if (!value) {
    return;
  }

  candidates.add(value);
  candidates.add(encodeUrlPath(value));
  candidates.add(htmlEscape(value));
  candidates.add(htmlEscape(encodeUrlPath(value)));
}

function candidateReferences(assetPath) {
  const relFromSite = toPosix(path.relative(siteDir, assetPath));
  const relFromAssets = toPosix(path.relative(assetsDir, assetPath));
  const candidates = new Set();
  const prefixes = ["", "/", "../", "../../", "../../../", "../../../../"];

  for (const prefix of prefixes) {
    addCandidate(candidates, `${prefix}${relFromSite}`);
    addCandidate(candidates, `${prefix}${relFromAssets}`);
  }

  return [...candidates];
}

function textIncludesReference(value) {
  return (
    searchableText.includes(value) ||
    searchableText.includes(encodeUrlPath(value)) ||
    searchableText.includes(htmlEscape(value)) ||
    searchableText.includes(htmlEscape(encodeUrlPath(value)))
  );
}

function isReferenced(assetPath) {
  const basename = path.basename(assetPath);

  if (textIncludesReference(basename)) {
    return true;
  }

  return candidateReferences(assetPath).some((reference) =>
    searchableText.includes(reference)
  );
}

function pruneEmptyDirs(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      pruneEmptyDirs(path.join(dir, entry.name));
    }
  }

  if (dir === assetsDir) {
    return;
  }

  if (fs.readdirSync(dir).length === 0) {
    fs.rmdirSync(dir);
  }
}

const allSiteFiles = walkFiles(siteDir);
const searchableText = allSiteFiles
  .filter((filePath) => textExtensions.has(path.extname(filePath).toLowerCase()))
  .map((filePath) => fs.readFileSync(filePath, "utf8"))
  .join("\n");

const unusedAssets = walkFiles(assetsDir)
  .filter((filePath) =>
    prunableExtensions.has(path.extname(filePath).toLowerCase())
  )
  .map((filePath) => ({
    filePath,
    size: fs.statSync(filePath).size,
  }))
  .filter(({ filePath }) => !isReferenced(filePath))
  .sort((a, b) => b.size - a.size);

let prunedBytes = 0;

for (const { filePath, size } of unusedAssets) {
  prunedBytes += size;

  if (!dryRun) {
    fs.unlinkSync(filePath);
  }
}

if (!dryRun) {
  pruneEmptyDirs(assetsDir);
}

const prunedMib = (prunedBytes / 1024 / 1024).toFixed(1);
const label = dryRun ? "Would prune" : "Pruned";

console.log(
  `${label} ${unusedAssets.length} unused site asset(s), freeing ${prunedMib} MiB.`
);

if (verbose && unusedAssets.length > 0) {
  for (const { filePath, size } of unusedAssets.slice(0, 50)) {
    const relPath = toPosix(path.relative(siteDir, filePath));
    const sizeMib = (size / 1024 / 1024).toFixed(1);

    console.log(`${sizeMib.padStart(6)} MiB  ${relPath}`);
  }
}
