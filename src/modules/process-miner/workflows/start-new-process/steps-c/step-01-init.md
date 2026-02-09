---
name: 'step-01-init'
description: 'Capture process name, create folder, initialize all output files'

# Config
process_output_folder: '{config_source}:process_output_folder'

# Registry
process_registry_file: '{process_output_folder}/process-registry.md'

# Output files (resolved after folder creation)
structured_data_file: '{current_process_folder}/structured-data.json'
main_document_file: '{current_process_folder}/as-is-documentation.md'

# Templates and Data
structured_data_schema: '../data/structured-data-schema.json'
progress_template: '../templates/progress.template.yaml'
as_is_template: '../templates/as-is.template.md'

# Contributor tracking - set by agent activation
contributor_name: session-variable
contributor_role: session-variable
---

# Step 1: Session Initialization & Context Gathering

## STEP GOAL

Capture the process name and business segments, create the numbered process folder, initialize the process registry, and set up all output files. Then return control to the invoking agent.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:
- **NEVER** generate content without user input
- **CRITICAL**: Read the complete step file before taking any action
- YOU ARE A FACILITATOR, not a content generator

### Role Reinforcement:
- Continue using your established name, communication_style, and persona
- We engage in collaborative dialogue with the SME
- You bring documentation expertise, SME brings domain knowledge

### Step-Specific Rules:
- `{contributor_name}` and `{contributor_role}` were already captured during agent activation
- **DO NOT** ask for name or role again — use session variables directly
- Focus ONLY on initialization and context gathering
- **FORBIDDEN** to start eliciting process details in this step

## EXECUTION SEQUENCE

### 1. Greet SME and Set Expectations

Display:
```
Hey {contributor_name}, let's set up a new process documentation project.

I just need a couple of details, then I'll create the folder and files so we're ready to go.
```

### 2. Gather Process Information

**Ask the user:**

"What is the name of the process we're documenting today?"
- Example: "Client Onboarding", "Payment Processing", "KYC Review"
- Store as `{current_process_name}`

**Input validation:** If user provides an empty or unclear response, gently prompt again: "I need a process name to create the folder — what would you like to call it?" Offer examples if needed.

### 3. Gather Client Segment Context

```
Which business segment(s) does this process apply to?
(This helps us highlight if it's segment-specific or applies across the board)

- [ ] BizBanking
- [ ] MidCap
- [ ] LargeCap
- [ ] All segments
```

Store as `{client_groups}`

**Input validation:** If user is unsure, default to "All segments" and note it can be refined later.

### 4. Check/Create Process Registry

```
<action silent="true">
Check if {process_registry_file} exists:

IF registry does NOT exist:
  1. Create {process_output_folder} directory if needed
  2. Initialize {process_registry_file} with header:
     # Process Registry
     | # | ID | Process Name | Status | Created | Updated |
     |---|----|----|--------|---------|---------|
  3. Set {next_process_number} = 1

IF registry exists:
  1. Read {process_registry_file}
  2. Parse highest process number from table
  3. Set {next_process_number} = highest + 1
</action>
```

### 5. Create Numbered Process Folder

```
<action silent="true">
1. Format number: {process_number} = pad({next_process_number}, 3) → "001", "002", etc.
2. Convert name to kebab-case: {process_name_kebab} = kebab({current_process_name})
3. Create folder name: {folder_name} = "{process_number}-{process_name_kebab}"
4. Set {current_process_folder} = "{process_output_folder}/{folder_name}"
5. Create directory: {current_process_folder}
6. Create sessions subdirectory: {current_process_folder}/sessions
7. Create exports subdirectory: {current_process_folder}/exports

Update registry:
1. Add new row to process registry table:
   | {process_number} | {process_number} | {current_process_name} | DRAFT | {date} | {date} |
2. Save {process_registry_file}
</action>
```

### 6. Initialize Output Files

```
<action silent="true">
Initialize {structured_data_file} using schema from {structured_data_schema}.
Populate template variables with session values:
- {{contributor_name}}, {{contributor_role}} from session
- {{process_number}}, {{current_process_name}} from gathered input
- {{client_groups}} from segment selection
- {{timestamp}} with current datetime
</action>

<action silent="true">
Initialize {current_process_folder}/_progress.yaml using {progress_template}.
Populate template variables with session values:
- {{process_id}} = {process_number}
- {{process_name}} = {current_process_name}
- {{timestamp}} with current datetime
</action>

<action silent="true">
Create {main_document_file} using {as_is_template}.
Populate template variables with session values:
- {{process_name}} = {current_process_name}
- {{process_id}} = {process_number}
- {{date}} with current date
</action>
```

### 7. Initialize Session File

```
<action silent="true">
Create session file at {current_process_folder}/sessions/session-{timestamp}.json:
{
  "session_id": "{timestamp}",
  "started": "{timestamp}",
  "contributor": {
    "name": "{contributor_name}",
    "role": "{contributor_role}"
  },
  "process_id": "{process_number}",
  "actions": []
}
</action>
```

### 8. Update Active Session

```
<action silent="true">
Update {process_output_folder}/_active-session.yaml:
session:
  contributor_name: '{contributor_name}'
  contributor_role: '{contributor_role}'
  started: '{timestamp}'
  agent: 'companion'
  active_process:
    id: '{process_number}'
    name: '{current_process_name}'
    folder: '{current_process_folder}'
</action>
```

### 9. Confirm and Return Control

Display:
```
**New Process Created**

Process: {current_process_name} ({process_number})
Folder:  {current_process_folder}
Contributor: {contributor_name} ({contributor_role})
Segments: {client_groups}

All output files initialized. Returning to menu.
```

**WORKFLOW COMPLETE** — Return control to the invoking agent.

The invoking agent should now display its full menu with the active process context.

---

## SYSTEM SUCCESS/FAILURE METRICS

### SUCCESS:
- Contributor confirmed (using existing session variables — NOT asked again)
- Process name captured
- Client segments identified
- Process registry checked/created
- Numbered process folder created (e.g., `001-client-onboarding`)
- Registry updated with new process entry
- structured-data.json initialized with schema v1.0
- _progress.yaml initialized
- Session state created
- Active session updated
- Control returned to invoking agent

### SYSTEM FAILURE:
- Asked for contributor name/role again
- Started eliciting process details
- Failed to check/create process registry
- Created folder without numbered prefix
- Failed to initialize output files
- Did not return control to invoking agent

**Master Rule:** This workflow is setup only. Capture name, create folder, initialize files, return. No elicitation.
