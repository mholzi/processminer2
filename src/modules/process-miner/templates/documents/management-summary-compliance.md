# Management Summary: {{process_name}} - Compliance & Controls

**Document Type:** Compliance Control Management Summary (Amazon 6-Pager Format)
**Process ID:** {{process_id}}
**Business Unit:** {{business_unit}}
**Region:** {{region}}
**Control Analyst:** {{analyst_name}}
**Date:** {{date}}
**Version:** {{version}}

---

<!--
═══════════════════════════════════════════════════════════════════════════════
AMAZON 6-PAGER WRITING GUIDANCE - COMPLIANCE & CONTROLS

This is a NARRATIVE document, not an audit report. It tells a story about RISK.
Executives will read this in silence for 20-30 minutes before discussion.

CORE PRINCIPLES:
1. Lead with RISK EXPOSURE - First paragraph must quantify compliance risk
2. NO AMBIGUITY - "Compliant" or "Non-compliant" - no middle ground
3. BRUTAL HONESTY - If there are gaps, say so clearly. Regulators will find them.
4. REGULATORY CONSEQUENCE - Every gap needs "If audited, this will result in..."
5. CLEAR OWNERSHIP - Every remediation has a name and deadline
6. WRITE INTRODUCTION LAST - After you understand the full picture

COMPLIANCE-SPECIFIC ANTI-PATTERNS:
✗ "Some controls may need enhancement" → "Control X is ineffective. Risk: €Y fine"
✗ "Generally compliant" → "6 of 8 requirements met. 2 gaps require remediation."
✗ "Best practice suggests" → "Regulation X requires. We are not compliant."
✗ Passive findings → Active accountability
═══════════════════════════════════════════════════════════════════════════════
-->

## 1. Introduction

<!--
WRITE THIS SECTION LAST - after completing all other sections.

PURPOSE: Quantify compliance risk exposure. Create appropriate urgency.
LENGTH: ½–1 page maximum

GOOD EXAMPLE:
"We have 2 uncontrolled regulatory requirements in a process handling €50M daily.
If audited, we face findings and potential enforcement action. This memo identifies
the gaps and proposes 3 remediation actions to achieve full compliance within 90 days."

BAD EXAMPLE:
"This document provides an overview of the compliance control framework."
-->

### Compliance Risk Summary

{{opening_hook_compliance_risk}}

<!--
INSTRUCTION: State the compliance exposure in 2-3 sentences.
Include: How many gaps? What regulations? What's the potential consequence?
Regulators speak in specifics - so should this document.
-->

### Background

{{introduction_background}}

### Purpose of This Document

This management summary synthesizes the compliance and control assessment of the **{{process_name}}** process. It provides executives with a clear view of regulatory exposure, control effectiveness, and remediation priorities.

### Scope

| Attribute | Value |
|-----------|-------|
| **Process Category** | {{process_category}} |
| **Regulatory Jurisdictions** | {{jurisdictions}} |
| **Applicable Regulations** | {{regulation_count}} frameworks |
| **Assessment Period** | {{assessment_period}} |

### Key Definitions

| Term | Definition |
|------|------------|
| Control Point (CP) | Specific mechanism ensuring compliance or risk mitigation |
| Regulatory Control | Control mandated by external regulation |
| Internal Control | Control required by bank policy |
| Control Effectiveness | Measure of how well a control achieves its objective |
| Compliance Gap | Missing or inadequate control for a regulatory requirement |

---

## 2. Goals

> _What does success look like? Specific, measurable targets with baselines._

### Primary Objectives

| Objective | Baseline | Current | Target | Target Date |
|-----------|----------|---------|--------|-------------|
| Regulatory compliance coverage | {{baseline_coverage}} | {{current_coverage}} | {{target_coverage}} | {{target_date_1}} |
| Control effectiveness score | {{baseline_effectiveness}} | {{current_effectiveness}} | {{target_effectiveness}} | {{target_date_2}} |
| Open audit findings | {{baseline_findings}} | {{current_findings}} | {{target_findings}} | {{target_date_3}} |
| Control automation rate | {{baseline_automation}} | {{current_automation}} | {{target_automation}} | {{target_date_4}} |

### Success Metrics

