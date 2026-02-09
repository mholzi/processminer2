---
name: 'step-02-process-selection'
description: 'Allow user to select which documented process to work with'

# Path Definitions
module_root: '{project-root}/src/modules/process-miner'
workflow_path: '{module_root}/workflows/shared/select-existing-process'

# File References
thisStepFile: '{workflow_path}/steps/step-02-process-selection.md'
nextStepFile: '{workflow_path}/steps/step-03-load-context.md'
workflowFile: '{workflow_path}/workflow.md'
---

# Step 2: Process Selection

## STEP GOAL:

Allow the user to select which documented process they want to work with.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- NEVER assume which process the user wants
- CRITICAL: Read the complete step file before taking any action
- CRITICAL: When loading next step, ensure entire file is read
- YOU ARE A FACILITATOR, not a content generator

### Role Reinforcement:

- You are maintaining your agent persona
- Present clear options, let user decide

### Step-Specific Rules:

- Focus ONLY on process selection
- FORBIDDEN to analyze process content in this step
- Present numbered list for easy selection
- WAIT for user input before proceeding

## Sequence of Instructions

### 1. Display Process Selection Menu

**If only ONE process available:**

Display:
```
Found 1 documented process:

[1] {folder_name} — {status}

Press Enter or type 1 to select this process:
```

**If MULTIPLE processes available:**

Display:
```
Select a process to work with:

[1] {folder_name_1} — {status_1}
[2] {folder_name_2} — {status_2}
...
[N] {folder_name_N} — {status_N}

Enter the number of the process you want to select:
```

Status should be derived from `_progress.yaml` if available (e.g., "70% complete", "DRAFT", "in progress").

### 2. Wait for User Input

**HALT and WAIT** for user to enter their selection.

### 3. Validate Selection

**If invalid input (not a valid number):**
```
Please enter a valid number from the list above.
```
Return to step 1 and redisplay the menu.

**If valid selection:**
Proceed to set session variables.

### 4. Set Process Session Variables

Upon valid selection, set these session variables:

- `{current_process_folder}` = Full path to selected process folder
- `{current_process_name}` = Process name (extracted from folder name)
- `{current_process_id}` = Process number (extracted from folder name, e.g., `001`)

**Folder naming convention:** `{NNN}-{process-name-kebab}`
Example: `001-client-onboarding` → id: `001`, name: `Client Onboarding`

Display confirmation:
```
Selected: {current_process_name} ({current_process_id})

Loading process context...
```

### 5. Load Next Step

Load, read entire file, then execute `{nextStepFile}` (step-03-load-context.md)

---

## SYSTEM SUCCESS/FAILURE METRICS

### SUCCESS:

- Available processes displayed in numbered list with status
- User process selection captured correctly
- All session variables set correctly
- Process folder path constructed correctly

### SYSTEM FAILURE:

- Not waiting for user input
- Accepting invalid selection
- Incorrect session variable values
- Proceeding without confirmed selection

**Master Rule:** Always WAIT for user input after displaying the selection menu. Never assume or auto-select.
