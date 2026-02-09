---
template: qa-report
schema_version: "1.0"
generated: "{{timestamp}}"
process_id: "{{process_id}}"
process_name: "{{process_name}}"
reviewer: "{{reviewer_name}}"
assessment: "{{assessment}}"
---

# QA Review Report

## Process Information

| Field | Value |
|-------|-------|
| **Process ID** | {{process_id}} |
| **Process Name** | {{process_name}} |
| **Review Date** | {{review_date}} |
| **Reviewer** | {{reviewer_name}} ({{reviewer_role}}) |
| **Assessment** | {{assessment}} |

---

## Executive Summary

**Total Findings:** {{total_findings}}

| Severity | Found | Fixed | Remaining |
|----------|-------|-------|-----------|
| 🔴 CRITICAL | {{critical_found}} | {{critical_fixed}} | {{critical_remaining}} |
| 🟠 HIGH | {{high_found}} | {{high_fixed}} | {{high_remaining}} |
| 🟡 MEDIUM | {{medium_found}} | {{medium_fixed}} | {{medium_remaining}} |
| 🟢 LOW | {{low_found}} | {{low_fixed}} | {{low_remaining}} |

### Assessment Summary

{{assessment_explanation}}

---

## Findings Detail

### 🔴 CRITICAL Findings

{{#each critical_findings}}
#### Finding #{{this.number}}: {{this.title}}

- **Status:** {{this.status}}
- **Category:** {{this.category}}
- **Location:** `{{this.location}}`

**Issue:**
{{this.description}}

**Impact:**
{{this.impact}}

**Evidence:**
```
{{this.evidence}}
```

**Resolution:**
{{this.resolution}}

---
{{/each}}

{{#if no_critical}}
*No critical findings identified.*
{{/if}}

### 🟠 HIGH Findings

{{#each high_findings}}
#### Finding #{{this.number}}: {{this.title}}

- **Status:** {{this.status}}
- **Category:** {{this.category}}
- **Location:** `{{this.location}}`

**Issue:**
{{this.description}}

**Impact:**
{{this.impact}}

**Resolution:**
{{this.resolution}}

---
{{/each}}

{{#if no_high}}
*No high-severity findings identified.*
{{/if}}

### 🟡 MEDIUM Findings

| # | Issue | Location | Status | Resolution |
|---|-------|----------|--------|------------|
{{#each medium_findings}}
| {{this.number}} | {{this.title}} | `{{this.location}}` | {{this.status}} | {{this.resolution}} |
{{/each}}

{{#if no_medium}}
*No medium-severity findings identified.*
{{/if}}

### 🟢 LOW Findings

| # | Suggestion | Location |
|---|------------|----------|
{{#each low_findings}}
| {{this.number}} | {{this.title}} | `{{this.location}}` |
{{/each}}

{{#if no_low}}
*No low-severity findings identified.*
{{/if}}

---

## Validation Checks Performed

| Phase | Description | Checks Run | Passed | Failed |
|-------|-------------|------------|--------|--------|
| 1 | ID Integrity | {{phase1_checks}} | {{phase1_passed}} | {{phase1_failed}} |
| 2 | Cross-Document Integrity | {{phase2_checks}} | {{phase2_passed}} | {{phase2_failed}} |
| 3 | Documentation Completeness | {{phase3_checks}} | {{phase3_passed}} | {{phase3_failed}} |
| 4 | Compliance Coverage | {{phase4_checks}} | {{phase4_passed}} | {{phase4_failed}} |
| 5 | Data Quality | {{phase5_checks}} | {{phase5_passed}} | {{phase5_failed}} |
| **TOTAL** | | **{{total_checks}}** | **{{total_passed}}** | **{{total_failed}}** |

---

## Decisions Log

| Finding | Severity | Decision | Rationale | Owner |
|---------|----------|----------|-----------|-------|
{{#each decisions}}
| #{{this.finding_number}} | {{this.severity}} | {{this.decision}} | {{this.rationale}} | {{this.owner}} |
{{/each}}

---

## Next Steps

{{#if blocked}}
### ⛔ BLOCKED - Action Required

This process **cannot be approved** until the following CRITICAL issues are resolved:

{{#each blocking_items}}
1. **{{this.title}}** - {{this.action_required}}
{{/each}}

**Recommended Timeline:** Address within {{recommended_timeline}}

**After Fixes:**
1. Re-run QA Check workflow
2. Verify all CRITICAL findings resolved
3. Obtain approval from process owner

{{/if}}

{{#if conditional}}
### ⚠️ CONDITIONAL APPROVAL

This process is **approved with conditions**:

**Approved For:**
{{#each approved_uses}}
- {{this}}
{{/each}}

**Conditions:**
{{#each conditions}}
1. {{this.requirement}} - Due: {{this.due_date}}
{{/each}}

**Follow-Up Required:**
- Schedule review after conditions are met
- Document any exceptions during use

{{/if}}

{{#if acceptable}}
### ✅ APPROVED

This process documentation **meets quality standards** and is approved for use.

**Recommendations for Future Updates:**
{{#each recommendations}}
- {{this}}
{{/each}}

**Next Review:** {{next_review_date}}

{{/if}}

---

## Audit Trail

| Event | Timestamp | Details |
|-------|-----------|---------|
| Review Initiated | {{start_timestamp}} | Reviewer: {{reviewer_name}} |
| Documents Loaded | {{docs_loaded_timestamp}} | {{docs_count}} documents |
| Validation Started | {{validation_start_timestamp}} | {{total_checks}} checks planned |
| Validation Completed | {{validation_end_timestamp}} | {{total_findings}} findings |
| Fixes Applied | {{fixes_timestamp}} | {{fixes_count}} auto-fixes |
| Report Generated | {{report_timestamp}} | Assessment: {{assessment}} |

---

## Appendix: Documents Reviewed

| Document | Path | Status |
|----------|------|--------|
| Structured Data | `{{structured_data_path}}` | {{structured_data_status}} |
| Main Document | `{{main_doc_path}}` | {{main_doc_status}} |
| Exceptions Detail | `{{exceptions_path}}` | {{exceptions_status}} |
| Pain Points Detail | `{{pain_points_path}}` | {{pain_points_status}} |
| Control Points Detail | `{{control_points_path}}` | {{control_points_status}} |

---

*Report generated by QA Check Workflow v1.0*
*Process Miner Module*
*{{timestamp}}*
