---
name: 'step-02-map-friction'
description: 'Identify friction points and link to pain points'

# File References
nextStepFile: './step-03-create-journey.md'
processFolder: '{process_output_folder}/{process_id}'
---

# Step 2: Map Friction

## STEP GOAL:

Identify friction points at each touchpoint and link them to internal pain points.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER create friction without touchpoint link
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR identifying customer friction

### Step-Specific Rules:

- 🎯 Focus on customer experience issues
- 🚫 FORBIDDEN to create journey document yet
- 💬 Approach: Assess each touchpoint for friction

## MANDATORY SEQUENCE

### 1. Assess Friction at Touchpoints

For each touchpoint:

"**At {JT#} ({touchpoint_name}), what friction does the customer experience?**

Common friction types:
- Wait time / Delays
- Confusion / Unclear instructions
- Multiple attempts required
- Information repetition
- Channel switching
- No response / feedback"

### 2. Capture Friction Details

```yaml
friction_point:
  id: FP{n}
  title: {friction_title}
  at_touchpoint: {JT#}
  severity: {Minor/Moderate/Major/Critical}
  customer_impact: {description}
  related_pain_point: {PP# if applicable}
  emotion_before: {emotion}
  emotion_after: {emotion}
```

### 3. Link to Internal Pain Points

"**This friction (FP{n}) relates to internal pain point:**

| PP# | Title | Link? |
|-----|-------|-------|
| PP1 | {title} | [Y/N] |
| PP2 | {title} | [Y/N] |

Select related PP# or 'None':"

### 4. Identify Moments of Truth

"**Which touchpoints are Moments of Truth?**
(Critical interactions that shape overall perception)

| JT# | Touchpoint | Moment of Truth? |
|-----|------------|------------------|
| JT1 | {name} | [Y/N] |
| JT2 | {name} | [Y/N] |"

### 5. Present Friction Summary

"**Friction Points Identified**

| FP# | Friction | At JT | Severity | Related PP |
|-----|----------|-------|----------|------------|
| FP1 | {title} | JT2 | Major | PP3 |
| FP2 | {title} | JT5 | Moderate | PP1 |

**Moments of Truth:** {count}
**Total Friction Points:** {count}
**Linked to Pain Points:** {count}/{total}"

### 6. Present MENU OPTIONS

Display: "**Ready to create journey map?** [C] Continue [E] Edit friction"

#### Menu Handling Logic:

- IF C: Store friction points, load, read entire file, then execute {nextStepFile}
- IF E: Allow modification of friction points

#### EXECUTION RULES:

- ALWAYS halt and wait for user input
- ONLY proceed when user selects 'C'

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Friction assessed at each touchpoint
- Friction linked to pain points
- Moments of truth identified
- Severity assessed

### ❌ SYSTEM FAILURE:

- Friction without touchpoint link
- Not linking to pain points
- Creating document in this step
