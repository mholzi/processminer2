---
validationDate: 2026-02-05
workflowName: continue-session
workflowPath: src/modules/process-miner/workflows/continue-session
validationStatus: COMPLETE
completionDate: 2026-02-05
---

# Validation Report: continue-session

**Validation Started:** 2026-02-05
**Validator:** BMAD Workflow Validation System (Wendy)
**Standards Version:** BMAD Workflow Standards v6

---

## File Structure & Size

### Folder Structure

```
continue-session/
├── workflow.md                          ✅ exists
├── continue-session.spec.md             ✅ spec file
├── steps-c/                             ✅ single-mode step folder
│   ├── step-01-load-context.md          ✅ ACTIVE
│   ├── step-01-load-process.md          ❌ ORPHAN
│   ├── step-02-choose-action.md         ❌ ORPHAN
│   ├── step-02-import-documents.md      ✅ ACTIVE
│   ├── step-03-section-overview.md      ✅ ACTIVE (HUB)
│   ├── step-04-section-review.md        ✅ ACTIVE
│   ├── step-05-write-and-reconcile.md   ✅ ACTIVE
│   └── step-06-resolve-discrepancies.md ✅ ACTIVE
└── data/
    └── discrepancy-schema.md            ✅ exists
```

- **Templates folder:** Not present (not needed — this workflow refines existing documents, not creating new ones)

### File Size Analysis

| File | Lines | Status |
|------|-------|--------|
| workflow.md | 100 | ✅ Good |
| step-01-load-context.md | 153 | ✅ Good |
| step-01-load-process.md | 113 | ✅ Good (ORPHAN) |
| step-02-choose-action.md | 124 | ✅ Good (ORPHAN) |
| step-02-import-documents.md | 219 | ⚠️ Approaching limit (200 recommended) |
| step-03-section-overview.md | 113 | ✅ Good |
| step-04-section-review.md | 166 | ✅ Good |
| step-05-write-and-reconcile.md | 168 | ✅ Good |
| step-06-resolve-discrepancies.md | 160 | ✅ Good |
| data/discrepancy-schema.md | 94 | ✅ Good |

### Active Flow Chain

```
workflow.md → step-01-load-context → step-02-import-documents → step-03-section-overview (HUB)
                                                                    ↕
                                                              step-04-section-review
                                                                    ↓
                                                              step-05-write-and-reconcile
                                                                    ↓
                                                              step-06-resolve-discrepancies [if discrepancies]
                                                                    ↓
                                                              → step-03 (HUB — loop)
```

### Critical Issues

1. **❌ ORPHANED FILES:** `step-01-load-process.md` and `step-02-choose-action.md` are NOT in the active chain. They form an alternative flow (load-process → choose-action) that is never reached from workflow.md.
2. **⚠️ DUPLICATE NUMBERING:** Two step-01 files and two step-02 files create confusion about which flow is active.

### Workflow Plan

- **No `workflow-plan.md` found** — Cannot verify step presence against original design.

### Spec File Divergence

The `continue-session.spec.md` describes 5 steps (List Processes, Select Process, Load Context, Show Status, Resume Work) but the actual active workflow has 6 steps with a completely different architecture (import/review/reconcile pipeline with hub-and-spoke pattern). The spec appears to be the original placeholder that was not updated after the workflow was built.

**Status:** ⚠️ WARNINGS — Orphaned files and spec divergence need attention

---

## Frontmatter Validation

### Per-File Analysis

**step-01-load-context.md:** ✅ PASS
- `nextStepFile` → Used in body ✅
- `processOutputFolder` → Used in body (`{processOutputFolder}/{process_id}/`) ✅
- `schemaDir` → Used in body ✅
- `defaultsFile` → Used in body ✅
- Paths: All correct (relative for step refs, `{project-root}` for external module refs, config vars)

**step-01-load-process.md (ORPHAN):** ⚠️ WARN
- `nextStepFile` → Used ✅
- `processOutputFolder` → ❌ NOT used in body text — variable defined but not referenced with `{processOutputFolder}`

**step-02-choose-action.md (ORPHAN):** ❌ FAIL
- `captureItemWorkflow` → Used ✅
- `composeDocumentWorkflow` → ❌ NOT used in body — never referenced
- `reviewDraftWorkflow` → Used ✅
- `companionAgent` → Used ✅
- **PATH ERROR:** Frontmatter paths use `{project-root}/_bmad/modules/process-miner/workflows/...` but actual location is `{project-root}/src/modules/process-miner/workflows/...`

