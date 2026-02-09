---
validationDate: 2026-02-04
workflowName: Start New Process
workflowPath: src/modules/process-miner/workflows/start-new-process
validationStatus: COMPLETE
completionDate: 2026-02-04
---

# Validation Report: Start New Process

**Validation Started:** 2026-02-04
**Validator:** BMAD Workflow Validation System
**Standards Version:** BMAD Workflow Standards

---

## File Structure & Size

### Folder Structure

```
start-new-process/
├── workflow.md
├── steps-c/
│   └── step-01-init.md
└── templates/
    ├── progress.template.yaml
    └── as-is.template.md
```

**Structure Assessment:**
- ✅ workflow.md exists
- ✅ Step files organized in `steps-c/` folder
- ✅ Non-step reference files organized in `templates/` folder
- ✅ Folder names are logical and descriptive
- ℹ️ No `data/` folder — not required for this single-step workflow

### File Size Analysis

| File | Lines | Status |
|------|-------|--------|
| workflow.md | 77 | ✅ Good |
| steps-c/step-01-init.md | 271 | ❌ **Exceeds limit** (250 max) |
| templates/progress.template.yaml | 110 | ✅ Good (template) |
| templates/as-is.template.md | 56 | ✅ Good (template) |

**Size Violations:**
- ❌ `step-01-init.md` at **271 lines** exceeds the 250-line maximum. Recommendation: Extract the JSON schema initialization (lines 127-165) and/or the YAML initialization (lines 167-188) to `data/` reference files or templates to bring the step under limit.

### File Presence Verification

- ⚠️ No `workflow-plan.md` found — cannot verify step files against design plan
- ✅ workflow.md references `step-01-init.md` and it exists
- ✅ Single-step workflow — no sequential gaps possible

**Overall: ⚠️ WARNINGS** — Step file exceeds size limit

---

## Frontmatter Validation

### workflow.md

| Variable | Used in Body? | Status |
|----------|--------------|--------|
| `module_root` | No (frontmatter-only) | ⚠️ Frontmatter-only variable |
| `config_source` | ✅ Line 55 | ✅ PASS |
| `process_output_folder` | Not directly as `{process_output_folder}` | ⚠️ Mentioned in text but not in `{var}` format |
| `communication_language` | Not directly as `{communication_language}` | ⚠️ Mentioned in text but not in `{var}` format |
| `step_01` | ✅ Line 65 | ✅ PASS |
| `process_registry_file` | No | ❌ UNUSED |
| `installed_path` | No | ❌ UNUSED |
| `workflow_path` | No (frontmatter-only) | ❌ FORBIDDEN PATTERN |
| `contributor_name` | No | ⚠️ Session variable declaration |
| `contributor_role` | No | ⚠️ Session variable declaration |

**Path Violations:**
- ❌ `workflow_path: '{installed_path}'` — FORBIDDEN: `workflow_path` variable is not allowed per standards
- ❌ `step_01: '{workflow_path}/steps-c/step-01-init.md'` — uses forbidden `{workflow_path}`. Should use relative path convention

**Note:** workflow.md serves as the orchestrator and some variables may be pass-through declarations for step files. However, the forbidden `workflow_path` pattern and unused variables still represent violations.

**workflow.md Status: ❌ FAIL** — Forbidden patterns and unused variables

---

### steps-c/step-01-init.md

| Variable | Used in Body? | Status |
|----------|--------------|--------|
| `module_root` | No (frontmatter-only, lines 7, 16) | ❌ UNUSED in body |
| `workflow_path` | No (frontmatter-only, lines 11, 12) | ❌ FORBIDDEN PATTERN + UNUSED |
| `process_output_folder` | ✅ Lines 91, 112, 214 | ✅ PASS |
| `thisStepFile` | No — 0 matches | ❌ UNUSED |
| `workflowFile` | No — 0 matches | ❌ UNUSED |
| `process_registry_file` | ✅ Lines 88, 92, 99, 120 | ✅ PASS |
| `process_registry_template` | No — 0 matches | ❌ UNUSED |
| `structured_data_file` | ✅ Line 128 | ✅ PASS |
| `main_document_file` | ✅ Line 189 | ✅ PASS |
| `contributor_name` | ✅ Lines 46, 57, 136, 175, 201, 216, 235 | ✅ PASS |
| `contributor_role` | ✅ Lines 46, 137, 202, 217, 235 | ✅ PASS |

