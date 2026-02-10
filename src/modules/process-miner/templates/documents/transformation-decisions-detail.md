# Transformation Decisions Detail: {{process_name}}

**Document Type:** Transformation Decision Log (Detail)
**Process ID:** {{process_id}}
**Transformation ID:** {{transformation_id}}
**Document Owner:** {{document_owner}}
**Last Updated:** {{date}}
**Version:** {{version}}

---

## Executive Summary

{{executive_summary}}

### Decision Statistics

| Metric | Value |
|--------|-------|
| Total Decisions Logged | {{total_decisions}} |
| Strategic Scope | {{strategic_decisions}} |
| Tactical Scope | {{tactical_decisions}} |
| Operational Scope | {{operational_decisions}} |
| Active Decisions | {{active_decisions}} |
| Deferred Decisions | {{deferred_decisions}} |

---

## How to Read This Document

> This document provides **detailed analysis** of all transformation decisions (TD#) made during TO-BE design. Each decision includes alternatives considered, evaluation criteria, rationale, and impact assessment.
>
> **Parent Document:** [Target State Documentation](./target-state-documentation.md)
>
> **Decision Classification (Three Dimensions):**
>
> *Scope:*
> - **Strategic** — Fundamental design direction affecting multiple areas
> - **Tactical** — Specific implementation choices within a design direction
> - **Operational** — Day-to-day process execution decisions
>
> *Characteristics (may apply to any scope):*
> - **Trade-off** — Balancing competing demands (efficiency vs control, etc.)
> - **Constrained** — Shaped by external constraints (regulatory, technical, budgetary)
> - **Time-bound** — Driven by a deadline or time-sensitive trigger
>
> *Status:*
> - **Proposed** / **Under Review** / **Active** / **Approved** / **Implemented** / **Deferred** / **Rejected** / **Superseded**

---

## Decision Catalog

### Decision Summary Table

| TD# | Decision Title | Scope | Characteristics | AS-IS Impact | Stakeholders | Status |
|-----|----------------|-------|-----------------|--------------|--------------|--------|
{{decision_summary_table}}

---

## Detailed Decision Records

{{#each decisions}}

### TD#{{this.id}}: {{this.title}}

#### Decision Overview

| Attribute | Value |
|-----------|-------|
| **Decision ID** | TD#{{this.id}} |
| **Scope** | {{this.scope}} |
| **Characteristics** | {{this.characteristics}} |
| **Decision Date** | {{this.date}} |
| **Decision Maker** | {{this.decision_maker}} |
| **Status** | {{this.status}} |
| **Confidence** | {{this.confidence}} |
| **Uncertainty Source** | {{this.uncertainty_source}} |
| **Revisit Trigger** | {{this.revisit_trigger}} |

#### Context and Problem Statement

{{this.context}}

#### Decision Drivers

{{#each this.drivers}}
- **{{this.driver}}:** {{this.description}}
{{/each}}

#### Alternatives Considered

| Option | Description | Pros | Cons |
|--------|-------------|------|------|
{{this.alternatives_table}}

#### Evaluation Criteria

| Criterion | Weight | Option A | Option B | Option C |
|-----------|--------|----------|----------|----------|
{{this.evaluation_matrix}}

#### Decision

**Selected Option:** {{this.selected_option}}

**Rationale:**
{{this.rationale}}

#### Constraints Applied

| Constraint | Type | Source | Impact on Decision |
|------------|------|--------|-------------------|
{{this.constraints_table}}

#### Impact Assessment

| Impact Area | Description | Severity |
|-------------|-------------|----------|
{{this.impact_table}}

#### AS-IS References Affected

| Reference | Type | Change |
|-----------|------|--------|
{{this.asis_references_affected}}

#### TO-BE References Created/Modified

| Reference | Type | Description |
|-----------|------|-------------|
{{this.tobe_references}}

#### Consequences

**Positive:**
{{this.consequences_positive}}

**Negative:**
{{this.consequences_negative}}

#### Trade-offs Accepted

{{this.tradeoffs_accepted}}

#### Risks and Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
{{this.risks_table}}

#### Stakeholder Input

| Stakeholder | Input | Incorporated |
|-------------|-------|--------------|
{{this.stakeholder_input_table}}

#### Decision Dependencies

| Relationship | TD# | Reason |
|--------------|-----|--------|
{{this.dependencies_table}}

#### Related Decisions

{{this.related_decisions}}

#### Key Assumptions

| Assumption | Validation Status | Invalidation Impact |
|------------|-------------------|---------------------|
{{this.assumptions_table}}

#### Validation Implications

{{this.validation_implications}}

---

{{/each}}

## Trade-off Analysis

> **About this section:** Consolidated view of all trade-offs made during transformation design.

### Trade-off Summary

| Trade-off | Competing Demands | Decision | Rationale |
|-----------|-------------------|----------|-----------|
{{tradeoff_summary_table}}

### Trade-off Details

{{#each tradeoffs}}

#### {{this.title}}

**Competing Demands:**
- **Demand A:** {{this.demand_a}}
- **Demand B:** {{this.demand_b}}

**Analysis:**
{{this.analysis}}

**Decision:**
{{this.decision}}

**Accepted Compromise:**
{{this.compromise}}

**Linked TD#:** {{this.linked_td}}

---

{{/each}}

## Deferred Decisions

> **About this section:** Decisions postponed for future consideration with rationale.

### Deferred Decision Summary

| TD# | Decision | Reason Deferred | Trigger for Revisit | Target Date |
|-----|----------|-----------------|---------------------|-------------|
{{deferred_decisions_table}}

### Decision Debt Summary

| Debt Category | Count | Weighted Risk | Top Items |
|---------------|-------|---------------|-----------|
{{decision_debt_table}}

### Deferred Decision Details

{{#each deferred}}

#### TD#{{this.id}}: {{this.title}} (DEFERRED)

**Context:**
{{this.context}}

**Reason for Deferral:**
{{this.deferral_reason}}

**Prerequisites for Decision:**
{{this.prerequisites}}

**Trigger for Revisit:**
{{this.revisit_trigger}}

**Target Revisit Date:** {{this.target_date}}

**Interim Approach:**
{{this.interim_approach}}

---

{{/each}}

## Decision Patterns and Themes

> **About this section:** Patterns observed across transformation decisions.

### Common Themes

{{decision_themes}}

### Design Principles Emerging

{{emerging_principles}}

### Decision Dependency Map

{{dependency_mermaid_diagram}}

### Consistency Check

| Principle | Decisions Aligned | Decisions Conflicting | Resolution |
|-----------|-------------------|----------------------|------------|
{{consistency_check_table}}

---

## Assumptions Register

> **About this section:** Consolidated view of all assumptions across decisions for cross-decision tracking.

### Active Assumptions

| Assumption | Source TD# | Validation Status | Invalidation Impact |
|------------|-----------|-------------------|---------------------|
{{active_assumptions_table}}

### Invalidated Assumptions

| Assumption | Source TD# | Date Invalidated | Decisions Affected | Action Taken |
|------------|-----------|------------------|-------------------|--------------|
{{invalidated_assumptions_table}}

---

## Decision Audit Trail

### Decision Timeline

| Date | TD# | Decision | Category | Outcome |
|------|-----|----------|----------|---------|
{{decision_timeline}}

### Decision Revisions

| TD# | Original Decision | Revision Date | Revised Decision | Reason |
|-----|-------------------|---------------|------------------|--------|
{{decision_revisions_table}}

---

## Document Metadata

**SME Contributors:** {{sme_contributors}}
**Decision Sessions:** {{decision_sessions}}
**Review Date:** {{review_date}}

### Linked Documents

| Document | Purpose | Link |
|----------|---------|------|
| Target State Documentation | Parent document | [target-state-documentation.md](./target-state-documentation.md) |
| Gap Resolution Log | Validation gaps | [gap-resolution-log.md](./gap-resolution-log.md) |
| AS-IS Process Documentation | Source reference | [as-is-process-documentation.md](./as-is-process-documentation.md) |

---

## Change Log

| Date | Contributor | Role | Changes |
|------|-------------|------|---------|
| {{date}} | {{contributor_name}} | {{contributor_role}} | Initial decision log |

---

## Glossary

| Term | Definition |
|------|------------|
| TD# | Transformation Decision reference |
| Scope | Decision classification dimension: Strategic, Tactical, or Operational |
| Strategic | Fundamental design direction affecting multiple areas |
| Tactical | Specific implementation choice within a design direction |
| Operational | Day-to-day process execution decision |
| Characteristics | Decision attributes: Trade-off, Constrained, or Time-bound |
| Trade-off | Decision balancing competing demands |
| Constrained | Decision shaped by external constraints |
| Time-bound | Decision driven by a deadline or time-sensitive trigger |

{{additional_glossary}}

---

_Generated by ProcessMiner Transformation Agent_
_Document ID: {{document_id}}_
