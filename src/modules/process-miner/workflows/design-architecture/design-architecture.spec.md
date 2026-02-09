# Workflow Specification: design-architecture

**Module:** process-miner
**Type:** Feature Workflow
**Status:** Placeholder — To be created via create-workflow workflow
**Created:** 2026-02-04

---

## Workflow Overview

**Goal:** Create technical implementation design for process improvements.

**Description:** Translates transformation and innovation recommendations into concrete technical architecture, integration design, and implementation plans.

**Workflow Type:** Design / Technical Planning

---

## Workflow Structure

### Entry Point

```yaml
---
name: design-architecture
description: Create technical implementation design
web_bundle: true
installed_path: '{project-root}/_bmad/modules/process-miner/workflows/design-architecture'
---
```

### Mode

- [x] Create-only (steps-c/)
- [ ] Tri-modal

---

## Planned Steps

| Step | Name | Goal |
|------|------|------|
| 1 | Load Recommendations | Read transformation/innovation outputs |
| 2 | System Inventory | Review existing systems (SYS#) |
| 3 | Integration Analysis | Identify integration points |
| 4 | Architecture Design | Create target architecture |
| 5 | Generate Diagrams | Create Mermaid C4/system diagrams |
| 6 | Technical Requirements | Derive implementation requirements |
| 7 | Update Progress | Mark architecture design complete |

---

## Workflow Inputs

### Required Inputs

- Transformation recommendations (TD#)
- Innovation opportunities (II#)
- Systems inventory (SYS#)

### Optional Inputs

- Technology constraints
- Enterprise architecture standards
- Security requirements

---

## Workflow Outputs

### Output Format

- [x] Document-producing

### Output Files

- `{process_folder}/technical-architecture.md`
- Mermaid C4 diagrams embedded
- Updates to `_progress.yaml`

---

## Agent Integration

### Primary Agent

IT Architect

### Other Agents

- Reads Transformation Agent output
- Reads Innovation Agent output
- Uses PDA systems inventory

---

## Implementation Notes

**Use the create-workflow workflow to build this workflow.**

Key considerations:
- Generate Mermaid C4 diagrams from SYS# data
- Address integration points between systems
- Consider security and compliance in design
- Practical, implementable architecture
- Bridge business requirements and technical reality

---

_Spec created on 2026-02-04 via BMAD Module workflow_
