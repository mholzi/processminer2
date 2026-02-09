---
name: continue-session
description: Template-driven document refinement pipeline for process documentation
web_bundle: true
---

# Continue Session Workflow

**Goal:** Guide the user through importing, reviewing, and refining process documentation using a template-driven, section-by-section approach with structured persistence and cross-document validation.

**Your Role:** In addition to your name, communication_style, and persona, you are also an efficient document refinement facilitator. You help the user systematically improve documentation quality through import, review, and reconciliation cycles.

---

## WORKFLOW ARCHITECTURE

This workflow uses **step-file architecture** with a **hub-and-spoke review loop**:

### Core Principles

- **Micro-file Design**: Each step is a self-contained instruction file
- **Just-In-Time Loading**: Only the current step file is in memory
- **Template-Driven**: All section discovery is driven by loaded template + schema — never hardcoded
- **Agent-Agnostic**: This workflow works regardless of which agent invokes it
- **Process-Agnostic**: Works with any process type — the template defines the structure
- **Dual Persistence**: Every change is written to both MD (human-readable) and JSON (AI-readable)
- **Document Sharding**: Output is sharded by section with auto-detection for monolithic fallback

### Step Processing Rules

1. **READ COMPLETELY**: Always read the entire step file before taking any action
2. **FOLLOW SEQUENCE**: Execute numbered sections in order
3. **TEMPLATE-DRIVEN**: Discover sections from loaded template, never assume
4. **PERSIST IMMEDIATELY**: Write to MD + JSON after every meaningful change
5. **TRACK DISCREPANCIES**: Flag inconsistencies in JSON from first import through final reconciliation

### Critical Rules (NO EXCEPTIONS)

- 🛑 **NEVER** hardcode section names — discover from template
- 📖 **ALWAYS** read entire step file before execution
- 🚫 **NEVER** auto-start without user choice
- 💾 **ALWAYS** persist to both MD and JSON
- ⏸️ **ALWAYS** halt at menus and wait for input
- 🔄 **ALWAYS** use Handlebars rendering for template output
- 📏 **SCHEMA IS LAW** — whenever creating, updating, importing, composing, or refining any section content, the per-document `.schema.yaml` is the **single source of truth** for all validation rules. Load it, enforce every constraint it defines as a generation target — not a post-hoc metric. Do NOT restate schema rules in step files; always defer to the schema directly. If source material is genuinely insufficient to meet a schema minimum, get as close as possible and mark the shortfall with `[To be expanded]`.

---

## FLOW DIAGRAM

```
S1 (Load Context) → S2 (Import Docs)* → S3 (Section Overview — HUB)
                                          ↕
                                    S4 (Section Review)
                                          ↓
                                    S5 (Write & Reconcile)
                                          ↓
                                    S6 (Resolve Discrepancies) [if any]
                                          ↓
                                    → S3 (HUB — loop)

Exit from S3: [MENU] → Invoking Agent Menu | [COMP] → Companion Agent (if configured)

* S2 is skipped when `skip_import = true` (e.g., management summary documents)
```

---

## OPTIONAL PARAMETERS

The invoking agent may pass these parameters to customize workflow behavior:

| Parameter | Description | Default |
|-----------|-------------|---------|
| `companion_agent` | Agent to hand off to when user selects [COMP] exit | None (COMP option hidden) |
| `process_id` | Specific process to load | Auto-detect from folder |
| `document_type` | Override auto-detection of document type (e.g., `management-summary-process`) | Auto-detect |
| `skip_import` | Skip Step 2 (Document Import) — used for generated documents like management summaries | `false` |

**Example invocations:**
```yaml
# With companion agent
exec: '{project-root}/.../continue-session/workflow.md'
data:
  companion_agent: 'Process Journey Companion'

# Management summary (skip import)
exec: '{project-root}/.../continue-session/workflow.md'
data:
  document_type: 'management-summary-process'
  skip_import: true
```

---

## INITIALIZATION SEQUENCE

### 1. Configuration Loading

Load and read config from module config:

- `user_name`, `communication_language`, `process_output_folder`
- Load `_defaults.yaml` for shared config (confidence thresholds, ID prefixes, incomplete markers)
- Identify which template applies to the current process context
- Load the per-document `.schema.yaml` that sits alongside the template

### 2. Template + Schema Discovery

- Load the applicable **template MD** — determines rendering structure
- Load the applicable **per-document `.schema.yaml`** — determines section registry, validation rules, confidence thresholds, cross-references, field types, and cross-document relationships
- Load **`_defaults.yaml`** — shared confidence levels, ID prefix registry, incomplete markers
- Build a runtime section registry from the schema's `sections` block

### 3. Sharding Detection

- Check if process output is **sharded** (directory with `index.md` + section files) or **monolithic** (single MD file)
- Set rendering mode accordingly
- Progressive sharding: if monolithic, shard on first Step 5 write-back

### 4. First Step Execution

Load, read the full file and then execute `./steps-c/step-01-load-context.md` to begin the workflow.
