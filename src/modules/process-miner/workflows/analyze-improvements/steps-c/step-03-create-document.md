---
name: 'step-03-create-document'
description: 'Create transformation recommendations document'

# File References
progressFile: '{process_output_folder}/{process_id}/_progress.yaml'
processFolder: '{process_output_folder}/{process_id}'
---

# Step 3: Create Document

## STEP GOAL:

Generate the transformation recommendations document and update progress.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER skip progress update
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR creating deliverable

### Step-Specific Rules:

- 🎯 Focus on complete document generation
- 🚫 FORBIDDEN to change recommendations (go back if needed)
- 💬 Approach: Generate, save, confirm, offer next steps

## MANDATORY SEQUENCE

### 1. Generate Document

Create transformation-recommendations.md:

```markdown
# Transformation Recommendations: {process_name}

**Process ID:** {process_id}
**Analysis Date:** {date}
**Analyst:** Transformation Agent

---

## Executive Summary

{summary_of_findings_and_top_recommendations}

---

## Analysis Overview

**Pain Points Analyzed:** {count}
**Recommendations Generated:** {count}
**Quick Wins Identified:** {count}

---

## Quick Wins

{quick_win_recommendations}

---

## Tactical Improvements

{tactical_recommendations}

---

## Strategic Initiatives

{strategic_recommendations}

---

## Implementation Roadmap

{roadmap_content}

---

## Dependencies and Risks

{dependency_analysis}

---

## Appendix: Detailed Recommendations

{full_TD_details}
```

### 2. Save Document

Write to: `{process_folder}/transformation-recommendations.md`

### 3. Update Progress

```yaml
update-progress:
  type: agent_session
  agent: transformation
  status: complete

update-progress:
  type: milestone
  check: transformation_complete
```

### 4. Self-Validation Pre-Check

Before presenting completion, run a validation pre-check against specialist criteria:

"**Running a quick cross-check against compliance, customer experience, and innovation requirements...**"

Load validation focus areas from `target-state-documentation.schema.yaml` `validation.specialists[]` and check:

**Control Check:**
- Do any TD# items affect control points (CP#)? If so, is control impact documented?
- Are SOD implications noted for step consolidation/modification decisions?
- Are regulatory constraints (REG#) respected in all TD# items?

**CX Check:**
- Do TD# items address documented friction points (FP#)? Cross-check coverage.
- Is CES improvement potential estimated?
- Are moments that matter considered in process redesign TD# items?

**Innovation Check:**
- Are MUST HAVE priority II# items addressed by TD# items?
- Do automation TD# items align with Innovation feasibility scores?

**Process Check:**
- Does every PP# have at least one corresponding TD# item?
- Are all TD# references valid (PP#, PS#, CP#, FP#, II#)?

**IF issues found:**
"⚠️ **Cross-Check Found {count} Potential Issues:**

| # | Severity | Area | Issue |
|---|----------|------|-------|
| 1 | {Critical/High/Medium/Low} | {Compliance/Customer Experience/Innovation/Process} | {description} |
...

**[R]** Resolve now — We'll go through each issue together and update the recommendations
**[A]** Accept and continue — I'll record these as known gaps. They can be addressed later.
**[E]** Edit recommendations — Go back and revise recommendations before finalizing"

**IF [R]:** Walk through each VG# item with SME, resolve inline, update TD# items.
**IF [A]:** Write VG# items to gap-resolution-log.md, continue to completion.
**IF [E]:** Return to step-02-generate-recommendations.

**IF no issues found:**
"✓ Cross-check passed — no compliance, customer experience, or innovation concerns identified."

### 5. Confirm Completion

"✓ **Transformation Analysis Complete**

**Recommendations Generated:** {count}
├── Quick Wins: {count}
├── Tactical: {count}
└── Strategic: {count}

**Sources Analyzed:**
├── Pain points: {count} analyzed
├── Customer friction points: {count} cross-referenced
├── Compliance items: {count} cross-referenced
└── Innovation ideas: {count} cross-referenced

**Quality Cross-Check:** {passed / {count} issues noted}

**Top Recommendations:**
1. {title} (Quick Win, High Impact)
2. {title} (Tactical, High Impact)
3. {title} (Strategic, High Impact)

**Document saved:** transformation-recommendations.md

**What's next?**
- **[V]** View the full recommendations document
- **[E]** Edit recommendations — revise before finalizing
- **[VT]** Deep Validation — Run a thorough cross-check against compliance, CX, and innovation requirements
- **[ES]** Executive Summary — Generate a concise summary for leadership
- **[COMP]** Return to Sage — Go back to the main menu"

#### Menu Handling Logic:

- IF V: Display full document
- IF E: Return to step-02-generate-recommendations
- IF VT: Execute #target-state-validation prompt (full validation)
- IF ES: Route to executive-summary workflow
- IF COMP: End workflow

#### EXECUTION RULES:

- ALWAYS halt and wait for user input
- Provide clear next step options

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Document generated with all sections
- Saved to process folder
- Progress updated
- Milestone checked
- Clear next steps offered

### ❌ SYSTEM FAILURE:

- Incomplete document
- Not updating progress
- Abrupt ending without options
