# From Hackathon to Production — The 72-Hour Mindset

This repository contains the source manuscript (Markdown) for the book.

## Canonical references
- Concept north star: `/drafts/book-concept-north-star.md`
- Canonical chapter order: `/CHAPTER_MANIFEST.md`

## How this repo works
- Chapters live in `/book/**`
- Draft fragments live in `/drafts/**`
- Use Issues for feedback and proposals
- Use PRs to review chapter changes

## Working agreements (Definition of Done)
A chapter is “publish-ready” when it:
- states an outcome
- includes a real enterprise scenario
- maps to EBM KVA(s)
- includes at least one AI augmentation pattern
- ends with TL;DR + reflection prompts

## Commands
- `npm ci`
- `npm run lint:md`
- `npm run new:chapter -- <partDir> <num> <slug> <title>`