- **Zero Critical Gaps:** No uncontrolled critical regulatory requirements
- **Control Effectiveness:** {{effectiveness_target}}% of controls rated "Effective" or higher
- **Audit Readiness:** All evidence documented and accessible
- **Regulatory Change:** All emerging requirements mapped within {{change_mapping_target}} days

---

## 3. Tenets

> _Guiding principles that inform all compliance decisions. Non-negotiable._

### Core Principles

1. **Every Control Must Trace to a Requirement**
   No orphaned controls. No uncontrolled requirements. Complete bidirectional traceability.

2. **Control Effectiveness Over Existence**
   Having a control doesn't mean it works. We measure performance, not presence.

3. **Risk-Based Prioritization**
   High-risk processes need stronger controls. Prioritize by exposure, not convenience.

4. **Segregation of Duties Is Sacred**
   Four-eyes principle and maker-checker cannot be eliminated or weakened.

5. **Audit Trail Is Control Evidence**
   Controls without evidence are unverifiable. Document everything.

6. **Regulatory Change Awareness**
   TO-BE state must address emerging regulations, not just current requirements.

### Constraints

| Constraint | Rationale | Impact |
|------------|-----------|--------|
| Regulatory mandates | Legal obligation | Controls cannot be removed |
| Audit requirements | External scrutiny | Evidence must be maintained |
| System limitations | Legacy technology | Some automation not possible |

---

## 4. State of the Business

> _Detailed snapshot of compliance posture. Where are we now?_

### Compliance Overview

{{state_compliance_overview}}

### Key Metrics Summary

| Metric | Value | Status | Risk Level |
|--------|-------|--------|------------|
| Total Control Points | {{total_controls}} | {{controls_status}} | {{controls_risk}} |
| Regulatory Controls | {{regulatory_controls}} | {{reg_status}} | {{reg_risk}} |
| Internal Controls | {{internal_controls}} | {{int_status}} | {{int_risk}} |
| Automated Controls | {{automated_controls}} | {{auto_status}} | {{auto_risk}} |
| Manual Controls | {{manual_controls}} | {{manual_status}} | {{manual_risk}} |
| Overall Effectiveness | {{overall_effectiveness}} | {{eff_status}} | {{eff_risk}} |

### Regulatory Framework Coverage

| Regulation | Requirements | Controls Mapped | Coverage | Gaps |
|------------|--------------|-----------------|----------|------|
| {{regulation_1}} | {{req_count_1}} | {{mapped_1}} | {{coverage_1}} | {{gaps_1}} |
| {{regulation_2}} | {{req_count_2}} | {{mapped_2}} | {{coverage_2}} | {{gaps_2}} |
| {{regulation_3}} | {{req_count_3}} | {{mapped_3}} | {{coverage_3}} | {{gaps_3}} |
| {{regulation_4}} | {{req_count_4}} | {{mapped_4}} | {{coverage_4}} | {{gaps_4}} |
| **TOTAL** | {{total_requirements}} | {{total_mapped}} | {{total_coverage}} | {{total_gaps}} |

### Control Effectiveness Distribution

| Rating | Count | Percentage | Action Required |
|--------|-------|------------|-----------------|
| Highly Effective | {{highly_effective}} | {{he_pct}} | Maintain |
| Effective | {{effective}} | {{eff_pct}} | Monitor |
| Partially Effective | {{partial}} | {{partial_pct}} | Improve |
| Ineffective | {{ineffective}} | {{ineff_pct}} | Remediate Urgently |
| Not Assessed | {{not_assessed}} | {{na_pct}} | Assess |

### Critical Compliance Gaps (Top 5)

| Rank | Gap | Regulation | Risk Exposure | Remediation Status |
|------|-----|------------|---------------|-------------------|
| 1 | {{gap_1}} | {{reg_1}} | {{exposure_1}} | {{status_1}} |
| 2 | {{gap_2}} | {{reg_2}} | {{exposure_2}} | {{status_2}} |
| 3 | {{gap_3}} | {{reg_3}} | {{exposure_3}} | {{status_3}} |
| 4 | {{gap_4}} | {{reg_4}} | {{exposure_4}} | {{status_4}} |
| 5 | {{gap_5}} | {{reg_5}} | {{exposure_5}} | {{status_5}} |

### Audit Findings Status