**Unused Variables (5):**
1. `module_root` — only used to define other frontmatter vars, never in body
2. `workflow_path` — FORBIDDEN + only used in frontmatter definitions
3. `thisStepFile` — classic forbidden pattern, never referenced
4. `workflowFile` — classic forbidden pattern, never referenced
5. `process_registry_template` — defined but never used in body

**Path Violations (4):**
1. ❌ `workflow_path: '{module_root}/workflows/start-new-process'` — FORBIDDEN variable
2. ❌ `thisStepFile: '{workflow_path}/steps-c/step-01-init.md'` — uses forbidden `{workflow_path}` AND is unused
3. ❌ `workflowFile: '{workflow_path}/workflow.md'` — uses forbidden `{workflow_path}` AND is unused
4. ❌ `process_registry_template: '{module_root}/templates/process-registry.md'` — unused variable with `{module_root}` dependency

**step-01-init.md Status: ❌ FAIL** — 5 unused variables, 4 path violations, forbidden patterns

---

**Overall Frontmatter Validation: ❌ FAIL**

## Critical Path Violations

### Config Variables (Exceptions)

The following config variables were identified from workflow.md Configuration Loading section.
Paths using these variables are valid even if not relative (they reference post-install output locations):

- `process_output_folder` (from config.yaml)
- `communication_language` (from config.yaml)

### Content Path Violations

| File | Line | Issue | Details |
|------|------|-------|---------|
| step-01-init.md | 6 (frontmatter) | `{project-root}/` in frontmatter | `module_root: '{project-root}/src/modules/process-miner'` — frontmatter-only, not in body content |
| workflow.md | 7 (frontmatter) | `{project-root}/` in frontmatter | `module_root: '{project-root}/src/modules/process-miner'` — frontmatter-only |

**No hardcoded `{project-root}/` paths found in body content.** ✅

### Dead Links

| File | Variable | Expected Path | Status |
|------|----------|---------------|--------|
| step-01-init.md | `process_registry_template` | `{module_root}/templates/process-registry.md` | ❌ **DEAD LINK** — File does not exist at `src/modules/process-miner/templates/process-registry.md`. Actual location: `src/modules/process-miner/templates/documents/process-registry.md` (missing `documents/` subfolder) |
| step-01-init.md | `thisStepFile` | `{workflow_path}/steps-c/step-01-init.md` | ⚠️ Unused variable — would resolve correctly but uses forbidden `{workflow_path}` |
| step-01-init.md | `workflowFile` | `{workflow_path}/workflow.md` | ⚠️ Unused variable — would resolve correctly but uses forbidden `{workflow_path}` |

**Note:** Output files using config variables (`{process_output_folder}`, `{current_process_folder}`) were correctly skipped during existence checks.

### Module Awareness

- ✅ No BMB-specific path assumptions found in this process-miner module workflow
- ✅ All paths correctly reference `{module_root}` for module-specific resources

### Summary

- **CRITICAL:** 1 violation — `process_registry_template` points to wrong path (missing `documents/` subfolder). However, this variable is **unused in body** so it won't break execution.
- **HIGH:** 0 violations
- **MEDIUM:** 2 violations — unused variables with `{workflow_path}` would be dead links if used

**Status: ⚠️ WARNINGS** — Dead link found but in unused variable; no runtime-breaking issues

## Menu Handling Validation

### steps-c/step-01-init.md

