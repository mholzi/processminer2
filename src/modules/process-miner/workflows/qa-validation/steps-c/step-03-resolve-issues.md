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
5. Return to issue list

### 3. Handle Warning Resolution

For each warning:

1. Explain impact
2. Show options (fix/skip)
3. If fix: apply changes
4. If skip: document acceptance
5. Return to issue list

### 4. Re-run Validation

After fixes:

"**Re-validating...**

| Category | Before | After |
|----------|--------|-------|
| Errors | {before} | {after} |
| Warnings | {before} | {after} |
| Score | {before}% | {after}% |"

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
