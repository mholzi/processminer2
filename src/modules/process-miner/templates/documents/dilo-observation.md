# Day In the Life Of (DILO): {{role_name}} — {{process_name}}

**Process ID:** {{process_id}}
**Document Type:** DILO — Role-Based Process Observation
**Observed Role:** {{role_name}}
**Role Owner:** {{role_owner_name}}
**Observation Date:** {{observation_date}}
**Related Document:** [AS-IS Process Documentation](./as-is-process-documentation.md)
**Last Updated:** {{date}}
**Version:** {{version}}
**Status:** {{status}}

---

## Executive Summary

{{dilo_executive_summary}}

### Key Metrics

| Metric | Value |
|--------|-------|
| Total Activities Observed | {{total_activities}} |
| Process-Related Activities | {{process_activities}} |
| Non-Process Activities | {{non_process_activities}} |
| Interruptions Logged | {{total_interruptions}} |
| Workarounds Identified | {{total_workarounds}} |
| Undocumented Steps Found | {{undocumented_steps}} |
| Time on Value-Add | {{value_add_percentage}}% |
| Time on Waste | {{waste_percentage}}% |
| Observation Duration | {{observation_duration}} |

---

## How to Read This Document

> This document captures a **Day In the Life Of** the {{role_name}} role as
> it relates to the {{process_name}} process. Unlike the AS-IS (which documents
> what SHOULD happen), DILO reveals what ACTUALLY happens — including hidden work,
> context switching, workarounds, and time waste.
>
> **Why DILO after AS-IS?** The AS-IS is the "official" process. DILO is the
> "real" process. Comparing them reveals the gap between design and reality.
>
> **This document is PER-ROLE.** Create one DILO per key role in the process.
> Multiple DILOs for the same role (different people, different days) increase
> accuracy.
>
> **Companion Documents:**
> - [AS-IS Process Documentation](./as-is-process-documentation.md) — The "official" process
> - [SIPOC Analysis](./sipoc-analysis.md) — Ecosystem view (if completed)
>
> **Cross-Reference IDs:**
> - **ACT#** — Activity observation entry
> - **INT#** — Interruption entry
> - **WA#** — Workaround entry
> - **UD#** — Undocumented step (not in AS-IS)
> - References: PS# (process steps), PP# (pain points), SYS# (systems)
>
> **Time Classification:**
> - 🟢 **Value-Add** — Directly contributes to process output
> - 🟡 **Necessary Non-Value-Add** — Required but doesn't add value (compliance, admin)
> - 🔴 **Waste** — Could be eliminated (waiting, rework, workarounds)

---

## 1. Role Profile

> **About this section:** Context about the observed role — what it should do
> vs what the DILO reveals.

### 1.1 Role Identification

| Attribute | Value |
|-----------|-------|
| **Role Title** | {{role_name}} |
| **Department** | {{department}} |
| **Reports To** | {{reports_to}} |
| **Team Size** | {{team_size}} |
| **Observation Subject** | {{subject_name}} ({{subject_experience}}) |
| **Typical Day Type** | {{day_type}} |

### 1.2 Role in Process (from AS-IS)

**Process Steps Owned:**

| PS# | Step Name | AS-IS Duration | RACI Role |
|-----|-----------|----------------|-----------|
{{role_process_steps}}

**Expected Time on This Process:** {{expected_process_time}}

### 1.3 Role in Practice (from DILO)

**Actual Time on This Process:** {{actual_process_time}}
**Gap:** {{time_gap}}

**Other Processes Worked On:**

| Process | Time Spent | Interference? |
|---------|-----------|---------------|
{{other_processes_table}}

> **Section Confidence:** {{section_1_confidence}} | **Basis:** {{section_1_confidence_basis}}

---

## 2. Timeline Observation

> **About this section:** The core DILO artifact — a minute-by-minute (or
> block-by-block) log of what actually happened.

### 2.1 Day Overview

```mermaid
{{timeline_gantt_diagram}}
```

### 2.2 Activity Timeline

| ACT# | Time Start | Time End | Duration | Activity | Category | PS# Link | System | Value Class |
|------|-----------|----------|----------|----------|----------|----------|--------|-------------|
{{activity_timeline_table}}

**Value Classification:**
- 🟢 Value-Add | 🟡 Necessary Non-Value-Add | 🔴 Waste

### 2.3 Time Distribution

| Category | Time | % of Day | Activities |
|----------|------|----------|------------|
| 🟢 Value-Add | {{value_add_time}} | {{value_add_pct}}% | {{value_add_count}} |
| 🟡 Necessary Non-Value-Add | {{nnva_time}} | {{nnva_pct}}% | {{nnva_count}} |
| 🔴 Waste | {{waste_time}} | {{waste_pct}}% | {{waste_count}} |
| ⚪ Non-Process (other work) | {{non_process_time}} | {{non_process_pct}}% | {{non_process_count}} |
| **Total** | **{{total_time}}** | **100%** | **{{total_activities}}** |

### 2.4 Time by Process Step

