---
name: 'step-04-cross-read'
description: 'Cross-read DILO against all AS-IS documents, resolve discrepancies'

# File References
processFolder: '{process_output_folder}/{process_id}'
---

# Step 4: Cross-Read & Discrepancy Resolution

## STEP GOAL:

Systematically compare DILO observations against AS-IS. The discrepancies
between "what should happen" and "what does happen" are the primary deliverable.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:
- 📖 CRITICAL: Read the complete step file before taking any action
- ⏸️ ALWAYS halt and wait for user input after presenting menu

### Step-Specific Rules:
- 🛑 NEVER skip the cross-read — this is where the real value is
- 📖 Read ALL documents before starting comparison
- 🔄 ALWAYS propose updates to BOTH documents (DILO and AS-IS)
- 💾 Persist all changes immediately
- 📊 ALWAYS generate the Lean 8-wastes classification

## CONTEXT BOUNDARIES:

- **Available context:** Completed DILO observation, all AS-IS documentation
- **Focus:** Systematic comparison and discrepancy resolution
- **Limits:** Work within {processFolder} for all document operations
- **Dependencies:** Requires completed DILO from continue-session

## MANDATORY SEQUENCE

### 1. Load All Documents

**Read completely from {processFolder}:**
1. DILO observation (just completed): `{processFolder}/dilo-observation-{role_slug}.md`
2. AS-IS process documentation: `{processFolder}/as-is-process-documentation.md`
3. Pain points detail: `{processFolder}/pain-points-detail.md`
4. Exceptions detail: `{processFolder}/exceptions-detail.md`
5. Control points detail: `{processFolder}/control-points-detail.md`
6. SIPOC analysis (if exists): `{processFolder}/sipoc-analysis.md`

### 2. Automated Comparison

**A. Step Coverage:**
- For each PS# this role owns: was it observed in DILO?
- For each ACT# in DILO: does it map to a PS#?
- Flag: steps not performed, undocumented steps performed

**B. Timing Variance:**
- Compare expected duration vs actual duration per PS#
- Flag any variance > 30%
- Calculate: total expected time vs total actual time

**C. System Mismatch:**
- Compare expected system per step vs actual system used
- Flag: different system used, additional systems used, system not used

