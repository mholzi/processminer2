# Innovation Ideas Backlog: {{process_name}}

**Process ID:** {{process_id}}
**Document Type:** Innovation Ideas Detail Log
**Last Updated:** {{date}}
**Related Document:** [Innovation Analysis](./innovation-analysis.md)

---

## Executive Summary

{{innovation_executive_summary}}

### Key Metrics

| Metric | Value |
|--------|-------|
| Total Innovation Ideas | {{total_innovations}} |
| High Priority (MUST HAVE) | {{must_have_count}} |
| Medium Priority (SHOULD HAVE) | {{should_have_count}} |
| Low Priority (COULD HAVE) | {{could_have_count}} |
| Deferred | {{defer_count}} |

---

## Innovation Ideas Summary Table

> **Quick Reference:** All captured innovation ideas with strategic alignment at a glance. Click any II# for full details below.

| II# | Innovation Name | Category | Source | Strategic Fit | Feasibility | Status |
|-----|-----------------|----------|--------|---------------|-------------|--------|
{{innovation_summary_table}}

---

## Innovation Statistics

| Metric | Value |
|--------|-------|
| Total Innovation Ideas | {{total_innovations}} |
| Process Innovations | {{process_innovation_count}} |
| Technology Innovations | {{technology_innovation_count}} |
| Business Model Innovations | {{business_model_count}} |
| Customer Experience Innovations | {{cx_innovation_count}} |
| High Strategic Fit | {{high_fit_count}} |
| Ready for Implementation | {{ready_count}} |
| Requires Further Analysis | {{analysis_needed_count}} |

---

## Innovation by Category

| Category | Count | High Fit | Medium Fit | Low Fit |
|----------|-------|----------|------------|---------|
| Process | {{process_count}} | {{process_high}} | {{process_medium}} | {{process_low}} |
| Technology | {{tech_count}} | {{tech_high}} | {{tech_medium}} | {{tech_low}} |
| Business Model | {{bm_count}} | {{bm_high}} | {{bm_medium}} | {{bm_low}} |
| Customer Experience | {{cx_count}} | {{cx_high}} | {{cx_medium}} | {{cx_low}} |

---

## Innovation by Source

| Source | Count | Description |
|--------|-------|-------------|
| Market Trend | {{market_trend_count}} | Identified from industry trends and analyst reports |
| Competitor | {{competitor_count}} | Observed from competitor analysis |
| Internal | {{internal_count}} | Suggested by staff, leadership, or internal teams |
| Customer Feedback | {{customer_count}} | Requested or implied by customer interactions |

---

## Detailed Innovation Ideas

{{#each innovations}}

### {{this.id}}: {{this.name}}

#### Overview

| Attribute | Value |
|-----------|-------|
| **Innovation ID** | {{this.id}} |
| **Innovation Name** | {{this.name}} |
| **Category** | {{this.category}} |
| **Source** | {{this.source}} |
| **Strategic Fit** | {{this.strategic_fit}} |
| **Related Process Step(s)** | {{this.process_steps}} |
| **Confidence Level** | {{this.confidence}} |
| **Date Captured** | {{this.date_captured}} |
| **Contributor** | {{this.contributor}} |

#### Description

> *What is this innovation idea? What problem does it solve?*

{{this.description}}

#### Business Case

> *Why should we pursue this innovation?*

**Problem Addressed:**
{{this.problem_addressed}}

**Expected Benefits:**
{{this.expected_benefits}}

**Target Outcomes:**
{{this.target_outcomes}}

#### Feasibility Assessment

> *Six-dimension feasibility scoring*

| Dimension | Score (1-5) | Notes |
|-----------|-------------|-------|
| Technical Feasibility | {{this.technical_score}} | {{this.technical_notes}} |
| Business Value | {{this.business_score}} | {{this.business_notes}} |
| Strategic Alignment | {{this.strategic_score}} | {{this.strategic_notes}} |
| Resource Availability | {{this.resource_score}} | {{this.resource_notes}} |
| Risk Level | {{this.risk_score}} | {{this.risk_notes}} |
| Customer Impact | {{this.customer_score}} | {{this.customer_notes}} |
| **Total Score** | **{{this.total_score}}** | |

#### Related Items

> *Cross-references to other captured items*

**Related Pain Points:** {{this.related_pain_points}}

**Related Enhancement Ideas:** {{this.related_enhancements}}

**Related Market Trends:** {{this.related_trends}}

**Related Regulations:** {{this.related_regulations}}

#### Recommendation

> *Next steps for this innovation*

**Recommended Action:** {{this.recommended_action}}

**MoSCoW Priority:** {{this.moscow_priority}}

---

{{/each}}

## Priority Matrix

### Quick Wins (High Feasibility + High Impact)

> *Innovations to implement first - immediate value, low complexity*

| II# | Innovation Name | Total Score | Recommendation |
|-----|-----------------|-------------|----------------|
{{quick_wins_table}}

### Strategic Bets (Low Feasibility + High Impact)

> *Significant innovations requiring investment - high value, higher complexity*

| II# | Innovation Name | Total Score | Recommendation |
|-----|-----------------|-------------|----------------|
{{strategic_bets_table}}

### Fill-Ins (High Feasibility + Low Impact)

> *Nice-to-haves if resources permit*

| II# | Innovation Name | Total Score | Recommendation |
|-----|-----------------|-------------|----------------|
{{fill_ins_table}}

### Reconsider (Low Feasibility + Low Impact)

> *May not be worth the investment at this time*

| II# | Innovation Name | Total Score | Recommendation |
|-----|-----------------|-------------|----------------|
{{reconsider_table}}

---

## Innovation Themes

> *Grouping of related innovations for strategic planning*

{{innovation_themes}}

---

## Gaps Identified

> *Innovation opportunities not yet captured*

{{innovation_gaps}}

---

## Recommendations

### Low Complexity / High Value

> *Innovations recommended for immediate pursuit*

{{low_complexity_high_value}}

### Strategic Bets

> *Significant innovations requiring investment and commitment*

{{strategic_bets_recommendations}}

### Future Consideration

> *Innovations to revisit when conditions change*

{{future_consideration}}

---

## Change Log

| Date | Contributor | Role | Changes |
|------|-------------|------|---------|
| {{date}} | {{contributor_name}} | {{contributor_role}} | Initial innovation ideas capture |

---

_Generated by ProcessMiner Innovation Analyst_
_Document ID: {{document_id}}-innovations_
