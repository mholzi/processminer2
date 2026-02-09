---
name: 'step-02-validate-evidence'
description: 'Validate evidence documentation for each control'

# File References
nextStepFile: './step-03-generate-assessment.md'
processFolder: '{process_output_folder}/{process_id}'
---

# Step 2: Validate Evidence

## STEP GOAL:

Check each control has documented evidence and assess audit readiness.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER accept undocumented controls
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR validating evidence

### Step-Specific Rules:

- 🎯 Focus on evidence validation
- 🚫 FORBIDDEN to generate assessment yet
- 💬 Approach: Check each control, flag missing evidence

## MANDATORY SEQUENCE

### 1. Validate Evidence Per Control

For each control:

"**Evidence Documentation Status:**

**{CP#}: {title}**
  Type: {control_type}
  At Step: {PS#}
  Evidence: {evidence_description or 'Not documented'}
  Verifiable: {Yes/No/Unknown}
  Audit-ready: {Yes/No}"

### 2. Calculate Evidence Statistics

"**Evidence Summary:**
- Controls with evidence: {count}/{total} ({percentage}%)
- Controls needing evidence: {count}
- Audit-ready controls: {count}"

### 3. List Controls Needing Evidence

"**Controls Needing Evidence Documentation:**

| CP# | Control | Issue |
|-----|---------|-------|
| CP2 | {title} | No evidence documented |
| CP5 | {title} | Evidence not verifiable |"

### 4. Assess Audit Readiness

"**Audit Readiness Assessment:**

| Category | Status | Score |
|----------|--------|-------|
| Control Coverage | {status} | {score}% |
| Evidence Documentation | {status} | {score}% |
| Control Type Balance | {status} | {score}% |
| **Overall Readiness** | **{status}** | **{score}%** |"

### 5. Generate Gap Recommendations

For each gap:

"**Gap: {PS#} - {gap_description}**

**Risk Level:** {High/Medium/Low}
**Risk Description:** {description}

**Recommended Control:**
- Type: {Preventive/Detective/Corrective}
- Description: {control_description}
- Evidence: {recommended_evidence}

**Implementation Notes:**
- {note_1}
- {note_2}"

### 6. Present MENU OPTIONS

Display: "**Ready to generate assessment?** [C] Continue [F] Fix evidence gaps"

#### Menu Handling Logic:

- IF C: Store validation results, load, read entire file, then execute {nextStepFile}
- IF F: Allow updating control evidence

#### EXECUTION RULES:

- ALWAYS halt and wait for user input
- ONLY proceed when user selects 'C'

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Each control evidence validated
- Statistics calculated
- Audit readiness assessed
- Gap recommendations generated

### ❌ SYSTEM FAILURE:

- Skipping evidence validation
- Not flagging missing evidence
- Generating assessment in this step
