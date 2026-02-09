---
name: 'step-01-load-analyze'
description: 'Load source data and analyze pain points'

# File References
nextStepFile: './step-02-generate-recommendations.md'
processFolder: '{process_output_folder}/{process_id}'
---

# Step 1: Load and Analyze

## STEP GOAL:

Load AS-IS documentation and analyze pain points for improvement opportunities.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER proceed if prerequisites not met
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR analyzing data

### Step-Specific Rules:

- 🎯 Focus on thorough pain point analysis
- 🚫 FORBIDDEN to generate recommendations yet
- 💬 Approach: Load, analyze, assess addressability

## MANDATORY SEQUENCE

### 1. Check Prerequisites

Load _progress.yaml and verify:
- Process steps documented (count >= 3)
- Pain points documented (count >= 1)

**IF not met:**
"⚠️ Transformation analysis requires:
- Process steps documented (found: {count})
- Pain points documented (found: {count})

Please complete AS-IS documentation first."
Exit workflow.

### 2. Load Source Data

```
Loading source data...
✓ Process steps: {count}
✓ Pain points: {count}
✓ Exceptions: {count}
✓ Systems: {count}
✓ Controls: {count}
```

### 3. Analyze Pain Points

For each pain point, assess:

"**Analyzing pain points for improvement potential...**"

```
PP1: {title}
  Impact: {impact}
  Frequency: {frequency}
  Root Cause: {root_cause}

  Analysis:
  - Addressable: {yes/no/partial}
  - Solution type: {automation/process/policy/training}
  - Estimated effort: {low/medium/high}
  - Expected benefit: {low/medium/high}
  - Quick win potential: {yes/no}
```

### 4. Present Analysis Summary

"**Pain Point Analysis Complete**

| PP# | Title | Addressable | Solution Type | Quick Win |
|-----|-------|-------------|---------------|-----------|
| PP1 | {title} | Yes | Automation | Yes |
| PP2 | {title} | Partial | Process | No |
...

**Summary:**
- Total pain points: {count}
- Addressable: {count} ({percentage}%)
- Quick wins identified: {count}"

### 5. Present MENU OPTIONS

Display: "**Ready to generate recommendations?** [C] Continue [D] Details on specific PP"

#### Menu Handling Logic:

- IF C: Store analysis, load, read entire file, then execute {nextStepFile}
- IF D: Show detailed analysis for requested PP, then redisplay menu

#### EXECUTION RULES:

- ALWAYS halt and wait for user input
- ONLY proceed when user selects 'C'

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Prerequisites verified
- Source data loaded
- Each pain point analyzed
- Addressability assessed
- Summary presented

### ❌ SYSTEM FAILURE:

- Proceeding without prerequisites
- Not analyzing all pain points
- Generating recommendations in this step
