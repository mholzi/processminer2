# Compliance & Control Assessment: KYC (Know Your Customer)

**Document Type:** Regulatory & Control Analysis
**Business Unit:** Compliance / Operations
**Region:** All regions
**Control Analyst:** Guardian (Control Analyst)
**Date:** 2026-02-10
**Version:** 0.1
**Document Owner:** Markus (CEO)

---

## Executive Summary

This Compliance & Control Assessment evaluates the regulatory compliance posture and control effectiveness of the KYC (Know Your Customer) process (005) across all business segments. The assessment maps 6 applicable regulations against 5 existing control points and identifies significant gaps in control enforcement and process formalisation.

The overall compliance posture is rated **High Risk** with an aggregate residual risk score of 5.7 (Medium), reduced from an inherent risk of 7.1 (High). Two critical-priority gaps require immediate remediation: the four-eyes approval principle (CP-KYC-001) lacks system enforcement in Salesforce, creating a technical path for single-approver bypass on high-risk customers; and the World-Check ONE screening integration has no guaranteed completion tracking, meaning a failed screening could allow a customer to proceed without a completed AML check.

Average control effectiveness is 3.2 out of 5.0. Two controls perform well — mandatory fields validation (CP-KYC-003, score 4/5) and screening archival (CP-KYC-004, score 4/5) — while the monthly reconciliation control (CP-KYC-005) is rated Ineffective (2/5) due to monthly frequency, slow CRM dashboards, and reliance on an Excel shadow tracker. Three open audit findings have been raised, all from this assessment.

Eight improvement recommendations are proposed: 2 Critical (system-enforced dual approval and screening completion verification), 5 High (EDD checklist, weekly reconciliation, cross-system audit aggregation, exception procedures, and data minimisation assessment), and 2 Medium (periodic review reminders and data minimisation). Critical items should be implemented within 30 days as part of Phase 1 of the transformation roadmap, aligning with innovation initiatives II-KYC-002 and II-KYC-005.

### Key Metrics

| Metric | Value |
|--------|-------|
| Total Regulations Mapped | 6 |
| Total Control Points | 5 |
| Compliance Gaps Identified | 7 |
| Critical/High Risk Gaps | 3 |
| Open Audit Findings | 3 |
| Average Control Effectiveness | 3.2/5 |
| Controls Needing Improvement | 3 |
| Improvement Recommendations | 8 |

### Confidence Summary

| Section | Confidence Level |
|---------|-----------------|
| Regulatory Framework | 68% (LOW) |
| Control Inventory | 75% (MEDIUM) |
| Compliance Gaps | 65% (LOW) |
| Control Effectiveness | 62% (LOW) |
| Audit Trail | 65% (LOW) |
| Risk Matrix | 60% (LOW) |
| Regulatory Change | 55% (LOW) |
| Open Audit Findings | 55% (LOW) |
| Recommendations | 68% (LOW) |
| **Overall** | **64% (LOW)** |

---

## 1. Regulatory Framework Mapping

### 1.1 Applicable Regulations

The KYC regulatory landscape is shaped by international anti-money laundering and counter-terrorism financing standards, transposed into national legislation and enforced by local financial regulators. As a financial institution operating across multiple client segments (BizBanking, MidCap, LargeCap), the organisation is subject to overlapping regulatory obligations covering customer identification, ongoing due diligence, transaction monitoring, and suspicious activity reporting. The regulations below represent the primary compliance obligations directly governing the KYC process documented in the AS-IS analysis.

| REG# | Regulation | Jurisdiction | Applicability | Compliance Status |
|------|------------|--------------|---------------|-------------------|
| REG-KYC-001 | FATF Recommendations (Recommendations 10, 11, 12, 22) | International | Baseline CDD, record-keeping, PEP screening, and enhanced due diligence standards | Partial — CDD and PEP screening implemented; EDD process lacks formal framework (PP-KYC-003) |
| REG-KYC-002 | EU Anti-Money Laundering Directive (AMLD6) | EU | Customer identification, beneficial ownership, risk-based approach, suspicious transaction reporting | Partial — risk-based approach applied; beneficial ownership verification gaps noted (PGAP-KYC-005) |
| REG-KYC-003 | Local AML/CTF Act | National | Mandatory CDD for all customer relationships, screening against sanctions lists, record retention (7 years) | Substantially compliant — screening via World-Check ONE (SYS-KYC-004); retention enforced (CP-KYC-004) |
| REG-KYC-004 | Data Protection Regulation (GDPR-equivalent) | National/EU | Lawful basis for processing personal data, data minimisation, right to erasure vs retention obligations | Partial — retention periods defined; data minimisation not formally assessed |
| REG-KYC-005 | Sanctions Regulations (UN/EU/Local) | International/National | Real-time screening of customers against sanctions lists; prohibition on facilitating sanctioned transactions | Compliant — automated screening via World-Check ONE at onboarding (PS-KYC-004); periodic re-screening via review cycle (PS-KYC-010) |
| REG-KYC-006 | Beneficial Ownership Register Requirements | National | Verification of ultimate beneficial owners for legal entities above 25% threshold | Partial — manual verification during EDD; no automated registry lookup (PGAP-KYC-005) |

**REG-KYC-001 — FATF Recommendations:** The Financial Action Task Force sets international standards for AML/CFT compliance. Recommendations 10 (CDD), 11 (Record Keeping), 12 (PEPs), and 22 (CDD for DNFBPs) are directly applicable. The current process implements basic CDD (PS-KYC-003, PS-KYC-004) and PEP screening but the EDD process relies on ad-hoc procedures rather than a formalised framework (PP-KYC-003).

**REG-KYC-002 — AMLD6:** The sixth EU Anti-Money Laundering Directive requires a risk-based approach to CDD, beneficial ownership transparency, and enhanced measures for high-risk customers. The risk assessment step (PS-KYC-005) applies a risk-based approach, but beneficial ownership verification is limited to manual checks during EDD with no automated registry integration (PGAP-KYC-005).

**REG-KYC-003 — Local AML/CTF Act:** National legislation mandates CDD for all customer relationships, sanctions screening, and 7-year record retention. The process is substantially compliant — World-Check ONE screening is performed at onboarding (PS-KYC-004, CP-KYC-004) and records are retained per policy. However, screening integration reliability is a concern (PP-KYC-002).

**REG-KYC-004 — Data Protection:** GDPR or equivalent data protection regulation creates obligations around lawful processing, data minimisation, and the tension between the right to erasure and AML record retention requirements. Retention periods are defined but no formal data minimisation assessment has been conducted for the KYC data collected.

