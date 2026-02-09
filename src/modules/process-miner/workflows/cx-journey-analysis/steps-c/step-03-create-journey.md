---
name: 'step-03-create-journey'
description: 'Generate journey map document and Mermaid diagram'

# File References
progressFile: '{process_output_folder}/{process_id}/_progress.yaml'
processFolder: '{process_output_folder}/{process_id}'
---

# Step 3: Create Journey Map

## STEP GOAL:

Generate the customer journey document with Mermaid diagram and update progress.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER skip progress update
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR creating deliverable

### Step-Specific Rules:

- 🎯 Focus on complete journey document
- 🚫 FORBIDDEN to change touchpoints (go back if needed)
- 💬 Approach: Generate diagram, create document, confirm

## MANDATORY SEQUENCE

### 1. Generate Mermaid Journey Diagram

```mermaid
journey
    title {process_name} Customer Journey
    section {phase_1}
      {touchpoint_1}: {score}: {actor}
      {touchpoint_2}: {score}: {actor}
    section {phase_2}
      {touchpoint_3}: {score}: {actor}
      ...
```

Emotion scale: 1 (Negative) to 5 (Positive)

### 2. Generate Document

Create cx-journey.md:

```markdown
# Customer Journey: {process_name}

**Process ID:** {process_id}
**Analysis Date:** {date}

---

## Journey Overview

{narrative_overview_of_customer_experience}

---

## Journey Map

```mermaid
{journey_diagram}
```

---

## Touchpoints

| ID | Touchpoint | Channel | Step | Emotion |
|----|------------|---------|------|---------|
{touchpoint_table}

---

## Friction Points

### FP1: {title}

**At Touchpoint:** {JT#} ({name})
**Severity:** {severity}
**Customer Impact:** {impact}
**Related Pain Point:** {PP#}

...

---

## Moments of Truth

1. **{JT#}: {name}** — {why_critical}
2. **{JT#}: {name}** — {why_critical}

---

## Emotion Curve

{description_of_emotional_journey}

---

## Recommendations

{customer_experience_improvement_suggestions}
```

### 3. Save Document

Write to: `{process_folder}/cx-journey.md`

### 4. Update Progress

```yaml
update-progress:
  type: section_status
  document: cx_journey
  section: touchpoints
  status: complete
  count: {count}

update-progress:
  type: milestone
  check: cx_journey_complete
```

### 5. Confirm Completion

"✓ **CX Journey Analysis Complete**

**Journey Mapped:**
├── Touchpoints: {count}
├── Friction Points: {count}
├── Moments of Truth: {count}
└── Channels: {channel_list}

**Emotion Journey:** {summary}

**Document:** cx-journey.md
**Diagram:** Mermaid journey map generated

**What's next?**
- **[V]** View journey map
- **[F]** Focus on friction points
- **[COMP]** Return to Companion"

#### Menu Handling Logic:

- IF V: Display full document
- IF F: Route to friction point remediation
- IF COMP: End workflow

#### EXECUTION RULES:

- ALWAYS halt and wait for user input
- Provide clear next step options

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Mermaid diagram generated
- Document complete
- Progress updated
- Milestone checked
- Options offered

### ❌ SYSTEM FAILURE:

- Missing diagram
- Incomplete document
- Not updating progress
