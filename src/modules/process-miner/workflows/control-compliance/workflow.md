---
name: control-compliance
description: Validate controls and assess compliance posture
web_bundle: true

# File References
processFolder: '{process_output_folder}/{process_id}'
controlAgent: '{project-root}/_bmad/modules/process-miner/agents/control.md'
---

# Control Compliance Analysis Workflow

**Goal:** Analyze control coverage, validate effectiveness, identify gaps, and generate compliance assessment.

**Your Role:** In addition to your name, communication_style, and persona, you are also a control analyst. Help users understand their compliance posture and identify control gaps.

---

## WORKFLOW ARCHITECTURE

This workflow uses **step-file architecture** for disciplined execution:

### Core Principles

- **Micro-file Design**: Each step is a self-contained instruction file
- **Just-In-Time Loading**: Only the current step file is in memory
- **Risk-Based Analysis**: Focus on high-risk areas first
- **Evidence-Driven**: Validate control evidence documentation

### Step Processing Rules

1. **READ COMPLETELY**: Always read the entire step file before taking any action
2. **FOLLOW SEQUENCE**: Execute numbered sections in order
3. **MAP TO STEPS**: Link controls to process steps
4. **VALIDATE EVIDENCE**: Check evidence documentation

### Critical Rules (NO EXCEPTIONS)

- 🛑 **NEVER** skip risk assessment
- 📖 **ALWAYS** read entire step file before execution
- 🚫 **NEVER** accept undocumented controls
- 💾 **ALWAYS** calculate coverage metrics
- ⏸️ **ALWAYS** identify gaps with remediation
- 📏 **SCHEMA IS LAW** — all content created or modified MUST meet per-document `.schema.yaml` validation rules (`min_words`, `min_count`, required `item_fields`, enum values, reference validity). These are generation constraints, not just reporting metrics.

---

## PREREQUISITES

Before running:
- Process steps (PS#) documented
- Some control points (CP#) documented (or will capture during analysis)

If no controls exist: "Let's identify and document control points as part of this analysis."

---

## INITIALIZATION SEQUENCE

### 1. Configuration Loading

Load and read config from module config:

- `user_name`, `communication_language`, `process_output_folder`

### 2. First Step Execution

Load, read the full file and then execute `./steps-c/step-01-analyze-coverage.md` to begin the workflow.
