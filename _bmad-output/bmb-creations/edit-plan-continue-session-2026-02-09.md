---
mode: edit
targetWorkflowPath: 'src/modules/process-miner/workflows/continue-session'
workflowName: 'continue-session'
editSessionDate: '2026-02-09'
stepsCompleted:
  - step-e-01-assess-workflow.md
hasValidationReport: true
validationStatus: 'COMPLETE / PASS (0 critical, 1 warning)'
priorEditSessions:
  - '2026-02-05 (Issues #1-7)'
  - '2026-02-06 (Issues #8-14)'
---

# Edit Plan: continue-session

## Workflow Snapshot

**Path:** src/modules/process-miner/workflows/continue-session
**Format:** BMAD Compliant ✅
**Step Folders:** steps-c/ (7 step files)
**Data Folder:** data/ (3 files)
**Templates Folder:** none (external via schema discovery)

### Current Files

| File | Lines | Status |
|------|-------|--------|
| workflow.md | 111 | ✅ Active |
| step-01-load-context.md | 153 | ✅ Active |
| step-02-import-documents.md | 221 | ⚠️ Active (approaching limit) |
| step-03-section-overview.md | 119 | ✅ Active |
| step-04-section-review.md | 244 | ✅ Active |
| step-04b-exec-summary.md | 166 | ✅ Active |
| step-05-write-and-reconcile.md | 139 | ✅ Active |
| step-06-resolve-discrepancies.md | 158 | ✅ Active |

### Data Files

- `data/discrepancy-schema.md` (94 lines)
- `data/qer-modes.md` (114 lines)
- `data/upload-archive-procedure.md` (76 lines)

---

## Validation Status

**Last Report:** 2026-02-06
**Overall Status:** ✅ PASS
**Critical Issues:** 0
**Warnings:** 1 (step-02 at 221 lines — approaching limit)

### Prior Edit Sessions

- **2026-02-05:** Issues #1-7 (QER modes, edit option, subsection review, persistence, etc.)
- **2026-02-06:** Issues #8-14 (schema as source of truth, exec summary, full content display, QER exit, done option, auto-fill, QER in discrepancy resolution)

---

## Edit Goals (This Session)

### Issue #15: Align CX Schema Subsections to Template

**Category:** Schema (cx-journey-documentation.schema.yaml)
**Priority:** High — CX sections without schema subsections caused step-04 to show full section content instead of one-subsection-at-a-time review

