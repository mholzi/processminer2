# AS-IS Process Documentation: Funds Release

**Process ID:** 003
**Created:** 2026-02-06
**Status:** In Progress

---

## Executive Summary

The Funds Release process manages the disbursement of approved loan amounts and credit facilities to clients across all business segments. Triggered when a loan or facility has been fully approved and all conditions precedent are satisfied, this process involves eight key steps from initial release request through client confirmation. The process spans multiple systems including LoanIQ, Payment Gateway, and SWIFT/RTGS, with critical controls around dual authorization and beneficiary verification. Key improvement opportunities exist around system integration to reduce manual data entry and enable straight-through processing.

---

## 1. Process Overview

### 1.1 Process Identification

| Field | Value |
|-------|-------|
| **Process Name** | Funds Release |
| **Process ID** | 003 |
| **Process Owner** | Head of Operations |
| **Scope** | All commercial lending segments: BizBanking, MidCap, Corporate |
| **Trigger** | Loan or facility fully approved with all conditions precedent satisfied |
| **Expected Outcome** | Funds successfully released to client beneficiary account with confirmation sent |
| **Typical Duration** | Same-day for requests received before cut-off |
| **Process Variants** | None — same process applies across all segments |
| **Classification** | [TBD] |

### 1.2 Purpose and Trigger

**Process Trigger:** Loan or facility fully approved with all conditions precedent satisfied
**Expected Outcome:** Funds successfully released to client beneficiary account with confirmation sent
**Typical Duration:** Same-day for requests received before 2pm cut-off

### 1.5 Service Levels & Performance Benchmarks

| SLA# | Metric | Current SLA | Actual Performance | Source | Regulatory? |
|------|--------|-------------|-------------------|--------|-------------|
| SLA-FRL-001 | Same-day release | Before 2pm cut-off | [To be measured] | Operations | No |

---

## 2. Process Steps

### 2.1 Process Step Summary

| PS# | Step Name | Owner | System(s) | Duration | Wait Time | Rationale |
|-----|-----------|-------|-----------|----------|-----------|-----------|
| PS-FRL-001 | Receive Release Request | Relationship Manager | LoanIQ | [TBD] | [TBD] | Initiate release |
| PS-FRL-002 | Validate Conditions Precedent | Operations | DMS | [TBD] | [TBD] | Ensure all CPs complete |
| PS-FRL-003 | Verify Beneficiary Details | Operations | Core Banking, KYC Portal | [TBD] | [TBD] | Prevent misdirected payments |
| PS-FRL-004 | Prepare Payment Instruction | Operations | Payment Gateway | [TBD] | [TBD] | Create payment message |
| PS-FRL-005 | Dual Authorization | Authorized Signatories | Payment Gateway | [TBD] | [TBD] | Segregation of duties |
| PS-FRL-006 | Execute Payment | Operations | SWIFT/RTGS | [TBD] | [TBD] | Transfer funds |
| PS-FRL-007 | Update Loan Records | Operations | LoanIQ | [TBD] | [TBD] | Maintain accurate records |
| PS-FRL-008 | Send Client Confirmation | Operations | Email, CRM | [TBD] | [TBD] | Client notification |

### 2.3 Step Details

#### PS-FRL-001: Receive Release Request
**Performer:** Relationship Manager
**System(s):** LoanIQ (SYS-FRL-001)
**Input:** Approved loan/facility
**Output:** Release request in LoanIQ

Relationship Manager submits release request via LoanIQ including loan ID, amount, beneficiary details, and value date.

---

#### PS-FRL-002: Validate Conditions Precedent
**Performer:** Operations
**System(s):** DMS (SYS-FRL-002)
**Input:** Release request
**Output:** CP validation complete

Operations checks all CPs are marked complete in document checklist. Review includes security documents, insurance, and board resolutions.

**Related Pain Points:** PP-FRL-001

---

#### PS-FRL-003: Verify Beneficiary Details
**Performer:** Operations
**System(s):** Core Banking (SYS-FRL-003), KYC Portal (SYS-FRL-004)
**Input:** Beneficiary details from request
**Output:** Verified beneficiary

Check beneficiary account matches approved facility agreement. KYC status must be current (not expired).

**Related Controls:** CP-FRL-001

---

#### PS-FRL-004: Prepare Payment Instruction
**Performer:** Operations
**System(s):** Payment Gateway (SYS-FRL-005)
**Input:** Verified beneficiary details
**Output:** Payment instruction ready

Create SWIFT message or local payment instruction in Payment Gateway.

**Related Pain Points:** PP-FRL-002

---

#### PS-FRL-005: Dual Authorization
**Performer:** Authorized Signatories
**System(s):** Payment Gateway (SYS-FRL-005)
**Input:** Payment instruction
**Output:** Authorized payment

Two authorized signatories must approve the payment instruction.

**Related Controls:** CP-FRL-002

---

#### PS-FRL-006: Execute Payment
**Performer:** Operations
**System(s):** SWIFT/RTGS (SYS-FRL-006)
**Input:** Authorized payment
**Output:** Funds transferred

Release funds to beneficiary account via SWIFT or RTGS.

---

#### PS-FRL-007: Update Loan Records
**Performer:** Operations
**System(s):** LoanIQ (SYS-FRL-001)
**Input:** Payment confirmation
**Output:** Updated loan records

