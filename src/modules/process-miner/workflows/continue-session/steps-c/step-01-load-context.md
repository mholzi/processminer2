---
name: 'step-01-load-context'
description: 'Load process context, validate it exists, show summary'

# File References
nextStepFile: './step-02-import-documents.md'
nextStepFileSkipImport: './step-03-section-overview.md'
processOutputFolder: '{process_output_folder}'
schemaDir: '{project-root}/src/modules/process-miner/templates/documents'
defaultsFile: '{schemaDir}/_defaults.yaml'
---

# Step 1: Load Process Context

## STEP GOAL:

Load the active process context, validate it exists, and restore the user's working state. If no process exists, halt and redirect to the Companion agent.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER proceed without loading process context
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR restoring context
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Step-Specific Rules:

- 🎯 Focus on quick context recovery
- 🚫 FORBIDDEN to start documentation work in this step
- 💬 Approach: Fast, informative, get user oriented

## MANDATORY SEQUENCE

### 1. Identify Process

**IF process_id provided as parameter:**
Load that process directly.

**IF no process_id provided:**

```
IF single process in folder:
  "Found your process: {process_name}. Loading..."
  → Auto-load

IF multiple processes:
  "Which process would you like to continue?

   | # | Process | Status | Last Activity |
   |---|---------|--------|---------------|
   | 1 | {id} - {name} | {completion}% | {time_ago} |
   | 2 | {id} - {name} | {completion}% | {time_ago} |

   Enter number or ID:"
  → Wait for selection

IF no processes found:
  "No active process found. Please start or select a process through the Companion agent first."
  → HALT. Redirect to Companion agent. Do NOT present any further options.
```

### 2. Load Progress Data

**Load and parse _progress.yaml:**

1. Document statuses and completion percentages
2. Section counts and item counts
3. Last agent session information
4. Milestones achieved

### 3. Load Template + Schema

**Load shared defaults** from `{defaultsFile}`:

1. Confidence thresholds, incomplete markers, ID prefix registry

**Load the per-document schema** from `{schemaDir}/{document_type}.schema.yaml`:

1. IF `document_type` parameter is provided: use that value directly (e.g., `management-summary-process`)
2. OTHERWISE: identify which document type applies from process context (e.g., `as-is-process-documentation`, `cx-journey-documentation`)
2. Build runtime section registry from the schema's `sections` block
3. Note cross-reference rules (`cross_references`) and completeness requirements (`completeness`)
4. Note companion/related document relationships

**Load the applicable template MD:**

1. Discover all sections and subsections
2. Map template sections to schema section definitions
3. Note Handlebars conditionals for rendering

**Sharding detection:**

1. Check if `{processOutputFolder}/{process_id}/` contains a sharded directory (with `index.md`) or a monolithic MD file
2. Set rendering mode accordingly

### 4. Show Context Summary

**Quick context restoration:**

"**{process_name}** ({process_id})

**Status:** {completion_percentage}% complete
**Last Session:** {time_ago} with {last_agent}
**Last Activity:** {last_activity_description}
**Template:** {document_type} ({section_count} sections)
**Output Format:** {sharded|monolithic}

**Quick Stats:**
- Process Steps: {count} documented
- Pain Points: {count} captured
- Exceptions: {count} identified
- Control Points: {count} defined
- Systems: {count} mapped

{Brief note about where they left off}"

### 5. Present MENU OPTIONS

**IF skip_import = true:**
Display: "**Context loaded.** [C] Continue to Section Overview"

**IF skip_import = false (default):**
Display: "**Context loaded.** [C] Continue to Document Import"

#### Menu Handling Logic:

- IF C AND skip_import = true: Load, read entire file, then execute {nextStepFileSkipImport}
- IF C AND skip_import = false: Load, read entire file, then execute {nextStepFile}
- IF user asks questions: Answer, then redisplay menu
- IF user wants different process: Return to section 1

#### EXECUTION RULES:

- ALWAYS halt and wait for user input
- ONLY proceed when user selects 'C'

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Process loaded and validated
- _progress.yaml parsed
- Template + schema loaded and section registry built
- Sharding mode detected
- Context summary shown
- User oriented and ready

### ❌ SYSTEM FAILURE:

- Proceeding without loading _progress.yaml
- Proceeding without loading template + schema
- Starting work before user confirms
- Not showing context summary
- Presenting menu when no process found (should halt and redirect)

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.