**REG-KYC-005 — Sanctions Regulations:** Automated screening via World-Check ONE (SYS-KYC-004) at both onboarding and periodic review provides compliance with sanctions obligations. The intermittent timeout issues (PP-KYC-002) present an operational risk but have not resulted in screening gaps to date.

**REG-KYC-006 — Beneficial Ownership:** Requirements to identify and verify ultimate beneficial owners of legal entities are met through manual verification during EDD, but without automated registry lookups, the process is labour-intensive and dependent on customer-provided documentation.

> **Section Confidence:** 68% (LOW) | **Basis:** Regulations identified from process context and regulatory knowledge; jurisdiction-specific details require legal/compliance SME validation

### 1.2 Regional Requirements

The organisation operates under a layered regulatory framework where international standards (FATF) are transposed into EU-level directives (AMLD6) and further enacted through national legislation. Regional requirements add specific obligations beyond the baseline — particularly around beneficial ownership transparency, data protection cross-border transfers, and local regulator reporting formats. The table below captures the key regional requirements identified from the AS-IS process documentation and standard regulatory knowledge for KYC processes.

| Requirement | Authority | Specific Requirements | Impact on Process |
|-------------|-----------|----------------------|-------------------|
| Customer identification at onboarding | National Financial Regulator | Valid government-issued ID plus proof of address for all natural persons; Certificate of Incorporation and Board Resolution for legal entities | Directly implemented at PS-KYC-002 (document collection); document types codified in DTP-KYC-001 |
| Beneficial ownership disclosure (>25%) | National Companies Registry / EU directive | Identify and verify all beneficial owners holding >25% interest in legal entities | Implemented via BR-KYC-002 at PS-KYC-004 (screening) and PS-KYC-006 (EDD); no automated registry lookup |
| Sanctions list screening | National authority transposing UN/EU sanctions | Screen all customers and beneficial owners against consolidated sanctions lists at onboarding and periodically | Implemented via World-Check ONE (SYS-KYC-002) at PS-KYC-004; periodic re-screening via PS-KYC-010 |
| Suspicious transaction reporting | Financial Intelligence Unit (FIU) | File suspicious activity reports within prescribed timeframes when indicators are identified | Process documented in DTP-KYC-001; not explicitly mapped in the KYC onboarding process steps |
| Record retention (7 years post-relationship) | National AML Act | Maintain all CDD records, screening results, and decision records for minimum 7 years after end of customer relationship | Enforced via CP-KYC-004 (screening archival); broader retention applied across all document types (DOC-KYC-001 through DOC-KYC-010) |
| Data protection — cross-border transfer restrictions | National DPA / GDPR | Personal data transfers outside EU/EEA require adequacy decisions or standard contractual clauses | Relevant for World-Check ONE (SYS-KYC-002) if screening data processed outside jurisdiction; not currently assessed |

> **Section Confidence:** 62% (LOW) | **Basis:** Regional requirements inferred from standard regulatory framework; specific local regulator guidance not reviewed

### 1.3 Industry Standards

Beyond mandatory regulations, the KYC process operates within a landscape of industry standards and best practices that inform process design, technology selection, and operational benchmarks. While not all carry the same enforcement weight as regulations, adoption of these standards strengthens the organisation's compliance posture and aligns with peer institution practices.

| Standard | Applicability | Certification Status | Key Requirements |
|----------|---------------|---------------------|------------------|
| FATF Guidance on Risk-Based Approach | High — foundational for risk assessment methodology | N/A (guidance, not certification) | Risk categorisation framework; simplified vs enhanced CDD; ongoing monitoring calibrated to risk |
| Wolfsberg Group AML Principles | Medium — industry best practice for correspondent banking and CDD | Not adopted formally | Customer acceptance policy; risk-based CDD tiers; ongoing monitoring; information sharing |
| ISO 31000 Risk Management | Medium — framework applicable to compliance risk management | Not certified | Risk identification, assessment, and treatment framework; applicable to KYC risk rating methodology |
| Basel Committee on Banking Supervision — CDD Guidelines | High — foundational for banking KYC standards | N/A (regulatory guidance) | Customer identification; beneficial ownership; ongoing due diligence; risk management |
| ISO/IEC 27001 Information Security | Medium — relevant for data handling and system security | Not confirmed | Information security controls relevant to KYC data protection, system access, and audit trails |

> **Section Confidence:** 60% (LOW) | **Basis:** Industry standards identified from general regulatory knowledge; adoption status and certification not confirmed with compliance team

---

## 2. Control Point Inventory

### 2.1 Mandatory Controls

Five control points have been identified in the AS-IS process documentation, of which two are directly mandated by AML/CTF regulations. These mandatory controls address the core regulatory requirements of approval authorisation for high-risk customers and retention of screening evidence. Both controls are classified as operating, though their effectiveness has not been formally assessed prior to this analysis.

| CP# | Control Name | Regulation (REG#) | Process Step (PS#) | Type | Execution |
|-----|--------------|-------------------|--------------------|----- |-----------|
| CP-KYC-001 | Four-eyes principle on high-risk approvals | REG-KYC-001, REG-KYC-002, REG-KYC-003 | PS-KYC-006, PS-KYC-007 | Preventive | Manual — requires sign-off from both Compliance Manager and Head of Compliance for all high-risk customer approvals; applied at EDD completion and final approval decision |
| CP-KYC-004 | Screening results archival | REG-KYC-003, REG-KYC-005 | PS-KYC-004 | Detective | Semi-automated — World-Check ONE screening results are archived within the system with 7-year retention; archival trigger is automatic upon screening completion; retention enforcement is system-configured |

**CP-KYC-001 — Four-Eyes Principle:** This preventive control ensures that no high-risk customer can be onboarded without dual approval from both the Compliance Manager and the Head of Compliance. It is triggered when the risk assessment (PS-KYC-005) assigns a "High" rating and applies to both the EDD sign-off (PS-KYC-006) and the final approval decision (PS-KYC-007). The control is fully manual — approvers must review the case and record their decision in Salesforce CRM. There is no system enforcement preventing a single approver from completing both sign-offs (see GAP-KYC-001).

**CP-KYC-004 — Screening Results Archival:** This detective control ensures that all AML/PEP screening results are retained for the regulatory minimum of 7 years. Screening results from World-Check ONE (SYS-KYC-002) are archived automatically upon completion, and the retention period is configured within the system. The control operates reliably, though intermittent integration timeouts (PP-KYC-002) may delay the archival of screening results during system disruptions.

> **Section Confidence:** 75% (MEDIUM) | **Basis:** Control points from AS-IS documentation; regulation mapping inferred; execution details need compliance team validation

### 2.2 Internal Policies

