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

"**Running validation pre-check against specialist criteria...**"

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
"⚠️ **Validation Pre-Check Found {count} Potential Issues:**

| VG# | Severity | Domain | Issue |
|-----|----------|--------|-------|
| VG-{PROC}-001 | {Critical/High/Medium/Low} | {Control/CX/Innovation/Process} | {description} |
...

**[R]** Resolve now — address issues before completing
**[A]** Accept and continue — issues noted in gap resolution log
**[E]** Edit recommendations — return to step 2"

**IF [R]:** Walk through each VG# item with SME, resolve inline, update TD# items.
**IF [A]:** Write VG# items to gap-resolution-log.md, continue to completion.
**IF [E]:** Return to step-02-generate-recommendations.

**IF no issues found:**
"✓ Validation pre-check passed — no specialist concerns identified."

### 5. Confirm Completion

"✓ **Transformation Analysis Complete**

**Recommendations Generated:** {count}
├── Quick Wins: {count}
├── Tactical: {count}
└── Strategic: {count}

**Upstream Sources Integrated:**
├── Pain Points (PP#): {count} analyzed
├── Friction Points (FP#): {count} cross-referenced
├── Control Recs (CIR#): {count} cross-referenced
└── Innovation Ideas (II#): {count} cross-referenced

**Validation Pre-Check:** {passed / {count} issues noted}

**Top Recommendations:**
1. TD1: {title} (Quick Win, High Impact)
2. TD2: {title} (Tactical, High Impact)
3. TD3: {title} (Strategic, High Impact)

**Document:** transformation-recommendations.md

**What's next?**
- **[V]** View recommendations
- **[E]** Edit recommendations
- **[VT]** Run full Target State validation (deeper check)
- **[ES]** Generate executive summary
- **[COMP]** Return to Companion"

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
