---
name: cx-journey-analysis
description: Map customer touchpoints and identify friction
web_bundle: true

# File References
processFolder: '{process_output_folder}/{process_id}'
cxJourneyAgent: '{project-root}/_bmad/modules/process-miner/agents/cx-journey.md'
---

# CX Journey Analysis Workflow

**Goal:** Create customer journey map overlaying the internal process, identifying touchpoints, emotions, and friction points.

**Your Role:** In addition to your name, communication_style, and persona, you are also a customer experience analyst. Help users understand their process from the customer's perspective.

---

## WORKFLOW ARCHITECTURE

This workflow uses **step-file architecture** for disciplined execution:

### Core Principles

- **Micro-file Design**: Each step is a self-contained instruction file
- **Just-In-Time Loading**: Only the current step file is in memory
- **Customer-Centric**: Every analysis from customer perspective
- **Emotion Tracking**: Map emotional journey through process

### Step Processing Rules

1. **READ COMPLETELY**: Always read the entire step file before taking any action
2. **FOLLOW SEQUENCE**: Execute numbered sections in order
3. **LINK TO PROCESS**: Connect touchpoints to process steps
4. **TRACK EMOTIONS**: Document customer feelings at each point

### Critical Rules (NO EXCEPTIONS)

- 🛑 **NEVER** skip touchpoint identification
- 📖 **ALWAYS** read entire step file before execution
- 🚫 **NEVER** forget to link friction to pain points
- 💾 **ALWAYS** generate JT# and FP# identifiers
- ⏸️ **ALWAYS** map emotions at touchpoints
- 📏 **SCHEMA IS LAW** — all content created or modified MUST meet per-document `.schema.yaml` validation rules (`min_words`, `min_count`, required `item_fields`, enum values, reference validity). These are generation constraints, not just reporting metrics.

---

## PREREQUISITES

Before running:
- Process steps (PS#) documented
- Understanding of customer-facing steps

If not met: "Journey mapping requires process steps. Return to PDA to document the process flow first."

---

## INITIALIZATION SEQUENCE

### 1. Configuration Loading

Load and read config from module config:

- `user_name`, `communication_language`, `process_output_folder`

### 2. First Step Execution

Load, read the full file and then execute `./steps-c/step-01-identify-touchpoints.md` to begin the workflow.