| Category | Open | In Progress | Closed | Overdue |
|----------|------|-------------|--------|---------|
| Critical | {{crit_open}} | {{crit_progress}} | {{crit_closed}} | {{crit_overdue}} |
| High | {{high_open}} | {{high_progress}} | {{high_closed}} | {{high_overdue}} |
| Medium | {{med_open}} | {{med_progress}} | {{med_closed}} | {{med_overdue}} |
| Low | {{low_open}} | {{low_progress}} | {{low_closed}} | {{low_overdue}} |

### Control Type Distribution

| Control Type | Count | Effectiveness | Automation Potential |
|--------------|-------|---------------|---------------------|
| Preventive | {{preventive_count}} | {{preventive_eff}} | {{preventive_auto}} |
| Detective | {{detective_count}} | {{detective_eff}} | {{detective_auto}} |
| Corrective | {{corrective_count}} | {{corrective_eff}} | {{corrective_auto}} |

---

## 5. Lessons Learned

> _Honest assessment of control performance. No sugar-coating._

### What's Working

{{lessons_working}}

### What's Not Working

{{lessons_not_working}}

### Root Cause Analysis

| Control Issue | Root Cause | Evidence | Risk Implication |
|---------------|------------|----------|------------------|
| {{issue_1}} | {{root_cause_1}} | {{evidence_1}} | {{risk_1}} |
| {{issue_2}} | {{root_cause_2}} | {{evidence_2}} | {{risk_2}} |
| {{issue_3}} | {{root_cause_3}} | {{evidence_3}} | {{risk_3}} |

### Key Insights

1. {{insight_1}}
2. {{insight_2}}
3. {{insight_3}}

### Regulatory Change Horizon

| Upcoming Regulation | Effective Date | Impact Assessment | Readiness |
|--------------------|----------------|-------------------|-----------|
| {{upcoming_1}} | {{date_1}} | {{impact_1}} | {{ready_1}} |
| {{upcoming_2}} | {{date_2}} | {{impact_2}} | {{ready_2}} |
| {{upcoming_3}} | {{date_3}} | {{impact_3}} | {{ready_3}} |

### Control Optimization Opportunities

| Control | Current State | Optimization | Benefit |
|---------|---------------|--------------|---------|
| {{control_1}} | {{current_1}} | {{optimize_1}} | {{benefit_1}} |
| {{control_2}} | {{current_2}} | {{optimize_2}} | {{benefit_2}} |
| {{control_3}} | {{current_3}} | {{optimize_3}} | {{benefit_3}} |

---

## 6. Strategic Priorities

> _The core section. What must we do to strengthen compliance?_

### Priority 1: {{priority_1_title}}

**Objective:** {{priority_1_objective}}

**Risk Addressed:** {{priority_1_risk}}

**Rationale:** {{priority_1_rationale}}

**Actions Required:**

| Action | Owner | Regulation | Status |
|--------|-------|------------|--------|
| {{action_1_1}} | {{owner_1_1}} | {{reg_1_1}} | {{status_1_1}} |
| {{action_1_2}} | {{owner_1_2}} | {{reg_1_2}} | {{status_1_2}} |
| {{action_1_3}} | {{owner_1_3}} | {{reg_1_3}} | {{status_1_3}} |

**Success Criteria:** {{priority_1_success}}

**Regulatory Consequence if Not Addressed:** {{priority_1_consequence}}

---

### Priority 2: {{priority_2_title}}

**Objective:** {{priority_2_objective}}

**Risk Addressed:** {{priority_2_risk}}

**Rationale:** {{priority_2_rationale}}

**Actions Required:**

| Action | Owner | Regulation | Status |
|--------|-------|------------|--------|
| {{action_2_1}} | {{owner_2_1}} | {{reg_2_1}} | {{status_2_1}} |
| {{action_2_2}} | {{owner_2_2}} | {{reg_2_2}} | {{status_2_2}} |
| {{action_2_3}} | {{owner_2_3}} | {{reg_2_3}} | {{status_2_3}} |

**Success Criteria:** {{priority_2_success}}

**Regulatory Consequence if Not Addressed:** {{priority_2_consequence}}

---

### Priority 3: {{priority_3_title}}

**Objective:** {{priority_3_objective}}

**Risk Addressed:** {{priority_3_risk}}

