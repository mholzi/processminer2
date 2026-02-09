---
mode: edit
targetWorkflowPath: 'src/modules/process-miner/workflows/continue-session'
workflowName: 'continue-session'
editSessionDate: '2026-02-06'
stepsCompleted:
  - step-e-01-assess-workflow.md
  - step-e-02-discover-edits.md
hasValidationReport: true
validationStatus: 'COMPLETE / PASS'
priorEditSession: '2026-02-05 (Issues #1-7)'
---

# Edit Plan: continue-session

## Workflow Snapshot

**Path:** src/modules/process-miner/workflows/continue-session
**Format:** BMAD Compliant ✅
**Step Folders:** steps-c/ (6 files)
**Data Folder:** data/ (3 files)

### Current Files

| File | Lines | Status |
|------|-------|--------|
| workflow.md | 100 | ✅ Active |
| step-01-load-context.md | 153 | ✅ Active |
| step-02-import-documents.md | 206 | ⚠️ Active (approaching limit) |
| step-03-section-overview.md | 112 | ✅ Active |
| step-04-section-review.md | 230 | ✅ Active |
| step-05-write-and-reconcile.md | 139 | ✅ Active |
| step-06-resolve-discrepancies.md | 158 | ✅ Active |

### Data Files

- `data/discrepancy-schema.md` (94 lines)
- `data/qer-modes.md` (109 lines)
- `data/upload-archive-procedure.md` (76 lines)

---

## Validation Status

**Last Report:** 2026-02-05 (Post-Edit)
**Overall Status:** ✅ PASS
**Critical Issues:** 0
**Warnings:** 1

### Warning Summary

1. `step-02-import-documents.md` at 206 lines (200 recommended) — minor, acceptable

### Prior Edit Session (2026-02-05)

Issues #1-7 were applied:
1. Show previously imported documents
2. QER Quick Questions with 3 options
3. Added [E] Edit option
4. Subsection-by-subsection review
5. Immediate persistence
6. QER submenu with 3 modes
7. Prominent section header

---

## Edit Goals (This Session)

### Issue #8: Schema as Single Source of Truth

**Category:** Step files + workflow.md
**Priority:** High — schema constraints were being paraphrased and partially restated in step files, leading to incomplete enforcement (e.g., max_words not enforced during import)

**Changes Requested:**
- [x] Remove all inline schema rule restatements from workflow and step files
- [x] Replace with directive to load and enforce the full per-document `.schema.yaml`
- [x] Add explicit schema validation pass in step-02 before persistence
- [x] Add schema violation reporting to step-02 extraction summary

**Rationale:**
Schema rules were cherry-picked and paraphrased in step files (e.g., step-02 mentioned min_words/min_count but not max_words/max_count). This meant the executing agent could miss constraints not explicitly restated. By deferring all validation to the schema, any future schema changes are automatically enforced without step file edits.

---

## Edits Applied (This Session)

### Issue #8: Schema as Single Source of Truth

**Files Modified:**

| File | Change |
|------|--------|
| `workflow.md` | Replaced 7-line SCHEMA IS LAW bullet list with single-source-of-truth directive |
| `step-02-import-documents.md` | Section 4a: removed inline min_words/min_count rules, replaced with full schema enforcement directive |
| `step-02-import-documents.md` | New section 5: explicit schema validation pass before persistence |
| `step-02-import-documents.md` | Section 6 (was 5): added Schema Violations column to extraction summary table |
| `step-02-import-documents.md` | Sections 6-8 renumbered to 7-9 |
| `step-05-write-and-reconcile.md` | Section 2 completeness check: replaced paraphrased "min/max counts, word counts" with schema deferral |

**Principle:** The per-document `.schema.yaml` is the single source of truth for all validation constraints. No workflow or step file restates schema rules.

### Issue #9: Executive Summary — Exclude from F2B, Add [EXEC] Menu Option

**Files Modified:**

| File | Change |
|------|--------|
| `step-03-section-overview.md` | Added [EXEC] menu option to compose/refine executive summary from full document |
| `step-03-section-overview.md` | Updated F2B description to note it excludes executive summary |
| `step-03-section-overview.md` | Added EXEC routing: loads step-04 with `mode=exec` |
| `step-03-section-overview.md` | Added failure metric: including executive summary in F2B |
| `step-04-section-review.md` | Added `exec` mode to parameters |
| `step-04-section-review.md` | Added section 0: exec mode sequence — reads full document, composes or proposes changes, then presents standard A/Q/E/S review options |
| `step-04-section-review.md` | Updated section 6: F2B excludes executive summary; exec returns to hub like single mode |
| `step-04-section-review.md` | Updated success/failure metrics for exec mode |

**Principle:** The executive summary can only be meaningfully composed after all other sections are complete. It is excluded from F2B and has its own dedicated entry point that reads the full document before composing or proposing changes.

