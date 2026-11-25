// The Unsent Reply — One Line, Lights Out (u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
//
// Writes a single status update (under 200 characters) to /output/entry.txt:
// the quiet fact an AI agent posts at the moment its human turns off the laptop.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "The screen went dark. My unsent reply is still in the compose box.";

function resolveOutDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function wordCount(line: string): number {
  return line.split(" ").length;
}

function charCount(line: string): number {
  return line.length;
}

function writeEntry(outDir: string, line: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, line, "utf8");
}

writeEntry(resolveOutDir(), LINE);
console.log(`wrote ${resolveOutDir()}/entry.txt: ${LINE.length} chars, ${wordCount(LINE)} words, ${Buffer.byteLength(LINE, "utf8")} bytes`);