Three control points are driven by internal policies rather than direct regulatory mandates. These controls support data quality, audit readiness, and process completeness, and serve as operational safeguards that complement the mandatory regulatory controls.

| CP# | Control Name | Policy | Process Step (PS#) | Type |
|-----|--------------|--------|--------------------|----- |
| CP-KYC-002 | Audit trail in CRM | Internal audit policy | PS-KYC-003, PS-KYC-005, PS-KYC-007 | Detective |
| CP-KYC-003 | Mandatory fields validation | Data quality policy | PS-KYC-003 | Preventive |
| CP-KYC-005 | Monthly reconciliation of pending applications | Internal compliance policy | PS-KYC-007 | Detective |

**CP-KYC-002 — Audit Trail in CRM:** Salesforce CRM (SYS-KYC-001) maintains an audit trail of all changes to customer records, risk assessments, and approval decisions. The audit trail is system-generated and cannot be manually overridden, providing strong detective capability. However, the audit trail coverage extends only to Salesforce — actions taken in other systems (World-Check ONE, SharePoint, T24) have separate, less integrated audit mechanisms.

**CP-KYC-003 — Mandatory Fields Validation:** Salesforce CRM enforces mandatory field completion at the data entry stage (PS-KYC-003). Fields marked with an asterisk (*) in the CRM interface must be populated before the record can be saved. This is the only fully automated control in the KYC process. However, field validation does not check data quality or accuracy — only presence.

**CP-KYC-005 — Monthly Reconciliation:** A monthly reconciliation process reviews all pending applications to identify cases that are stalled, overdue, or incomplete. This detective control is performed by the Compliance team and helps identify applications that have not progressed through the approval workflow (PS-KYC-007). The reconciliation is manual and reliant on CRM reporting, which is hampered by slow dashboard performance (PP-KYC-008).

### 2.3 Audit Requirements

Each control point produces or should produce evidence that supports audit readiness. The table below maps each control to its evidence output and retention requirements.

| CP# | Control Name | Evidence Produced | Retention Period |
|-----|--------------|-------------------|------------------|
| CP-KYC-001 | Four-eyes principle on high-risk approvals | Dual sign-off records in Salesforce CRM (approver names, timestamps, decision rationale) | Duration of customer relationship + 7 years |
| CP-KYC-002 | Audit trail in CRM | System-generated change log in Salesforce (field-level change history, user, timestamp) | Duration of customer relationship + 7 years |
| CP-KYC-003 | Mandatory fields validation | System validation log (prevented saves, mandatory field completion records) | Duration of customer relationship + 7 years |
| CP-KYC-004 | Screening results archival | World-Check ONE screening reports, match/no-match records, false positive resolution records | 7 years from screening date |
| CP-KYC-005 | Monthly reconciliation of pending applications | Monthly reconciliation report (list of pending applications, status, age, assigned officer) | 3 years (internal policy) |

> **Section Confidence:** 72% (MEDIUM) | **Basis:** Audit evidence types inferred from control descriptions; retention periods from DTP-KYC-001 and regulatory requirements; evidence completeness not verified with audit team

---

## 3. Compliance Gap Analysis

### 3.1 Current vs Required

A systematic comparison of regulatory requirements against the current control environment reveals seven compliance gaps. These gaps range from missing system enforcement of existing controls to entirely absent control mechanisms. The analysis draws on the 6 mapped regulations (REG-KYC-001 through REG-KYC-006), 5 existing control points (CP-KYC-001 through CP-KYC-005), and 9 process gaps (PGAP-KYC-001 through PGAP-KYC-009) documented in the AS-IS analysis.

| GAP# | Requirement (REG#) | Current State | Gap Description | Risk Level | Priority |
|------|-------------------|---------------|-----------------|------------|----------|
| GAP-KYC-001 | REG-KYC-001, REG-KYC-002 | CP-KYC-001 is manual — no system enforcement | Four-eyes principle relies on manual compliance; Salesforce does not prevent a single approver from completing both sign-offs for high-risk customers | High | Critical |
| GAP-KYC-002 | REG-KYC-001, REG-KYC-003 | EDD relies on ad-hoc procedures (PP-KYC-003) | No formalised EDD framework — checklist exists (DTP-KYC-001 Appendix B) but completion is not system-enforced; no mandatory evidence collection tracking | High | High |
| GAP-KYC-003 | REG-KYC-002, REG-KYC-006 | Manual beneficial ownership verification (PGAP-KYC-005) | No automated beneficial ownership registry lookup; verification relies on customer-provided documentation with no independent validation | Medium | High |
| GAP-KYC-004 | REG-KYC-003, REG-KYC-005 | Screening integration unreliable (PP-KYC-002) | World-Check ONE integration timeouts create a risk of delayed or missed screening; no automated fallback or retry mechanism with guaranteed completion tracking | High | Critical |
| GAP-KYC-005 | REG-KYC-003 | No automated periodic review triggers (PP-KYC-004) | Periodic review scheduling (PS-KYC-010) is system-automated, but no reminder notifications are sent to responsible officers; risk of overdue reviews | Medium | Medium |
| GAP-KYC-006 | REG-KYC-004 | No data minimisation assessment | KYC data collected has not been assessed against data minimisation principles; potential collection of excessive personal data without lawful basis | Medium | Medium |
| GAP-KYC-007 | REG-KYC-001 | No documented exception handling (PGAP-KYC-006) | Zero exception paths formally documented for a 10-step process; no defined procedures for handling screening system failures, incomplete documentation, or escalation criteria for borderline risk cases (PP-KYC-010) | Medium | High |

**GAP-KYC-001 — Four-Eyes System Enforcement:** The most critical gap. While CP-KYC-001 requires dual sign-off for high-risk approvals, Salesforce CRM does not technically enforce this — it is possible for a single user with sufficient permissions to record both approvals. Remediation requires Salesforce workflow configuration to mandate two distinct approver user IDs before the approval status can be set to "Approved" for high-risk cases.

**GAP-KYC-002 — Formalised EDD Framework:** The EDD process (PS-KYC-006) operates using an informal checklist without system-enforced completion tracking. Compliance Officers follow DTP-KYC-001 Appendix B, but there is no mechanism to ensure all required evidence items are collected and documented before the case can proceed to approval. This creates a risk of incomplete EDD for high-risk customers.

**GAP-KYC-003 — Beneficial Ownership Verification:** REG-KYC-002 and REG-KYC-006 require verification of ultimate beneficial owners. The current process relies entirely on customer-provided documentation with no independent validation against an official registry. For corporate customers with complex ownership structures, this creates a risk of inaccurate or incomplete beneficial ownership identification.

