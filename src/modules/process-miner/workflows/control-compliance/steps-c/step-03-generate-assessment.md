---
name: 'step-03-generate-assessment'
description: 'Generate compliance assessment document'

# File References
progressFile: '{process_output_folder}/{process_id}/_progress.yaml'
processFolder: '{process_output_folder}/{process_id}'
---

# Step 3: Generate Assessment

## STEP GOAL:

Create the compliance assessment document and update progress.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER skip progress update
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR creating deliverable

### Step-Specific Rules:

- 🎯 Focus on complete assessment document
- 🚫 FORBIDDEN to change analysis (go back if needed)
- 💬 Approach: Generate document, save, confirm

## MANDATORY SEQUENCE

### 1. Generate Assessment Document

Create or update as-is-documentation.md control section and generate separate assessment:

```markdown
# Control & Compliance Assessment: {process_name}

**Process ID:** {process_id}
**Assessment Date:** {date}
**Analyst:** Control Analyst

---

## Executive Summary

{compliance_posture_summary}

---

## Control Coverage

### Coverage Matrix

| Step | Description | P | D | C | Status |
|------|-------------|---|---|---|--------|
{coverage_matrix}

### Coverage Statistics

- Total Steps: {count}
- Steps with Controls: {count} ({percentage}%)
- High-Risk Gaps: {count}

---

## Control Inventory

{control_details}

---

## Gap Analysis

### High-Priority Gaps

{gap_list}

### Remediation Recommendations

{recommendations}

---

## Compliance Readiness

| Category | Status | Score |
|----------|--------|-------|
| Control Coverage | {status} | {score}% |
| Evidence Documentation | {status} | {score}% |
| Control Type Balance | {status} | {score}% |
| **Overall Readiness** | **{status}** | **{score}%** |

---

## Action Items

{prioritized_action_items}
```

### 2. Save Document

Update AS-IS control section and save assessment.

### 3. Update Progress

```yaml
update-progress:
  type: agent_session
  agent: control
  status: complete

update-progress:
  type: milestone
  check: control_validated
```

### 4. Confirm Completion

"✓ **Control Compliance Analysis Complete**

**Control Coverage:** {percentage}% ({count}/{total} steps)
├── Preventive: {count} controls
├── Detective: {count} controls
└── Corrective: {count} controls

**Gaps Identified:** {count} high-priority
**Evidence Status:** {percentage}% documented
**Compliance Readiness:** {score}% — {status}

**Document:** Updated AS-IS with control assessment

**What's next?**
- **[V]** View full assessment
- **[G]** Address gaps now
- **[COMP]** Return to Companion"

#### Menu Handling Logic:

- IF V: Display full document
- IF G: Route to capture-item for new controls
- IF COMP: End workflow

#### EXECUTION RULES:

- ALWAYS halt and wait for user input
- Provide clear next step options

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Assessment document generated
- All sections complete
- Progress updated
- Milestone checked
- Options offered

### ❌ SYSTEM FAILURE:

- Incomplete assessment
- Not updating progress
- Missing action items
