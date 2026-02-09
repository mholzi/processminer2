---
name: 'step-03-create-document'
description: 'Create innovation opportunities document'

# File References
progressFile: '{process_output_folder}/{process_id}/_progress.yaml'
processFolder: '{process_output_folder}/{process_id}'
---

# Step 3: Create Document

## STEP GOAL:

Generate the innovation opportunities document and update progress.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER skip progress update
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR creating deliverable

### Step-Specific Rules:

- 🎯 Focus on complete document generation
- 🚫 FORBIDDEN to change opportunities (go back if needed)
- 💬 Approach: Generate, save, confirm

## MANDATORY SEQUENCE

### 1. Generate Document

Create innovation-opportunities.md:

```markdown
# Innovation Opportunities: {process_name}

**Process ID:** {process_id}
**Analysis Date:** {date}
**Analyst:** Innovation Analyst

---

## Executive Summary

{summary_of_automation_potential_and_key_opportunities}

---

## Automation Landscape

### Current State
- Manual steps: {count}/{total} ({percentage}%)
- System integrations: {count} systems, {integration_status}
- Pain points addressable by automation: {count}/{total}

### Future State Vision
- Automated steps: {count}/{total} ({percentage}%)
- Full API integration between systems
- Estimated efficiency gain: {percentage}%

---

## Innovation Opportunities

### High Priority

{high_priority_INN_items}

### Medium Priority

{medium_priority_INN_items}

### Consider Later

{lower_priority_INN_items}

---

## Technology Roadmap

{roadmap_content}

---

## Investment Summary

{investment_table}

---

## Risks and Mitigations

{risk_analysis}

---

## Next Steps

1. Validate ROI estimates with business owners
2. Assess IT capacity for implementation
3. Engage IT Architect for technical design
```

### 2. Save Document

Write to: `{process_folder}/innovation-opportunities.md`

### 3. Update Progress

```yaml
update-progress:
  type: agent_session
  agent: innovation
  status: complete

update-progress:
  type: milestone
  check: innovation_complete
```

### 4. Confirm Completion

"✓ **Innovation Analysis Complete**

**Opportunities Identified:** {count}
├── High Priority: {count}
├── Medium Priority: {count}
└── Consider Later: {count}

**Automation Potential:** {percentage}% of steps
**Estimated Annual Savings:** ${amount}
**Investment Required:** ${amount}
**Payback Period:** {months} months

**Document:** innovation-opportunities.md

**What's next?**
- **[V]** View opportunities
- **[R]** ROI details
- **[A]** Engage IT Architect
- **[COMP]** Return to Companion"

#### Menu Handling Logic:

- IF V: Display full document
- IF R: Show detailed ROI breakdown
- IF A: Route to design-architecture workflow
- IF COMP: End workflow

#### EXECUTION RULES:

- ALWAYS halt and wait for user input
- Provide clear next step options

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Document generated with all sections
- Investment summary complete
- Progress updated
- Milestone checked
- Options offered

### ❌ SYSTEM FAILURE:

- Incomplete document
- Missing ROI summary
- Not updating progress
