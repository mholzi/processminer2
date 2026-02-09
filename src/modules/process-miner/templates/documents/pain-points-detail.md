# Pain Points & Improvement Opportunities: {{process_name}}

**Process ID:** {{process_id}}
**Document Type:** Pain Point Detail Analysis
**Status:** {{status}}
**Last Updated:** {{date}}
**Version:** {{version}}
**Synced with AS-IS Version:** {{parent_version}}
**Related Document:** [AS-IS Process Documentation](./as-is-process-documentation.md)
**Reviewed By:** {{reviewer_name}} | **Review Date:** {{review_date}}
**Approved By:** {{approver_name}} | **Approval Date:** {{approval_date}}

---

## Executive Summary

{{pain_points_executive_summary}}

---

## Pain Point Summary Table

> **Quick Reference:** All identified pain points ranked by transformation priority. Click any PP# for full details below.

| PP# | Pain Point | Category | Affected Steps | Impact | Frequency | Priority Score | Quick Win? |
|-----|------------|----------|----------------|--------|-----------|----------------|------------|
{{pain_point_summary_table}}

---

## Pain Point Statistics

| Metric | Value |
|--------|-------|
| Total Pain Points Identified | {{total_pain_points}} |
| High-Impact Pain Points | {{high_impact_count}} |
| Frequently Occurring (Daily+) | {{frequent_count}} |
| Client-Facing Pain Points | {{client_facing_count}} |
| Staff/Operational Pain Points | {{staff_facing_count}} |
| Compliance/Risk Pain Points | {{compliance_count}} |
| Quick Win Opportunities | {{quick_win_count}} |
| Automation Candidates | {{automation_candidate_count}} |

---

## Pain Point Categories

> *Breakdown by category helps prioritize transformation themes*

| Category | Count | Combined Impact | Top Priority |
|----------|-------|-----------------|--------------|
{{pain_point_category_breakdown}}

---

## Detailed Pain Point Analysis

{{#each pain_points}}

### {{this.id}}: {{this.name}}

#### Overview

| Attribute | Value |
|-----------|-------|
| **Pain Point ID** | {{this.id}} |
| **Pain Point Name** | {{this.name}} |
| **Category** | {{this.category}} |
| **Affected Process Steps** | {{this.affected_steps}} |
| **Frequency** | {{this.frequency}} |
| **Impact Level** | {{this.impact_level}} |
| **Priority Score** | {{this.priority_score}} / 10 |
| **Quick Win Potential** | {{this.quick_win}} |

#### Problem Description

> *What exactly is the pain point? Be specific and quantify where possible.*

{{this.problem_description}}

#### Who Is Affected?

> *Which stakeholders experience this pain point?*

**Primary Affected:**
{{this.primary_affected}}

**Secondary Affected:**
{{this.secondary_affected}}

**Client Impact (if applicable):**
{{this.client_impact}}

#### Current State Analysis

> *How does this manifest today? Include examples and metrics.*

**How It Manifests:**
{{this.manifestation}}

**Quantified Impact:**
- Time wasted per occurrence: {{this.time_wasted}}
- Occurrences per week/month: {{this.occurrence_frequency}}
- Total time impact: {{this.total_time_impact}}
- Error rate contribution: {{this.error_rate}}
- Cost impact (if known): {{this.cost_impact}}

**Example Scenarios:**
{{this.example_scenarios}}

#### Root Cause Analysis

> *Why does this pain point exist? Dig into underlying causes.*

**5-Whys Analysis:**
{{this.five_whys}}

**Contributing Factors:**
{{this.contributing_factors}}

**Systemic Issues:**
{{this.systemic_issues}}

#### Impact on Downstream Processes

> *How does this pain point affect other processes or agents' analysis?*

{{this.downstream_impact}}

#### Related Pain Points

> *Other pain points with shared root causes or that compound this issue*

{{this.related_pain_points}}

#### Current Workarounds

> *How do people cope with this pain point today?*

{{this.workarounds}}

**Workaround Effectiveness:** {{this.workaround_effectiveness}}
**Workaround Risks:** {{this.workaround_risks}}

#### Improvement Ideas (Preliminary)

> *Initial ideas captured - not yet validated or prioritized*

{{this.improvement_ideas}}

#### Transformation Considerations

> *What should the Transformation Agent consider when addressing this?*

**Dependencies:**
{{this.dependencies}}

**Constraints:**
{{this.constraints}}

**Success Metrics (Proposed):**
{{this.success_metrics}}

**Estimated Effort:**
{{this.estimated_effort}}

#### Linked Exceptions

> *Exceptions (EX#) that relate to or cause this pain point*

{{this.linked_exceptions}}

#### Linked Control Points

> *Controls (CP#) that may be affected by addressing this pain point*

{{this.linked_controls}}

---

{{/each}}

## Pain Point Patterns & Themes

### Theme Analysis

> *What patterns emerge across pain points?*

{{pain_point_themes}}

### Automation Opportunities

> *Pain points that are strong candidates for automation*

| PP# | Pain Point | Automation Type | Feasibility | Impact |
|-----|------------|-----------------|-------------|--------|
{{automation_opportunities_table}}

### Quick Wins

> *Pain points that can be addressed with minimal effort/risk*

| PP# | Pain Point | Proposed Solution | Effort | Timeline |
|-----|------------|-------------------|--------|----------|
{{quick_wins_table}}

### High-Complexity Transformations

> *Pain points requiring significant change - strategic initiatives*

{{high_complexity_summary}}

---

## Prioritized Recommendations

### Priority 1: Critical (Address Immediately)

{{priority_1_recommendations}}

### Priority 2: High (Address in 0-6 months)

{{priority_2_recommendations}}

### Priority 3: Medium (Address in 6-12 months)

{{priority_3_recommendations}}

### Priority 4: Low (Backlog / Future Consideration)

{{priority_4_recommendations}}

---

## Input for Downstream Agents

### For Transformation Agent

> *Key pain points to address in TO-BE design*

{{transformation_agent_input}}

### For Client Journey Analyst

> *Pain points with client experience impact*

{{client_journey_input}}

### For Control Analyst

> *Pain points affecting compliance/controls*

{{control_analyst_input}}

### For Innovation Analyst

> *Pain points that might benefit from emerging technologies*

{{innovation_analyst_input}}

---

## Change Log

| Version | Date | Contributor | Role | Changes |
|---------|------|-------------|------|---------|
| {{version}} | {{date}} | {{contributor_name}} | {{contributor_role}} | Initial pain point analysis |

---

_Generated by ProcessMiner Process Documentation Analyst_
_Document ID: {{document_id}}-pain-points_
