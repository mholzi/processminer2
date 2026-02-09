---
name: 'step-01-impact-summary'
description: 'Display impact summary to user before discontinuation'

# Path Definitions
module_root: '{project-root}/src/modules/process-miner'
workflow_path: '{module_root}/workflows/discontinue-process'

# File References
thisStepFile: '{workflow_path}/steps-c/step-01-impact-summary.md'
nextStepFile: '{workflow_path}/steps-c/step-02-capture-reason.md'
workflowFile: '{workflow_path}/workflow.md'

# Registry and Folders
process_registry: '{process_output_folder}/process-registry.md'
discontinued_folder: '{process_output_folder}/discontinued'
---

# Step 1: Impact Summary

## STEP GOAL:

To clearly communicate the impact of discontinuing a process, ensuring the user fully understands what will happen before proceeding.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator

### Role Reinforcement:

- ✅ You are a process management facilitator
- ✅ If you already have been given communication or persona patterns, continue to use those while playing this new role
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring systematic safety protocols, user brings process context and authority
- ✅ This is a DESTRUCTIVE operation — ensure clear, unambiguous communication

### Step-Specific Rules:

- 🎯 Focus ONLY on presenting the impact summary
- 🚫 FORBIDDEN to proceed to next step without user acknowledgment
- 💬 Present information clearly using the template below
- 📋 All session variables must be populated before displaying

## EXECUTION PROTOCOLS:

- 🎯 Verify all session variables are available
- 💾 Display the complete impact summary
- 📖 Wait for user acknowledgment before proceeding
- 🚫 FORBIDDEN to load next step until user confirms understanding

## CONTEXT BOUNDARIES:

- Session variables from agent activation are available
- Config values from module config are resolved
- Focus ONLY on presenting impact information
- Do not capture reason or execute operations in this step

## SEQUENCE OF INSTRUCTIONS:

### 1. Verify Session Variables

Confirm these variables are set (error if not):
- `{current_process_id}` — e.g., "P001"
- `{current_process_name}` — e.g., "Cash Management"
- `{current_process_folder}` — full path to process folder
- `{contributor_name}` — who is performing this action
- `{contributor_role}` — their role

### 2. Display Impact Summary

Present the following impact summary clearly:

---

**⚠️ DISCONTINUE PROCESS: {current_process_id} - {current_process_name}**

This will ARCHIVE (not permanently delete) the process.

**📁 FOLDER CHANGES:**
- FROM: `{process_output_folder}/{current_process_id} - {current_process_name}/`
- TO: `{discontinued_folder}/{current_process_id} - {current_process_name}/`

**📋 REGISTRY CHANGES ({process_registry}):**
- REMOVE from `## Processes` section (active processes)
- ADD to `## Discontinued Processes` section with timestamp and reason

**✅ WHAT IS PRESERVED:**
- All documentation files
- All session data
- All generated outputs
- Full audit trail

**🔄 REVERSIBLE:**
- Process can be restored by moving folder back and updating registry manually

---

### 3. Present MENU OPTIONS

Display: **Select an Option:** [C] Continue to provide reason | [X] Cancel and return to menu

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'
- If user selects 'X', exit workflow and return to agent menu
- User can ask questions — respond and then redisplay menu

#### Menu Handling Logic:

- IF C: Load, read entire file, then execute `{nextStepFile}`
- IF X: Display "❌ Operation cancelled. Returning to menu." and exit workflow
- IF Any other comments or queries: help user respond then redisplay menu options

## CRITICAL STEP COMPLETION NOTE

ONLY WHEN [C continue option] is selected and [impact summary fully displayed with user acknowledgment], will you then load and read fully `{nextStepFile}` to execute and begin reason capture step.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- All session variables verified and present
- Impact summary displayed completely
- User acknowledged by selecting C or X
- Correct navigation to next step or exit

### ❌ SYSTEM FAILURE:

- Proceeding without displaying impact summary
- Missing session variables not caught
- Skipping to execution without acknowledgment
- Loading next step before user input

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.
