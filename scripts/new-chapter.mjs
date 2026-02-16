import fs from "node:fs";
import path from "node:path";

const [partDir, chapterNum, slug, title] = process.argv.slice(2);

if (!partDir || !chapterNum || !slug || !title) {
  console.log(`Usage:
  npm run new:chapter -- <partDir> <chapterNum> <slug> <title>

Example:
  npm run new:chapter -- book/01-part-i-mindset 04 t-shaped-team "The Rise of the T-Shaped Team"
`);
  process.exit(1);
}

const num = String(chapterNum).padStart(2, "0");
const filename = `${num}-${slug}.md`;
const fullPath = path.join(partDir, filename);

if (fs.existsSync(fullPath)) {
  console.error(`File already exists: ${fullPath}`);
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);

const template = `---
title: "${title}"
chapter: ${parseInt(chapterNum, 10)}
part: ""
status: "draft"
kv_as: ["Time-to-Market"]
dora: ["Lead Time"]
audience: ["Enterprise leaders", "Product/Engineering managers"]
last_updated: "${today}"
---

# ${title}

> **Chapter outcome (1 sentence):**  
> By the end of this chapter, you will be able to …

## Why this matters in enterprise
## The core idea
## A quick story (real or composite)
## The framework
## What good looks like
## Common failure modes
## EBM + DORA mapping
## AI augmentation (practical)
## Chapter checklist (Definition of Done)
- [ ] 
## Reflection prompts
## TL;DR
`;

fs.mkdirSync(partDir, { recursive: true });
fs.writeFileSync(fullPath, template, "utf8");
console.log(`Created: ${fullPath}`);
