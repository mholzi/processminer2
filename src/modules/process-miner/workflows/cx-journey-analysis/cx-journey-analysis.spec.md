# Workflow Specification: cx-journey-analysis

**Module:** process-miner
**Type:** Feature Workflow
**Status:** Placeholder — To be created via create-workflow workflow
**Created:** 2026-02-04

---

## Workflow Overview

**Goal:** Map customer touchpoints and identify friction points.

**Description:** Creates a customer journey map overlaying the internal process, identifying touchpoints, emotions, channels, and friction points.

**Workflow Type:** Analysis / Mapping

---

## Workflow Structure

### Entry Point

```yaml
---
name: cx-journey-analysis
description: Map customer touchpoints, identify friction
web_bundle: true
installed_path: '{project-root}/_bmad/modules/process-miner/workflows/cx-journey-analysis'
---
```

### Mode

- [x] Create-only (steps-c/)
- [ ] Tri-modal

---

## Planned Steps

| Step | Name | Goal |
|------|------|------|
| 1 | Load Process Steps | Read PS# items from AS-IS |
| 2 | Identify Touchpoints | Map customer interaction points (JT#) |
| 3 | Capture Emotions | Document customer emotional state at each touchpoint |
| 4 | Find Friction | Identify friction points (FP#) |
| 5 | Generate Journey Map | Create Mermaid journey diagram |
| 6 | Update Progress | Mark CX journey analysis complete |

---

## Workflow Inputs

### Required Inputs

- AS-IS process steps (PS#) documented
- Understanding of customer interaction points

### Optional Inputs

- Existing customer feedback
- NPS or satisfaction data

---

## Workflow Outputs

### Output Format

- [x] Document-producing

### Output Files

- `{process_folder}/cx-journey.md`
- Mermaid journey diagram embedded
- Updates to `_progress.yaml`

---

## Agent Integration

### Primary Agent

Client Journey Analyst

### Other Agents

- Reads PDA output (process steps)
- Links friction points to pain points (PP#)

---

## Implementation Notes

**Use the create-workflow workflow to build this workflow.**

Key considerations:
- Use JT# prefix for touchpoints
- Use FP# prefix for friction points
- Capture channel (In-Person, Phone, Email, Web, Mobile, etc.)
- Identify "moments of truth" — critical experience points
- Generate Mermaid journey diagram from structured data

---

_Spec created on 2026-02-04 via BMAD Module workflow_
