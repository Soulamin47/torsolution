import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pub = path.join(__dirname, "..", "public");
const SRC = path.join(pub, "logo1.png");

// ── 1. Load raw RGBA ────────────────────────────────────────────────────────
const { data, info } = await sharp(SRC)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info; // channels === 4

// ── 2. Key out the dark navy background ─────────────────────────────────────
// Background max-channel is ~13; content (teal/white/grey) is much brighter.
// Ramp alpha from the brightest channel so anti-aliased edges fade smoothly.
const T0 = 16; // below → fully transparent
const T1 = 60; // above → fully opaque
for (let i = 0; i < data.length; i += channels) {
  const m = Math.max(data[i], data[i + 1], data[i + 2]);
  let a;
  if (m <= T0) a = 0;
  else if (m >= T1) a = 255;
  else a = Math.round(((m - T0) / (T1 - T0)) * 255);
  data[i + 3] = a;
}

// ── 3. Row/column occupancy to find content + the vertical gap ──────────────
const ALPHA_MIN = 40;
const rowHas = new Array(height).fill(false);
const colHas = new Array(width).fill(false);
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const a = data[(y * width + x) * channels + 3];
    if (a > ALPHA_MIN) {
      rowHas[y] = true;
      colHas[x] = true;
    }
  }
}

function bbox(rowMask, colMask) {
  let top = rowMask.findIndex(Boolean);
  let bottom = rowMask.length - 1 - [...rowMask].reverse().findIndex(Boolean);
  let left = colMask.findIndex(Boolean);
  let right = colMask.length - 1 - [...colMask].reverse().findIndex(Boolean);
  return { left, top, width: right - left + 1, height: bottom - top + 1 };
}

const fullTop = rowHas.findIndex(Boolean);
const fullBottom = height - 1 - [...rowHas].reverse().findIndex(Boolean);

// Find the largest empty (no content) band between fullTop and fullBottom →
// that's the gap between the "TS." monogram and the "TOR_SOLUTION" wordmark.
let bestGapStart = -1,
  bestGapLen = 0,
  curStart = -1;
for (let y = fullTop; y <= fullBottom; y++) {
  if (!rowHas[y]) {
    if (curStart === -1) curStart = y;
  } else {
    if (curStart !== -1) {
      const len = y - curStart;
      if (len > bestGapLen) {
        bestGapLen = len;
        bestGapStart = curStart;
      }
      curStart = -1;
    }
  }
}

const monogramBottom = bestGapStart === -1 ? fullBottom : bestGapStart - 1;

// Column mask restricted to the monogram rows, for a tight horizontal crop.
const monoColHas = new Array(width).fill(false);
for (let y = fullTop; y <= monogramBottom; y++) {
  for (let x = 0; x < width; x++) {
    if (data[(y * width + x) * channels + 3] > ALPHA_MIN) monoColHas[x] = true;
  }
}

const PAD = 12;
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

// Full lockup bbox (transparent, trimmed) + small padding
const full = bbox(rowHas, colHas);
const fullPadded = {
  left: clamp(full.left - PAD, 0, width),
  top: clamp(full.top - PAD, 0, height),
  width: clamp(full.width + 2 * PAD, 1, width - clamp(full.left - PAD, 0, width)),
  height: clamp(full.height + 2 * PAD, 1, height - clamp(full.top - PAD, 0, height)),
};

// Monogram bbox
const monoLeft = monoColHas.findIndex(Boolean);
const monoRight = width - 1 - [...monoColHas].reverse().findIndex(Boolean);
const mono = {
  left: clamp(monoLeft - PAD, 0, width),
  top: clamp(fullTop - PAD, 0, height),
  width: clamp(monoRight - monoLeft + 1 + 2 * PAD, 1, width),
  height: clamp(monogramBottom - fullTop + 1 + 2 * PAD, 1, height),
};
// keep mono crop within bounds
mono.width = clamp(mono.width, 1, width - mono.left);
mono.height = clamp(mono.height, 1, height - mono.top);

console.log("source:", width, "x", height);
console.log("full lockup bbox:", fullPadded);
console.log("gap rows:", bestGapStart, "len", bestGapLen);
console.log("monogram bbox:", mono);

const base = sharp(Buffer.from(data), { raw: { width, height, channels } });

await base
  .clone()
  .extract(fullPadded)
  .png()
  .toFile(path.join(pub, "logo-full.png"));

await base
  .clone()
  .extract(mono)
  .png()
  .toFile(path.join(pub, "logo-mark.png"));

console.log("✓ wrote public/logo-full.png and public/logo-mark.png");
