---
name: 'step-01-run-suite-checks'
description: 'Run suite-level validation checks across all documents'

# File References
nextStepFile: './step-02-suite-report.md'
processFolder: '{process_output_folder}/{process_id}'
schemaDir: '{project-root}/src/modules/process-miner/templates/documents'
defaultsFile: '{project-root}/src/modules/process-miner/templates/documents/_defaults.yaml'
---

# Step 1: Run Suite-Level Validation Checks

## STEP GOAL:

Execute all suite-level validation check categories and compile findings. These checks validate relationships *between* documents — they complement the per-document QA validation workflow.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER skip any check category (for the selected mode)
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR validating cross-document consistency

### Step-Specific Rules:

- 🎯 Focus on inter-document relationships
- 🚫 FORBIDDEN to generate the suite report yet
- 💬 Approach: Run checks, collect findings

## MANDATORY SEQUENCE

### 1. Load Suite Context

"**Loading suite context...**"

Load ALL documents present in the process folder and their corresponding schemas:

```
✓ _defaults.yaml loaded (confidence propagation rules, ID prefix registry)
✓ Documents loaded:
  - as-is-documentation.md (foundation)
  - exceptions-detail.md (detail)
  - control-points-detail.md (detail)
  - pain-points-detail.md (detail)
  - dilo-observation-{role}.md (if exists)
  - sipoc-analysis.md (if exists)
  - cx-journey-documentation.md (if exists)
  - compliance-control-assessment.md (if exists)
  - innovation-analysis-documentation.md (if exists)
  - target-state-documentation.md (if exists)
  - [management summaries, etc.]
✓ Schemas loaded for each document
✓ Mode: {full | incremental | impact-only}
```

**IF mode == incremental:** Identify the changed document, then use `dependencies` blocks from schemas to determine upstream and downstream neighbors. Only validate the changed document + neighbors.

**IF mode == impact-only:** Identify the changed document, use `dependencies` blocks to list affected downstream documents, then skip to Section 8 (Present Impact Analysis).

### 2. Run Inter-Document Reference Validation

"**[1/6] Inter-Document Reference Validation**"

For each document with an `inter_document` cross-reference block in its schema:

1. Extract all referenced IDs from the document (e.g., PS-ONB-007 in DILO)
2. Look up the target document specified in the schema
3. Verify each referenced ID exists in the target document

```
✓ DILO → AS-IS: 12 PS# references, all valid
✓ DILO → pain-points-detail: 3 PP# references, all valid
✗ CX Journey → AS-IS: PS-ONB-015 not found in AS-IS Section 2
  → Remediation: Verify PS# in AS-IS or update CX Journey reference
✓ SIPOC → AS-IS: 8 PS# references, all valid
✓ Compliance → AS-IS: 5 CP# references, all valid
✓ Target State → AS-IS: 14 PS# references, all valid
✓ Target State → CX Journey: 6 JT# references, all valid
✗ Target State → Innovation: II-ONB-008 not found in Innovation Backlog
  → Remediation: Add II-ONB-008 to Innovation Analysis or remove from Target State
```

**Severity:** Strict blocking if upstream document confidence is MEDIUM or HIGH. Soft warning if upstream confidence is LOW (reference might not exist yet).

### 3. Run Sync Consistency Validation

"**[2/6] Sync Consistency Validation**"

For each document with a `sync_validation` block in its schema:

1. **ID Set Equality:** Extract IDs from parent section and detail document. Compare sets.
2. **Required Field Presence:** For each shared ID, verify required fields are populated in both locations.

```
✓ AS-IS Section 3 ↔ exceptions-detail: 4 EX# IDs match
✓ AS-IS Section 4 ↔ control-points-detail: 6 CP# IDs match
✗ AS-IS Section 9 ↔ pain-points-detail: PP-ONB-009 exists in detail but not in AS-IS
  → Remediation: Add PP-ONB-009 to AS-IS Section 9 or remove from pain-points-detail
✓ CX Journey Section 2 ↔ client-touchpoints-detail: 8 JT# IDs match
```

**Note:** Text matching is NOT enforced — wording can differ. Only ID presence and required field presence matter.

