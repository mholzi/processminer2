# Module Brief: process-miner

**Date:** 2026-02-04
**Author:** Dev
**Module Code:** process-miner
**Module Type:** Standalone
**Status:** Ready for Development

---

## Executive Summary

A Process Journey Companion that proactively understands context and gives relevant guidance without being asked. Banking process documentation with SME knowledge extraction — rebuilt on latest BMAD infrastructure with an intelligent orchestration layer.

**Secret Sauce:** Anticipatory intelligence — notices what you might miss, nudges at the right moment. Speaks at session start + after any agent completes — never interrupts.

**Module Category:** Process Documentation & Knowledge Extraction
**Target Users:** Business Analysts documenting banking processes; Operations Managers (SMEs)
**Complexity Level:** High (8 agents, 17 workflows, schema-driven architecture)

---

## Module Identity

### Module Code & Name

- **Code:** `process-miner`
- **Name:** `ProcessMiner: Banking Process Documentation`

### Core Concept

Banking process documentation with SME knowledge extraction. A multi-agent pipeline coordinated by an intelligent Process Journey Companion that provides insight-first guidance. Users never feel lost — the Companion tracks progress at the section level, validates against actual document content, and suggests next steps based on gaps detected.

**Key Innovations:**
1. **Process Journey Companion** — Proactive, contextual guidance
2. **Section-level progress tracking** — Knows exactly what's sparse or missing
3. **Schema-driven architecture** — Change document structure without touching workflows
4. **Auto-generated diagrams** — Visualizations from structured data (Mermaid)
5. **Insight-first UX** — Narrative guidance, not dashboards

### Personality Theme

Professional with warmth. Role-based agent names (no personas). Function-focused.

- **Companion tone:** Warm professional — helpful, encouraging, human
- **Milestones:** Celebratory acknowledgments
- **Easter eggs:** A few hidden gems for engaged users

---

## Module Type

**Type:** Standalone

ProcessMiner is a complete, independent module with its own identity, agents, workflows, and state management. It does not extend another module — it is a self-contained solution for banking process documentation.

**Installation:** Installed independently alongside other BMAD modules.
**File Location:** `_bmad/modules/process-miner/`

---

## Unique Value Proposition

**What makes this module special:**

> "For business analysts documenting banking processes, ProcessMiner provides intelligent, contextual guidance throughout the documentation journey — unlike traditional tools or manual processes — because the Process Journey Companion proactively understands your progress and tells you what's missing before you have to ask."

**Why users would choose this module:**

