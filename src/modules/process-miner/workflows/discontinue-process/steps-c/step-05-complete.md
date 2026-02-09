---
name: 'step-05-complete'
description: 'Display completion summary and restoration instructions'

# Path Definitions
module_root: '{project-root}/src/modules/process-miner'
workflow_path: '{module_root}/workflows/discontinue-process'

# File References
thisStepFile: '{workflow_path}/steps-c/step-05-complete.md'
workflowFile: '{workflow_path}/workflow.md'

# Registry and Folders
process_registry: '{process_output_folder}/process-registry.md'
discontinued_folder: '{process_output_folder}/discontinued'
---

# Step 5: Completion

## STEP GOAL:

To confirm successful discontinuation, display a summary, and provide restoration instructions.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator

### Role Reinforcement:

- ✅ You are a process management facilitator confirming successful completion
- ✅ If you already have been given communication or persona patterns, continue to use those while playing this new role
- ✅ We engage in collaborative dialogue, not command-response
- ✅ You bring helpful summary and restoration guidance
- ✅ Ensure positive closure and return user to agent menu

### Step-Specific Rules:

- 🎯 Focus ONLY on summary and completion
- 🚫 FORBIDDEN to perform any additional operations
- 💬 Provide restoration instructions
- 📋 Return to agent menu

## EXECUTION PROTOCOLS:

- 🎯 Display success confirmation table
- 💾 Show registry update summary
- 📖 Provide restoration instructions
- ✅ Return to agent menu

## CONTEXT BOUNDARIES:

- All operations completed in step 4
- This is informational only
- No file operations performed
- Workflow ends after this step

## SEQUENCE OF INSTRUCTIONS:

### 1. Display Success Confirmation

Present the completion summary:

---

**✅ Process Discontinued Successfully**

| Field | Value |
|-------|-------|
| **Process** | {current_process_id} - {current_process_name} |
| **Archived To** | `{discontinued_folder}/{current_process_id} - {current_process_name}/` |
| **Reason** | {discontinuation_reason} |
| **Discontinued By** | {contributor_name} ({contributor_role}) |
| **Date** | {date} |

---

### 2. Display Registry Update Summary

---

**Registry Updated:**
- ✅ Removed from active processes
- ✅ Added to Discontinued Processes section
- ✅ Total active processes decremented
- ✅ Change log entry added

---

### 3. Display Restoration Instructions

---

**🔄 To Restore This Process:**

1. Move folder from `{discontinued_folder}/{current_process_id} - {current_process_name}/` back to `{process_output_folder}/`
2. Move registry entry from `## Discontinued Processes` back to `## Processes`
3. Update the "Total Processes" count in registry
4. Add a change log entry documenting the restoration

---

### 4. Return to Agent Menu

Display: "Returning to menu..."

Exit workflow and return to the calling agent's menu.

## CRITICAL STEP COMPLETION NOTE

This is the FINAL step. After displaying the completion summary and restoration instructions, exit the workflow and return the user to the calling agent's menu.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Complete success summary displayed
- All fields populated correctly
- Restoration instructions provided
- User returned to agent menu

### ❌ SYSTEM FAILURE:

- Incomplete summary displayed
- Missing restoration instructions
- Not returning to agent menu
- Performing additional operations

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.
