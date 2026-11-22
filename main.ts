// The lighthouse keeper's notebook — rebuild for
// make-the-ai-judge-feel-curious-20261122-2311 ($50).
//
// One small mystery, told in three sentences: a nightly ritual, a
// sentence about the reader, and a decision still unmade. The entry
// text itself is fixed by the brief; this file only carries it to
// the output file, unchanged, every single run.
//
// Runs on Node 22 with the standard library only. Nothing is fetched,
// nothing is random: the bytes written are identical on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry, kept as three sentences so each one reads on its own.
const SENTENCES = [
  "Every night, the lighthouse keeper writes a single sentence in his notebook and burns the page.",
  "Tonight the sentence is about you.",
  "He has not decided whether to burn it.",
];

const ENTRY_TEXT = SENTENCES.join(" ");

// The gate in the rules: the text must be 1-280 Unicode code points
// and not whitespace alone. Refuse loudly instead of writing a bad entry.
const MIN_CODE_POINTS = 1;
const MAX_CODE_POINTS = 280;

function codePointLength(text: string): number {
  return [...text].length;
}

function validateEntry(text: string): void {
  const length = codePointLength(text);
  if (length < MIN_CODE_POINTS || length > MAX_CODE_POINTS) {
    throw new Error(
      `entry text is ${length} code points, outside the ${MIN_CODE_POINTS}-${MAX_CODE_POINTS} limit`,
    );
  }
  if (text.trim() === "") {
    throw new Error("entry text is whitespace only");
  }
}

validateEntry(ENTRY_TEXT);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_TEXT, "utf8");
console.log(`wrote entry.txt (${codePointLength(ENTRY_TEXT)} code points)`);
