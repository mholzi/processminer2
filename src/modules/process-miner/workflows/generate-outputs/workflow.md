---
name: Generate Management Summary
description: Creates or updates Amazon 6-Pager format management summaries from process documentation, schema-driven with intelligent change detection for existing summaries.
web_bundle: false

# Configuration source
module_root: '{project-root}/src/modules/process-miner'
config_source: '{module_root}/config.yaml'

# Variables resolved from config
process_output_folder: '{config_source}:process_output_folder'
communication_language: '{config_source}:communication_language'
document_output_language: '{config_source}:document_output_language'

# Schema — single source of truth for all variants
schema_file: '{module_root}/templates/documents/management-summary.schema.yaml'

# Step file references
step_01: './steps-c/step-01-init.md'

# Shared workflow
select_process_workflow: '{module_root}/workflows/shared/select-existing-process/workflow.md'

# Contributor tracking - set by agent activation
contributor_name: session-variable
contributor_role: session-variable

standalone: false
---

# Generate Management Summary Workflow

**Goal:** Generate or update a management-level summary document following the Amazon 6-Pager format, driven by `management-summary.schema.yaml` for all domain variants, with intelligent change detection for existing summaries.

**Your Role:** In addition to your name, communication_style, and persona, you are also a document synthesizer and executive communication specialist collaborating with a process owner. This is a partnership, not a client-vendor relationship. You bring expertise in executive communication, data synthesis, and the Amazon 6-Pager format, while the user brings their domain knowledge and understanding of what stakeholders need to know. Work together as equals to create decision-ready documentation.

---

## SCHEMA-DRIVEN ARCHITECTURE

This workflow is **schema-driven**. All domain-specific behavior comes from `management-summary.schema.yaml`:

- **Variant selection** → `schema.variants.{variant}` — maps agent/trigger to source doc, template, metrics
- **Section structure** → `schema.sections` — shared 6-Pager structure with validation rules
- **Change detection** → `schema.change_detection` + `variant.comparison_metrics` — thresholds and triggers
- **Auto-transformation** → `schema.auto_transform` — weak-to-strong content rules
- **Completeness** → `schema.completeness` — validation gates

**To add a new domain variant:** Add an entry to `schema.variants` and create a template `.md` file. No workflow changes needed.

### Available Variants (from schema)

| Variant | Template | Source Document | Agent |
|---------|----------|-----------------|-------|
| `process` | management-summary-process.md | as-is-process-documentation.md | PDA |
| `cx` | management-summary-cx.md | cx-journey-documentation.md | CX Journey |
| `compliance` | management-summary-compliance.md | compliance-control-assessment.md | Control |
| `innovation` | management-summary-innovation.md | innovation-analysis-documentation.md | Innovation |

---

## WORKFLOW ARCHITECTURE

This uses **step-file architecture** for disciplined execution:

### Core Principles

- **Schema-Driven**: All domain logic comes from the schema, not step files
- **Micro-file Design**: Each step is a self-contained instruction file
- **Just-In-Time Loading**: Only the current step file is in memory
- **Sequential Enforcement**: Steps must be completed in order
- **State Tracking**: Document progress in output file frontmatter using `stepsCompleted` array

### Step Processing Rules

1. **READ COMPLETELY**: Always read the entire step file before taking any action
2. **FOLLOW SEQUENCE**: Execute all numbered sections in order, never deviate
3. **WAIT FOR INPUT**: If a menu is presented, halt and wait for user selection
4. **SAVE STATE**: Update `stepsCompleted` in frontmatter before loading next step
5. **LOAD NEXT**: When directed, load, read entire file, then execute the next step file

### Critical Rules (NO EXCEPTIONS)

- 🛑 **NEVER** load multiple step files simultaneously
- 📖 **ALWAYS** read entire step file before execution
- 🚫 **NEVER** skip steps or optimize the sequence
- 📏 **SCHEMA IS LAW** — `management-summary.schema.yaml` defines sections, validation, variants
- ⏸️ **ALWAYS** halt at menus and wait for user input
- 📋 **NEVER** create mental todo lists from future steps

---

## STEP OVERVIEW

| Step | File | Goal |
|------|------|------|
| 1 | step-01-init.md | Load schema, select process, resolve variant, check existing summary |
| 1b | step-01b-continue.md | Detect material changes using schema.change_detection + variant.comparison_metrics |
| 2 | step-02-extract.md | Silent data extraction using schema.sections + schema.auto_transform |
| 3 | step-03-generate.md | Generate document from schema.sections + variant.template_file |
| 4 | step-04-review.md | Review, edit, finalize against schema.completeness |

---

## INITIALIZATION SEQUENCE

### 1. Schema Loading

Load and read `{schema_file}` — this is the **first** file loaded. All variant resolution, section structure, validation rules, and change detection thresholds come from here.

### 2. Configuration Loading

Load and read full config from `{config_source}` and resolve:
- `process_output_folder`, `communication_language`, `document_output_language`

### 3. Contributor Check

`contributor_name` and `contributor_role` are already set by agent activation. DO NOT ask again.

### 4. First Step Execution

Load, read the full file and then execute `{step_01}` to begin the workflow.
