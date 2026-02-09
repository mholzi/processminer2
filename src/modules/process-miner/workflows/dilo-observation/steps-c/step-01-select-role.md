---
name: 'step-01-select-role'
description: 'Select which role to observe for DILO'

# File References
nextStepFile: './step-02-prefill.md'
---

# Step 1: Select Role

## STEP GOAL:

Identify which role to perform the DILO analysis on.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step, ensure entire file is read
- ⏸️ ALWAYS halt and wait for user input after presenting menu

### Step-Specific Rules:
- 📖 Read AS-IS RACI matrix completely
- 🔍 Check for existing DILO documents for each role
- 💡 Recommend starting with the role that owns the most steps

## CONTEXT BOUNDARIES:

- **Available context:** AS-IS documentation with RACI matrix
- **Focus:** Role selection for DILO observation
- **Limits:** Only select roles with R or A assignments
- **Dependencies:** Requires AS-IS Section 6 (RACI) to be populated

## MANDATORY SEQUENCE

### 1. Load Roles from RACI

Read AS-IS Section 6 (Organizational Mapping / RACI Matrix).
Extract all unique roles where RACI assignment is R (Responsible) or A (Accountable).

For each role, count:
- Number of PS# items where they are R or A
- Number of PS# items where they are C (Consulted) or I (Informed)
- Systems they interact with

### 2. Check Existing DILOs

Scan process folder for existing `dilo-observation-*.md` files.
Map each existing DILO to its role.

### 3. Present Role Selection

"**Which role would you like to observe?**

| # | Role | Process Steps Owned | Systems Used | Existing DILO? |
|---|------|--------------------|--------------|--------------------|
| 1 | {{role_1}} | {{ps_count}} steps (R/A) | {{systems}} | {{existing_dilo_status}} |
| 2 | {{role_2}} | {{ps_count}} steps (R/A) | {{systems}} | {{existing_dilo_status}} |
| ... | ... | ... | ... | ... |

💡 **Tip:** Start with the role that owns the most steps or the role
where pain points cluster.

Enter number:"

### 4. Confirm Selection

After user selects a role:

"Observing **{{role_name}}**. This role is responsible for {{step_count}} steps
in the process.

**Who will be the observation subject?**
- Name: (or 'anonymous')
- Experience level: [Junior / Mid / Senior / Expert]
- Is today a typical day? [Y/N]

**[C] Continue to prefill**"

#### Menu Handling Logic:
- IF C: Store selection in session context, then load, read entire file, then execute {nextStepFile}
- IF Any other: Help user respond, then redisplay menu

#### EXECUTION RULES:
- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'

Wait for user input. Capture subject details.

### 5. Store Selection & Continue

Store role selection in session context:
- `selected_role`: role name
- `role_slug`: lowercase, hyphenated role name for file naming
- `subject_name`: observation subject name
- `subject_experience`: experience level
- `day_type`: typical or atypical

→ Load {nextStepFile} (step-02-prefill.md)

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:
- RACI matrix loaded and analyzed
- All roles with R/A assignments identified
- Existing DILOs checked for each role
- User selected a role
- Subject details captured
- Session context stored

### ❌ SYSTEM FAILURE:
- Not loading RACI matrix completely
- Skipping role selection
- Not checking for existing DILOs
- Proceeding without user confirmation
- Not capturing subject details

**Master Rule:** Role selection must be informed by RACI data. Never proceed without user confirmation.