- **Menu Present:** No
- **Check 1 — Handler Section:** N/A (no menu)
- **Check 2 — Execution Rules:** N/A (no menu)
- **Check 3 — Non-C Redisplay:** N/A (no menu)
- **Check 4 — C Option Sequence:** N/A (no menu)
- **Check 5 — A/P Appropriateness:** ✅ PASS — No A/P present. Correct for init step that returns control to invoking agent.

**Assessment:** This is a single-step init workflow with `standalone: false`. It gathers input, creates files, and returns control. No menu is required or appropriate — the workflow correctly ends with a "WORKFLOW COMPLETE — Return control to the invoking agent" directive.

**Overall Menu Handling: ✅ PASS** — No menus required; pattern is correct for init/return-control workflow

## Step Type Validation

### steps-c/step-01-init.md

| Attribute | Value |
|-----------|-------|
| **Expected Type** | Init (Non-Continuable) + Final (single-step workflow) |
| **Actual Type** | Init (Non-Continuable) + Final |
| **Matches Pattern?** | ✅ Yes |

**Init (Non-Continuable) Checks:**
- ✅ Creates output files (structured-data.json, _progress.yaml, as-is-documentation.md, session file)
- ✅ No A/P menu — correct for init step
- ✅ Not continuable — no `continueFile` reference
- ✅ `standalone: false` in workflow.md — correctly returns control to invoking agent

**Final Step Checks:**
- ✅ No `nextStepFile` in frontmatter
- ✅ Completion message: "WORKFLOW COMPLETE — Return control to the invoking agent" (line 241)
- ✅ No next step to load

**Required Sections:**
- ✅ STEP GOAL section present
- ✅ MANDATORY EXECUTION RULES section present
- ✅ Role Reinforcement subsection present
- ✅ Step-Specific Rules subsection present
- ✅ SYSTEM SUCCESS/FAILURE METRICS present
- ⚠️ No "CONTEXT BOUNDARIES" section — standard template includes this (minor)
- ⚠️ Uses "EXECUTION SEQUENCE" instead of "EXECUTION PROTOCOLS" — acceptable variant for init step

**Violations:** None critical

**Overall Step Type Validation: ✅ PASS** — Step correctly follows Init (Non-Continuable) + Final pattern with minor template deviations

## Output Format Validation

### Document Production

This workflow does **not** produce a progressive document output. It is an **infrastructure/setup workflow** that initializes files for subsequent workflows to populate.

**Files Created (infrastructure, not progressive document output):**
- `structured-data.json` — JSON schema for structured data capture
- `_progress.yaml` — Progress tracking file
- `as-is-documentation.md` — Skeleton document from template (populated by other workflows)
- `sessions/session-{timestamp}.json` — Session tracking
- `_active-session.yaml` — Active session state
- `process-registry.md` — Updated with new entry

### Template Assessment

| Template | Type | Purpose | Status |
|----------|------|---------|--------|
| `templates/progress.template.yaml` | Infrastructure | Progress tracking init | ✅ Exists (110 lines) |
| `templates/as-is.template.md` | Skeleton | Document placeholder | ✅ Exists (56 lines) |

- ⚠️ `templates/progress.template.yaml` exists but is **not referenced** in step-01-init.md frontmatter. The step inlines the YAML initialization (lines 168-187) instead of referencing the template.
- ⚠️ `templates/as-is.template.md` exists and is implicitly referenced on line 189 ("Create {main_document_file} from as-is template") but lacks a formal frontmatter variable reference.

### Final Polish Evaluation

- N/A — This is not a document-producing workflow. No final polish step required.

### Step-to-Output Mapping

- No `outputFile` variable in frontmatter (correct — not a document workflow)
- No `stepsCompleted` tracking (correct — non-continuable single-step)
- Step creates infrastructure files via `<action silent="true">` blocks (appropriate pattern)

### Issues

