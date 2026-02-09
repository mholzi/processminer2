# Client Touchpoints Detail: {{process_name}}

**Process ID:** {{process_id}}
**Document Type:** Client Touchpoint Analysis
**Last Updated:** {{date}}
**Related Document:** [CX Journey Documentation](./cx-journey-documentation.md)

---

## Executive Summary

{{touchpoints_executive_summary}}

---

## Touchpoint Summary Table

> **Quick Reference:** All identified touchpoints ranked by CES contribution. Click any JT# for full details below.

| JT# | Touchpoint Name | Stage | Channel | CES Contribution | Moment That Matters? | Friction Count |
|-----|-----------------|-------|---------|------------------|---------------------|----------------|
{{touchpoint_summary_table}}

---

## Touchpoint Statistics

| Metric | Value |
|--------|-------|
| Total Touchpoints Identified | {{total_touchpoints}} |
| Digital Touchpoints | {{digital_count}} |
| Human-Assisted Touchpoints | {{human_count}} |
| Self-Service Touchpoints | {{self_service_count}} |
| Wait Points (Client Waiting) | {{wait_point_count}} |
| Moments That Matter | {{moments_that_matter_count}} |
| Total CES Contribution | {{total_ces_contribution}} |

---

## Touchpoint Categories

> *Breakdown by category helps identify channel optimization opportunities*

| Category | Count | Combined CES | Top Contributors |
|----------|-------|--------------|------------------|
{{touchpoint_category_breakdown}}

---

## Journey Stages

> *Touchpoints organized by journey stage*

| Stage | Touchpoints | Stage CES | Client Goal |
|-------|-------------|-----------|-------------|
{{stage_summary_table}}

---

## Detailed Touchpoint Analysis

