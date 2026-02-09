---
name: 'step-02-prefill'
description: 'AI prefills DILO from AS-IS role data'

# File References
nextStepFile: './step-04-cross-read.md'  # After continue-session returns
processFolder: '{process_output_folder}/{process_id}'
diloTemplate: '{project-root}/src/modules/process-miner/templates/documents/dilo-observation.md'
asisDoc: '{processFolder}/as-is-process-documentation.md'
painPointsDoc: '{processFolder}/pain-points-detail.md'
exceptionsDoc: '{processFolder}/exceptions-detail.md'
controlsDoc: '{processFolder}/control-points-detail.md'
---

# Step 2: AI Prefill

## STEP GOAL:

Generate the "official" view of the role's day from AS-IS data, creating
the baseline for comparison. No SME interaction in this step — pure AI extraction.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step, ensure entire file is read
- ⏸️ ALWAYS halt and wait for user input after presenting menu

### Step-Specific Rules:
- 🛑 NEVER ask the SME anything in this step
- 📖 Read ALL referenced documents completely
- 🕐 Generate a plausible expected timeline from AS-IS data
- ⚠️ Mark everything with [EXPECTED — from AS-IS, will compare with actual]
- 💾 Write the draft DILO to the process folder

## CONTEXT BOUNDARIES:

- **Available context:** Selected role, subject details, AS-IS documentation
- **Focus:** AI-generated prefill from existing documentation
- **Limits:** No SME interaction - pure extraction
- **Dependencies:** Requires step-01 completion with role selection

## MANDATORY SEQUENCE

### 1. Extract Role Data

**Load and read these documents:**
- {asisDoc} - AS-IS process documentation
- {painPointsDoc} - Pain points detail
- {exceptionsDoc} - Exceptions detail
- {controlsDoc} - Control points detail

**Extract from {asisDoc}:**
- All PS# where this role is R (Responsible) or A (Accountable)
- Systems used at those steps (from Section 5)
- Duration estimates (if captured in step details)

**Extract from {exceptionsDoc}:**
- Exceptions this role handles

**Extract from {controlsDoc}:**
- Controls this role performs

**Extract from {painPointsDoc}:**
- Pain points that affect this role's steps

### 2. Generate Expected Timeline

Build a hypothetical timeline of the role's day based on AS-IS data:

```
| ACT# | Expected Time | Duration | Activity | PS# | System | Value Class |
|------|--------------|----------|----------|-----|--------|-------------|
| ACT-{ABBREV}-001 | 08:00 | 30min | [Step description from AS-IS] | PS-{ABBREV}-001 | [System] | 🟢 |
| ACT-{ABBREV}-002 | 08:30 | 45min | [Step description from AS-IS] | PS-{ABBREV}-002 | [System] | 🟢 |
| ... | ... | ... | ... | ... | ... | ... |
```

Mark all with `[EXPECTED — from AS-IS, will compare with actual]`.

If AS-IS doesn't have duration estimates, make reasonable assumptions based on
step complexity and mark as `[EXPECTED — duration estimated, needs SME validation]`.

### 3. Pre-populate Sections

**Load {diloTemplate} and fill in sections:**

**Section 1 (Role Profile):**
- Role identification from RACI data
- Process steps owned table from AS-IS
- Expected time on process (sum of step durations)
- Leave "Role in Practice" fields empty — SME will fill

**Section 2 (Timeline):**
- Expected timeline only (generated in step 2)
- Time distribution based on expected values
- Time by process step comparison (expected column filled, actual empty)

**Section 3 (Interruptions):**
- Leave empty — can only be captured through observation
- Add note: `[This section will be populated during observation]`

**Section 4 (Workarounds):**
- If pain points mention workarounds, pre-populate as candidates
- Mark as `[PREFILLED — inferred from pain point PP-{ABBREV}-{SEQ}]`

**Section 5 (Undocumented Steps):**
- Leave empty — by definition, these aren't in the AS-IS
- Add note: `[This section will be populated during observation]`

**Section 6 (System Usage):**
- Expected system usage from AS-IS Section 5
- Fill "AS-IS Says System" column, leave "Actually Uses" empty

**Section 7 (Discrepancy Analysis):**
- Leave empty — will be completed in cross-read step
- Add note: `[This section will be populated after observation]`

**Section 8 (Findings):**
- Leave empty — will be completed in cross-read step

### 4. Persist Draft

Write the draft DILO to:
- MD: `{processFolder}/dilo-observation-{role_slug}.md`
- JSON: `{processFolder}/dilo-observation-{role_slug}.json`

### 5. Present Summary & Hand Off to continue-session

"**DILO Prefilled** for role **{{role_name}}**

Based on AS-IS, this role's expected day includes:
- **{{expected_activities}} activities** across {{expected_duration}}
- **{{systems_count}} systems** used
- **{{steps_count}} process steps** owned

Now I'll ask {{subject_name}} to walk me through what ACTUALLY happens.
The interesting part is where reality differs from the docs.

**[C] Continue to observation**"

#### Menu Handling Logic:
- IF C: Hand off to continue-session with document_type=dilo, then after return load {nextStepFile}
- IF Any other: Help user respond, then redisplay menu

#### EXECUTION RULES:
- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to continue-session when user selects 'C'

### 6. Hand Off to continue-session

When C selected:
- Call continue-session workflow with parameter: `document_type=dilo`
- Pass additional context: `role_name`, `role_slug`, `subject_name`
- continue-session loads DILO template + schema from `dilo-observation.schema.yaml`
- continue-session reads `section_prompts` from `dilo-observation.schema.yaml`
- The chronological mode in section 2 prompts guide the SME walk-through
- The non-judgmental tone in section 4 encourages workaround disclosure
- SME refines section by section using existing hub-and-spoke loop
- When SME exits continue-session (DONE or EXIT):
  → Return here and load {nextStepFile} (step-04-cross-read.md)

**This replaces a dedicated step-03-observe-sme.** The continue-session workflow
already handles template-driven section discovery, hub-and-spoke review,
dual persistence, and confidence tracking. DILO-specific conversational
patterns are embedded in the schema's `section_prompts`.

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:
- All reference documents loaded ({asisDoc}, {painPointsDoc}, {exceptionsDoc}, {controlsDoc})
- Role data extracted completely
- Expected timeline generated from AS-IS
- DILO template ({diloTemplate}) loaded and sections pre-populated
- Draft DILO written to process folder
- User confirmed to proceed to observation

### ❌ SYSTEM FAILURE:
- Not loading all reference documents
- Asking SME questions in this step (AI-only extraction)
- Skipping expected timeline generation
- Not marking prefilled content with [EXPECTED] tags
- Not persisting draft DILO before handoff

**Master Rule:** This step is AI-only extraction. Never interact with SME. All content must be marked as [EXPECTED].
