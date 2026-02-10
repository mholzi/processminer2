---
name: 'step-02-generate-recommendations'
description: 'Generate and prioritize recommendations'

# File References
nextStepFile: './step-03-create-document.md'
processFolder: '{process_output_folder}/{process_id}'
---

# Step 2: Generate Recommendations

## STEP GOAL:

Generate structured recommendations (TD#) for each addressable pain point and prioritize them.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER recommend without citing evidence
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR generating recommendations

### Step-Specific Rules:

- 🎯 Focus on actionable recommendations
- 🚫 FORBIDDEN to create document yet
- 💬 Approach: Generate, prioritize, get confirmation

## MANDATORY SEQUENCE

### 1. Generate TD# Items

For each addressable pain point:

```markdown
### TD{n}: {recommendation_title}

**Addresses:** {PP#} ({pain_point_title})

**Recommendation:**
{clear_description_of_what_to_do}

**Expected Benefits:**
- {benefit_1}
- {benefit_2}
- {benefit_3}

**Effort Level:** {Low/Medium/High}
**Priority:** {Quick Win/Tactical/Strategic}

**Implementation Notes:**
- {note_1}
- {note_2}

**Affected Steps:** {PS# list}
**Dependencies:** {dependencies_or_none}
```

### 2. Prioritize Using Matrix

**Priority Matrix:**

| | Low Effort | Medium Effort | High Effort |
|---|------------|---------------|-------------|
| **High Impact** | Quick Win | Tactical | Strategic |
| **Medium Impact** | Quick Win | Tactical | Consider |
| **Low Impact** | Nice-to-have | Defer | Skip |

### 3. Present Prioritized List

"**Recommendations Generated**

**Quick Wins (Do First):**
- TD1: {title} — Addresses PP{n}
- TD2: {title} — Addresses PP{n}

**Tactical (Next Quarter):**
- TD3: {title} — Addresses PP{n}

**Strategic (Longer Term):**
- TD4: {title} — Addresses PP{n}

**Total:** {count} recommendations"

### 4. Create Implementation Roadmap

"**Implementation Roadmap**

**Phase 1: Quick Wins (0-3 months)**
- TD1: {title}
- TD2: {title}

**Phase 2: Tactical (3-6 months)**
- TD3: {title}

**Phase 3: Strategic (6-12 months)**
- TD4: {title}"

### 5. Present MENU OPTIONS

Display: "**Ready to create the recommendations document?**
**[C]** Continue to document — I'll compile the recommendations into a structured report
**[E]** Edit recommendations — Modify, add, or remove recommendations before creating the document
**[V]** View details — See the full details of a specific recommendation"

#### Menu Handling Logic:

- IF C: Store recommendations, load, read entire file, then execute {nextStepFile}
- IF E: Allow modification of recommendations
- IF V: Show detailed recommendation

#### EXECUTION RULES:

- ALWAYS halt and wait for user input
- ONLY proceed when user selects 'C'

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- TD# items generated for addressable PPs
- Each REC cites evidence (PP#)
- Prioritization applied
- Roadmap created
- User confirmed

### ❌ SYSTEM FAILURE:

- Recommendations without evidence
- No prioritization
- Creating document in this step
