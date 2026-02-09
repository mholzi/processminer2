# Workflow Specification: analyze-improvements

**Module:** process-miner
**Type:** Feature Workflow
**Status:** Placeholder — To be created via create-workflow workflow
**Created:** 2026-02-04

---

## Workflow Overview

**Goal:** Identify transformation opportunities and process improvements.

**Description:** Analyzes AS-IS documentation to identify quick wins, strategic improvements, and transformation opportunities. Prioritizes by impact vs. effort.

**Workflow Type:** Analysis / Recommendations

---

## Workflow Structure

### Entry Point

```yaml
---
name: analyze-improvements
description: Identify transformation opportunities
web_bundle: true
installed_path: '{project-root}/_bmad/modules/process-miner/workflows/analyze-improvements'
---
```

### Mode

- [x] Create-only (steps-c/)
- [ ] Tri-modal

---

## Planned Steps

| Step | Name | Goal |
|------|------|------|
| 1 | Load AS-IS | Read pain points, exceptions, process steps |
| 2 | Identify Quick Wins | Find low-effort, high-impact improvements |
| 3 | Strategic Analysis | Identify larger transformation opportunities |
| 4 | Prioritize | Rank by impact vs. effort matrix |
| 5 | Generate Recommendations | Create TD# items with rationale |
| 6 | Update Progress | Mark transformation analysis complete |

---

## Workflow Inputs

### Required Inputs

- AS-IS documentation (substantially complete)
- Pain points (PP#) documented

### Optional Inputs

- Specific focus area
- Constraint parameters (budget, timeline)

---

## Workflow Outputs

### Output Format

- [x] Document-producing

### Output Files

- `{process_folder}/transformation-recommendations.md`
- Updates to `_progress.yaml`

---

## Agent Integration

### Primary Agent

Transformation Agent

### Other Agents

- Reads PDA output (AS-IS docs)
- Complements Innovation Agent analysis
- Feeds IT Architect for implementation design

---

## Implementation Notes

**Use the create-workflow workflow to build this workflow.**

Key considerations:
- All recommendations must reference source pain points (PP#)
- Use TD# prefix for recommendations
- Include impact/effort assessment for each
- Consider dependencies between recommendations

---

_Spec created on 2026-02-04 via BMAD Module workflow_
