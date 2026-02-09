# Workflow Specification: qa-check

**Module:** process-miner
**Type:** Utility Workflow
**Status:** Placeholder — To be created via create-workflow workflow
**Created:** 2026-02-04

---

## Workflow Overview

**Goal:** Run quick validation checks on documentation.

**Description:** A lightweight validation utility that can be called by any agent to check specific aspects of documentation quality.

**Workflow Type:** Utility / Quick Validation

---

## Workflow Structure

### Entry Point

```yaml
---
name: qa-check
description: Run validation checks
web_bundle: true
installed_path: '{project-root}/_bmad/modules/process-miner/workflows/qa-check'
---
```

### Mode

- [x] Single mode (quick utility)
- [ ] Tri-modal

---

## Planned Steps

| Step | Name | Goal |
|------|------|------|
| 1 | Determine Scope | What to check (section, document, references) |
| 2 | Load Rules | Get validation rules from schema |
| 3 | Run Checks | Execute validation |
| 4 | Report Results | Return pass/fail with details |

---

## Workflow Inputs

### Required Inputs

- Check type: references | completeness | counts | all

### Optional Inputs

- Specific section to check
- Strictness level

---

## Workflow Outputs

### Output Format

- [x] Non-document (validation results)

### Output Files

- None (conversational results)
- Optionally updates `_progress.yaml` validation timestamp

---

## Agent Integration

### Primary Agent

QA Agent

### Used By

- Callable by any agent before finalizing work
- Companion may invoke for state assessment

---

## Implementation Notes

**Use the create-workflow workflow to build this workflow.**

Key considerations:
- Lightweight, fast execution
- Callable programmatically by other workflows
- Return structured results (not just text)
- Distinct from full qa-validation (this is quick check)

---

_Spec created on 2026-02-04 via BMAD Module workflow_
