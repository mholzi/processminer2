# SIPOC Analysis: {{process_name}}

**Process ID:** {{process_id}}
**Document Type:** SIPOC — Supplier-Input-Process-Output-Customer Mapping
**Related Document:** [AS-IS Process Documentation](./as-is-process-documentation.md)
**Last Updated:** {{date}}
**Version:** {{version}}
**Status:** {{status}}

---

## Executive Summary

{{sipoc_executive_summary}}

### Key Metrics

| Metric | Value |
|--------|-------|
| Unique Suppliers | {{total_suppliers}} |
| Input Categories | {{total_inputs}} |
| Core Process Steps (from AS-IS) | {{total_process_steps}} |
| Output Categories | {{total_outputs}} |
| Customer Segments | {{total_customers}} |
| Boundary Issues Identified | {{boundary_issues_count}} |
| Interface Gaps | {{interface_gaps_count}} |

---

## How to Read This Document

> This document maps the **SIPOC ecosystem** around the {{process_name}} process.
> It extends the AS-IS documentation by looking BEYOND process boundaries — who
> feeds into this process, what they provide, what comes out, and who receives it.
>
> **Why SIPOC after AS-IS?** The AS-IS captures internal mechanics. SIPOC reveals
> the external ecosystem. Together they provide the complete picture needed for
> transformation.
>
> **Companion Documents:**
> - [AS-IS Process Documentation](./as-is-process-documentation.md) — Internal process view
> - [Pain Point Details](./pain-points-detail.md) — Issues linked to supplier/customer interfaces
>
> **Cross-Reference IDs:**
> - **SUP#** — Supplier entry
> - **INP#** — Input entry
> - **OUT#** — Output entry
> - **CUS#** — Customer entry
> - References: PS# (process steps), SYS# (systems), PP# (pain points)

---

## 1. SIPOC Overview Diagram

> **About this section:** The classic SIPOC table — one-page view of the entire ecosystem.

### 1.1 SIPOC Summary Table

| SUP# | Supplier | INP# | Input | PS# Range | OUT# | Output | CUS# | Customer |
|------|----------|------|-------|-----------|------|--------|------|----------|
{{sipoc_summary_table}}

### 1.2 SIPOC Visual Flow

```mermaid
{{sipoc_flow_diagram}}
```

> **Section Confidence:** {{section_1_confidence}} | **Basis:** {{section_1_confidence_basis}}

---

## 2. Suppliers Detail

> **About this section:** Who or what feeds into this process? Internal teams,
> external parties, systems, regulatory bodies.

### 2.1 Supplier Registry

| SUP# | Supplier Name | Type | Category | Provides (INP#) | Interface Method | Reliability | SLA |
|------|---------------|------|----------|------------------|-----------------|-------------|-----|
{{supplier_registry_table}}

**Supplier Types:** `Internal Team` | `External Partner` | `Regulatory Body` | `System/Automated` | `Client/Self-Service`

### 2.2 Supplier Details

