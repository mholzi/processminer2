---
name: 'step-01-determine-type'
description: 'Determine which item type to capture'

# File References
nextStepFile: './step-02-gather-fields.md'
itemTypesConfig: '../data/item-types.yaml'
---

# Step 1: Determine Item Type

## STEP GOAL:

Determine which type of item the user wants to capture.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER proceed without item type selected
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR helping user choose

### Step-Specific Rules:

- 🎯 Focus only on type selection
- 🚫 FORBIDDEN to start capturing fields
- 💬 Approach: Present clear options

## MANDATORY SEQUENCE

### 1. Load Item Type Configuration

Load {itemTypesConfig} to get the available item types and their categories.

### 2. Present Item Types

**Show available item types (from config):**

"What type of item are you capturing?

**AS-IS Documentation Items:**
- **[PS]** Process Step — A step in the process flow
- **[PP]** Pain Point — Something that causes friction or frustration
- **[EX]** Exception — An edge case or alternate path
- **[CP]** Control Point — A compliance or quality control
- **[SYS]** System — A tool, application, or system used

**CX Journey Items:**
- **[JT]** Journey Touchpoint — Customer interaction point
- **[FP]** Friction Point — Customer friction in the journey

**Innovation Items:**
- **[II]** Innovation Idea — Automation or improvement opportunity

**Transformation Items:**
- **[TD]** Transformation Decision — Design decision for TO-BE state

Enter the code (e.g., PP for Pain Point):"

### 3. Validate Selection

**From {itemTypesConfig}, look up the selected code:**

1. Get `schema_file` and `section_id` for the selected type
2. Load the schema from `{schema_dir}/{schema_file}`
3. Find the section with matching `id`
4. Extract `heading` and `item_prefix` from the schema section

**Confirm with user:**

"Got it — you're capturing a **{item_type_name}**.

These go in the **{schema.template_file}** under **{section.heading}**."

### 4. Present MENU OPTIONS

Display: "**Ready to capture?** [C] Continue to capture fields"

#### Menu Handling Logic:

- IF C: Store item_type, schema_file, section_id, section_heading, item_prefix, item_fields; then load, read entire file, then execute {nextStepFile}
- IF user wants different type: Return to section 2
- IF user asks questions: Answer, then redisplay menu

#### EXECUTION RULES:

- ALWAYS halt and wait for user input
- ONLY proceed when user selects 'C'

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Item type selected
- Schema loaded and section resolved
- Section heading and fields extracted from schema
- User confirmed ready to proceed

### ❌ SYSTEM FAILURE:

- Proceeding without type selection
- Invalid item type accepted
- Using hardcoded section info instead of schema
- Starting field capture in this step