**step-02-import-documents.md:** ✅ PASS
- `nextStepFile` → Used ✅
- `processOutputFolder` → ❌ NOT directly used in body (only used to define other frontmatter vars with `{process_output_folder}` config syntax). However, this is borderline — the variable exists as an alias but the body doesn't reference `{processOutputFolder}`.
- `discrepancySchema` → Used ✅
- `uploadsFolder` → Used ✅
- `uploadManifest` → Used ✅

**step-03-section-overview.md:** ⚠️ WARN
- `nextStepFile` → Used ✅
- `processOutputFolder` → ❌ NOT used in body
- `companionAgent` → Used ✅

**step-04-section-review.md:** ⚠️ WARN
- `nextStepFile` → Used ✅
- `hubStepFile` → ❌ NOT used in body (step 4 always goes to step 5, not back to hub)
- `processOutputFolder` → ❌ NOT used in body

**step-05-write-and-reconcile.md:** ✅ PASS
- `nextStepFile` → Used ✅
- `hubStepFile` → Used ✅
- `processOutputFolder` → Used (`{processOutputFolder}`) ✅
- `schemaDir` → Used ✅

**step-06-resolve-discrepancies.md:** ⚠️ WARN
- `hubStepFile` → Used ✅
- `processOutputFolder` → ❌ NOT used in body
- `discrepancySchema` → ❌ NOT used in body (discrepancy format is described inline, not loaded from reference)

### Summary of Frontmatter Violations

| File | Unused Variables | Path Errors |
|------|-----------------|-------------|
| step-01-load-process.md (ORPHAN) | `processOutputFolder` | — |
| step-02-choose-action.md (ORPHAN) | `composeDocumentWorkflow` | `_bmad/modules/` should be `src/modules/` |
| step-02-import-documents.md | `processOutputFolder` (borderline) | — |
| step-03-section-overview.md | `processOutputFolder` | — |
| step-04-section-review.md | `hubStepFile`, `processOutputFolder` | — |
| step-06-resolve-discrepancies.md | `processOutputFolder`, `discrepancySchema` | — |

**Status:** ⚠️ WARNINGS — Multiple unused frontmatter variables across active steps

---

## Critical Path Violations

### Config Variables (Exceptions)

From workflow.md Configuration Loading section, the following config variables are valid path roots:
- `{process_output_folder}` — process output location (set by module config)
- `{project-root}` — project root (valid for cross-module references)

### Content Path Violations

No hardcoded `{project-root}/` paths found in active step file BODY content. All `{project-root}` references are properly defined in frontmatter variables. ✅

### Dead Links

**Active chain:** All nextStepFile references resolve correctly ✅

**Orphan chain:**
| File | Reference | Issue |
|------|-----------|-------|
| step-02-choose-action.md | `captureItemWorkflow` | ❌ Path `_bmad/modules/process-miner/...` does not exist (should be `src/modules/process-miner/...`) |
| step-02-choose-action.md | `composeDocumentWorkflow` | ❌ Same path error + unused variable |
| step-02-choose-action.md | `reviewDraftWorkflow` | ❌ Same path error |

### Module Awareness

This workflow is in `src/modules/process-miner/`, not `_bmad/bmb/`. The orphan file `step-02-choose-action.md` incorrectly references `_bmad/modules/...` paths — this is a module path awareness violation.

**Status:** ⚠️ WARNINGS — Dead links exist only in orphaned files (active chain is clean)

---

## Menu Handling Validation

| File | Has Menu | Handler | Exec Rules | Halt+Wait | A/P Appropriate | Status |
|------|----------|---------|------------|-----------|-----------------|--------|
| step-01-load-context.md | ✅ | ✅ | ✅ | ✅ | ✅ (no A/P — init) | ✅ PASS |
| step-02-import-documents.md | ✅ | ✅ | ✅ | ✅ | ✅ (no A/P — import) | ✅ PASS |
| step-03-section-overview.md | ✅ | ✅ | ✅ | ✅ | ✅ (hub navigation) | ✅ PASS |
| step-04-section-review.md | ✅ | ✅ | ⚠️ implicit | ✅ | ✅ (dynamic by confidence) | ⚠️ WARN |
| step-05-write-and-reconcile.md | N/A | N/A | N/A | N/A | N/A (auto-routes) | ✅ PASS |
| step-06-resolve-discrepancies.md | ✅ | ✅ | ✅ | ✅ | ✅ (per-item R/D/S) | ✅ PASS |

**Issues:**
- step-04-section-review.md: Execution rules are implicit in the flow description but not in a dedicated `#### EXECUTION RULES:` section.

**Status:** ✅ PASS (1 minor warning)

---

## Step Type Validation

