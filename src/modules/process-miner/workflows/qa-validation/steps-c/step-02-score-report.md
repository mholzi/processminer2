---
name: 'step-02-score-report'
description: 'Calculate quality score and generate report'

# File References
nextStepFile: './step-03-resolve-issues.md'
processFolder: '{process_output_folder}/{process_id}'
---

# Step 2: Score and Report

## STEP GOAL:

Calculate weighted quality score and generate validation report.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER skip scoring
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR calculating quality

### Step-Specific Rules:

- 🎯 Focus on objective scoring
- 🚫 FORBIDDEN to resolve issues yet
- 💬 Approach: Score, grade, report

## MANDATORY SEQUENCE

### 1. Calculate Category Scores

"**Quality Score Calculation:**

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Structure | 15% | {score} | {weighted} |
| Completeness | 25% | {score} | {weighted} |
| Cross-References | 25% | {score} | {weighted} |
| Content Quality | 20% | {score} | {weighted} |
| Schema Compliance | 15% | {score} | {weighted} |
| **TOTAL** | | | **{total}%** |"

### 2. Assign Grade

**Grade Scale:**
- A (95-100): Excellent, ready for stakeholders
- A- (90-94): Excellent with minor issues
- B+ (85-89): Good, minor improvements needed
- B (80-84): Good with some gaps
- C (70-79): Acceptable, improvements recommended
- D (60-69): Needs significant work
- F (<60): Not ready, major issues

"**Grade: {grade}** — {grade_description}"

### 3. Determine Stakeholder Readiness

**IF score >= 90 AND errors == 0:**
"✓ **Ready for Stakeholders** — Documentation meets quality standards."

**IF score >= 80 AND errors == 0:**
"⚠️ **Conditionally Ready** — Minor improvements recommended before sharing."

**IF errors > 0:**
"✗ **Not Ready** — {error_count} error(s) must be fixed first."

### 4. Generate Validation Report

```markdown
# QA Validation Report: {process_name}

**Process ID:** {process_id}
**Validation Date:** {date}
**Validator:** QA Agent

---

## Summary

| Metric | Value |
|--------|-------|
| Quality Score | {score}% ({grade}) |
| Errors | {count} |
| Warnings | {count} |
| Status | {pass/pass_with_warnings/fail} |

---

## Validation Results

### ✓ Structure: PASS
{findings_or_passed}

### {status} Completeness: {PASS/WARNING}
{findings}

### {status} Cross-References: {PASS/ERROR}
{findings}

### {status} Content Quality: {PASS/WARNING}
{findings}

### ✓ Schema Compliance: PASS
{findings_or_passed}

---

## Detailed Findings

### Errors (must fix)

| ID | Category | Item | Issue | Resolution |
|----|----------|------|-------|------------|
{error_table}

### Warnings (should fix)

| ID | Category | Issue | Recommendation |
|----|----------|-------|----------------|
{warning_table}

---

## Recommendations

{prioritized_recommendations}

---

## Certification

| Status | Ready for Stakeholders? |
|--------|------------------------|
| {current_status} | {ready_statement} |
```

### 5. Present Report Summary

"**QA Validation Report Generated**

**Quality Score:** {score}% ({grade})
**Errors:** {count} (must fix)
**Warnings:** {count} (should fix)
**Status:** {status}

**Ready for Stakeholders:** {yes/no/conditional}"

### 6. Present MENU OPTIONS

Display: "**What would you like to do?** [F] Fix issues [V] View full report [COMP] Return"

#### Menu Handling Logic:

- IF F: Load, read entire file, then execute {nextStepFile}
- IF V: Display full report
- IF COMP: End workflow (if no errors) or warn about errors

#### EXECUTION RULES:

- ALWAYS halt and wait for user input
- Warn if exiting with unresolved errors

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Score calculated with weights
- Grade assigned
- Readiness determined
- Report generated
- Options presented

### ❌ SYSTEM FAILURE:

- Skipping score calculation
- Not generating report
- Resolving issues in this step
