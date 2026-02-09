# DILO Observation: Relationship Manager — KYC Process

**Process ID:** 005
**Process Name:** KYC (Know Your Customer)
**Document Type:** Day-In-The-Life-Of Observation
**Role Observed:** Relationship Manager
**Related Document:** [AS-IS Process Documentation](./as-is-process-documentation.md)
**Last Updated:** 2026-02-09
**Version:** 0.1
**Status:** Draft

---

## Observation Details

| Attribute | Value |
|-----------|-------|
| **Subject Name** | Anna Kowalski (mock) |
| **Experience Level** | Senior (8 years in role) |
| **Observation Date** | 2026-02-09 (simulated) |
| **Day Type** | Typical |
| **Observer** | ProcessMiner PDA (mock observation) |
| **Observation Method** | Simulated based on AS-IS data and inferred real-world patterns |

> **Note:** This is a **mock DILO** generated for demonstration purposes. All "actual" observations are simulated based on common patterns in KYC Relationship Manager roles, informed by the documented pain points and process steps. A real DILO should be conducted with an actual SME.

---

## 1. Role Profile

### 1.1 Role Identification

| Attribute | Value |
|-----------|-------|
| **Role** | Relationship Manager |
| **Department** | Client Services |
| **Reports To** | Head of Client Services |
| **Team Size** | [MOCK — estimated 6-8 RMs] |
| **Client Portfolio** | [MOCK — ~80 active clients across BizBanking and MidCap] |

### 1.2 Process Steps Owned

| PS# | Step Name | RACI | Expected Duration | Systems |
|-----|-----------|------|-------------------|---------|
| PS-KYC-001 | Customer Application Received | R, A | ~15 min | SYS-KYC-001, SYS-KYC-006 |
| PS-KYC-002 | Initial Document Collection | R, A | ~30 min | SYS-KYC-004, SYS-KYC-005 |
| PS-KYC-003 | Data Entry into CRM | R, A | 30–60 min | SYS-KYC-001 |
| PS-KYC-008 | Customer Notification | R, A | ~15 min | SYS-KYC-004 |

### 1.3 Expected vs Actual Time on Process

| Metric | Expected (AS-IS) | Actual (Observed) |
|--------|-------------------|-------------------|
| **Time per application (active work)** | ~90–120 min | ~150–180 min |
| **Applications handled per day** | [Not documented] | 2–3 new + 4–5 follow-ups |
| **% of day on KYC tasks** | [Not documented] | ~60% |
| **% of day on non-KYC tasks** | [Not documented] | ~25% |
| **% of day on admin/overhead** | [Not documented] | ~15% |

> **Key Finding:** Actual time per application is 50–65% higher than AS-IS estimates, driven by follow-ups, rework, and undocumented coordination activities.

> **Section Confidence:** [MEDIUM] (70%) | **Basis:** Mock data — needs real SME validation

---

## 2. Timeline

### 2.1 Full Day Timeline

