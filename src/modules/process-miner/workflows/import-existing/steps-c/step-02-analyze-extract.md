---
name: 'step-02-analyze-extract'
description: 'Analyze content and extract structured items'

# File References
nextStepFile: './step-03-verify-create.md'
---

# Step 2: Analyze and Extract

## STEP GOAL:

AI-analyze the source content to extract structured process items.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER claim certainty on uncertain extractions
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR identifying structure

### Step-Specific Rules:

- 🎯 Focus on accurate extraction
- 🚫 FORBIDDEN to create documents yet
- 💬 Approach: Extract, flag uncertainties, present findings

## MANDATORY SEQUENCE

### 1. Analyze Content Structure

"**Analyzing your documentation...**"

Look for:
- Document structure (headings, sections)
- Process steps (numbered lists, "then", "next")
- Pain points (problems, issues, delays, frustrations)
- Systems mentioned (software names, tools)
- Roles/actors (who does what)
- Exceptions (edge cases, special handling)

### 2. Extract Process Steps

```
Found potential process steps:
1. "{extracted_step_1}" → PS1
2. "{extracted_step_2}" → PS2
...

Extracted: {count} process steps
Confidence: {high/medium/low}
```

### 3. Extract Pain Points

```
Found potential pain points:
1. "{extracted_pp_1}" → PP1
2. "{extracted_pp_2}" → PP2
...

Extracted: {count} pain points
```

### 4. Extract Systems

```
Found systems mentioned:
1. "{system_1}" → SYS1
2. "{system_2}" → SYS2
...

Extracted: {count} systems
```

### 5. Present Extraction Summary

"📥 **Import Analysis Complete**

**Extracted Items:**
├── Process Steps: {count} items
├── Pain Points: {count} items
├── Systems: {count} items
├── Exceptions: {count} item(s)
└── Roles: {count} identified

**Sections That Can Be Populated:**
├── Executive Summary: Draft possible
├── Process Overview: Draft possible
└── Process Steps: {count} steps formatted

⚠️ **Items needing verification:** {uncertain_count}"

### 6. Present MENU OPTIONS

Display: "**Ready to verify?** [C] Continue to verification [D] Show details"

#### Menu Handling Logic:

- IF C: Store extractions, load, read entire file, then execute {nextStepFile}
- IF D: Show detailed extraction breakdown, then redisplay menu

#### EXECUTION RULES:

- ALWAYS halt and wait for user input
- ONLY proceed when user selects 'C'

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Content analyzed
- Items extracted by type
- Confidence levels indicated
- Uncertainties flagged
- Summary presented

### ❌ SYSTEM FAILURE:

- Creating documents in this step
- Not flagging uncertain items
- Presenting extractions as confirmed
