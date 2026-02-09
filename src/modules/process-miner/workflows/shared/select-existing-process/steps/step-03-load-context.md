---
name: 'step-03-load-context'
description: 'Load process documentation context and return control to invoking agent'

# Path Definitions
module_root: '{project-root}/src/modules/process-miner'
workflow_path: '{module_root}/workflows/shared/select-existing-process'

# File References
thisStepFile: '{workflow_path}/steps/step-03-load-context.md'
workflowFile: '{workflow_path}/workflow.md'

# Process documentation files (relative to current_process_folder)
progress_file: '{current_process_folder}/_progress.yaml'
structured_data: '{current_process_folder}/structured-data.json'
main_document: '{current_process_folder}/as-is-documentation.md'
---

# Step 3: Load Process Context

## STEP GOAL:

Load the selected process's documentation into context and return control to the invoking agent.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- NEVER start analysis in this step
- CRITICAL: Read the complete step file before taking any action
- YOU ARE A FACILITATOR, preparing context for the agent

### Role Reinforcement:

- You are maintaining your agent persona
- After loading context, the agent resumes control with full process knowledge
- The agent will guide the user through their specific work

### Step-Specific Rules:

- Focus ONLY on loading documentation files
- FORBIDDEN to analyze or summarize content in detail
- Load files silently (don't dump raw content to user)
- Return control to agent with summary of what was loaded

## Sequence of Instructions

### 1. Load Process Documentation Files

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

### 2. Report Loading Summary

Display:
```
**Process Context Loaded**

Process: {current_process_name} ({current_process_id})
Contributor: {contributor_name} ({contributor_role})

Documentation loaded:
- [{check}] Progress tracking
- [{check}] AS-IS documentation
- [{check}] Structured data
- [{check}] Customer journey
- [{check}] Transformation recommendations
- [{check}] Innovation opportunities
- [{check}] Technical architecture

Ready to continue.
```

(Use `x` for loaded files, ` ` for missing files)

### 3. Extract Key Process Metadata

From `_progress.yaml` or `structured-data.json`, extract and display:
```
**Process Overview:**
- Status: {overall_status}
- Steps documented: {count}
- Pain points: {count}
- Last updated: {date}
```

### 4. Update Session File

Update `{process_output_folder}/_active-session.yaml` with selected process:
```yaml
session:
  contributor_name: '{contributor_name}'
  contributor_role: '{contributor_role}'
  started: '{timestamp}'
  agent: '{calling_agent}'
  active_process:
    id: '{current_process_id}'
    name: '{current_process_name}'
    folder: '{current_process_folder}'
```

### 5. Return Control to Agent

**WORKFLOW COMPLETE** — Control returns to the invoking agent.

The agent now has:
- Process context in memory
- Contributor information
- Full documentation loaded
- Session file updated with active process

The invoking agent should now display its full menu.

---

## SYSTEM SUCCESS/FAILURE METRICS

### SUCCESS:

- All available documentation files loaded
- Clear summary of what was loaded
- Key metadata extracted and displayed
- Session file updated with active process
- Control returned to agent cleanly

### SYSTEM FAILURE:

- Starting analysis before returning control
- Dumping raw file contents to user
- Not reporting which files were loaded
- Not updating session file with active process
