---
name: 'step-04-section-review'
description: 'Per-subsection review with Approve/QER/Edit/Skip flow and immediate persistence'

# File References
nextStepFile: './step-05-write-and-reconcile.md'
hubStepFile: './step-03-section-overview.md'
qerModesRef: '../data/qer-modes.md'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
processOutputFolder: '{process_output_folder}'
---

# Step 4: Section Review

## 🚨 CRITICAL CONSTRAINT (READ BEFORE ANYTHING ELSE)

**ONE SUBSECTION PER TURN. NO EXCEPTIONS.**

- Present exactly ONE subsection
- Wait for user response
- Then and ONLY then move to the next

If you find yourself about to render more than one subsection, STOP. You are violating the core constraint.

---

## STEP GOAL:

Review sections and subsections ONE AT A TIME with granular approval, refinement, or edit options. Persist changes immediately after each approval or refinement to ensure no work is lost.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER present approval option if confidence < 80%
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR — present content, let user decide
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Step-Specific Rules:

- 🎯 Process subsections ONE AT A TIME — never render full section if subsections exist
- 📄 ALWAYS show the FULL rendered content — NEVER summarize, abbreviate, or paraphrase. The user must see the actual text, not a synopsis.
- 🚫 NEVER show a section-level summary or overview before drilling into subsections — go straight to subsection 1
- 💾 PERSIST IMMEDIATELY after every approval, edit, or QER completion
- 🚫 FORBIDDEN to batch changes in memory — write after each user action
- 🔄 In F2B mode, advance to next non-approved subsection automatically

## PARAMETERS

- `section_id`: The template section ID to review (e.g., `executive_summary`, `process_steps`)
- `mode`: `single` (return to hub after this section) or `f2b` (advance to next non-approved section, excludes executive summary)

## MANDATORY SEQUENCE

### 1. Load Section and Check for Subsections

**Load the section metadata from template:**

1. Read section definition from loaded template
2. Check if section has subsections defined
3. Load confidence scores and statuses from JSON

**IF section HAS subsections:**
- Set `has_subsections = true`
- Build subsection list with IDs and statuses
- Set `current_subsection_index = 0`
- Proceed to section 2 (Subsection Loop)

**IF section has NO subsections:**
- Set `has_subsections = false`
- Proceed to section 3 (Present Content for Review)

### 2. Subsection Loop (IF has_subsections = true)

**For each subsection, process individually:**

**🛑 STOP CHECK:** Before presenting content, verify you are showing ONLY ONE subsection. If you have rendered any other subsection in this turn, STOP — you have failed. Each subsection requires its own turn with user input before advancing.

**2a. Present Subsection Header:**

"---
## Section {section_number}.{subsection_number}: {subsection_heading}
*(Subsection {current_index + 1} of {total_subsections} in {parent_section_name})*

---

**Confidence:** {score}% ({HIGH/MEDIUM/LOW}) | **Status:** {current_status}"

**2b. Auto-Fill Check (confidence < 50%):**

IF confidence < 50%: auto-fill the subsection using your best knowledge, constrained by the per-document `.schema.yaml`. Persist immediately (MD + JSON), recalculate confidence, set `changes_made = true`. Show: "**Auto-filled** — confidence was {old}%, now {new}%."
IF confidence >= 50%: do NOT modify the content.

**2c. Present Subsection Content:**

Display the FULL rendered content of this subsection from MD (after auto-fill if applied). Show every word as written — NEVER summarize, abbreviate, or paraphrase. The user is reviewing the actual text.

**2d. Show Discrepancies (if any):**

If open discrepancies exist for this subsection:

"**Open Discrepancies:**
| ID | Type | Description |
|----|------|-------------|
| {disc_id} | {type} | {description} |"

**2e. Present Review Options:**

Proceed to section 4 (Review Options) for this subsection.

**2f. After Handling:**

- Increment `current_subsection_index`
- IF more subsections remain: loop back to 2a
- IF all subsections processed: mark parent section as reviewed, proceed to section 6

### 3. Present Content for Review (IF has_subsections = false)

**Auto-Fill Check:** IF confidence < 50%: auto-fill using your best knowledge constrained by the schema. Persist immediately, recalculate confidence, set `changes_made = true`. Show: "**Auto-filled** — confidence was {old}%, now {new}%." IF confidence >= 50%: do NOT modify.

**Display the section with prominent header:**

"---
## Section {section_number}: {section_heading}
---

**Confidence:** {score}% ({HIGH/MEDIUM/LOW}) | **Status:** {current_status}

{FULL rendered section content from MD — never summarize, show every word as written}"

**If open discrepancies exist:**

"**Open Discrepancies:**
| ID | Type | Description |
|----|------|-------------|
| {disc_id} | {type} | {description} |"

Proceed to section 4 (Review Options).