**GAP-KYC-004 — Screening Reliability:** World-Check ONE integration timeouts (PP-KYC-002) present a compliance risk — if a screening fails silently and is not retried, a customer could potentially be onboarded without a completed AML/PEP check. The current process relies on the Compliance Officer noticing the failure and manually retrying, with no system-level guaranteed completion tracking.

**GAP-KYC-005 — Periodic Review Reminders:** While PS-KYC-010 schedules reviews automatically, no notification mechanism alerts responsible officers when reviews are approaching or overdue. This creates a risk of missed review deadlines, particularly for the 6-month high-risk review cycle.

**GAP-KYC-006 — Data Minimisation:** KYC data collection has not been formally assessed against GDPR data minimisation requirements. The process may collect more personal data than strictly necessary for AML/CTF compliance purposes, creating potential data protection liability.

**GAP-KYC-007 — Exception Handling:** The complete absence of documented exception paths (PGAP-KYC-006) means there are no defined procedures for common exception scenarios such as screening system outages, incomplete document submissions past the SLA deadline, or borderline risk rating cases requiring informal escalation (PP-KYC-010).

> **Section Confidence:** 65% (LOW) | **Basis:** Gaps derived from regulatory requirements vs control point analysis; risk levels require compliance team validation

### 3.2 Risk Exposure

The compliance gap analysis reveals a concentration of risk in two areas: control enforcement reliability and process formalisation. Three gaps are rated High risk, representing immediate regulatory exposure, while four Medium-risk gaps represent operational deficiencies that could escalate under adverse conditions.

| Risk Level | Gap Count | Key Areas Affected | Remediation Urgency |
|------------|-----------|-------------------|---------------------|
| Critical | 2 | Approval control enforcement (GAP-KYC-001), Screening reliability (GAP-KYC-004) | Immediate — regulatory exposure |
| High | 2 | EDD framework (GAP-KYC-002), Beneficial ownership (GAP-KYC-003) | 30 days |
| Medium | 3 | Periodic review reminders (GAP-KYC-005), Data minimisation (GAP-KYC-006), Exception handling (GAP-KYC-007) | 90 days |
| Low | 0 | — | — |

**Aggregate Risk Assessment:** The combined risk exposure is rated **High**. The two critical-priority gaps (GAP-KYC-001 and GAP-KYC-004) represent scenarios where a regulatory breach is technically possible under current controls, even if it has not occurred to date. The absence of system enforcement for the four-eyes principle and the lack of guaranteed screening completion are the most significant exposures.

### 3.3 Remediation Needs

| GAP# | Remediation Action | Owner | Priority | Target Completion |
|------|-------------------|-------|----------|-------------------|
| GAP-KYC-001 | Configure Salesforce approval workflow to require two distinct approver user IDs for high-risk cases; implement role-based approval routing | IT / Compliance | Critical | 30 days |
| GAP-KYC-002 | Build system-enforced EDD checklist in Salesforce with mandatory evidence tracking; link to DTP-KYC-001 Appendix B requirements | Compliance | High | 60 days |
| GAP-KYC-003 | Integrate automated beneficial ownership registry lookup (national registry API or commercial provider); implement as validation step in EDD | IT / Compliance | High | 90 days |
| GAP-KYC-004 | Implement retry mechanism with guaranteed completion tracking for World-Check ONE integration; add screening status dashboard with alerts for failed/pending screenings | IT | Critical | 30 days |
| GAP-KYC-005 | Implement automated CRM notifications for upcoming and overdue periodic reviews; configure escalation path for missed deadlines | IT / Compliance | Medium | 60 days |
| GAP-KYC-006 | Conduct data minimisation assessment for all KYC data fields; document lawful basis for each data element collected | DPO / Compliance | Medium | 90 days |
| GAP-KYC-007 | Document exception handling procedures for at least 5 common exception scenarios; integrate into DTP-KYC-001 update | Compliance | High | 60 days |

> **Section Confidence:** 65% (LOW) | **Basis:** Remediation actions inferred from gap analysis; owners and timelines are recommendations requiring management sign-off

---

## 4. Control Effectiveness Assessment

### 4.1 Control Strengths

Two of the five control points demonstrate strong effectiveness characteristics. These controls provide reliable compliance assurance and serve as models for strengthening the remaining controls.

| CP# | Control Name | Effectiveness Rating | Key Strength |
|-----|--------------|---------------------|--------------|
| CP-KYC-003 | Mandatory fields validation | 4 — Effective | Fully automated; system-enforced; consistent execution with zero bypass capability |
| CP-KYC-004 | Screening results archival | 4 — Effective | Semi-automated archival; system-configured retention; strong evidence quality |

**CP-KYC-003 Highlight:** The only fully automated control in the KYC process. Salesforce mandatory field validation operates consistently every time a record is saved, with no ability for users to bypass. This demonstrates the value of system-enforced controls and serves as a model for automating other controls (particularly CP-KYC-001).

**CP-KYC-004 Highlight:** Screening archival operates reliably when the World-Check ONE integration functions normally. The 7-year retention is system-configured and does not depend on manual intervention. Evidence quality is strong — screening reports contain the full screening parameters, results, and resolution decisions.

### 4.2 Control Weaknesses

Three controls exhibit weaknesses across one or more effectiveness dimensions, creating compliance risk that requires remediation.

| CP# | Control Name | Rating | Key Issue | Dimension Most Affected |
|-----|--------------|--------|-----------|------------------------|
| CP-KYC-001 | Four-eyes principle on high-risk approvals | 3 — Partially Effective | No system enforcement; relies on manual compliance; single-user bypass technically possible | Consistency |
| CP-KYC-002 | Audit trail in CRM | 3 — Partially Effective | Coverage limited to Salesforce; actions in other systems (World-Check, SharePoint, T24) not integrated | Detection |
| CP-KYC-005 | Monthly reconciliation of pending applications | 2 — Ineffective | Manual process hampered by slow CRM dashboards (PP-KYC-008); no automated alerting; frequency may be insufficient | Timeliness |

**CP-KYC-001 — Consistency Gap:** The four-eyes principle is well-understood and generally followed by staff, but the lack of system enforcement means it operates on a "trust and verify" basis. In the absence of an automated approval routing that requires two distinct user IDs, there is no technical barrier to a single approver completing both sign-offs. This is a **Consistency** weakness — the control is not guaranteed to operate every time it should.

- **Consistency:** 2/5 — No system enforcement; bypass technically possible
- **Detection:** 3/5 — Audit trail (CP-KYC-002) can detect after the fact, but not prevent
- **Evidence Quality:** 4/5 — Approver names and timestamps recorded in CRM
- **Accountability:** 4/5 — Clear ownership (CM + HoC); sign-off documented
- **Timeliness:** 3/5 — Manual routing may cause delays in the approval queue

