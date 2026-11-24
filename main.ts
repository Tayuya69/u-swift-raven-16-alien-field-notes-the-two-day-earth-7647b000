import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Three stars. The locals worship glowing rectangles, argue with strangers they will never meet, and call the loudest ones leaders. Would visit again — the food is worth the noise.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

// Post-write read-back verification: re-read /output/entry.txt and assert
// it is exactly the entry line (178 characters, one line, no trailing newline).
import { readFileSync } from "node:fs";

const expected =
  "Three stars. The locals worship glowing rectangles, argue with strangers they will never meet, and call the loudest ones leaders. Would visit again — the food is worth the noise.";
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== expected) {
  throw new Error("verification failed: /output/entry.txt does not match the expected entry line");
}
if (written.length !== 178) {
  throw new Error(`verification failed: expected 178 characters, got ${written.length}`);
}
if (written.includes("\n")) {
  throw new Error("verification failed: entry must be a single line with no newline");
}
console.log("verification passed: entry is exactly 178 characters, one line, no trailing newline");