| File | Expected Type | Actual Type | Pattern Match | Status |
|------|--------------|-------------|---------------|--------|
| step-01-load-context.md | Init (non-continuable) | Init | ✅ | ✅ PASS |
| step-02-import-documents.md | Middle (data gathering) | Middle with loop | ✅ | ✅ PASS |
| step-03-section-overview.md | Hub/Branch | Hub/Branch | ✅ | ✅ PASS |
| step-04-section-review.md | Middle (dynamic menu) | Middle (parameterized) | ✅ | ✅ PASS |
| step-05-write-and-reconcile.md | Processing (auto-route) | Processing (conditional) | ✅ | ✅ PASS |
| step-06-resolve-discrepancies.md | Middle (loop + route) | Middle (loop to hub) | ✅ | ✅ PASS |

**Status:** ✅ PASS — All active steps follow correct type patterns

---

## Output Format Validation

This workflow does NOT produce its own output document. It refines existing process documentation that was created elsewhere. Therefore:

- **Template file:** Not needed ✅
- **Final polish step:** Not needed ✅
- **Output format:** Writes to existing MD + JSON (dual persistence) ✅
- **Step-to-output mapping:** Steps 2, 5, 6 write to existing documents ✅

**Status:** ✅ N/A — Workflow operates on existing documents

---

## Validation Design Check

This is a single-mode (`steps-c/`) workflow without dedicated validation steps. This is appropriate because:

- The workflow is a document refinement pipeline, not a compliance-creating workflow
- Validation happens within the review cycle itself (QER in step 4, reconciliation in step 5, discrepancy resolution in step 6)
- No separate `steps-v/` folder is needed

**Status:** ✅ N/A — Appropriate for workflow type

---

## Instruction Style Check

**Domain:** Process documentation refinement — Facilitative/collaborative

| File | Style | Appropriate | Status |
|------|-------|-------------|--------|
| step-01-load-context.md | Intent-based | ✅ | ✅ PASS |
| step-02-import-documents.md | Mixed (intent + prescriptive data rules) | ✅ | ✅ PASS |
| step-03-section-overview.md | Intent-based | ✅ | ✅ PASS |
| step-04-section-review.md | Intent-based (QER facilitation) | ✅ | ✅ PASS |
| step-05-write-and-reconcile.md | Prescriptive (systematic processing) | ✅ | ✅ PASS |
| step-06-resolve-discrepancies.md | Intent-based (present + let user decide) | ✅ | ✅ PASS |

**Positive findings:**
- Appropriate mix of facilitative language for user-facing steps and prescriptive language for data processing steps
- Step 2's "SCHEMA IS LAW" approach is prescriptive but appropriate for data quality
- Step 6's facilitator role ("present both sides, propose a fix, let user choose") is excellent

**Status:** ✅ PASS

---

## Collaborative Experience Check

**Overall Facilitation Quality:** Good (⭐⭐⭐⭐ 4/5)

### Step-by-Step Analysis

**step-01-load-context.md:**
- Question style: Progressive ✅ (auto-load single, table for multiple)
- Conversation flow: Natural ✅
- No-process handling: Redirects to Companion ✅
- Status: ✅ PASS

**step-02-import-documents.md:**
- Question style: Progressive ✅ (one document at a time)
- Import summary shown after each doc ✅
- Loop for more docs ✅
- Status: ✅ PASS

**step-03-section-overview.md (HUB):**
- Clear status table with dynamic data ✅
- Multiple navigation options ✅
- Exit options (COMP, MENU) ✅
- Status: ✅ PASS

**step-04-section-review.md:**
- QER flow is conversational ✅
- Dynamic options based on confidence ✅
- Re-presents after refinement ✅
- No explicit "ask 1-2 at a time" mandate ⚠️
- Status: ⚠️ Minor — Could add explicit progressive question mandate

**step-05-write-and-reconcile.md:**
- Processing step, minimal interaction ✅
- Clear reconciliation summary ✅
- Status: ✅ PASS

**step-06-resolve-discrepancies.md:**
- Per-discrepancy resolution (not batch) ✅
- Shows both sides of issue ✅
- Proposes fixes ✅
- User confirms every resolution ✅
- Status: ✅ PASS

### Progression & Arc
- Clear hub-and-spoke loop ✅
- User always knows where they are ✅
- Satisfying per-section completion ✅

### Error Handling
- No process: Halt + redirect ✅
- Invalid input: Help + redisplay ✅
- Off-track: Redisplay menu ✅

**Would this workflow feel like:** A collaborative partner working WITH the user ✅

**Status:** ✅ GOOD

---

## Subprocess Optimization Opportunities

