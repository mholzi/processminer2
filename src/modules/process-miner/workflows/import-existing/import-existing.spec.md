# Workflow Specification: import-existing

**Module:** process-miner
**Type:** Utility Workflow
**Status:** Placeholder — To be created via create-workflow workflow
**Created:** 2026-02-04

---

## Workflow Overview

**Goal:** Import and analyze existing documentation.

**Description:** Takes existing process documentation (Word, PDF, markdown) and extracts structured data to jumpstart the documentation process.

**Workflow Type:** Utility / Import

---

## Workflow Structure

### Entry Point

```yaml
---
name: import-existing
description: Import & analyze existing documentation
web_bundle: true
installed_path: '{project-root}/_bmad/modules/process-miner/workflows/import-existing'
---
```

### Mode

- [x] Single mode (import utility)
- [ ] Tri-modal

---

## Planned Steps

| Step | Name | Goal |
|------|------|------|
| 1 | Locate Documents | Get path to existing documentation |
| 2 | Parse Content | Extract text from documents |
| 3 | Analyze Structure | Identify sections, steps, items |
| 4 | Extract Items | Find pain points, systems, controls |
| 5 | Map to Schema | Align with per-document `.schema.yaml` |
| 6 | Generate Draft | Create structured documentation |
| 7 | Update Progress | Initialize `_progress.yaml` with imported data |

---

## Workflow Inputs

### Required Inputs

- Path to existing documentation

### Optional Inputs

- Document type hints
- Section mapping preferences

---

## Workflow Outputs

### Output Format

- [x] Document-producing

### Output Files

- Imported/converted documentation
- Initialized `_progress.yaml`

---

## Agent Integration

### Primary Agent

Process Documentation Analyst (PDA)

### Other Agents

- Any agent may invoke for importing domain-specific docs

---

## Implementation Notes

**Use the create-workflow workflow to build this workflow.**

Key considerations:
- Support markdown, text input (PDF/Word would need external tools)
- AI-assisted extraction of structured items
- Map existing sections to schema sections
- Flag items needing verification
- Significant time-saver for existing processes

---

_Spec created on 2026-02-04 via BMAD Module workflow_
