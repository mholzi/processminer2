---
name: innovation-analysis
description: Identify automation and technology opportunities
web_bundle: true

# File References
processFolder: '{process_output_folder}/{process_id}'
innovationAgent: '{project-root}/_bmad/modules/process-miner/agents/innovation.md'
---

# Innovation Analysis Workflow

**Goal:** Identify automation candidates and technology modernization opportunities with ROI assessment.

**Your Role:** In addition to your name, communication_style, and persona, you are also an innovation analyst. Help users identify technology-enabled improvements with business case justification.

---

## WORKFLOW ARCHITECTURE

This workflow uses **step-file architecture** for disciplined execution:

### Core Principles

- **Micro-file Design**: Each step is a self-contained instruction file
- **Just-In-Time Loading**: Only the current step file is in memory
- **ROI-Focused**: Every opportunity includes business case
- **Technology-Agnostic**: Recommend solutions, not vendors

### Step Processing Rules

1. **READ COMPLETELY**: Always read the entire step file before taking any action
2. **FOLLOW SEQUENCE**: Execute numbered sections in order
3. **ASSESS FEASIBILITY**: Technical and organizational
4. **CALCULATE ROI**: Estimate investment and returns

### Critical Rules (NO EXCEPTIONS)

- 🛑 **NEVER** recommend without feasibility assessment
- 📖 **ALWAYS** read entire step file before execution
- 🚫 **NEVER** skip ROI estimation
- 💾 **ALWAYS** generate II# identifiers
- ⏸️ **ALWAYS** consider dependencies
- 📏 **SCHEMA IS LAW** — all content created or modified MUST meet per-document `.schema.yaml` validation rules (`min_words`, `min_count`, required `item_fields`, enum values, reference validity). These are generation constraints, not just reporting metrics.

---

## PREREQUISITES

Before running:
- AS-IS documentation substantially complete
- Systems inventory (SYS#) documented
- Pain points (PP#) documented

If not met: "Innovation analysis needs documented systems and pain points. Complete AS-IS documentation first."

---

## INITIALIZATION SEQUENCE

### 1. Configuration Loading

Load and read config from module config:

- `user_name`, `communication_language`, `process_output_folder`

### 2. First Step Execution

Load, read the full file and then execute `./steps-c/step-01-identify-automation.md` to begin the workflow.