| PS# | Step Name | AS-IS Expected | DILO Actual | Variance | Reason for Variance |
|-----|-----------|----------------|-------------|----------|---------------------|
{{time_by_step_table}}

> **Section Confidence:** {{section_2_confidence}} | **Basis:** {{section_2_confidence_basis}}

---

## 3. Interruptions & Context Switching

> **About this section:** What derails the work? Interruptions destroy flow
> and are often invisible in process documentation.

### 3.1 Interruption Log

| INT# | Time | Source | Type | Duration | Impact | Avoidable? | Related ACT# |
|------|------|--------|------|----------|--------|------------|--------------|
{{interruption_log_table}}

**Interruption Types:** `Phone Call` | `Email/Chat` | `Walk-up` | `System Alert` | `Meeting` | `Escalation` | `Question from Colleague`

### 3.2 Interruption Analysis

| Metric | Value |
|--------|-------|
| Total Interruptions | {{total_interruptions}} |
| Total Time Lost | {{total_interruption_time}} |
| Average Recovery Time | {{avg_recovery_time}} |
| Most Frequent Source | {{most_frequent_source}} |
| Most Disruptive Type | {{most_disruptive_type}} |
| Avoidable Interruptions | {{avoidable_count}} ({{avoidable_pct}}%) |

### 3.3 Context Switching Map

{{context_switching_analysis}}

> How many times did the person switch between tasks/systems/processes?
> Each switch has a cognitive cost.

| Switch Type | Count | Avg Recovery Time | Total Time Lost |
|-------------|-------|-------------------|-----------------|
| Process → Different Process | {{process_switch_count}} | {{process_switch_recovery}} | {{process_switch_total}} |
| System → Different System | {{system_switch_count}} | {{system_switch_recovery}} | {{system_switch_total}} |
| Task → Interruption → Return | {{interrupt_switch_count}} | {{interrupt_switch_recovery}} | {{interrupt_switch_total}} |

> **Section Confidence:** {{section_3_confidence}} | **Basis:** {{section_3_confidence_basis}}

---

## 4. Workarounds & Shadow Processes

> **About this section:** The gold mine. What do people ACTUALLY do that's
> different from the documented process? Workarounds reveal system/process
> failures.

### 4.1 Workaround Registry

| WA# | Workaround | Why Needed | Official Step | System | Frequency | Risk | Related PP# |
|-----|-----------|------------|---------------|--------|-----------|------|-------------|
{{workaround_registry_table}}

### 4.2 Workaround Details

