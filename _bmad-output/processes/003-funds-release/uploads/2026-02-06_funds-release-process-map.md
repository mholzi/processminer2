# Funds Release Process Map
## Source: Operations Team
## Date: January 2026

### Process Overview
The Funds Release process handles the disbursement of approved loan amounts or credit facilities to clients.
It is triggered when a loan or facility has been fully approved and all conditions precedent have been satisfied.

### Process Flow

1. **Receive Release Request**
   - Relationship Manager submits release request via LoanIQ
   - Includes: loan ID, amount, beneficiary details, value date
   - System: LoanIQ

2. **Validate Conditions Precedent**
   - Operations checks all CPs are marked complete in document checklist
   - Review: security documents, insurance, board resolutions
   - System: DMS (Document Management System)
   - Pain point: Manual checking across 2 systems is time-consuming

3. **Verify Beneficiary Details**
   - Check beneficiary account matches approved facility agreement
   - KYC status must be current (not expired)
   - System: Core Banking, KYC Portal
   - Control: Four-eyes check required

4. **Prepare Payment Instruction**
   - Create SWIFT message or local payment instruction
   - System: Payment Gateway
   - Pain point: Manual data entry from LoanIQ to Payment Gateway

5. **Dual Authorization**
   - Two authorized signatories must approve
   - System: Payment Gateway
   - Control: Segregation of duties - maker cannot be checker

6. **Execute Payment**
   - Release funds to beneficiary account
   - System: SWIFT / RTGS
   - SLA: Same-day release for requests received before 2pm cut-off

7. **Update Loan Records**
   - Mark facility as drawn in LoanIQ
   - Update outstanding balance
   - System: LoanIQ

8. **Send Client Confirmation**
   - Email confirmation to client with payment reference
   - System: Email, CRM
   - Pain point: No automated confirmation - manual email required

### Systems Involved
- LoanIQ (Loan Management)
- DMS (Document Management)
- Core Banking
- KYC Portal
- Payment Gateway
- SWIFT/RTGS
- CRM
- Email

### Key Controls
- Four-eyes verification on beneficiary details
- Dual authorization on payments
- Conditions precedent must be 100% complete
- KYC must be current

### Known Issues
- No straight-through processing between LoanIQ and Payment Gateway
- Manual CP checking is error-prone
- Client confirmations are manual and sometimes delayed
- No real-time visibility of payment status for RMs
