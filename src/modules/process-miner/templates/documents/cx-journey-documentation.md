# Client Experience Journey: {{process_name}}

**Document Type:** Client Experience AS-IS Analysis
**Process ID:** {{process_id}}
**Business Unit:** {{business_unit}}
**Client Segment:** {{client_segment}}
**Analyst:** {{analyst_name}}
**Last Updated:** {{date}}
**Version:** {{version}}

---

## Executive Summary

{{executive_summary_paragraph_1}}

{{executive_summary_paragraph_2}}

{{executive_summary_paragraph_3}}

### Key Metrics at a Glance

| Metric | Value |
|--------|-------|
| Journey Touchpoints | {{total_touchpoints}} |
| Friction Points Identified | {{total_friction_points}} |
| Enhancement Ideas Captured | {{total_enhancement_ideas}} |
| Client Effort Score (CES) | {{ces_score}} |
| Moments That Matter | {{total_moments_that_matter}} |
| Channels Used | {{total_channels}} |
| Overall Confidence | {{overall_confidence}} |

### CES Baseline Summary

| Metric | Count | Weight | Weighted Score |
|--------|-------|--------|----------------|
| Client Actions | {{metrics.client_actions}} | 1.0 | {{metrics.client_actions_weighted}} |
| Documents Required | {{metrics.documents}} | 1.5 | {{metrics.documents_weighted}} |
| Information Requests | {{metrics.info_requests}} | 1.0 | {{metrics.info_requests_weighted}} |
| Follow-ups Required | {{metrics.follow_ups}} | 2.0 | {{metrics.follow_ups_weighted}} |
| Channel Switches | {{metrics.channel_switches}} | 1.5 | {{metrics.channel_switches_weighted}} |
| Active Time (minutes) | {{metrics.active_time}} | 0.5 | {{metrics.active_time_weighted}} |
| **TOTAL CES** | | | **{{ces_score}}** |

---

## How to Read This Document

> This document captures the **client experience perspective (AS-IS)** of the {{process_name}} process. It maps the journey through client eyes, measuring effort and identifying friction.
>
> **Companion Documents:**
> - [Client Touchpoints Detail](./client-touchpoints-detail.md) - Full touchpoint analysis with CES contribution
> - [Friction Points Detail](./friction-points-detail.md) - Detailed friction analysis with enhancement ideas
> - [AS-IS Process Documentation](./as-is-process-documentation.md) - Operational process view
>
> **CES Interpretation:**
> - **Low CES (< 20)** - Excellent client experience, minimal effort
> - **Medium CES (20-40)** - Acceptable experience, improvement opportunities exist
> - **High CES (> 40)** - Poor experience, significant transformation required

---

## 1. Journey Overview

> **About this section:** What is this journey from the client's perspective? What outcome are they trying to achieve?

### 1.1 Journey Identification

| Attribute | Value |
|-----------|-------|
| **Journey Name** | {{journey_name}} |
| **Process ID** | {{process_id}} |
| **Client Goal** | {{client_goal}} |
| **Journey Trigger** | {{journey_trigger}} |
| **Success Outcome** | {{success_outcome}} |
| **Typical Duration** | {{typical_duration}} |

### 1.2 Client Persona

| Attribute | Value |
|-----------|-------|
| **Segment** | {{client_segment}} |
| **Typical Profile** | {{client_profile}} |
| **Key Motivations** | {{client_motivations}} |
| **Expected Experience** | {{expected_experience}} |

### 1.3 Journey Context

{{journey_context}}

> **Section Confidence:** {{section_1_confidence}} | **Basis:** {{section_1_confidence_basis}}

---

## 2. Client Touchpoints

> **About this section:** Every interaction point where the client engages with the bank. For full details including CES contribution and emotional analysis, see [Client Touchpoints Detail](./client-touchpoints-detail.md).

### 2.1 Touchpoint Summary

{{touchpoints_summary_paragraph}}

### 2.2 Touchpoint Summary Table

| JT# | Touchpoint Name | Stage | Channel | What Client SEES | What Client DOES | CES Contribution |
|-----|-----------------|-------|---------|------------------|------------------|------------------|
{{touchpoint_summary_table}}

### 2.3 Journey Flow Diagram

```mermaid
{{journey_diagram}}
```

### 2.4 Touchpoint Statistics

| Metric | Value |
|--------|-------|
| Total Touchpoints | {{total_touchpoints}} |
| Digital Touchpoints | {{digital_touchpoints}} |
| Human-Assisted Touchpoints | {{human_touchpoints}} |
| Self-Service Touchpoints | {{self_service_touchpoints}} |
| Wait Points | {{wait_points}} |

> **Full Analysis:** [View Client Touchpoints Detail](./client-touchpoints-detail.md)
>
> **Section Confidence:** {{section_2_confidence}} | **Basis:** {{section_2_confidence_basis}}

---

## 3. Moments That Matter

