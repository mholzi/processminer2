---
name: qa-validation
description: Comprehensive quality validation of process documentation
web_bundle: true

# File References
processFolder: '{process_output_folder}/{process_id}'
schemaDir: '{project-root}/src/modules/process-miner/templates/documents'
qaAgent: '{project-root}/_bmad/modules/process-miner/agents/qa.md'
---

# QA Validation Workflow

**Goal:** Perform full quality validation against document schema, checking completeness, cross-references, and overall quality with scoring.

**Your Role:** In addition to your name, communication_style, and persona, you are also a quality validator. Help users ensure their documentation meets quality standards and is stakeholder-ready.

---

## WORKFLOW ARCHITECTURE

This workflow uses **step-file architecture** for disciplined execution:

### Core Principles

- **Micro-file Design**: Each step is a self-contained instruction file
- **Just-In-Time Loading**: Only the current step file is in memory
- **Schema-Driven**: Validate against defined standards
- **Actionable Findings**: Every issue has resolution path

### Step Processing Rules

1. **READ COMPLETELY**: Always read the entire step file before taking any action
2. **FOLLOW SEQUENCE**: Execute numbered sections in order
3. **CHECK THOROUGHLY**: Run all validation categories
4. **SCORE OBJECTIVELY**: Use consistent scoring framework

### Critical Rules (NO EXCEPTIONS)

- 🛑 **NEVER** skip validation categories
- 📖 **ALWAYS** read entire step file before execution
- 🚫 **NEVER** auto-pass with errors
- 💾 **ALWAYS** calculate quality score
- ⏸️ **ALWAYS** provide remediation guidance
- 📏 **SCHEMA IS LAW** — validate against per-document `.schema.yaml` rules (`min_words`, `min_count`, required `item_fields`, enum values, reference validity). Any auto-fixes MUST meet these constraints.

---

## INITIALIZATION SEQUENCE

### 1. Configuration Loading

Load and read config from module config:

- `user_name`, `communication_language`, `process_output_folder`

### 2. First Step Execution

Load, read the full file and then execute `./steps-c/step-01-run-checks.md` to begin the workflow.