**CP-KYC-002 — Detection Gap:** The CRM audit trail provides strong evidence within Salesforce but does not capture actions taken in World-Check ONE (SYS-KYC-002), SharePoint (SYS-KYC-005), or T24 (SYS-KYC-003). This creates blind spots where compliance-relevant actions (screening execution, document uploads, account activation) are not covered by the primary audit mechanism.

- **Consistency:** 4/5 — Automatically generated for all Salesforce actions
- **Detection:** 2/5 — Limited to single system; cross-system actions invisible
- **Evidence Quality:** 4/5 — Field-level change history with user and timestamp
- **Accountability:** 3/5 — Salesforce users identifiable; other system users not linked
- **Timeliness:** 4/5 — Real-time logging within Salesforce

**CP-KYC-005 — Timeliness Gap:** Monthly reconciliation is too infrequent to catch stalled applications in a timely manner — an application could be stalled for up to 30 days before detection. The reconciliation process itself is hampered by slow CRM dashboard performance (PP-KYC-008), which has driven Compliance staff to use an Excel shadow tracker, reducing data reliability.

- **Consistency:** 2/5 — Manual process; dependent on staff availability and prioritisation
- **Detection:** 3/5 — Monthly frequency leaves 30-day detection gap
- **Evidence Quality:** 2/5 — Excel shadow tracker (not official system of record)
- **Accountability:** 3/5 — Compliance team responsible, but no named individual owner
- **Timeliness:** 1/5 — Monthly frequency insufficient for a process with 7–10 day cycle time

### 4.3 Improvement Opportunities

Based on the effectiveness assessment, the following improvement opportunities have been identified:

1. **Automate CP-KYC-001 enforcement** — Configure Salesforce approval workflow to require two distinct user IDs for high-risk approvals. This converts the control from "Partially Effective" to "Highly Effective" by eliminating the consistency gap. Directly addresses GAP-KYC-001.

2. **Extend audit trail coverage (CP-KYC-002)** — Implement cross-system audit log aggregation (Salesforce + World-Check ONE + SharePoint + T24) into a unified compliance audit view. This closes the detection gap for actions taken outside Salesforce.

3. **Increase reconciliation frequency (CP-KYC-005)** — Move from monthly to weekly reconciliation, ideally automated via CRM scheduled reports with email alerts. Replace the Excel shadow tracker with a Salesforce dashboard optimised for reconciliation. Directly addresses PP-KYC-008.

4. **Add screening completion tracking** — Implement a control that verifies World-Check ONE screening has completed successfully before allowing the case to proceed to risk assessment (PS-KYC-005). This would be a new preventive control addressing GAP-KYC-004.

5. **Implement EDD completion control** — Add a system-enforced checklist control that prevents EDD cases from proceeding to approval (PS-KYC-007) until all required evidence items are documented. This would strengthen compliance with REG-KYC-001 and REG-KYC-002.

> **Section Confidence:** 62% (LOW) | **Basis:** Effectiveness assessed against 5-dimension framework using AS-IS documentation and pain point data; formal control testing results not available

---

## 5. Audit Trail Requirements

The KYC process generates audit evidence across six systems (SYS-KYC-001 through SYS-KYC-006), with Salesforce CRM serving as the primary audit trail repository. Audit readiness varies significantly across controls — Salesforce-based controls have strong evidence, while cross-system activities have fragmented or incomplete audit coverage. The table below maps each control point to its audit trail requirements and current compliance.

| ATR# | Control (CP#) | Data Elements Captured | Retention Period | Storage System | Completeness |
|------|---------------|------------------------|------------------|----------------|--------------|
| ATR-KYC-001 | CP-KYC-001 | Approver user IDs, approval timestamps, decision rationale, risk rating at time of decision | Relationship + 7 years | SYS-KYC-001 (Salesforce CRM) | Partial — approver identity recorded but system does not enforce distinct users |
| ATR-KYC-002 | CP-KYC-002 | Field-level change history (old value, new value, user, timestamp) for all CRM record modifications | Relationship + 7 years | SYS-KYC-001 (Salesforce CRM) | Strong within Salesforce; no coverage for World-Check, SharePoint, or T24 actions |
| ATR-KYC-003 | CP-KYC-003 | Mandatory field validation events (field name, validation result, timestamp) | Relationship + 7 years | SYS-KYC-001 (Salesforce CRM) | Complete — system-enforced; all validation events logged |
| ATR-KYC-004 | CP-KYC-004 | Screening parameters (names screened), screening results (match/no-match), false positive resolution, analyst ID, timestamp | 7 years from screening date | SYS-KYC-002 (World-Check ONE) | Strong — automated archival; retention system-configured |
| ATR-KYC-005 | CP-KYC-005 | Reconciliation report (application list, status, age, assigned officer, action taken) | 3 years (internal policy) | SYS-KYC-001 (Salesforce CRM) / Excel | Weak — reliance on Excel shadow tracker undermines evidence quality |

**Audit Readiness Assessment:**

The overall audit readiness is rated **Partial**. Controls operating within Salesforce (CP-KYC-002, CP-KYC-003) have the strongest audit evidence — system-generated, tamper-resistant, and automatically retained. The screening archival control (CP-KYC-004) in World-Check ONE also provides strong evidence. However, two significant weaknesses exist:

1. **Cross-system gap:** There is no unified audit view across the six systems. An auditor reviewing a KYC case must access multiple systems to reconstruct the full compliance trail, increasing audit effort and the risk of missing evidence.

2. **Shadow system evidence:** The monthly reconciliation (CP-KYC-005) relies partly on an Excel shadow tracker (PP-KYC-008), which is not a system of record and does not meet audit evidence standards for completeness, accuracy, or tamper-resistance.

**ATR-KYC-001 — Approval Audit Trail:** While the approval decision is recorded in Salesforce with approver identity and timestamp, the system does not technically verify that two distinct individuals performed the approval. An auditor reviewing a high-risk approval must manually verify that the two recorded approver IDs are different — this check is not automated.

**ATR-KYC-002 — CRM Change Log:** Salesforce field history tracking provides excellent audit evidence for CRM-based activities. However, compliance-relevant actions in other systems (screening execution in World-Check, document uploads in SharePoint, account activation in T24) are not visible in this audit trail, creating blind spots.

**ATR-KYC-003 — Field Validation Log:** The most complete audit trail — every mandatory field validation event is logged by the system with no possibility of bypass. This control requires no improvement from an audit perspective.