> **About this section:** Critical touchpoints that disproportionately define client perception. These must be protected or enhanced in any transformation.

### 3.1 Identified Moments

{{#each moments_that_matter}}
**{{@index}}. {{this.name}}** ({{this.touchpoint_id}})

| Attribute | Value |
|-----------|-------|
| **Stage** | {{this.stage}} |
| **Why Critical** | {{this.reason}} |
| **Current Experience** | {{this.current_state}} |
| **Emotional Impact** | {{this.emotional_impact}} |
| **Risk if Degraded** | {{this.degradation_risk}} |

{{/each}}

### 3.2 Moments Summary

| Moment | Touchpoint | Current State | Enhancement Priority |
|--------|-----------|---------------|---------------------|
{{moments_summary_table}}

> **Section Confidence:** {{section_3_confidence}} | **Basis:** {{section_3_confidence_basis}}

---

## 4. Friction Point Analysis

> **About this section:** Summary of friction points. For full details including root cause analysis and enhancement ideas, see [Friction Points Detail](./friction-points-detail.md).

### 4.1 Friction Summary

{{friction_summary_paragraph}}

### 4.2 Friction Point Summary Table

| FP# | Friction Point | Stage | Touchpoint | Severity | CES Impact | Client Emotion |
|-----|----------------|-------|------------|----------|------------|----------------|
{{friction_point_summary_table}}

### 4.3 Friction by Type

| Friction Type | Count | Combined CES Impact | Priority Items |
|---------------|-------|---------------------|----------------|
{{friction_by_type_table}}

### 4.4 Friction Statistics

| Metric | Value |
|--------|-------|
| Total Friction Points | {{total_friction_points}} |
| High-Severity (P1) | {{high_severity_friction}} |
| Medium-Severity (P2) | {{medium_severity_friction}} |
| Low-Severity (P3) | {{low_severity_friction}} |
| Quick Win Opportunities | {{quick_win_friction}} |

> **Full Analysis:** [View Friction Points Detail](./friction-points-detail.md)
>
> **Section Confidence:** {{section_4_confidence}} | **Basis:** {{section_4_confidence_basis}}

---

## 5. Client Effort Score (CES) Analysis

> **About this section:** Quantified measurement of client effort across the journey. This is the baseline for transformation target comparison.

### 5.1 CES Breakdown by Stage

| Journey Stage | Actions | Documents | Info Requests | Follow-ups | Channel Switches | Wait Time | Stage CES |
|---------------|---------|-----------|---------------|------------|------------------|-----------|-----------|
{{ces_by_stage_table}}

### 5.2 CES Breakdown by Touchpoint

| Touchpoint | CES Contribution | % of Total | Reduction Priority |
|------------|------------------|------------|-------------------|
{{ces_by_touchpoint_table}}

### 5.3 Benchmark Comparison

| Benchmark | Score | Our Gap |
|-----------|-------|---------|
| Industry Average | {{benchmarks.industry_avg}} | {{benchmarks.industry_gap}} |
| Best-in-Class | {{benchmarks.best_in_class}} | {{benchmarks.best_gap}} |
| Internal Target | {{benchmarks.internal_target}} | {{benchmarks.internal_gap}} |

### 5.4 CES Baseline Statement

> **CES BASELINE FOR TO-BE COMPARISON**
>
> This AS-IS CES score (**{{ces_score}}**) establishes the baseline for transformation.
> During TO-BE design, this score will be compared against the target state to measure
> improvement. Industry standard for transformation projects is **30-40% CES reduction**.
>
> After the Transformation Agent designs the TO-BE state, the Client Journey Analyst
> will recalculate CES in **Flow 2 (Target Validation)** to verify improvements.

> **Section Confidence:** {{section_5_confidence}} | **Basis:** {{section_5_confidence_basis}}

---

## 6. Channel Analysis

> **About this section:** How clients interact across different channels throughout the journey.

### 6.1 Channel Usage

| CH# | Channel | Touchpoints Using | Primary Purpose | Client Preference |
|-----|---------|-------------------|-----------------|-------------------|
{{channel_summary_table}}

### 6.2 Channel Switching Analysis

{{channel_switching_analysis}}

### 6.3 Channel Gaps

{{channel_gaps}}

> **Section Confidence:** {{section_6_confidence}} | **Basis:** {{section_6_confidence_basis}}

---

## 7. Enhancement Ideas

> **About this section:** Captured enhancement ideas for TO-BE consideration. Prioritization will occur during transformation design.

### 7.1 Enhancement Catalog

| EI# | Target Friction | Enhancement Idea | Est. CES Reduction | Complexity | Priority |
|-----|-----------------|------------------|-------------------|------------|----------|
{{enhancement_summary_table}}

### 7.2 Enhancement Statistics

| Metric | Value |
|--------|-------|
| Total Enhancement Ideas | {{total_enhancement_ideas}} |
| Quick Wins (Low Effort) | {{quick_win_enhancements}} |
| Strategic (High Effort) | {{strategic_enhancements}} |
| Automation Opportunities | {{automation_enhancements}} |
| Total Est. CES Reduction | {{total_ces_reduction_potential}} |

> **Section Confidence:** {{section_7_confidence}} | **Basis:** {{section_7_confidence_basis}}

---

## 8. Industry Research & Benchmarks

> **About this section:** How does this journey compare to industry standards and emerging trends?

### 8.1 Industry Benchmarks

| Metric | Industry Average | Best-in-Class | Our AS-IS | Gap |
|--------|-----------------|---------------|-----------|-----|
{{industry_benchmark_table}}

### 8.2 Relevant Trends

| Trend | Relevance | Assessment | Enhancement Alignment |
|-------|-----------|------------|----------------------|
{{validated_trends_table}}

### 8.3 Competitive Landscape

{{competitive_analysis}}

> **Section Confidence:** {{section_8_confidence}} | **Basis:** {{section_8_confidence_basis}}

---

## 9. Inputs for TO-BE Design

> **About this section:** Consolidated inputs for the Transformation Agent.

### 9.1 CES Baseline Summary

The Transformation Agent should use these metrics as the baseline:

| Metric | AS-IS Value | Target (30% Reduction) |
|--------|-------------|------------------------|
| Overall CES Score | {{ces_score}} | {{ces_target}} |
| Client Actions | {{metrics.client_actions}} | {{metrics.client_actions_target}} |
| Documents Required | {{metrics.documents}} | {{metrics.documents_target}} |
| Channel Switches | {{metrics.channel_switches}} | {{metrics.channel_switches_target}} |

### 9.2 Critical Success Factors

For a successful TO-BE from a CX perspective:

{{#each success_factors}}
- **{{this.factor}}:** {{this.description}}
{{/each}}

### 9.3 Experience Degradation Risks

**DO NOT** make these changes in TO-BE (would worsen CX):

{{#each degradation_risks}}
- **{{this.risk}}:** {{this.explanation}}
{{/each}}

### 9.4 Enhancement Ideas Available

The Transformation Agent has **{{total_enhancement_ideas}}** enhancement ideas to consider (see Section 7).

---

## 10. Discovery Logging Summary

> **About this section:** New items discovered during CX analysis that should be added to the AS-IS process documentation.

### 10.1 New Items Logged

| Type | Count | Files Updated |
|------|-------|---------------|
| Pain Points | {{new_pain_points_count}} | pain-points-detail.md, as-is-process-documentation.md |
| Exceptions | {{new_exceptions_count}} | exceptions-detail.md, as-is-process-documentation.md |
| Controls | {{new_controls_count}} | control-points-detail.md, as-is-process-documentation.md |

### 10.2 Cross-References

- [pain-points-detail.md](./pain-points-detail.md) - Full pain point documentation
- [exceptions-detail.md](./exceptions-detail.md) - Full exception documentation
- [control-points-detail.md](./control-points-detail.md) - Full control documentation
- [as-is-process-documentation.md](./as-is-process-documentation.md) - Master AS-IS document

---

## Document Metadata

**SME Contributors:** {{sme_contributors}}
**Analysis Date(s):** {{analysis_dates}}
**Documentation Method:** {{documentation_method}}

### Overall Document Confidence

| Section | Confidence | Key Gaps |
|---------|------------|----------|
| 1. Journey Overview | {{section_1_confidence}} | {{section_1_gaps}} |
| 2. Client Touchpoints | {{section_2_confidence}} | {{section_2_gaps}} |
| 3. Moments That Matter | {{section_3_confidence}} | {{section_3_gaps}} |
| 4. Friction Points | {{section_4_confidence}} | {{section_4_gaps}} |
| 5. CES Analysis | {{section_5_confidence}} | {{section_5_gaps}} |
| 6. Channel Analysis | {{section_6_confidence}} | {{section_6_gaps}} |
| 7. Enhancement Ideas | {{section_7_confidence}} | {{section_7_gaps}} |
| 8. Industry Research | {{section_8_confidence}} | {{section_8_gaps}} |

**Overall Confidence:** {{overall_confidence}}

### Companion Documents

| Document | Purpose | Link |
|----------|---------|------|
| Client Touchpoints Detail | Full touchpoint analysis | [client-touchpoints-detail.md](./client-touchpoints-detail.md) |
| Friction Points Detail | Full friction analysis | [friction-points-detail.md](./friction-points-detail.md) |
| AS-IS Process Documentation | Operational view | [as-is-process-documentation.md](./as-is-process-documentation.md) |

---

## Change Log

| Date | Contributor | Role | Changes |
|------|-------------|------|---------|
| {{date}} | {{contributor_name}} | {{contributor_role}} | Initial CX analysis |

---

## Glossary

{{glossary}}

---

_Generated by ProcessMiner Client Journey Analyst_
_Document ID: {{document_id}}_
