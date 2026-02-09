# Detailed Task Procedure: Funds Release
## Document ID: DTP-OPS-042
## Version: 2.3
## Last Updated: December 2025
## Owner: Operations Manager

---

## 1. Purpose

This procedure describes the detailed steps for releasing funds to clients following loan or facility approval.

## 2. Scope

Applies to all funds release transactions across BizBanking and MidCap segments only.

## 3. Procedure Steps

### Step 1: Receive and Log Release Request
**Performer:** Operations Clerk
**System:** LoanIQ, Operations Log (Excel)

1. Receive release request from Relationship Manager via email or LoanIQ
2. Log request in Operations tracking spreadsheet
3. Assign reference number
4. Acknowledge receipt to RM within 30 minutes

**Note:** All requests must be logged before processing begins.

### Step 2: Validate Conditions Precedent
**Performer:** Operations Officer
**System:** DMS, LoanIQ

1. Open CP checklist in DMS
2. Verify all items marked "Complete"
3. Cross-check against LoanIQ facility record
4. If any CP incomplete, reject back to RM with details

**Escalation:** If CP status unclear, escalate to Credit Administration

### Step 3: Perform KYC and Sanctions Check
**Performer:** Compliance Officer
**System:** KYC Portal, Sanctions Screening Tool

1. Verify client KYC is current (within 12 months)
2. Run sanctions screening on beneficiary
3. Document clearance in compliance log

**Control:** Must be performed by Compliance team, not Operations

### Step 4: Verify Beneficiary Account Details
**Performer:** Operations Officer
**System:** Core Banking

1. Match beneficiary account to facility agreement
2. Verify account is active and not frozen
3. Obtain second verification from Senior Operations Officer

### Step 5: Create Payment Instruction
**Performer:** Operations Officer
**System:** Treasury Workstation

1. Create MT103 or local payment instruction
2. Enter amount, value date, beneficiary details
3. Attach supporting documentation

### Step 6: Authorize Payment (First Approval)
**Performer:** Senior Operations Officer
**System:** Treasury Workstation

1. Review payment details against source documents
2. Verify amount matches approved facility
3. Apply first authorization signature

### Step 7: Authorize Payment (Second Approval)
**Performer:** Operations Manager or Authorized Signatory
**System:** Treasury Workstation

1. Independent review of payment instruction
2. Apply second authorization signature
3. Release for execution

**Control:** Maker-checker must be different individuals with no reporting relationship

### Step 8: Execute Payment
**Performer:** Treasury Operations
**System:** SWIFT Alliance, RTGS

1. Transmit payment instruction
2. Monitor for acknowledgment
3. Capture payment reference

**SLA:** Payments must be executed within 1 hour of final authorization

### Step 9: Update Loan System
**Performer:** Operations Officer
**System:** LoanIQ

1. Record drawdown in LoanIQ
2. Update facility utilization
3. Generate drawdown confirmation

### Step 10: Notify Client
**Performer:** Relationship Manager
**System:** CRM, Email

1. Send payment confirmation to client
2. Include payment reference and value date
3. Copy Operations for records

**SLA:** Client must be notified within 2 hours of payment execution

---

## 4. Controls Summary

| Control | Description | Frequency |
|---------|-------------|-----------|
| Four-eyes on beneficiary | Two officers verify account details | Every transaction |
| Dual authorization | Two signatures required for payment | Every transaction |
| Sanctions screening | All beneficiaries screened | Every transaction |
| CP verification | All conditions must be complete | Every transaction |
| KYC currency | Client KYC within 12 months | Every transaction |

---

## 5. Systems Used

- LoanIQ (Loan Management)
- DMS (Document Management)
- Core Banking System
- KYC Portal
- Sanctions Screening Tool
- Treasury Workstation (not Payment Gateway)
- SWIFT Alliance / RTGS
- CRM
- Operations Log (Excel spreadsheet)

---

## 6. SLAs and Turnaround Times

| Activity | Target | Measurement |
|----------|--------|-------------|
| Request acknowledgment | 30 minutes | From receipt |
| End-to-end processing | 4 hours | Request to payment |
| Same-day release cut-off | 1:00 PM | Local time |
| Client notification | 2 hours | From payment execution |

---

## 7. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 2.3 | Dec 2025 | J. Smith | Updated SLA timings |
| 2.2 | Sep 2025 | J. Smith | Added sanctions screening step |
| 2.1 | Jun 2025 | M. Jones | Clarified dual authorization |
