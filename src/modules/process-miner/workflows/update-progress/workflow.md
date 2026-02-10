---
name: update-progress
description: Update _progress.yaml with current state
web_bundle: true

# File References
processFolder: '{process_output_folder}/{process_id}'
progressFile: '{process_output_folder}/{process_id}/_progress.yaml'
---

# Update Progress Workflow

**Goal:** Core utility to record work in the progress tracking file, check milestones, and maintain documentation state.

**Your Role:** This is a programmatic utility workflow called by other workflows and agents to update progress tracking.

---

## WORKFLOW ARCHITECTURE

This workflow is a **utility workflow** — typically called programmatically rather than interactively.

### Core Principles

- **Atomic Updates**: Each update is self-contained
- **Validation First**: Check YAML validity before save
- **Milestone Checking**: Automatically evaluate milestone conditions
- **Non-Destructive**: Never corrupt existing progress data
- 📏 **SCHEMA IS LAW** — progress counts and statuses MUST reflect per-document `.schema.yaml` validation rules.

### Usage

Called programmatically by other workflows/agents:

```yaml
update-progress:
  type: section_status
  document: as_is
  section: pain_points
  status: in_progress
  count: 6
```

---

## UPDATE TYPES

### Section Status Update

```yaml
type: section_status
document: as_is | cx_journey | transformation | innovation | architecture
section: {section_id}
status: not_started | in_progress | complete
count: {number}  # for item sections
word_count: {number}  # for prose sections
```

### Agent Session Update

```yaml
type: agent_session
agent: companion | pda | transformation | cx_journey | control | innovation | it_architect | qa
status: active | complete | blocked
blocked_reason: {reason}  # if blocked
```

### Milestone Check

```yaml
type: milestone
check: as_is_complete | cx_journey_complete | process_complete
```

---

## EXECUTION SEQUENCE

### 1. Load Progress

Load current _progress.yaml file.

### 2. Apply Update

Based on update type:
- Update section status and counts
- Record agent session status
- Recalculate overall document status

### 3. Validate

Before saving:
- YAML is well-formed
- All required fields present
- Status values are valid
- Counts are non-negative
- Timestamps are valid ISO format

### 4. Save Progress

Write updated _progress.yaml.

### 5. Check Milestones

Evaluate milestone conditions:

```yaml
as_is_complete:
  condition: documents.as_is.overall_status == complete

cx_journey_complete:
  condition: documents.cx_journey.overall_status == complete

process_complete:
  condition: milestones.as_is_complete AND milestones.qa_validated
```

### 5b. AS-IS Modification Detection

After any update to `documents.as_is`, check whether downstream specialist documents already exist. If they do, a change to AS-IS means cross-document references may be stale.

**Condition:** The update type is `section_status` AND `document == as_is` AND at least one downstream specialist document has `status != "not_started"` (any of: `cx_journey`, `transformation`, `innovation`, `architecture`, `compliance`).

**Action:** Set a validation flag in `_progress.yaml`:

```yaml
validation:
  suite_validation_recommended: true
  reason: "AS-IS modified after downstream specialists started"
  triggered_at: "{ISO timestamp}"
  changed_sections:
    - "{section_id}"
```

**Rules:**
- If `validation.suite_validation_recommended` is already `true`, append the new section to `changed_sections` (deduplicate) and update `triggered_at`
- Flag is cleared when suite validation runs (`qa_suite_validation.status == complete`) or when the user explicitly dismisses it
- Include `qa_flags.suite_validation_recommended: true` in the return result so calling workflows are immediately aware

### 6. Return Result

```yaml
success: true
updates_applied:
  - section: pain_points, status: in_progress, count: 6
milestones_achieved:
  - as_is_complete: true
qa_flags:
  suite_validation_recommended: true  # only present if flag was set in step 5b
message: "Progress updated. AS-IS documentation complete!"
```

---

## ERROR HANDLING

If update fails:
1. Do not corrupt existing file
2. Return error status with details
3. Allow retry

---

## INTERACTIVE MODE

If called interactively:

"**Update Progress**

What would you like to update?

- **[S]** Section status
- **[A]** Agent session
- **[M]** Check milestones
- **[V]** View current progress"

Then gather required parameters and execute update.
