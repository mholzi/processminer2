# KYC Process Flow Chart (Uploaded Document)

## Process: Know Your Customer (KYC) Review

### Process Flow

1. **Customer Application Received** → Relationship Manager receives new customer application via email or portal
2. **Initial Document Collection** → RM requests identification documents (passport, utility bill, company registration)
3. **Data Entry into CRM** → RM enters customer details into Salesforce CRM
4. **AML Screening** → Compliance Officer runs customer through World-Check screening tool
5. **Risk Assessment** → CO assigns risk rating (Low/Medium/High) based on screening results
6. **Enhanced Due Diligence** → For High-risk customers, additional documentation and senior approval required
7. **Approval Decision** → Compliance Manager reviews and approves/rejects application
8. **Customer Notification** → RM notifies customer of outcome via email
9. **Account Activation** → Operations team activates account in Core Banking System
10. **Periodic Review Scheduling** → System schedules next KYC review (1yr Low, 6mo Medium, 3mo High)

### Systems Used
- Salesforce CRM
- World-Check (Thomson Reuters)
- Core Banking System (CBS)
- Email (Outlook)
- Document Management System (SharePoint)

### Pain Points Noted
- Manual data re-entry between systems
- World-Check often returns false positives
- EDD process takes too long (avg 5 days)
- No automated reminder for periodic reviews

### Control Points
- Four-eyes principle on high-risk approvals
- Audit trail in CRM for all status changes
- Mandatory fields validation before submission
