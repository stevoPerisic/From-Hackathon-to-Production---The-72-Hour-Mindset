import fs from "node:fs";
import path from "node:path";

const exportDirs = ["exports/pdf", "exports/epub", "exports/docx"];

for (const dir of exportDirs) {
  fs.mkdirSync(path.resolve(dir), { recursive: true });
}

console.log("Build scaffold complete.");
console.log("Export directories are ready:");
for (const dir of exportDirs) {
  console.log(`- ${dir}`);
}
