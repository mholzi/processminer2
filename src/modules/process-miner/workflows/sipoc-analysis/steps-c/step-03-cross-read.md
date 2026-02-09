---
name: 'step-03-cross-read'
description: 'Cross-read SIPOC against all documents, resolve discrepancies'

# File References
processFolder: '{process_output_folder}/{process_id}'
agentMenu: 'Return to PDA agent menu'
---

# Step 3: Cross-Read & Discrepancy Resolution

## STEP GOAL:

Systematically compare the completed SIPOC against all AS-IS documents.
Identify discrepancies. Present to SME for resolution. Update all affected
documents.

## MANDATORY EXECUTION RULES:

- 🛑 NEVER skip the cross-read — this is where the real value is
- 📖 Read ALL documents before starting comparison
- 🔄 ALWAYS propose updates to BOTH documents (SIPOC and AS-IS)
- 💾 Persist all changes immediately

## MANDATORY SEQUENCE

### 1. Load All Documents

Read completely:
1. SIPOC analysis (just completed)
2. AS-IS process documentation
3. Pain points detail
4. Exceptions detail
5. Control points detail
6. CX journey documentation (if exists)

### 2. Automated Comparison

Run these checks:

**A. Stakeholder Completeness:**
- Every SUP# and CUS# should appear in AS-IS Section 1.4 (Stakeholders)
- Flag any stakeholder in SIPOC not in AS-IS and vice versa

**B. System Consistency:**
- Every system in SIPOC inputs/outputs should match AS-IS Section 5 (SYS#)
- Flag mismatches in system names, purposes, or integration methods

**C. Input/Output vs Step Details:**
- Every INP# should trace to a PS# that uses it
- Every OUT# should trace to a PS# that produces it
- Flag orphan inputs/outputs

**D. Pain Point Discovery:**
- Supplier quality issues (Section 2) may map to PP# items
- Output quality gaps (Section 5) may map to PP# items
- Interface issues (Section 7) may reveal NEW pain points
- Flag new PPs discovered via SIPOC

**E. Exception Correlation:**
- SIPOC "What happens when missing/late" → should map to EX# items
- Flag missing exception documentation

**F. Control Point Alignment:**
- Regulatory inputs/outputs in SIPOC → should be covered by CP# items
- Flag gaps in control coverage

### 3. Present Discrepancy Report

"**Cross-Read Results: {{discrepancy_count}} discrepancies found**

| # | Type | SIPOC Says | AS-IS Says | Severity | Action Needed |
|---|------|-----------|-----------|----------|---------------|
{{discrepancy_table}}

**New discoveries:**
- {{new_pp_count}} potential new pain points
- {{new_ex_count}} potential new exceptions
- {{missing_stakeholder_count}} stakeholders missing from AS-IS
- {{missing_system_count}} systems missing from AS-IS

**[R] Resolve discrepancies one by one | [S] Skip to summary | [EXIT] Save and exit**"

### 4. Interactive Resolution

For each discrepancy:

"**Discrepancy #{{n}}: {{description}}**

SIPOC says: {{sipoc_value}}
AS-IS says: {{asis_value}}

Which is correct?
**[1]** SIPOC is correct → update AS-IS
**[2]** AS-IS is correct → update SIPOC
**[3]** Both partially correct → merge
**[4]** Skip for now"

After resolution: update both documents, persist, next discrepancy.

### 5. New Item Capture

For new pain points/exceptions discovered:

"SIPOC revealed a potential new pain point:
**{{description}}** (from {{source}})

**[A]** Add as PP# to AS-IS | **[S]** Skip | **[L]** Add to backlog"

If adding: use capture-item pattern (generate ID, gather fields, validate, insert).

### 6. Summary & Return

"**Cross-Read Complete**

- {{resolved_count}} discrepancies resolved
- {{new_items_count}} new items added to AS-IS
- {{corrections_count}} corrections made
- {{skipped_count}} items skipped (backlogged)

All documents updated and saved.

**[MENU]** Return to PDA agent menu"

→ Return to PDA agent menu
