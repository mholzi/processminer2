# ProcessMiner: Banking Process Documentation

Banking process documentation with intelligent guidance.

SME knowledge extraction with Process Journey Companion.

---

## Overview

ProcessMiner is a multi-agent pipeline for documenting banking processes, coordinated by an intelligent Process Journey Companion that provides insight-first guidance. Users never feel lost — the Companion tracks progress at the section level, validates against actual document content, and suggests next steps based on gaps detected.

**Key Innovations:**
- **Process Journey Companion** — Proactive, contextual guidance
- **Section-level progress tracking** — Knows exactly what's sparse or missing
- **Schema-driven architecture** — Change document structure without touching workflows
- **Auto-generated diagrams** — Visualizations from structured data (Mermaid)
- **Insight-first UX** — Narrative guidance, not dashboards

---

## Installation

```bash
bmad install process-miner
```

---

## Quick Start

1. **Start a new process:** Use the PDA agent to begin documenting a banking process
2. **Follow the Companion:** Let the Process Journey Companion guide you to the right agent
3. **Capture knowledge:** Work with SMEs to document steps, pain points, controls
4. **Validate completeness:** Use QA agent to verify documentation quality
5. **Generate outputs:** Auto-generate diagrams and executive summaries

**For detailed documentation, see [docs/](docs/).**

---

## Components

### Agents

| Agent | Icon | Role |
|-------|------|------|
| Process Journey Companion | 🧭 | Progress tracking, contextual guidance |
| Process Documentation Analyst (PDA) | 📋 | SME knowledge extraction, AS-IS documentation |
| Transformation Agent | 🔄 | Process improvement recommendations |
| Client Journey Analyst | 🗺️ | Customer touchpoint mapping |
| Control Analyst | 🛡️ | Compliance validation |
| Innovation Analyst | 💡 | Automation opportunities |
| IT Architect | 🏛️ | Technical implementation design |
| QA Agent | ✅ | Quality assurance, validation |

### Workflows

**Core (3):** assess-state, start-new-process, continue-session

**Feature (6):** analyze-improvements, cx-journey-analysis, control-compliance, innovation-analysis, design-architecture, qa-validation

**Utility (8):** capture-item, compose-document, review-draft, import-existing, export-to-yaml, executive-summary, qa-check, update-progress

---

## Configuration

The module supports these configuration options (set during installation):

| Variable | Description | Default |
|----------|-------------|---------|
| `process_output_folder` | Where process documentation is stored | `{output_folder}/processes` |
| `default_process_prefix` | ID prefix for new processes | `PROC` |
| `guidance_level` | How detailed Companion guidance should be | `balanced` |

---

## Module Structure

```
process-miner/
├── module.yaml
├── README.md
├── TODO.md
├── docs/
│   ├── getting-started.md
│   ├── agents.md
│   ├── workflows.md
│   └── examples.md
├── agents/
│   └── *.spec.md (8 agent specs)
├── workflows/
│   └── */ (17 workflow folders with specs)
├── data/
│   └── reference/
├── templates/
│   └── documents/
└── _module-installer/
    ├── installer.js
    └── templates/
```

---

## Documentation

For detailed user guides and documentation, see the **[docs/](docs/)** folder:
- [Getting Started](docs/getting-started.md)
- [Agents Reference](docs/agents.md)
- [Workflows Reference](docs/workflows.md)
- [Examples](docs/examples.md)

---

## Development Status

This module is currently in development. The following components are planned:

- [ ] Agents: 8 agents (specs created, full agents pending)
- [ ] Workflows: 17 workflows (specs created, full workflows pending)

See [TODO.md](TODO.md) for detailed status.

---

## Author

Created via BMAD Module workflow

---

## License

Part of the BMAD framework.