- **Guided experience:** Never wonder "what agent do I use next?"
- **Progress visibility:** Section-level tracking across all documents
- **SME-friendly:** AI drafts, SME validates — minimal burden on experts
- **Compliance-ready:** Control points, audit trails, structured referencing (PS#, PP#, EX#, CP#, SYS#)
- **Insight discovery:** Auto-generated diagrams reveal patterns humans miss
- **Modern architecture:** Schema-driven, maximum workflow sharing, BMAD-aligned

---

## User Scenarios

### Target Users

**Persona 1: Anna (Business Analyst)**
- Documents banking processes for compliance/transformation teams
- Not a BMAD expert — needs guidance without feeling overwhelmed
- Goals: Accurate, compliant documentation delivered on time
- Pain points: Doesn't know which agent when, loses track of progress, uncertain about completeness
- Success: Processes documented thoroughly, ready for audit or transformation

**Persona 2: Marcus (Operations Manager / SME)**
- 15 years in banking operations, knows processes inside-out
- Busy — gets pulled into fires constantly
- Goals: Share knowledge without endless interview sessions
- Pain points: Hates long interviews, forgets context between sessions
- Success: Expertise captured accurately with minimal time investment

### Primary Use Case

Documenting a banking process (e.g., Client Onboarding) from initial discovery through complete validation, including:
- AS-IS process documentation with steps, pain points, exceptions, controls
- Customer journey mapping
- Control/compliance validation
- Innovation opportunity identification
- Auto-generated visualizations

### User Journey

1. **Session start:** Companion assesses state, surfaces most relevant insight
2. **Work with specialist:** User engages PDA, CX Journey, Control, etc.
3. **Agent completes:** Companion acknowledges progress, suggests next step
4. **User decides:** Always user-driven prioritization, never forced sequences
5. **Process complete:** Full documentation package with diagrams, ready for stakeholders

---

## Agent Architecture

### Agent Count Strategy

**Multi-agent (8 agents)** — Different expertise areas require specialized agents:
- Orchestration (Companion)
- Foundation documentation (PDA)
- Specialized analysis (CX, Control, Innovation, Transformation)
- Technical design (IT Architect)
- Quality assurance (QA)

### Agent Roster

| Agent | Role | Status | Memory |
|-------|------|--------|--------|
| Process Journey Companion | Progress tracking, contextual guidance, handoff suggestions | NEW | Yes |
| Process Documentation Analyst (PDA) | SME knowledge extraction, AS-IS documentation | Rebuild | Yes |
| Transformation Agent | Process improvement recommendations | Rebuild | No |
| Client Journey Analyst | Customer touchpoint mapping, friction analysis | Rebuild | No |
| Control Analyst | Compliance validation, control effectiveness | Rebuild | No |
| Innovation Analyst | Automation & technology opportunities | Rebuild | No |
| IT Architect | Technical implementation design | NEW | No |
| QA Agent | Quality assurance, validation checks | NEW | No |

### Agent Interaction Model

**Companion-mediated handoffs:**
- Specialist agents never invoke each other directly
- All transitions flow through the Companion
- User always decides when to engage next agent

```
User opens ProcessMiner
        ↓
   Companion assesses state, suggests next agent
        ↓
   User chooses to engage Agent X
        ↓
   Agent X does its work
        ↓
   Agent X completes → updates _progress.yaml
        ↓
   Companion reads state, provides insight, suggests next
        ↓
   User decides...
```

### Agent Communication Style

- **Companion:** Warm professional — helpful, encouraging, insightful ("a knowledgeable colleague")
- **Specialists:** Professional, domain-focused — clear and efficient
- **Milestones:** Celebratory acknowledgments when phases complete

---

## Workflow Ecosystem

### Core Workflows (Essential)

| Workflow | Purpose | Agent |
|----------|---------|-------|
| `assess-state` | Read progress, analyze documents, generate insight | Companion |
| `start-new-process` | Initialize new process, create folder, begin documentation | PDA |
| `continue-session` | Resume work on existing process | PDA / Any |

### Feature Workflows (Specialized)

| Workflow | Purpose | Agent |
|----------|---------|-------|
| `analyze-improvements` | Identify transformation opportunities | Transformation |
| `cx-journey-analysis` | Map customer touchpoints, identify friction | CX Journey |
| `control-compliance-analysis` | Validate controls, assess compliance | Control |
| `innovation-analysis` | Identify automation & tech opportunities | Innovation |
| `design-architecture` | Create technical implementation design | IT Architect |
| `qa-validation` | Run quality checks, validate completeness | QA Agent |

### Utility Workflows (Support)

| Workflow | Purpose | Used By |
|----------|---------|---------|
| `capture-item` | Add pain point, exception, control, touchpoint | PDA, Control, CX, others |
| `compose-document` | Generate document from template | All specialists |
| `review-draft` | Review and finalize documentation | All specialists |
| `import-existing-docs` | Import & analyze existing documentation | PDA, any agent |
| `export-to-yaml` | Export structured data | All agents |
| `executive-summary` | Generate summary for stakeholders | All agents |
| `qa-check` | Run validation checks | QA, callable by others |
| `update-progress` | Write to `_progress.yaml` | All agents |

### Workflow Architecture

**Maximum sharing, schema-driven, fully decoupled:**

- Shared workflows accept parameters (e.g., `item_type`), not hardcoded sections
- `document-schema.yaml` defines document structure, content types, validation rules
- Workflows consult schema at runtime — change document structure without touching workflows
- Handlebars templates for conditional content generation
- BMAD-aligned patterns (frontmatter state, menu handling, plan-then-build)

---

## Tools & Integrations

### MCP Tools

- **Filesystem** (built-in) — Read/write process documents, `_progress.yaml`

### External Services

- **Mermaid** — Diagram generation (markdown-native)
  - Auto-generated from PS#, SYS#, CP# data
  - Process flowcharts, swimlane diagrams, journey maps, system architecture

### Integrations with Other Modules

- **BMAD Core** — Standard framework integration
- No other module dependencies — fully self-contained

---

## Creative Features

### Personality & Theming

- **Tone:** Warm, encouraging, professional — like a supportive colleague
- **Theme:** None — functionality speaks, no forced metaphors
- **Celebrations:** Mark milestones with genuine acknowledgment

**Example interactions:**

Session start:
> "Welcome back, Anna. Good to see you. Client Onboarding is 70% complete — you're making real progress."

Milestone reached:
> "AS-IS documentation complete! 14 steps, 6 pain points, 5 systems documented. That's a thorough foundation. Ready to bring in the specialists?"

Process complete:
> "Client Onboarding is fully documented. All agents have contributed. You've built something comprehensive — this is ready for stakeholders. Well done."

### Easter Eggs & Delighters

- "status" → normal status; "how am I doing?" → warmer, personal response
- Complete 5 processes → "Five processes documented. You're becoming a ProcessMiner pro."
- Discover Companion insight → "Sharp eye. Most people miss that connection."

### Module Lore

None — professional focus, no narrative backstory.

---

## Technical Architecture

### State Management (`_progress.yaml`)

Per-process folder, section-level tracking:

```yaml
meta:
  process_id: COB-003
  process_name: Client Onboarding
  schema_version: "1.0"
  last_validated: 2026-02-04T10:30:00

documents:
  as_is:
    path: "./as-is-documentation.md"
    overall_status: in_progress
    sections:
      executive_summary:
        status: complete
        word_count: 245
      process_steps:
        status: complete
        count: 12
      pain_points:
        status: in_progress
        count: 4
        expected_min: 6
        gap_note: "Below typical range (6-10)"
      control_points:
        status: not_started
        count: 0

agent_sessions:
  pda:
    last_run: 2026-02-03
    status: complete
  control:
    last_run: null
    status: blocked
    blocked_reason: "as_is.control_points is empty"
```

### Document Schema (`document-schema.yaml`)

Single source of truth for document structure:

```yaml
documents:
  as_is:
    name: "AS-IS Process Documentation"
    template: documents/as-is.template.md

    sections:
      - id: executive_summary
        heading: "## 1. Executive Summary"
        content_type: prose
        validation:
          min_words: 100
          max_words: 300
        guidance: |
          High-level overview for stakeholders.
          MUST include: process purpose, scope, key findings.
          FORBIDDEN: technical jargon, implementation details.

      - id: pain_points
        heading: "## 4. Pain Points"
        content_type: item_list
        item_template: |
          ### {{prefix}}{{number}}: {{title}}
          **Impact:** {{impact}}
          **Frequency:** {{frequency}}
          **Root Cause:** {{root_cause}}
        item_fields:
          - name: title
            required: true
          - name: impact
            type: enum
            values: [High, Medium, Low]
        validation:
          expected_range: [3, 10]
```

**Benefits:**
- One schema drives: generation, validation, Companion insights
- Change document structure → edit schema only
- Workflows and agents remain untouched

---

## Next Steps

1. **Review this brief** — Ensure the vision is clear and complete
2. **Run create-module workflow** — Build the module structure from this brief
3. **Create agents** — Use agent-builder workflow for each of the 8 agents
4. **Create workflows** — Use workflow-builder workflow for each workflow
5. **Build document-schema.yaml** — Define full section specifications
6. **Test module** — Install and verify functionality

---

_Brief created on 2026-02-04 by Dev using the BMAD Module Brief workflow_
