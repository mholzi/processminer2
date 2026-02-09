# BMAD Workflow & Template Compliance Analysis

**Analysis Date:** 2026-02-04
**Analyst:** Bond (Agent Building Expert)
**Scope:** Process-Miner Module Workflows and Templates

---

## Executive Summary

The ProcessMiner module contains **17 workflows** that require significant restructuring to comply with BMAD standards. The current workflows are implemented as **flat documentation files** rather than proper **step-file architecture**.

| Category | Current State | BMAD Standard | Gap Severity |
|----------|---------------|---------------|--------------|
| Workflow Architecture | Flat single-file | Step-file with folders | **CRITICAL** |
| Step Files | None | Individual .md per step | **CRITICAL** |
| Frontmatter | Basic metadata only | Full variable references | **HIGH** |
| Menu Handling | None | A/P/C pattern required | **HIGH** |
| State Tracking | None | stepsCompleted array | **HIGH** |
| Output Templates | None | Handlebars templates | **MEDIUM** |
| Continuable Support | None | Step-01b continuation | **MEDIUM** |
| Tri-Modal Structure | None | steps-c/e/v folders | **LOW** |

**Overall Compliance: ~15%**

---

## Part 1: Current State Analysis

### 1.1 Workflow Inventory

| Workflow | Type | Agent | Status |
|----------|------|-------|--------|
| start-new-process | Core | PDA | Flat file |
| continue-session | Core | PDA | Flat file |
| assess-state | Core | Companion | Flat file |
| capture-item | Utility | Multiple | Flat file |
| compose-document | Feature | PDA | Flat file |
| review-draft | Feature | PDA | Flat file |
| import-existing | Feature | PDA | Flat file |
| export-to-yaml | Feature | PDA | Flat file |
| update-progress | Utility | Internal | Flat file |
| analyze-improvements | Feature | Transformation | Flat file |
| cx-journey-analysis | Feature | CX Journey | Flat file |
| control-compliance | Feature | Control | Flat file |
| innovation-analysis | Feature | Innovation | Flat file |
| design-architecture | Feature | IT Architect | Flat file |
| qa-validation | Feature | QA | Flat file |
| qa-check | Feature | QA | Flat file |
| executive-summary | Feature | Multiple | Flat file |

### 1.2 Current Folder Structure (Non-Compliant)

```
src/modules/process-miner/workflows/
├── start-new-process/
│   ├── workflow.md              # All content in one file
│   └── start-new-process.spec.md
├── assess-state/
│   ├── workflow.md
│   └── assess-state.spec.md
├── capture-item/
│   ├── workflow.md
│   └── capture-item.spec.md
└── ... (same pattern for all 17 workflows)
```

**Issues:**
- No `steps-c/` folder for create flow steps
- No individual step files
- No `data/` folder for shared references
- No `templates/` folder for output templates
- No tri-modal support (`steps-e/`, `steps-v/`)

### 1.3 Current workflow.md Structure (Example: start-new-process)

```markdown
---
name: start-new-process
description: Initialize new process documentation project
module: process-miner
agent: pda
type: core
---

# Start New Process Workflow

Creates the folder structure, initializes tracking...

## What This Workflow Does
[Bullet list of features]

## INITIALIZATION
### 1. Gather Process Information
[Instructions embedded in main file]

## FOLDER CREATION
### 2. Generate Process ID
[More instructions]
...
```

**Issues:**
- All workflow steps are in a single file
- No step-file architecture
- No frontmatter variable references
- No menu handling sections
- No execution rules
- No state tracking
- Instructions are documentation, not executable step format

---

## Part 2: BMAD Standard Requirements

### 2.1 Required Folder Structure (Per Workflow)

```
workflow-name/
├── workflow.md              # LEAN entry point with routing only
├── data/                    # Shared reference files
│   ├── standards.md
│   └── patterns.md
├── templates/               # Output templates
│   └── output-template.md
└── steps-c/                 # Create flow steps
    ├── step-01-init.md
    ├── step-02-[name].md
    ├── step-03-[name].md
    └── step-N-final.md
```

### 2.2 Required workflow.md Structure

```markdown
---
name: [workflow-name]
description: [Brief description]
web_bundle: true
---

# [Workflow Name]

**Goal:** [Single sentence goal]

**Your Role:** [AI role description + collaborative partnership]

## WORKFLOW ARCHITECTURE

### Core Principles
[Step-file architecture explanation]

### Step Processing Rules
[6 mandatory rules]

### Critical Rules (NO EXCEPTIONS)
[Emoji-marked rules]

## INITIALIZATION SEQUENCE

### 1. Configuration Loading
[Config loading instructions]

### 2. First Step Execution
Load, read the full file and then execute `./steps-c/step-01-init.md`
```

