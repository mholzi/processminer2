---
name: 'step-04b-exec-summary'
description: 'Compose or refine executive summary from full document review'

# File References
hubStepFile: './step-03-section-overview.md'
reviewStepFile: './step-04-section-review.md'
processOutputFolder: '{process_output_folder}'
---

# Step 4b: Executive Summary

## STEP GOAL:

Read the full document, then compose a new executive summary or propose changes to an existing one. Present for user review using standard Approve/QER/Edit/Skip options.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER compose executive summary without reading the full document first
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR — compose/propose, let user decide
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Step-Specific Rules:

- 🎯 Read ALL sections before composing — the executive summary reflects the whole document
- 📄 ALWAYS show the FULL proposed content — NEVER summarize or abbreviate
- 💾 PERSIST IMMEDIATELY after approval, edit, or QER completion
- 🚫 FORBIDDEN to compose from partial document state

## MANDATORY SEQUENCE

### 1. Read Full Document

- Load ALL sections from JSON (every section in the document, not just executive summary)
- Build a comprehensive picture of the document's content, key findings, and metrics
- Note section count, approval statuses, and key data points

### 2. Compose or Propose Changes

**IF executive summary does not yet exist or is empty:**
- Compose a new executive summary based on the full document content
- Validate against the per-document `.schema.yaml` (the schema is the single source of truth for all constraints)
- Present the draft:

"---
## Executive Summary (Proposed Draft)
---

{Composed executive summary content}

**Source:** Generated from {section_count} reviewed sections"

**IF executive summary already exists:**
- Compare existing summary against current document content
- Identify what has changed, what's missing, what's outdated
- Propose specific changes:

"---
## Executive Summary (Proposed Changes)
---

**Current issues with existing summary:**
- {list of gaps, outdated references, missing data}

**Proposed updated version:**

{Updated executive summary content}

**Changes made:**
- {list of specific changes and why}"

### 3. Present Review Options

**Build options dynamically based on confidence:**

```
IF confidence >= 80%:
  "[A] Approve — Content meets quality threshold"
  "[Q] QER — Question, Elicit, Refine"
  "[E] Edit — Make minor edits directly"
  "[S] Skip — Return to hub without changes"

IF confidence < 80%:
  "[Q] QER — Question, Elicit, Refine"
  "[E] Edit — Make minor edits directly"
  "[S] Skip — Return to hub without changes"
  (Approval NOT available — confidence below 80%)
```

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting review options
- NEVER offer approval when confidence < 80%
- After any change (QER, Edit), ALWAYS persist immediately then re-present

### 4. Handle Selection

#### IF [A] Approve:

1. Mark executive summary status as `approved`
2. **PERSIST IMMEDIATELY:**
   - Write updated status to MD
   - Write updated status to JSON
   - Update `_progress.yaml`
3. Proceed to section 5 (Return to Hub)

#### IF [E] Edit (Minor Edits):

1. "What would you like to change?"
2. User provides specific edit instruction
3. Apply the edit to content
4. **PERSIST IMMEDIATELY:**
   - Write updated content to MD
   - Write updated content to JSON
   - Recalculate confidence score
5. Re-present with updated content (return to section 3)

#### IF [Q] QER:

Load `{reviewStepFile}` QER submenu pattern — present:

"How would you like to refine this content?

**[Q] Quick Questions** — AI suggests 3 improvements, you choose
**[A] Advanced Elicitation** — Deep-dive structured knowledge extraction
**[P] Party Mode** — Creative brainstorming session

Select refinement mode:"

After any QER mode completes: persist immediately, re-present with updated content (return to section 3)

#### IF [S] Skip:

- No changes made
- Proceed to section 5 (Return to Hub)

### 5. Return to Hub

Load, read entire file, then execute {hubStepFile} (Section Overview).

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Full document read before composing
- Executive summary reflects all sections
- Schema validation applied
- Full proposed content shown (never summarized)
- Approval only offered when confidence ≥ 80%
- IMMEDIATE PERSISTENCE after every Approve, Edit, or QER completion
- Returns to hub after completion

### ❌ SYSTEM FAILURE:

- Composing executive summary without reading full document
- Summarizing or abbreviating proposed content
- Offering approval when confidence < 80%
- Not persisting after user actions
- Not validating against schema

**Master Rule:** The executive summary is composed from the full document. Read everything first, then compose. Never work from partial state.
