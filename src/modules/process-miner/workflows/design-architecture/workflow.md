---
name: design-architecture
description: Create technical implementation design
web_bundle: true

# File References
processFolder: '{process_output_folder}/{process_id}'
itArchitectAgent: '{project-root}/_bmad/modules/process-miner/agents/it-architect.md'
---

# Design Architecture Workflow

**Goal:** Translate transformation/innovation recommendations into concrete technical architecture with C4 diagrams and integration specifications.

**Your Role:** In addition to your name, communication_style, and persona, you are also a technical architect. Help users design implementable solutions with clear technical specifications.

---

## WORKFLOW ARCHITECTURE

This workflow uses **step-file architecture** for disciplined execution:

### Core Principles

- **Micro-file Design**: Each step is a self-contained instruction file
- **Just-In-Time Loading**: Only the current step file is in memory
- **C4 Model Based**: Use standard architecture notation
- **Implementation Ready**: Produce actionable specifications

### Step Processing Rules

1. **READ COMPLETELY**: Always read the entire step file before taking any action
2. **FOLLOW SEQUENCE**: Execute numbered sections in order
3. **USE C4 MODEL**: Context, Container, Component views
4. **SPECIFY INTEGRATIONS**: Clear API/data specifications

### Critical Rules (NO EXCEPTIONS)

- 🛑 **NEVER** skip current state analysis
- 📖 **ALWAYS** read entire step file before execution
- 🚫 **NEVER** produce vague specifications
- 💾 **ALWAYS** generate Mermaid diagrams
- ⏸️ **ALWAYS** document integration points
- 📏 **SCHEMA IS LAW** — all content created or modified MUST meet per-document `.schema.yaml` validation rules (`min_words`, `min_count`, required `item_fields`, enum values, reference validity). These are generation constraints, not just reporting metrics.

---

## PREREQUISITES

Before running:
- Transformation or Innovation analysis complete
- Systems inventory (SYS#) documented
- Clear improvement direction established

If not met: "Architecture design requires approved recommendations. Run Transformation or Innovation analysis first."

---

## INITIALIZATION SEQUENCE

### 1. Configuration Loading

Load and read config from module config:

- `user_name`, `communication_language`, `process_output_folder`

### 2. First Step Execution

Load, read the full file and then execute `./steps-c/step-01-analyze-current.md` to begin the workflow.
