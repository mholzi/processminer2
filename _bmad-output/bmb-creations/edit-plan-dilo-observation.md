---
mode: edit
targetWorkflowPath: 'src/modules/process-miner/workflows/dilo-observation'
workflowName: 'dilo-observation'
editSessionDate: '2026-02-05'
stepsCompleted:
  - step-e-01-assess-workflow.md
hasValidationReport: true
validationStatus: WARNINGS
criticalIssues: 0
warningIssues: 12
---

# Edit Plan: dilo-observation

## Workflow Snapshot

**Path:** src/modules/process-miner/workflows/dilo-observation
**Format:** BMAD Compliant ✅
**Step Folders:** steps-c/

### Files
- workflow.md (73 lines)
- steps-c/step-01-select-role.md (80 lines)
- steps-c/step-02-prefill.md (133 lines)
- steps-c/step-04-cross-read.md (176 lines)

## Validation Status

**Report:** validation-report-2026-02-05.md
**Result:** ⚠️ WARNINGS

### Key Findings from Validation:

1. **Frontmatter Issues (8 warnings)**
   - step-01: `processFolder` unused
   - step-02: 5 unused variables (diloTemplate, asisDoc, painPointsDoc, exceptionsDoc, controlsDoc)
   - step-04: `processFolder` and `agentMenu` unused

2. **Menu Handling Issues**
   - All steps missing formal "Menu Handling Logic" sections
   - step-02 and step-04 missing "halt and wait" instructions

3. **Step Structure Issues**
   - Missing standard sections: CONTEXT BOUNDARIES, SYSTEM SUCCESS/FAILURE METRICS
   - Non-standard MANDATORY EXECUTION RULES format

---

## Edit Goals

### Fix Validation Issues

**Priority: High** - Fix all warnings for full BMAD compliance

**Frontmatter Issues (8 warnings):**
- [ ] step-01: Remove unused `processFolder` variable OR add `{processFolder}` reference in body
- [ ] step-02: Remove 5 unused variables (diloTemplate, asisDoc, painPointsDoc, exceptionsDoc, controlsDoc) OR add `{variableName}` references in body
- [ ] step-04: Remove unused `processFolder` and `agentMenu` variables OR add references

**Menu Handler Issues:**
- [ ] step-01: Add formal "Menu Handling Logic" section after menu display
- [ ] step-02: Add "halt and wait" instruction + formal handler section
- [ ] step-04: Add "halt and wait" instruction + formal handler section

**Step Structure Issues:**
- [ ] All steps: Add `CONTEXT BOUNDARIES` section
- [ ] All steps: Add `SYSTEM SUCCESS/FAILURE METRICS` section
- [ ] All steps: Standardize `MANDATORY EXECUTION RULES` format

---

## Edits Applied

### step-01-select-role.md
- ✅ Removed unused `processFolder` variable from frontmatter
- ✅ Standardized `MANDATORY EXECUTION RULES (READ FIRST)` with Universal Rules
- ✅ Added `CONTEXT BOUNDARIES` section
- ✅ Added formal `Menu Handling Logic` section with handler
- ✅ Added `EXECUTION RULES` with "halt and wait"
- ✅ Added `SYSTEM SUCCESS/FAILURE METRICS` section

### step-02-prefill.md
- ✅ Added `{variableName}` references for all frontmatter variables (asisDoc, painPointsDoc, exceptionsDoc, controlsDoc, diloTemplate)
- ✅ Standardized `MANDATORY EXECUTION RULES (READ FIRST)` with Universal Rules
- ✅ Added `CONTEXT BOUNDARIES` section
- ✅ Added formal `Menu Handling Logic` section with handler
- ✅ Added `EXECUTION RULES` with "halt and wait"
- ✅ Added `SYSTEM SUCCESS/FAILURE METRICS` section

### step-04-cross-read.md
- ✅ Removed unused `agentMenu` variable from frontmatter
- ✅ Added `{processFolder}` references throughout body
- ✅ Standardized `MANDATORY EXECUTION RULES (READ FIRST)` with Universal Rules
- ✅ Added `CONTEXT BOUNDARIES` section
- ✅ Added formal `Menu Handling Logic` sections for all 4 menus
- ✅ Added `SYSTEM SUCCESS/FAILURE METRICS` section

**Total: 12 warning issues fixed across 3 files**
