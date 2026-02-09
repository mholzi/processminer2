# Workflow Specification: control-compliance

**Module:** process-miner
**Type:** Feature Workflow
**Status:** Placeholder — To be created via create-workflow workflow
**Created:** 2026-02-04

---

## Workflow Overview

**Goal:** Validate controls and assess compliance posture.

**Description:** Analyzes control points against process steps, identifies gaps, validates control design, and ensures audit-readiness.

**Workflow Type:** Analysis / Validation

---

## Workflow Structure

### Entry Point

```yaml
---
name: control-compliance
description: Validate controls, assess compliance
web_bundle: true
installed_path: '{project-root}/_bmad/modules/process-miner/workflows/control-compliance'
---
```

### Mode

- [x] Create-only (steps-c/)
- [ ] Tri-modal

---

## Planned Steps

| Step | Name | Goal |
|------|------|------|
| 1 | Load Process & Controls | Read PS# and CP# items |
| 2 | Control Coverage Analysis | Identify steps without controls |
| 3 | Control Type Assessment | Validate Preventive/Detective/Corrective balance |
| 4 | Evidence Review | Check evidence documentation for each control |
| 5 | Gap Identification | Document control gaps |
| 6 | Generate Report | Create compliance assessment |
| 7 | Update Progress | Mark control analysis complete |

---

## Workflow Inputs

### Required Inputs

- AS-IS process steps (PS#) documented
- Control points (CP#) documented

### Optional Inputs

- Regulatory framework reference
- Previous audit findings

---

## Workflow Outputs

### Output Format

- [x] Document-producing

### Output Files

- Control coverage report (section in AS-IS or separate doc)
- Gap analysis
- Updates to `_progress.yaml`

---

## Agent Integration

### Primary Agent

Control Analyst

### Other Agents

- Reads PDA output (process steps, controls)
- May inform Transformation recommendations

---

## Implementation Notes

**Use the create-workflow workflow to build this workflow.**

Key considerations:
- Every CP# must reference a PS#
- Classify controls: Preventive, Detective, Corrective
- Flag high-risk steps without controls
- Evidence requirements for audit readiness
- Banking regulatory awareness

---

_Spec created on 2026-02-04 via BMAD Module workflow_