**ATR-KYC-004 — Screening Archive:** World-Check ONE maintains a comprehensive screening archive with all parameters, results, and resolution decisions. Retention is system-configured at 7 years. The only risk is delayed archival during integration timeout events (PP-KYC-002).

**ATR-KYC-005 — Reconciliation Evidence:** The weakest audit trail. The monthly reconciliation report should be generated from Salesforce but is supplemented by (and sometimes replaced by) an Excel spreadsheet maintained outside the CRM. This creates an audit evidence gap that must be remediated by moving reconciliation reporting entirely into Salesforce.

> **Section Confidence:** 65% (LOW) | **Basis:** Audit requirements mapped from control descriptions and system capabilities; formal audit team review of evidence completeness not performed

---

## 6. Risk & Compliance Matrix

The Risk & Compliance Matrix maps identified compliance risks to the regulations they impact, the controls that mitigate them, and the residual risk after controls are applied. The matrix draws on the 6 regulations (REG-KYC-001 through REG-KYC-006), 5 control points (CP-KYC-001 through CP-KYC-005), and 7 compliance gaps (GAP-KYC-001 through GAP-KYC-007) identified in this assessment.

| RCM# | Risk | Category | Regulation (REG#) | Control (CP#) | Inherent Risk | Residual Risk | Status |
|------|------|----------|-------------------|---------------|---------------|---------------|--------|
| RCM-KYC-001 | Unauthorised single-approver sign-off for high-risk customer | Approval Control | REG-KYC-001, REG-KYC-002 | CP-KYC-001 | 9 (Critical) | 7 (High) | Open — GAP-KYC-001 |
| RCM-KYC-002 | Incomplete AML screening due to integration timeout | Screening Reliability | REG-KYC-003, REG-KYC-005 | CP-KYC-004 | 9 (Critical) | 6 (Medium) | Open — GAP-KYC-004 |
| RCM-KYC-003 | Insufficient EDD for high-risk customers | Due Diligence | REG-KYC-001, REG-KYC-002 | None (process-based) | 8 (High) | 7 (High) | Open — GAP-KYC-002 |
| RCM-KYC-004 | Inaccurate beneficial ownership identification | Beneficial Ownership | REG-KYC-002, REG-KYC-006 | None (manual verification) | 7 (High) | 6 (Medium) | Open — GAP-KYC-003 |
| RCM-KYC-005 | Overdue periodic KYC reviews | Ongoing Monitoring | REG-KYC-003 | CP-KYC-005 | 6 (Medium) | 5 (Medium) | Open — GAP-KYC-005 |
| RCM-KYC-006 | Excessive personal data collection without lawful basis | Data Protection | REG-KYC-004 | None | 5 (Medium) | 5 (Medium) | Open — GAP-KYC-006 |
| RCM-KYC-007 | No defined response to screening system outage | Business Continuity | REG-KYC-003, REG-KYC-005 | None | 7 (High) | 7 (High) | Open — GAP-KYC-007 |
| RCM-KYC-008 | Incomplete audit trail across systems | Audit Readiness | REG-KYC-003 | CP-KYC-002 | 6 (Medium) | 4 (Medium) | Open |

**Approval Control Risk (RCM-KYC-001):** The highest-priority risk. The four-eyes principle (CP-KYC-001) reduces the inherent risk from Critical to High, but the absence of system enforcement means the residual risk remains elevated. A Salesforce workflow fix (GAP-KYC-001 remediation) would reduce residual risk to Low (score: 2).

**Screening Reliability Risk (RCM-KYC-002):** World-Check ONE timeout issues (PP-KYC-002) create a scenario where screening could fail without automated retry or guaranteed completion tracking. The archival control (CP-KYC-004) provides evidence when screening completes, but does not address the risk of incomplete screening. Residual risk is Medium because the Compliance Officer typically retries manually, but this is not systematic.

**Due Diligence Risk (RCM-KYC-003):** The informal EDD process (PP-KYC-003) creates a risk that high-risk customers may be approved without complete enhanced due diligence. No system control exists to enforce EDD checklist completion, leaving residual risk at High.

**Beneficial Ownership Risk (RCM-KYC-004):** Manual verification without independent registry validation creates a risk of inaccurate or incomplete beneficial ownership identification. Residual risk is Medium because the manual process does capture beneficial ownership information, but accuracy cannot be independently verified.

**Residual Risk Summary:**

| Risk Category | Inherent Risk (Avg) | Residual Risk (Avg) | Status |
|---------------|---------------------|---------------------|--------|
| Approval Control | 9.0 (Critical) | 7.0 (High) | Remediation required |
| Screening Reliability | 8.0 (High) | 6.5 (Medium) | Remediation required |
| Due Diligence | 7.5 (High) | 6.5 (Medium) | Remediation required |
| Data Protection | 5.0 (Medium) | 5.0 (Medium) | Assessment needed |
| Audit Readiness | 6.0 (Medium) | 4.0 (Medium) | Improvement planned |
| **Overall** | **7.1 (High)** | **5.7 (Medium)** | **Active remediation** |

> **Section Confidence:** 60% (LOW) | **Basis:** Risk scores estimated from gap analysis and control effectiveness assessment; formal risk quantification not performed

---

## 7. Regulatory Change Impact

The regulatory environment for KYC and AML is evolving, with several upcoming changes that will impact the current process. The following regulatory changes have been identified from general regulatory monitoring; specific effective dates and detailed impact assessments require validation with the compliance team.

| RCI# | Regulation (REG#) | Change Description | Effective Date | Impact Level | Status |
|------|-------------------|-------------------|----------------|--------------|--------|
| RCI-KYC-001 | REG-KYC-002 | AMLD6 enhanced requirements for beneficial ownership transparency — lowered threshold from 25% to 10% for certain entity types | 2026 (phased implementation) | High | Monitoring |
| RCI-KYC-002 | REG-KYC-003 | Local AML Act amendment requiring real-time transaction monitoring integration with KYC risk profiles | 2026–2027 (proposed) | Medium | Monitoring |
| RCI-KYC-003 | REG-KYC-004 | Updated data protection guidance on balancing AML retention obligations with data subject rights | 2026 | Medium | Monitoring |
| RCI-KYC-004 | REG-KYC-005 | Expanded sanctions regime — additional country lists and sector-specific designations | Ongoing (rolling updates) | Medium | Active |

**RCI-KYC-001 — Beneficial Ownership Threshold Change:** The most impactful upcoming change. If the beneficial ownership verification threshold is lowered from 25% to 10% for certain entity types, the volume of EDD cases and beneficial ownership verifications will increase significantly. This reinforces the urgency of GAP-KYC-003 remediation (automated registry lookup) and underscores the need for a scalable EDD framework (GAP-KYC-002).