{{#each suppliers}}

#### {{this.id}}: {{this.name}}

| Attribute | Value |
|-----------|-------|
| **Supplier ID** | {{this.id}} |
| **Name** | {{this.name}} |
| **Type** | {{this.type}} |
| **Category** | {{this.category}} |
| **Department/Entity** | {{this.entity}} |
| **Contact/Owner** | {{this.contact}} |
| **Provides** | {{this.provides}} |
| **Interface Method** | {{this.interface_method}} |
| **Frequency** | {{this.frequency}} |
| **Reliability Rating** | {{this.reliability}} |
| **SLA (if applicable)** | {{this.sla}} |

**What They Supply:**
{{this.supply_description}}

**Quality Issues:**
{{this.quality_issues}}

**Dependency Strength:** {{this.dependency_strength}}
> How critical is this supplier? What happens if they're late/unavailable?

{{this.dependency_impact}}

**Related Pain Points:** {{this.related_pain_points}}

**Related Process Steps:** {{this.related_steps}}

---

{{/each}}

### 2.3 Supplier Dependency Matrix

| SUP# | Supplier | Criticality | Substitute Available? | Failure Impact | Failure Frequency |
|------|----------|-------------|----------------------|----------------|-------------------|
{{supplier_dependency_matrix}}

> **Section Confidence:** {{section_2_confidence}} | **Basis:** {{section_2_confidence_basis}}

---

## 3. Inputs Detail

> **About this section:** What enters the process? Documents, data, decisions,
> triggers, materials.

### 3.1 Input Registry

| INP# | Input Name | Type | From (SUP#) | Format | Quality Req | Validation | Used By (PS#) |
|------|-----------|------|-------------|--------|-------------|------------|---------------|
{{input_registry_table}}

**Input Types:** `Document` | `Data/Record` | `Decision/Approval` | `Trigger/Event` | `Material/Physical` | `Information/Verbal`

### 3.2 Input Details

{{#each inputs}}

#### {{this.id}}: {{this.name}}

| Attribute | Value |
|-----------|-------|
| **Input ID** | {{this.id}} |
| **Name** | {{this.name}} |
| **Type** | {{this.type}} |
| **Source Supplier** | {{this.source_supplier}} |
| **Format** | {{this.format}} |
| **Quality Requirements** | {{this.quality_requirements}} |
| **Validation Method** | {{this.validation_method}} |
| **Used By Process Steps** | {{this.used_by_steps}} |
| **Frequency** | {{this.frequency}} |
| **Volume** | {{this.volume}} |

**Description:**
{{this.description}}

**Quality Issues Observed:**
{{this.quality_issues}}

**What Happens When Missing/Late:**
{{this.missing_impact}}

**Data Sensitivity:** {{this.data_sensitivity}}

**Regulatory Requirements:** {{this.regulatory_requirements}}

**Related Controls:** {{this.related_controls}}

---

{{/each}}

### 3.3 Input Quality Matrix

| INP# | Input | Expected Quality | Actual Quality | Gap | Impact |
|------|-------|------------------|----------------|-----|--------|
{{input_quality_matrix}}

> **Section Confidence:** {{section_3_confidence}} | **Basis:** {{section_3_confidence_basis}}

---

## 4. Process (Summary from AS-IS)

> **About this section:** The process column is NOT re-documented here — it
> references the AS-IS documentation. This section maps which steps consume
> which inputs and produce which outputs.

### 4.1 Step-to-Input/Output Mapping

| PS# | Step Name | Inputs Consumed (INP#) | Outputs Produced (OUT#) | Transformation |
|-----|-----------|------------------------|-------------------------|----------------|
{{step_io_mapping_table}}

### 4.2 Process Boundary Definition

**Process Start Trigger:** {{process_start_trigger}}
**Process Start Condition:** {{process_start_condition}}
**Process End Trigger:** {{process_end_trigger}}
**Process End Condition:** {{process_end_condition}}

**In Scope:**
{{in_scope}}

**Out of Scope:**
{{out_of_scope}}

**Boundary Ambiguities:**
{{boundary_ambiguities}}

> **Section Confidence:** {{section_4_confidence}} | **Basis:** {{section_4_confidence_basis}}

---

## 5. Outputs Detail

> **About this section:** What does this process produce? Documents, decisions,
> data records, notifications, physical deliverables.

### 5.1 Output Registry

| OUT# | Output Name | Type | Produced By (PS#) | Format | Delivered To (CUS#) | SLA | Quality Metric |
|------|-----------|------|-------------------|--------|---------------------|-----|----------------|
{{output_registry_table}}

**Output Types:** `Document` | `Data/Record` | `Decision/Status` | `Notification` | `Deliverable/Physical` | `Handoff/Trigger`

### 5.2 Output Details

{{#each outputs}}

#### {{this.id}}: {{this.name}}

| Attribute | Value |
|-----------|-------|
| **Output ID** | {{this.id}} |
| **Name** | {{this.name}} |
| **Type** | {{this.type}} |
| **Produced By Step** | {{this.produced_by}} |
| **Format** | {{this.format}} |
| **Delivered To** | {{this.delivered_to}} |
| **Delivery Method** | {{this.delivery_method}} |
| **SLA** | {{this.sla}} |
| **Quality Metric** | {{this.quality_metric}} |
| **Frequency** | {{this.frequency}} |
| **Volume** | {{this.volume}} |

**Description:**
{{this.description}}

**Quality Requirements:**
{{this.quality_requirements}}

**What Happens When Defective:**
{{this.defective_impact}}

**Downstream Dependencies:**
{{this.downstream_dependencies}}

**Regulatory Requirements:** {{this.regulatory_requirements}}

---

{{/each}}

### 5.3 Output Quality Matrix

| OUT# | Output | Quality Target | Actual Quality | Gap | Customer Impact |
|------|--------|----------------|----------------|-----|-----------------|
{{output_quality_matrix}}

> **Section Confidence:** {{section_5_confidence}} | **Basis:** {{section_5_confidence_basis}}

---

## 6. Customers Detail

> **About this section:** Who receives the outputs? Internal teams, external
> clients, regulators, downstream processes.

### 6.1 Customer Registry

| CUS# | Customer Name | Type | Segment | Receives (OUT#) | Channel | Satisfaction | Feedback Method |
|------|---------------|------|---------|-----------------|---------|-------------|-----------------|
{{customer_registry_table}}

**Customer Types:** `Internal Team` | `External Client` | `Regulatory Body` | `Downstream Process` | `Management/Reporting`

### 6.2 Customer Details

{{#each customers}}

#### {{this.id}}: {{this.name}}

| Attribute | Value |
|-----------|-------|
| **Customer ID** | {{this.id}} |
| **Name** | {{this.name}} |
| **Type** | {{this.type}} |
| **Segment** | {{this.segment}} |
| **Receives** | {{this.receives}} |
| **Delivery Channel** | {{this.channel}} |
| **Expectations** | {{this.expectations}} |
| **Satisfaction Level** | {{this.satisfaction}} |
| **Feedback Method** | {{this.feedback_method}} |

**What They Need:**
{{this.needs}}

**What They Actually Get:**
{{this.actual_experience}}

**Gap (Need vs Reality):**
{{this.gap_description}}

**Voice of Customer (if available):**
{{this.voice_of_customer}}

**Related Friction Points:** {{this.related_friction_points}}

**Related Pain Points:** {{this.related_pain_points}}

---

{{/each}}

### 6.3 Customer Satisfaction Matrix

| CUS# | Customer | Expectation | Current Performance | Gap | Priority |
|------|----------|-------------|---------------------|-----|----------|
{{customer_satisfaction_matrix}}

> **Section Confidence:** {{section_6_confidence}} | **Basis:** {{section_6_confidence_basis}}

---

## 7. Interface & Boundary Analysis

> **About this section:** This is the SIPOC value-add — analyzing the interfaces
> between suppliers/customers and the process reveals issues invisible in the AS-IS.

### 7.1 Interface Issues

| IF# | Interface | Type | Issue | Impact | Related PP# | Recommendation |
|-----|-----------|------|-------|--------|-------------|----------------|
{{interface_issues_table}}

**Interface Types:** `Supplier→Process` | `Process→Customer` | `System→System` | `Team→Team`

### 7.2 Boundary Discrepancies

> Differences between what the AS-IS documents say vs what SIPOC reveals

| BD# | Discrepancy | AS-IS Says | SIPOC Reveals | Impact | Resolution |
|-----|-------------|-----------|---------------|--------|------------|
{{boundary_discrepancy_table}}

### 7.3 Missing Stakeholders

> Suppliers or customers discovered through SIPOC that aren't in the AS-IS

{{missing_stakeholders}}

### 7.4 Hidden Dependencies

> Dependencies that only become visible through the SIPOC lens

{{hidden_dependencies}}

### 7.5 Quick Wins

> Interface improvements that are low-effort and high-value — implementable within 30 days with no external dependencies.

| Opportunity | Effort | Impact | Barrier | Owner |
|-------------|--------|--------|---------|-------|
{{quick_wins_table}}

**Quick Win Criteria:**
- Implementable within 30 days
- No external dependencies
- Visible improvement to customers or process performers

> **Section Confidence:** {{section_7_confidence}} | **Basis:** {{section_7_confidence_basis}}

---

## 8. Cross-Reference Reconciliation

> **About this section:** Maps SIPOC findings back to AS-IS items for traceability.

### 8.1 New Pain Points Discovered

| PP# (new) | Pain Point | Discovered Via | SIPOC Reference |
|-----------|------------|----------------|-----------------|
{{new_pain_points}}

### 8.2 New System Dependencies Discovered

| SYS# (new) | System | Role | SIPOC Reference |
|------------|--------|------|-----------------|
{{new_systems}}

### 8.3 Enrichments to Existing Items

| Existing ID | Enrichment | Source |
|-------------|-----------|--------|
{{enrichments}}

### 8.4 SIPOC Completeness Assessment

| Section | Confidence | [PREFILLED] Count | Critical Gaps | Readiness |
|---------|------------|-------------------|---------------|-----------|
| Suppliers | {{sup_conf}}% | {{sup_prefilled}} | {{sup_gaps}} | {{sup_readiness}} |
| Inputs | {{inp_conf}}% | {{inp_prefilled}} | {{inp_gaps}} | {{inp_readiness}} |
| Process | {{proc_conf}}% | {{proc_prefilled}} | {{proc_gaps}} | {{proc_readiness}} |
| Outputs | {{out_conf}}% | {{out_prefilled}} | {{out_gaps}} | {{out_readiness}} |
| Customers | {{cus_conf}}% | {{cus_prefilled}} | {{cus_gaps}} | {{cus_readiness}} |
| Interface Analysis | {{if_conf}}% | {{if_prefilled}} | {{if_gaps}} | {{if_readiness}} |

> **Overall SIPOC Readiness:** {{overall_readiness}}%
> **Critical Gaps for SME Review:** {{critical_gap_list}}

---

## Input for Downstream Agents

### For Transformation Agent
{{transformation_input}}

### For CX Journey Agent
{{cx_input}}

### For IT Architect
{{it_architect_input}}

### For Innovation Agent
{{innovation_input}}

---

## Change Log

| Version | Date | Contributor | Role | Changes |
|---------|------|-------------|------|---------|
| {{version}} | {{date}} | {{contributor_name}} | {{contributor_role}} | Initial SIPOC analysis |

---

_Generated by ProcessMiner Process Documentation Analyst_
_Document ID: {{document_id}}-sipoc_