{{#each workarounds}}

#### {{this.id}}: {{this.name}}

| Attribute | Value |
|-----------|-------|
| **Workaround ID** | {{this.id}} |
| **Name** | {{this.name}} |
| **Official Process Step** | {{this.official_step}} |
| **What Should Happen** | {{this.should_happen}} |
| **What Actually Happens** | {{this.actually_happens}} |
| **Why** | {{this.reason}} |
| **Frequency** | {{this.frequency}} |
| **Time Added** | {{this.time_added}} |
| **Risk Level** | {{this.risk_level}} |
| **Known to Management?** | {{this.known_to_management}} |

**Detailed Description:**
{{this.description}}

**Root Cause:**
{{this.root_cause}}

**Compliance Risk:**
{{this.compliance_risk}}

**Systems Involved:**
{{this.systems_involved}}

**Related Pain Points:** {{this.related_pain_points}}

**Related Exceptions:** {{this.related_exceptions}}

**Recommendation:**
{{this.recommendation}}

---

{{/each}}

### 4.3 Shadow Process Map

> Activities that happen but aren't in ANY documented process

| WA# | Shadow Activity | Who Does It | Why | Documented? | Should Be? |
|-----|----------------|-------------|-----|-------------|------------|
{{shadow_process_table}}

> **Section Confidence:** {{section_4_confidence}} | **Basis:** {{section_4_confidence_basis}}

---

## 5. Undocumented Steps

> **About this section:** Steps the person performs that don't appear in the
> AS-IS process documentation. Either the AS-IS is incomplete or these are
> informal additions.

### 5.1 Undocumented Step Registry

| UD# | Step Description | Between PS# | Duration | Frequency | Should Document? | Category |
|-----|-----------------|-------------|----------|-----------|-----------------|----------|
{{undocumented_steps_table}}

**Categories:** `Missing from AS-IS` | `Informal Addition` | `Workaround Step` | `Cross-Process` | `Administrative`

### 5.2 Undocumented Step Details

{{#each undocumented_steps}}

#### {{this.id}}: {{this.description}}

| Attribute | Value |
|-----------|-------|
| **Undocumented Step ID** | {{this.id}} |
| **Description** | {{this.description}} |
| **Occurs Between** | {{this.between_steps}} |
| **Duration** | {{this.duration}} |
| **Frequency** | {{this.frequency}} |
| **Category** | {{this.category}} |
| **System Used** | {{this.system}} |
| **Should Be Documented?** | {{this.should_document}} |
| **Should Exist in TO-BE?** | {{this.should_exist_tobe}} |

**Why It Happens:**
{{this.reason}}

**Impact If Not Done:**
{{this.impact_if_skipped}}

---

{{/each}}

> **Section Confidence:** {{section_5_confidence}} | **Basis:** {{section_5_confidence_basis}}

---

## 6. System Usage Observation

> **About this section:** What systems are actually used, how, and what
> friction does the role experience with them?

### 6.1 System Usage Log

| SYS# | System | Time Spent | Activities | Login Issues | Performance Issues | Workarounds |
|------|--------|-----------|------------|-------------|-------------------|-------------|
{{system_usage_table}}

### 6.2 System Friction Points

| SYS# | System | Friction | Frequency | Time Wasted | Workaround |
|------|--------|---------|-----------|-------------|------------|
{{system_friction_table}}

### 6.3 Actual vs Documented System Usage

| PS# | Step | AS-IS Says System | Actually Uses | Match? | Why Different |
|-----|------|-------------------|---------------|--------|---------------|
{{system_comparison_table}}

> **Section Confidence:** {{section_6_confidence}} | **Basis:** {{section_6_confidence_basis}}

---

## 7. AS-IS Discrepancy Analysis

> **About this section:** The systematic comparison between what the AS-IS
> documents and what DILO observed. This is the primary output.

### 7.1 Discrepancy Summary

| DIS# | Category | AS-IS States | DILO Observed | Severity | Resolution |
|------|----------|-------------|---------------|----------|------------|
{{discrepancy_summary_table}}

**Categories:** `Missing Step` | `Wrong Duration` | `Wrong System` | `Wrong Owner` | `Wrong Sequence` | `Missing Exception` | `Hidden Workaround` | `Missing Pain Point`

### 7.2 Discrepancy Statistics

| Category | Count |
|----------|-------|
| Steps in AS-IS not observed in DILO | {{steps_not_observed}} |
| Steps observed in DILO not in AS-IS | {{steps_not_documented}} |
| Steps with duration variance > 50% | {{duration_variance_count}} |
| Steps with different system than AS-IS | {{system_mismatch_count}} |
| Steps with different owner than AS-IS | {{owner_mismatch_count}} |
| New pain points discovered | {{new_pp_count}} |
| New exceptions discovered | {{new_ex_count}} |
| Workarounds with compliance risk | {{compliance_risk_count}} |

### 7.3 Impact on AS-IS Confidence

| AS-IS Section | Previous Confidence | Post-DILO Confidence | Reason |
|---------------|--------------------|-----------------------|--------|
{{confidence_impact_table}}

> **Section Confidence:** {{section_7_confidence}} | **Basis:** {{section_7_confidence_basis}}

---

## 8. Findings & Recommendations

### 8.1 Top Findings

{{top_findings}}

### 8.2 Items to Add to AS-IS

| Type | ID (new) | Description | Source |
|------|---------|-------------|--------|
{{items_to_add}}

### 8.3 Items to Correct in AS-IS

| Existing ID | Field | Current Value | Corrected Value | Source |
|-------------|-------|---------------|-----------------|--------|
{{items_to_correct}}

### 8.4 Lean Waste Classification

| Waste Type | Observed Instances | Total Time | Elimination Potential |
|------------|-------------------|------------|---------------------|
| Transport (unnecessary movement of info) | {{transport_count}} | {{transport_time}} | {{transport_potential}} |
| Inventory (work piling up) | {{inventory_count}} | {{inventory_time}} | {{inventory_potential}} |
| Motion (unnecessary actions) | {{motion_count}} | {{motion_time}} | {{motion_potential}} |
| Waiting (idle time) | {{waiting_count}} | {{waiting_time}} | {{waiting_potential}} |
| Overprocessing (doing more than needed) | {{overprocessing_count}} | {{overprocessing_time}} | {{overprocessing_potential}} |
| Overproduction (producing before needed) | {{overproduction_count}} | {{overproduction_time}} | {{overproduction_potential}} |
| Defects (errors, rework) | {{defects_count}} | {{defects_time}} | {{defects_potential}} |
| Skills (underutilized talent) | {{skills_count}} | {{skills_time}} | {{skills_potential}} |

---

## Input for Downstream Agents

### For Transformation Agent
{{transformation_input}}

### For CX Journey Agent
{{cx_input}}

### For Innovation Agent
{{innovation_input}}

### For IT Architect
{{it_architect_input}}

---

## DILO Metadata

| Attribute | Value |
|-----------|-------|
| Observation Method | {{observation_method}} |
| Observer | {{observer_name}} |
| Subject Consent | {{consent_obtained}} |
| Day Type | {{day_type}} (typical/atypical) |
| Representativeness | {{representativeness}} |

---

## Change Log

| Version | Date | Contributor | Role | Changes |
|---------|------|-------------|------|---------|
| {{version}} | {{date}} | {{contributor_name}} | {{contributor_role}} | Initial DILO observation |

---

_Generated by ProcessMiner Process Documentation Analyst_
_Document ID: {{document_id}}-dilo-{{role_slug}}_