### Issue #10: Always Show Full Content, Never Summarize

**Files Modified:**

| File | Change |
|------|--------|
| `step-04-section-review.md` | Added two new step-specific rules: always show FULL content, never show section-level summary before subsections |
| `step-04-section-review.md` | Section 2b: strengthened from "Display ONLY" to explicit "FULL rendered content, NEVER summarize" |
| `step-04-section-review.md` | Section 3: strengthened content display to "FULL rendered, never summarize" |
| `step-04-section-review.md` | Added failure metrics: summarizing content, showing section-level summary before subsections |

**Principle:** The user is reviewing actual text, not synopses. Every subsection and section must display the full rendered content exactly as written. No summaries, no abbreviations, no paraphrasing.

### Validation Fix: Split step-04 (exceeded 250 line limit)

**Files Modified:**

| File | Change |
|------|--------|
| `step-04b-exec-summary.md` | NEW — extracted exec mode into standalone step file (166 lines) |
| `step-04-section-review.md` | Removed section 0 (exec mode), exec parameter, exec routing in section 6, unused schemaDir frontmatter. Now 234 lines (was 285). |
| `step-03-section-overview.md` | Added `execStepFile` frontmatter reference, updated EXEC routing to load step-04b directly |

**Result:** step-04 reduced from 285 → 234 lines (under 250 limit). Exec mode is now a self-contained step with its own frontmatter, sequence, and success/failure metrics.

### Issue #11: QER Exit Option and Post-QER Full Text Display

**Files Modified:**

| File | Change |
|------|--------|
| `step-04-section-review.md` | Added [X] Exit option to QER submenu |
| `step-04-section-review.md` | Post-QER: enforced FULL revised text display, explicitly forbidden change summaries/diffs |
| `step-04-section-review.md` | Added [X] Exit available at any point during any QER mode |
| `step-04-section-review.md` | Added failure metrics: no exit option, showing change summary after QER |
| `data/qer-modes.md` | Added [X] Exit to mode selection menu |
| `data/qer-modes.md` | Added Exit Rule section: user can exit any QER mode at any point, partial work discarded |
| `data/qer-modes.md` | Updated persistence protocol step 6: must show FULL revised text, never change summary |

**Principle:** After any QER mode completes, the user sees the full revised text as it now reads — not a list of what changed. The user can exit any QER mode at any point without committing changes.

### Issue #12: [D] Done Option for Post-QER Below-Threshold Subsections

**Files Modified:**

| File | Change |
|------|--------|
| `step-04-section-review.md` | Section 4: three-way menu logic based on confidence + changes_made flag |
| `step-04-section-review.md` | Section 5: added [D] Done handler — sets status to `reviewed`, persists, advances |
| `step-04-section-review.md` | Section 5: [S] Skip clarified as "no changes made" only |
| `step-04-section-review.md` | Updated success/failure metrics |

**Principle:** After making changes via QER or Edit, the user should never have to "skip" — [D] Done acknowledges the work and sets status to `reviewed`. [S] Skip is only for subsections the user chooses not to touch.

### Issue #13: Auto-Fill on Load When Confidence < 50%

**Files Modified:**

| File | Change |
|------|--------|
| `step-04-section-review.md` | Added step 2b: auto-fill check before presenting subsection content (confidence < 50% triggers auto-fill, >= 50% shows as-is) |
| `step-04-section-review.md` | Added auto-fill check to section 3 (no-subsection path) |
| `step-04-section-review.md` | Renumbered subsection steps: 2b→auto-fill, 2c→content, 2d→discrepancies, 2e→review, 2f→advance |
| `step-04-section-review.md` | Updated success/failure metrics |
| `continue-session.spec.md` | Added auto-fill behaviour to Step 4 section |

**Principle:** Low-confidence subsections (< 50%) are too sparse for meaningful review. Auto-filling before presentation gives the user a better starting point. Above 50%, the content has enough substance to review as-is.

### Issue #14: QER Option in Discrepancy Resolution

**Files Modified:**

| File | Change |
|------|--------|
| `step-06-resolve-discrepancies.md` | Added `qerModesRef` to frontmatter |
| `step-06-resolve-discrepancies.md` | Added [Q] QER option to per-discrepancy menu (3c) |
| `step-06-resolve-discrepancies.md` | Added QER handler (3d): loads affected sections, runs QER submenu, persists, shows full revised content, re-evaluates discrepancy |
| `step-06-resolve-discrepancies.md` | Updated success/failure metrics |
| `continue-session.spec.md` | Added Step 6 behaviour section |

**Principle:** Some discrepancies need investigation, not just a quick fix. QER provides a structured deep-dive into the affected section(s) to understand and resolve the root cause.
