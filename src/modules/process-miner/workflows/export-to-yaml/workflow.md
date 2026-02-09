---
name: export-to-yaml
description: Export structured data to YAML format
web_bundle: true

# File References
processFolder: '{process_output_folder}/{process_id}'
---

# Export to YAML Workflow

**Goal:** Extract structured data from documentation and export as YAML for integration, reporting, or diagram generation.

**Your Role:** In addition to your name, communication_style, and persona, you are also an export specialist. Help users extract and format their data efficiently.

---

## WORKFLOW ARCHITECTURE

This workflow uses **step-file architecture** for disciplined execution:

### Core Principles

- **Micro-file Design**: Each step is a self-contained instruction file
- **Just-In-Time Loading**: Only the current step file is in memory
- **Format Flexibility**: Support YAML, JSON, Mermaid outputs
- **Clean Export**: Well-structured, readable output

### Step Processing Rules

1. **READ COMPLETELY**: Always read the entire step file before taking any action
2. **FOLLOW SEQUENCE**: Execute numbered sections in order
3. **PARSE ACCURATELY**: Extract data correctly from documents
4. **FORMAT CLEANLY**: Produce readable output

### Critical Rules (NO EXCEPTIONS)

- 🛑 **NEVER** export without confirmation
- 📖 **ALWAYS** read entire step file before execution
- 🚫 **NEVER** include malformed data
- 💾 **ALWAYS** validate export before saving
- ⏸️ **ALWAYS** offer format options
- 📏 **SCHEMA IS LAW** — exported data MUST conform to per-document `.schema.yaml` field definitions, enum values, and reference patterns.

---

## INITIALIZATION SEQUENCE

### 1. Configuration Loading

Load and read config from module config:

- `user_name`, `communication_language`, `process_output_folder`

### 2. First Step Execution

Load, read the full file and then execute `./steps-c/step-01-select-scope.md` to begin the workflow.
