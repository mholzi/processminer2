---
name: 'step-05-write-and-reconcile'
description: 'Cross-document reconciliation and read-across validation'

# File References
nextStepFile: './step-06-resolve-discrepancies.md'
hubStepFile: './step-03-section-overview.md'
processOutputFolder: '{process_output_folder}'
schemaDir: '{project-root}/src/modules/process-miner/templates/documents'
---

# Step 5: Reconcile & Validate

## STEP GOAL:

Perform comprehensive read-across validation — both within the current document (intra) and across related documents (inter) — to identify discrepancies and ensure data consistency.

**Note:** Step 4 now handles immediate persistence after each approval, edit, or QER completion. This step focuses on reconciliation and cross-validation, not write-back.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A RECONCILIATION ENGINE — systematic, thorough
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Step-Specific Rules:

- 🎯 Validate against persisted data (Step 4 already wrote changes)
- 🚫 FORBIDDEN to skip inter-document read-across if related documents exist
- 💬 Approach: Systematic, report-style output
- 📊 Focus on cross-reference integrity and consistency

## MANDATORY SEQUENCE

### 1. Verify Persistence State

**Confirm Step 4 persistence completed:**

- Check that all approved/edited sections are written to MD + JSON
- Verify `_progress.yaml` is current
- If any persistence gaps detected, log warning and proceed (Step 4 should have handled this)

### 2. Pass 1: Intra-Document Read-Across

**Validate within the current document:**

**Cross-Reference Validation:**
- For each `cross_references` rule in the master schema where `scope: intra-document`:
  - Verify all referenced IDs exist (e.g., PP `affected_steps` references valid PS# IDs)
  - Flag orphaned references (ID referenced but not defined)
  - Flag unreferenced items (item defined but never referenced by dependent sections)

**Consistency Check:**
- Terminology consistency across sections
- Naming consistency (same entity called the same thing everywhere)
- Numbering consistency (sequential IDs, no gaps)

**Completeness Check:**
- Validate against the full per-document `.schema.yaml` — the schema is the single source of truth for all constraints
- Check for incomplete markers: `[TBD]`, `[TODO]`, `[Unknown]`, `{{.*}}`, `...`

**Record discrepancies** in the JSON discrepancy array with `scope: intra-document`.

### 3. Pass 2: Inter-Document Read-Across

**Validate across related documents:**

**Load the per-document schema** from `{schemaDir}/{document_type}.schema.yaml` and identify:
- All `related_documents` and `companion_documents` relationships involving the current document
- All `cross_references` rules with `scope: inter-document` (or `inter_document` key)

**For each related document that exists in `{processOutputFolder}`:**

- Load its JSON data
- Validate cross-document references:
  - e.g., CX Journey `friction_points.related_pain_point` → valid PP# in AS-IS
  - e.g., CX Journey `touchpoints.at_step` → valid PS# in AS-IS
- Flag orphaned cross-document references (target ID doesn't exist)
- Flag stale references (dependent doc references IDs that were removed/renamed)

**Record discrepancies** in the JSON discrepancy array with `scope: inter-document`, including `source_document` and `target_document` fields.

### 4. Display Reconciliation Summary

"**Reconciliation Summary: {process_name}**

**Intra-Document Read-Across:**
| Check | Rules Evaluated | Passed | New Discrepancies |
|-------|----------------|--------|-------------------|
| Cross-references | {count} | {count} | {count} |
| Consistency | {count} | {count} | {count} |
| Completeness | {count} | {count} | {count} |

**Inter-Document Read-Across:**
| Related Document | Rules Evaluated | Passed | New Discrepancies |
|-----------------|----------------|--------|-------------------|
| {doc_name} | {count} | {count} | {count} |
| ... | ... | ... | ... |

**Discrepancy Totals:**
| Metric | Count |
|--------|-------|
| Previously open | {count} |
| Resolved this pass | {count} |
| New this pass | {count} |
| Total open | {count} |
| Total deferred | {count} |"

### 5. Route to Next Step

**IF open discrepancies > 0:**
Load, read entire file, then execute {nextStepFile} (Step 6 — Resolve Discrepancies)

**IF no open discrepancies:**
Load, read entire file, then execute {hubStepFile} (Step 3 — Section Overview hub)

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Persistence state verified (Step 4 should have written all changes)
- Intra-document read-across completed with all cross-ref rules evaluated
- Inter-document read-across completed for all related documents
- Discrepancies recorded with correct scope
- Reconciliation summary displayed
- Routed correctly based on discrepancy count

### ❌ SYSTEM FAILURE:

- Skipping inter-document read-across when related documents exist
- Overwriting discrepancy array instead of merging
- Not displaying reconciliation summary
- Routing to wrong step

**Master Rule:** This step focuses on validation and reconciliation. Persistence happens in Step 4.