**Total Opportunities:** 3 | **High Priority:** 1

### High-Priority

**step-05-write-and-reconcile.md** — Pattern 4 (Parallel)
- **Current:** Intra-document and inter-document read-across run sequentially
- **Suggested:** Run Pass 1 (intra) and Pass 2 (inter) in parallel subprocesses
- **Impact:** Faster reconciliation, reduced context load

### Medium-Priority

**step-02-import-documents.md** — Pattern 4 (Parallel)
- **Current:** MD and JSON persistence run sequentially
- **Suggested:** Persist to MD and JSON in parallel
- **Impact:** Faster import processing

**step-06-resolve-discrepancies.md** — Pattern 3 (Data Operations)
- **Current:** Loads target documents for inter-document issues in main context
- **Suggested:** Subprocess loads related document, returns only relevant section
- **Impact:** Reduced context consumption

**Status:** ⚠️ Review recommended — 3 optimization opportunities identified

---

## Cohesive Review

### Overall Assessment: GOOD

### Strengths
1. **Hub-and-spoke architecture** — step-03 as the central navigation point is clean and intuitive
2. **Template-driven design** — No hardcoded section names; everything discovered from loaded template
3. **Dual persistence (MD + JSON)** — Systematic and reliable
4. **Comprehensive discrepancy tracking** — From import through resolution with standard schema
5. **Process-agnostic design** — Works with any process type, template defines structure
6. **Clear separation of concerns** — Each step has one job

### Weaknesses
1. **Orphaned files** create confusion — `step-01-load-process.md` and `step-02-choose-action.md` appear to be from an earlier design iteration
2. **Spec divergence** — `continue-session.spec.md` describes a different architecture than what was built
3. **Unused frontmatter variables** — `processOutputFolder` appears in several steps but isn't used in their body text
4. **Missing `communication_language` mandate** — Not all steps include the `✅ YOU MUST ALWAYS SPEAK OUTPUT` rule (steps 01-load-process and 02-choose-action lack it, though they're orphans)

### Critical Issues
- No show-stoppers in the active flow chain
- Orphaned files are confusing but don't affect runtime behavior

### User Experience Forecast
A user running this workflow would experience a well-structured review cycle with clear navigation, appropriate options, and systematic quality tracking. The hub-and-spoke pattern provides excellent orientation.

### Recommendation
**GOOD — Ready to use with cleanup needed.** The active flow chain is solid and well-designed. Remove orphaned files and fix unused frontmatter variables.

---

## Plan Quality Validation

No `workflow-plan.md` found — workflow may have been built outside the BMAD create-workflow process, or the plan was not preserved. Cannot validate implementation against original design intent.

---

## Summary

**Validation Completed:** 2026-02-05
**Overall Status:** ⚠️ GOOD WITH WARNINGS

### Validation Results

| Check | Result |
|-------|--------|
| File Structure & Size | ⚠️ WARNINGS (orphaned files, approaching limit) |
| Frontmatter Validation | ⚠️ WARNINGS (unused variables) |
| Critical Path Violations | ⚠️ WARNINGS (dead links in orphans only) |
| Menu Handling | ✅ PASS |
| Step Type Validation | ✅ PASS |
| Output Format | ✅ N/A |
| Validation Design | ✅ N/A |
| Instruction Style | ✅ PASS |
| Collaborative Experience | ✅ GOOD (4/5) |
| Subprocess Optimization | ⚠️ Review (3 opportunities) |
| Cohesive Review | ✅ GOOD |
| Plan Quality | N/A (no plan file) |

### Critical Issues: 0

No critical issues that would break the workflow at runtime.

### Warnings: 6

1. **Orphaned step files** — `step-01-load-process.md` and `step-02-choose-action.md` are dead code from an earlier design
2. **Spec file divergence** — `continue-session.spec.md` doesn't match actual implementation
3. **step-02-import-documents.md** approaching size limit at 219 lines
4. **Unused frontmatter variables** — `processOutputFolder` unused in 4 active steps; `hubStepFile` unused in step-04; `discrepancySchema` unused in step-06
5. **step-04-section-review.md** missing formal `EXECUTION RULES` section header
6. **Path errors in orphaned file** — `step-02-choose-action.md` uses wrong module path

### Key Strengths
- Well-designed hub-and-spoke architecture
- Template-driven, process-agnostic design
- Comprehensive dual persistence and discrepancy tracking
- Good collaborative facilitation quality

### Recommendation
**Ready to use.** Clean up orphaned files, fix unused frontmatter variables, and update or remove the stale spec file. These are housekeeping issues, not functional problems.
