import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Locate the image next to this program file, from the file's own URL.
// Never rely on the working directory the program is run from.
const programDir = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(programDir, "entry.png");

if (!existsSync(sourceImage)) {
  throw new Error("entry.png not found next to main.ts: " + sourceImage);
}

// The entry must be a whole PNG: check the 8-byte PNG signature before copying,
// so a truncated or non-PNG file fails loudly instead of reaching the judge.
const header = readFileSync(sourceImage).subarray(0, 8);
const pngSignature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!header.equals(pngSignature)) {
  throw new Error("entry.png is not a PNG file: bad signature");
}

const outputDir = "/output";
mkdirSync(outputDir, { recursive: true });

const outputImage = join(outputDir, "entry.png");
copyFileSync(sourceImage, outputImage);

// Verify the copy: the output must exist and be byte-for-byte the same size
// as the source, so a partial write can never pass as a finished entry.
if (!existsSync(outputImage) || statSync(outputImage).size !== statSync(sourceImage).size) {
  throw new Error("copy verification failed: /output/entry.png does not match entry.png");
}
console.log(`entry.png copied to /output/entry.png (${statSync(outputImage).size} bytes, verified)`);