1. ⚠️ Template files exist in `templates/` but aren't formally referenced via frontmatter variables — the step inlines content or uses implicit references. Consider adding frontmatter variables for template paths for better traceability.
2. ⚠️ The inline JSON schema (lines 127-165) and YAML template (lines 167-187) in the step body contribute to the file exceeding the 250-line limit. Extracting these to `data/` or referencing the existing templates would reduce step size.

**Overall Output Format Validation: ✅ PASS with ⚠️ WARNINGS** — Infrastructure workflow pattern is correct; template referencing could be improved

## Validation Design Check

**Is Validation Critical for this Workflow?** No

**Reasoning:** This is a process setup/initialization workflow — it captures a process name, creates folders, and initializes files. It is not a compliance, safety, legal, or regulated workflow. The output is infrastructure (folders, JSON schema, YAML tracking), not user-facing documents requiring quality gates.

**Validation Steps Found:** None (no `steps-v/` folder)

**Assessment:** Appropriate — this single-step init workflow does not require tri-modal validation architecture. The workflow correctly has only `steps-c/`.

**Overall Validation Design: ✅ PASS (N/A)** — Validation not required for this workflow type

---

## Instruction Style Check

**Workflow Domain:** Infrastructure setup / process initialization
**Appropriate Style:** Mixed — intent-based for user interaction, prescriptive for infrastructure creation

### steps-c/step-01-init.md

**Instruction Style Classification:** Mixed (appropriate)

**User-Facing Interactions (Intent-Based):**
- Line 57: `"Hey {contributor_name}, let's set up a new process documentation project."` — Friendly, conversational ✅
- Line 66: `"What is the name of the process we're documenting today?"` — Open question with examples ✅
- Line 73-80: Business segment selection — Clear options with helpful context ✅

**Infrastructure Actions (Prescriptive):**
- Sections 4-8: `<action silent="true">` blocks with precise instructions for file creation, JSON schema, YAML initialization — Correctly prescriptive for deterministic operations ✅

**Style Indicators:**
- ✅ Describes goals/outcomes for user interactions
- ✅ Uses prescriptive instructions only for silent infrastructure actions
- ✅ Role reinforcement: "We engage in collaborative dialogue with the SME"
- ✅ "FORBIDDEN to start eliciting process details" — clear boundary

**Issues:** None

**Overall Instruction Style: ✅ PASS** — Appropriate mixed style for init workflow

---

## Collaborative Experience Check

### Overall Facilitation Quality: Good

**step-01-init.md:**
- **Question style:** Progressive ✅ — Asks process name first, then segments separately
- **Conversation flow:** Natural ✅ — Friendly greeting, one topic at a time
- **Role clarity:** ✅ — "YOU ARE A FACILITATOR, not a content generator"
- **Status:** ✅ PASS

**Collaborative Strengths:**
- Warm greeting with contributor's name creates connection
- Only 2 user interaction points — focused and efficient
- Clear examples provided ("Client Onboarding", "Payment Processing", "KYC Review")
- Checkbox format for segments is user-friendly
- Confirmation display at end provides clear feedback on what was created

**Collaborative Issues:** None identified

**Progression and Arc:**
- ✅ Clear progression: greet → name → segments → create → confirm
- ✅ User knows what's happening (setup message at start, confirmation at end)
- ✅ Satisfying completion — clear summary of what was created

**Error Handling:**
- ✅ Step-Specific Rules prevent re-asking for contributor info
- ⚠️ No explicit handling for invalid process name input (empty string, special characters)
- ⚠️ No "what if user says 'I don't know' to segments" handling

**User Experience Assessment:**
- [x] A collaborative partner working WITH the user
- [ ] A form collecting data FROM the user
- [ ] An interrogation extracting information

**Overall Collaborative Rating:** 4/5

**Status: ✅ GOOD** — Natural facilitation with minor edge-case handling gaps

---

## Subprocess Optimization Opportunities

**Total Opportunities:** 2 | **High Priority:** 1 | **Estimated Context Savings:** Moderate

