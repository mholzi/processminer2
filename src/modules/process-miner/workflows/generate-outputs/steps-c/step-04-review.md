---
name: 'step-04-review'
description: 'Review, edit, and finalize against schema completeness rules'

# Path Definitions
module_root: '{project-root}/src/modules/process-miner'
workflow_path: '{module_root}/workflows/generate-outputs'

# File References
thisStepFile: '{workflow_path}/steps-c/step-04-review.md'
workflowFile: '{workflow_path}/workflow.md'
# No nextStepFile — this is the final step
---

# Step 4: Schema-Driven Review & Finalize

## STEP GOAL:

Collaboratively review the generated management summary with the user, using `schema.sections` for navigation and `schema.completeness` for quality validation. Incorporate edits, then finalize.

## MANDATORY EXECUTION RULES:

- 🛑 NEVER finalize without explicit user approval
- 📏 Use `schema.sections` to present review structure
- 📏 Use `schema.completeness` for quality check
- 📋 User has final say on all content

---

## REVIEW SEQUENCE:

### 1. Present Review Overview

Build dynamically from `schema.sections`:

"**Management Summary Ready for Review**

📄 {output_filename} | 📊 v{version} | 📝 Draft

| # | Section | Page Budget | Status |
|---|---------|-------------|--------|
{for each section in schema.sections}
| {section.section_number} | {section.heading} | {section.page_budget} | ✅ Generated |
{end for}"

### 2. Present REVIEW MENU

"**Select Review Option:**
[F] Full Document
[1-{N}] Section Review (by section number from schema)
[E] Edit Section
[Q] Quality Check (against schema.completeness)
[D] Done — Approve and finalize"

#### Menu Logic:

- **F**: Display full document, redisplay menu
- **1-N**: Display section matching `schema.sections[N-1].heading`, redisplay menu
- **E**: Execute Edit Flow, redisplay menu
- **Q**: Execute Quality Check, redisplay menu
- **D**: Execute Finalization Flow

### Edit Flow

1. Present section list from `schema.sections` — user picks one
2. Display current content of that section
3. Gather edit instructions
4. Apply edits, display updated section
5. Confirm: [Y] Save | [N] Try again | [R] Revert

### Quality Check (Schema-Driven)

Validate against `schema.completeness.minimum` and `schema.completeness.recommended`:

```
AMAZON 6-PAGER QUALITY CHECK (Schema-Driven)
═══════════════════════════════════════════════════════════

MINIMUM REQUIREMENTS (from schema.completeness.minimum):
{for each rule}
{✅|❌} {rule}
{end for}

RECOMMENDED (from schema.completeness.recommended):
{for each rule}
{✅|⚠️} {rule}
{end for}

WRITING PRINCIPLES (from schema.format):
{for each principle}
□ {principle}
{end for}

ANTI-PATTERNS CHECK:
{for each anti_pattern}
{✅ Not found | ❌ Found} {anti_pattern}
{end for}

═══════════════════════════════════════════════════════════
RESULT: {PASS / ITEMS TO ADDRESS}
═══════════════════════════════════════════════════════════
```

### Finalization Flow

1. Display summary: document, location, version bump, status Draft → **Final**
2. Confirm: [Y] Finalize | [N] Continue reviewing

If [Y]:
- Update frontmatter: `status: final`, `finalized_date`, `finalized_by`, `stepsCompleted: [1,2,3,4]`
- Save document
- Display completion message with Amazon 6-Pager meeting format reminder

**WORKFLOW COMPLETE** — return to calling agent's menu.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:
- Review menu built from schema.sections (not hardcoded)
- Quality check uses schema.completeness rules
- Finalization requires explicit user approval

### ❌ SYSTEM FAILURE:
- Hardcoding section list instead of reading schema
- Finalizing without user approval
- Not running completeness check from schema