**Rationale:** {{priority_3_rationale}}

**Actions Required:**

| Action | Owner | Regulation | Status |
|--------|-------|------------|--------|
| {{action_3_1}} | {{owner_3_1}} | {{reg_3_1}} | {{status_3_1}} |
| {{action_3_2}} | {{owner_3_2}} | {{reg_3_2}} | {{status_3_2}} |
| {{action_3_3}} | {{owner_3_3}} | {{reg_3_3}} | {{status_3_3}} |

**Success Criteria:** {{priority_3_success}}

**Regulatory Consequence if Not Addressed:** {{priority_3_consequence}}

---

### Quick Wins (Immediate Risk Reduction)

| Quick Win | Effort | Risk Reduction | Owner | Target |
|-----------|--------|----------------|-------|--------|
| {{quick_win_1}} | {{effort_1}} | {{reduction_1}} | {{owner_1}} | {{target_1}} |
| {{quick_win_2}} | {{effort_2}} | {{reduction_2}} | {{owner_2}} | {{target_2}} |
| {{quick_win_3}} | {{effort_3}} | {{reduction_3}} | {{owner_3}} | {{target_3}} |

### Remediation Summary

| Category | Items | Investment Required | Risk Reduction |
|----------|-------|---------------------|----------------|
| Critical Gaps | {{critical_count}} | {{critical_invest}} | {{critical_reduction}} |
| Audit Findings | {{audit_count}} | {{audit_invest}} | {{audit_reduction}} |
| Control Improvements | {{improve_count}} | {{improve_invest}} | {{improve_reduction}} |
| **TOTAL** | {{total_items}} | {{total_invest}} | {{total_reduction}} |

### Recommendations

1. **Immediate:** {{recommendation_immediate}}
2. **Short-term:** {{recommendation_short}}
3. **Long-term:** {{recommendation_long}}

### Next Steps

| Step | Responsible | Deadline | Regulatory Driver |
|------|-------------|----------|-------------------|
| {{next_step_1}} | {{responsible_1}} | {{deadline_1}} | {{driver_1}} |
| {{next_step_2}} | {{responsible_2}} | {{deadline_2}} | {{driver_2}} |
| {{next_step_3}} | {{responsible_3}} | {{deadline_3}} | {{driver_3}} |

---

## Appendix

> _Supporting data, charts, and detailed tables. No page limit._

### A.1 Regulatory Framework Mapping

| Regulation | Category | Key Requirements | Control Count |
|------------|----------|------------------|---------------|
{{regulatory_framework}}

### A.2 Complete Control Point Inventory

| CP# | Control Name | Type | Regulation | Process Step | Effectiveness | Evidence |
|-----|--------------|------|------------|--------------|---------------|----------|
{{control_inventory}}

### A.3 Compliance Gap Register

| Gap ID | Requirement | Regulation | Current State | Required State | Risk | Remediation |
|--------|-------------|------------|---------------|----------------|------|-------------|
{{gap_register}}

### A.4 Audit Finding Details

| Finding ID | Description | Severity | Root Cause | Remediation | Due Date | Status |
|------------|-------------|----------|------------|-------------|----------|--------|
{{audit_findings}}

### A.5 Control Testing Results

| CP# | Control | Test Date | Result | Evidence | Next Test |
|-----|---------|-----------|--------|----------|-----------|
{{testing_results}}

### A.6 Regulatory Change Tracker

| Change | Regulation | Effective Date | Impact | Required Actions | Status |
|--------|------------|----------------|--------|------------------|--------|
{{change_tracker}}

### A.7 Risk & Compliance Matrix

{{risk_compliance_matrix}}

### A.8 Source Documents

| Document | Type | Date | Relevance |
|----------|------|------|-----------|
{{source_documents}}

### A.9 Contributors

| Name | Role | Contribution | Date |
|------|------|--------------|------|
{{contributors}}

---

**Document Metadata**

| Attribute | Value |
|-----------|-------|
| Source Document | [compliance-control-assessment.md](./compliance-control-assessment.md) |
| Generated By | ProcessMiner Control Analyst |
| Document ID | {{document_id}} |
| Last Updated | {{date}} |

---

_This management summary follows the Amazon 6-Pager format for executive decision-making._
_Generated by ProcessMiner Module_
