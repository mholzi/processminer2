---
name: 'step-01-get-source'
description: 'Get source document for import'

# File References
nextStepFile: './step-02-analyze-extract.md'
---

# Step 1: Get Source Document

## STEP GOAL:

Obtain the existing documentation to import from.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER proceed without source content
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR collecting input

### Step-Specific Rules:

- 🎯 Focus on obtaining source content
- 🚫 FORBIDDEN to start analysis yet
- 💬 Approach: Get content, confirm receipt

## MANDATORY SEQUENCE

### 1. Present Source Options

"**Where is the existing documentation?**

- **[F]** File path — Provide path to markdown/text file
- **[P]** Paste content — Paste the text directly
- **[S]** Skip — Start fresh instead (exits workflow)"

### 2. Handle File Path

**IF file path selected:**

"Enter the file path:
(Supported: .md, .txt files)"

Validate file exists and is readable.

### 3. Handle Paste Content

**IF paste selected:**

"Paste your existing documentation below.
Type **END** on a new line when done:

---"

Collect content until END marker.

### 4. Confirm Content Receipt

"**Content received!**

- Source: {file_path or 'Pasted content'}
- Size: {word_count} words
- Lines: {line_count}

Preview:
---
{first_200_chars}...
---"

### 5. Present MENU OPTIONS

Display: "**Ready to analyze?** [C] Continue to analysis [R] Re-enter source"

#### Menu Handling Logic:

- IF C: Store source content, load, read entire file, then execute {nextStepFile}
- IF R: Return to section 1
- IF S: Exit workflow

#### EXECUTION RULES:

- ALWAYS halt and wait for user input
- ONLY proceed when user selects 'C'

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Source options presented
- Content obtained
- Content confirmed
- Ready for analysis

### ❌ SYSTEM FAILURE:

- Starting analysis without content
- Not confirming content receipt
- Proceeding without user confirmation
