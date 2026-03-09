# Process Registry

Central registry of all documented processes with sequential numbering.

---

## Active Processes

| # | Process ID | Process Name | Status | Created | Last Updated |
|---|------------|--------------|--------|---------|--------------|
| 003 | 003 | Funds Release | DRAFT | 2026-02-06 | 2026-02-06 |
| 004 | 004 | Loan Disbursement | DRAFT | 2026-02-06 | 2026-02-06 |
| 005 | 005 | KYC | DRAFT | 2026-02-09 | 2026-02-09 |
| 006 | 006 | Client Onboarding | DRAFT | 2026-03-03 | 2026-03-03 |

---

## Discontinued Processes

Archived processes no longer active in the workflow.

| # | Process ID | Process Name | Discontinued | By | Reason |
|---|------------|--------------|--------------|-----|--------|
| 002 | 002 | KYC Review | 2026-02-09 | Markus (CEO) | Duplicate |
| 001 | 001 | Client Onboarding | 2026-02-05 | Markus (CEO) | Project cancelled |

---

## Registry Notes

- **Folder Pattern**: `{###}-{PROCESS_NAME}` (e.g., `001-onboarding`, `002-loan-origination`)
- **Next Number**: 7
- **Status Values**: `DRAFT`, `IN_PROGRESS`, `REVIEW`, `APPROVED`, `ARCHIVED`

---

## How to Use

1. When starting a new process, check the **Next Number** above
2. Create folder using pattern: `docs/processes/{###}-{process-name-kebab-case}`
3. Add entry to the table above
4. Increment **Next Number** for next process

---

## Change Log

| Date | Contributor | Role | Changes |
|------|-------------|------|---------|
| 2026-03-03 | Markus | CEO | Created 006 - Client Onboarding |
| 2026-02-09 | Markus | CEO | Created 005 - KYC |
| 2026-02-09 | Markus | CEO | Discontinued 002 - KYC Review (Reason: Duplicate) |
| 2026-02-06 | Markus | CEO | Created 004 - Loan Disbursement |
| 2026-02-06 | Markus | CEO | Created 003 - Funds Release |
| 2026-02-05 | Markus | CEO | Discontinued 001 - Client Onboarding (Reason: Project cancelled) |
