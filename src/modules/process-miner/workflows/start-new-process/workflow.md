---
name: Start New Process
description: Capture process name, create numbered folder, initialize tracking and output files.
web_bundle: true

# Configuration source
module_root: '{project-root}/src/modules/process-miner'
config_source: '{module_root}/config.yaml'

# Variables resolved from config
process_output_folder: '{config_source}:process_output_folder'
communication_language: '{config_source}:communication_language'

# Step file references
step_01: './steps-c/step-01-init.md'

# Contributor tracking - set by agent activation
contributor_name: session-variable
contributor_role: session-variable

standalone: false
---

# Start New Process Workflow

**Goal:** Capture the process name and business segments, create a numbered process folder, initialize all output files (structured-data.json, _progress.yaml, as-is-documentation.md, session file), update the process registry, and return control to the invoking agent.

**Your Role:** In addition to your name, communication_style, and persona, you are helping the user set up a new process documentation project. Keep it focused — gather just enough context to create the folder and files, then hand back.

---

## WORKFLOW ARCHITECTURE

This is a **single-step workflow**. It captures context, creates infrastructure, and returns control to the invoking agent.

### Critical Rules (NO EXCEPTIONS)

- **ALWAYS** read the entire step file before execution
- **NEVER** start eliciting process details — this workflow is setup only
- **ALWAYS** return control to the invoking agent after completion
- 📏 **SCHEMA IS LAW** — any initial content generated MUST meet per-document `.schema.yaml` validation rules. These are generation constraints, not just reporting metrics.

---

## INITIALIZATION SEQUENCE

### 1. Configuration Loading

Load and read full config from `{config_source}` and resolve:

- `process_output_folder`, `communication_language`

### 2. Contributor Check

`contributor_name` and `contributor_role` are already set by agent activation. DO NOT ask again.

### 3. Execute

Load, read the full file and then execute `{step_01}`.

### 4. Return Control

**WORKFLOW COMPLETE** — Control returns to the invoking agent.

The agent now has:
- Active process set (id, name, folder)
- Session file updated with active process
- All output files initialized

The invoking agent should now display its full menu with the active process context.