### 4. Run Prerequisite Compliance

"**[3/6] Prerequisite Compliance**"

For each document with a `prerequisites.rules` block in its schema:

1. Evaluate each prerequisite rule against the actual upstream document state
2. Report blocking violations and warnings

```
✓ DILO prerequisites met:
  - AS-IS completion: 75% (≥60% required) ✓
  - AS-IS PS# count: 12 (≥5 required) ✓
  - AS-IS RACI populated: Yes ✓
✗ SIPOC prerequisites not met:
  - AS-IS completion: 45% (≥60% required) ✗ BLOCKING
  - AS-IS PS# count: 8 (≥5 required) ✓
  → Remediation: Continue AS-IS documentation before finalizing SIPOC
```

### 5. Run ID Uniqueness Validation

"**[4/6] ID Uniqueness Validation**"

Across ALL documents in the suite, check for ID collisions within Tier 1 prefixes:

1. Build a global index of all Tier 1 IDs and their source documents
2. Flag any ID that appears as a *different item* in two documents (same ID, different meaning)

```
✓ PS# IDs: 12 unique, no collisions
✓ PP# IDs: 8 unique, no collisions
✓ CP# IDs: 6 unique, no collisions
✓ JT# IDs: 8 unique, no collisions
✓ No Tier 1 ID collisions detected
```

**Note:** The same ID appearing in multiple documents as a *reference* is expected (e.g., PS-ONB-007 in both DILO and CX Journey). Only flag cases where two documents *define* the same ID with different meanings.

### 6. Run Confidence Propagation Check

"**[5/6] Confidence Propagation**"

Using the `confidence_propagation` rules from `_defaults.yaml`:

1. For each propagation rule, check the upstream section's confidence
2. Check each downstream section's confidence
3. Flag violations where downstream > upstream

```
✓ AS-IS process_steps (MEDIUM) → DILO timeline (LOW): OK
✗ AS-IS process_steps (LOW) → CX Journey touchpoints (HIGH): VIOLATION
  → CX Journey touchpoints confidence cannot exceed AS-IS process_steps confidence
  → Remediation: Lower CX Journey touchpoints confidence to LOW, or validate AS-IS process steps to raise confidence
✓ CX Journey touchpoints (HIGH) → Target State cx_design (MEDIUM): OK
```

### 7. Run Coverage Completeness

"**[6/6] Coverage Completeness**"

Check that key Tier 1 IDs have downstream coverage:

1. Every PS# should appear in at least one downstream document (DILO, SIPOC, or CX Journey)
2. Every PP# should appear in at least one of: Innovation Analysis or Target State
3. Every CP# should appear in at least one of: Compliance or Target State

```
✓ PS# coverage: 12/12 steps referenced in at least one downstream doc (100%)
⚠️ PP# coverage: 6/8 pain points referenced downstream (75%)
  - PP-ONB-007: Not referenced in Innovation or Target State
  - PP-ONB-008: Not referenced in Innovation or Target State
✓ CP# coverage: 6/6 control points referenced downstream (100%)
```

### 7b. Sync Findings to Gap Resolution Log

"**Syncing suite findings to gap resolution log...**"

#### Bootstrap Check

IF `{processFolder}/gap-resolution-log.md` does not exist:
1. Create from template at `{schemaDir}/gap-resolution-log.md`
2. Fill process metadata from `_progress.yaml`

#### Fingerprint and Write

For each finding across all 6 suite check categories, compute a deterministic fingerprint:

```
qa-suite:suite:{category}:{check_type}:{item}
```

Where `{category}` is one of: `inter_document_refs`, `sync_consistency`, `prerequisite_compliance`, `id_uniqueness`, `confidence_propagation`, `coverage_completeness`

Examples:
- `qa-suite:suite:inter_document_refs:missing_ref:CX_Journey->AS-IS:PS-ONB-015`
- `qa-suite:suite:sync_consistency:id_mismatch:AS-IS_S9<->pain-points-detail:PP-ONB-009`
- `qa-suite:suite:prerequisite_compliance:not_met:SIPOC:AS-IS_completion_45pct`
- `qa-suite:suite:confidence_propagation:violation:AS-IS_process_steps->CX_Journey_touchpoints`
- `qa-suite:suite:coverage_completeness:unreferenced:PP-ONB-007`

