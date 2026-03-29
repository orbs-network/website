#!/usr/bin/env node
// Patches cuttlebelle's files.js to add {force: true} to del.sync()
// This fixes "Cannot delete the current working directory" error
// Checks both local node_modules and global install

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const original = '_del2.default.sync(cleanDirs)';
const patched = '_del2.default.sync(cleanDirs, {force: true})';

function patchFile(filePath) {
  if (!fs.existsSync(filePath)) return false;

  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes(patched)) {
    console.log(`Already patched: ${filePath}`);
    return true;
  }

  if (!content.includes(original)) {
    console.log(`Could not find del.sync call in: ${filePath}`);
    return false;
  }

  content = content.replace(original, patched);
  fs.writeFileSync(filePath, content);
  console.log(`Patched: ${filePath}`);
  return true;
}

// Patch local
patchFile(path.join(__dirname, '..', 'node_modules', 'cuttlebelle', 'dist', 'files.js'));

// Patch global
try {
  const globalRoot = execSync('npm root -g', { encoding: 'utf8' }).trim();
  patchFile(path.join(globalRoot, 'cuttlebelle', 'dist', 'files.js'));
} catch (e) {
  // global not installed, skip
}
