# Friction Points Detail: {{process_name}}

**Process ID:** {{process_id}}
**Document Type:** Client Friction Analysis
**Last Updated:** {{date}}
**Related Document:** [CX Journey Documentation](./cx-journey-documentation.md)

---

## Executive Summary

{{friction_executive_summary}}

---

## Friction Point Summary Table

> **Quick Reference:** All identified friction points ranked by CES impact. Click any FP# for full details below.

| FP# | Friction Point | Stage | Touchpoint | Severity | CES Impact | Quick Win? |
|-----|----------------|-------|------------|----------|------------|------------|
{{friction_summary_table}}

---

## Friction Statistics

| Metric | Value |
|--------|-------|
| Total Friction Points Identified | {{total_friction_points}} |
| High-Severity (P1) | {{high_severity_count}} |
| Medium-Severity (P2) | {{medium_severity_count}} |
| Low-Severity (P3) | {{low_severity_count}} |
| Total CES Impact | {{total_ces_impact}} |
| Quick Win Opportunities | {{quick_win_count}} |
| Systemic Issues | {{systemic_count}} |

---

## Friction Categories

> *Breakdown by friction type helps identify transformation themes*

| Friction Type | Count | Combined CES Impact | Top Priority |
|---------------|-------|---------------------|--------------|
| Effort Friction | {{effort_friction_count}} | {{effort_friction_ces}} | {{effort_top_priority}} |
| Wait Friction | {{wait_friction_count}} | {{wait_friction_ces}} | {{wait_top_priority}} |
| Communication Friction | {{comm_friction_count}} | {{comm_friction_ces}} | {{comm_top_priority}} |
| Channel Friction | {{channel_friction_count}} | {{channel_friction_ces}} | {{channel_top_priority}} |
| Exception Friction | {{exception_friction_count}} | {{exception_friction_ces}} | {{exception_top_priority}} |
| Information Friction | {{info_friction_count}} | {{info_friction_ces}} | {{info_top_priority}} |

---

## Detailed Friction Point Analysis

