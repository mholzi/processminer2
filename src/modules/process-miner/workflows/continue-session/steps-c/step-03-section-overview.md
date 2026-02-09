---
name: 'step-03-section-overview'
description: 'Template-driven section table — navigation hub for review cycles'

# File References
nextStepFile: './step-04-section-review.md'
execStepFile: './step-04b-exec-summary.md'

# Exit Targets (resolved from invoking agent context or module config)
# - {invoking_agent}: The agent that started this workflow (for MENU return)
# - {companion_agent}: Optional companion/hub agent (for COMP handoff, if configured)
---

# Step 3: Section Overview (HUB)

## STEP GOAL:

Display a comprehensive, template-driven overview of all document sections with completeness, confidence, and discrepancy status. Serve as the central navigation hub for the review cycle.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER hardcode section names — discover from loaded template
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR presenting options
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Step-Specific Rules:

- 🎯 This is the HUB — every review cycle returns here
- 🚫 FORBIDDEN to auto-start review without user choice
- 💬 Approach: Clear status table, let user decide direction
- 📊 Differentiate between open and deferred discrepancies

## MANDATORY SEQUENCE

### 1. Load Current State

**Reload from JSON and _progress.yaml** to get the latest state:
- Section completeness percentages
- Confidence scores per section
- Open discrepancies (scope: intra + inter document)
- Deferred discrepancies
- Approval status per section

### 2. Display Section Table

**Build table dynamically from loaded template sections:**

"**Document Status: {process_name} — {document_type}**

| # | Section | Status | Completeness | Confidence | Open | Deferred |
|---|---------|--------|--------------|------------|------|----------|
| 1 | {section_heading} | {not_started/draft/review/approved} | {pct}% | {score}% | {count} | {count} |
| 2 | {section_heading} | ... | ... | ... | ... | ... |
| ... | ... | ... | ... | ... | ... | ... |

**Overall:** {total_completeness}% complete | {total_open} open discrepancies | {total_deferred} deferred

**Legend:**
- **Status:** not_started → draft → review → approved
- **Confidence:** 80%+ eligible for direct approval
- **Open:** discrepancies requiring resolution
- **Deferred:** discrepancies postponed by user"

### 3. Present MENU OPTIONS

**First, check the schema:** Does the loaded schema contain a section with `id: executive_summary`? Set `has_exec_summary = true/false`.

Display:

"**What would you like to do?**

**Review:**
- **[1-N]** Select a specific section to review
- **[F2B]** Front-to-back review of all non-approved sections {IF has_exec_summary: (excludes Executive Summary)}
{IF has_exec_summary: - **[EXEC]** Compose or refine the Executive Summary from the full document}

**Navigation:**
- **[MENU]** Return to agent menu
{IF companion_agent is configured: - **[COMP]** Switch to {companion_agent}}"

#### Menu Handling Logic:

- IF [1-N] (section number): Load {nextStepFile} with parameters `section_id={selected_section}` and `mode=single`
- IF F2B AND has_exec_summary: Load {nextStepFile} with parameters `section_id={first_non_approved_excluding_executive_summary}` and `mode=f2b`. The section with `id: executive_summary` is excluded — it can only be composed/refined via [EXEC].
- IF F2B AND NOT has_exec_summary: Load {nextStepFile} with parameters `section_id={first_non_approved_section}` and `mode=f2b`. All sections are included.
- IF EXEC (only if has_exec_summary): Load, read entirely, then execute {execStepFile}
- IF MENU: Return to invoking agent menu. End workflow.
- IF COMP (only if companion_agent configured): Hand off to {companion_agent}. End workflow.
- IF user asks questions: Answer, then redisplay menu

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- For section selection or F2B: load, read entire file, then execute {nextStepFile}
- For COMP/MENU: gracefully exit workflow
- User can chat or ask questions — always respond and then redisplay menu

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Section table built dynamically from template
- All statuses reflect current JSON + _progress.yaml state
- Open vs deferred discrepancies shown separately
- Clear navigation options presented
- User choice handled correctly

### ❌ SYSTEM FAILURE:

- Hardcoded section names
- Stale data (not reloaded from JSON)
- Auto-starting review without user choice
- Not distinguishing open from deferred discrepancies
- Missing navigation exit options (MENU required, COMP if configured)
- Including Executive Summary in F2B flow when schema has `id: executive_summary`
- Showing [EXEC] option when schema has no `executive_summary` section

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.
