---
name: 'step-01-run-checks'
description: 'Run comprehensive validation checks'

# File References
nextStepFile: './step-02-score-report.md'
processFolder: '{process_output_folder}/{process_id}'
schemaDir: '{project-root}/src/modules/process-miner/templates/documents'
---

# Step 1: Run Validation Checks

## STEP GOAL:

Execute all validation check categories and compile findings.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER skip any check category
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR validating quality

### Step-Specific Rules:

- 🎯 Focus on thorough validation
- 🚫 FORBIDDEN to generate report yet
- 💬 Approach: Run checks, collect findings

## MANDATORY SEQUENCE

### 1. Load Validation Context

"**Loading validation context...**"

```
✓ Progress file loaded
✓ Document schema loaded
✓ Documents loaded:
  - as-is-documentation.md
  - cx-journey.md (if exists)
  - transformation.md (if exists)
  - innovation.md (if exists)
  - architecture.md (if exists)
```

### 2. Run Structure Validation

"**[1/7] Structure Validation**"

Check:
- All required sections present
- Heading hierarchy correct
- Document structure matches schema

```
✓ All required sections present
✓ Heading hierarchy correct
⚠️ Missing optional section: {section}
```

### 3. Run Completeness Validation

"**[2/7] Completeness Validation**"

Check:
- Minimum counts met for each section
- Word counts within range
- Required fields populated

```
✓ Executive Summary: {word_count} words (min: {min}) ✓
✓ Process Steps: {count} items (min: {min}) ✓
⚠️ Pain Points: {count} items (expected: {min}-{max})
```

### 4. Run Cross-Reference Validation

"**[3/7] Cross-Reference Validation**"

Check all references point to existing items:

```
✓ PP1 → PS1, PS4 (valid)
✓ PP2 → PS3 (valid)
✗ PP3 → PS15 (INVALID - PS15 doesn't exist)
```

### 5. Run Content Quality Validation

"**[4/7] Content Quality**"

Check:
- No duplicate IDs
- All required fields populated
- Optional fields offered

```
✓ No duplicate IDs
✓ All required fields populated
⚠️ {count} items missing optional fields
```

### 6. Run Schema Compliance

"**[5/7] Schema Compliance**"

Check:
- Document structure matches schema
- Item formats correct
- Enum values valid

### 7. Run Progress Sync

"**[6/7] Progress Sync**"

Check _progress.yaml matches actual counts.

### 8. Run Inter-Document Reference Check

"**[7/7] Inter-Document References**"

Using the `inter_document` cross-reference block from the document's schema, check that all cross-document references resolve to existing items in their target documents.

For each `inter_document` rule in the schema:
1. Extract all referenced IDs from the source field in this document
2. Load the target document specified in the rule
3. Verify each referenced ID exists in the target document

```
✓ PP1 → AS-IS PS1, PS4 (valid)
✓ JT3 → AS-IS PS3 (valid)
✗ JT7 → AS-IS PS15 (INVALID - PS15 doesn't exist in AS-IS)
  → Remediation: Verify PS# in AS-IS Section 2 or update reference
```

**Severity:** Strict blocking if target document confidence is MEDIUM or HIGH. Soft warning if target document confidence is LOW (referenced item might not exist yet).

**Note:** If the document's schema has no `inter_document` block, skip this check and report "N/A — no inter-document references declared".

### 8b. Sync Findings to Gap Resolution Log

"**Syncing findings to gap resolution log...**"

#### Bootstrap Check

IF `{processFolder}/gap-resolution-log.md` does not exist:
1. Create from template at `{schemaDir}/gap-resolution-log.md`
2. Fill process metadata from `_progress.yaml`

#### Fingerprint and Write

For each finding across all 7 check categories, compute a deterministic fingerprint:

```
qa-validation:{document}:{category}:{check_type}:{item}
```

Where `{category}` is one of: `structure`, `completeness`, `cross_references`, `content_quality`, `schema_compliance`, `progress_sync`, `inter_document_refs`

Examples:
- `qa-validation:as-is-documentation:cross_references:invalid_ref:PP3->PS15`
- `qa-validation:as-is-documentation:completeness:min_count:exceptions_below_min`
- `qa-validation:as-is-documentation:structure:missing_heading:Section_3`
- `qa-validation:as-is-documentation:progress_sync:count_mismatch:pain_points_10_vs_8`

#### Deduplication

For each finding:
1. Search gap-resolution-log.md for existing VG# with matching fingerprint (in HTML comment `<!-- fingerprint: ... -->`)
2. **IF match found AND status is open/in_progress:** Update "last seen" date only — do NOT create new VG#
3. **IF no match found:** Create new VG# entry:
   - **Source Agent:** "QA Agent (Document)"
   - **Source Workflow:** "qa-validation"
   - **Severity mapping:** Error (must fix) → "High", Warning (should fix) → "Medium", Info → "Low"
   - **Status:** "open"
   - **Fingerprint:** stored as HTML comment after VG# heading
   - Add to Section 1.1 (open gaps), Section 2 (detailed records), Section 3.5 (QA Validation Gaps)

#### Auto-Resolution

After processing all current findings:
1. Load all open/in_progress VG# entries where source workflow = "qa-validation" AND document matches
2. For each, check if its fingerprint appears in current findings
3. **IF fingerprint NOT in current findings:**
   - Set status to "resolved", resolution_type to "QA Auto-Resolution"
   - Add resolution history: `{date} | Auto-resolved | QA Agent | Issue no longer detected in qa-validation run`
   - Move from Section 1.1 (open) to Section 1.3 (resolved)

```
✓ Gap log synced: {new_count} new VG#, {resolved_count} auto-resolved, {total_open} open QA gaps
```

**Store the VG# list in memory** for use in step-02 (score report) and step-03 (resolve issues).

### 9. Present Findings Summary

"**Validation Complete**

| Category | Status | Issues |
|----------|--------|--------|
| Structure | ✓ Pass | 0 |
| Completeness | ⚠️ Warn | {count} |
| Cross-References | ✗ Error | {count} |
| Content Quality | ⚠️ Warn | {count} |
| Schema Compliance | ✓ Pass | 0 |
| Progress Sync | ⚠️ Warn | {count} |
| Inter-Document Refs | ✓ Pass | {count} |

**Total:** {error_count} errors, {warning_count} warnings

**Gap Resolution Log:** {new_count} new VG# entries created, {resolved_count} auto-resolved, {total_open} total open"

### 9. Present MENU OPTIONS

Display: "**Ready to generate report?** [C] Continue [D] Details on category"

#### Menu Handling Logic:

- IF C: Store findings, load, read entire file, then execute {nextStepFile}
- IF D: Show detailed findings for requested category

#### EXECUTION RULES:

- ALWAYS halt and wait for user input
- ONLY proceed when user selects 'C'

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- All 7 check categories run
- Findings compiled
- Summary presented
- Ready for scoring

### ❌ SYSTEM FAILURE:

- Skipping check categories
- Not reporting all findings
- Generating report in this step
