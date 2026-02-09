# Control Points & Compliance: {{process_name}}

**Process ID:** {{process_id}}
**Document Type:** Control Point Detail Analysis
**Status:** {{status}}
**Last Updated:** {{date}}
**Version:** {{version}}
**Synced with AS-IS Version:** {{parent_version}}
**Related Document:** [AS-IS Process Documentation](./as-is-process-documentation.md)
**Related Document:** [Compliance Control Assessment](./compliance-control-assessment.md)
**Reviewed By:** {{reviewer_name}} | **Review Date:** {{review_date}}
**Approved By:** {{approver_name}} | **Approval Date:** {{approval_date}}

---

## Executive Summary

{{controls_executive_summary}}

### Key Metrics

| Metric | Value |
|--------|-------|
| Total Control Points | {{total_controls}} |
| Regulatory Controls | {{regulatory_count}} |
| Internal Policy Controls | {{internal_count}} |
| Automated Controls | {{automated_count}} |
| Manual Controls | {{manual_count}} |
| Highly Effective Controls | {{high_effectiveness_count}} |
| Controls Needing Improvement | {{needs_improvement_count}} |

---

## Control Point Summary Table

> **Quick Reference:** All identified control points with compliance mapping at a glance. Click any CP# for full details below.

| CP# | Control Name | Type | Regulation/Policy | Process Step | Effectiveness | Risk Level |
|-----|--------------|------|-------------------|--------------|---------------|------------|
{{control_summary_table}}

---

## Control Statistics

| Metric | Value |
|--------|-------|
| Total Control Points | {{total_controls}} |
| Regulatory Controls | {{regulatory_count}} |
| Internal Policy Controls | {{internal_count}} |
| Automated Controls | {{automated_count}} |
| Manual Controls | {{manual_count}} |
| High-Effectiveness Controls | {{high_effectiveness_count}} |
| Controls Needing Improvement | {{needs_improvement_count}} |
| Segregation of Duties Controls | {{sod_count}} |

---

## Regulatory Coverage Matrix

> *Mapping of regulations to controls - ensures complete compliance coverage*

| Regulation | Requirement | Control(s) | Coverage Status |
|------------|-------------|------------|-----------------|
{{regulatory_coverage_matrix}}

---

## Control Type Breakdown

| Type | Count | Automated | Manual | Effectiveness Avg |
|------|-------|-----------|--------|-------------------|
| Preventive | {{preventive_count}} | {{preventive_auto}} | {{preventive_manual}} | {{preventive_effectiveness}} |
| Detective | {{detective_count}} | {{detective_auto}} | {{detective_manual}} | {{detective_effectiveness}} |
| Corrective | {{corrective_count}} | {{corrective_auto}} | {{corrective_manual}} | {{corrective_effectiveness}} |

---

## Detailed Control Point Analysis

