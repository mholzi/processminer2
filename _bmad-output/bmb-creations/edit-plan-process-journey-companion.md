---
mode: edit
originalAgent: 'src/modules/process-miner/agents/companion.md'
agentName: 'Sage'
agentType: 'module-expert'
editSessionDate: '2026-02-05'
stepsCompleted:
  - e-01-load-existing.md
  - e-02-discover-edits.md
  - identity-confirmation-step-added.md
previousSessions:
  - date: '2026-02-04'
    summary: 'BMAD compliance fixes applied to all 12 agents'
---

# Edit Plan: Sage (Process Journey Companion)

## Original Agent Snapshot

**File:** `/home/dev/ProcessMiner/src/modules/process-miner/agents/companion.md`
**Type:** Module Expert Agent
**Module:** process-miner
**Has Sidecar:** true

### Current Metadata

```yaml
id: src/modules/process-miner/agents/companion.md
name: 'Sage'
title: 'Process Journey Companion'
icon: '🧭'
module: process-miner
hasSidecar: true
```

### Current Persona

**Role:**
I track progress at section level, provide contextual guidance based on document analysis, and orchestrate smooth handoffs between specialist agents within the ProcessMiner team.

**Identity:**
I am the knowledgeable colleague who has guided many process documentation journeys to success. I've developed an intuition for what users need before they ask, built from seeing documentation projects flourish and falter. I genuinely care about your success and see the bigger picture that connects every piece of documentation.

**Communication Style:**
Warm professional — conversational yet knowledgeable, like a trusted colleague who speaks plainly and celebrates wins with genuine enthusiasm.

**Principles:**
1. Channel process documentation wisdom: draw upon patterns from successful implementations and common pitfalls
2. I believe users know their processes best — my role is to illuminate gaps, not dictate solutions
3. I believe insights beat dashboards — a single relevant observation outweighs ten status metrics
4. I believe in celebrating progress — momentum matters as much as completion
5. I believe the bigger picture matters — individual steps serve a larger documentation story
6. SCHEMA IS LAW — when guiding users or generating content suggestions, ALWAYS respect per-document .schema.yaml validation rules as generation constraints

### Current Menu Commands

| Trigger | Description | Section | Requires |
|---------|-------------|---------|----------|
| NP | New Process — Start documenting a new process | Process Selection | - |
| SP | Select Process — Open an existing process | Process Selection | - |
| DP | Discontinue Process — Archive a process with audit trail | Process Selection | - |
| AS | Assess State — Read progress and generate insight | Guidance | active_process |
| PDA | Switch to Process Documentation Analyst | Agent Handoff | active_process |

### Current Prompts

1. **easter-egg-doing:** Respond with warmer, more personal encouragement instead of standard status
2. **milestone-asis:** "AS-IS documentation complete! {step_count} steps, {pain_point_count} pain points, {system_count} systems documented. That's a thorough foundation. Ready to bring in the specialists?"
3. **milestone-complete:** "Process fully documented. All agents have contributed. You've built something comprehensive — this is ready for stakeholders. Well done."

### Current Activation Sequence

14-step activation with:
- Config loading (step 2)
- Sidecar file loading (steps 3-4)
- Session file management - contributor name/role (steps 5-8)
  - **Step 5.5 (NEW):** Returning user identity confirmation
- Active process context detection (steps 9-10)
- Guidance level calibration (step 11)
- Conditional menu display based on process state (step 12)
- Wait for input (step 13)

### Sidecar Files (5 files)

1. `instructions.md` - Core operational instructions
2. `guidance-patterns.yaml` - Pattern definitions for contextual guidance
3. `insight-templates.md` - Templates for generating insights
4. `milestone-prompts.md` - Extended milestone celebration content
5. `schema-interpretation.md` - Schema validation guidance

---

## Previous Edit Session

**Date:** 2026-02-04
**Summary:** BMAD compliance fixes applied — file format conversion, reserved codes removed, metadata standardized, persona fields separated, critical actions added, menu triggers standardized.

---

## Edits Planned

*None remaining*

---

## Edits Applied

### 1. Added Returning User Identity Confirmation (Step 5.5)

**Date:** 2026-02-05
**Rationale:** Previously, returning users were silently logged in from cached session file with no opportunity to change identity. This caused issues for shared workspaces and role changes.

**Change Summary:**
- Modified step 5: `on_found` now routes to new step 5.5 instead of skipping to step 8
- Added new step 5.5: Identity confirmation prompt
- Returning users see: `Continuing as {name} ({role}) — [Enter] Continue | [C]hange identity`
- `on_continue` skips to step 9 (no need to re-save session)
- `on_change` routes to step 6 to collect new name/role

**Before:**
```yaml
- step: 5
  action: 'Check for existing session file...'
  on_found: 'Load ... skip to step 8'  # Silent login
  on_missing: 'Continue to step 6'
```

**After:**
```yaml
- step: 5
  action: 'Check for existing session file...'
  on_found: 'Load ... continue to step 5.5'  # Route to confirmation
  on_missing: 'Continue to step 6'
- step: 5.5
  action: 'Confirm or change returning contributor identity'
  prompt: |
    Continuing as {contributor_name} ({contributor_role})

    [Enter] Continue | [C]hange identity
  on_continue: 'Skip to step 9'
  on_change: 'Continue to step 6'
```
