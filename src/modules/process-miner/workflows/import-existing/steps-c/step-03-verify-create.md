---
name: 'step-03-verify-create'
description: 'Verify extractions and create process documentation'

# File References
progressTemplate: '{project-root}/_bmad/modules/process-miner/workflows/start-new-process/templates/progress.template.yaml'
processFolder: '{process_output_folder}'
---

# Step 3: Verify and Create

## STEP GOAL:

Get user verification on extracted items and create the process documentation structure.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER skip verification
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR confirming accuracy

### Step-Specific Rules:

- 🎯 Focus on verification and document creation
- 🚫 FORBIDDEN to mark items as verified without user input
- 💬 Approach: Present each category, get confirmation

## MANDATORY SEQUENCE

### 1. Verify Extracted Items

For each category, present and verify:

"**Process Steps to verify:**

| # | Title | Action |
|---|-------|--------|
| PS1 | {title} | ✓ Keep / ✗ Delete / ✎ Edit |
| PS2 | {title} | ✓ Keep / ✗ Delete / ✎ Edit |
...

Enter items to edit/delete (e.g., 'edit PS1', 'delete PS2') or 'OK' to accept all:"

### 2. Handle Verification Actions

- **Keep**: Mark as verified
- **Delete**: Remove from import list
- **Edit**: Allow title/details modification

### 3. Identify Gaps

"**Missing Information:**

- No control points found — these should be added
- Impact/frequency not specified for pain points
- System integrations not documented

**Would you like to:**
- **[A]** Add missing information now
- **[L]** Flag for later and continue"

### 4. Create Process Structure

"**Creating process documentation...**

Creating: {process_output_folder}/{process_id}/
├── _progress.yaml ✓
├── as-is-documentation.md ✓
│   └── {step_count} steps, {pp_count} pain points imported
└── (other docs created empty)"

### 5. Initialize Progress

Set progress based on imports:

```yaml
documents:
  as_is:
    overall_status: in_progress
    sections:
      process_steps:
        status: in_progress
        count: {count}
        verified: false
```

### 6. Present Import Summary

"✓ **Documentation imported successfully!**

**Process:** {process_id} - {process_name}
**Source:** {source_file_or_paste}

**Imported:**
- {step_count} process steps (need verification)
- {pp_count} pain points (need details)
- {sys_count} systems (need details)

**Not Found (add manually):**
- Control points
- Exceptions
- Customer touchpoints

**What's next?**
- **[V]** Verify items with SME
- **[C]** Continue with Companion
- **[A]** Add missing items now"

#### Menu Handling Logic:

- IF V: Route to review-draft workflow
- IF C: End workflow, return to Companion
- IF A: Route to capture-item workflow

#### EXECUTION RULES:

- ALWAYS halt and wait for user input
- Provide clear next step guidance

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Extractions verified by user
- Gaps identified
- Process folder created
- Documents initialized
- Progress tracking set up
- Clear next steps provided

### ❌ SYSTEM FAILURE:

- Skipping verification
- Not identifying gaps
- Not creating progress tracking
- Unclear next steps
