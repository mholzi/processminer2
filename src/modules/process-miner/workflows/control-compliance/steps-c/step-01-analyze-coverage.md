---
name: 'step-01-analyze-coverage'
description: 'Analyze control coverage across process steps'

# File References
nextStepFile: './step-02-validate-evidence.md'
processFolder: '{process_output_folder}/{process_id}'
---

# Step 1: Analyze Coverage

## STEP GOAL:

Map controls to process steps and identify coverage gaps.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER proceed without process steps
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR assessing coverage

### Step-Specific Rules:

- 🎯 Focus on coverage mapping
- 🚫 FORBIDDEN to validate evidence yet
- 💬 Approach: Load, map, calculate, present

## MANDATORY SEQUENCE

### 1. Load Control Context

"**Loading control context...**"

```
✓ Process steps: {count}
✓ Control points: {count}
✓ Systems: {count}
✓ Exceptions: {count}
```

### 2. Create Coverage Matrix

Map controls to process steps by type:

"**Control Coverage Matrix**

| Step | Description | Preventive | Detective | Corrective | Coverage |
|------|-------------|------------|-----------|------------|----------|
| PS1 | {title} | - | - | - | ⚠️ None |
| PS2 | {title} | CP1 | - | - | ⚠️ Weak |
| PS3 | {title} | CP2 | CP3 | - | ✓ Good |
| PS4 | {title} | - | - | - | ⚠️ None |
| PS5 | {title} | CP4 | CP5 | CP6 | ✓ Strong |
..."

### 3. Calculate Coverage Statistics

"**Coverage Summary:**
- Steps with controls: {count}/{total} ({percentage}%)
- Steps without controls: {count}
- High-risk gaps: {count}"

### 4. Assess Control Type Balance

"**Control Type Distribution:**

```
Preventive:  {bar} {percentage}% ({count} controls)
Detective:   {bar} {percentage}% ({count} controls)
Corrective:  {bar} {percentage}% ({count} controls)
```

**Assessment:** {balanced/weighted_toward/lacking}"

### 5. Identify High-Risk Steps

High-risk indicators:
- Financial transactions
- Customer data handling
- Regulatory touchpoints
- System integrations
- Manual data entry

"**High-Risk Steps Without Controls:**

⚠️ **{PS#}: {title}**
   Risk: {risk_description}
   Recommendation: {control_recommendation}

⚠️ **{PS#}: {title}**
   Risk: {risk_description}
   Recommendation: {control_recommendation}"

### 6. Present MENU OPTIONS

Display: "**Ready to validate evidence?** [C] Continue [G] Add controls for gaps"

#### Menu Handling Logic:

- IF C: Store coverage analysis, load, read entire file, then execute {nextStepFile}
- IF G: Route to capture-item workflow for CP# items

#### EXECUTION RULES:

- ALWAYS halt and wait for user input
- ONLY proceed when user selects 'C'

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Coverage matrix created
- Statistics calculated
- Control balance assessed
- High-risk gaps identified

### ❌ SYSTEM FAILURE:

- Missing coverage matrix
- Not identifying gaps
- Validating evidence in this step
