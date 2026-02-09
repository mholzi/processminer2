---
name: 'step-01b-continue'
description: 'Schema-driven material change detection between source and existing summary'

# Path Definitions
module_root: '{project-root}/src/modules/process-miner'
workflow_path: '{module_root}/workflows/generate-outputs'

# File References
thisStepFile: '{workflow_path}/steps-c/step-01b-continue.md'
nextStepFile: '{workflow_path}/steps-c/step-02-extract.md'
workflowFile: '{workflow_path}/workflow.md'
---

# Step 1b: Schema-Driven Change Detection

## STEP GOAL:

Analyze the existing management summary against current source documents using the schema's `change_detection` thresholds and the variant's `comparison_metrics`. Present user with clear options.

## MANDATORY EXECUTION RULES:

- 🛑 NEVER update the summary in this step
- 📏 SCHEMA IS LAW — use `schema.change_detection` thresholds and `variant.comparison_metrics`
- 🚫 FORBIDDEN to hardcode metric lists — read from `{comparison_metrics}` (set in step-01)

---

## CHANGE DETECTION SEQUENCE:

### 1. Load Documents

**Existing Summary:** `{existing_summary_path}`
**Current Source:** `{current_process_folder}/{source_document_name}`
**Companion Documents:** Load each file in `{companion_documents}` if it exists.

### 2. Extract Comparison Points (Schema-Driven)

For each metric in `{comparison_metrics}` (from `schema.variants.{selected_variant}.comparison_metrics`):
- Extract **from summary** (the value at time of last generation)
- Extract **from source** (the current value)
- Calculate delta

Present as table:
```
| Metric | In Summary | In Source | Delta |
|--------|------------|-----------|-------|
{for each comparison_metric}
| {metric.name} | {summary_value} | {source_value} | {delta} |
{end for}
```

### 3. Categorize Changes (Schema-Driven)

Using thresholds from `schema.change_detection`:

- **🔴 CRITICAL**: Delta > `{schema.change_detection.critical_threshold_pct}`% OR matches any `critical_triggers`
- **🟡 MATERIAL**: Delta > `{schema.change_detection.material_threshold_pct}`% OR matches any `material_triggers`
- **🟢 MINOR**: Delta > 0% but below material threshold
- **⚪ NO CHANGE**: Delta = 0

### 4. Present Change Report

Display structured report with counts per category and detailed changes.

**If NO changes:** "✅ Summary is current. Regenerate anyway?"
**If CRITICAL/MATERIAL:** "⚠️ Material changes detected. These should be incorporated."
**If MINOR only:** "ℹ️ Minor changes. Update is optional."

### 5. Present MENU OPTIONS

"**Select an Option:**
[U] Update — Incorporate detected changes (incremental)
[R] Regenerate — Create fresh summary from scratch
[K] Keep Current — No changes needed
[V] View Full Comparison"

#### Menu Logic:
- IF U: Set `update_mode` = 'incremental', store `changes_to_apply` → execute `{nextStepFile}`
- IF R: Set `update_mode` = 'full' → execute `{nextStepFile}`
- IF K: "Summary kept as-is." → **END WORKFLOW**
- IF V: Display side-by-side, redisplay menu

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:
- Metrics extracted using schema variant config (not hardcoded)
- Thresholds applied from schema.change_detection
- User given meaningful options

### ❌ SYSTEM FAILURE:
- Hardcoding metric lists instead of reading from variant.comparison_metrics
- Using hardcoded thresholds instead of schema values