**Root Cause:** The CX Journey template MD defines sub-headings (### X.Y) for all 10 sections, but the schema only defined `subsections:` for 5 of them (2, 4, 6, 7, 10). Step-04 checks the schema for subsections — when none are found, it correctly takes the "no subsections" path and renders the full section. The AS-IS schema defines subsections for most sections, which is why PDA worked correctly.

---

## Edits Applied (This Session)

### Issue #15: Align CX Schema Subsections to Template

**File Modified:** `src/modules/process-miner/templates/documents/cx-journey-documentation.schema.yaml`

**Subsections ADDED (5 sections):**

| Section | content_type change | Subsections added |
|---------|-------------------|-------------------|
| 1. Journey Overview | prose → mixed | 1.1 Journey Identification, 1.2 Client Persona, 1.3 Journey Context |
| 3. Moments That Matter | analysis → mixed | 3.1 Identified Moments, 3.2 Moments Summary |
| 5. CES Analysis | analysis → mixed | 5.1 CES by Stage, 5.2 CES by Touchpoint, 5.3 Benchmark Comparison, 5.4 CES Baseline Statement |
| 8. Industry Research | prose → mixed | 8.1 Industry Benchmarks, 8.2 Relevant Trends, 8.3 Competitive Landscape |
| 9. TO-BE Inputs | recommendations → mixed | 9.1 CES Baseline Summary, 9.2 Critical Success Factors, 9.3 Experience Degradation Risks, 9.4 Enhancement Ideas Available |

**Subsections REALIGNED (5 sections):**

| Section | Old schema subsections | New (matching template) |
|---------|----------------------|------------------------|
| 2. Touchpoints | 3: Summary, Table, Details | 4: Summary, Table, Journey Flow Diagram, Statistics |
| 4. Friction | 3: Summary, Table, Details | 4: Summary, Table, Friction by Type, Statistics |
| 6. Channels | 3: Summary, Table, Details | 3: Channel Usage, Switching Analysis, Gaps |
| 7. Enhancements | 3: Summary, Catalog, Details | 2: Catalog, Statistics |
| 10. Discovery | 3: Summary, Table, Details | 2: Items Logged, Cross-References |

**Preserved:** All item_fields, item_prefix, detail_document, summary_table_header, validation rules, cross_references, completeness rules, id_patterns, companion_documents, ces_scoring.

**Principle:** Every sub-heading in the template MD must have a corresponding subsection definition in the schema. This ensures step-04's subsection detection works correctly regardless of which template/agent is active.

### Issue #16: Cross-Read — Fix All Template/Schema Subsection Mismatches

Cross-read of all 13 template/schema pairs revealed the same pattern as Issue #15 across 8 additional schemas. All fixed in parallel.

**Schemas Fixed:**

| Schema | Sections Fixed | Subsections Added | Notes |
|--------|---------------|-------------------|-------|
| target-state-documentation | 16 | 85 | All 16 sections had zero subsections. Largest fix. |
| innovation-analysis-documentation | 10 | 34 | 10 of 11 sections fixed (exec summary excluded) |
| compliance-control-assessment | 5 | 17 | Sections 1-4 and 9 |
| exceptions-detail | 2 | 6 | Only non-item-template sections (patterns, downstream) |
| pain-points-detail | 3 | 12 | Patterns, recommendations, downstream |
| control-points-detail | 5 | 15 | Framework, audit readiness, recommendations, downstream, regulatory |
| transformation-decisions-detail | 5 | 10 | Catalog, trade-offs, deferred, patterns, audit trail |
| management-summary | 7 + variants | 9 base + 88 variant overrides | Appendix subsections added; variant-specific overrides for CX/compliance/innovation |

**Schemas Already Clean (no changes needed):**
- as-is-process-documentation
- dilo-observation
- sipoc-analysis
- gap-resolution-log

**Key Design Decisions:**
- `detail_entries` sections with `{{#each}}` item templates left as-is — per-item sub-headings are fields, not subsections
- Section `content_type` changed to `mixed` wherever subsections were added
- All existing metadata preserved: item_fields, item_prefix, detail_document, summary_table_header, validation, cross_references, completeness, id_patterns, companion_documents
- Management summary uses `subsection_overrides` per variant for CX/compliance/innovation divergences

### Issue #17: Create Standalone Management Summary Schemas

The unified `management-summary.schema.yaml` used a single-schema/multi-variant architecture with `subsection_overrides`. For the continue-session workflow, each variant needs its own standalone schema so step-01 can load it directly via `{document_type}.schema.yaml`.

**Schemas Created (4 new files):**

| Schema | Sections | Total Subsections | Source Variant |
|--------|----------|-------------------|----------------|
| management-summary-process.schema.yaml | 7 | 33 | Base (no overrides) |
| management-summary-cx.schema.yaml | 7 | 37 | CX overrides merged |
| management-summary-compliance.schema.yaml | 7 | 38 | Compliance overrides merged |
| management-summary-innovation.schema.yaml | 7 | 40 | Innovation overrides merged |

**Architecture:**
- Each standalone schema is self-contained — no `variants:` block, no override indirection
- Variant-specific metadata (source_document, agent_id, writing_focus, companion_documents, comparison_metrics, appendix_sections) promoted to top level
- Sections 1-6: base subsections replaced with variant-specific overrides where applicable
- Section 7 (appendix): subsections match each variant's template sub-headings (A.1–A.9)
- Shared blocks copied: format, priority_block, auto_transform, change_detection, completeness, output_frontmatter
- Unified schema retained as reference — standalone schemas are the operational source of truth

**Validation:** 148/148 subsection headings match across all 4 schema/template pairs.

### Issue #18: Add skip_import Support and Update Agent Routing

Management summaries are generated documents — they don't need Step 2 (Document Import). Added `skip_import` parameter to the continue-session workflow and updated all 4 agent MS menu entries.

**Files Modified:**

| File | Change |
|------|--------|
| `workflow.md` | Added `document_type` and `skip_import` optional parameters; updated flow diagram (S2 marked optional); added example invocation |
| `step-01-load-context.md` | Added `nextStepFileSkipImport` frontmatter ref; document_type parameter override in section 3; conditional routing in section 5 (skip_import=true → step-03, false → step-02) |
| `agents/pda.md` | MS menu: `generate-outputs/workflow.md` → `continue-session/workflow.md` with `document_type: 'management-summary-process'`, `skip_import: true` |
| `agents/cx-journey.md` | MS menu: `generate-outputs/workflow.md` → `continue-session/workflow.md` with `document_type: 'management-summary-cx'`, `skip_import: true` |
| `agents/control.md` | MS menu: `generate-outputs/workflow.md` → `continue-session/workflow.md` with `document_type: 'management-summary-compliance'`, `skip_import: true` |
| `agents/innovation.md` | MS menu: `generate-outputs/workflow.md` → `continue-session/workflow.md` with `document_type: 'management-summary-innovation'`, `skip_import: true` |

**Routing logic:** When `skip_import = true`, step-01 shows "[C] Continue to Section Overview" and jumps directly to step-03, bypassing step-02 entirely.

### Issue #19: F2B Exclusion — Schema ID-Based Instead of Name-Based

**Category:** Workflow (step-03, step-04)
**Priority:** High — F2B mode was skipping section 1 (Introduction) for management summaries because the exclusion logic referenced "Executive Summary" by name, and the LLM mapped Introduction to it

**Root Cause:** Step-03 and step-04 hardcoded "excluding Executive Summary" as a name-based exclusion. Management summary schemas have section 1 as "Introduction" (ID: `introduction`), not `executive_summary`. The LLM interpreted Introduction as the equivalent and skipped it.

**Fix:** Changed the exclusion to be schema-driven — check if the loaded schema contains a section with `id: executive_summary`:
- **If yes** (primary documents like AS-IS, CX Journey): exclude it from F2B, show [EXEC] option
- **If no** (management summaries): include ALL sections in F2B, hide [EXEC] option

**Files Modified:**

| File | Change |
|------|--------|
| `step-03-section-overview.md` | F2B and [EXEC] now conditional on `has_exec_summary` (schema has section with `id: executive_summary`). Menu logic branched for both cases. Failure metric updated. |
| `step-04-section-review.md` | F2B exclusion now checks schema for `id: executive_summary` — if none exists, all sections included. Success/failure metrics updated. |