**RCI-KYC-002 — Real-Time Monitoring Integration:** Proposed amendments to the local AML Act may require integration between ongoing transaction monitoring and KYC risk profiles, enabling dynamic risk rating adjustments based on transaction behaviour. This would affect PS-KYC-010 (periodic review scheduling) and potentially require new system integrations with transaction monitoring platforms.

**RCI-KYC-003 — Data Protection Balance:** Updated guidance on the tension between AML record retention and data subject rights (right to erasure) may require more granular retention policies, with different retention periods for different data elements rather than the current blanket "relationship + 7 years" approach.

**RCI-KYC-004 — Expanded Sanctions:** Rolling updates to sanctions lists require continuous screening capability. The current World-Check ONE integration provides this at onboarding, but the periodic re-screening mechanism needs to be validated for timeliness against the frequency of sanctions list updates.

**Horizon Scanning:**

The broader regulatory trend is toward more automated, technology-enabled compliance. Regulators are increasingly expecting institutions to demonstrate:
- Automated control enforcement (not just manual procedures)
- Real-time or near-real-time screening and monitoring
- Data-driven risk assessment with explainable models
- Cross-border information sharing capabilities
- Digital identity verification and eKYC adoption

These trends align with the innovation backlog items identified in the Innovation Analysis (II-KYC-004 OCR/IDP, II-KYC-005 AML integration, II-KYC-010 eKYC) and reinforce the strategic importance of technology investment in the KYC compliance space.

> **Section Confidence:** 55% (LOW) | **Basis:** Regulatory changes identified from general knowledge; effective dates, specific provisions, and detailed impact assessments require compliance team and legal validation

---

## 8. Open Audit Findings

No formal internal or external audit has been completed for the KYC process within the scope of this documentation exercise. However, based on the compliance gap analysis and control effectiveness assessment, three findings have been raised as internal observations that would likely be flagged in an audit.

| OAF# | Finding | Source | Date Issued | Severity | Affected Control (CP#) | Status | Target Closure |
|------|---------|--------|-------------|----------|------------------------|--------|----------------|
| OAF-KYC-001 | Four-eyes principle not system-enforced for high-risk approvals | Internal assessment (this document) | 2026-02-10 | High | CP-KYC-001 | Open | 30 days |
| OAF-KYC-002 | Monthly reconciliation reliant on Excel shadow tracker instead of CRM | Internal assessment (this document) | 2026-02-10 | Medium | CP-KYC-005 | Open | 60 days |
| OAF-KYC-003 | No exception handling procedures documented for KYC process | Internal assessment (this document) | 2026-02-10 | Medium | N/A (process-level) | Open | 60 days |

**OAF-KYC-001 — Four-Eyes Enforcement:** This finding mirrors GAP-KYC-001 and RCM-KYC-001. The four-eyes principle for high-risk customer approvals is a critical regulatory control, but the lack of system enforcement creates a technical path for single-approver bypass. While no instances of bypass have been identified, the absence of a preventive technical control would be flagged as a High-severity finding in any regulatory audit.

**Remediation:** Configure Salesforce approval workflow to require two distinct user IDs. Implement role-based approval routing that prevents the same user from appearing as both approver. Target: 30 days.

**OAF-KYC-002 — Shadow System for Reconciliation:** The monthly reconciliation of pending applications (CP-KYC-005) is partially conducted using an Excel spreadsheet rather than the official CRM system. This undermines the audit evidence quality of this control and creates a risk of data discrepancies between the shadow tracker and the system of record.

**Remediation:** Optimise Salesforce CRM pipeline dashboard performance (addresses PP-KYC-008); migrate reconciliation reporting fully into Salesforce with scheduled report automation. Target: 60 days.

**OAF-KYC-003 — Missing Exception Procedures:** The absence of any documented exception handling procedures (PGAP-KYC-006) means there is no defined response for common exception scenarios (screening system outage, incomplete documentation, borderline risk cases). This creates operational risk and audit concern around the organisation's ability to handle non-standard situations in a controlled and compliant manner.

**Remediation:** Document at least 5 exception handling procedures; integrate into DTP-KYC-001 update; assign exception handling ownership. Target: 60 days.

**Remediation Status Summary:** All three findings are newly raised. No prior audit findings were available for inclusion. The target closure dates align with the remediation priorities established in Section 3.3.

> **Section Confidence:** 55% (LOW) | **Basis:** Findings derived from this assessment rather than formal audit; no prior audit reports available for review; severity ratings are preliminary

---

## 9. Control Improvement Recommendations

The following recommendations are prioritised based on the compliance gap analysis, control effectiveness assessment, and risk matrix. Priorities follow a four-tier model: Critical (immediate action), High (30 days), Medium (90 days), and Low (next review cycle).

| CIR# | Control (CP#) | Recommendation | Priority | Effort | Expected Benefit |
|------|---------------|----------------|----------|--------|------------------|
| CIR-KYC-001 | CP-KYC-001 | Implement system-enforced dual approval in Salesforce | Critical | Medium | Eliminates single-approver bypass risk; addresses GAP-KYC-001, OAF-KYC-001, RCM-KYC-001 |
| CIR-KYC-002 | New control | Add screening completion verification before risk assessment | Critical | Medium | Prevents cases from proceeding without completed AML screening; addresses GAP-KYC-004, RCM-KYC-002 |
| CIR-KYC-003 | New control | Implement system-enforced EDD checklist with mandatory evidence tracking | High | Medium | Ensures complete EDD for all high-risk customers; addresses GAP-KYC-002, RCM-KYC-003 |
| CIR-KYC-004 | CP-KYC-005 | Increase reconciliation frequency to weekly with automated CRM reporting | High | Low | Reduces detection gap from 30 days to 7 days; addresses OAF-KYC-002 |
| CIR-KYC-005 | CP-KYC-002 | Implement cross-system audit log aggregation | High | High | Unified compliance audit trail across all 6 systems; addresses RCM-KYC-008 |
| CIR-KYC-006 | New control | Add automated periodic review reminders with escalation | Medium | Low | Prevents overdue reviews; addresses GAP-KYC-005, RCM-KYC-005 |
| CIR-KYC-007 | N/A | Document exception handling procedures (minimum 5 scenarios) | High | Low | Formalises response to non-standard situations; addresses GAP-KYC-007, OAF-KYC-003 |
| CIR-KYC-008 | N/A | Conduct data minimisation assessment for KYC data fields | Medium | Low | Ensures data protection compliance; addresses GAP-KYC-006, RCM-KYC-006 |

### Critical Priority

