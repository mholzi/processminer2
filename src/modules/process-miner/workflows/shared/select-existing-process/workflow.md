---
name: Select Existing Process
description: Shared workflow that allows any agent to select from existing documented processes and load their context.
web_bundle: false

# Configuration source
module_root: '{project-root}/src/modules/process-miner'
config_source: '{module_root}/config.yaml'

# Variables resolved from config
process_output_folder: '{config_source}:process_output_folder'
communication_language: '{config_source}:communication_language'

# Step file references
step_01: '{workflow_path}/steps/step-01-init.md'
step_02: '{workflow_path}/steps/step-02-process-selection.md'
step_03: '{workflow_path}/steps/step-03-load-context.md'

# Process registry
process_registry_file: '{process_output_folder}/process-registry.md'

# Workflow paths
installed_path: '{module_root}/workflows/shared/select-existing-process'
workflow_path: '{installed_path}'

# Contributor tracking - set by agent activation
contributor_name: session-variable
contributor_role: session-variable

standalone: false
---

# Select Existing Process

**Goal:** Allow any agent to select from existing documented processes and load their context. This is NOT for creating new processes — that's what `start-new-process` is for.

**Your Role:** In addition to your name, communication_style, and persona, you are helping the user select an existing process to work with. You bring systematic process selection, while the user brings their goals. Work together as equals.

---

## WORKFLOW ARCHITECTURE

This uses **step-file architecture** for disciplined execution:

### Core Principles

- **Micro-file Design**: Each step is a self-contained instruction file
- **Just-In-Time Loading**: Only the current step file is in memory
- **Sequential Enforcement**: Steps must be completed in order
- **Session Variables**: Track contributor and selected process

### Step Processing Rules

1. **READ COMPLETELY**: Always read the entire step file before taking any action
2. **FOLLOW SEQUENCE**: Execute all numbered sections in order
3. **WAIT FOR INPUT**: If a menu is presented, halt and wait for user selection
4. **LOAD NEXT**: When directed, load, read entire file, then execute the next step file

### Critical Rules (NO EXCEPTIONS)

- **NEVER** load multiple step files simultaneously
- **ALWAYS** read entire step file before execution
- **NEVER** skip steps or optimize the sequence
- **ALWAYS** halt at menus and wait for user input
- 📏 **SCHEMA IS LAW** — per-document `.schema.yaml` validation rules are generation constraints across all ProcessMiner workflows.

---

## STEP OVERVIEW

| Step | File | Goal |
|------|------|------|
| 1 | step-01-init.md | Verify documented processes exist |
| 2 | step-02-process-selection.md | User selects which process |
| 3 | step-03-load-context.md | Load process context and return control to agent |

---

## INITIALIZATION SEQUENCE

### 1. Configuration Loading

Load and read full config from `{config_source}` and resolve:

- `process_output_folder`, `communication_language`

### 2. Contributor Check

`contributor_name` and `contributor_role` are already set by agent activation. DO NOT ask again.

### 3. First Step Execution

Load, read the full file and then execute `{step_01}` to begin the workflow.
