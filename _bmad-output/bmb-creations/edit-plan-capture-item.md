---
mode: edit
targetWorkflowPath: '/home/dev/ProcessMiner/src/modules/process-miner/workflows/capture-item'
workflowName: 'capture-item'
editSessionDate: '2026-02-05'
stepsCompleted:
  - step-e-01-assess-workflow.md
hasValidationReport: true
validationStatus: COMPLETE
---

# Edit Plan: capture-item

## Workflow Snapshot

**Path:** /home/dev/ProcessMiner/src/modules/process-miner/workflows/capture-item
**Format:** BMAD Compliant ✅
**Step Folders:** steps-c/

## Validation Status

**Validation Report:** validation-report-2026-02-05.md
**Overall Status:** GOOD — Ready for use with minor cleanup

**Issues Identified:**
- 4 unused frontmatter variables need removal

---

## Edit Goals

*To be populated in next step*

---

## Edits Applied

### 2026-02-05: Removed unused frontmatter variables

| File | Variable Removed |
|------|------------------|
| step-01-determine-type.md | `schemaDir` |
| step-02-gather-fields.md | `processFolder` |
| step-03-validate-insert.md | `processFolder` |
| step-03-validate-insert.md | `progressFile` |

**Result:** All frontmatter now contains only variables that are actually used in step bodies.

### 2026-02-05: Refactored to use schema-driven item type mapping

**Problem:** Hardcoded section mappings in step-03 were out of sync with actual schemas.

**Changes Made:**

1. **Created `data/item-types.yaml`**
   - Single source of truth for item type → schema mapping
   - Maps user codes (PP, JT, II, TD) to schema files and section IDs
   - Organized by category for menu display

2. **Updated `step-01-determine-type.md`**
   - Added reference to `itemTypesConfig`
   - Fixed item codes to match schemas:
     - TP → JT (Journey Touchpoint)
     - INN → II (Innovation Idea)
     - REC → TD (Transformation Decision)
   - Now loads schema to get actual section heading

3. **Updated `step-03-validate-insert.md`**
   - Removed hardcoded mapping table
   - Now resolves target location from schema dynamically
   - Uses schema's `item_template` and `item_fields`
   - Added explicit rule: "FORBIDDEN to use hardcoded section mappings"

**Result:** Workflow now stays in sync with schema changes automatically. If document structure changes, only the schema needs updating.

4. **Updated `step-02-gather-fields.md`**
   - Removed hardcoded field definitions for PS, PP, CP, EX, SYS
   - Now iterates over `item_fields` from schema
   - Handles field types dynamically:
     - `text` — standard question
     - `enum` — shows allowed values from schema
     - `reference` / `reference_list` — validates against existing items
     - `number`, `boolean` — appropriate prompts
   - Uses schema's `item_template` for preview formatting
   - Added rule: "SCHEMA IS LAW"
