# Market Trends Analysis: {{process_name}}

**Process ID:** {{process_id}}
**Document Type:** Market Trends Detail Log
**Last Updated:** {{date}}
**Related Document:** [Innovation Analysis](./innovation-analysis-documentation.md)

---

## Executive Summary

{{trends_executive_summary}}

### Key Metrics

| Metric | Value |
|--------|-------|
| Total Market Trends | {{total_trends}} |
| Emerging Trends | {{emerging_count}} |
| Accelerating Trends | {{accelerating_count}} |
| Mature Trends | {{mature_count}} |
| Declining Trends | {{declining_count}} |
| High Relevance | {{high_relevance_count}} |

---

## Market Trends Summary Table

> **Quick Reference:** All identified market trends with maturity and relevance at a glance. Click any TR# for full details below.

| TR# | Trend Name | Category | Maturity | Relevance | Impact Potential | Source |
|-----|------------|----------|----------|-----------|------------------|--------|
{{trends_summary_table}}

---

## Trend Statistics

| Metric | Value |
|--------|-------|
| Total Market Trends | {{total_trends}} |
| Technology Trends | {{technology_trend_count}} |
| Regulatory Trends | {{regulatory_trend_count}} |
| Customer Behavior Trends | {{customer_trend_count}} |
| Industry Trends | {{industry_trend_count}} |
| Competitive Trends | {{competitive_trend_count}} |

---

## Trends by Maturity

| Maturity | Count | High Relevance | Medium Relevance | Low Relevance |
|----------|-------|----------------|------------------|---------------|
| Emerging | {{emerging_count}} | {{emerging_high}} | {{emerging_medium}} | {{emerging_low}} |
| Accelerating | {{accelerating_count}} | {{accelerating_high}} | {{accelerating_medium}} | {{accelerating_low}} |
| Mature | {{mature_count}} | {{mature_high}} | {{mature_medium}} | {{mature_low}} |
| Declining | {{declining_count}} | {{declining_high}} | {{declining_medium}} | {{declining_low}} |

---

## Trends by Category

| Category | Count | Description |
|----------|-------|-------------|
| Technology | {{technology_count}} | Technology shifts affecting this process domain |
| Regulatory | {{regulatory_count}} | Regulatory changes and compliance trends |
| Customer Behavior | {{customer_count}} | Evolving customer expectations and behaviors |
| Industry | {{industry_count}} | Broader industry structural changes |
| Competitive | {{competitive_count}} | Competitor-driven market movements |

---

## Trend Heatmap

```mermaid
{{trend_heatmap}}
```

> *Maturity (X-axis) vs. Relevance (Y-axis) — prioritize upper-left quadrant*

---

## Detailed Market Trends

{{#each trends}}

### {{this.id}}: {{this.name}}

#### Overview

| Attribute | Value |
|-----------|-------|
| **Trend ID** | {{this.id}} |
| **Trend Name** | {{this.name}} |
| **Category** | {{this.category}} |
| **Maturity** | {{this.maturity}} |
| **Maturity Trajectory** | {{this.maturity_trajectory}} |
| **Relevance** | {{this.relevance}} |
| **Impact Potential** | {{this.impact_potential}} |
| **Source** | {{this.source}} |
| **Date Identified** | {{this.date_identified}} |
| **Last Reviewed** | {{this.last_reviewed}} |
| **Next Review Date** | {{this.next_review_date}} |

#### Description

> *What is this trend? What forces are driving it?*

{{this.description}}

#### Drivers

> *Key factors accelerating or sustaining this trend*

{{this.drivers}}

#### Evidence

> *Data, reports, or observations supporting this trend's existence and trajectory*

{{this.evidence}}

#### Timeline

> *Expected evolution of this trend*

| Timeframe | Expected State | Confidence |
|-----------|----------------|------------|
| 6 months | {{this.timeline_6mo}} | {{this.confidence_6mo}} |
| 12 months | {{this.timeline_12mo}} | {{this.confidence_12mo}} |
| 24 months | {{this.timeline_24mo}} | {{this.confidence_24mo}} |

#### Applicability to This Process

> *How does this trend affect the process being analyzed?*

**Impact Areas:**
{{this.impact_areas}}

**Affected Process Steps:** {{this.affected_steps}}

**Urgency:** {{this.urgency}}

#### Related Innovations

> *Innovation ideas (II#) that address or leverage this trend*

{{this.related_innovations}}

#### Competitive Response

> *How are competitors responding to this trend?*

{{this.competitive_response}}

#### Recommended Actions

> *What should we do about this trend?*

{{this.recommended_actions}}

---

{{/each}}

## Trend Clusters

> *Grouping of related trends for strategic planning*

{{trend_clusters}}

---

## Emerging Signals

> *Weak signals that may become significant trends*

{{emerging_signals}}

---

## Gaps Identified

> *Trend areas not yet adequately researched*

{{trend_gaps}}

---

## Competitive Landscape Summary

> *Overview of competitor positioning relative to identified trends*

{{competitive_landscape_summary}}

---

## Research Sources

| Source | Type | Credibility | Last Accessed |
|--------|------|-------------|---------------|
{{research_sources_table}}

---

## Change Log

| Date | Contributor | Role | Changes |
|------|-------------|------|---------|
| {{date}} | {{contributor_name}} | {{contributor_role}} | Initial market trends capture |

---

_Generated by ProcessMiner Innovation Analyst_
_Document ID: {{document_id}}-trends_
