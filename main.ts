import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Locate the image next to this program file, from the file's own URL.
// Never rely on the working directory the program is run from.
const programDir = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(programDir, "entry.png");

if (!existsSync(sourceImage)) {
  throw new Error("entry.png not found next to main.ts: " + sourceImage);
}

const outputDir = "/output";
mkdirSync(outputDir, { recursive: true });

copyFileSync(sourceImage, join(outputDir, "entry.png"));
console.log("entry.png copied to /output/entry.png");
