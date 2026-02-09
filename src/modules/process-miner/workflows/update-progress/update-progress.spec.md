# Workflow Specification: update-progress

**Module:** process-miner
**Type:** Utility Workflow (Core)
**Status:** Placeholder — To be created via create-workflow workflow
**Created:** 2026-02-04

---

## Workflow Overview

**Goal:** Update `_progress.yaml` with current state.

**Description:** A core utility that all agents call to record their work in the progress tracking file.

**Workflow Type:** Utility / State Management

---

## Workflow Structure

### Entry Point

```yaml
---
name: update-progress
description: Write to _progress.yaml
web_bundle: true
installed_path: '{project-root}/_bmad/modules/process-miner/workflows/update-progress'
---
```

### Mode

- [x] Single mode (state utility)
- [ ] Tri-modal

---

## Planned Steps

| Step | Name | Goal |
|------|------|------|
| 1 | Load Progress | Read current `_progress.yaml` |
| 2 | Determine Updates | What changed (section, count, status) |
| 3 | Apply Updates | Modify progress structure |
| 4 | Validate | Ensure valid YAML structure |
| 5 | Write Progress | Save updated `_progress.yaml` |
| 6 | Confirm | Return success status |

---

## Workflow Inputs

### Required Inputs

- Update type and values

### Update Types

- `section_status`: Update a section's status
- `section_count`: Update item count
- `section_word_count`: Update word count
- `agent_session`: Record agent activity
- `milestone`: Mark milestone achieved

---

## Workflow Outputs

### Output Format

- [x] Non-document (state file update)

### Output Files

- Updates `{process_folder}/_progress.yaml`

---

## Agent Integration

### Primary Agent

None — core utility used by ALL agents

### Used By

- Every agent calls this after completing work
- Companion reads the results

---

## Implementation Notes

**Use the create-workflow workflow to build this workflow.**

Key considerations:
- Atomic updates (don't corrupt file)
- Validate YAML before writing
- Update timestamps (last_updated, last_validated)
- Track agent sessions with timestamps
- Check milestone conditions after updates

---

_Spec created on 2026-02-04 via BMAD Module workflow_