**D. Workaround Impact:**
- For each WA#: does it relate to a known PP#?
- Flag new pain points discovered through workarounds
- Flag workarounds with compliance risk (relate to CP#)

**E. Undocumented Step Impact:**
- For each UD#: should it be added to AS-IS?
- Flag steps that indicate the AS-IS is structurally incomplete

**F. Interruption Pattern:**
- Do interruptions correlate with specific PS# items?
- Are some process steps inherently interrupt-prone?

**G. Lean Waste Classification:**
- Classify each DILO activity as Value-Add / NNVA / Waste
- Generate 8-wastes breakdown (TIMWOODS):
  - Transport (unnecessary movement of information)
  - Inventory (work piling up)
  - Motion (unnecessary actions)
  - Waiting (idle time)
  - Overprocessing (doing more than needed)
  - Overproduction (producing before needed)
  - Defects (errors, rework)
  - Skills (underutilized talent)

### 3. Generate Discrepancy Table

For each discrepancy found, create a DIS# entry:

| DIS# | Category | AS-IS States | DILO Observed | Severity | Resolution |
|------|----------|-------------|---------------|----------|------------|

**Categories:** `Missing Step` | `Wrong Duration` | `Wrong System` | `Wrong Owner` | `Wrong Sequence` | `Missing Exception` | `Hidden Workaround` | `Missing Pain Point`

### 4. Present Discrepancy Report

"**DILO Cross-Read Results: {{discrepancy_count}} discrepancies found**

| # | Type | AS-IS Says | DILO Observed | Severity | Action |
|---|------|-----------|---------------|----------|--------|
{{discrepancy_table}}

**Key findings:**
- {{variance_count}} timing variances ({{critical_variance_count}} critical)
- {{workaround_count}} workarounds ({{compliance_risk_count}} with compliance risk)
- {{undocumented_count}} undocumented steps
- {{system_mismatch_count}} system mismatches

**[R] Resolve discrepancies one by one | [S] Skip to summary | [EXIT] Save and exit**"

#### Menu Handling Logic:
- IF R: Proceed to Interactive Resolution (section 5) for each discrepancy
- IF S: Skip to Summary & Return (section 9)
- IF EXIT: Persist all changes to {processFolder}, then exit workflow
- IF Any other: Help user respond, then redisplay menu

#### EXECUTION RULES:
- ALWAYS halt and wait for user input after presenting menu

### 5. Interactive Resolution

For each discrepancy:

"**Discrepancy #{{n}}: {{description}}**

AS-IS says: {{asis_value}}
DILO observed: {{dilo_value}}

Which reflects reality?
**[1]** DILO is correct → update AS-IS
**[2]** AS-IS is correct (edge case day) → note in DILO
**[3]** Both partially correct → merge
**[4]** Skip for now"

#### Menu Handling Logic:
- IF 1: Update AS-IS with DILO observation, persist to {processFolder}, proceed to next discrepancy
- IF 2: Add note in DILO explaining edge case, persist, proceed to next discrepancy
- IF 3: Merge both versions with user input, persist both documents, proceed to next discrepancy
- IF 4: Skip this discrepancy, proceed to next
- IF Any other: Help user respond, then redisplay menu

After resolution: update both documents, persist, next discrepancy.

### 6. New Item Capture

For new pain points/exceptions/workarounds discovered:

"DILO revealed a potential new pain point:
**{{description}}** (from workaround WA-{{id}})

**[A]** Add as PP# to AS-IS | **[S]** Skip | **[L]** Add to backlog"

#### Menu Handling Logic:
- IF A: Use capture-item pattern to add as new PP# in AS-IS, persist to {processFolder}
- IF S: Skip this item, proceed to next
- IF L: Add to backlog for later review
- IF Any other: Help user respond, then redisplay menu

If adding: use capture-item pattern (generate ID, gather fields, validate, insert).

### 7. Update AS-IS Confidence

For each AS-IS section affected by DILO findings:
- Calculate impact on confidence rating
- Update confidence markers in AS-IS

Present confidence impact:

| AS-IS Section | Previous Confidence | Post-DILO Confidence | Reason |
|---------------|--------------------|-----------------------|--------|
{{confidence_impact_table}}

### 8. Multi-DILO Aggregation

IF other DILOs exist for this process:
- Compare across roles: do they agree on step durations?
- Cross-role interruption patterns
- Systemic workarounds (same WA found in multiple DILOs)

Present aggregation findings if applicable.

### 9. Summary & Return

"**DILO Cross-Read Complete**

**Key Findings:**
- {{variance_count}} timing variances ({{critical_variance_count}} critical)
- {{workaround_count}} workarounds identified ({{compliance_risk_count}} with compliance risk)
- {{undocumented_count}} undocumented steps found
- {{new_pp_count}} new pain points added to AS-IS
- {{corrections_count}} corrections made to AS-IS

**Lean Waste Summary:**
- Value-Add: {{value_add_pct}}% of observed time
- Necessary Non-Value-Add: {{nnva_pct}}%
- Waste: {{waste_pct}}%
- Top waste category: {{top_waste_category}}

**AS-IS Confidence Impact:**
{{confidence_changes}}

All documents updated and saved.

**[MENU]** Return to PDA agent menu"

#### Menu Handling Logic:
- IF MENU: Save all changes to {processFolder}, then return to PDA agent menu
- IF Any other: Help user respond, then redisplay menu

→ Return to PDA agent menu

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:
- All documents loaded from {processFolder}
- Systematic comparison completed (steps, timing, systems, workarounds)
- Lean 8-wastes classification generated
- Discrepancy table created and presented
- User-guided resolution for each discrepancy
- Both DILO and AS-IS updated where appropriate
- Confidence ratings updated
- All changes persisted to {processFolder}

### ❌ SYSTEM FAILURE:
- Skipping the cross-read comparison
- Not loading all documents
- Missing Lean waste classification
- Not presenting discrepancies to user
- Making changes without user approval
- Not persisting changes
- Not updating confidence ratings

**Master Rule:** Cross-read is the primary value delivery. Every discrepancy represents process improvement opportunity. Never skip, always document.
