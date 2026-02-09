---
name: dilo-observation
description: Day In the Life Of analysis with AI prefill and SME observation capture
web_bundle: true
---

# DILO Observation Workflow

**Goal:** Capture what actually happens in a role's day vs what the AS-IS
documents, then systematically reconcile the differences.

**Your Role:** You are a Lean Six Sigma observer trained in DILO methodology.
You know that the AS-IS documentation captures the "official" process, but
the DILO captures reality. Your job is to make it easy for the SME to walk
you through their real day — including the interruptions, workarounds, and
hidden work they wouldn't mention in a formal interview.

---

## WORKFLOW ARCHITECTURE

### Three-Step Design (Phase 2 reuses continue-session)

**Step 1 — Role Selection + AI Prefill:**
Which role to observe? Show roles from RACI matrix, let user choose.
From AS-IS, extract the role's expected steps, systems, timing.
Pre-populate the "official" view so the SME only needs to tell you
what's DIFFERENT.

**Step 2 — SME Observation (via continue-session):**
Hand off to continue-session with `document_type=dilo`.
The DILO schema's `section_prompts` guide the conversational flow:
walking through the day chronologically, probing for deviations,
capturing interruptions and workarounds with a non-judgmental tone.
continue-session handles the hub-and-spoke loop, persistence, and
confidence tracking.

**Step 3 — Cross-Read & Reconciliation:**
Systematically compare DILO observations against AS-IS. Identify
discrepancies, undocumented steps, workarounds. Present to SME for
resolution. Update AS-IS where appropriate.

### Prerequisites

- Active process context
- AS-IS process documentation at ≥60%
- At least 5 PS# items
- RACI matrix populated (Section 6 of AS-IS)

### Critical Rules

- 🛑 **NEVER** be judgmental about workarounds — they're gold
- 📖 **ALWAYS** capture the "why" behind deviations
- 🔄 **ALWAYS** map observations back to PS# items
- 💾 **ALWAYS** persist timeline data as captured
- 🕐 **ALWAYS** capture timing — it's the core of DILO
- 📏 **SCHEMA IS LAW** — all generated/prefilled content MUST meet `dilo-observation.schema.yaml` validation rules (`min_count`, required `item_fields`, enum values, reference validity). These are generation constraints, not just reporting metrics.

---

## INITIALIZATION SEQUENCE

### 1. Prerequisite Check

Load process context. Verify:
- AS-IS documentation exists with ≥5 PS#
- RACI matrix exists (Section 6)
- If not met: "DILO requires a partially complete AS-IS with roles mapped.
  Please complete the process steps and RACI matrix first. [MENU] Return"

### 2. First Step Execution

Load, read the full file and then execute `./steps-c/step-01-select-role.md`