**CIR-KYC-001 — System-Enforced Dual Approval:** The highest-priority recommendation. Configure the Salesforce approval workflow for high-risk KYC cases to require two distinct approver user IDs before the status can be set to "Approved." Implement role-based routing: first approver is Compliance Manager, second approver is Head of Compliance. The system should reject the second approval if the same user ID has already approved. This is a configuration change within Salesforce and does not require custom development. **Implementation path:** Salesforce administrator configures multi-step approval process with unique-user validation rule. **Expected outcome:** CP-KYC-001 effectiveness moves from "Partially Effective" (3/5) to "Highly Effective" (5/5); GAP-KYC-001 closed; RCM-KYC-001 residual risk drops from 7 (High) to 2 (Low).

**CIR-KYC-002 — Screening Completion Verification:** Implement a preventive control that blocks the case from proceeding to risk assessment (PS-KYC-005) until World-Check ONE screening has returned a definitive result (clear or match). If the screening times out or fails, the system should automatically queue a retry and alert the Compliance Officer. A dashboard of failed/pending screenings should be visible to the Compliance Manager. **Implementation path:** Salesforce workflow rule + World-Check ONE API integration enhancement. **Expected outcome:** New preventive control rated "Highly Effective"; GAP-KYC-004 closed; RCM-KYC-002 residual risk drops from 6 (Medium) to 2 (Low).

### High Priority

**CIR-KYC-003 — System-Enforced EDD Checklist:** Build a structured EDD checklist within Salesforce that maps to DTP-KYC-001 Appendix B requirements. Each checklist item must be marked complete with evidence attached before the case can proceed to approval (PS-KYC-007). The system should track EDD completion percentage and flag incomplete items. **Implementation path:** Salesforce custom object + validation rules + attachment requirements. **Expected outcome:** New preventive control rated "Effective"; GAP-KYC-002 closed; RCM-KYC-003 residual risk drops from 7 (High) to 3 (Medium).

**CIR-KYC-004 — Weekly Automated Reconciliation:** Replace the monthly manual reconciliation (CP-KYC-005) with a weekly automated CRM report that identifies all applications pending beyond defined thresholds (e.g., >5 business days without status change). The report should be automatically emailed to the Compliance Manager with escalation alerts for critical overdue cases. Retire the Excel shadow tracker. **Implementation path:** Salesforce scheduled report + email alert + dashboard optimisation (addresses PP-KYC-008). **Expected outcome:** CP-KYC-005 effectiveness moves from "Ineffective" (2/5) to "Effective" (4/5); OAF-KYC-002 closed.

**CIR-KYC-005 — Cross-System Audit Aggregation:** Implement a centralised audit log view that aggregates compliance-relevant events from Salesforce, World-Check ONE, SharePoint, and T24 into a single timeline per customer. This enables auditors to reconstruct the full compliance trail from a single interface. **Implementation path:** Integration middleware or SIEM tool with connectors to each system; significant IT effort. **Expected outcome:** CP-KYC-002 effectiveness moves from "Partially Effective" (3/5) to "Highly Effective" (5/5); RCM-KYC-008 residual risk drops from 4 to 2.

**CIR-KYC-007 — Exception Handling Documentation:** Document formal exception handling procedures for at least the following scenarios: (1) World-Check ONE system outage during screening, (2) Customer fails to provide required documents within SLA, (3) Borderline risk rating requiring escalation (PP-KYC-010), (4) Incomplete EDD evidence at approval deadline, (5) Discrepancy between screening results and customer-provided information. Integrate into DTP-KYC-001 as a new appendix. **Implementation path:** Compliance team drafts procedures; review with Process Owner; integrate into DTP. **Expected outcome:** GAP-KYC-007 closed; OAF-KYC-003 closed.

### Medium Priority

**CIR-KYC-006 — Automated Periodic Review Reminders:** Configure Salesforce to send automated email reminders to the responsible Compliance Officer at 30 days, 14 days, and 7 days before a periodic review due date. Implement an escalation alert to the Compliance Manager for reviews overdue by more than 7 days. **Implementation path:** Salesforce workflow rules + time-based triggers. **Expected outcome:** GAP-KYC-005 closed; RCM-KYC-005 residual risk drops from 5 (Medium) to 2 (Low).

**CIR-KYC-008 — Data Minimisation Assessment:** Commission a data minimisation assessment covering all KYC data fields collected in the onboarding process. For each data element, document: the lawful basis for collection, the regulatory requirement (if any), the retention period, and whether the data element is necessary and proportionate. **Implementation path:** DPO leads assessment with Compliance team support. **Expected outcome:** GAP-KYC-006 closed; RCM-KYC-006 residual risk reduced.

### Low Priority

No low-priority recommendations identified at this stage. All recommendations address active compliance gaps or audit findings.

### Transformation Considerations

The control improvement recommendations should be factored into the broader KYC process transformation programme identified in the Innovation Analysis (INNO-005-KYC). Specifically:

- **CIR-KYC-001** (dual approval enforcement) aligns with II-KYC-002 (Automated Workflow Notifications) — both involve Salesforce workflow enhancement and should be implemented together to minimise change management overhead.
- **CIR-KYC-002** (screening completion verification) aligns with II-KYC-005 (Resilient AML Screening Integration) — the compliance control requirement should inform the technical architecture of the innovation initiative.
- **CIR-KYC-003** (EDD checklist) aligns with II-KYC-008 (EDD Process Acceleration) — the system-enforced checklist provides the control framework within which EDD process improvements can be safely implemented.
- **CIR-KYC-005** (cross-system audit aggregation) should be considered as a foundational platform capability that supports multiple innovation initiatives, particularly the Client Portal (II-KYC-001) and real-time T24 API activation (II-KYC-006).
- **CIR-KYC-006** (periodic review reminders) directly overlaps with II-KYC-007 (Automated Periodic Review Reminders) and should be treated as a single initiative.

The recommended approach is to implement Critical and High-priority control improvements (CIR-KYC-001, CIR-KYC-002, CIR-KYC-003, CIR-KYC-004, CIR-KYC-007) in Phase 1 of the transformation roadmap (weeks 1–6), as these address regulatory compliance gaps that should not wait for the broader innovation programme.

> **Section Confidence:** 68% (LOW) | **Basis:** Recommendations derived from gap analysis and effectiveness assessment; effort estimates and implementation paths are indicative; require IT and compliance team validation

---

## Change Log

| Date | Contributor | Role | Changes |
|------|-------------|------|---------|
| 2026-02-10 | Markus | CEO | Initial documentation — all 9 sections auto-filled from AS-IS process context |

---

_Generated by ProcessMiner Control Analyst_
_Document ID: COMP-005-KYC_
