# QER Refinement Modes

Reference guide for QER (Question, Elicit, Refine) submenu options in section review.

---

## Mode Selection Menu

When user selects [Q] QER, present this submenu:

"How would you like to refine this content?

**[Q] Quick Questions** — AI suggests 3 improvements, you choose
**[A] Advanced Elicitation** — Deep-dive structured knowledge extraction
**[P] Party Mode** — Creative brainstorming session
**[X] Exit** — Cancel QER, return to review options without changes

Select refinement mode:"

### Exit Rule (All Modes)

The user can type **[X] Exit** at any point during any QER mode to cancel and return to review options. If changes were made before exit, discard them — do not persist partial QER work.

---

## [Q] Quick Questions Mode

**Purpose:** Fast, focused refinement with AI-suggested options.

### Execution Steps:

1. **Analyze** the current content and identify 3 potential improvements based on:
   - Gaps vs schema requirements
   - Ambiguous or unclear content
   - Missing detail or context
   - Low confidence areas

2. **Present 3 Options:**

"Based on my analysis, here are 3 suggested improvements:

**[1] {Improvement 1 title}** — {Brief description of what would change}
**[2] {Improvement 2 title}** — {Brief description of what would change}
**[3] {Improvement 3 title}** — {Brief description of what would change}
**[O] Other** — Tell me what you'd like to change

Select an option:"

3. **Elicit:** Based on selection, ask 1-2 targeted follow-up questions to gather the needed information

4. **Refine:** Apply the improvement to content

5. **Persist & Re-present:** Write to MD + JSON, recalculate confidence, return to review options

---

## [A] Advanced Elicitation Mode

**Purpose:** Deep-dive structured knowledge extraction using agent prompts.

### Execution Steps:

1. **Load relevant prompts** based on section type:

| Section Type | Prompt to Load |
|--------------|----------------|
| Process Steps | `process-walkthrough` |
| Pain Points | `pain-discovery` |
| Exceptions | `exception-hunting` |
| Controls | `control-discovery` |
| Systems | `system-deep-dive` |
| Metrics/Timing | `timing-volume` |
| SLAs | `sla-discovery` |

2. **Run structured elicitation sequence:**
   - Multiple rounds of targeted questions
   - Build comprehensive understanding
   - Capture all relevant details

3. **Apply refinements** to content

4. **Persist & Re-present:** Write to MD + JSON, recalculate confidence, return to review options

---

## [P] Party Mode

**Purpose:** Creative brainstorming session for exploratory refinement.

### Execution Steps:

1. Display: "Starting Party Mode for creative exploration of this section..."

2. **Load and execute** `{project-root}/_bmad/core/workflows/party-mode/workflow.md` with context:
   - Current section content
   - Section type and schema
   - Known gaps and issues

3. **On completion:** Capture outputs from brainstorming session

4. **Persist & Re-present:** Write to MD + JSON, recalculate confidence, return to review options

---

## Persistence Protocol (All Modes)

After any QER mode completes:

1. Write updated content to MD (sharded or monolithic)
2. Write updated content to JSON
3. Recalculate confidence score
4. Update/resolve any discrepancies addressed
5. Update `_progress.yaml`
6. Re-present the FULL revised subsection/section text exactly as it now reads — show every word as written. **NEVER show a change summary, diff, or list of additions/modifications.** The user wants to see the revised text, not what changed. Show discrepancies if any exist, then present review options.
