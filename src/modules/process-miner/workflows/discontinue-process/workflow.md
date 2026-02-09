---
name: Discontinue Process
description: Safely archive a process by moving it to the discontinued folder and updating the registry. Captures discontinuation reason for audit trail. Reversible action - all documentation preserved.
web_bundle: false

# Configuration source
module_root: '{project-root}/src/modules/process-miner'
config_source: '{module_root}/config.yaml'

# Variables resolved from config
process_output_folder: '{config_source}:process_output_folder'
communication_language: '{config_source}:communication_language'

# Step file references
step_01: './steps-c/step-01-impact-summary.md'

# Shared workflow
select_process_workflow: '{module_root}/workflows/shared/select-existing-process/workflow.md'

# Registry and folders
process_registry_file: '{process_output_folder}/process-registry.md'
discontinued_folder: '{process_output_folder}/discontinued'

# Contributor tracking - set by agent activation
contributor_name: session-variable
contributor_role: session-variable

standalone: false
---

# Discontinue Process

**Goal:** Safely archive a process by moving its folder to the discontinued directory and updating the process registry, while maintaining a complete audit trail.

**Your Role:** In addition to your name, communication_style, and persona, you are also a process management facilitator collaborating with a process owner. This is a partnership, not a client-vendor relationship. You bring systematic safety protocols and audit trail expertise, while the user brings process context and discontinuation authority. Work together as equals. Note: This is a DESTRUCTIVE operation requiring explicit confirmation.

---

## WORKFLOW ARCHITECTURE

This uses **step-file architecture** for disciplined execution:

### Core Principles

- **Micro-file Design**: Each step is a self-contained instruction file that is part of an overall workflow that must be followed exactly
- **Just-In-Time Loading**: Only the current step file is in memory — never load future step files until told to do so
- **Sequential Enforcement**: Sequence within the step files must be completed in order, no skipping or optimization allowed
- **State Tracking**: This is an action workflow — state is tracked through session variables
- **Confirmation Required**: This workflow requires explicit typed confirmation before executing

### Step Processing Rules

1. **READ COMPLETELY**: Always read the entire step file before taking any action
2. **FOLLOW SEQUENCE**: Execute all numbered sections in order, never deviate
3. **WAIT FOR INPUT**: If a menu is presented, halt and wait for user selection
4. **CHECK CONTINUATION**: If the step has a menu with Continue as an option, only proceed to next step when user selects 'C' (Continue)
5. **SAVE STATE**: Update session variables and track progress before loading next step
6. **LOAD NEXT**: When directed, load, read entire file, then execute the next step file

### Critical Rules (NO EXCEPTIONS)

- 🛑 **NEVER** load multiple step files simultaneously
- 📖 **ALWAYS** read entire step file before execution
- 🚫 **NEVER** skip steps or optimize the sequence
- 🎯 **ALWAYS** follow the exact instructions in the step file
- ⏸️ **ALWAYS** halt at menus and wait for user input
- 📋 **NEVER** create mental todo lists from future steps
- ⚠️ **NEVER** execute file operations without explicit "DISCONTINUE" confirmation
- 📏 **SCHEMA IS LAW** — per-document `.schema.yaml` validation rules are generation constraints across all ProcessMiner workflows.

---

## WORKFLOW TYPE

**Action Workflow** — Performs file system operations and registry updates. Does not produce a document output.

---

## SESSION VARIABLES

These variables are set by:
- **Agent activation:** `contributor_name`, `contributor_role`
- **select-existing-process workflow:** `current_process_id`, `current_process_name`, `current_process_folder`

| Variable | Source | Description |
|----------|--------|-------------|
| `current_process_id` | select-existing-process | Process ID (e.g., P001) |
| `current_process_name` | select-existing-process | Process name |
| `current_process_folder` | select-existing-process | Full path to process folder |
| `contributor_name` | Agent activation | Name of person performing action |
| `contributor_role` | Agent activation | Role of contributor |

---

## STEP OVERVIEW

| Step | File | Goal |
|------|------|------|
| 1 | step-01-impact-summary.md | Display impact summary before discontinuation |
| 2 | step-02-capture-reason.md | Capture discontinuation reason for audit trail |
| 3 | step-03-confirmation.md | Require explicit typed "DISCONTINUE" confirmation |
| 4 | step-04-execute.md | Move folder and update registry |
| 5 | step-05-complete.md | Display completion summary and restoration instructions |

---

## INITIALIZATION SEQUENCE

### 1. Configuration Loading

Load and read full config from `{config_source}` and resolve:

- `process_output_folder`, `communication_language`

Set derived variables:
- `discontinued_folder`: `{process_output_folder}/discontinued`
- `process_registry`: `{process_output_folder}/process-registry.md`

### 2. Contributor Check

`contributor_name` and `contributor_role` are already set by agent activation. DO NOT ask again.

### 3. Process Selection (Shared Workflow)

Load, read and execute `{select_process_workflow}` to:
- Check registry for active processes
- Present numbered list for user selection
- Set session variables: `current_process_id`, `current_process_name`, `current_process_folder`

### 4. First Step Execution

After process is selected, load, read the full file and then execute `{step_01}` to begin the discontinuation process.