{{#each touchpoints}}

### {{this.id}}: {{this.name}}

#### Overview

| Attribute | Value |
|-----------|-------|
| **Touchpoint ID** | {{this.id}} |
| **Touchpoint Name** | {{this.name}} |
| **Journey Stage** | {{this.stage}} |
| **Channel** | {{this.channel}} |
| **Linked Process Steps** | {{this.linked_process_steps}} |
| **Owner/Responsible** | {{this.owner}} |
| **Moment That Matters?** | {{this.is_moment_that_matters}} |

#### Client Perspective

> *What does the client SEE, DO, and FEEL at this touchpoint?*

**What Client SEES:**
{{this.what_client_sees}}

**What Client DOES:**
{{this.what_client_does}}

**What Client FEELS:**
{{this.what_client_feels}}

**Client Goal at This Point:**
{{this.client_goal}}

#### Effort Analysis

> *How much effort does this touchpoint require from the client?*

| Effort Component | Count/Value | CES Weight | Weighted Score |
|------------------|-------------|------------|----------------|
| Actions Required | {{this.actions_count}} | 1.0 | {{this.actions_weighted}} |
| Documents/Info Provided | {{this.documents_count}} | 1.5 | {{this.documents_weighted}} |
| Information Requests | {{this.info_requests_count}} | 1.0 | {{this.info_requests_weighted}} |
| Follow-ups Needed | {{this.follow_ups_count}} | 2.0 | {{this.follow_ups_weighted}} |
| Time Investment (minutes) | {{this.time_minutes}} | 0.5 | {{this.time_weighted}} |
| **Touchpoint CES** | | | **{{this.touchpoint_ces}}** |

**Effort Description:**
{{this.effort_description}}

#### Wait Time Analysis

> *Does the client wait at or after this touchpoint?*

| Attribute | Value |
|-----------|-------|
| **Wait Before This Touchpoint** | {{this.wait_before}} |
| **Wait After This Touchpoint** | {{this.wait_after}} |
| **Proactive Communication During Wait** | {{this.proactive_communication}} |
| **Client Anxiety Level During Wait** | {{this.anxiety_level}} |

#### Channel Details

> *How does the client interact at this touchpoint?*

| Attribute | Value |
|-----------|-------|
| **Primary Channel** | {{this.primary_channel}} |
| **Alternative Channels** | {{this.alternative_channels}} |
| **Channel Switching Required** | {{this.channel_switch_required}} |
| **Self-Service Available** | {{this.self_service_available}} |
| **Digital vs Human** | {{this.digital_or_human}} |

#### Experience Quality

> *Current state of client experience at this touchpoint*

**Positive Aspects:**
{{this.positive_aspects}}

**Negative Aspects:**
{{this.negative_aspects}}

**Client Complaints (if any):**
{{this.client_complaints}}

**NPS Impact (estimated):**
{{this.nps_impact}}

#### Exception Handling

> *What happens when things go wrong at this touchpoint?*

**Common Exceptions:**
{{this.common_exceptions}}

**Client Notification Method:**
{{this.exception_notification}}

**Recovery Experience:**
{{this.recovery_experience}}

#### Linked Friction Points

> *Friction points (FP#) associated with this touchpoint*

| FP# | Friction Point | Severity | Status |
|-----|----------------|----------|--------|
{{this.linked_friction_table}}

#### Linked Process Steps

> *Operational process steps (PS#) that this touchpoint maps to*

| PS# | Process Step | Visible to Client? |
|-----|--------------|-------------------|
{{this.linked_steps_table}}

#### Enhancement Opportunities

> *Initial improvement ideas for this touchpoint*

{{this.enhancement_opportunities}}

#### Moment That Matters Assessment

> *Is this a critical touchpoint that disproportionately defines client perception?*

| Criteria | Assessment |
|----------|------------|
| **First Impression?** | {{this.is_first_impression}} |
| **Decision Point?** | {{this.is_decision_point}} |
| **Problem Resolution?** | {{this.is_problem_resolution}} |
| **High Emotional Stakes?** | {{this.is_high_emotion}} |
| **Moment That Matters Score** | {{this.mtm_score}} / 5 |

{{#if this.is_moment_that_matters}}
**Why This Matters:**
{{this.why_moment_matters}}

**Protection Priority:**
{{this.protection_priority}}
{{/if}}

#### Transformation Considerations

> *What should the Transformation Agent consider when redesigning this touchpoint?*

**Must Preserve:**
{{this.must_preserve}}

**Can Optimize:**
{{this.can_optimize}}

**Dependencies:**
{{this.dependencies}}

---

{{/each}}

## Touchpoint Patterns & Themes

### Channel Distribution

> *How touchpoints are distributed across channels*

| Channel | Touchpoint Count | % of Journey | CES Contribution |
|---------|------------------|--------------|------------------|
{{channel_distribution_table}}

### Digital vs Human Balance

> *Automation and human assistance balance*

{{digital_human_analysis}}

### Self-Service Opportunities

> *Touchpoints that could be converted to self-service*

| JT# | Touchpoint | Current Mode | Self-Service Feasibility | Estimated CES Reduction |
|-----|------------|--------------|--------------------------|------------------------|
{{self_service_opportunities_table}}

### Wait Point Analysis

> *Summary of all wait points in the journey*

| JT# | Touchpoint | Wait Duration | Communication | Anxiety Level | Improvement Priority |
|-----|------------|---------------|---------------|---------------|---------------------|
{{wait_points_table}}

---

## Journey Stage Analysis

{{#each stages}}

### Stage: {{this.name}}

| Attribute | Value |
|-----------|-------|
| **Stage Name** | {{this.name}} |
| **Touchpoints in Stage** | {{this.touchpoint_count}} |
| **Stage CES** | {{this.stage_ces}} |
| **Client Goal** | {{this.client_goal}} |
| **Success Indicator** | {{this.success_indicator}} |

**Touchpoints in This Stage:**
{{this.touchpoint_list}}

**Stage Friction Summary:**
{{this.friction_summary}}

---

{{/each}}

## CES Contribution Analysis

### Top CES Contributors

> *Touchpoints with highest client effort - priority for optimization*

| Rank | JT# | Touchpoint | CES Contribution | % of Total |
|------|-----|------------|------------------|------------|
{{top_ces_contributors_table}}

### CES Reduction Opportunities

> *Where can we most effectively reduce client effort?*

| JT# | Touchpoint | Current CES | Potential Reduction | Method |
|-----|------------|-------------|---------------------|--------|
{{ces_reduction_opportunities_table}}

---

## Input for Downstream Agents

### For Transformation Agent

> *Key touchpoints to redesign in TO-BE*

{{transformation_agent_input}}

### For Friction Points Detail

> *Touchpoints with associated friction requiring deep analysis*

{{friction_detail_input}}

### For Channel Optimization

> *Channel-specific insights*

{{channel_optimization_input}}

---

## Change Log

| Date | Contributor | Role | Changes |
|------|-------------|------|---------|
| {{date}} | {{contributor_name}} | {{contributor_role}} | Initial touchpoint analysis |

---

_Generated by ProcessMiner Client Journey Analyst_
_Document ID: {{document_id}}-touchpoints_
