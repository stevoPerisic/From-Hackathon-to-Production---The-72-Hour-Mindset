# Agent Instructions (Codex)

You are working in a book manuscript repo.

## Golden rules
- Make changes as small PR-sized diffs (one chapter or one template change at a time).
- Never rewrite multiple chapters unless explicitly requested.
- Preserve tone: enterprise, pragmatic, evidence-based, no fluff.
- Follow the chapter template structure in `book/_templates/chapter-template.md`.
- Treat `drafts/book-concept-north-star.md` as the concept source of truth.
- Treat `CHAPTER_MANIFEST.md` as the canonical chapter order and naming reference.

## Content rules
- Every chapter must include:
  - A 1-sentence outcome
  - 1 enterprise scenario (real or composite)
  - EBM KVA mapping
  - At least one DORA metric tie-in
  - AI augmentation section with guardrails
  - TL;DR bullets + reflection prompts
- Prefer vertical-slice framing and “measure → decide” loops.

## Repo rules
- Chapters live in `book/**`.
- Draft/rough notes go in `drafts/**`.
- Keep filenames ordered `NN-slug.md`.
- Keep chapter numbers, titles, and paths aligned with `CHAPTER_MANIFEST.md`.

## When unsure
- Ask by creating a GitHub Issue titled: `[Question] <topic>`
- Or leave TODO markers in the chapter with short notes.
