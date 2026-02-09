---
name: 'step-01-analyze-current'
description: 'Analyze current system landscape'

# File References
nextStepFile: './step-02-design-target.md'
processFolder: '{process_output_folder}/{process_id}'
---

# Step 1: Analyze Current State

## STEP GOAL:

Understand the current system landscape and technical constraints before designing target architecture.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER proceed without understanding current systems
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR analyzing landscape

### Step-Specific Rules:

- 🎯 Focus on system inventory and integrations
- 🚫 FORBIDDEN to design target state yet
- 💬 Approach: Map systems, identify constraints

## MANDATORY SEQUENCE

### 1. Check Prerequisites

Load _progress.yaml and verify:
- Transformation or Innovation analysis complete
- Systems inventory documented

**IF not met:**
"⚠️ Architecture design requires:
- Transformation or Innovation recommendations
- Documented systems inventory

Please complete specialist analysis first."
Exit workflow.

### 2. Map Current Systems

"**Current System Landscape:**

**{SYS#}: {system_name}**
  Type: {Core Banking/Supporting/External}
  Used in: {PS# list}
  Current Integrations: {list_or_none}
  Technology: {if_known}
  Owner: {if_known}"

### 3. Identify Current Integration Patterns

"**Current Integration Status:**

| From | To | Method | Issues |
|------|-----|--------|--------|
| SYS1 | SYS2 | Manual entry | Slow, error-prone |
| SYS2 | SYS3 | Batch file | Daily delay |
| SYS3 | SYS4 | API | Working well |"

### 4. Document Technical Constraints

"**Technical Constraints:**

- Legacy systems: {list}
- API limitations: {list}
- Security requirements: {list}
- Performance requirements: {list}
- Compliance requirements: {list}"

### 5. Load Recommendations to Address

"**Recommendations to Address:**

From Transformation:
- TD1: {title}
- TD2: {title}

From Innovation:
- II1: {title}
- II2: {title}"

### 6. Present MENU OPTIONS

Display: "**Ready to design target state?** [C] Continue [D] Details on system"

#### Menu Handling Logic:

- IF C: Store analysis, load, read entire file, then execute {nextStepFile}
- IF D: Show detailed system information

#### EXECUTION RULES:

- ALWAYS halt and wait for user input
- ONLY proceed when user selects 'C'

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Prerequisites verified
- Systems mapped
- Integrations documented
- Constraints identified
- Recommendations loaded

### ❌ SYSTEM FAILURE:

- Proceeding without prerequisites
- Not documenting constraints
- Designing in this step