| ACT# | Time | Duration | Activity | PS# | System | Value Class | Source |
|------|------|----------|----------|-----|--------|-------------|--------|
| ACT-RM-001 | 08:00 | 15 min | Check overnight emails — scan for new applications and client responses | — | SYS-KYC-004 | 🟡 Necessary | MOCK |
| ACT-RM-002 | 08:15 | 10 min | Check Client Portal dashboard for new submissions | PS-KYC-001 | SYS-KYC-006 | 🟢 Value-add | MOCK |
| ACT-RM-003 | 08:25 | 15 min | New application received — log in Salesforce, assign reference number | PS-KYC-001 | SYS-KYC-001 | 🟢 Value-add | MOCK |
| ACT-RM-004 | 08:40 | 10 min | Send document request email to new client (standard template) | PS-KYC-002 | SYS-KYC-004 | 🟢 Value-add | MOCK |
| ACT-RM-005 | 08:50 | 20 min | **Follow-up:** Chase 2 clients with outstanding documents (day 3 of 5) | PS-KYC-002 | SYS-KYC-004 | 🟡 Necessary | MOCK |
| ACT-RM-006 | 09:10 | 15 min | **Interruption:** Client calls asking about application status | — | Phone | 🟡 Necessary | MOCK |
| ACT-RM-007 | 09:25 | 45 min | Data entry — Client A documents received, enter into Salesforce CRM | PS-KYC-003 | SYS-KYC-001 | 🟢 Value-add | MOCK |
| ACT-RM-008 | 10:10 | 10 min | **Workaround:** Copy client details into personal Excel tracker | — | Excel | 🔴 Waste | MOCK |
| ACT-RM-009 | 10:20 | 15 min | Upload scanned documents to SharePoint client folder | PS-KYC-002 | SYS-KYC-005 | 🟢 Value-add | MOCK |
| ACT-RM-010 | 10:35 | 10 min | **Interruption:** SharePoint sync delay — retry upload twice | — | SYS-KYC-005 | 🔴 Waste | MOCK |
| ACT-RM-011 | 10:45 | 15 min | Coffee break | — | — | ⚪ Break | MOCK |
| ACT-RM-012 | 11:00 | 30 min | **Team meeting** — weekly pipeline review with team lead | — | Teams | 🟡 Necessary | MOCK |
| ACT-RM-013 | 11:30 | 50 min | Data entry — Client B (corporate client, more fields, attach 5 documents) | PS-KYC-003 | SYS-KYC-001 | 🟢 Value-add | MOCK |
| ACT-RM-014 | 12:20 | 10 min | **Undocumented:** Ping Compliance Officer on Teams to check if Client A screening is done | — | Teams | 🟡 Necessary | MOCK |
| ACT-RM-015 | 12:30 | 45 min | Lunch break | — | — | ⚪ Break | MOCK |
| ACT-RM-016 | 13:15 | 15 min | Check emails — 3 client responses, 1 internal notification | — | SYS-KYC-004 | 🟡 Necessary | MOCK |
| ACT-RM-017 | 13:30 | 10 min | **Rework:** Client C sent wrong document type — send clarification email | PS-KYC-002 | SYS-KYC-004 | 🔴 Waste | MOCK |
| ACT-RM-018 | 13:40 | 15 min | Send approval notification to Client D (approved this morning) | PS-KYC-008 | SYS-KYC-004 | 🟢 Value-add | MOCK |
| ACT-RM-019 | 13:55 | 10 min | **Undocumented:** Update personal Excel tracker with Client D status | — | Excel | 🔴 Waste | MOCK |
| ACT-RM-020 | 14:05 | 20 min | Send rejection notification to Client E — careful wording, no screening disclosure | PS-KYC-008 | SYS-KYC-004 | 🟢 Value-add | MOCK |
| ACT-RM-021 | 14:25 | 15 min | **Interruption:** Manager asks for status update on high-risk Client F | — | Teams | 🟡 Necessary | MOCK |
| ACT-RM-022 | 14:40 | 25 min | **Non-KYC:** Existing client relationship call (account review) | — | Phone, SYS-KYC-001 | 🟡 Necessary | MOCK |
| ACT-RM-023 | 15:05 | 10 min | **Follow-up:** Check Salesforce for any pending tasks or SLA breaches | — | SYS-KYC-001 | 🟡 Necessary | MOCK |
| ACT-RM-024 | 15:15 | 30 min | Data entry — Client F (high-risk, EDD documents received, more complex) | PS-KYC-003 | SYS-KYC-001, SYS-KYC-005 | 🟢 Value-add | MOCK |
| ACT-RM-025 | 15:45 | 15 min | **Undocumented:** Walk to Compliance desk to discuss Client F EDD status face-to-face | — | None (in-person) | 🟡 Necessary | MOCK |
| ACT-RM-026 | 16:00 | 15 min | **Non-KYC:** Admin — timesheet, expense claim | — | Internal systems | ⚪ Admin | MOCK |
| ACT-RM-027 | 16:15 | 20 min | End-of-day email review, flag items for tomorrow | — | SYS-KYC-004 | 🟡 Necessary | MOCK |
| ACT-RM-028 | 16:35 | 10 min | **Undocumented:** Update personal Excel tracker — end-of-day reconciliation | — | Excel | 🔴 Waste | MOCK |
| ACT-RM-029 | 16:45 | 15 min | **Undocumented:** Prepare handover notes for colleague covering tomorrow | — | Email | 🟡 Necessary | MOCK |

