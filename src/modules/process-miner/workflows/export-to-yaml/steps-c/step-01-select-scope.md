---
name: 'step-01-select-scope'
description: 'Select export scope and format'

# File References
nextStepFile: './step-02-export-generate.md'
processFolder: '{process_output_folder}/{process_id}'
---

# Step 1: Select Scope

## STEP GOAL:

Determine what data to export and in what format.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER start export without selection
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR presenting options

### Step-Specific Rules:

- 🎯 Focus on clear scope selection
- 🚫 FORBIDDEN to start export yet
- 💬 Approach: Present options, explain uses

## MANDATORY SEQUENCE

### 1. Present Scope Options

"**What would you like to export?**

- **[A]** All data — Complete process data
- **[D]** Single document — One document's data
- **[S]** Single section — Specific section only
- **[T]** Item type — All items of one type (e.g., all pain points)"

### 2. Handle Scope Selection

**IF single document:**
"Which document?
1. AS-IS Documentation
2. CX Journey
3. Transformation
4. Innovation
5. Technical Architecture"

**IF single section:**
Show section list for selected document.

**IF item type:**
"Which item type?
- PS (Process Steps)
- PP (Pain Points)
- CP (Control Points)
- SYS (Systems)
- EX (Exceptions)"

### 3. Present Format Options

"**Export format:**

- **[Y]** YAML (default) — Clean, readable format
- **[J]** JSON — For system integration
- **[M]** Mermaid — For diagram generation"

### 4. Confirm Selection

"**Export configuration:**

- Scope: {scope_selection}
- Format: {format_selection}
- Output: {process_id}-{scope}.{ext}"

### 5. Present MENU OPTIONS

Display: "**Ready to export?** [C] Continue to generate [B] Back to options"

#### Menu Handling Logic:

- IF C: Store selections, load, read entire file, then execute {nextStepFile}
- IF B: Return to section 1

#### EXECUTION RULES:

- ALWAYS halt and wait for user input
- ONLY proceed when user selects 'C'

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Scope options presented
- Format options presented
- Selection confirmed
- Ready to export

### ❌ SYSTEM FAILURE:

- Starting export without selection
- Not offering format options
- Proceeding without confirmation