**Key Requirements:**
- workflow.md is LEAN - no step listings
- Routes to first step only
- Core principles and rules defined
- No implementation details

### 2.3 Required Step File Structure

```markdown
---
name: 'step-[N]-[name]'
description: '[What this step does]'
nextStepFile: './step-[N+1]-[name].md'
outputFile: '{output_folder}/[filename].md'
advancedElicitationTask: '{project-root}/_bmad/core/workflows/advanced-elicitation/workflow.xml'
partyModeWorkflow: '{project-root}/_bmad/core/workflows/party-mode/workflow.md'
---

# Step [N]: [Name]

## STEP GOAL:
[Single sentence goal]

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:
- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read complete step file before action
- 🔄 CRITICAL: When loading next step, ensure entire file read
- 📋 YOU ARE A FACILITATOR, not a content generator

### Role Reinforcement:
[Role-specific rules]

### Step-Specific Rules:
[Step-specific rules]

## EXECUTION PROTOCOLS:
[Protocols for this step]

## CONTEXT BOUNDARIES:
[Context limits and dependencies]

## MANDATORY SEQUENCE

### 1. [First Action]
[Instructions]

### 2. [Second Action]
[Instructions]

### N. Present MENU OPTIONS

Display: "**Select:** [A] Advanced Elicitation [P] Party Mode [C] Continue"

#### Menu Handling Logic:
- IF A: Execute {advancedElicitationTask}, then redisplay menu
- IF P: Execute {partyModeWorkflow}, then redisplay menu
- IF C: Save to {outputFile}, update frontmatter, load {nextStepFile}
- IF Other: Help user, then redisplay menu

#### EXECUTION RULES:
- ALWAYS halt and wait for user input
- ONLY proceed to next step when user selects 'C'
- After A/P execution, return to this menu

## CRITICAL STEP COMPLETION NOTE
[Completion requirements]

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:
[Success criteria]

### ❌ SYSTEM FAILURE:
[Failure criteria]
```

### 2.4 Menu Handling Requirements

**Reserved Letters:**
| Letter | Purpose | After Execution |
|--------|---------|-----------------|
| A | Advanced Elicitation | Redisplay menu |
| P | Party Mode | Redisplay menu |
| C | Continue/Accept | Save → Update → Load next |
| X | Exit/Cancel | End workflow |

**Required Sections:**
1. Display section with options
2. Menu Handling Logic section
3. EXECUTION RULES section with "halt and wait"

### 2.5 Frontmatter Requirements

**Standard Variables (Always Available):**
- `{project-root}` - Project root path
- `{output_folder}` - Output location
- `{user_name}` - User's name
- `{communication_language}` - Language setting

**Path Rules:**
- Same folder: `./filename.md`
- Parent folder: `../filename.md`
- External: `{project-root}/_bmad/...`
- NEVER use `{workflow_path}` variable

### 2.6 State Tracking Requirements

**For Continuable Workflows:**
```yaml
# Output file frontmatter
---
workflowType: 'process-documentation'
stepsCompleted: ['step-01-init', 'step-02-gather']
status: IN_PROGRESS
---
```

**Step Completion Pattern:**
```markdown
- IF C: Save content, append this step name to stepsCompleted, load next step
```

---

## Part 3: Gap Analysis by Workflow

### 3.1 start-new-process

| Requirement | Current | Gap |
|-------------|---------|-----|
| Step-file architecture | Single file | **MISSING** |
| Step files (est. 5) | 0 | **MISSING** |
| Frontmatter variables | Basic metadata | **INCOMPLETE** |
| Menu handling | None | **MISSING** |
| State tracking | None | **MISSING** |
| Output template | None | **MISSING** |
| Continuable | No | Should be |

**Recommended Steps:**
1. step-01-init - Gather process info, detect continuation
2. step-01b-continue - Resume existing process
3. step-02-folder-creation - Create folder structure
4. step-03-initialize-tracking - Create _progress.yaml
5. step-04-begin-discovery - Start SME interview
6. step-05-complete - Handoff to Companion

### 3.2 assess-state

