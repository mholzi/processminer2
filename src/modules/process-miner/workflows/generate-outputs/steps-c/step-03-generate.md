---
name: 'step-03-generate'
description: 'Generate the management summary document from schema sections and variant template'

# Path Definitions
module_root: '{project-root}/src/modules/process-miner'
workflow_path: '{module_root}/workflows/generate-outputs'

# File References
thisStepFile: '{workflow_path}/steps-c/step-03-generate.md'
nextStepFile: '{workflow_path}/steps-c/step-04-review.md'
workflowFile: '{workflow_path}/workflow.md'
---

# Step 3: Schema-Driven Document Generation

## STEP GOAL:

Generate the complete management summary by loading the variant's template file and populating it with extracted content for each `schema.sections` entry, applying `schema.format.writing_principles`.

## MANDATORY EXECUTION RULES:

- 📖 Read complete step file before taking any action
- 📏 SCHEMA IS LAW — iterate `schema.sections` to populate, validate against `schema.completeness`
- 🚫 FORBIDDEN to invent data not extracted in step-02
- 🚫 FORBIDDEN to leave `{{placeholder}}` text in output
- 💬 Use `{document_output_language}` from config

---

## GENERATION SEQUENCE:

### 1. Load Template

Load the variant's template:
- Path: `{module_root}/templates/documents/{template_file}`

Display:
"Generating **{variant_label}** summary for **{current_process_name}**
Template: {template_file} | Mode: {workflow_mode}"

### 2. Initialize Output

Create/update at `{current_process_folder}/{output_filename}`.

Set frontmatter per `schema.output_frontmatter`:
```yaml
---
document_type: Management Summary (Amazon 6-Pager)
process_name: {current_process_name}
process_id: {current_process_id}
variant: {selected_variant}
agent_type: {variant.agent_id}
generated_date: {date}
source_document: {source_document_name}
version: {increment if update, else 1.0}
status: draft
stepsCompleted: [1, 2, 3]
lastStep: 'generate'
---
```

### 3. Populate Sections (Schema-Driven)

For **each section** in `schema.sections`:

1. Locate section in template by matching `section.heading`
2. Populate with `extracted_{section.id}` content
3. For each `section.subsections[]`:
   - Match subsection heading
   - Populate with relevant extracted content
   - Apply `subsection.guidance` as quality filter
4. Apply `schema.format.writing_principles` throughout
5. Respect `section.page_budget` (approximate)

**Special handling:**
- `introduction` has `write_order: LAST` — populate last after all other sections
- `strategic_priorities` uses `schema.priority_block` template for each priority
- `appendix` uses `{appendix_sections}` from the variant

### 4. Apply Writing Principles

From `schema.format.writing_principles`:
- Lead with WHY in each section
- Anchor every claim in data
- Active voice preferred
- No `schema.format.anti_patterns` present
- Apply `{writing_focus}` as the narrative lens

### 5. Validate Completeness

Check against `schema.completeness.minimum`:
- Flag any failures but proceed (user reviews in step-04)

### 6. Document Summary

Display section counts and proceed.

### 7. Present MENU OPTIONS

"**Select an Option:**
[V] View Generated Document
[C] Continue to review and finalize"

- IF V: Display document, redisplay menu
- IF C: Update frontmatter, load/execute `{nextStepFile}`

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:
- Template loaded, all schema.sections populated, no placeholders remaining, writing principles applied

### ❌ SYSTEM FAILURE:
- Hardcoding section content instead of using schema.sections
- Leaving placeholder text
- Not applying variant's writing_focus
