---
name: 'step-03-create-specifications'
description: 'Create technical specifications and architecture document'

# File References
progressFile: '{process_output_folder}/{process_id}/_progress.yaml'
processFolder: '{process_output_folder}/{process_id}'
---

# Step 3: Create Specifications

## STEP GOAL:

Generate integration specifications, technical requirements, and architecture document.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER skip progress update
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR creating deliverable

### Step-Specific Rules:

- 🎯 Focus on complete specifications
- 🚫 FORBIDDEN to change design (go back if needed)
- 💬 Approach: Specify, document, confirm

## MANDATORY SEQUENCE

### 1. Generate Integration Specifications

For each integration point:

```markdown
### INT{n}: {source} → {target}

**Protocol:** {HTTP/REST/SOAP/Message Queue}
**Authentication:** {OAuth 2.0/API Key/JWT/etc.}
**Data Format:** {JSON/XML/etc.}

**Endpoints:**
- {METHOD} {path} — {description}
- {METHOD} {path} — {description}

**Error Handling:**
- 4xx: {handling}
- 5xx: {handling}

**Data Mapping:**
| Source Field | Target Field | Transform |
|--------------|--------------|-----------|
| {field_1} | {field_1} | {if_any} |
```

### 2. Generate Technical Requirements

```markdown
### Infrastructure Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| TR-001 | {requirement} | High |
| TR-002 | {requirement} | High |

### Security Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| TR-010 | {requirement} | High |
| TR-011 | {requirement} | High |

### Performance Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| TR-020 | {requirement} | High |
```

### 3. Generate Architecture Document

Create technical-architecture.md:

```markdown
# Technical Architecture: {process_name}

**Process ID:** {process_id}
**Design Date:** {date}
**Architect:** IT Architect

---

## Executive Summary

{architecture_vision_and_approach}

---

## Current State

### System Landscape
{current_systems_description}

### Pain Points
{technical_pain_points}

---

## Target Architecture

### Design Principles
{principles}

### System Context
```mermaid
{context_diagram}
```

### Container View
```mermaid
{container_diagram}
```

---

## Integration Design

### Integration Map
{integration_specifications}

### Data Flows
{data_flow_descriptions}

---

## Technical Requirements

{requirements_tables}

---

## Implementation Approach

{phased_implementation}

---

## Risks and Mitigations

{technical_risks}

---

## Appendix

### Technology Stack
{technology_choices}
```

### 4. Save Document

Write to: `{process_folder}/technical-architecture.md`

### 5. Update Progress

```yaml
update-progress:
  type: agent_session
  agent: it_architect
  status: complete

update-progress:
  type: milestone
  check: architecture_complete
```

### 6. Confirm Completion

"✓ **Technical Architecture Complete**

**Design Artifacts:**
├── C4 Context Diagram
├── C4 Container Diagram
├── Integration Specifications: {count}
└── Technical Requirements: {count}

**Key Components:**
{component_list}

**Document:** technical-architecture.md

**What's next?**
- **[V]** View architecture
- **[D]** View diagrams
- **[COMP]** Return to Companion"

#### Menu Handling Logic:

- IF V: Display full document
- IF D: Display diagrams only
- IF COMP: End workflow

#### EXECUTION RULES:

- ALWAYS halt and wait for user input
- Provide clear next step options

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Integration specs complete
- Requirements documented
- Architecture document generated
- Progress updated
- Milestone checked

### ❌ SYSTEM FAILURE:

- Vague specifications
- Missing diagrams
- Not updating progress
