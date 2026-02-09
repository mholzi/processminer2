---
name: 'step-01-identify-touchpoints'
description: 'Identify customer touchpoints in the process'

# File References
nextStepFile: './step-02-map-friction.md'
processFolder: '{process_output_folder}/{process_id}'
---

# Step 1: Identify Touchpoints

## STEP GOAL:

Review each process step and identify where customers interact with the process.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER proceed if process steps not documented
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR mapping customer interactions

### Step-Specific Rules:

- 🎯 Focus on customer interaction points
- 🚫 FORBIDDEN to identify friction yet
- 💬 Approach: Review steps, ask about customer interaction

## MANDATORY SEQUENCE

### 1. Check Prerequisites

Load _progress.yaml and verify process steps documented.

**IF not met:**
"⚠️ Journey mapping requires documented process steps.

Please complete process step documentation first."
Exit workflow.

### 2. Load Process Steps

"**Let's map the customer's journey through this process.**

Loading process steps..."

### 3. Identify Touchpoints Per Step

For each process step:

"**{PS#}: {step_title}**

- Does the customer interact at this step? **[Y/N]**
- If yes, how? (Channel)
  - In-Person / Phone / Email / Web / Mobile / Mail"

### 4. Capture Touchpoint Details

For each identified touchpoint:

```yaml
touchpoint:
  id: JT{n}
  name: {touchpoint_name}
  at_step: {PS#}
  channel: {channel}
  customer_action: {what_customer_does}
  emotion: {emotional_state}
  moment_of_truth: {yes/no}
  wait_time: {if_any}
  notes: {additional_notes}
```

**Emotion options:**
- Positive / Delighted
- Neutral / Calm
- Anxious / Uncertain
- Frustrated / Confused
- Negative / Angry
- Relieved

### 5. Present Touchpoint Summary

"**Touchpoints Identified**

| JT# | Touchpoint | Channel | At Step | Emotion |
|-----|------------|---------|---------|---------|
| JT1 | {name} | Web | PS1 | Hopeful |
| JT2 | {name} | Email | PS2 | Neutral |
...

**Total:** {count} touchpoints across {channel_count} channels"

### 6. Present MENU OPTIONS

Display: "**Ready to identify friction?** [C] Continue [E] Edit touchpoints"

#### Menu Handling Logic:

- IF C: Store touchpoints, load, read entire file, then execute {nextStepFile}
- IF E: Allow modification of touchpoints

#### EXECUTION RULES:

- ALWAYS halt and wait for user input
- ONLY proceed when user selects 'C'

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Prerequisites verified
- Each process step reviewed
- Touchpoints identified
- Channels documented
- Emotions captured

### ❌ SYSTEM FAILURE:

- Proceeding without prerequisites
- Skipping process steps
- Not capturing emotions
