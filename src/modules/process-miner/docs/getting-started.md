# Getting Started with ProcessMiner

Welcome to ProcessMiner! This guide will help you get up and running with banking process documentation.

---

## What This Module Does

ProcessMiner helps you document banking processes comprehensively, extracting knowledge from Subject Matter Experts (SMEs) and creating audit-ready documentation with:

- **AS-IS process documentation** — Steps, pain points, exceptions, controls, systems
- **Customer journey mapping** — Touchpoints, emotions, friction points
- **Transformation recommendations** — Improvement opportunities prioritized by impact
- **Innovation opportunities** — Automation and technology candidates
- **Technical architecture** — Implementation design with diagrams

The **Process Journey Companion** guides you through the entire journey, ensuring you never feel lost.

---

## Installation

If you haven't installed the module yet:

```bash
bmad install process-miner
```

Follow the prompts to configure:
- **Process output folder** — Where your process documentation will be stored
- **Default process prefix** — ID format for new processes (e.g., COB, PAY, KYC)
- **Guidance level** — How detailed the Companion's guidance should be

---

## First Steps

### 1. Start a New Process

Invoke the **Process Documentation Analyst (PDA)** and select "New Process":

```
[NP] New Process
```

You'll be asked for:
- Process name (e.g., "Client Onboarding")
- Process ID prefix (e.g., "COB")

This creates your process folder with `_progress.yaml` for tracking.

### 2. Let the Companion Guide You

After any agent completes work, the **Process Journey Companion** will:
- Assess your current progress
- Identify what's missing or sparse
- Suggest the best next step

You always decide what to work on — the Companion just provides insight.

### 3. Capture Process Knowledge

Work with SMEs to document:
- **Process Steps (PS#)** — The sequence of activities
- **Pain Points (PP#)** — Where things go wrong
- **Exceptions (EX#)** — Non-standard scenarios
- **Control Points (CP#)** — Checks and validations
- **Systems (SYS#)** — Tools and applications used

### 4. Bring in Specialists

Once AS-IS documentation is solid, engage specialist agents:
- **Control Analyst** — Validate compliance posture
- **CX Journey Analyst** — Map customer experience
- **Transformation Agent** — Identify improvements
- **Innovation Analyst** — Find automation opportunities
- **IT Architect** — Design technical implementation

### 5. Validate and Deliver

Use the **QA Agent** to validate completeness before stakeholder delivery.

---

## Common Use Cases

### Documenting a New Process

1. Start with PDA → New Process
2. Conduct SME interviews to capture steps
3. Document pain points as you discover them
4. Add controls and systems
5. Let Companion suggest next specialist

### Analyzing an Existing Process for Improvement

1. Import existing documentation (if available)
2. Complete AS-IS documentation gaps
3. Run Transformation analysis
4. Run Innovation analysis
5. Generate executive summary

### Preparing for Audit

1. Complete AS-IS documentation
2. Run Control Analyst for compliance check
3. Ensure all controls have evidence documented
4. Run QA validation for completeness
5. Generate audit-ready package

---

## What's Next?

- Check out the [Agents Reference](agents.md) to meet your team
- Browse the [Workflows Reference](workflows.md) to see what you can do
- See [Examples](examples.md) for real-world usage

---

## Need Help?

If you run into issues:
1. Ask the Companion: "how am I doing?" for a status check
2. Run QA quick check to identify gaps
3. Review your `_progress.yaml` for current state
4. Consult the broader BMAD documentation
