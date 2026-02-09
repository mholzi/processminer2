# KYC Desktop Procedure (DTP)

**Document ID:** DTP-KYC-001
**Version:** 2.3
**Last Updated:** 2025-11-15
**Owner:** Compliance Department

---

## 1. Purpose

This Desktop Procedure provides step-by-step instructions for processing Know Your Customer (KYC) applications for all client segments.

## 2. Scope

Applies to: BizBanking, MidCap, and LargeCap segments.

## 3. Process Steps

### Step 1: Application Receipt
- Receive customer application via **Client Portal** or email
- Log application in Salesforce within 2 hours of receipt
- Assign unique application reference number

### Step 2: Document Collection
- Request standard KYC documents:
  - Valid passport or national ID
  - Proof of address (utility bill, bank statement)
  - For corporates: Certificate of Incorporation, Board Resolution
- Documents must be received within 5 business days
- Store in SharePoint under client folder

### Step 3: CRM Data Entry
- Enter all customer details in Salesforce
- Complete all mandatory fields (marked with *)
- Attach scanned documents to customer record
- **SLA:** Complete within 1 business day

### Step 4: Sanctions & PEP Screening
- Run customer name through World-Check ONE (note: upgraded from World-Check)
- Screen all beneficial owners >25% shareholding
- Document screening results in CRM
- **SLA:** Same day screening required

### Step 5: Risk Rating Assignment
- Apply Risk Rating Matrix (see Appendix A)
- Categories: Low / Medium / High / Prohibited
- High-risk requires Enhanced Due Diligence
- **Note:** "Prohibited" category added Q3 2025

### Step 6: EDD Process (High-Risk Only)
- Gather additional documentation per EDD checklist
- Conduct source of funds/wealth verification
- Obtain sign-off from Compliance Manager AND Head of Compliance
- **Target:** Complete within 3 business days (was 5 days)

### Step 7: Final Approval
- Low/Medium risk: Compliance Officer approval
- High risk: Compliance Manager + Head of Compliance
- Rejected applications require written justification

### Step 8: Customer Communication
- Send approval/rejection letter within 24 hours
- Use standard templates (see SharePoint)
- For rejections: do not disclose screening findings

### Step 9: Account Setup
- Forward approved applications to Operations
- Ops activates account in T24 Core Banking System
- **Note:** System migrated from legacy CBS in 2025

### Step 10: Ongoing Monitoring Setup
- Schedule periodic review in CRM:
  - Low risk: 36 months (changed from 12 months)
  - Medium risk: 12 months (changed from 6 months)  
  - High risk: 6 months (changed from 3 months)
- Enable transaction monitoring alerts

## 4. Systems

| System | Purpose | Access Level |
|--------|---------|--------------|
| Salesforce CRM | Customer data, workflow | All KYC staff |
| World-Check ONE | AML/PEP screening | Compliance only |
| T24 Core Banking | Account management | Operations only |
| SharePoint | Document storage | All staff |
| Client Portal | Application intake | External |

## 5. Controls

- Dual approval required for High-risk (4-eyes)
- All screening results archived for 7 years
- Monthly reconciliation of pending applications
- Quarterly review of false positive rates

## 6. Known Issues

- World-Check ONE integration sometimes times out
- SharePoint sync delays causing duplicate uploads
- T24 batch processing causes overnight activation delays

## 7. Appendices

- Appendix A: Risk Rating Matrix
- Appendix B: EDD Checklist
- Appendix C: Standard Letter Templates
