---
title: "Why Large Orgs Lose Hackathon Energy"
chapter: 1
part: "Part I - The Enterprise Execution Crisis"
status: "draft"
kv_as: ["Current Value", "Time-to-Market", "Ability to Innovate"]
dora: ["Lead Time", "Deployment Frequency", "Change Failure Rate"]
audience: ["Enterprise leaders", "Product/Engineering managers"]
last_updated: "2026-02-19"
---

# Why Large Orgs Lose Hackathon Energy

> **Chapter outcome (1 sentence):**  
> By the end of this chapter, you will be able to identify where enterprise
> delivery loops break and reset teams around measurable 72-hour slices.

## Why this matters in enterprise
- Most large organizations optimize for utilization, not learning speed.
- Work is split by component teams, so value is delayed by handoffs.
- Governance appears safe, but delayed feedback increases production risk.

## The core idea
Hackathons create urgency because build, release, and feedback happen in a
tight loop. Enterprises lose that advantage when planning cycles, approval
queues, and dependency chains decouple engineering activity from customer
outcomes.

The problem is not effort. The problem is loop time.

## A quick story (real or composite)
A financial services portfolio with 14 Scrum teams reported 86% sprint
completion but still missed adoption targets for three quarters. Work was
marked done at API, frontend, or data boundaries, but customers saw no usable
change until integration windows every 6 weeks. The portfolio shifted to
72-hour vertical slices behind flags, instrumented each slice, and reviewed CV
and T2M every Friday. In 10 weeks, lead time dropped from 19 days to 6 days and
deployment frequency increased from weekly to daily.

## The framework
### The 72-Hour Lens
- **Hypothesis:** If we reduce cross-team handoffs per item, then lead time and adoption will improve.
- **Smallest vertical slice:** One customer-visible workflow step, end-to-end, behind a feature flag.
- **Measure:** Lead time, deployment frequency, slice adoption, error-rate impact.
- **Decision:** Scale for more users, iterate on friction, simplify design, or kill the slice.

## What good looks like
- Teams define work as customer-visible slices, not technical tasks.
- Review conversations start with telemetry, not status reports.
- Leaders ask which KVA moved in the last 72 hours.
- Backlogs contain explicit stop-doing decisions.

## Common failure modes
- Local optimization: teams improve component throughput while overall cycle time worsens.
- Hidden queues: work waits in approval or integration stages with no owner.
- Theater metrics: story points rise while CV and T2M stay flat.

## EBM + DORA mapping
- **Unrealized Value:** Validate unmet need faster through short slice experiments.
- **Current Value:** Ship smaller value increments that reduce user friction sooner.
- **Time-to-Market:** Cut queueing and handoff delay through end-to-end ownership.
- **Ability to Innovate:** Reduce cognitive load by simplifying delivery paths.
- **DORA signals:** Lead time and deployment frequency improve first; change
  failure rate is protected by small blast radius.

## AI augmentation (practical)
- Where LLMs help in this chapter's flow:
  - Discovery: summarize dependency bottlenecks from issue trackers.
  - Refinement: propose smaller vertical-slice boundaries.
  - Testing: generate contract-test scenarios for cross-team interfaces.
  - Release notes / comms: draft rollout and rollback comms for stakeholders.
- Guardrails (privacy, IP, policy):
  - Use redacted datasets only.
  - Require human approval for architecture-impacting suggestions.
  - Prohibit direct model access to regulated production records.

## Chapter checklist (Definition of Done)
- [x] Contains one real enterprise example
- [x] Includes one framework (diagram or structured steps)
- [x] Has 3-5 observable success signals
- [x] Maps to at least 1 EBM KVA
- [x] Includes at least one AI usage pattern
- [x] Ends with a measurement-driven next step

## Reflection prompts
1. Which queue in your delivery path adds the most delay right now?
2. What is the smallest end-to-end slice you can ship in 72 hours?
3. Which ongoing initiative should move to "Stop Doing" this month?

## TL;DR
- Enterprise drag is usually a feedback-loop problem, not a talent problem.
- Vertical slices restore measurable learning speed.
- DORA and KVA signals should drive prioritization and governance decisions.
- 72-hour loops expose low-value work quickly and create room for simplification.
