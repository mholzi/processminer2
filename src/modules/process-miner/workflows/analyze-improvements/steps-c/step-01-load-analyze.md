---
name: 'step-01-load-analyze'
description: 'Load source data and upstream specialist outputs, analyze for improvement opportunities'

# File References
nextStepFile: './step-02-generate-recommendations.md'
processFolder: '{process_output_folder}/{process_id}'
---

# Step 1: Load and Analyze

## STEP GOAL:

Load AS-IS documentation AND upstream specialist outputs, then analyze pain points cross-referenced with client friction, compliance gaps, and innovation opportunities.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER proceed if REQUIRED prerequisites not met
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR analyzing data
- 📏 **SCHEMA IS LAW** — all content created or modified MUST meet per-document `.schema.yaml` validation rules

### Step-Specific Rules:

- 🎯 Focus on thorough cross-agent analysis — not just pain points
- 🚫 FORBIDDEN to generate recommendations yet
- 💬 Approach: Load, cross-reference, assess addressability

## MANDATORY SEQUENCE

### 1. Check Prerequisites

Load _progress.yaml and verify:

**REQUIRED (blocks workflow if not met):**
- Process steps documented (count >= 3)
- Pain points documented (count >= 1)

**IF REQUIRED not met:**
"⚠️ Transformation analysis requires:
- Process steps documented (found: {count})
- Pain points documented (found: {count})

Please complete AS-IS documentation first."
Exit workflow.

**RECOMMENDED (warn if not met, allow user to proceed or return):**
- CX Journey analysis complete (FP# friction points documented)
- Control analysis complete (CIR# improvement recommendations documented)
- Innovation analysis complete (II# innovation ideas documented)

**IF any RECOMMENDED not met:**
"⚠️ **Upstream Analysis Gaps Detected:**

| Upstream Agent | Status | Impact if Missing |
|----------------|--------|-------------------|
| CX Journey (FP#, CES) | {complete/missing} | Decisions may miss client friction points |
| Control (CIR#, CP# gaps) | {complete/missing} | Decisions may miss compliance opportunities or violate constraints |
| Innovation (II#, TR#) | {complete/missing} | Decisions may propose manual solutions when automation is feasible |

Transformation decisions based on incomplete upstream input will have **reduced confidence**.

**[P]** Proceed with available data (reduced confidence)
**[R]** Return to Companion to complete upstream analysis first"

**IF user selects R:** Exit workflow, return to invoking agent menu.
**IF user selects P:** Continue with warning flag. All TD# items generated will note which upstream analyses were missing in their confidence field.

### 2. Load Source Data (AS-IS Foundation)

```
Loading AS-IS source data...
✓ Process steps: {count}
✓ Pain points: {count}
✓ Exceptions: {count}
✓ Systems: {count}
✓ Controls: {count}
```

### 3. Load Upstream Specialist Outputs

For each available upstream analysis, load the relevant data:

**From CX Journey (if available):**
- Load cx-journey-documentation.md — extract FP# friction points, CES score, EI# enhancement ideas, JT# touchpoints
- Load client-touchpoints-detail.md if present
- Load friction-points-detail.md if present

**From Control (if available):**
- Load control-points-detail.md — extract §9 "Input for Downstream Agents → For Transformation Agent"
- Extract CIR# control improvement recommendations
- Extract automation analysis per control (potential, blockers, ROI)
- Extract CP# gaps and SOD# segregation of duties items

**From Innovation (if available):**
- Load innovation-analysis-documentation.md — extract II# innovation ideas with feasibility scores
- Extract TR# market trends
- Extract MoSCoW prioritization (MUST HAVE, SHOULD HAVE, COULD HAVE, WON'T HAVE)
- Note technology candidates matched to PP# and SYS# items

**From Pain Points Detail (if available):**
- Load pain-points-detail.md — extract §7 "Input for Downstream Agents → For Transformation Agent"

```
Loading upstream specialist data...
✓ CX Journey: {count} friction points, CES: {score} | {status}
✓ Control: {count} improvement recs, {count} gaps | {status}
✓ Innovation: {count} ideas, {count} trends | {status}
✓ Pain Points Detail §7: {loaded/not available}
```

### 4. Cross-Reference Analysis

For each pain point, assess using ALL available upstream data:

"**Analyzing pain points with cross-agent data...**"

```
PP{n}: {title}
  Impact: {impact}
  Frequency: {frequency}
  Root Cause: {root_cause}

  Cross-Agent Analysis:
  - Client friction: {FP# match or "No FP# correlation"}
  - Compliance impact: {CIR# match or "No compliance dimension"}
  - Automation opportunity: {II# match or "No innovation candidate"}
  - Addressable: {yes/no/partial}
  - Solution type: {automation/process/policy/training/technology}
  - Estimated effort: {low/medium/high}
  - Expected benefit: {low/medium/high}
  - Quick win potential: {yes/no}
  - Confidence: {high/medium/low — reduced if upstream data missing}
  - Convergence score: {count of upstream sources that reinforce this item}
```

Also identify **upstream-only opportunities** — items surfaced by CX, Control, or Innovation that don't directly map to an existing PP#:

```
Upstream-only opportunities:
- FP{n}: {friction point with no matching PP#}
- CIR{n}: {control improvement with no matching PP#}
- II{n}: {innovation idea with no matching PP#}
```

### 5. Present Analysis Summary

"**Cross-Agent Analysis Complete**

| PP# | Title | FP# Match | CIR# Match | II# Match | Addressable | Solution Type | Quick Win | Convergence |
|-----|-------|-----------|-------------|-----------|-------------|---------------|-----------|-------------|
| PP1 | {title} | FP3 | — | II2 | Yes | Automation | Yes | 2 |
| PP2 | {title} | — | CIR1 | — | Partial | Process | No | 1 |
...

**Upstream-Only Opportunities:** {count}

**Summary:**
- Total pain points analyzed: {count}
- Cross-referenced with FP#: {count} ({percentage}%)
- Cross-referenced with CIR#: {count} ({percentage}%)
- Cross-referenced with II#: {count} ({percentage}%)
- Addressable: {count} ({percentage}%)
- Quick wins identified: {count}
- High-convergence items (3+ sources): {count}
- Confidence level: {high/medium/reduced — based on upstream completeness}"

### 6. Present MENU OPTIONS

Display: "**Ready to generate recommendations?** [C] Continue [D] Details on specific item [U] Show upstream-only opportunities"

#### Menu Handling Logic:

- IF C: Store analysis, load, read entire file, then execute {nextStepFile}
- IF D: Show detailed analysis for requested PP/FP/CIR/II, then redisplay menu
- IF U: Show upstream-only opportunities that may warrant new TD# items, then redisplay menu

#### EXECUTION RULES:

- ALWAYS halt and wait for user input
- ONLY proceed when user selects 'C'

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- REQUIRED prerequisites verified
- RECOMMENDED prerequisites checked and user informed of gaps
- AS-IS source data loaded
- Upstream specialist data loaded (where available)
- Each pain point analyzed with cross-agent references
- Upstream-only opportunities identified
- Convergence scores calculated
- Confidence level assessed based on upstream completeness
- Summary presented with cross-agent correlation

### ❌ SYSTEM FAILURE:

- Proceeding without REQUIRED prerequisites
- Not loading available upstream specialist data
- Not warning user about missing upstream analysis
- Analyzing only pain points without cross-referencing FP#, CIR#, II#
- Generating recommendations in this step
