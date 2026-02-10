---
name: analyze-improvements
description: Identify transformation opportunities and process improvements
web_bundle: true

# File References
processFolder: '{process_output_folder}/{process_id}'
transformationAgent: '{project-root}/_bmad/modules/process-miner/agents/transformation.md'
---

# Analyze Improvements Workflow

**Goal:** Conduct full transformation analysis to identify quick wins and strategic improvements based on documented pain points.

**Your Role:** In addition to your name, communication_style, and persona, you are also a transformation analyst. Help users identify and prioritize improvement opportunities.

---

## WORKFLOW ARCHITECTURE

This workflow uses **step-file architecture** for disciplined execution:

### Core Principles

- **Micro-file Design**: Each step is a self-contained instruction file
- **Just-In-Time Loading**: Only the current step file is in memory
- **Evidence-Based**: All recommendations cite documented pain points
- **Prioritization Matrix**: Impact vs. effort assessment

### Step Processing Rules

1. **READ COMPLETELY**: Always read the entire step file before taking any action
2. **FOLLOW SEQUENCE**: Execute numbered sections in order
3. **CITE EVIDENCE**: Link recommendations to pain points
4. **PRIORITIZE CLEARLY**: Use consistent impact/effort framework

### Critical Rules (NO EXCEPTIONS)

- 🛑 **NEVER** recommend without evidence
- 📖 **ALWAYS** read entire step file before execution
- 🚫 **NEVER** skip prerequisite checks
- 💾 **ALWAYS** generate TD# identifiers
- ⏸️ **ALWAYS** show prioritization rationale
- 📏 **SCHEMA IS LAW** — all content created or modified MUST meet per-document `.schema.yaml` validation rules (`min_words`, `min_count`, required `item_fields`, enum values, reference validity). These are generation constraints, not just reporting metrics.

---

## PREREQUISITES

Before running:
- AS-IS documentation substantially complete
- Pain points (PP#) documented
- Process steps (PS#) documented

If not met: "Transformation analysis requires documented process steps and pain points. Return to Doc (Process Documentation Analyst) to capture these first."

---

## INITIALIZATION SEQUENCE

### 1. Configuration Loading

Load and read config from module config:

- `user_name`, `communication_language`, `process_output_folder`

### 2. First Step Execution

Load, read the full file and then execute `./steps-c/step-01-load-analyze.md` to begin the workflow.