| Requirement | Current | Gap |
|-------------|---------|-----|
| Step-file architecture | Single file | **MISSING** |
| Step files (est. 4) | 0 | **MISSING** |
| Frontmatter variables | Basic metadata | **INCOMPLETE** |
| Menu handling | None | **MISSING** |
| Output (non-document) | N/A | OK |

**Recommended Steps:**
1. step-01-load-context - Load _progress.yaml
2. step-02-analyze-state - Analyze documents
3. step-03-generate-insight - Create guidance
4. step-04-suggest-next - Recommend action

### 3.3 capture-item

| Requirement | Current | Gap |
|-------------|---------|-----|
| Step-file architecture | Single file | **MISSING** |
| Step files (est. 4) | 0 | **MISSING** |
| Item templates | Described but not templated | **INCOMPLETE** |
| Batch capture | Described | OK (concept) |

**Recommended Steps:**
1. step-01-determine-type - Get item type
2. step-02-load-template - Load from schema
3. step-03-gather-fields - Collect required data
4. step-04-insert-update - Insert and update progress

### 3.4 qa-validation

| Requirement | Current | Gap |
|-------------|---------|-----|
| Step-file architecture | Single file | **MISSING** |
| Step files (est. 6) | 0 | **MISSING** |
| Validation sequence | Auto-proceed pattern | **NOT IMPLEMENTED** |
| Report template | None | **MISSING** |

**Recommended Steps:**
1. step-01-load-context - Load all documents
2. step-02-structure-check - Validate structure
3. step-03-completeness-check - Check minimums
4. step-04-cross-reference-check - Validate refs
5. step-05-calculate-score - Generate score
6. step-06-generate-report - Create report

### 3.5 All Other Workflows

All 13 remaining workflows have the same fundamental gaps:
- No step-file architecture
- No individual step files
- No frontmatter standards
- No menu handling
- No state tracking

---

## Part 4: Template Analysis

### 4.1 Current Template State

**Templates Found:** 0 in process-miner module

**Templates Needed:**
| Template | Purpose | Priority |
|----------|---------|----------|
| as-is-documentation.template.md | Initial AS-IS doc | HIGH |
| _progress.template.yaml | Progress tracking | HIGH |
| cx-journey.template.md | CX journey doc | MEDIUM |
| transformation.template.md | Recommendations doc | MEDIUM |
| innovation.template.md | Innovation doc | MEDIUM |
| architecture.template.md | Architecture doc | MEDIUM |
| qa-report.template.md | Validation report | MEDIUM |
| executive-summary.template.md | Exec summary | LOW |

### 4.2 Template Standards

**Required Format:**
```markdown
{{#if comment}}
------------------------------------------------------------------------------
Template: [Template Name]
Purpose: [What this template creates]
Variables: {{var1}}, {{var2}}, ...
------------------------------------------------------------------------------
{{/if}}
---
workflowType: '[type]'
stepsCompleted: []
status: NOT_STARTED
created: '{{date}}'
---

# {{document_title}}

## Section 1
{{section_1_content}}

## Section 2
{{section_2_content}}
```

**Syntax:** Handlebars (`{{variable}}`)

---

## Part 5: Compliance Checklist

### 5.1 Workflow Compliance Checklist

For EACH of the 17 workflows:

- [ ] Create `steps-c/` folder
- [ ] Create individual step files (3-8 per workflow)
- [ ] Refactor workflow.md to lean entry point
- [ ] Add proper frontmatter with variable references
- [ ] Implement menu handling (A/P/C pattern)
- [ ] Add execution rules and halt instructions
- [ ] Add success/failure metrics
- [ ] Create output templates where needed
- [ ] Implement state tracking for continuable workflows
- [ ] Add data/ folder for shared references

### 5.2 Template Compliance Checklist

- [ ] Create all 8 required templates
- [ ] Use Handlebars syntax
- [ ] Include template header comments
- [ ] Document all variables
- [ ] Keep templates lean (structure only)

### 5.3 Step File Compliance Checklist

For EACH step file:
- [ ] Proper frontmatter with name, description
- [ ] All variables used in body are in frontmatter
- [ ] Relative paths within workflow folder
- [ ] External paths use {project-root}
- [ ] STEP GOAL section
- [ ] MANDATORY EXECUTION RULES section
- [ ] EXECUTION PROTOCOLS section
- [ ] CONTEXT BOUNDARIES section
- [ ] MANDATORY SEQUENCE section
- [ ] Menu handling (where appropriate)
- [ ] SUCCESS/FAILURE metrics
- [ ] Under 200 lines (250 max)

---

