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

"**[1/6] Structure Validation**"

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

"**[2/6] Completeness Validation**"

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

"**[3/6] Cross-Reference Validation**"

Check all references point to existing items:

```
✓ PP1 → PS1, PS4 (valid)
✓ PP2 → PS3 (valid)
✗ PP3 → PS15 (INVALID - PS15 doesn't exist)
```

### 5. Run Content Quality Validation

"**[4/6] Content Quality**"

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

"**[5/6] Schema Compliance**"

Check:
- Document structure matches schema
- Item formats correct
- Enum values valid

### 7. Run Progress Sync

"**[6/6] Progress Sync**"

Check _progress.yaml matches actual counts.

### 8. Present Findings Summary

"**Validation Complete**

| Category | Status | Issues |
|----------|--------|--------|
| Structure | ✓ Pass | 0 |
| Completeness | ⚠️ Warn | {count} |
| Cross-References | ✗ Error | {count} |
| Content Quality | ⚠️ Warn | {count} |
| Schema Compliance | ✓ Pass | 0 |
| Progress Sync | ⚠️ Warn | {count} |

**Total:** {error_count} errors, {warning_count} warnings"

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

- All 6 check categories run
- Findings compiled
- Summary presented
- Ready for scoring

### ❌ SYSTEM FAILURE:

- Skipping check categories
- Not reporting all findings
- Generating report in this step
