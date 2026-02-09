---
name: 'step-02-extract'
description: 'Silent schema-driven data extraction with Amazon 6-Pager narrative synthesis'

# Path Definitions
module_root: '{project-root}/src/modules/process-miner'
workflow_path: '{module_root}/workflows/generate-outputs'

# File References
thisStepFile: '{workflow_path}/steps-c/step-02-extract.md'
nextStepFile: '{workflow_path}/steps-c/step-03-generate.md'
workflowFile: '{workflow_path}/workflow.md'
---

# Step 2: Silent Schema-Driven Extraction

## STEP GOAL:

Silently and autonomously extract data from source documents and synthesize into narrative content for each section defined in `schema.sections`, applying `schema.auto_transform` rules and the variant's `writing_focus`.

---

## ⚠️ SILENT EXECUTION MODE

| Principle | Implementation |
|-----------|----------------|
| **No User Prompts** | Never display "Does this look correct?" |
| **No Quality Questions** | Self-assess internally only |
| **Auto-Strengthen** | Apply `schema.auto_transform.weak_to_strong` rules |
| **Silent Progress** | Do not narrate extraction to user |
| **Auto-Proceed** | Immediately proceed to step-03 when complete |

---

## MANDATORY EXECUTION RULES:

- 🔇 SILENT MODE: No user interaction during this step
- 📏 SCHEMA IS LAW — iterate `schema.sections`, apply `schema.auto_transform`
- 🚫 FORBIDDEN to display quality assessments or ask questions
- ➡️ Auto-proceed to step-03 when extraction complete

---

## EXTRACTION SEQUENCE:

### 1. Load Source Documents (Silent)

From `{current_process_folder}`:
- **Primary:** `{source_document_name}`
- **Companions:** Each file in `{companion_documents}` (if exists)

### 2. Extract Per Section (Schema-Driven, Silent)

For **each section** in `schema.sections`:

1. **Extract** raw data from source documents relevant to `section.id`
2. **Apply** variant's `writing_focus` as the narrative lens
3. **Transform** using `schema.auto_transform.weak_to_strong` — match patterns, apply transforms
4. **Validate** against `section.validation` (min_words, requires_table, etc.)
5. **Auto-strengthen** if below quality bar (use `section.guidance` + `section.subsections[].guidance`)
6. **Store** as `extracted_{section.id}`

Result:
- `extracted_introduction`
- `extracted_goals`
- `extracted_tenets`
- `extracted_state_of_business`
- `extracted_lessons_learned`
- `extracted_strategic_priorities`

### 3. Extract Appendix (Variant-Driven, Silent)

For **each entry** in `{appendix_sections}` (from `schema.variants.{selected_variant}.appendix_sections`):
- Extract data matching `entry.id`
- If `entry.ref` exists, load from companion document
- If `entry.type` is "mermaid", extract/generate diagram

Store as `extracted_appendix`.

### 4. Internal Quality Summary (Not Displayed)

For each section, internally score against `schema.sections[].validation`.
Store as `quality_scores` for debugging only.

### 5. Auto-Proceed

Set `extraction_complete` = true.
Immediately load, read entire file, then execute `{nextStepFile}`.

**Do NOT present a menu. Do NOT wait for user input.**

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:
- All schema.sections iterated and extracted
- Auto-transform rules applied from schema
- Appendix extracted using variant.appendix_sections
- Auto-proceed without user interaction

### ❌ SYSTEM FAILURE:
- Hardcoding section logic instead of iterating schema.sections
- Skipping auto_transform rules
- Displaying anything to user
- Waiting for input
