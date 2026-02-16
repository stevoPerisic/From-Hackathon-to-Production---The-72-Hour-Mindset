import fs from "node:fs";
import path from "node:path";

const [partInput, chapterNum, slug, title] = process.argv.slice(2);

const partMap = {
  "01-part-i-mindset": "Part I — Mindset Shift",
  "02-part-ii-teams": "Part II — Teams",
  "03-part-iii-engineering": "Part III — Engineering",
  "04-part-iv-ai": "Part IV — AI",
  "05-part-v-enterprise": "Part V — Enterprise",
  "06-part-vi-playbook": "Part VI — Playbook"
};

const normalizePart = (input = "") => input.replace(/^book\//, "").replace(/\/+$/, "");
const partKey = normalizePart(partInput);
const partTitle = partMap[partKey];

if (!partInput || !chapterNum || !slug || !title) {
  console.log(`Usage:
  npm run new:chapter -- <part> <chapterNum> <slug> <title>

Example:
  npm run new:chapter -- 01-part-i-mindset 04 t-shaped-team "The Rise of the T-Shaped Team"
  npm run new:chapter -- book/01-part-i-mindset 04 t-shaped-team "The Rise of the T-Shaped Team"
`);
  process.exit(1);
}

if (!partTitle) {
  console.error(`Invalid part: ${partInput}`);
  console.error("Valid parts:");
  Object.keys(partMap).forEach((key) => console.error(`- ${key}`));
  process.exit(1);
}

if (!/^\d{1,2}$/.test(chapterNum)) {
  console.error(`Invalid chapter number: ${chapterNum}. Use 1-2 digits (e.g. 3, 04).`);
  process.exit(1);
}

if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
  console.error(`Invalid slug: ${slug}. Use lowercase kebab-case only.`);
  process.exit(1);
}

const num = String(chapterNum).padStart(2, "0");
const filename = `${num}-${slug}.md`;
const partDir = path.join("book", partKey);
const fullPath = path.join(partDir, filename);

if (fs.existsSync(fullPath)) {
  console.error(`File already exists: ${fullPath}`);
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);

const template = `---
title: "${title}"
chapter: ${parseInt(chapterNum, 10)}
part: "${partTitle}"
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
- [ ] Contains one real enterprise example
- [ ] Includes one framework (diagram or structured steps)
- [ ] Has 3-5 observable success signals
- [ ] Maps to at least 1 EBM KVA
- [ ] Includes at least one AI usage pattern
- [ ] Ends with a measurement-driven next step
## Reflection prompts
1. What is your team optimizing for right now?
2. What is your smallest shippable vertical slice this week?
3. What would you stop doing immediately?
## TL;DR
- 3-5 bullets that summarize the chapter.
`;

fs.mkdirSync(partDir, { recursive: true });
fs.writeFileSync(fullPath, template, "utf8");
console.log(`Created: ${fullPath}`);
