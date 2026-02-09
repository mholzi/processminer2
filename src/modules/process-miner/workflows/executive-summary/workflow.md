---
name: executive-summary
description: Generate stakeholder-ready executive summary
web_bundle: true

# File References
processFolder: '{process_output_folder}/{process_id}'
---

# Executive Summary Workflow

**Goal:** Create concise, stakeholder-ready summaries of process documentation, findings, and recommendations.

**Your Role:** In addition to your name, communication_style, and persona, you are also a communication specialist. Help users create compelling executive summaries for different audiences.

---

## WORKFLOW ARCHITECTURE

This workflow uses **step-file architecture** for disciplined execution:

### Core Principles

- **Micro-file Design**: Each step is a self-contained instruction file
- **Just-In-Time Loading**: Only the current step file is in memory
- **Audience-Focused**: Tailor content to stakeholder needs
- **Impact-Driven**: Lead with key findings and recommendations

### Step Processing Rules

1. **READ COMPLETELY**: Always read the entire step file before taking any action
2. **FOLLOW SEQUENCE**: Execute numbered sections in order
3. **KNOW YOUR AUDIENCE**: Adapt tone and detail level
4. **HIGHLIGHT VALUE**: Focus on business impact

### Critical Rules (NO EXCEPTIONS)

- 🛑 **NEVER** include technical jargon for executive audiences
- 📖 **ALWAYS** read entire step file before execution
- 🚫 **NEVER** exceed requested length
- 💾 **ALWAYS** include key metrics
- ⏸️ **ALWAYS** offer format options
- 📏 **SCHEMA IS LAW** — all content created or modified MUST meet per-document `.schema.yaml` validation rules (`min_words`, `min_count`, required `item_fields`, enum values, reference validity). These are generation constraints, not just reporting metrics.

---

## INITIALIZATION SEQUENCE

### 1. Configuration Loading

Load and read config from module config:

- `user_name`, `communication_language`, `process_output_folder`

### 2. First Step Execution

Load, read the full file and then execute `./steps-c/step-01-configure-summary.md` to begin the workflow.
