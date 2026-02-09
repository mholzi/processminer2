---
agentName: 'Sage'
agentType: 'expert-module'
agentFile: 'src/modules/process-miner/agents/companion.md'
validationDate: '2026-02-04'
stepsCompleted:
  - v-01-load-review.md
  - v-02a-validate-metadata.md
  - v-02b-validate-persona.md
  - v-02c-validate-menu.md
  - v-02d-validate-structure.md
  - v-02e-validate-sidecar.md
---

# Validation Report: Sage (Process Journey Companion)

## Agent Overview

**Name:** Sage
**Title:** Process Journey Companion
**Type:** Expert Module Agent
**Module:** process-miner
**hasSidecar:** true
**File:** src/modules/process-miner/agents/companion.md
**Sidecar:** src/modules/process-miner/agents/companion/

---

## Validation Findings

### Metadata Validation

**Status:** ✅ PASS

**Checks:**
- [x] id: Valid path format, unique identifier
- [x] name: Clear persona name (Sage)
- [x] title: Concise function description (Process Journey Companion)
- [x] icon: Appropriate emoji (🧭 - compass for guidance)
- [x] module: Valid module code (process-miner)
- [x] hasSidecar: Matches actual usage (true, folder exists)

**Detailed Findings:**

*PASSING:*
- All required fields present and non-empty
- id uses correct path format for module agent
- name/title distinction maintained (Sage vs Process Journey Companion)
- Icon visually represents guidance/navigation role
- Module correctly identifies process-miner membership
- hasSidecar=true matches existence of companion/ folder

*WARNINGS:*
- None

*FAILURES:*
- None

---

### Menu Validation

**Status:** ✅ PASS (fixed)

**Checks:**
- [x] Menu structure exists and is properly formatted
- [x] Trigger format follows "XX or fuzzy match on..." pattern
- [x] Description format includes [XX] codes
- [x] No reserved codes used (MH, CH, PM, DA)
- [x] Prompts referenced are defined inline (#show-status, #suggest-next)
- [x] Workflow exec path matches actual file location (FIXED)

**Detailed Findings:**

*PASSING:*
- 4 menu items defined, all properly structured
- Triggers are clear and specific
- Descriptions explain functionality
- Menu items align with orchestration role
- Inline prompts (ST, NS) correctly reference defined prompts
- AS workflow path corrected to: `{project-root}/src/modules/process-miner/workflows/assess-state/workflow.md`

*WARNINGS:*
- None (path mismatch fixed)

*FAILURES:*
- None

---

### Sidecar Validation

**Status:** ✅ PASS

**Agent Type:** Expert Module Agent (hasSidecar: true)

**Checks:**
- [x] Sidecar folder exists at correct path
- [x] All referenced files present (instructions.md, guidance-patterns.yaml)
- [x] Path format correct ({project-root}/src/modules/...)
- [x] No broken path references
- [x] Additional sidecar files present for on-demand use

**Detailed Findings:**

*PASSING:*
- Sidecar folder exists: src/modules/process-miner/agents/companion/
- Core files loaded on startup: instructions.md, guidance-patterns.yaml
- Additional reference files: milestone-prompts.md, schema-interpretation.md, insight-templates.md
- All files properly formatted and complete
- No orphaned or broken references

*WARNINGS:*
- Folder uses `companion/` naming instead of `companion-sidecar/` convention (acceptable for module agents)
- 3 sidecar files not loaded in critical_actions (available for on-demand loading)

*FAILURES:*
- None

---

### Structure Validation

**Status:** ✅ PASS

**Agent Type:** Expert Module Agent

**Checks:**
- [x] Valid YAML syntax (parses without errors)
- [x] Required fields present (metadata, persona, critical_actions, prompts, menu)
- [x] Field types correct (arrays, strings, booleans)
- [x] Consistent 2-space indentation
- [x] Expert module agent structure correct

**Detailed Findings:**

*PASSING:*
- YAML parses cleanly without syntax errors
- All required sections present and populated
- Frontmatter (name, description) properly defined
- hasSidecar: true matches existence of companion/ folder
- Critical actions include sidecar file loading
- Prompts properly formatted with id and content
- Menu items properly formatted with trigger, action/exec, description

*WARNINGS:*
- None

*FAILURES:*
- None

---

### Persona Validation

**Status:** ✅ PASS

**Checks:**
- [x] role: Specific (progress tracking, contextual guidance, handoffs)
- [x] identity: Defines character (knowledgeable colleague with intuition)
- [x] communication_style: Speech patterns only (warm professional)
- [x] principles: First principle activates expert knowledge domain

**Detailed Findings:**

*PASSING:*
- Role is specific and aligns with menu items
- Identity provides clear character context without being generic
- Communication style focuses on speech patterns, includes examples
- 5 principles (within 3-7 range), all actionable
- First principle properly activates expertise: "Channel process documentation wisdom"
- All persona fields align with each other and menu items

*WARNINGS:*
- None

*FAILURES:*
- None
