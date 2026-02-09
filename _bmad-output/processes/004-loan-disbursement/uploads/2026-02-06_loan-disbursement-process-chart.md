# Loan Disbursement Process Chart
## Internal Reference: LD-PROC-2025-R3
## Last reviewed: December 2025

---

## Process Overview

The Loan Disbursement process handles the release of approved loan funds to borrowers across all business segments (BizBanking, MidCap, LargeCap). The process begins after final credit approval and ends when funds are confirmed in the borrower's account with all documentation archived.

**Process Owner:** Head of Lending Operations
**Frequency:** Daily — approximately 45-60 disbursements per day across segments
**Average end-to-end time:** 2-4 hours (standard), up to 2 business days (complex/large cap)
**Regulatory framework:** Central Bank Lending Regulations, AML/CFT Act, Consumer Credit Directive

---

## Process Flow

### Step 1: Receive Approved Loan Package
- **Who:** Disbursement Officer
- **System:** LoanIQ (Loan Management System)
- **What:** Receives the approved loan package from Credit Committee or automated approval engine. Verifies all approval conditions are met. Checks that loan agreement is signed and all conditions precedent (CPs) are satisfied.
- **Input:** Approved credit memo, signed loan agreement, CP checklist
- **Output:** Verified loan package ready for setup
- **Duration:** 15-20 minutes
- **Wait time:** 0-2 hours (depending on queue)

### Step 2: Validate Customer & Account Details
- **Who:** Disbursement Officer
- **System:** Core Banking (T24), CRM (Salesforce)
- **What:** Confirms borrower identity, validates destination account details, checks KYC status is current, and verifies no sanctions hits. Cross-checks customer data between LoanIQ and T24.
- **Input:** Customer ID, account details from loan agreement
- **Output:** Validated customer record, confirmed destination account
- **Duration:** 10-15 minutes
- **Business Rule:** KYC must be refreshed if older than 12 months. Sanctions screening mandatory for every disbursement.

### Step 3: Set Up Loan in Core Banking
- **Who:** Disbursement Officer
- **System:** T24 (Core Banking), LoanIQ
- **What:** Creates the loan account in T24, enters repayment schedule, interest rate, fees, and tenor. Links to the customer's main account. Sets up automated debit orders for repayments.
- **Input:** Approved loan terms, repayment schedule
- **Output:** Active loan account in T24, repayment schedule configured
- **Duration:** 20-30 minutes
- **Pain Point:** Manual re-keying of data from LoanIQ to T24 — no automated interface. High error rate on repayment schedule entry.

### Step 4: Four-Eyes Verification
- **Who:** Senior Disbursement Officer / Team Lead
- **System:** T24, LoanIQ
- **What:** Independent review of loan setup. Verifies all fields match the approved credit memo: amount, rate, tenor, fees, repayment schedule, destination account. Checks for any override flags.
- **Input:** Loan setup in T24, original credit memo
- **Output:** Verified and approved loan setup
- **Duration:** 10-15 minutes
- **Control:** Maker-checker principle. The verifier must be different from the person who set up the loan. System enforces this through user ID checks.
- **Pain Point:** Often delayed because only 2 senior officers are authorized to verify — bottleneck during peak hours.

### Step 5: Generate Disbursement Instructions
- **Who:** Disbursement Officer
- **System:** T24, Payment Gateway (SWIFT/local clearing)
- **What:** Generates the payment instruction based on disbursement type: internal transfer, RTGS, EFT, or SWIFT. Applies correct value dating. For syndicated loans, generates multiple payment instructions.
- **Input:** Verified loan account, destination account details
- **Output:** Payment instruction ready for release
- **Duration:** 5-10 minutes
- **Business Rule:** Disbursements >$1M require RTGS. International disbursements use SWIFT. All others use local EFT.

### Step 6: Compliance Hold Check
- **Who:** Compliance Officer (automated + manual)
- **System:** Compliance Screening Tool (Fircosoft), AML System
- **What:** Automated screening of payment against sanctions lists, PEP databases, and adverse media. Transactions above threshold ($500K) require manual compliance officer review.
- **Input:** Payment instruction, customer details
- **Output:** Compliance clearance or hold flag
- **Duration:** 2-5 minutes (automated), up to 4 hours (manual review)
- **Exception:** If compliance hold is triggered, the disbursement is frozen until cleared. Average resolution time for false positives: 2 hours.

### Step 7: Treasury Funding Confirmation
- **Who:** Treasury Desk
- **System:** Treasury Management System (Murex), T24
- **What:** Confirms that funds are available in the lending pool. For large disbursements (>$5M), treasury may need to arrange funding. Confirms FX rate if disbursement is in foreign currency.
- **Input:** Disbursement amount, currency, value date
- **Output:** Funding confirmation, FX rate lock (if applicable)
- **Duration:** 5-15 minutes (standard), up to 1 day (large/FX)
- **Pain Point:** No automated notification to treasury — disbursement officers must call or email. Delays on large transactions.