### High-Priority Opportunities

**step-01-init.md — Pattern 3 (Data Operations)**
- **Current:** JSON schema (lines 127-165, ~38 lines) and YAML template (lines 167-187, ~20 lines) are inlined in the step body
- **Suggested:** Extract to `data/structured-data-schema.json` and reference the existing `templates/progress.template.yaml`. Use frontmatter variables to reference them.
- **Impact:** Reduces step file from 271 lines to ~213 lines (under 250 limit). Improves maintainability — schema changes don't require step file editing.

### Low-Priority Opportunities

**step-01-init.md — Pattern 1 (Registry Check)**
- **Current:** Step checks if process registry exists, reads it, parses highest number
- **Suggested:** This is a single operation — subprocess overhead would exceed benefit
- **Impact:** Minimal — single-step workflow with one registry check

### Summary by Pattern

- **Pattern 1 (grep/regex):** 0 opportunities
- **Pattern 2 (per-file):** 0 opportunities (single step)
- **Pattern 3 (data ops):** 1 opportunity — extract inline schemas to data files
- **Pattern 4 (parallel):** 0 opportunities (single step, sequential operations)

### Implementation Recommendations

**Quick Win:** Extract inline JSON schema to `data/structured-data-schema.json` — solves size violation AND improves maintainability
**Strategic:** Reference existing `templates/progress.template.yaml` instead of inlining YAML — DRY principle
**Future:** Consider if the as-is template reference should be a formal frontmatter variable

**Status: ⚠️ Review recommended** — 1 high-priority optimization would resolve the size violation

## Cohesive Review

### Overall Assessment: Good

### User Experience Walkthrough

Walking through this workflow as a user (SME working with a process documentation agent):

1. **Entry:** workflow.md loads config, recognizes non-standalone init workflow
2. **Greeting:** Warm, personal — "Hey {contributor_name}, let's set up a new process documentation project."
3. **Process Name:** Clear prompt with concrete examples (Client Onboarding, Payment Processing, KYC Review)
4. **Segments:** Well-formatted checkbox selection with "All segments" option
5. **Silent Infrastructure:** Registry check, folder creation, file initialization — user doesn't see this
6. **Confirmation:** Clean summary showing process name, number, folder, contributor, segments
7. **Return:** Control passes back to invoking agent with active process set

**Time to complete:** ~30 seconds of user interaction. Efficient.

### Quality Dimensions

| Dimension | Rating | Notes |
|-----------|--------|-------|
| Goal Clarity | Excellent | "Capture name, create folder, initialize files, return" |
| Logical Flow | Excellent | Linear, minimal, efficient |
| Facilitation Quality | Good | Warm greeting, clear prompts, examples provided |
| User Experience | Good | Fast and focused, not overwhelming |
| Goal Achievement | Excellent | Creates all required infrastructure |
| Technical Correctness | Good | Comprehensive file initialization with proper schemas |

### Strengths

1. **Single-step efficiency** — doesn't over-engineer a setup task. One step, minimal interaction, complete infrastructure.
2. **`<action silent="true>` pattern** — cleanly separates user interactions from infrastructure operations
3. **Session variable awareness** — uses `{contributor_name}` and `{contributor_role}` from agent activation, never re-asks
4. **Comprehensive initialization** — structured-data.json (with schema version), _progress.yaml, as-is-documentation.md, session file, active-session, registry update
5. **Numbered folder system** — 001-client-onboarding pattern provides clean organization
6. **Confirmation display** — user sees exactly what was created before control returns

### Weaknesses

1. **File size violation** — 271 lines exceeds 250-line limit (solvable by extracting inline schemas)
2. **Frontmatter hygiene** — 5 unused variables, forbidden `workflow_path` pattern, dead link in `process_registry_template`
3. **Template disconnect** — `templates/progress.template.yaml` exists but step inlines YAML; `as-is.template.md` exists but isn't formally referenced in frontmatter
4. **No input validation** — no handling for empty process name, special characters, or "I don't know" responses to segment selection
5. **Missing CONTEXT BOUNDARIES section** — minor template deviation