Mark facility as drawn in LoanIQ and update outstanding balance.

---

#### PS-FRL-008: Send Client Confirmation
**Performer:** Operations
**System(s):** Email (SYS-FRL-008), CRM (SYS-FRL-007)
**Input:** Payment reference
**Output:** Client notified

Email confirmation to client with payment reference.

**Related Pain Points:** PP-FRL-003

---

## 3. Exception Paths and Variations

| EX# | Exception | Trigger | Affected Steps | Frequency | Impact | Handling Owner |
|-----|-----------|---------|----------------|-----------|--------|----------------|

*[No exceptions documented yet — to be captured during SME interview]*

---

## 4. Control Points and Compliance

| CP# | Control Name | Type | Regulation | Process Step | Effectiveness | Risk Level |
|-----|--------------|------|------------|--------------|---------------|------------|
| CP-FRL-001 | Four-eyes verification on beneficiary details | Preventive | [TBD] | PS-FRL-003 | [TBD] | [TBD] |
| CP-FRL-002 | Dual authorization on payments | Preventive | [TBD] | PS-FRL-005 | [TBD] | [TBD] |
| CP-FRL-003 | Conditions precedent 100% complete | Preventive | [TBD] | PS-FRL-002 | [TBD] | [TBD] |
| CP-FRL-004 | KYC currency check | Preventive | [TBD] | PS-FRL-003 | [TBD] | [TBD] |

### Control Details

#### CP-FRL-001: Four-eyes verification on beneficiary details
**Type:** Preventive
**At Step:** PS-FRL-003
**Description:** Two staff members must verify beneficiary account matches facility agreement

---

#### CP-FRL-002: Dual authorization on payments
**Type:** Preventive
**At Step:** PS-FRL-005
**Description:** Two authorized signatories must approve. Maker cannot be checker (segregation of duties).

---

#### CP-FRL-003: Conditions precedent 100% complete
**Type:** Preventive
**At Step:** PS-FRL-002
**Description:** All conditions precedent must be marked complete before release can proceed

---

#### CP-FRL-004: KYC currency check
**Type:** Preventive
**At Step:** PS-FRL-003
**Description:** KYC status must be current (not expired) before funds can be released

---

## 5. System Dependencies

### 5.1 System Summary

| SYS# | System Name | Purpose | Integration Points |
|------|-------------|---------|-------------------|
| SYS-FRL-001 | LoanIQ | Loan management - release requests, facility records, outstanding balances | [TBD] |
| SYS-FRL-002 | DMS | Document Management System for conditions precedent checklist | [TBD] |
| SYS-FRL-003 | Core Banking | Beneficiary account verification | [TBD] |
| SYS-FRL-004 | KYC Portal | KYC status verification | [TBD] |
| SYS-FRL-005 | Payment Gateway | Payment instruction creation and authorization | [TBD] |
| SYS-FRL-006 | SWIFT/RTGS | Funds transfer execution | [TBD] |
| SYS-FRL-007 | CRM | Client relationship management | [TBD] |
| SYS-FRL-008 | Email | Client confirmation notifications | [TBD] |

---

## 6. Organizational Mapping

*[To be documented]*

---

## 7. Existing Documentation References

*[To be documented]*

---

## 8. Process Gaps and Issues

*[To be documented]*

---

## 9. Pain Points and Improvement Opportunities

| PP# | Pain Point | Category | Affected Steps | Impact | Frequency | Priority | Quick Win? |
|-----|------------|----------|----------------|--------|-----------|----------|------------|
| PP-FRL-001 | Manual CP checking across multiple systems | Manual Process | PS-FRL-002 | Medium | Always | [TBD] | [TBD] |
| PP-FRL-002 | Manual data entry from LoanIQ to Payment Gateway | Manual Process | PS-FRL-004 | High | Always | [TBD] | [TBD] |
| PP-FRL-003 | Manual client confirmation emails | Manual Process | PS-FRL-008 | Medium | Always | [TBD] | [TBD] |
| PP-FRL-004 | No real-time payment status visibility for RMs | System Gap | PS-FRL-006, PS-FRL-007 | Medium | Often | [TBD] | [TBD] |

### Pain Point Details

#### PP-FRL-001: Manual CP checking across multiple systems
**Impact:** Medium
**Frequency:** Always
**Root Cause:** No integration between LoanIQ and DMS for CP status
**Affected Steps:** PS-FRL-002

---

#### PP-FRL-002: Manual data entry from LoanIQ to Payment Gateway
**Impact:** High
**Frequency:** Always
**Root Cause:** No straight-through processing between systems
**Affected Steps:** PS-FRL-004

---

#### PP-FRL-003: Manual client confirmation emails
**Impact:** Medium
**Frequency:** Always
**Root Cause:** No automated confirmation workflow
**Affected Steps:** PS-FRL-008

---

#### PP-FRL-004: No real-time payment status visibility for RMs
**Impact:** Medium
**Frequency:** Often
**Root Cause:** Systems not integrated for status updates
**Affected Steps:** PS-FRL-006, PS-FRL-007

---

## Change Log

| Version | Date | Contributor | Role | Changes |
|---------|------|-------------|------|---------|
| 0.1 | 2026-02-06 | Markus | CEO | Initial import from process map |
