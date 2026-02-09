---
name: 'step-01-init'
description: 'Load schema, select process, resolve variant, check for existing summary'

# Path Definitions
module_root: '{project-root}/src/modules/process-miner'
workflow_path: '{module_root}/workflows/generate-outputs'

# File References
thisStepFile: '{workflow_path}/steps-c/step-01-init.md'
nextStepFile: '{workflow_path}/steps-c/step-02-extract.md'
continueStepFile: '{workflow_path}/steps-c/step-01b-continue.md'
workflowFile: '{workflow_path}/workflow.md'

# Schema — single source of truth
schema_file: '{module_root}/templates/documents/management-summary.schema.yaml'

# Shared Workflow
selectProcessWorkflow: '{module_root}/workflows/shared/select-existing-process/workflow.md'
---

# Step 1: Schema-Driven Initialization

## STEP GOAL:

Load the management summary schema, select a process, resolve the correct domain variant (from explicit `data.template` or agent detection), validate source documents exist, and route to either fresh generation (step-02) or continuation/update (step-01b).

## MANDATORY EXECUTION RULES (READ FIRST):

- 🛑 NEVER generate any summary content in this step
- 📖 CRITICAL: Read the complete step file before taking any action
- 📏 SCHEMA IS LAW — all variant resolution comes from `management-summary.schema.yaml`
- 🚫 FORBIDDEN to hardcode domain-specific logic — read it from the schema

---

## INITIALIZATION SEQUENCE:

### 1. Load Schema

Load and read `{schema_file}` completely. This provides:
- `variants` — domain-specific config (source doc, template, metrics, appendix)
- `sections` — shared 6-Pager structure
- `change_detection` — thresholds for update detection
- `auto_transform` — weak-to-strong content rules
- `completeness` — validation gates

Store entire schema in session as `{schema}`.

### 2. Process Selection

Load, read, and execute `{selectProcessWorkflow}` to set:
- `current_process_id`, `current_process_name`, `current_process_folder`

If no processes exist → STOP workflow.

### 3. Resolve Variant

Determine which schema variant to use:

**Priority 1: Explicit `data.template`** (from menu item invocation)
- Match `data.template` against `schema.variants.{key}.trigger` values
- Example: `data.template: 'management-summary-compliance'` → variant `compliance`

**Priority 2: Calling Agent Detection**
- Match calling agent ID against `schema.variants.{key}.agent_id`

**Priority 3: Ask User**
- Build menu dynamically from `schema.variants`:

"Which type of management summary would you like to generate?

{for each variant in schema.variants}
{N}. **{variant.label}** — {variant.writing_focus}
{end for}

Select [1-{N}]:"

Store selected variant as `{selected_variant}` (the key: process, cx, compliance, innovation).

### 4. Set Variant Variables

From `schema.variants.{selected_variant}`, set:

| Variable | Source |
|----------|--------|
| `source_document_name` | `variant.source_document` |
| `template_file` | `variant.template_file` |
| `output_filename` | `variant.output_file` |
| `variant_label` | `variant.label` |
| `writing_focus` | `variant.writing_focus` |
| `companion_documents` | `variant.companion_documents` |
| `comparison_metrics` | `variant.comparison_metrics` |
| `appendix_sections` | `variant.appendix_sections` |

If `data.primary_document` is provided, override `source_document_name` with it.

Display:
"**Variant:** {variant_label}
**Template:** {output_filename}
**Source:** {source_document_name}"

### 5. Validate Source Document

Check if `{current_process_folder}/{source_document_name}` exists.

**If NOT found:**
"⚠️ Source document not found: `{source_document_name}`
Please complete the source analysis first. Workflow cannot proceed."
→ **STOP workflow**

**If found:**
"✅ Source document found: {source_document_name}"

### 6. Check for Existing Summary

Check if `{current_process_folder}/{output_filename}` exists.

**If EXISTS:**
- Set `workflow_mode` = 'update'
- Store `existing_summary_path`, `existing_summary_modified`
- Display: "📄 Existing summary found ({existing_summary_modified}). Routing to change detection..."
- → Load, read, execute `{continueStepFile}`

**If NOT EXISTS:**
- Set `workflow_mode` = 'create'
- Display: "📝 No existing summary. Creating new {variant_label} summary..."
- → Load, read, execute `{nextStepFile}`

---

## ROUTING LOGIC

```
Schema Loaded → Process Selected → Variant Resolved → Source Exists?
                                                        ├── NO → STOP
                                                        └── YES → Summary Exists?
                                                                    ├── YES → step-01b
                                                                    └── NO → step-02
```

No menu in this step — routing is automatic.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:
- Schema loaded and parsed
- Variant resolved from schema (not hardcoded)
- Source document validated
- Correct routing to step-01b or step-02

### ❌ SYSTEM FAILURE:
- Hardcoding domain logic instead of reading schema
- Proceeding without source document
- Wrong routing decision
