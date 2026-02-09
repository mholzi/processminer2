# Examples & Use Cases

This section provides practical examples for using ProcessMiner.

---

## Example: Documenting Client Onboarding

### Scenario

You need to document the Client Onboarding process for a banking transformation project.

### Step 1: Start the Process

```
> Start new process

Process name: Client Onboarding
Process prefix: COB
```

Creates: `processes/COB-001/` with `_progress.yaml`

### Step 2: Initial SME Interview

Work with the Operations Manager to capture:

```
PS1: Receive client application
PS2: Verify identity documents
PS3: Run KYC checks
PS4: Create customer profile
PS5: Assign relationship manager
...
```

### Step 3: Capture Pain Points

As the SME mentions issues:

```
PP1: Manual data entry from paper forms
     Impact: High
     Frequency: Always
     Affected Steps: PS1, PS4

PP2: KYC check delays
     Impact: High
     Frequency: Often
     Root Cause: External provider SLA
```

### Step 4: Check Progress

The Companion reports:

> "Client Onboarding is 45% complete. You have 12 steps and 4 pain points documented — good foundation. Control points section is empty. Consider engaging the Control Analyst next, or continue with PDA to capture controls during documentation."

### Step 5: Document Controls

```
CP1: Four-eyes check on KYC results
     Type: Detective
     At Step: PS3
     Evidence: Sign-off in workflow system

CP2: Document authenticity verification
     Type: Preventive
     At Step: PS2
```

### Step 6: Specialist Analysis

With AS-IS complete, run:
- **CX Journey Analysis** → Maps 8 customer touchpoints, finds 3 friction points
- **Transformation Analysis** → Identifies 6 recommendations, 2 quick wins
- **Innovation Analysis** → Finds 4 automation opportunities

### Step 7: Final Validation

QA Agent reports:

> "Completeness: 92%. Cross-references validated. Suggestion: PP3 references PS15 which doesn't exist — please verify."

### Deliverables

- `as-is-documentation.md` — 14 steps, 6 pain points, 4 exceptions, 5 controls
- `cx-journey.md` — 8 touchpoints, 3 friction points, journey diagram
- `transformation-recommendations.md` — 6 prioritized recommendations
- `innovation-opportunities.md` — 4 automation candidates
- `executive-summary.md` — Stakeholder-ready summary

---

## Example: Importing Existing Documentation

### Scenario

You have an existing Word document with partial process documentation.

### Workflow

```
> Import existing docs
> Path: /docs/legacy/onboarding-process.docx
```

PDA analyzes and extracts:
- 8 process steps identified
- 2 pain points extracted
- 3 systems mentioned

> "I've imported the existing documentation and created initial structure. Please review and validate the extracted items."

Continue with SME interviews to fill gaps.

---

## Example: Preparing for Audit

### Scenario

Audit is in 2 weeks. You need to validate control documentation.

### Workflow

1. **Run Control Compliance Analysis**

```
> Control compliance check
```

Control Analyst reports:
- 12 controls documented
- 2 high-risk steps without controls (PS7, PS11)
- 3 controls missing evidence documentation

2. **Address Gaps**

```
> Add control for PS7

CP13: Manager approval for large transactions
      Type: Preventive
      At Step: PS7
      Evidence: Approval workflow record
```

3. **Final Validation**

QA Agent confirms:
- All steps have appropriate controls
- Evidence documented for all controls
- Cross-references validated

---

## Common Scenarios

### Quick Status Check

Ask the Companion:
- "status" → Normal progress report
- "how am I doing?" → Warmer, more encouraging response

### Finding Gaps

Run QA quick check:
```
> Quick check

Sparse sections:
- Pain points: 2 documented, expected 6-10
- Exceptions: 0 documented
```

### Generating Diagrams

Diagrams are auto-generated from structured data:
- Process flow from PS# items
- Journey map from JT# items
- System architecture from SYS# items

---

## Tips & Tricks

### Efficient SME Interviews

- Prepare by importing existing docs first
- Focus on pain points — SMEs love talking about what's broken
- Capture systems as you go — "what system do you use for this step?"

### Reference IDs

Use consistent prefixes:
- **PS#** — Process Steps
- **PP#** — Pain Points
- **EX#** — Exceptions
- **CP#** — Control Points
- **SYS#** — Systems
- **JT#** — Journey Touchpoints (CX Journey)
- **FP#** — Friction Points
- **TD#** — Transformation Decisions
- **II#** — Innovation Ideas

### Milestone Celebrations

When you complete major milestones, the Companion acknowledges:
> "AS-IS documentation complete! 14 steps, 6 pain points, 5 systems documented. That's a thorough foundation. Ready to bring in the specialists?"

---

## Troubleshooting

### "Process folder not found"

Ensure you've run `start-new-process` first, or check `process_output_folder` configuration.

### "Cross-reference validation failed"

Check that referenced items exist:
- PP1 references PS15 → Does PS15 exist?
- CP3 references PS7 → Is PS7 documented?

### "Section is sparse"

QA uses per-document `.schema.yaml` expectations:
- Pain points: expected 3-10
- Controls: minimum 1

If your process genuinely has fewer, document the reason.

### Progress not updating

Ensure agents call `update-progress` workflow after completing work. Check `_progress.yaml` manually if needed.

---

## Getting More Help

- Review the main BMAD documentation
- Check module configuration in `module.yaml`
- Verify all agents and workflows are properly installed
- Ask the Companion for guidance at any time
