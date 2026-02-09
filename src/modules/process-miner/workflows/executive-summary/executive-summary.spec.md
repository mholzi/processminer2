# Workflow Specification: executive-summary

**Module:** process-miner
**Type:** Utility Workflow
**Status:** Placeholder — To be created via create-workflow workflow
**Created:** 2026-02-04

---

## Workflow Overview

**Goal:** Generate executive summary for stakeholders.

**Description:** Creates a concise, stakeholder-ready summary of process documentation, findings, and recommendations.

**Workflow Type:** Utility / Report Generation

---

## Workflow Structure

### Entry Point

```yaml
---
name: executive-summary
description: Generate summary for stakeholders
web_bundle: true
installed_path: '{project-root}/_bmad/modules/process-miner/workflows/executive-summary'
---
```

### Mode

- [x] Single mode (generation utility)
- [ ] Tri-modal

---

## Planned Steps

| Step | Name | Goal |
|------|------|------|
| 1 | Load All Docs | Read all process documentation |
| 2 | Extract Key Points | Identify highlights, findings, recommendations |
| 3 | Compose Summary | Write executive-friendly narrative |
| 4 | Add Metrics | Include counts, percentages, scores |
| 5 | Format Output | Create polished summary document |

---

## Workflow Inputs

### Required Inputs

- Process folder with documentation

### Optional Inputs

- Focus area (e.g., "focus on controls")
- Length preference (brief | standard | detailed)
- Audience (executive | technical | compliance)

---

## Workflow Outputs

### Output Format

- [x] Document-producing

### Output Files

- `{process_folder}/executive-summary.md`

---

## Agent Integration

### Primary Agent

None — utility available to all agents

### Used By

- Transformation Agent (transformation summary)
- Innovation Agent (innovation summary)
- Any agent needing stakeholder output

---

## Implementation Notes

**Use the create-workflow workflow to build this workflow.**

Key considerations:
- Stakeholder-friendly language (no jargon)
- Key metrics and counts
- Highlight top pain points and recommendations
- Professional formatting
- Suitable for presentations

---

_Spec created on 2026-02-04 via BMAD Module workflow_
