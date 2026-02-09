# Gap Resolution Log: {{process_name}}

**Document Type:** Validation Gap Tracking Log
**Process ID:** {{process_id}}
**Transformation ID:** {{transformation_id}}
**Document Owner:** {{document_owner}}
**Last Updated:** {{date}}
**Version:** {{version}}

---

## Executive Summary

{{executive_summary}}

### Gap Statistics

| Metric | Value |
|--------|-------|
| Total Gaps Raised | {{total_gaps}} |
| Gaps Resolved | {{gaps_resolved}} |
| Gaps Open | {{gaps_open}} |
| Gaps Deferred | {{gaps_deferred}} |
| Resolution Rate | {{resolution_rate}}% |
| Validation Iterations | {{validation_iterations}} |

### Gap Distribution by Source

| Source Agent | Raised | Resolved | Open | Deferred |
|--------------|--------|----------|------|----------|
| Control Analyst | {{control_raised}} | {{control_resolved}} | {{control_open}} | {{control_deferred}} |
| Client Journey Analyst | {{cx_raised}} | {{cx_resolved}} | {{cx_open}} | {{cx_deferred}} |
| Innovation Analyst | {{innovation_raised}} | {{innovation_resolved}} | {{innovation_open}} | {{innovation_deferred}} |
| Process Documentation Analyst | {{pda_raised}} | {{pda_resolved}} | {{pda_open}} | {{pda_deferred}} |

---

## How to Read This Document

