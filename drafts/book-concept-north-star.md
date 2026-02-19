# Book Concept North Star

## Title
**From Hackathon to Production: The 72-Hour Mindset**  
*An Evidence-Based Playbook for Enterprise Teams Shipping at Scale*

## Core Thesis
Enterprises do not primarily lack talent; they lack tight feedback loops.  
Every 72 hours, a team ships a measurable vertical slice that improves at
least one EBM Key Value Area (KVA), with impact observable in production
telemetry.

If it is not measurable, it is theater.

## Operating Model Layers
- Strategic: EBM-driven investment decisions (CV, T2M, A2I, UV)
- Operational: Scrum with 72-hour micro-cycles inside 2-week sprints
- Technical: CI/CD, trunk-based development, progressive delivery
- Measurement: DORA + flow + business telemetry
- Structural: Stream-aligned teams + enabling platforms
- Cultural: Communities of Practice (CoPs)
- Acceleration: AI/LLM-augmented delivery

## 72-Hour Enterprise Loop
- Day 1: Define KVA-linked hypothesis, slice vertically, implement behind a flag
- Day 2: Deploy via CI/CD, progressively roll out, instrument telemetry
- Day 3: Observe DORA + usage + reliability signals and decide to scale, iterate, simplify, or kill

## Non-Negotiables for Chapters
Every chapter should include:
- 1-sentence outcome
- 1 enterprise scenario (real or composite)
- EBM KVA mapping
- At least one DORA tie-in
- AI augmentation section with explicit guardrails
- TL;DR bullets + reflection prompts

## Definition of Vertical Slice
A vertical slice is customer-visible value plus telemetry, deployment path, and rollback capability.
It spans UI, API, data changes, monitoring, feature flags, analytics events, and tests.

## Scale Assumption
The reference operating context is 12–16 Scrum teams with:
- Stream-aligned ownership
- Enabling teams (platform, DevEx, AI enablement)
- Bounded contexts and API-first contracts
- Reduced handoffs through T-shaped engineering expectations

## Decision Filters
Backlog and architecture decisions must pass these filters:
- Which KVA improves?
- Which metric should move?
- How fast will we know?
- What is the impact on DORA, cognitive load, dependency drag, and A2I?

## Backlog Policy
- No hypothesis -> no story
- No measurable metric -> no priority
- No vertical slice -> split it
- Dependency-heavy -> redesign
- Low KVA impact -> deprioritize
- Zombie feature -> remove

"Stop Doing" is a formal backlog category.

## Governance Baseline
Speed with safety through:
- Feature flags
- Canary/blue-green release patterns
- Automated rollback
- Error budgets and SLO ownership
- Security gates in CI/CD
- Automated compliance evidence capture

## AI Positioning
AI/LLMs are a capability layer, not novelty:
- Team accelerator: code, tests, refactoring, telemetry queries, ADR/runbook drafts
- Measurement engine: log analysis, incident pattern extraction, feedback clustering
- CoP multiplier: prompt libraries, evaluation standards, secure-usage guardrails

## Book-Level Positioning
This is not a Scrum book, DevOps book, AI book, or leadership book in isolation.
It is a unified execution framework for startup-level speed with production-grade rigor.

## Writing Guardrail
Prefer vertical-slice framing and measure -> decide loops over process description.