## Part 6: Recommended Implementation Plan

### Phase 1: Critical Workflows (HIGH Priority)

1. **start-new-process** - Foundation workflow
2. **continue-session** - Session continuity
3. **capture-item** - Core utility
4. **assess-state** - Companion's primary workflow

### Phase 2: Core Workflows (MEDIUM Priority)

5. **compose-document** - Document generation
6. **review-draft** - Quality review
7. **qa-validation** - Full validation
8. **qa-check** - Quick validation

### Phase 3: Specialist Workflows (LOWER Priority)

9. **analyze-improvements** - Transformation
10. **cx-journey-analysis** - CX Journey
11. **control-compliance** - Control
12. **innovation-analysis** - Innovation
13. **design-architecture** - IT Architect

### Phase 4: Utility Workflows

14. **import-existing** - Import
15. **export-to-yaml** - Export
16. **update-progress** - Progress utility
17. **executive-summary** - Summary generation

---

## Part 7: Estimated Effort

### Per-Workflow Effort

| Task | Estimated Effort |
|------|------------------|
| Restructure to step-file architecture | 30-60 min |
| Create 4-6 step files | 2-4 hours |
| Implement menu handling | 30-60 min |
| Add frontmatter standards | 15-30 min |
| Create output templates | 30-60 min |
| Testing and validation | 30-60 min |
| **Total per workflow** | **4-8 hours** |

### Total Effort

| Phase | Workflows | Estimated Total |
|-------|-----------|-----------------|
| Phase 1 | 4 workflows | 16-32 hours |
| Phase 2 | 4 workflows | 16-32 hours |
| Phase 3 | 5 workflows | 20-40 hours |
| Phase 4 | 4 workflows | 16-32 hours |
| Templates | 8 templates | 4-8 hours |
| **Grand Total** | | **72-144 hours** |

---

## Part 8: Quick Reference - Key Violations

### Current Violations (All Workflows)

| Violation | Severity | Fix Required |
|-----------|----------|--------------|
| No step-file architecture | CRITICAL | Restructure all workflows |
| No individual step files | CRITICAL | Create step files |
| No menu handling | HIGH | Add A/P/C menus |
| No halt-and-wait | HIGH | Add execution rules |
| No frontmatter variables | HIGH | Add variable references |
| No state tracking | HIGH | Add stepsCompleted |
| No output templates | MEDIUM | Create templates |
| No continuation support | MEDIUM | Add step-01b files |
| workflow.md not lean | MEDIUM | Remove step details |
| No success/failure metrics | LOW | Add metrics sections |

### Template Violations

| Violation | Severity | Fix Required |
|-----------|----------|--------------|
| No templates exist | MEDIUM | Create all 8 templates |
| No Handlebars syntax | N/A | N/A (none exist) |
| No variable documentation | N/A | N/A (none exist) |

---

## Appendix A: BMAD Workflow Standards Sources

| Document | Location |
|----------|----------|
| Architecture | `_bmad/bmb/workflows/workflow/data/architecture.md` |
| Step File Rules | `_bmad/bmb/workflows/workflow/data/step-file-rules.md` |
| Frontmatter Standards | `_bmad/bmb/workflows/workflow/data/frontmatter-standards.md` |
| Menu Handling | `_bmad/bmb/workflows/workflow/data/menu-handling-standards.md` |
| Output Format | `_bmad/bmb/workflows/workflow/data/output-format-standards.md` |
| Step Type Patterns | `_bmad/bmb/workflows/workflow/data/step-type-patterns.md` |
| Workflow Template | `_bmad/bmb/workflows/workflow/templates/workflow-template.md` |
| Step Template | `_bmad/bmb/workflows/workflow/templates/step-template.md` |

---

## Appendix B: Example Compliant Workflow Structure

### Example: start-new-process (Compliant)

```
start-new-process/
├── workflow.md                    # Lean entry point
├── data/
│   └── process-structure.md       # Folder structure reference
├── templates/
│   ├── as-is.template.md          # AS-IS document template
│   └── progress.template.yaml     # Progress tracking template
└── steps-c/
    ├── step-01-init.md            # Gather info, detect continuation
    ├── step-01b-continue.md       # Resume existing
    ├── step-02-create-folder.md   # Create structure
    ├── step-03-init-tracking.md   # Initialize _progress.yaml
    ├── step-04-discovery.md       # Begin SME interview
    └── step-05-complete.md        # Handoff to Companion
```

---

*Analysis completed by Bond - Agent Building Expert*
