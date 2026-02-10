---
name: qa-suite-validation
description: Suite-level validation of the entire documentation suite for a process — cross-document references, sync consistency, prerequisites, ID uniqueness, coverage, and confidence propagation
web_bundle: true

# File References
processFolder: '{process_output_folder}/{process_id}'
schemaDir: '{project-root}/src/modules/process-miner/templates/documents'
defaultsFile: '{project-root}/src/modules/process-miner/templates/documents/_defaults.yaml'
---

# QA Suite Validation Workflow

**Goal:** Validate the entire documentation suite for a process, ensuring cross-document consistency, reference integrity, sync compliance, and coverage completeness.

**Your Role:** In addition to your name, communication_style, and persona, you are also a suite-level quality validator. You look beyond individual documents to ensure the entire documentation ecosystem is internally consistent.

---

## WORKFLOW ARCHITECTURE

This workflow uses **step-file architecture** for disciplined execution:

### Core Principles

- **Suite-Level Scope**: Validates relationships *between* documents, not within them
- **Mode-Aware**: Supports full, incremental, and impact-only execution modes
- **Schema-Driven**: Uses `dependencies`, `inter_document`, `sync_validation`, and `confidence_propagation` declarations from schemas
- **Actionable Output**: Every finding includes remediation guidance

### Step Processing Rules

1. **READ COMPLETELY**: Always read the entire step file before taking any action
2. **FOLLOW SEQUENCE**: Execute numbered sections in order
3. **CHECK THOROUGHLY**: Run all validation categories for the selected mode
4. **REPORT CLEARLY**: Distinguish errors (blocking) from warnings (informational)

### Critical Rules (NO EXCEPTIONS)

- 🛑 **NEVER** skip validation categories for the selected mode
- 📖 **ALWAYS** read entire step file before execution
- 🚫 **NEVER** auto-pass documents with broken cross-references
- 💾 **ALWAYS** generate the suite validation report
- 📏 **SCHEMA IS LAW** — validate against `dependencies`, `inter_document`, `sync_validation`, and `confidence_propagation` blocks

---

## MODE OVERVIEW

| Mode | Purpose | Scope | Typical Use |
|------|---------|-------|-------------|
| **full** | Validate entire suite | All documents in the process | Pre-release health check, periodic review |
| **incremental** | Validate changed doc + neighbors | Changed doc + upstream + downstream | Post-change validation |
| **impact-only** | Show what's affected by a change | List affected documents only (no validation) | During authoring, "what did I break?" |

---

## INITIALIZATION SEQUENCE

### 1. Configuration Loading

Load and read config from module config:

- `user_name`, `communication_language`, `process_output_folder`
- Load `_defaults.yaml` for confidence propagation rules and ID prefix registry

### 2. Mode Determination

**Ask user if not specified:**

"Welcome to Suite-Level QA Validation. Which mode?

**[F]ull** — Validate entire documentation suite
**[I]ncremental** — Validate a specific document + its upstream/downstream neighbors
**[A]ffected** — Show which documents are affected by a change (no validation)

Please select: [F]ull / [I]ncremental / [A]ffected"

**IF mode == incremental or affected:**
Ask: "Which document was changed?" (list available documents in the process folder)

### 3. Route to First Step

Load, read the full file, and then execute `./steps-c/step-01-run-suite-checks.md`
