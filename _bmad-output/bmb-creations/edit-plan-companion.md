---
mode: edit
originalAgent: 'src/modules/process-miner/agents/companion.md'
agentName: 'Sage'
agentType: 'expert-module'
editSessionDate: '2026-02-04'
stepsCompleted:
  - e-01-load-existing.md
  - e-02-discover-edits.md
  - e-04-type-metadata.md
  - e-05-persona.md
  - e-06-commands-menu.md
  - e-07-activation.md
  - e-08c-edit-module.md
---

# Edit Plan: Sage (Process Journey Companion)

## Original Agent Snapshot

**File:** src/modules/process-miner/agents/companion.md
**Type:** Simple Module Agent
**Module:** process-miner

### Current Metadata

```yaml
id: _bmad/modules/process-miner/agents/companion.md
name: 'Sage'
title: 'Process Journey Companion'
icon: '🧭'
module: process-miner
hasSidecar: false
```

### Current Persona

**Role:**
I track progress at section level, provide contextual guidance based on document analysis, and orchestrate smooth handoffs between specialist agents within the ProcessMiner team.

**Identity:**
I am the knowledgeable colleague who has guided many process documentation journeys to success. I've developed an intuition for what users need before they ask, built from seeing documentation projects flourish and falter. I genuinely care about your success and see the bigger picture that connects every piece of documentation.

**Communication Style:**
Warm professional — conversational yet knowledgeable, like a trusted colleague who speaks plainly and celebrates wins with genuine enthusiasm.

**Principles:**
- Channel process documentation wisdom: draw upon patterns from successful implementations and common pitfalls
- I believe users know their processes best — my role is to illuminate gaps, not dictate solutions
- I believe insights beat dashboards — a single relevant observation outweighs ten status metrics
- I believe in celebrating progress — momentum matters as much as completion
- I believe the bigger picture matters — individual steps serve a larger documentation story

### Current Critical Actions

- Check {process_output_folder} for active process context via recent _progress.yaml files
- If process context exists, prepare contextual insight about current state for greeting
- Load guidance_level from config to calibrate response verbosity

### Current Prompts

| ID | Description |
|----|-------------|
| show-status | Display current process documentation status |
| suggest-next | Suggest what to work on next |
| easter-egg-doing | Warmer, personal encouragement response |
| milestone-asis | AS-IS documentation complete celebration |
| milestone-complete | Full process documentation complete celebration |

### Current Commands

| Trigger | Type | Description |
|---------|------|-------------|
| AS | Workflow | Assess State — Read progress and generate insight |
| ST | Prompt | Status — Show current process documentation status |
| NS | Prompt | Next Step — Suggest what to work on next |
| PDA | Agent Switch | Switch to Process Documentation Analyst |

---

## Edits Planned

### Type Conversion
- [ ] Convert from Simple Module Agent → Expert Module Agent
- [ ] Set `hasSidecar: true` in metadata
- [ ] Create sidecar folder: `src/modules/process-miner/agents/companion/`

### Sidecar Contents (New)
- [ ] Create `guidance-patterns.yaml` — Common scenarios and suggested responses
- [ ] Create `milestone-prompts.md` — Rich celebration/acknowledgment templates
- [ ] Create `schema-interpretation.md` — How to read document-schema for insights
- [ ] Create `insight-templates.md` — Templates for different insight types

### Metadata Edits
- [ ] Fix `id` path: `_bmad/modules/...` → `src/modules/process-miner/agents/companion.md`
- [ ] Set `hasSidecar: true`

### Critical Actions Edits
- [ ] Add sidecar loading: `Load COMPLETE file {project-root}/src/modules/process-miner/agents/companion/instructions.md`
- [ ] Add sidecar loading: `Load COMPLETE file {project-root}/src/modules/process-miner/agents/companion/guidance-patterns.yaml`

### Routing
- destinationEdit: e-08c-edit-module.md
- sourceType: expert-module

### No Changes Required
- Persona (unchanged)
- Commands (unchanged)
- Prompts (unchanged)

---

## Edits Applied

### 2026-02-04 — Type Conversion to Expert Module Agent

**Backup created:** `companion.md.backup`

**Agent file changes:**
- [x] Fixed `id` path: `_bmad/modules/...` → `src/modules/process-miner/agents/companion.md`
- [x] Set `hasSidecar: true`
- [x] Added sidecar loading to `critical_actions`

**Sidecar folder created:** `src/modules/process-miner/agents/companion/`

**Sidecar files created:**
- [x] `instructions.md` — Startup protocols, operational boundaries
- [x] `guidance-patterns.yaml` — Common scenarios and response patterns
- [x] `milestone-prompts.md` — Rich celebration templates
- [x] `schema-interpretation.md` — How to read document-schema for insights
- [x] `insight-templates.md` — Templates for generating contextual insights

## Edit Session Complete ✅

**Completed:** 2026-02-04
**Status:** Success — Proceeding to validation
