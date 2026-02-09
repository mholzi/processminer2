# Workflow Specification: qa-validation

**Module:** process-miner
**Type:** Feature Workflow
**Status:** Placeholder — To be created via create-workflow workflow
**Created:** 2026-02-04

---

## Workflow Overview

**Goal:** Run comprehensive quality validation on process documentation.

**Description:** Validates documentation completeness, consistency, cross-references, and adherence to document schema standards.

**Workflow Type:** Validation / Quality Assurance

---

## Workflow Structure

### Entry Point

```yaml
---
name: qa-validation
description: Run quality checks, validate completeness
web_bundle: true
installed_path: '{project-root}/_bmad/modules/process-miner/workflows/qa-validation'
---
```

### Mode

- [x] Single mode (validation workflow)
- [ ] Tri-modal

---

## Planned Steps

| Step | Name | Goal |
|------|------|------|
| 1 | Load Schema | Read per-document `.schema.yaml` + `_defaults.yaml` validation rules |
| 2 | Load Documents | Read all process documentation |
| 3 | Completeness Check | Verify minimum counts and word counts |
| 4 | Cross-Reference Validation | Validate all PP#→PS#, CP#→PS# references |
| 5 | Consistency Check | Check for orphaned references, duplicates |
| 6 | Generate Report | Create QA validation report |
| 7 | Calculate Score | Compute completeness percentage |
| 8 | Update Progress | Record validation results |

---

## Workflow Inputs

### Required Inputs

- Process folder with documentation
- Per-document `.schema.yaml` + `_defaults.yaml` for validation rules

### Optional Inputs

- Specific focus area
- Validation strictness level

---

## Workflow Outputs

### Output Format

- [x] Non-document (validation report/conversation)

### Output Files

- QA validation report (optional save)
- Updates to `_progress.yaml` with validation timestamp

---

## Agent Integration

### Primary Agent

QA Agent

### Other Agents

- Validates output from all agents
- Provides feedback to Companion for guidance

---

## Implementation Notes

**Use the create-workflow workflow to build this workflow.**

Key considerations:
- Leverage per-document `.schema.yaml` for automated rules
- Check cross-references are valid (referenced items exist)
- Verify minimum counts per section
- Calculate overall completeness score
- Constructive findings, not just errors

---

_Spec created on 2026-02-04 via BMAD Module workflow_
