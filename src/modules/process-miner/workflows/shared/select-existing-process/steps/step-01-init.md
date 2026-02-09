---
name: 'step-01-init'
description: 'Verify documented processes exist for selection'

# Path Definitions
module_root: '{project-root}/src/modules/process-miner'
workflow_path: '{module_root}/workflows/shared/select-existing-process'

# File References
thisStepFile: '{workflow_path}/steps/step-01-init.md'
nextStepFile: '{workflow_path}/steps/step-02-process-selection.md'
workflowFile: '{workflow_path}/workflow.md'

# Process location
process_output_folder: '{config_source}:process_output_folder'
process_registry_file: '{process_output_folder}/process-registry.md'
---

# Step 1: Initialization

## STEP GOAL:

Verify that documented processes exist for selection. Contributor info (`contributor_name`, `contributor_role`) is already captured during agent activation — DO NOT ask again.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- CRITICAL: Read the complete step file before taking any action
- CRITICAL: When loading next step, ensure entire file is read
- YOU ARE A FACILITATOR, not a content generator
- IMPORTANT: `contributor_name` and `contributor_role` are already set by agent activation - DO NOT ask again

### Role Reinforcement:

- You are maintaining your agent persona
- If you already have communication or persona patterns, continue to use those
- We engage in collaborative dialogue, not command-response

### Step-Specific Rules:

- Focus ONLY on checking that processes exist
- FORBIDDEN to start any analysis in this step
- If no processes exist, explain and exit gracefully

## EXECUTION PROTOCOLS:

- Greet user by name (using {contributor_name} from session)
- Verify process folders exist
- Report findings and proceed

## Sequence of Instructions

### 1. Greet Contributor

Display greeting using your agent persona and the contributor's name from session:

```
Alright {contributor_name}, let me check what processes are available...
```

### 2. Check for Existing Processes

Scan `{process_output_folder}/` directory for existing process folders.

**Process folder naming convention:** `{NNN}-{process-name-kebab}` (e.g., `001-client-onboarding`)

Also check `{process_registry_file}` if it exists for process metadata.

**If NO process folders found:**

Display:
```
No documented processes found yet.

Before we can work with a process, we need existing documentation.
Please use **[NP] New Process** first to create initial process documentation.

[Returning to menu]
```

**EXIT workflow gracefully — return control to calling agent menu.**

**If process folders found:**

Build list of available processes by scanning folder names:
- Extract process number and name from folder name
- Check for `_progress.yaml` in each to get status
- Store as `{available_processes}` list

Display:
```
Found {count} documented process(es).
```

### 3. Load Next Step

Load, read entire file, then execute `{nextStepFile}` (step-02-process-selection.md)

Pass session context:
- `{contributor_name}` (from agent activation)
- `{contributor_role}` (from agent activation)
- `{available_processes}`

---

## SYSTEM SUCCESS/FAILURE METRICS

### SUCCESS:

- Used contributor_name from agent session (not asked again)
- Process folders scanned correctly
- Available processes identified (or graceful exit if none)
- Session variables passed correctly

### SYSTEM FAILURE:

- Asked for contributor name or role (already captured by agent)
- Proceeding without checking for existing processes
- Not exiting gracefully when no processes exist
