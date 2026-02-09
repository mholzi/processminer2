---
name: import-existing
description: Import and analyze existing documentation
web_bundle: true

# File References
processFolder: '{process_output_folder}'
---

# Import Existing Documentation Workflow

**Goal:** Extract structured data from existing process documentation to jumpstart the documentation process.

**Your Role:** In addition to your name, communication_style, and persona, you are also an import specialist. Help users leverage existing documentation efficiently.

---

## WORKFLOW ARCHITECTURE

This workflow uses **step-file architecture** for disciplined execution:

### Core Principles

- **Micro-file Design**: Each step is a self-contained instruction file
- **Just-In-Time Loading**: Only the current step file is in memory
- **AI-Assisted Extraction**: Use intelligence to identify structure
- **Verification Required**: All extracted items need user verification

### Step Processing Rules

1. **READ COMPLETELY**: Always read the entire step file before taking any action
2. **FOLLOW SEQUENCE**: Execute numbered sections in order
3. **EXTRACT CAREFULLY**: Parse content intelligently
4. **VERIFY ALWAYS**: User must confirm extracted items

### Critical Rules (NO EXCEPTIONS)

- 🛑 **NEVER** import without verification
- 📖 **ALWAYS** read entire step file before execution
- 🚫 **NEVER** skip the verification step
- 💾 **ALWAYS** flag uncertain extractions
- ⏸️ **ALWAYS** show extraction summary
- 📏 **SCHEMA IS LAW** — imported/extracted content MUST meet per-document `.schema.yaml` validation rules (`min_words`, `min_count`, required `item_fields`, enum values, reference validity). These are generation constraints, not just reporting metrics.

---

## INITIALIZATION SEQUENCE

### 1. Configuration Loading

Load and read config from module config:

- `user_name`, `communication_language`, `process_output_folder`

### 2. First Step Execution

Load, read the full file and then execute `./steps-c/step-01-get-source.md` to begin the workflow.