### Step 8: Authorize & Release Payment
- **Who:** Head of Disbursements / Authorized Signatory
- **System:** T24, Payment Gateway
- **What:** Final authorization of the payment. For amounts >$5M, dual authorization required. Releases the payment instruction to the payment gateway/SWIFT network.
- **Input:** Compliance-cleared, treasury-confirmed payment instruction
- **Output:** Released payment
- **Duration:** 5-10 minutes
- **Control:** Dual authorization for amounts >$5M. Digital signature required. Audit trail of all authorizations logged.

### Step 9: Payment Execution & Confirmation
- **Who:** Payment Operations (automated)
- **System:** Payment Gateway, SWIFT, Local Clearing House
- **What:** Payment is executed through the appropriate channel. System sends MT103 (SWIFT) or local clearing instruction. Waits for confirmation/acknowledgment from receiving bank.
- **Input:** Released payment instruction
- **Output:** Payment confirmation, transaction reference number
- **Duration:** Immediate to 30 minutes (domestic), 1-4 hours (international)

### Step 10: Post-Disbursement Processing
- **Who:** Disbursement Officer
- **System:** T24, LoanIQ, DMS (Document Management - OpenText)
- **What:** Updates loan status to "Active/Disbursed". Archives all documentation in DMS. Sends disbursement confirmation to borrower via email/portal. Updates CRM with disbursement details. Generates fee invoices if applicable.
- **Input:** Payment confirmation
- **Output:** Updated loan records, archived documents, customer notification
- **Duration:** 15-20 minutes
- **Pain Point:** Document archiving is manual — officer must scan and upload individual documents to OpenText. Takes 10+ minutes per disbursement.

---

## Key Exceptions

1. **Partial Disbursement:** Loan is disbursed in tranches (common for construction/project finance). Each tranche requires separate CP verification and drawdown request.
2. **Rejected Payment:** Payment bounces due to incorrect account details. Requires investigation, correction, and re-submission. Average resolution: 1 business day.
3. **Compliance Hold:** Transaction flagged by sanctions/AML screening. Requires compliance officer investigation before release.
4. **Insufficient Funding Pool:** Treasury cannot confirm funds for large disbursements. May require overnight funding arrangement.

---

## Systems Involved

| System | Purpose | Vendor |
|--------|---------|--------|
| LoanIQ | Loan management & origination | FIS |
| T24 (Temenos) | Core banking & account management | Temenos |
| Salesforce CRM | Customer relationship management | Salesforce |
| Fircosoft | Compliance & sanctions screening | LexisNexis |
| Murex | Treasury management & FX | Murex |
| SWIFT Network | International payments | SWIFT |
| Local Clearing House | Domestic payments (EFT/RTGS) | Central Bank |
| OpenText | Document management & archiving | OpenText |
| Email/Portal | Customer notifications | Internal |

---

## Key Pain Points Summary

1. **Manual re-keying LoanIQ → T24** — No integration between loan origination and core banking. Error-prone and time-consuming.
2. **Four-eyes verification bottleneck** — Only 2 authorized verifiers, causing delays during peak hours (11am-2pm).
3. **No automated treasury notification** — Manual phone/email to treasury for funding confirmation. Delays large transactions.
4. **Manual document archiving** — Physical scanning and uploading to OpenText. 10+ minutes per disbursement.
5. **Compliance false positives** — ~15% false positive rate on sanctions screening. Each takes ~2 hours to resolve.

---

## Control Points

1. **CP: Conditions Precedent Check** (Step 1) — All CPs must be satisfied before disbursement. Checklist sign-off required.
2. **CP: KYC/Sanctions Screening** (Step 2) — Current KYC and clean sanctions screen mandatory. Regulatory requirement.
3. **CP: Four-Eyes Verification** (Step 4) — Independent verification of loan setup. Maker-checker enforced by system.
4. **CP: Compliance Screening** (Step 6) — Automated + manual AML/sanctions check. Regulatory requirement.
5. **CP: Dual Authorization** (Step 8) — Required for disbursements >$5M. Digital signatures with audit trail.

---

## SLAs

| Metric | Target | Actual Performance |
|--------|--------|--------------------|
| Standard disbursement (< $1M) | Same day | 92% same day |
| Large disbursement ($1M - $5M) | Same day | 78% same day |
| Complex disbursement (> $5M) | T+1 | 85% within T+1 |
| Customer notification after disbursement | Within 1 hour | 95% within 1 hour |