### Critical Issues

None show-stopping. The workflow would function correctly despite frontmatter hygiene issues. The unused variables and forbidden patterns are cleanup tasks, not functional blockers.

### Recommendation

**Good — Solid workflow needing cleanup.** The core user experience and infrastructure creation are well-designed. Issues are primarily in frontmatter compliance (unused variables, forbidden patterns) and file size (inline schemas bloating the step). A cleanup pass would bring this to excellent status.

**Priority fixes:**
1. Remove 5 unused frontmatter variables (`module_root`, `workflow_path`, `thisStepFile`, `workflowFile`, `process_registry_template`)
2. Extract inline JSON schema to `data/structured-data-schema.json` (fixes size violation)
3. Reference existing templates via frontmatter variables

---

## Plan Quality Validation

No `workflow-plan.md` found — workflow may have been built without the BMAD create-workflow process or the plan was not retained.

**Status: N/A** — Cannot validate plan implementation without a plan file

---

## Summary

**Validation Completed:** 2026-02-04
**Overall Status: ⚠️ NEEDS MINOR CLEANUP**

### Validation Steps Completed

| Step | Check | Result |
|------|-------|--------|
| 1 | File Structure & Size | ⚠️ WARNINGS — step-01-init.md exceeds 250-line limit (271 lines) |
| 2 | Frontmatter Validation | ❌ FAIL — 5 unused variables, forbidden `workflow_path` pattern |
| 2b | Critical Path Violations | ⚠️ WARNINGS — dead link in unused variable |
| 3 | Menu Handling | ✅ PASS — no menu required (init/return-control pattern) |
| 4 | Step Type Validation | ✅ PASS — correct Init + Final pattern |
| 5 | Output Format | ✅ PASS (with warnings) — infrastructure workflow pattern correct |
| 6 | Validation Design Check | ✅ PASS (N/A) — validation not required for this type |
| 7 | Instruction Style | ✅ PASS — appropriate mixed style |
| 8 | Collaborative Experience | ✅ GOOD — natural facilitation, 4/5 rating |
| 8b | Subprocess Optimization | ⚠️ 1 high-priority optimization opportunity |
| 9 | Cohesive Review | ✅ GOOD — solid workflow needing cleanup |
| 11 | Plan Quality | N/A — no plan file found |

### Critical Issues (Must Fix): 0

No critical issues that would prevent the workflow from functioning.

### Warnings (Should Fix): 7

1. **step-01-init.md exceeds 250-line limit** (271 lines) — extract inline JSON/YAML to data files
2. **5 unused frontmatter variables** — remove `module_root`, `workflow_path`, `thisStepFile`, `workflowFile`, `process_registry_template`
3. **Forbidden `workflow_path` pattern** in both workflow.md and step-01-init.md
4. **Dead link** in `process_registry_template` (wrong path, missing `documents/` subfolder)
5. **Templates not formally referenced** in frontmatter variables
6. **Inline schemas** duplicating template files
7. **No input validation** for edge cases (empty name, unknown segments)

### Key Strengths

- Efficient single-step design for a setup workflow
- Clean separation of user interaction and infrastructure operations
- Comprehensive file initialization with proper schemas
- Good collaborative facilitation quality
- Strong session variable management

### Recommendation

**Ready to use with cleanup recommended.** The workflow functions correctly and provides a good user experience. A cleanup pass to address frontmatter hygiene and file size would bring it to full BMAD compliance.

### Suggested Next Steps

1. Remove unused frontmatter variables from both workflow.md and step-01-init.md
2. Replace `workflow_path` references with relative paths
3. Extract inline JSON schema to `data/structured-data-schema.json`
4. Add formal frontmatter references for template files
5. Fix `process_registry_template` path (add `documents/` subfolder) or remove if unused
