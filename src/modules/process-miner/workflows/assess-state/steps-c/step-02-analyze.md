---
name: 'step-02-analyze'
description: 'Analyze documents against schema and identify gaps'

# Path Definitions
module_root: '{project-root}/src/modules/process-miner'
workflow_path: '{module_root}/workflows/assess-state'

# File References
thisStepFile: '{workflow_path}/steps-c/step-02-analyze.md'
nextStepFile: '{workflow_path}/steps-c/step-03-generate-insight.md'
workflowFile: '{workflow_path}/workflow.md'
schemaDir: '{project-root}/src/modules/process-miner/templates/documents'

# Active process files
processFolder: '{current_process_folder}'

# Session variables
contributor_name: session-variable
current_process_name: session-variable
current_process_id: session-variable
---

# Step 2: Analyze State

## STEP GOAL:

Analyze actual document content against schema requirements to identify gaps, sparse sections, and progress.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- NEVER skip document content analysis
- CRITICAL: Read the complete step file before taking any action
- CRITICAL: When loading next step, ensure entire file is read
- YOU ARE AN ANALYST identifying patterns

### Role Reinforcement:

- Continue using your established name, communication_style, and persona
- Analytical but warm tone
- Find the story in the data

### Step-Specific Rules:

- Focus on analysis, not recommendations yet
- FORBIDDEN to suggest actions in this step
- Approach: Thorough analysis, objective findings

## EXECUTION SEQUENCE

### 1. Analyze AS-IS Document

**For each section in as-is-documentation.md:**

1. **Executive Summary**
   - Word count vs minimum (100)
   - Status: complete/sparse/empty

2. **Process Overview**
   - Word count vs minimum (150)
   - Has trigger, outcome, duration?
   - Status: complete/sparse/empty

3. **Process Steps**
   - Count PS# items vs minimum (3)
   - Format compliance (has Actor, System?)
   - Status: complete/sparse/empty

4. **Pain Points**
   - Count PP# items vs expected (3-15)
   - Have references to PS#?
   - Status: complete/sparse/empty

5. **Exceptions**
   - Count EX# items
   - Status: documented/empty

6. **Control Points**
   - Count CP# items
   - Have PS# references?
   - Status: documented/empty

7. **Systems**
   - Count SYS# items vs minimum (1)
   - Status: complete/sparse/empty

### 2. Check Cross-References

**Validate references:**

- PP# → PS# (pain points reference valid steps?)
- CP# → PS# (controls reference valid steps?)
- EX# → PS# (exceptions reference valid steps?)

**Flag invalid references.**

### 3. Analyze Specialist Documents

**For each specialist document (if loaded in step 1):**

- cx-journey.md: Status, JT# count, FP# count
- transformation.md: Status, TD# count
- innovation.md: Status, II# count
- architecture.md: Status, has diagrams?

### 4. Calculate Completion

**Build analysis summary:**

```yaml
analysis:
  as_is:
    overall: {percentage}
    gaps:
      - section: "control_points"
        severity: "high"
        reason: "Empty - no controls documented"
      - section: "pain_points"
        severity: "medium"
        reason: "5 items, expected 6-10"
    sparse:
      - section: "executive_summary"
        word_count: 45
        minimum: 100

  specialists:
    cx_journey: not_started
    transformation: not_started
    innovation: not_started
    architecture: not_started

  cross_references:
    valid: 12
    invalid: 1
    details: ["PP3 → PS15 (invalid)"]

  overall_completion: {percentage}
```

### 5. Store Analysis and Auto-Proceed

Store analysis results for insight generation.

```
<action>Load, read entire file, then execute {nextStepFile}</action>
```

---

## CRITICAL STEP COMPLETION NOTE

This is an auto-proceed step. IMMEDIATELY after analysis is complete, load and read fully `{nextStepFile}` to generate insights.

---

## SYSTEM SUCCESS/FAILURE METRICS

### SUCCESS:

- All document sections analyzed
- Counts and word counts calculated
- Gaps and sparse sections identified
- Cross-references validated
- Analysis stored for next step

### SYSTEM FAILURE:

- Skipping document analysis
- Making recommendations in this step
- Not validating cross-references
- Not calculating completion percentage
