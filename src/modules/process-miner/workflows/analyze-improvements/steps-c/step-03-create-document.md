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

### 4. Confirm Completion

"✓ **Transformation Analysis Complete**

**Recommendations Generated:** {count}
├── Quick Wins: {count}
├── Tactical: {count}
└── Strategic: {count}

**Top Recommendations:**
1. TD1: {title} (Quick Win, High Impact)
2. TD2: {title} (Tactical, High Impact)
3. TD3: {title} (Strategic, High Impact)

**Document:** transformation-recommendations.md

**What's next?**
- **[V]** View recommendations
- **[E]** Edit recommendations
- **[ES]** Generate executive summary
- **[COMP]** Return to Companion"

#### Menu Handling Logic:

- IF V: Display full document
- IF E: Return to step-02-generate-recommendations
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
