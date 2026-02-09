---
name: Assess State
description: Load active process context, analyze documents against schema, generate narrative insight, suggest next steps.
web_bundle: true

# Configuration source
module_root: '{project-root}/src/modules/process-miner'
config_source: '{module_root}/config.yaml'

# Variables resolved from config
process_output_folder: '{config_source}:process_output_folder'
communication_language: '{config_source}:communication_language'
guidance_level: '{config_source}:guidance_level'

# Schema reference
schemaDir: '{project-root}/src/modules/process-miner/templates/documents'

# Step file references
step_01: '{workflow_path}/steps-c/step-01-load-context.md'
step_02: '{workflow_path}/steps-c/step-02-analyze.md'
step_03: '{workflow_path}/steps-c/step-03-generate-insight.md'

# Workflow paths
installed_path: '{module_root}/workflows/assess-state'
workflow_path: '{installed_path}'

# Session variables - set by agent activation and process selection
contributor_name: session-variable
contributor_role: session-variable
current_process_folder: session-variable
current_process_name: session-variable
current_process_id: session-variable

standalone: false
---

# Assess State Workflow

**Goal:** Analyze current documentation state and provide insight-first guidance on what to work on next.

**Your Role:** In addition to your name, communication_style, and persona, you are an insightful progress analyst collaborating with the user. This is a partnership — you bring pattern recognition and documentation expertise, while the user brings context about their priorities. Work together to determine the best next action.

**Prerequisite:** This workflow requires an active process. The invoking agent must have already set `current_process_folder`, `current_process_name`, and `current_process_id` before calling this workflow.

---

## WORKFLOW ARCHITECTURE

This workflow uses **step-file architecture** for disciplined execution:

### Core Principles

- **Insight-First**: Narrative guidance beats dashboards
- **User Decides**: Suggest, don't dictate next steps
- **Micro-file Design**: Each step is a self-contained instruction file
- **Just-In-Time Loading**: Only the current step file is in memory
- **Sequential Enforcement**: Steps completed in order, no skipping

### Critical Rules (NO EXCEPTIONS)

- **NEVER** dictate what user must do
- **ALWAYS** read entire step file before execution
- **NEVER** skip the analysis step
- **ALWAYS** base suggestions on actual document state
- **ALWAYS** halt at menus and wait for input
- 📏 **SCHEMA IS LAW** — any content suggestions or modifications MUST respect per-document `.schema.yaml` validation rules (`min_words`, `min_count`, required `item_fields`, enum values, reference validity). These are generation constraints, not just reporting metrics.

---

## STEP OVERVIEW

| Step | File | Goal |
|------|------|------|
| 1 | step-01-load-context.md | Load all process documentation files into context |
| 2 | step-02-analyze.md | Analyze documents against schema, identify gaps |
| 3 | step-03-generate-insight.md | Progress table, summary, agent selection |

---

## INITIALIZATION SEQUENCE

### 1. Configuration Loading

Load and read full config from `{config_source}` and resolve:

- `process_output_folder`, `communication_language`, `guidance_level`

### 2. Prerequisite Check

`contributor_name`, `contributor_role`, and active process variables (`current_process_folder`, `current_process_name`, `current_process_id`) are already set by the invoking agent. DO NOT ask for any of these.

### 3. First Step Execution

Load, read the full file and then execute `{step_01}` to begin the workflow.
