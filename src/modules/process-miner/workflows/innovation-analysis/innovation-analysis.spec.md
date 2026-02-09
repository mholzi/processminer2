# Workflow Specification: innovation-analysis

**Module:** process-miner
**Type:** Feature Workflow
**Status:** Placeholder — To be created via create-workflow workflow
**Created:** 2026-02-04

---

## Workflow Overview

**Goal:** Identify automation and technology opportunities.

**Description:** Analyzes process for automation candidates, AI/ML applications, and technology modernization opportunities.

**Workflow Type:** Analysis / Recommendations

---

## Workflow Structure

### Entry Point

```yaml
---
name: innovation-analysis
description: Identify automation & tech opportunities
web_bundle: true
installed_path: '{project-root}/_bmad/modules/process-miner/workflows/innovation-analysis'
---
```

### Mode

- [x] Create-only (steps-c/)
- [ ] Tri-modal

---

## Planned Steps

| Step | Name | Goal |
|------|------|------|
| 1 | Load AS-IS | Read process steps, pain points, systems |
| 2 | Identify Manual Steps | Find automation candidates |
| 3 | Assess Technology Fit | Match opportunities to technology solutions |
| 4 | Feasibility Analysis | Evaluate complexity and constraints |
| 5 | ROI Estimation | Quantify potential benefits |
| 6 | Generate Recommendations | Create II# items |
| 7 | Update Progress | Mark innovation analysis complete |

---

## Workflow Inputs

### Required Inputs

- AS-IS documentation (substantially complete)
- Systems inventory (SYS#)

### Optional Inputs

- Technology constraints
- Budget parameters
- Existing technology roadmap

---

## Workflow Outputs

### Output Format

- [x] Document-producing

### Output Files

- `{process_folder}/innovation-opportunities.md`
- Updates to `_progress.yaml`

---

## Agent Integration

### Primary Agent

Innovation Analyst

### Other Agents

- Reads PDA output (AS-IS docs, systems)
- Complements Transformation Agent
- Feeds IT Architect for implementation

---

## Implementation Notes

**Use the create-workflow workflow to build this workflow.**

Key considerations:
- Use II# prefix for innovation opportunities
- Consider: RPA, AI/ML, API integration, workflow automation
- Respect regulatory constraints on automation
- Quantify ROI where possible
- Concrete recommendations, not vague "digital transformation"

---

_Spec created on 2026-02-04 via BMAD Module workflow_
