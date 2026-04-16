/**
 * Image optimization script
 * Usage: node scripts/optimize-images.mjs
 *
 * - Walks every folder under public/media/images/
 * - Compresses JPEGs and PNGs in-place
 * - Skips files already under the size threshold
 * - Skips files already processed (tracked in scripts/.optimized-manifest.json)
 * - Never upscales — only downscales if wider than max width
 * - Prints a summary of savings
 */

import fs from "fs";
import path from "path";
import crypto from "crypto";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const sharp = require("sharp");

// ── Config ─────────────────────────────────────────────────────────────────
const ROOT = path.resolve("public/media/images");

// Manifest file — tracks which files have already been optimized
const MANIFEST_PATH = path.resolve("scripts/.optimized-manifest.json");

// Skip files already under this size (bytes) — no point reprocessing small files
const SKIP_UNDER_BYTES = 300 * 1024; // 300 KB

// Max width in pixels — images wider than this are resized down.
// 2400px is more than enough for any full-bleed desktop display.
const MAX_WIDTH = 2400;

// JPEG quality (1–100). 82 is visually lossless for web at typical sizes.
const JPEG_QUALITY = 82;

// PNG compression level (0–9). 8 = good compression, slow but runs once.
const PNG_COMPRESSION = 8;

// Extensions to process
const SUPPORTED = new Set([".jpg", ".jpeg", ".png"]);
// ───────────────────────────────────────────────────────────────────────────

let totalOriginal = 0;
let totalOptimized = 0;
let filesProcessed = 0;
let filesSkipped = 0;
let errors = 0;

// ── Manifest helpers ────────────────────────────────────────────────────────

function loadManifest() {
  if (!fs.existsSync(MANIFEST_PATH)) return {};
  try {
    return JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8"));
  } catch {
    return {};
  }
}

function saveManifest(manifest) {
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
}

function fileHash(filePath) {
  const buf = fs.readFileSync(filePath);
  return crypto.createHash("md5").update(buf).digest("hex");
}

// ───────────────────────────────────────────────────────────────────────────

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(full));
    } else if (entry.isFile() && SUPPORTED.has(path.extname(entry.name).toLowerCase())) {
      files.push(full);
    }
  }
  return files;
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function optimizeFile(filePath, manifest) {
  const ext = path.extname(filePath).toLowerCase();
  const relPath = path.relative(ROOT, filePath);
  const originalSize = fs.statSync(filePath).size;

  if (originalSize < SKIP_UNDER_BYTES) {
    filesSkipped++;
    return;
  }

  // Check manifest — skip if this file was already optimized (hash matches)
  const currentHash = fileHash(filePath);
  if (manifest[relPath] && manifest[relPath].hash === currentHash) {
    filesSkipped++;
    return;
  }

  try {
    const inputBuffer = fs.readFileSync(filePath);
    const image = sharp(inputBuffer);
    const meta = await image.metadata();

    // Only resize if wider than MAX_WIDTH — never upscale
    const needsResize = meta.width && meta.width > MAX_WIDTH;

    let pipeline = image;
    if (needsResize) {
      pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
    }

    if (ext === ".png") {
      pipeline = pipeline.png({ compressionLevel: PNG_COMPRESSION, effort: 8 });
    } else {
      pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
    }

    const optimizedBuffer = await pipeline.toBuffer();
    const optimizedSize = optimizedBuffer.length;

    if (optimizedSize < originalSize) {
      fs.writeFileSync(filePath, optimizedBuffer);
      const saving = originalSize - optimizedSize;
      const pct = ((saving / originalSize) * 100).toFixed(1);
      console.log(
        `  ✓ ${relPath.padEnd(55)} ${formatBytes(originalSize).padStart(9)} → ${formatBytes(optimizedSize).padStart(9)}  (−${pct}%)`
      );
      totalOriginal += originalSize;
      totalOptimized += optimizedSize;
      filesProcessed++;
    } else {
      // Already well-optimized, leave it alone
      filesSkipped++;
    }

    // Record in manifest either way — file has been evaluated at this content
    const finalHash = fileHash(filePath);
    manifest[relPath] = { hash: finalHash, size: fs.statSync(filePath).size };
  } catch (err) {
    console.error(`  ✗ ERROR: ${filePath}\n    ${err.message}`);
    errors++;
  }
}

async function main() {
  console.log(`\nScanning ${ROOT}...\n`);

  if (!fs.existsSync(ROOT)) {
    console.error(`Directory not found: ${ROOT}`);
    process.exit(1);
  }

  const manifest = loadManifest();
  const files = walk(ROOT);
  console.log(`Found ${files.length} image files. Processing...\n`);

  for (const file of files) {
    await optimizeFile(file, manifest);
  }

  saveManifest(manifest);

  console.log("\n─────────────────────────────────────────────────────────────");
  console.log(`  Files optimized : ${filesProcessed}`);
  console.log(`  Files skipped   : ${filesSkipped} (already optimized or small)`);
  if (errors > 0) console.log(`  Errors          : ${errors}`);
  if (filesProcessed > 0) {
    const saved = totalOriginal - totalOptimized;
    const pct = ((saved / totalOriginal) * 100).toFixed(1);
    console.log(`  Space before    : ${formatBytes(totalOriginal)}`);
    console.log(`  Space after     : ${formatBytes(totalOptimized)}`);
    console.log(`  Total saved     : ${formatBytes(saved)} (−${pct}%)`);
  }
  console.log("─────────────────────────────────────────────────────────────\n");
}

main();
