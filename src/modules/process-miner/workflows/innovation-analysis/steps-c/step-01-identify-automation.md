---
name: 'step-01-identify-automation'
description: 'Identify automation candidates in the process'

# File References
nextStepFile: './step-02-generate-opportunities.md'
processFolder: '{process_output_folder}/{process_id}'
---

# Step 1: Identify Automation Candidates

## STEP GOAL:

Scan process steps for automation potential and match with technology solutions.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER proceed without prerequisites met
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR identifying opportunities

### Step-Specific Rules:

- 🎯 Focus on automation indicator assessment
- 🚫 FORBIDDEN to generate II# items yet
- 💬 Approach: Score steps, match technologies

## MANDATORY SEQUENCE

### 1. Check Prerequisites

Load _progress.yaml and verify:
- Process steps documented
- Systems documented
- Pain points documented

**IF not met:**
"⚠️ Innovation analysis requires:
- Process steps documented (found: {count})
- Systems documented (found: {count})
- Pain points documented (found: {count})

Please complete AS-IS documentation first."
Exit workflow.

### 2. Scan for Automation Indicators

For each process step, check:
- High volume (repetitive)
- Rule-based logic
- Data entry/transformation
- API integration possible
- Document processing
- Pattern matching

"**Automation Opportunity Scan:**

**{PS#}: {title}**
  ✓ High volume ({indicator})
  ✓ Rule-based validation
  ✓ Data entry task
  ✗ Requires judgment
  → **Automation Score: {HIGH/MEDIUM/LOW}**"

### 3. Match Technology Solutions

For each high/medium score step:

"**Technology Matching:**

**{PS#}: {title}**
  Opportunity: {opportunity_description}
  Technologies:
  - {tech_1}
  - {tech_2}
  - {tech_3}
  Best Fit: {recommended_tech}"

### 4. Present Automation Summary

"**Automation Candidate Summary**

| PS# | Step | Score | Best Fit Technology |
|-----|------|-------|---------------------|
| PS1 | {title} | HIGH | Web forms + API |
| PS2 | {title} | MEDIUM | IDP with ML |
| PS3 | {title} | HIGH | API integration |
...

**Summary:**
- High automation potential: {count} steps
- Medium automation potential: {count} steps
- Manual required: {count} steps"

### 5. Present MENU OPTIONS

Display: "**Ready to generate opportunities?** [C] Continue [D] Details on specific step"

#### Menu Handling Logic:

- IF C: Store scan results, load, read entire file, then execute {nextStepFile}
- IF D: Show detailed analysis for requested step

#### EXECUTION RULES:

- ALWAYS halt and wait for user input
- ONLY proceed when user selects 'C'

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Prerequisites verified
- Each step scanned
- Automation scores assigned
- Technologies matched
- Summary presented

### ❌ SYSTEM FAILURE:

- Proceeding without prerequisites
- Not scoring all steps
- Generating II# in this step
