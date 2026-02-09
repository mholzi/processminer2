# Exception Paths & Variations: {{process_name}}

**Process ID:** {{process_id}}
**Document Type:** Exception Detail Analysis
**Status:** {{status}}
**Last Updated:** {{date}}
**Version:** {{version}}
**Synced with AS-IS Version:** {{parent_version}}
**Related Document:** [AS-IS Process Documentation](./as-is-process-documentation.md)
**Reviewed By:** {{reviewer_name}} | **Review Date:** {{review_date}}
**Approved By:** {{approver_name}} | **Approval Date:** {{approval_date}}

---

## Executive Summary

{{exceptions_executive_summary}}

---

## Exception Summary Table

> **Quick Reference:** All identified exceptions with impact and frequency at a glance. Click any EX# for full details below.

| EX# | Exception Name | Trigger Condition | Affected Steps | Frequency | Business Impact | Handling Owner |
|-----|----------------|-------------------|----------------|-----------|-----------------|----------------|
{{exception_summary_table}}

---

## Exception Statistics

| Metric | Value |
|--------|-------|
| Total Exceptions Identified | {{total_exceptions}} |
| High-Impact Exceptions | {{high_impact_count}} |
| Frequently Occurring (>10% of cases) | {{frequent_count}} |
| Exceptions Requiring Manual Intervention | {{manual_intervention_count}} |
| Exceptions with Documented Procedures | {{documented_procedures_count}} |
| Exceptions Lacking Clear Ownership | {{unclear_ownership_count}} |

---

## Detailed Exception Analysis

{{#each exceptions}}

### {{this.id}}: {{this.name}}

#### Overview

| Attribute | Value |
|-----------|-------|
| **Exception ID** | {{this.id}} |
| **Exception Name** | {{this.name}} |
| **Category** | {{this.category}} |
| **Affected Process Steps** | {{this.affected_steps}} |
| **Frequency** | {{this.frequency}} ({{this.frequency_percentage}}% of transactions) |
| **Business Impact** | {{this.impact_level}} |
| **Handling Owner** | {{this.owner}} |
| **Average Resolution Time** | {{this.resolution_time}} |

#### Trigger Conditions

> *What causes this exception to occur?*

{{this.trigger_conditions}}

#### Detection Method

> *How is this exception identified? (System alert, manual review, client complaint, etc.)*

{{this.detection_method}}

#### Business Impact Analysis

> *What happens when this exception occurs? Quantify where possible.*

**Immediate Impact:**
{{this.immediate_impact}}

**Downstream Effects:**
{{this.downstream_effects}}

**Client Impact:**
{{this.client_impact}}

**Financial Impact (if applicable):**
{{this.financial_impact}}

**Regulatory/Compliance Risk:**
{{this.compliance_risk}}

#### Current Handling Procedure

> *Step-by-step: What happens today when this exception is triggered?*

{{this.handling_procedure}}

#### Escalation Path

> *When and to whom does this exception escalate?*

| Escalation Level | Trigger | Owner | SLA |
|------------------|---------|-------|-----|
{{this.escalation_table}}

#### System Behavior

> *How do systems respond to this exception?*

{{this.system_behavior}}

#### Documentation & Evidence

> *What documentation exists for this exception? What audit trail is captured?*

- **Existing Procedures:** {{this.existing_procedures}}
- **Audit Trail Captured:** {{this.audit_trail}}
- **Evidence Retained:** {{this.evidence_retained}}

#### Root Cause Analysis

> *Why does this exception occur? (5-Whys or similar analysis)*

{{this.root_cause_analysis}}

#### Improvement Opportunities

> *How could this exception be prevented, detected earlier, or handled more efficiently?*

{{this.improvement_opportunities}}

#### Related Exceptions

> *Other exceptions that commonly occur together or have similar root causes*

{{this.related_exceptions}}

---

{{/each}}

## Exception Patterns & Insights

### Clustering Analysis

> *Are there patterns in when/why exceptions occur?*

{{exception_patterns}}

### High-Impact Exception Summary

> *Exceptions requiring priority attention in transformation planning*

{{high_impact_summary}}

### Exception-to-Pain-Point Mapping

> *How do exceptions relate to identified pain points?*

| EX# | Related Pain Points (PP#) | Connection |
|-----|---------------------------|------------|
{{exception_pain_point_mapping}}

---

## Recommendations for TO-BE Design

> *Key considerations for the Transformation Agent when addressing exceptions*

{{recommendations_for_transformation}}

---

## Input for Downstream Agents

### For Transformation Agent

> *Key exceptions to address in TO-BE design — elimination, prevention, or improved handling*

{{transformation_agent_input}}

### For Control Analyst

> *Exception patterns indicating control weaknesses or missing controls*

{{control_analyst_input}}

### For Client Journey Analyst

> *Client-facing exceptions affecting experience and effort scores*

{{client_journey_input}}

---

## Change Log

| Version | Date | Contributor | Role | Changes |
|---------|------|-------------|------|---------|
| {{version}} | {{date}} | {{contributor_name}} | {{contributor_role}} | Initial exception analysis |

---

_Generated by ProcessMiner Process Documentation Analyst_
_Document ID: {{document_id}}-exceptions_
