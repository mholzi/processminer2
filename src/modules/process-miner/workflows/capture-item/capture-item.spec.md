# Workflow Specification: capture-item

**Module:** process-miner
**Type:** Utility Workflow (Shared)
**Status:** Placeholder — To be created via create-workflow workflow
**Created:** 2026-02-04

---

## Workflow Overview

**Goal:** Capture structured items (pain points, exceptions, controls, touchpoints, etc.).

**Description:** A parameterized utility workflow that captures any item type following the document schema patterns. Used by multiple agents.

**Workflow Type:** Utility / Data Capture

---

## Workflow Structure

### Entry Point

```yaml
---
name: capture-item
description: Add pain point, exception, control, touchpoint
web_bundle: true
installed_path: '{project-root}/_bmad/modules/process-miner/workflows/capture-item'
---
```

### Mode

- [x] Single mode (parameterized utility)
- [ ] Tri-modal

---

## Planned Steps

| Step | Name | Goal |
|------|------|------|
| 1 | Determine Item Type | Get item_type parameter or ask user |
| 2 | Load Schema | Read item template from per-document `.schema.yaml` |
| 3 | Gather Fields | Collect required and optional fields |
| 4 | Generate ID | Create next ID (e.g., PP#, EX#, CP#) |
| 5 | Format Item | Apply item template |
| 6 | Insert into Document | Add to appropriate section |
| 7 | Update Progress | Increment count in `_progress.yaml` |

---

## Workflow Inputs

### Required Inputs

- `item_type`: pain_point | exception | control_point | system | touchpoint | friction_point | recommendation | innovation

### Optional Inputs

- Pre-filled field values
- Target document (defaults to appropriate doc)

---

## Workflow Outputs

### Output Format

- [x] Document-producing (modifies existing doc)

### Output Files

- Updates target document with new item
- Updates `_progress.yaml` counts

---

## Agent Integration

### Primary Agent

None — shared utility used by multiple agents

### Used By

- PDA (pain points, exceptions, systems)
- Control Analyst (control points)
- CX Journey Analyst (touchpoints, friction points)
- Transformation Agent (recommendations)
- Innovation Analyst (innovation opportunities)

---

## Implementation Notes

**Use the create-workflow workflow to build this workflow.**

Key considerations:
- Schema-driven: read item template from per-document `.schema.yaml`
- Auto-generate sequential IDs (PP1, PP2, etc.)
- Validate required fields before saving
- Cross-reference validation (e.g., CP must reference valid PS#)
- Shared across agents — don't hardcode agent-specific logic

---

_Spec created on 2026-02-04 via BMAD Module workflow_