### 2.2 Time Distribution

| Value Class | Time (min) | % of Day | Activities |
|-------------|-----------|----------|------------|
| 🟢 Value-add (direct process work) | 225 min | 42% | ACT-RM-002, 003, 004, 007, 009, 013, 018, 020, 024 |
| 🟡 Necessary (supports process) | 175 min | 33% | ACT-RM-001, 005, 006, 014, 016, 021, 023, 025, 027, 029 |
| 🔴 Waste (rework, workarounds) | 55 min | 10% | ACT-RM-008, 010, 017, 019, 028 |
| ⚪ Break / Admin | 80 min | 15% | ACT-RM-011, 012, 015, 022, 026 |
| **Total** | **535 min** | **100%** | **29 activities** |

### 2.3 Time by Process Step

| PS# | Step Name | Expected (AS-IS) | Actual (Observed) | Delta | Notes |
|-----|-----------|-------------------|-------------------|-------|-------|
| PS-KYC-001 | Application Received | ~15 min | 25 min | +67% | Includes portal check (ACT-RM-002) |
| PS-KYC-002 | Document Collection | ~30 min | 55 min | +83% | Follow-ups (ACT-RM-005), rework (ACT-RM-017), SharePoint retry (ACT-RM-010) |
| PS-KYC-003 | Data Entry into CRM | 30–60 min | 125 min | +108% | 3 clients; corporate more complex; high-risk more fields |
| PS-KYC-008 | Customer Notification | ~15 min | 30 min | +100% | Rejection requires careful wording (ACT-RM-020) |
| — | Undocumented activities | 0 min | 70 min | N/A | Excel tracker, Compliance coordination, handover notes |
| — | Follow-ups & status checks | 0 min | 40 min | N/A | Client calls, manager updates, SLA checks |

> **Section Confidence:** [MEDIUM] (65%) | **Basis:** Mock data based on realistic patterns; needs real observation

---

## 3. Interruptions

| INT# | Time | Duration | Source | Type | Impact | Frequency | Related PS# |
|------|------|----------|--------|------|--------|-----------|-------------|
| INT-RM-001 | 09:10 | 15 min | Client | Phone call — application status enquiry | Context switch, broke data entry flow | [MOCK — 3-4x daily] | PS-KYC-001 |
| INT-RM-002 | 10:35 | 10 min | System | SharePoint sync delay — document upload retry | Wasted time, frustration | [MOCK — 2-3x weekly] | PS-KYC-002 |
| INT-RM-003 | 14:25 | 15 min | Manager | Ad-hoc status request on high-risk client | Context switch, unplanned reporting | [MOCK — 1-2x daily] | PS-KYC-006 |

**Interruption Summary:**
- **Total interruption time:** 40 min (7.5% of day)
- **Most frequent source:** Client calls (status enquiries)
- **Most impactful:** Context switches during data entry — takes ~5 min to regain focus

> **Section Confidence:** [LOW] (45%) | **Basis:** Mock data — interruption patterns are realistic but frequency needs real observation

---

## 4. Workarounds

| WA# | Description | Why | Frequency | Time Spent | Related PP# | Risk |
|-----|-------------|-----|-----------|-----------|-------------|------|
| WA-RM-001 | Personal Excel tracker for application status | CRM pipeline view is too slow to load; no single dashboard showing all pending items across stages | [MOCK — daily, 3x/day] | ~30 min/day | PP-KYC-001 | Data out of sync; single point of failure if RM is absent |
| WA-RM-002 | Informal Teams/in-person check with Compliance on screening status | No automated notification when screening completes; CRM status update is delayed | [MOCK — 2-3x daily] | ~20 min/day | — (new) | Compliance Officer interrupted; no audit trail of enquiry |
| WA-RM-003 | Copy-paste client details from email into CRM rather than re-typing | Portal submissions arrive as formatted emails; no auto-populate into CRM fields | [MOCK — per application] | ~5 min saved but error-prone | PP-KYC-001 | Copy errors; formatting issues in CRM fields |

