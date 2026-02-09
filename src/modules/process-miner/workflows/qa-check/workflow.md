---
name: qa-check
description: Quick validation check on documentation
web_bundle: true

# File References
processFolder: '{process_output_folder}/{process_id}'
schemaDir: '{project-root}/src/modules/process-miner/templates/documents'
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
```

Returns:
```yaml
result:
  status: pass | fail
  errors: []
  warnings: []
  summary: "All checks passed" | "{n} issues found"
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
