# Workflow Specification: export-to-yaml

**Module:** process-miner
**Type:** Utility Workflow
**Status:** Placeholder — To be created via create-workflow workflow
**Created:** 2026-02-04

---

## Workflow Overview

**Goal:** Export structured data to YAML format.

**Description:** Extracts structured data from documentation and exports as YAML for integration, reporting, or diagram generation.

**Workflow Type:** Utility / Export

---

## Workflow Structure

### Entry Point

```yaml
---
name: export-to-yaml
description: Export structured data
web_bundle: true
installed_path: '{project-root}/_bmad/modules/process-miner/workflows/export-to-yaml'
---
```

### Mode

- [x] Single mode (export utility)
- [ ] Tri-modal

---

## Planned Steps

| Step | Name | Goal |
|------|------|------|
| 1 | Select Data | Choose what to export (items, full doc, section) |
| 2 | Parse Documents | Extract structured data |
| 3 | Format as YAML | Convert to clean YAML structure |
| 4 | Write Export | Save to export file |

---

## Workflow Inputs

### Required Inputs

- Export scope (all | document | section | item_type)

### Optional Inputs

- Output path
- Include metadata

---

## Workflow Outputs

### Output Format

- [x] Non-document (YAML data file)

### Output Files

- `{process_folder}/exports/{export_name}.yaml`

---

## Agent Integration

### Primary Agent

None — utility available to all agents

### Used By

- All agents for data export
- Diagram generation workflows

---

## Implementation Notes

**Use the create-workflow workflow to build this workflow.**

Key considerations:
- Clean YAML structure
- Preserve references (PS#, PP#, etc.)
- Useful for integration with external tools
- Powers diagram generation (Mermaid from YAML)

---

_Spec created on 2026-02-04 via BMAD Module workflow_