{{#each friction_points}}

### {{this.id}}: {{this.name}}

#### Overview

| Attribute | Value |
|-----------|-------|
| **Friction Point ID** | {{this.id}} |
| **Friction Point Name** | {{this.name}} |
| **Friction Type** | {{this.type}} |
| **Journey Stage** | {{this.stage}} |
| **Linked Touchpoint(s)** | {{this.linked_touchpoints}} |
| **Severity** | {{this.severity}} |
| **CES Impact** | {{this.ces_impact}} |
| **Quick Win Potential** | {{this.quick_win}} |

#### Client Experience Description

> *What exactly does the client experience? Describe from their perspective.*

{{this.client_experience_description}}

#### Impact Analysis

> *How does this friction affect the client?*

**Emotional Impact:**
{{this.emotional_impact}}

**Effort Impact:**
| Component | Before Friction | Due to Friction | Total |
|-----------|-----------------|-----------------|-------|
| Additional Actions | - | {{this.additional_actions}} | {{this.additional_actions}} |
| Additional Documents | - | {{this.additional_documents}} | {{this.additional_documents}} |
| Additional Time (mins) | - | {{this.additional_time}} | {{this.additional_time}} |
| Channel Switches | - | {{this.channel_switches}} | {{this.channel_switches}} |
| Follow-ups Required | - | {{this.follow_ups}} | {{this.follow_ups}} |
| **CES Impact** | | | **{{this.ces_impact}}** |

**Behavioral Impact:**
{{this.behavioral_impact}}

**Business Impact:**
- Churn Risk: {{this.churn_risk}}
- NPS Impact: {{this.nps_impact}}
- Complaint Likelihood: {{this.complaint_likelihood}}
- Word-of-Mouth Risk: {{this.word_of_mouth_risk}}

#### Frequency & Scope

> *How often and to how many clients does this friction apply?*

| Attribute | Value |
|-----------|-------|
| **Frequency** | {{this.frequency}} |
| **% of Clients Affected** | {{this.percentage_affected}} |
| **Client Segments Most Affected** | {{this.segments_affected}} |
| **Seasonal/Timing Patterns** | {{this.timing_patterns}} |

#### Root Cause Analysis

> *Why does this friction exist? Client-visible symptoms vs operational causes.*

**What the Client Sees/Experiences:**
{{this.client_visible_symptoms}}

**Underlying Operational Cause:**
{{this.operational_cause}}

**5-Whys Analysis:**
{{this.five_whys}}

**Systemic Factors:**
{{this.systemic_factors}}

#### Current Client Workarounds

> *How do clients cope with this friction today?*

{{this.client_workarounds}}

**Workaround Effectiveness:** {{this.workaround_effectiveness}}
**Workaround Effort Cost:** {{this.workaround_effort}}

#### Linked Pain Points (Operational)

> *Pain points (PP#) from AS-IS documentation that cause this friction*

| PP# | Pain Point | Connection |
|-----|------------|------------|
{{this.linked_pain_points_table}}

#### Linked Process Steps

> *Process steps (PS#) where this friction occurs*

| PS# | Process Step | Friction Point in Step |
|-----|--------------|------------------------|
{{this.linked_steps_table}}

#### Enhancement Ideas

> *Ideas to eliminate or reduce this friction*

{{#each this.enhancement_ideas}}
**{{@index}}. {{this.title}}** ({{this.enhancement_id}})

| Attribute | Value |
|-----------|-------|
| **Description** | {{this.description}} |
| **Est. CES Reduction** | {{this.ces_reduction}} |
| **Complexity** | {{this.complexity}} |
| **Dependencies** | {{this.dependencies}} |
| **Quick Win?** | {{this.is_quick_win}} |

{{/each}}

#### Industry Comparison

> *How do competitors/best-in-class handle this friction?*

{{this.industry_comparison}}

#### Client Feedback/Complaints

> *Direct client voice related to this friction*

{{this.client_feedback}}

#### Transformation Considerations

> *What should the Transformation Agent consider when addressing this?*

**Must Address (Non-Negotiable):**
{{this.must_address}}

**Preferred Approach:**
{{this.preferred_approach}}

**Risks if Not Addressed:**
{{this.risks_if_not_addressed}}

**Success Metrics (Proposed):**
{{this.success_metrics}}

---

{{/each}}

## Friction Patterns & Themes

### Theme Analysis

> *What patterns emerge across friction points?*

{{friction_themes}}

### Friction by Journey Stage

> *Where in the journey does friction concentrate?*

| Stage | Friction Count | Total CES Impact | Worst Friction |
|-------|----------------|------------------|----------------|
{{friction_by_stage_table}}

### Systemic Issues

> *Friction points with shared root causes requiring systemic fix*

{{systemic_issues_analysis}}

---

## Quick Wins

> *Friction points that can be addressed with minimal effort/risk*

| FP# | Friction | Proposed Fix | Effort | CES Reduction | Timeline |
|-----|----------|--------------|--------|---------------|----------|
{{quick_wins_table}}

---

## High-Complexity Transformations

> *Friction points requiring significant change - strategic initiatives*

| FP# | Friction | Required Changes | Complexity | CES Reduction | Dependencies |
|-----|----------|------------------|------------|---------------|--------------|
{{high_complexity_table}}

---

## Enhancement Ideas Catalog

> *All enhancement ideas captured during friction analysis*

| EI# | Target Friction (FP#) | Enhancement | CES Reduction | Complexity | Priority |
|-----|----------------------|-------------|---------------|------------|----------|
{{enhancement_catalog_table}}

### Enhancement Statistics

| Metric | Value |
|--------|-------|
| Total Enhancement Ideas | {{total_enhancement_ideas}} |
| Quick Wins | {{quick_win_enhancements}} |
| Strategic Initiatives | {{strategic_enhancements}} |
| Automation Opportunities | {{automation_enhancements}} |
| Total Potential CES Reduction | {{total_ces_reduction}} |

---

## Prioritized Recommendations

### Priority 1: Critical (Address Immediately)

> *High CES impact, high client pain, affects many clients*

{{priority_1_recommendations}}

### Priority 2: High (Address in First Phase)

> *Significant CES impact, clear solution path*

{{priority_2_recommendations}}

### Priority 3: Medium (Address in Second Phase)

> *Moderate impact, may require dependencies first*

{{priority_3_recommendations}}

### Priority 4: Low (Backlog)

> *Nice-to-have, low impact or high complexity*

{{priority_4_recommendations}}

---

## CES Reduction Roadmap

### Phase 1: Quick Wins

| Target | Current CES | Post-Phase CES | Reduction |
|--------|-------------|----------------|-----------|
| Total Journey CES | {{current_ces}} | {{post_phase1_ces}} | {{phase1_reduction}} |

**Friction Points Addressed:**
{{phase1_friction_points}}

### Phase 2: Core Improvements

| Target | Post-Phase 1 CES | Post-Phase CES | Reduction |
|--------|------------------|----------------|-----------|
| Total Journey CES | {{post_phase1_ces}} | {{post_phase2_ces}} | {{phase2_reduction}} |

**Friction Points Addressed:**
{{phase2_friction_points}}

### Phase 3: Strategic Transformation

| Target | Post-Phase 2 CES | Target CES | Reduction |
|--------|------------------|------------|-----------|
| Total Journey CES | {{post_phase2_ces}} | {{target_ces}} | {{phase3_reduction}} |

**Friction Points Addressed:**
{{phase3_friction_points}}

---

## Input for Downstream Agents

### For Transformation Agent

> *Key friction points to address in TO-BE design*

{{transformation_agent_input}}

### For Pain Points Detail (Cross-Reference)

> *New pain points discovered during CX analysis*

{{pain_points_cross_reference}}

### For Control Analyst

> *Friction points with compliance/control implications*

{{control_analyst_input}}

### For Innovation Analyst

> *Friction points that might benefit from emerging technologies*

{{innovation_analyst_input}}

---

## Traceability Matrix

### Friction to Pain Points

| FP# | Related PP# | Connection Type |
|-----|-------------|-----------------|
{{friction_to_pain_points}}

### Friction to Process Steps

| FP# | Related PS# | Where in Step |
|-----|-------------|---------------|
{{friction_to_steps}}

### Friction to Enhancements

| FP# | Enhancement Ideas (EI#) | Priority |
|-----|------------------------|----------|
{{friction_to_enhancements}}

---

## Change Log

| Date | Contributor | Role | Changes |
|------|-------------|------|---------|
| {{date}} | {{contributor_name}} | {{contributor_role}} | Initial friction analysis |

---

_Generated by ProcessMiner Client Journey Analyst_
_Document ID: {{document_id}}-friction_
