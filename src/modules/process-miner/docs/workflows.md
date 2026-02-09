# Workflows Reference

ProcessMiner includes 17 workflows organized into three categories.

---

## Core Workflows

Essential workflows for basic operation.

### assess-state

**Agent:** Process Journey Companion
**Purpose:** Read progress, analyze documents, generate contextual insight

Assesses current state of process documentation, identifies gaps, and provides guidance on what to work on next.

**When to Use:** At session start, when unsure what's next

---

### start-new-process

**Agent:** Process Documentation Analyst
**Purpose:** Initialize new process documentation project

Creates folder structure, initializes `_progress.yaml`, and begins SME discovery.

**Inputs:** Process name, ID prefix
**Outputs:** Process folder, initialized tracking

---

### continue-session

**Agent:** Any (typically PDA)
**Purpose:** Resume work on existing process

Lists available processes, loads context, and enables continuing where you left off.

---

## Feature Workflows

Specialized analysis and design workflows.

### analyze-improvements

**Agent:** Transformation Agent
**Purpose:** Identify transformation opportunities and quick wins

Analyzes AS-IS documentation to find improvement opportunities, prioritized by impact vs. effort.

**Prerequisites:** AS-IS documentation with pain points
**Outputs:** `transformation-recommendations.md` with TD# items

---

### cx-journey-analysis

**Agent:** Client Journey Analyst
**Purpose:** Map customer touchpoints and friction

Creates customer journey overlay on internal process, identifying emotions and friction points.

**Prerequisites:** Process steps (PS#) documented
**Outputs:** `cx-journey.md` with JT#, FP# items, Mermaid journey diagram

---

### control-compliance

**Agent:** Control Analyst
**Purpose:** Validate controls and compliance posture

Analyzes control coverage, classifies controls, validates evidence documentation.

**Prerequisites:** Process steps and controls documented
**Outputs:** Control coverage report, gap analysis

---

### innovation-analysis

**Agent:** Innovation Analyst
**Purpose:** Identify automation and technology opportunities

Finds candidates for RPA, AI/ML, API integration, workflow automation.

**Prerequisites:** AS-IS documentation with systems
**Outputs:** `innovation-opportunities.md` with II# items

---

### design-architecture

**Agent:** IT Architect
**Purpose:** Create technical implementation design

Translates recommendations into architecture, integration design, and technical requirements.

**Prerequisites:** Transformation or innovation analysis
**Outputs:** `technical-architecture.md` with Mermaid C4 diagrams

---

### qa-validation

**Agent:** QA Agent
**Purpose:** Comprehensive quality validation

Full validation of documentation against schema rules, cross-references, and completeness requirements.

**Outputs:** Validation report, completeness score

---

## Utility Workflows

Shared utilities used by multiple agents.

### capture-item

**Purpose:** Add structured items (pain points, exceptions, controls, etc.)

Parameterized utility that captures any item type following schema patterns.

**Parameters:** `item_type` (pain_point, exception, control_point, touchpoint, etc.)
**Used By:** PDA, Control, CX Journey, Transformation, Innovation

---

### compose-document

**Purpose:** Generate document sections from templates

Takes structured data and composes formatted markdown using schema templates.

**Used By:** All specialist agents

---

### review-draft

**Purpose:** Review and finalize documentation

Facilitates SME review, incorporates feedback, marks sections complete.

**Used By:** All specialist agents

---

### import-existing

**Purpose:** Import and analyze existing documentation

Extracts structured data from existing docs to jumpstart documentation.

**Inputs:** Path to existing documentation
**Outputs:** Imported/converted documentation

---

### export-to-yaml

**Purpose:** Export structured data to YAML

Extracts data for integration, reporting, or diagram generation.

**Outputs:** YAML data files

---

### executive-summary

**Purpose:** Generate stakeholder-ready summary

Creates concise summary of findings and recommendations.

**Used By:** Transformation, Innovation, any agent needing stakeholder output

---

### qa-check

**Purpose:** Quick validation check

Lightweight validation callable by any agent before finalizing.

**Used By:** Any agent, Companion

---

### update-progress

**Purpose:** Update `_progress.yaml` tracking

Core utility called by all agents to record their work.

**Used By:** Every agent after completing work

---

## Workflow Dependencies

```
start-new-process
        ↓
   [PDA documents AS-IS]
        ↓
   ┌─────┴─────┬──────────┬──────────┐
   ↓           ↓          ↓          ↓
cx-journey  control   transformation  innovation
   └───────────┴──────────┴──────────┘
                    ↓
            design-architecture
                    ↓
              qa-validation
```

**Key Pattern:** AS-IS documentation is the foundation. Specialist workflows build on it.
