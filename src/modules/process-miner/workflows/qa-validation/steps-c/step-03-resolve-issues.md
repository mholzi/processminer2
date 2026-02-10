---
name: 'step-03-resolve-issues'
description: 'Guide user through resolving validation issues'

# File References
progressFile: '{process_output_folder}/{process_id}/_progress.yaml'
processFolder: '{process_output_folder}/{process_id}'
---

# Step 3: Resolve Issues

## STEP GOAL:

Guide user through fixing errors and addressing warnings, then update progress.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER auto-fix without user confirmation
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR guiding resolution

### Step-Specific Rules:

- 🎯 Focus on issue resolution
- 🚫 FORBIDDEN to skip errors
- 💬 Approach: Present issue, offer fix options, apply

## MANDATORY SEQUENCE

### 1. Present Issues for Resolution

"**⚠️ Validation found {error_count} error(s) and {warning_count} warning(s)**

**ERRORS (must fix):**

**[E1] {issue_title}**
  {issue_description}

  - **[F]** Fix now — {fix_action}
  - **[D]** Delete item
  - **[I]** Investigate further

**WARNINGS (should fix):**

**[W1] {issue_title}**
  {issue_description}

  - **[A]** Address now
  - **[S]** Skip — mark as acceptable

Select issue to address: [E1/W1/ALL/SKIP]"

### 2. Handle Error Resolution

For each error:

1. Display current state
2. Show fix options
3. Apply user-chosen fix
4. Verify fix resolved issue
5. Update gap-resolution-log.md:
   - Find the corresponding VG# entry (by fingerprint match)
   - Set status to "resolved"
   - Set resolution_type based on fix applied (e.g., "Documentation Update", "Design Change")
   - Add resolution history entry: `{date} | Resolved interactively | QA Agent | {fix_description}`
   - Move VG# from Section 1.1 (open) to Section 1.3 (resolved)
6. Return to issue list

### 3. Handle Warning Resolution

For each warning:

1. Explain impact
2. Show options (fix/skip)
3. If fix: apply changes
4. If skip: document acceptance
5. Update gap-resolution-log.md:
   - Find the corresponding VG# entry (by fingerprint match)
   - **IF fixed:** Set status to "resolved", add resolution history entry
   - **IF skipped:** Set status to "deferred" with note "Accepted as-is by user during QA validation"
   - Move VG# to appropriate summary table (Section 1.3 resolved or Section 1.4 deferred)
6. Return to issue list

### 4. Re-run Validation

After fixes:

"**Re-validating...**

| Category | Before | After |
|----------|--------|-------|
| Errors | {before} | {after} |
| Warnings | {before} | {after} |
| Score | {before}% | {after}% |

**Gap Log Update:**
- Newly resolved VG#: {resolved_count}
- Newly deferred VG#: {deferred_count}
- Still open VG#: {open_count}"

### 5. Update Progress

```yaml
update-progress:
  type: section_status
  document: as_is
  section: all
  validation_date: {timestamp}
  validation_score: {score}

update-progress:
  type: milestone
  check: qa_validated

update-progress:
  type: gap_log_status
  gap_log:
    exists: true
    total_vg_count: {count}
    open_count: {count}
    in_progress_count: {count}
    resolved_count: {count}
    deferred_count: {count}
    qa_document_open: {count}
    qa_suite_open: {count}
    specialist_open: {count}
    last_sync: {timestamp}
```

### 6. Confirm Completion

"✓ **QA Validation Complete**

**Quality Score:** {score}% ({grade})
├── Errors: {count} (fixed: {fixed_count})
├── Warnings: {count} (addressed: {addressed_count})
└── Status: {final_status}

**Ready for Stakeholders:** {yes/no}

**What's next?**
- **[R]** View full report
- **[ES]** Generate executive summary
- **[COMP]** Return to Companion"

#### Menu Handling Logic:

- IF R: Display validation report
- IF ES: Route to executive-summary workflow
- IF COMP: End workflow

#### EXECUTION RULES:

- ALWAYS halt and wait for user input
- Provide clear completion status

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- All errors addressed
- Warnings offered resolution
- Re-validation run
- Progress updated
- Milestone checked
- Clear completion status

### ❌ SYSTEM FAILURE:

- Errors not addressed
- Auto-fixing without confirmation
- Not updating progress