**Workaround Analysis:**
- WA-RM-001 is the most time-consuming workaround (~30 min/day = 2.5 hours/week)
- WA-RM-002 suggests a **missing notification** in the process — screening completion should trigger an automated CRM notification to the RM
- WA-RM-003 confirms the data re-entry pain point (PP-KYC-001) and suggests a potential integration improvement

> **Section Confidence:** [LOW] (50%) | **Basis:** Mock data — workarounds inferred from pain points; needs real SME disclosure

---

## 5. Undocumented Steps

| UD# | Description | When | Duration | Why Not Documented | Related PS# | Should Be Documented? |
|-----|-------------|------|----------|--------------------|-------------|----------------------|
| UD-RM-001 | End-of-day Excel tracker reconciliation | 16:35 daily | 10 min | Considered "personal admin" | PS-KYC-003 | Yes — reveals CRM usability gap |
| UD-RM-002 | Informal Compliance coordination (Teams/in-person) | Multiple times daily | 15-20 min total | Considered informal communication | PS-KYC-004, PS-KYC-007 | Yes — suggests missing notification |
| UD-RM-003 | Handover notes for colleague coverage | End of day before leave/absence | 15 min | Ad-hoc, not standardised | All | Yes — no formal handover procedure exists |
| UD-RM-004 | Client status enquiry handling | Throughout day | 15-20 min total | Considered "relationship management" | PS-KYC-001 | Yes — volume suggests need for self-service status portal |

**Summary:** 4 undocumented activities consuming ~55-65 min/day. UD-RM-002 and UD-RM-004 have the highest process improvement potential.

> **Section Confidence:** [LOW] (45%) | **Basis:** Mock data — undocumented steps are realistic patterns; needs real observation to confirm

---

## 6. System Usage

### 6.1 Expected vs Actual System Usage

