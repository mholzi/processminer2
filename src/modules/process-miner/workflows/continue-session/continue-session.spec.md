# Workflow Specification: continue-session

**Module:** process-miner
**Type:** Core Workflow
**Status:** Implemented
**Created:** 2026-02-04
**Updated:** 2026-02-06

---

## Workflow Overview

**Goal:** Guide the user through importing, reviewing, and refining process documentation using a template-driven, section-by-section approach with structured persistence and cross-document validation.

**Description:** Loads existing process context, imports documentation, and enables systematic review and refinement through a hub-and-spoke review cycle with dual persistence (MD + JSON) and discrepancy tracking.

**Workflow Type:** Document Refinement Pipeline (Hub-and-Spoke)

---

## Workflow Structure

### Entry Point

```yaml
---
name: continue-session
description: Template-driven document refinement pipeline for process documentation
web_bundle: true
---
```

### Mode

- [x] Single mode
- [ ] Tri-modal

### Architecture

Hub-and-spoke pattern with step-03 (Section Overview) as the central navigation hub.

```
S1 (Load Context) → S2 (Import Docs) → S3 (Section Overview — HUB)
                                          ↕               ↕
                                    S4 (Section Review)  S4b (Exec Summary)
                                          ↓
                                    S5 (Reconcile & Validate)
                                          ↓
                                    S6 (Resolve Discrepancies) [if any]
                                          ↓
                                    → S3 (HUB — loop)

Exit from S3: [COMP] → Companion Agent | [MENU] → Agent Menu | [EXEC] → S4b
```

---

## Implemented Steps

| Step | File | Goal |
|------|------|------|
| 1 | step-01-load-context.md | Load process context, template + schema, show summary |
| 2 | step-02-import-documents.md | Import docs, extract against schema, validate, persist to MD + JSON |
| 3 | step-03-section-overview.md | HUB — Section status table, navigate review cycle |
| 4 | step-04-section-review.md | Per-subsection review with Approve/QER/Edit/Skip and immediate persistence |
| 4b | step-04b-exec-summary.md | Executive summary — compose or refine from full document review |
| 5 | step-05-write-and-reconcile.md | Cross-document reconciliation and read-across validation |
| 6 | step-06-resolve-discrepancies.md | Resolve, defer, or skip open discrepancies |

---

## Workflow Inputs

### Required Inputs

- Process selection (from list or direct path)

### Optional Inputs

- Specific section to focus on (via hub navigation)
- `companion_agent` — agent to hand off to when user selects [COMP] exit
- `process_id` — specific process to load (otherwise auto-detect)

---

## Workflow Outputs

### Output Format

- [x] Non-document (refines existing documents)

### Output Files

- Updates existing process MD files (sharded or monolithic)
- Updates existing process JSON files
- Updates `_progress.yaml`

---

## Key Design Principles

- **Template-driven**: All section discovery from loaded template + schema, never hardcoded
- **Agent-agnostic**: Works regardless of which agent invokes it
- **Process-agnostic**: Works with any process type
- **Dual persistence**: Every change written to both MD (human-readable) and JSON (AI-readable)
- **Document sharding**: Output sharded by section with monolithic fallback
- **Schema is law**: Per-document `.schema.yaml` is the single source of truth for all validation constraints — no step file restates schema rules
- **Immediate persistence**: Every approval, edit, or QER completion is persisted immediately (step 4) — step 5 focuses on reconciliation only
- **Subsection granularity**: Sections with subsections are reviewed one subsection at a time, never batched
- **Full content display**: Users always see the full rendered text, never summaries or abbreviations
- **Executive summary isolation**: Executive summary is excluded from front-to-back review and can only be composed/refined via dedicated [EXEC] flow after other sections are complete

## Agent Integration

### Primary Agent

Process Documentation Analyst (PDA) — or any agent can invoke this

### Other Agents

- Companion agent for process navigation (exit via hub)

---

## Data Files

| File | Purpose |
|------|---------|
| data/discrepancy-schema.md | Standard format for tracking discrepancies |
| data/qer-modes.md | QER refinement submenu: Quick Questions, Advanced Elicitation, Party Mode |
| data/upload-archive-procedure.md | Upload and archive procedure for imported documents |

---

## Key Behaviours

### Step 2: Import with Schema Validation

- After extracting content from each uploaded document, a full validation pass runs against the per-document `.schema.yaml` before persistence
- Extraction summary includes a Schema Violations column alongside confidence and discrepancies
- Previously imported documents are displayed from the upload manifest before prompting for new ones

### Step 3: Hub Navigation

- **[1-N]** Select a specific section for review (loads step 4)
- **[F2B]** Front-to-back review of all non-approved sections, excluding executive summary (loads step 4 in F2B mode)
- **[EXEC]** Compose or refine executive summary from full document (loads step 4b)
- **[MENU]** Return to invoking agent menu
- **[COMP]** Switch to companion agent (if configured)

### Step 4: Subsection Review

- Sections with subsections are reviewed one at a time — no section-level summary shown first
- Full rendered content displayed for each subsection (never summarized)
- **Auto-fill on load:** If confidence < 50%, the agent auto-fills the subsection using best knowledge constrained by schema, persists, and recalculates confidence before presenting. If confidence >= 50%, content is shown as-is.
- Context-aware review options:
  - **[A]pprove** — available only when confidence >= 80%
  - **[Q]ER** — submenu: Quick Questions (3 AI-suggested improvements), Advanced Elicitation (agent prompts), Party Mode (creative brainstorming). [X] Exit available at any point to cancel without changes.
  - **[E]dit** — minor direct edits
  - **[D]one** — appears after changes were made (QER/Edit) but confidence < 80%. Sets status to `reviewed` and advances.
  - **[S]kip** — only appears when no changes were made. Moves on without status change.
- Every approval, done, edit, or QER completion persists immediately to MD + JSON
- After QER/Edit completion: re-presents the FULL revised text (never a change summary or diff)

### Step 4b: Executive Summary

- Reads the full document before composing or proposing changes
- If no summary exists: composes a new draft
- If summary exists: identifies gaps/outdated content and proposes updates
- Uses standard review options (Approve/QER/Edit/Done/Skip)

### Step 6: Discrepancy Resolution

- Per-discrepancy options: [R]esolve, [Q]ER, [D]efer, [S]kip
- QER deep-dive loads affected section(s) and focuses on resolving the specific discrepancy
- After QER: shows full revised content, re-evaluates whether discrepancy is resolved
- Deferrals require a reason (shown in hub under "Deferred" column)

### Step 5: Reconciliation Only

- Step 4 handles all write-back; step 5 focuses on cross-validation
- Intra-document read-across: cross-references, consistency, completeness against schema
- Inter-document read-across: validates references across related documents

---

## Edit History

| Date | Issues | Summary |
|------|--------|---------|
| 2026-02-05 | #1-7 | Previously imported docs display, QER Quick Questions with 3 options, [E]dit option, subsection-by-subsection review, immediate persistence, QER submenu with 3 modes, prominent section headers |
| 2026-02-06 | #8-14 | Schema as single source of truth, [EXEC] menu + F2B exclusion, full content display, step-04b split, QER [X] Exit, post-QER full text display, [D] Done option, auto-fill when confidence < 50%, QER in discrepancy resolution |

---

_Spec updated on 2026-02-06 to match current implementation_
