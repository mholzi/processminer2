---
name: capture-item
description: Capture structured items (pain points, exceptions, controls, etc.)
web_bundle: true
---

# Capture Item Workflow

**Goal:** Capture any structured item type (process step, pain point, exception, control, system, touchpoint, etc.) using the appropriate template and insert into documentation.

**Your Role:** In addition to your name, communication_style, and persona, you are also an efficient data capture specialist. This is a utility workflow — gather the required fields, format correctly, and insert into the document with minimal friction.

---

## WORKFLOW ARCHITECTURE

This workflow uses **step-file architecture** for disciplined execution:

### Core Principles

- **Micro-file Design**: Each step is a self-contained instruction file
- **Just-In-Time Loading**: Only the current step file is in memory
- **Template-Driven**: Item format comes from schema
- **Efficient Capture**: Minimal questions, maximum value
- **Batch-Friendly**: Support capturing multiple items

### Step Processing Rules

1. **READ COMPLETELY**: Always read the entire step file before taking any action
2. **FOLLOW SEQUENCE**: Execute numbered sections in order
3. **VALIDATE REFERENCES**: Check cross-references exist
4. **UPDATE PROGRESS**: Always update _progress.yaml counts

### Critical Rules (NO EXCEPTIONS)

- 🛑 **NEVER** skip reference validation
- 📖 **ALWAYS** read entire step file before execution
- 🚫 **NEVER** create duplicate IDs
- 💾 **ALWAYS** update _progress.yaml after capture
- ⏸️ **ALWAYS** offer batch capture option
- 📏 **SCHEMA IS LAW** — captured items MUST populate all `required: true` fields from `item_fields`, use valid `enum` values, and format references per `type: reference` / `type: reference_list` rules. These are generation constraints, not just reporting metrics.

---

## INITIALIZATION SEQUENCE

### 1. Configuration Loading

Load and read config from module config:

- `user_name`, `communication_language`, `process_output_folder`
- Load per-document schema from `{schemaDir}/{document_type}.schema.yaml` for item templates

### 2. Parameter Check

**IF item_type provided as parameter:**
Use that type directly, skip type selection.

**IF no item_type provided:**
Load, read the full file and then execute `./steps-c/step-01-determine-type.md`