### 4. Present Review Options

**Build options dynamically.** Track a `changes_made` flag per subsection/section — set `true` after any Edit or QER, reset on next subsection.

**Always show:** `[Q] QER` `[E] Edit`
**IF confidence >= 80%:** add `[A] Approve`
**IF changes_made = true AND confidence < 80%:** add `[D] Done — Mark as reviewed, move to next`
**IF changes_made = false:** add `[S] Skip — Move to next without changes`

#### EXECUTION RULES:

- ALWAYS halt and wait for user input
- NEVER offer [A] when confidence < 80%
- After changes: persist immediately, re-present full text, replace [S] with [D]

### 5. Handle Selection

#### IF [A] Approve:

1. Mark subsection/section status as `approved`
2. **PERSIST IMMEDIATELY:**
   - Write updated status to MD
   - Write updated status to JSON
   - Update `_progress.yaml`
3. Proceed to next subsection (section 2f) or section 6 (Next Section Logic)

#### IF [E] Edit (Minor Edits):

**Fast path for small corrections:**

1. "What would you like to change? (e.g., 'Change X to Y', 'Add Z before W', 'Remove sentence about Q')"
2. User provides specific edit instruction
3. Apply the edit to content
4. **PERSIST IMMEDIATELY:**
   - Write updated content to MD
   - Write updated content to JSON
   - Recalculate confidence score
5. Re-present the subsection/section with updated content (return to section 2e or 3)

#### IF [Q] QER:

**Load {qerModesRef} for detailed mode instructions, then present submenu:**

"How would you like to refine this content?

**[Q] Quick Questions** — AI suggests 3 improvements, you choose
**[A] Advanced Elicitation** — Deep-dive structured knowledge extraction
**[P] Party Mode** — Creative brainstorming session
**[X] Exit** — Cancel QER, return to review options without changes

Select refinement mode:"

**IF [X] Exit:** Return to section 4 (review options) with no changes.

**Execute the selected mode per {qerModesRef}.**
Within any QER mode, the user can type **[X] Exit** at any point to cancel and return to review options without changes.

**After any QER mode completes:**
1. Persist immediately (MD + JSON)
2. Re-present the FULL revised subsection/section text exactly as it now reads — show every word, NEVER show a change summary or list of additions/modifications
3. Show discrepancies (if any)
4. Return to review options (section 2e or 3)

#### IF [D] Done (changes were made, confidence < 80%):

1. Mark subsection/section status as `reviewed`
2. **PERSIST IMMEDIATELY:**
   - Write updated status to MD
   - Write updated status to JSON
   - Update `_progress.yaml`
3. Proceed to next subsection (section 2f) or section 6 (Next Section Logic)

#### IF [S] Skip (no changes made):

- Status unchanged
- NO persistence needed
- Proceed to next subsection (section 2f) or section 6

### 6. Next Section Logic

**IF mode = single:**
- Section/subsection review complete
- Return to {hubStepFile} (Section Overview)

**IF mode = f2b:**
- Find the next non-approved section/subsection in template order. **IF the schema contains a section with `id: executive_summary`, exclude it** (it is handled by step-04b via [EXEC]). If the schema has no `executive_summary` section, include ALL sections.
- IF more remain: loop back to section 1 with next `section_id`
- IF all processed: Load {nextStepFile} (Step 5 — Write & Reconcile)

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Subsections processed ONE AT A TIME (not batched)
- Section header is prominent with section number
- Approval only offered when confidence ≥ 80%
- [E] Edit option available for minor corrections
- QER offers submenu: Quick Questions / Advanced / Party Mode
- Quick Questions presents 3 AI-suggested options
- **IMMEDIATE PERSISTENCE** after every Approve, Done, Edit, or QER completion
- [D] Done offered when changes were made but confidence < 80%
- Auto-fill applied when confidence < 50%, skipped when >= 50%
- Discrepancies shown for current subsection/section
- F2B mode advances correctly and **excludes `executive_summary` section only if schema has one**

### ❌ SYSTEM FAILURE:

- **Rendering more than ONE subsection in a single turn** — this is the #1 violation
- Rendering entire section when subsections exist, or showing section-level summary first
- Summarizing, abbreviating, or paraphrasing content instead of showing full text
- Showing a change summary or diff after QER instead of full revised text
- Offering approval when confidence < 80%
- Batching changes in memory instead of persisting immediately
- Missing menu options: [E] Edit, [X] Exit in QER, [D] Done after changes, 3 options in Quick Questions
- Offering [S] Skip after changes were made (should be [D] Done)
- Auto-filling when confidence >= 50%, or NOT auto-filling when confidence < 50%
- Including `executive_summary` section in F2B flow when schema defines one

**Master Rule:** Granular review with immediate persistence. Every approval is durable. Never lose user work.