> This document tracks all **validation gaps (VG#)** raised during TO-BE validation and their resolution status. It serves as the audit trail for transformation quality assurance.
>
> **Parent Document:** [Target State Documentation](./target-state-documentation.md)
>
> **Gap Severity Levels:**
> - **Critical** - Blocks transformation approval, must be resolved
> - **High** - Significant issue, should be resolved before approval
> - **Medium** - Notable concern, resolution recommended
> - **Low** - Minor issue, can be deferred with justification
>
> **Gap Status Values:**
> - **Open** - Gap identified, resolution pending
> - **In Progress** - Resolution being implemented
> - **Resolved** - Gap addressed, verified by source agent
> - **Deferred** - Gap accepted, resolution postponed with justification
> - **Rejected** - Gap disputed, not accepted as valid

---

## Gap Summary by Status

### Open Gaps (Requiring Resolution)

| VG# | Source | Gap Description | Severity | Days Open | Assigned To |
|-----|--------|-----------------|----------|-----------|-------------|
{{open_gaps_table}}

### In Progress Gaps

| VG# | Source | Gap Description | Severity | Resolution Approach | ETA |
|-----|--------|-----------------|----------|---------------------|-----|
{{in_progress_gaps_table}}

### Resolved Gaps

| VG# | Source | Gap Description | Resolution | Verified By | Date |
|-----|--------|-----------------|------------|-------------|------|
{{resolved_gaps_table}}

### Deferred Gaps

| VG# | Source | Gap Description | Reason Deferred | Risk Owner | Review Date |
|-----|--------|-----------------|-----------------|------------|-------------|
{{deferred_gaps_table}}

---

## Detailed Gap Records

{{#each gaps}}

### VG#{{this.id}}: {{this.title}}

#### Gap Overview

| Attribute | Value |
|-----------|-------|
| **Gap ID** | VG#{{this.id}} |
| **Source Agent** | {{this.source_agent}} |
| **Severity** | {{this.severity}} |
| **Status** | {{this.status}} |
| **Raised Date** | {{this.raised_date}} |
| **Resolved Date** | {{this.resolved_date}} |

#### Gap Description

{{this.description}}

#### TO-BE Reference(s) Affected

| Reference | Type | Section |
|-----------|------|---------|
{{this.affected_references}}

#### Validation Check Failed

{{this.validation_check}}

#### Expected State

{{this.expected_state}}

#### Actual State Found

{{this.actual_state}}

#### Impact if Not Resolved

{{this.impact_if_unresolved}}

#### Resolution History

| Date | Action | By | Notes |
|------|--------|-----|-------|
{{this.resolution_history}}

#### Final Resolution

**Resolution Type:** {{this.resolution_type}}

**Resolution Description:**
{{this.resolution_description}}

**Changes Made:**
{{this.changes_made}}

**Verification:**
{{this.verification}}

**Verified By:** {{this.verified_by}} | **Date:** {{this.verification_date}}

---

{{/each}}

## Gaps by Validation Area

### Control Validation Gaps

{{#each control_gaps}}

#### VG#{{this.id}}: {{this.title}}

| Attribute | Value |
|-----------|-------|
| **Severity** | {{this.severity}} |
| **Status** | {{this.status}} |
| **Control Reference** | {{this.control_reference}} |
| **Regulation Affected** | {{this.regulation}} |

**Gap:** {{this.description}}

**Resolution:** {{this.resolution}}

---

{{/each}}

### Client Experience Validation Gaps

{{#each cx_gaps}}

#### VG#{{this.id}}: {{this.title}}

| Attribute | Value |
|-----------|-------|
| **Severity** | {{this.severity}} |
| **Status** | {{this.status}} |
| **Touchpoint Reference** | {{this.touchpoint_reference}} |
| **CES Impact** | {{this.ces_impact}} |

**Gap:** {{this.description}}

**Resolution:** {{this.resolution}}

---

{{/each}}

### Innovation Validation Gaps

{{#each innovation_gaps}}

#### VG#{{this.id}}: {{this.title}}

| Attribute | Value |
|-----------|-------|
| **Severity** | {{this.severity}} |
| **Status** | {{this.status}} |
| **Innovation Reference** | {{this.innovation_reference}} |
| **Priority Level** | {{this.priority_level}} |

**Gap:** {{this.description}}

**Resolution:** {{this.resolution}}

---

{{/each}}

### Process Validation Gaps

{{#each process_gaps}}

#### VG#{{this.id}}: {{this.title}}

| Attribute | Value |
|-----------|-------|
| **Severity** | {{this.severity}} |
| **Status** | {{this.status}} |
| **Process Reference** | {{this.process_reference}} |
| **Traceability Issue** | {{this.traceability_issue}} |

**Gap:** {{this.description}}

**Resolution:** {{this.resolution}}

---

{{/each}}

## Validation Iteration History

> **About this section:** Track of validation cycles and gap trends.

### Iteration Summary

| Iteration | Date | Gaps Raised | Gaps Resolved | Net Open | Status |
|-----------|------|-------------|---------------|----------|--------|
{{iteration_summary_table}}

### Iteration Details

{{#each iterations}}

#### Iteration {{this.number}} - {{this.date}}

**Validation Scope:** {{this.scope}}

**Agents Participating:**
{{this.participating_agents}}

**Gaps Raised This Iteration:**

| VG# | Source | Severity | Description |
|-----|--------|----------|-------------|
{{this.gaps_raised_table}}

**Gaps Resolved This Iteration:**

| VG# | Resolution |
|-----|------------|
{{this.gaps_resolved_table}}

**Iteration Outcome:** {{this.outcome}}

**Notes:** {{this.notes}}

---

{{/each}}

## Gap Trends and Analysis

### Gap Trend Over Time

```mermaid
{{gap_trend_chart}}
```

### Common Gap Patterns

{{common_gap_patterns}}

### Root Cause Analysis

| Root Cause | Gap Count | Prevention Recommendation |
|------------|-----------|---------------------------|
{{root_cause_table}}

### Lessons Learned

{{lessons_learned}}

---

## Deferred Gap Risk Register

> **About this section:** Risk assessment for gaps accepted but not resolved.

### Deferred Gap Risk Summary

| VG# | Gap | Risk Level | Risk Owner | Mitigation | Review Date |
|-----|-----|------------|------------|------------|-------------|
{{deferred_risk_summary}}

### Deferred Gap Details

{{#each deferred_gaps}}

#### VG#{{this.id}}: {{this.title}} (DEFERRED)

**Gap Description:**
{{this.description}}

**Reason for Deferral:**
{{this.deferral_reason}}

**Risk Assessment:**

| Dimension | Assessment |
|-----------|------------|
| Likelihood | {{this.risk_likelihood}} |
| Impact | {{this.risk_impact}} |
| Overall Risk | {{this.overall_risk}} |

**Risk Owner:** {{this.risk_owner}}

**Mitigation Strategy:**
{{this.mitigation_strategy}}

**Monitoring Approach:**
{{this.monitoring_approach}}

**Trigger for Escalation:**
{{this.escalation_trigger}}

**Scheduled Review Date:** {{this.review_date}}

---

{{/each}}

## Gap Resolution Metrics

### Resolution Performance

| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| Average Resolution Time (days) | {{avg_resolution_time}} | {{target_resolution_time}} | {{resolution_time_status}} |
| First-Pass Resolution Rate | {{first_pass_rate}}% | {{target_first_pass}}% | {{first_pass_status}} |
| Critical Gap Resolution Time | {{critical_resolution_time}} | {{target_critical_time}} | {{critical_time_status}} |
| Reopened Gap Rate | {{reopened_rate}}% | {{target_reopened}}% | {{reopened_status}} |

### Resolution by Severity

| Severity | Total | Resolved | Open | Avg Days to Resolve |
|----------|-------|----------|------|---------------------|
| Critical | {{critical_total}} | {{critical_resolved}} | {{critical_open}} | {{critical_avg_days}} |
| High | {{high_total}} | {{high_resolved}} | {{high_open}} | {{high_avg_days}} |
| Medium | {{medium_total}} | {{medium_resolved}} | {{medium_open}} | {{medium_avg_days}} |
| Low | {{low_total}} | {{low_resolved}} | {{low_open}} | {{low_avg_days}} |

---

## Document Metadata

**Validation Lead:** {{validation_lead}}
**Total Validation Sessions:** {{total_sessions}}
**Final Validation Date:** {{final_validation_date}}

### Linked Documents

| Document | Purpose | Link |
|----------|---------|------|
| Target State Documentation | Parent document | [target-state-documentation.md](./target-state-documentation.md) |
| Transformation Decisions Detail | Decision rationale | [transformation-decisions-detail.md](./transformation-decisions-detail.md) |

---

## Change Log

| Date | Contributor | Role | Changes |
|------|-------------|------|---------|
| {{date}} | {{contributor_name}} | {{contributor_role}} | Initial gap log |

---

## Glossary

| Term | Definition |
|------|------------|
| VG# | Validation Gap reference |
| Critical | Blocks approval, must resolve |
| High | Significant issue, should resolve |
| Medium | Notable concern, resolution recommended |
| Low | Minor issue, can defer |
| Deferred | Accepted gap, resolution postponed |

{{additional_glossary}}

---

_Generated by ProcessMiner Transformation Agent_
_Document ID: {{document_id}}_
