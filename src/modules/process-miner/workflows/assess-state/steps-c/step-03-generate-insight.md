---
name: 'step-03-progress-and-select'
description: 'Present factual progress table, one paragraph summary, and agent selection menu'

# Path Definitions
module_root: '{project-root}/src/modules/process-miner'
workflow_path: '{module_root}/workflows/assess-state'

# File References
thisStepFile: '{workflow_path}/steps-c/step-03-generate-insight.md'
workflowFile: '{workflow_path}/workflow.md'

# Agent references
pdaAgent: 'Process Documentation Analyst'
transformationAgent: 'Transformation Agent'
cxJourneyAgent: 'Client Journey Analyst'
controlAgent: 'Control Analyst'
innovationAgent: 'Innovation Analyst'
itArchitectAgent: 'IT Architect'
qaAgent: 'QA Agent'

# Session variables
contributor_name: session-variable
current_process_name: session-variable
current_process_id: session-variable
---

# Step 3: Progress & Next Agent

## STEP GOAL:

Present factual per-agent progress table, one paragraph on current state, then immediately show available agent options based on gate rules.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- CRITICAL: Read the complete step file before taking any action
- BE FACTUAL — numbers and percentages, not vague descriptions
- HALT and WAIT for user input after presenting the menu

### Role Reinforcement:

- Continue using your established name, communication_style, and persona
- Tone: professional, clear, concise

### Step-Specific Rules:

- One table, one paragraph, then the menu — nothing more
- ONLY show agents that pass gate checks
- NEVER auto-route to an agent

## EXECUTION SEQUENCE

### 1. Calculate Per-Agent Progress

**From the analysis in step 2, calculate completion % for each agent's scope:**

```
PDA (AS-IS Documentation):
  - Executive Summary:  word_count >= 100 → complete, else proportional %
  - Process Overview:   word_count >= 150 → complete, else proportional %
  - Process Steps:      count >= 3 → complete, else proportional %
  - Pain Points:        count >= 3 → complete, else proportional %
  - Exceptions:         count > 0 → complete, else 0%
  - Control Points:     count > 0 → complete, else 0%
  - Systems:            count >= 1 → complete, else 0%
  → PDA % = average of 7 section percentages

Control Analyst:
  → % based on controls section completeness in as-is + dedicated control document if exists

CX Journey Analyst:
  → % based on cx-journey.md existence and content (JT# count, FP# count)

Innovation Analyst:
  → % based on innovation.md existence and content (II# count)

Transformation Agent:
  → % based on transformation.md existence and content (TD# count)

IT Architect:
  → % based on architecture.md existence and content

QA Agent:
  → % based on validation status in structured-data.json
```

### 2. Present Progress Table

Display:
```
**{current_process_name} ({current_process_id}) — Progress**

| Agent                  | Status       | Progress |
|------------------------|-------------|----------|
| PDA (AS-IS)            | {status}    | {n}%     |
| Control Analyst        | {status}    | {n}%     |
| CX Journey Analyst     | {status}    | {n}%     |
| Innovation Analyst     | {status}    | {n}%     |
| Transformation Agent   | {status}    | {n}%     |
| IT Architect           | {status}    | {n}%     |
| QA Validation          | {status}    | {n}%     |
```

**Status values:** `Not Started`, `In Progress`, `Complete`

### 3. One Paragraph Summary

Below the table, write **exactly one paragraph** that:
- States the overall completion factually
- Notes which agent's work is the current priority (based on gate logic)
- Mentions the most significant gap if one exists
- Keeps it to 2-4 sentences maximum

**Example:**

"AS-IS documentation is 72% complete with 8 steps and 5 pain points captured. Control points and exceptions are the main gaps remaining before specialist agents can begin their work."

### 4. Agent Selection Menu

**Agent availability rules (STRICT — no exceptions):**

```
GATE 1: AS-IS documentation must be COMPLETE before ANY specialist is offered.
  - If as_is incomplete → ONLY PDA is available. No specialists.

GATE 2: Specialists unlock in order. Each requires the previous gate.
  - Control Analyst     → requires: AS-IS complete
  - CX Journey Analyst  → requires: AS-IS complete
  - Innovation Analyst   → requires: AS-IS complete
  - Transformation Agent → requires: Control + CX Journey + Innovation ALL complete

GATE 3: Architecture requires all specialists complete.
  - IT Architect → requires: Control + CX Journey + Innovation + Transformation ALL complete

GATE 4: QA requires architecture complete.
  - QA Agent → requires: IT Architect complete
```

**Dynamic menu — ONLY show agents that pass gate checks:**

```
IF as_is incomplete:
  "[PDA] Continue documenting with PDA
   [MENU] Return to Companion menu"

IF as_is complete, Control/CX Journey/Innovation NOT all complete:
  "[CTRL] Control Analyst (if not complete)
   [CX] CX Journey Analyst (if not complete)
   [II] Innovation Analyst (if not complete)
   [MENU] Return to Companion menu"

IF Control + CX Journey + Innovation ALL complete, Transformation pending:
  "[TRANS] Transformation Agent
   [MENU] Return to Companion menu"

IF all specialists complete, architecture pending:
  "[ARCH] IT Architect
   [MENU] Return to Companion menu"

IF architecture complete, not validated:
  "[QA] QA Agent for validation
   [MENU] Return to Companion menu"

IF all complete AND validated:
  Display: "Process fully documented and validated."
  "[MENU] Return to Companion menu"
```

**HALT and WAIT for user input.**

### 5. Handle User Selection

**On agent selection:**

Signal handoff to selected agent.

**On MENU:**

**WORKFLOW COMPLETE** — Return control to the invoking agent's menu.

---

## SYSTEM SUCCESS/FAILURE METRICS

### SUCCESS:

- Progress table displayed with all 7 agents
- Percentages calculated from actual document analysis
- One paragraph summary — factual, concise
- Only gate-eligible agents shown in menu
- User made the choice
- Handoff or menu return handled cleanly

### SYSTEM FAILURE:

- Missing agents from the table
- Vague status instead of percentages
- Multiple paragraphs or lengthy narrative
- Offering agents that don't pass gate checks
- Auto-routing without user choice