{{#each controls}}

### {{this.id}}: {{this.name}}

#### Overview

| Attribute | Value |
|-----------|-------|
| **Control ID** | {{this.id}} |
| **Control Name** | {{this.name}} |
| **Control Type** | {{this.type}} |
| **Category** | {{this.category}} |
| **Process Step(s)** | {{this.process_steps}} |
| **Control Owner** | {{this.owner}} |
| **Execution** | {{this.execution_type}} |
| **Frequency** | {{this.frequency}} |
| **Effectiveness Rating** | {{this.effectiveness}} |
| **Last Audit Date** | {{this.last_audit_date}} |

#### Control Description

> *What does this control do? What risk does it mitigate?*

{{this.description}}

#### Regulatory/Policy Requirement

> *What regulation or policy mandates this control?*

**Regulation/Policy:** {{this.regulation}}

**Specific Requirement:** {{this.requirement_text}}

**Penalty for Non-Compliance:** {{this.non_compliance_penalty}}

#### Control Objective

> *What is this control designed to achieve?*

{{this.objective}}

#### Risk Addressed

> *What risk does this control mitigate?*

**Risk Category:** {{this.risk_category}}
**Risk Description:** {{this.risk_description}}
**Inherent Risk Level:** {{this.inherent_risk}}
**Residual Risk (with control):** {{this.residual_risk}}

#### Control Activity

> *How is this control performed? Step-by-step.*

{{this.control_activity}}

#### Timing and Frequency

> *When is this control executed?*

| Attribute | Value |
|-----------|-------|
| **Frequency** | {{this.frequency}} |
| **Timing** | {{this.timing}} |
| **Duration** | {{this.duration}} |
| **Trigger** | {{this.trigger}} |

#### Execution Details

> *Who performs this control and how?*

**Performer:** {{this.performer}}
**Method:** {{this.method}}
**System(s) Used:** {{this.systems_used}}
**Automation Level:** {{this.automation_level}}

#### Evidence & Audit Trail

> *What evidence is captured? How is it retained?*

**Evidence Captured:**
{{this.evidence_captured}}

**Retention Period:** {{this.retention_period}}

**Storage Location:** {{this.storage_location}}

**Audit Trail Quality:** {{this.audit_trail_quality}}

#### Effectiveness Assessment

> *How effective is this control in practice?*

| Criteria | Rating | Notes |
|----------|--------|-------|
| Consistently Performed | {{this.consistency_rating}} | {{this.consistency_notes}} |
| Exceptions Caught | {{this.detection_rating}} | {{this.detection_notes}} |
| Evidence Quality | {{this.evidence_rating}} | {{this.evidence_notes}} |
| Owner Accountability | {{this.accountability_rating}} | {{this.accountability_notes}} |
| Timely Execution | {{this.timeliness_rating}} | {{this.timeliness_notes}} |
| **Overall Effectiveness** | **{{this.overall_effectiveness}}** | |

#### Control Gaps & Weaknesses

> *What issues exist with this control?*

{{this.gaps_weaknesses}}

#### Segregation of Duties

> *Does this control enforce proper segregation?*

**SoD Applicable:** {{this.sod_applicable}}
**SoD Enforced:** {{this.sod_enforced}}
**Conflicting Roles:** {{this.conflicting_roles}}

#### Dependencies

> *What does this control depend on?*

**Upstream Dependencies:**
{{this.upstream_dependencies}}

**Downstream Controls:**
{{this.downstream_controls}}

**System Dependencies:**
{{this.system_dependencies}}

#### Exception Handling

> *What happens when this control fails or exceptions occur?*

{{this.exception_handling}}

#### Related Controls

> *Other controls that work together with this one*

{{this.related_controls}}

#### Related Pain Points

> *Pain points (PP#) that relate to or are affected by this control*

**Related Pain Points:** {{this.related_pain_points}}

#### Improvement Recommendations

> *How could this control be strengthened or optimized?*

{{this.improvement_recommendations}}

#### Transformation Considerations

> *What must the TO-BE design preserve or enhance?*

**Non-Negotiable Elements:**
{{this.non_negotiables}}

**Optimization Opportunities:**
{{this.optimization_opportunities}}

**Automation Potential:**
{{this.automation_potential}}

---

{{/each}}

## Control Framework Analysis

### Controls by Risk Level

| Risk Level | Control Count | Gap Count | Coverage |
|------------|---------------|-----------|----------|
| Critical | {{critical_risk_controls}} | {{critical_gaps}} | {{critical_coverage}} |
| High | {{high_risk_controls}} | {{high_gaps}} | {{high_coverage}} |
| Medium | {{medium_risk_controls}} | {{medium_gaps}} | {{medium_coverage}} |
| Low | {{low_risk_controls}} | {{low_gaps}} | {{low_coverage}} |

### Control Gaps Identified

> *Areas where controls are missing or insufficient*

{{control_gaps_analysis}}

### Orphan Controls

> *Controls without clear regulatory requirement (potential waste)*

{{orphan_controls}}

### Uncontrolled Requirements

> *Regulatory requirements without adequate controls (compliance risk)*

{{uncontrolled_requirements}}

---

## Segregation of Duties Matrix

> *Critical for banking compliance - who can do what*

| Function | Maker | Checker | Approver | System Enforced |
|----------|-------|---------|----------|-----------------|
{{sod_matrix}}

---

## Audit Readiness Assessment

### Audit Trail Completeness

| Process Area | Trail Complete | Trail Partial | Trail Missing |
|--------------|----------------|---------------|---------------|
{{audit_trail_assessment}}

### Last Audit Findings (if available)

{{last_audit_findings}}

### Remediation Status

{{remediation_status}}

---

## Recommendations

### Critical (Compliance Risk)

{{critical_recommendations}}

### High Priority (Control Improvement)

{{high_priority_recommendations}}

### Medium Priority (Optimization)

{{medium_priority_recommendations}}

---

## Input for Downstream Agents

### For Control Analyst Agent

> *Detailed input for control effectiveness analysis*

{{control_analyst_input}}

### For Transformation Agent

> *Controls that must be preserved/enhanced in TO-BE*

{{transformation_agent_input}}

### For IT Architect

> *Control automation opportunities and system requirements*

{{it_architect_input}}

---

## Regulatory Quick Reference

### Applicable Regulations

| Regulation | Scope | Key Requirements | Controls Mapped |
|------------|-------|------------------|-----------------|
{{applicable_regulations}}

### Upcoming Regulatory Changes

> *Regulations that may impact this process*

{{upcoming_regulatory_changes}}

---

## Change Log

| Version | Date | Contributor | Role | Changes |
|---------|------|-------------|------|---------|
| {{version}} | {{date}} | {{contributor_name}} | {{contributor_role}} | Initial control point analysis |

---

_Generated by ProcessMiner Process Documentation Analyst_
_Document ID: {{document_id}}-controls_