| SYS# | System | AS-IS Says | Actually Uses | Gap | Notes |
|------|--------|-----------|---------------|-----|-------|
| SYS-KYC-001 | Salesforce CRM | Data entry, workflow | Data entry, status checks, pipeline tracking (slow) | CRM used more than documented; performance issues drive Excel workaround | MOCK |
| SYS-KYC-002 | World-Check ONE | — (not RM's step) | Not used directly | No gap | — |
| SYS-KYC-003 | T24 Core Banking | — (not RM's step) | Not used directly | No gap | — |
| SYS-KYC-004 | Outlook Email | Customer communication | Communication + document receipt + follow-ups + internal coordination | Email used far more extensively than documented | MOCK |
| SYS-KYC-005 | SharePoint DMS | Document storage | Upload + retrieval + dealing with sync issues | Sync issues add friction (PP-KYC-005) | MOCK |
| SYS-KYC-006 | Client Portal | Application intake | Check dashboard for new submissions + sometimes help clients navigate | Portal admin role not documented | MOCK |
| — | Microsoft Excel | Not documented | Personal application tracker | Shadow system — not in AS-IS | MOCK |
| — | Microsoft Teams | Not documented | Informal coordination with Compliance, manager status updates | Communication channel not in AS-IS | MOCK |

### 6.2 Shadow Systems Identified

| System | Purpose | Used By | Risk | Recommendation |
|--------|---------|---------|------|----------------|
| Microsoft Excel | Personal application status tracker | Individual RMs | Data duplication, no backup, lost on absence | Improve CRM dashboard or create shared tracker |
| Microsoft Teams | Informal process coordination | RMs + Compliance | No audit trail, not captured in process | Formalise notification triggers in CRM |

> **Section Confidence:** [MEDIUM] (60%) | **Basis:** Mock data — shadow systems are realistic; actual system usage patterns need real observation

---

## 7. Discrepancy Analysis

> Comparison of AS-IS documentation vs DILO observation findings

| DIS# | Category | AS-IS Says | DILO Reveals | Impact | Severity |
|------|----------|-----------|-------------|--------|----------|
| DIS-RM-001 | Duration | PS-KYC-003 takes 30-60 min | Actually ~40-50 min per client, but 2-3 clients/day = 2-2.5 hrs total | Workload significantly underestimated | HIGH | **Resolved** — AS-IS updated with per-client duration and daily volume note |
| DIS-RM-002 | Activity | Document collection is a single step | Actually involves initial request + multiple follow-ups + rework for wrong docs | Step should be broken into sub-activities | MEDIUM |
| DIS-RM-003 | System | 4 systems documented for RM | Actually uses 6 (adds Excel, Teams as shadow systems) | Shadow IT risk; process documentation incomplete | HIGH |
| DIS-RM-004 | Activity | No coordination step between RM and Compliance | Informal coordination happens 2-3x daily | Missing handoff notification in process | MEDIUM |
| DIS-RM-005 | Activity | No client status enquiry handling documented | Status enquiries consume ~15-20 min/day | Undocumented demand; suggests self-service portal enhancement | MEDIUM |
| DIS-RM-006 | Activity | No handover procedure documented | RMs create ad-hoc handover notes before absence | Process continuity risk; no standard template | LOW |

> **Section Confidence:** [MEDIUM] (65%) | **Basis:** Mock data — discrepancies are realistic patterns; needs real observation

---

## 8. Findings & Recommendations

### 8.1 Key Findings

1. **Actual time per application is 50-65% higher than documented** — AS-IS estimates ~90-120 min, observed ~150-180 min per application when including follow-ups, rework, and coordination
2. **Shadow systems in active use** — Excel tracker and Teams are daily tools not captured in AS-IS, indicating CRM usability gaps
3. **10% of day is waste** — rework (wrong documents), workarounds (Excel tracker), and system issues (SharePoint sync) consume ~55 min/day
4. **Missing notification triggers** — RM has no automated way to know when screening/approval completes, driving informal coordination overhead
5. **Client status enquiries are unmanaged demand** — 3-4 calls/day not documented as process activity; suggests need for self-service status tracking

### 8.2 Recommendations

| # | Recommendation | Addresses | Priority | Quick Win? |
|---|---------------|-----------|----------|------------|
| 1 | Implement CRM dashboard for application pipeline tracking | WA-RM-001, DIS-RM-003 | High | No |
| 2 | Add automated CRM notification when screening/approval completes | WA-RM-002, DIS-RM-004 | High | Yes |
| 3 | Investigate Client Portal → CRM auto-populate for application data | WA-RM-003, PP-KYC-001 | Medium | No |
| 4 | Add client-facing application status tracker to Client Portal | UD-RM-004, DIS-RM-005 | Medium | No |
| 5 | Create standardised handover template for RM absences | UD-RM-003, DIS-RM-006 | Low | Yes |

### 8.3 New Pain Points Discovered

| PP# (proposed) | Pain Point | Source | Severity |
|----------------|-----------|--------|----------|
| PP-KYC-007 | No automated notification to RM when screening/approval completes | WA-RM-002, DIS-RM-004 | Medium |
| PP-KYC-008 | CRM pipeline dashboard too slow, driving Excel shadow tracker | WA-RM-001, DIS-RM-003 | Medium |
| PP-KYC-009 | No self-service application status for clients, creating RM call overhead | UD-RM-004, DIS-RM-005 | Medium |

> **Section Confidence:** [MEDIUM] (65%) | **Basis:** Mock data — findings and recommendations are realistic; needs real observation to validate and quantify

---

## Change Log

| Version | Date | Contributor | Role | Changes |
|---------|------|-------------|------|---------|
| 0.1 | 2026-02-09 | ProcessMiner PDA | Agent | Mock DILO generated for Relationship Manager role |

---

_Generated by ProcessMiner Process Documentation Analyst_
_Document ID: DILO-005-KYC-RM-v0.1_