#### Deduplication

For each finding:
1. Search gap-resolution-log.md for existing VG# with matching fingerprint
2. **IF match found AND status is open/in_progress:** Update "last seen" date only
3. **IF no match found:** Create new VG# entry:
   - **Source Agent:** "QA Agent (Suite)"
   - **Source Workflow:** "qa-suite"
   - **Severity mapping (category-specific):**
     - Inter-document refs error / ID uniqueness error → "Critical"
     - Sync consistency error / Prerequisite compliance error → "High"
     - Confidence propagation warning / Coverage completeness warning → "Medium"
   - **Status:** "open"
   - **Fingerprint:** stored as HTML comment after VG# heading
   - Add to Section 1.1 (open gaps), Section 2 (detailed records), Section 3.5 (QA Validation Gaps)

#### Auto-Resolution

After processing all current findings:
1. Load all open/in_progress VG# entries where source workflow = "qa-suite"
2. For each, check if its fingerprint appears in current findings
3. **IF fingerprint NOT in current findings:**
   - Set status to "resolved", resolution_type to "QA Auto-Resolution"
   - Add resolution history: `{date} | Auto-resolved | QA Agent | Issue no longer detected in qa-suite-validation run`
   - Move from Section 1.1 (open) to Section 1.3 (resolved)

```
✓ Gap log synced: {new_count} new VG#, {resolved_count} auto-resolved, {total_open} open suite gaps
```

#### Progress Update

```yaml
update-progress:
  type: gap_log_status
  gap_log:
    exists: true
    total_vg_count: {count}
    open_count: {count}
    in_progress_count: {count}
    resolved_count: {count}
    deferred_count: {count}
    qa_document_open: {count}
    qa_suite_open: {count}
    specialist_open: {count}
    last_sync: {timestamp}
```

### 8. Present Findings Summary

**IF mode == impact-only:** Present impact analysis instead of validation results:

"**Impact Analysis for: {changed_document}**

| Affected Document | Relationship | Referenced Prefixes | Action Needed |
|-------------------|-------------|---------------------|---------------|
| DILO | downstream | PS#, SYS# | Re-validate references |
| CX Journey | downstream | PS# | Re-validate touchpoint mappings |
| Target State | downstream | PS#, CP#, PP# | Re-validate reconciliation |

**Recommendation:** Run `qa-suite-validation --mode=incremental` to validate these documents."

**IF mode == full or incremental:** Present validation results:

"**Suite Validation Complete**

| Category | Status | Errors | Warnings |
|----------|--------|--------|----------|
| Inter-Document References | ✗ Error | {count} | {count} |
| Sync Consistency | ✓ Pass | 0 | 0 |
| Prerequisite Compliance | ✓ Pass | 0 | 0 |
| ID Uniqueness | ✓ Pass | 0 | 0 |
| Confidence Propagation | ⚠️ Warn | 0 | {count} |
| Coverage Completeness | ⚠️ Warn | 0 | {count} |

**Total:** {error_count} errors, {warning_count} warnings

**Gap Resolution Log:** {new_count} new VG# entries, {resolved_count} auto-resolved, {total_open} total open"

### 9. Present MENU OPTIONS

Display: "**Ready to generate suite report?** [C] Continue [D] Details on category [R] Re-run specific check"

#### Menu Handling Logic:

- IF C: Store findings, load, read entire file, then execute {nextStepFile}
- IF D: Show detailed findings for requested category
- IF R: Re-run a specific check category (useful after making corrections)

#### EXECUTION RULES:

- ALWAYS halt and wait for user input
- ONLY proceed when user selects 'C'

---

## SYSTEM SUCCESS/FAILURE METRICS

### SUCCESS:

- All 6 check categories run (or appropriate subset for mode)
- Findings compiled with severity levels
- Summary presented clearly
- Ready for report generation

### FAILURE:

- Skipping check categories
- Not reporting all findings
- Generating report in this step
- Running incremental without identifying changed document
