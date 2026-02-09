---
name: 'step-01-load-context'
description: 'Load active process documentation files into context'

# Path Definitions
module_root: '{project-root}/src/modules/process-miner'
workflow_path: '{module_root}/workflows/assess-state'

# File References
thisStepFile: '{workflow_path}/steps-c/step-01-load-context.md'
nextStepFile: '{workflow_path}/steps-c/step-02-analyze.md'
workflowFile: '{workflow_path}/workflow.md'

# Active process files
progress_file: '{current_process_folder}/_progress.yaml'
structured_data: '{current_process_folder}/structured-data.json'
main_document: '{current_process_folder}/as-is-documentation.md'

# Session variables - already set by invoking agent
contributor_name: session-variable
contributor_role: session-variable
current_process_folder: session-variable
current_process_name: session-variable
current_process_id: session-variable
---

# Step 1: Load Context

## STEP GOAL:

Load the active process's documentation files into context for analysis.

**Prerequisite:** The invoking agent has already selected the active process. `current_process_folder`, `current_process_name`, and `current_process_id` are set. DO NOT ask the user to select a process.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- CRITICAL: Read the complete step file before taking any action
- CRITICAL: When loading next step, ensure entire file is read
- YOU ARE A FACILITATOR preparing context for analysis

### Role Reinforcement:

- Continue using your established name, communication_style, and persona
- Warm, supportive, insightful tone

### Step-Specific Rules:

- Focus ONLY on loading documentation files
- FORBIDDEN to start analysis in this step
- Load files silently (don't dump raw content to user)

## EXECUTION SEQUENCE

### 1. Greet and Announce

Display:
```
Let me take a look at where {current_process_name} stands, {contributor_name}...
```

### 2. Load Process Documentation Files

Load the following files from `{current_process_folder}` (if they exist):

**Core files:**
- `_progress.yaml` — Progress tracking
- `structured-data.json` — Machine-readable process data
- `as-is-documentation.md` — Main AS-IS documentation

**Specialist output files (may not exist yet):**
- `cx-journey.md` — Customer journey analysis
- `transformation.md` — Transformation recommendations
- `innovation.md` — Innovation opportunities
- `architecture.md` — Technical architecture design

**For each file:**
- Check if file exists
- If exists, load and read fully (keep in context, don't display raw)
- Track which files were loaded vs missing

### 3. Report Loading Summary

Display:
```
**Process Context Loaded**

Process: {current_process_name} ({current_process_id})

Documentation loaded:
- [{check}] Progress tracking
- [{check}] Structured data
- [{check}] AS-IS documentation
- [{check}] Customer journey
- [{check}] Transformation recommendations
- [{check}] Innovation opportunities
- [{check}] Technical architecture

Analyzing...
```

(Use `x` for loaded files, ` ` for missing files)

### 4. Auto-Proceed to Analysis

```
<action>Load, read entire file, then execute {nextStepFile}</action>
```

---

## CRITICAL STEP COMPLETION NOTE

This is an auto-proceed step. IMMEDIATELY after loading is complete, load and read fully `{nextStepFile}` to begin analysis.

---

## SYSTEM SUCCESS/FAILURE METRICS

### SUCCESS:

- All available documentation files loaded silently
- Clear summary of what was loaded
- Auto-proceeded to analysis

### SYSTEM FAILURE:

- Asking user to select a process (already selected)
- Dumping raw file contents to user
- Starting analysis before loading all files
- Not reporting which files were loaded
