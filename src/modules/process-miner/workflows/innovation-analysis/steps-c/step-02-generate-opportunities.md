---
name: 'step-02-generate-opportunities'
description: 'Generate innovation opportunities with ROI'

# File References
nextStepFile: './step-03-create-document.md'
processFolder: '{process_output_folder}/{process_id}'
---

# Step 2: Generate Opportunities

## STEP GOAL:

Create structured innovation opportunities (II#) with feasibility and ROI assessment.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER skip ROI estimation
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR building business cases

### Step-Specific Rules:

- 🎯 Focus on actionable opportunities with ROI
- 🚫 FORBIDDEN to create document yet
- 💬 Approach: Generate, assess, prioritize

## MANDATORY SEQUENCE

### 1. Generate II# Items

For each automation candidate:

```markdown
### II{n}: {opportunity_title}

**Target Steps:** {PS# list}
**Related Pain Points:** {PP# list}

**Opportunity:**
{clear_description_of_what_to_automate}

**Technology Recommendation:**
- Primary: {primary_technology}
- Secondary: {alternative}
- Fallback: {if_needed}

**Expected Benefits:**
- Time saved: {estimate}
- Error reduction: {estimate}
- Customer satisfaction: {impact}

**Feasibility Assessment:**
| Factor | Rating | Notes |
|--------|--------|-------|
| Technical complexity | {L/M/H} | {note} |
| Integration effort | {L/M/H} | {note} |
| Change management | {L/M/H} | {note} |
| Regulatory impact | {L/M/H} | {note} |

**Estimated ROI:**
- Investment: ${range}
- Annual savings: ${estimate}
- Payback: {months}

**Implementation Priority:** {High/Medium/Low}

**Dependencies:**
- {dependency_1}
- {dependency_2}
```

### 2. Create Feasibility Matrix

"**Innovation Feasibility Matrix:**

|                    | Low Effort | Medium Effort | High Effort |
|--------------------|------------|---------------|-------------|
| **High ROI**       | II1 ★     | II3          | II5        |
| **Medium ROI**     | II2       | II4          |             |
| **Low ROI**        |            |               | II6        |

★ = Recommended priority"

### 3. Calculate Total Investment/Returns

"**Investment Summary:**

| Opportunity | Investment | Annual Savings | Payback |
|-------------|------------|----------------|---------|
| II1 | ${amount} | ${amount} | {months} |
| II2 | ${amount} | ${amount} | {months} |
| **Total** | **${total}** | **${total}** | **{avg} months** |"

### 4. Create Technology Roadmap

"**Technology Roadmap:**

**Phase 1: Foundation (0-3 months)**
- II1: {title}
- II2: {title}

**Phase 2: Intelligence (3-6 months)**
- II3: {title}

**Phase 3: Optimization (6-12 months)**
- II4: {title}"

### 5. Present MENU OPTIONS

Display: "**Ready to create document?** [C] Continue [E] Edit opportunities"

#### Menu Handling Logic:

- IF C: Store opportunities, load, read entire file, then execute {nextStepFile}
- IF E: Allow modification of opportunities

#### EXECUTION RULES:

- ALWAYS halt and wait for user input
- ONLY proceed when user selects 'C'

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- II# items generated
- Feasibility assessed
- ROI calculated
- Roadmap created
- Priorities assigned

### ❌ SYSTEM FAILURE:

- Opportunities without ROI
- No feasibility assessment
- Creating document in this step
