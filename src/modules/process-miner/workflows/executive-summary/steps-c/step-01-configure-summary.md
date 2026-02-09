---
name: 'step-01-configure-summary'
description: 'Configure summary type and parameters'

# File References
nextStepFile: './step-02-generate-summary.md'
processFolder: '{process_output_folder}/{process_id}'
---

# Step 1: Configure Summary

## STEP GOAL:

Determine summary type, audience, and length based on user needs.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER start generating without configuration
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR gathering requirements

### Step-Specific Rules:

- 🎯 Focus on understanding needs
- 🚫 FORBIDDEN to generate content yet
- 💬 Approach: Ask, confirm, prepare

## MANDATORY SEQUENCE

### 1. Present Summary Type Options

"**What type of executive summary do you need?**

- **[P]** Process Overview — AS-IS highlights for general stakeholders
- **[T]** Transformation Summary — Recommendations for decision makers
- **[I]** Innovation Summary — Automation focus for IT leadership
- **[C]** Compliance Summary — Controls focus for Risk/Audit
- **[F]** Full Summary — Complete documentation summary for sponsors"

### 2. Select Length

"**How detailed should it be?**

- **[B]** Brief — 1 page, key points only
- **[S]** Standard — 2-3 pages, balanced detail
- **[D]** Detailed — 4-5 pages, comprehensive"

### 3. Identify Audience

"**Who is the primary audience?**

- Executive sponsors
- IT leadership
- Operations management
- Risk/Audit committee
- Other: {specify}"

### 4. Load Source Data

Based on summary type, load relevant documents:

"**Loading source data...**

```
✓ AS-IS Documentation
✓ _progress.yaml
{if transformation} ✓ Transformation Recommendations
{if innovation} ✓ Innovation Opportunities
{if compliance} ✓ Control Assessment
```"

### 5. Confirm Configuration

"**Summary Configuration:**

- Type: {summary_type}
- Length: {length} (~{word_count} words)
- Audience: {audience}
- Source Documents: {count}

Proceed with generation?"

### 6. Present MENU OPTIONS

Display: "**Ready to generate?** [C] Continue [B] Back to change options"

#### Menu Handling Logic:

- IF C: Store config, load, read entire file, then execute {nextStepFile}
- IF B: Return to section 1

#### EXECUTION RULES:

- ALWAYS halt and wait for user input
- ONLY proceed when user selects 'C'

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Summary type selected
- Length selected
- Audience identified
- Source data loaded
- Configuration confirmed

### ❌ SYSTEM FAILURE:

- Generating without configuration
- Not identifying audience
- Skipping source data load
