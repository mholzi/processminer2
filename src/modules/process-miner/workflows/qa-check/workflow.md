---
name: qa-check
description: Quick validation check on documentation
web_bundle: true

# File References
processFolder: '{process_output_folder}/{process_id}'
schemaDir: '{project-root}/src/modules/process-miner/templates/documents'
gapLogTemplate: '{project-root}/src/modules/process-miner/templates/documents/gap-resolution-log.md'
---

# QA Quick Check Workflow

**Goal:** Lightweight validation utility for fast quality checks during documentation, callable by any agent.

**Your Role:** This is a utility workflow for rapid validation without full QA assessment.

---

## WORKFLOW ARCHITECTURE

This workflow is a **utility workflow** — can be called programmatically or interactively.

### Core Principles

- **Fast Execution**: Quick checks, immediate results
- **Targeted Validation**: Run specific check types
- **Non-Blocking**: Pass/fail with option to continue
- **Agent-Callable**: Used by other workflows before completion
- 📏 **SCHEMA IS LAW** — validate against per-document `.schema.yaml` rules. Any auto-fixes MUST meet these constraints.

### Check Types

| Check | What It Validates |
|-------|-------------------|
| references | Cross-references point to existing items |
| completeness | Minimum counts met |
| counts | Item counts match expectations |
| structure | Document structure intact |
| all | Run all checks |

---

## PROGRAMMATIC USAGE

Called by other workflows:

```yaml
qa-check:
  type: references
  document: as_is
  persist: true  # default: true. Set false to skip gap-log write.
```

Returns:
```yaml
result:
  status: pass | fail
  errors: []
  warnings: []
  summary: "All checks passed" | "{n} issues found"
  gap_log:
    new_vg_count: 0
    auto_resolved_count: 0
    total_open_qa_gaps: 3
```

---

## INTERACTIVE USAGE

If called interactively:

"**Quick Check - What would you like to validate?**

- **[R]** References — Validate cross-references
- **[C]** Completeness — Check minimum counts
- **[S]** Structure — Validate document structure
- **[A]** All — Run all checks"

---

## CHECK IMPLEMENTATIONS

### Reference Check

Validates all cross-references point to existing items.

```
Reference Check: {status}

{findings_if_any}

Valid steps are: PS1-PS{max}
```

### Completeness Check

Validates sections meet minimum requirements.

```
Completeness Check: {status}

- {section}: {count} items (minimum: {min}) {status}
```

### Structure Check

Validates document structure is intact.

```
Structure Check: {status}

- Required headings: {present}/{total}
- Heading order: {correct/incorrect}
```

---

## OUTPUT

### Pass
```
✓ Quick Check Passed

All checks passed:
- References: Valid ✓
- Completeness: Met ✓
- Structure: Intact ✓
```

### Fail
```
⚠️ Quick Check: Issues Found

{category}: {count} {issue_type}
- {finding_1}
- {finding_2}

[D] Details
[F] Fix issues
[C] Continue anyway
```

---

## SEVERITY LEVELS

| Level | Meaning | Action |
|-------|---------|--------|
| Error | Must fix | Blocks completion |
| Warning | Should fix | Can continue |
| Info | Consider | Optional |

---

## INTEGRATION WITH OTHER WORKFLOWS

Before marking section complete (e.g., in review-draft):

```yaml
- run: qa-check
  type: references
  section: pain_points
- if: errors
  then: warn_user
- if: pass
  then: mark_complete
```

---

## GAP-LOG INTEGRATION

After all checks complete and results are compiled, persist findings to the gap resolution log. This enables tracking across sessions, deduplication on re-runs, and auto-resolution when issues are fixed.

### Skip Conditions

- **SKIP gap-log write IF:** Zero errors AND zero warnings (clean run — no file I/O overhead)
- **SKIP gap-log write IF:** Workflow was called programmatically with `persist: false`
- **PROCEED with gap-log write IF:** At least one error OR warning found

### Bootstrap Check

IF `{processFolder}/gap-resolution-log.md` does not exist:
1. Create it from the template at `{gapLogTemplate}`
2. Fill in process metadata from `_progress.yaml` (process_id, process_name)
3. Initialize with empty section tables

### Fingerprint Generation

For each finding (error or warning), compute a deterministic fingerprint:

```
qa-check:{document}:{check_type}:{specific_item}
```

Examples:
- `qa-check:as-is-documentation:references:PP3->PS15`
- `qa-check:as-is-documentation:completeness:pain_points_below_min`
- `qa-check:as-is-documentation:structure:missing_heading_Section_3`
- `qa-check:as-is-documentation:counts:exceptions_count_0`

### Deduplication

For each finding:
1. Search existing gap-resolution-log.md for VG# entries with matching fingerprint (in HTML comment `<!-- fingerprint: ... -->`)
2. **IF match found AND status is open/in_progress:**
   - Update "last seen" date in resolution history
   - Do NOT create a new VG#
3. **IF no match found:**
   - Determine next VG# sequence number (scan all existing `VG-{ABBREV}-NNN`, take max + 1)
   - Create new VG# entry with:
     - **Source Agent:** "QA Agent (Document)"
     - **Source Workflow:** "qa-check"
     - **Severity:** Error → "High", Warning → "Medium"
     - **Status:** "open"
     - **Fingerprint:** stored as HTML comment after VG# heading
   - Add to Section 1.1 summary table (open gaps)
   - Add to Section 2 detailed records
   - Add to Section 3.5 QA Validation Gaps

### Auto-Resolution

After processing all current findings:
1. Load all open/in_progress VG# entries where source workflow = "qa-check" AND document matches the checked document
2. For each such VG#, check if its fingerprint appears in the current findings set
3. **IF fingerprint NOT in current findings:**
   - Set status to "resolved"
   - Set resolution_type to "QA Auto-Resolution"
   - Add resolution history entry: `{date} | Auto-resolved | QA Agent | Issue no longer detected in qa-check run`
   - Move from Section 1.1 (open) to Section 1.3 (resolved)

### Progress Update

After gap-log sync, call update-progress:

```yaml
update-progress:
  type: gap_log_status
  gap_log:
    exists: true
    total_vg_count: {count}
    open_count: {count}
    resolved_count: {count}
    deferred_count: {count}
    qa_document_open: {count}
    qa_suite_open: {count}
    specialist_open: {count}
    last_sync: {timestamp}
```
