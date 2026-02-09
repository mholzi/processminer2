# TODO: ProcessMiner

Development roadmap for process-miner module.

---

## Agents ✅ COMPLETE

- [x] **companion** (Process Journey Companion) — `agents/companion.md`
- [x] **pda** (Process Documentation Analyst) — `agents/pda.md`
- [x] **transformation** (Transformation Agent) — `agents/transformation.md`
- [x] **cx-journey** (Client Journey Analyst) — `agents/cx-journey.md`
- [x] **control** (Control Analyst) — `agents/control.md`
- [x] **innovation** (Innovation Analyst) — `agents/innovation.md`
- [x] **it-architect** (IT Architect) — `agents/it-architect.md`
- [x] **qa** (QA Agent) — `agents/qa.md`

---

## Workflows ✅ COMPLETE

### Core Workflows
- [x] **assess-state** — `workflows/assess-state/workflow.md`
- [x] **start-new-process** — `workflows/start-new-process/workflow.md`
- [x] **continue-session** — `workflows/continue-session/workflow.md`

### Utility Workflows
- [x] **update-progress** — `workflows/update-progress/workflow.md`
- [x] **capture-item** — `workflows/capture-item/workflow.md`
- [x] **compose-document** — `workflows/compose-document/workflow.md`
- [x] **review-draft** — `workflows/review-draft/workflow.md`
- [x] **import-existing** — `workflows/import-existing/workflow.md`
- [x] **export-to-yaml** — `workflows/export-to-yaml/workflow.md`
- [x] **executive-summary** — `workflows/executive-summary/workflow.md`
- [x] **qa-check** — `workflows/qa-check/workflow.md`

### Feature Workflows
- [x] **analyze-improvements** — `workflows/analyze-improvements/workflow.md`
- [x] **cx-journey-analysis** — `workflows/cx-journey-analysis/workflow.md`
- [x] **control-compliance** — `workflows/control-compliance/workflow.md`
- [x] **innovation-analysis** — `workflows/innovation-analysis/workflow.md`
- [x] **design-architecture** — `workflows/design-architecture/workflow.md`
- [x] **qa-validation** — `workflows/qa-validation/workflow.md`

---

## Installation Testing

- [ ] Test installation with `bmad install process-miner`
- [ ] Verify module.yaml prompts work correctly
- [ ] Test installer.js creates directories and copies templates
- [ ] Verify `_progress.template.yaml` is copied correctly
- [x] ~~Verify `document-schema.yaml` is copied correctly~~ (retired — merged into per-document schemas v3.0)

---

## Schema & Templates ✅ COMPLETE

- [x] Finalize `document-schema.yaml` with all section definitions (now split into per-document `.schema.yaml` v3.0 + `_defaults.yaml`)
- [x] Fetch 28 document templates from `mholzi/processminer` GitHub repo:
  - [x] `as-is-process-documentation.md` + schema
  - [x] `control-points-detail.md` + schema
  - [x] `exceptions-detail.md`
  - [x] `pain-points-detail.md`
  - [x] `cx-journey-documentation.md` + schema
  - [x] `client-touchpoints-detail.md`
  - [x] `friction-points-detail.md`
  - [x] `target-state-documentation.md` + schema
  - [x] `transformation-decisions-detail.md` + schema
  - [x] `compliance-control-assessment.md` + schema
  - [x] `innovation-analysis-documentation.md` + schema
  - [x] `innovation-ideas-detail.md`
  - [x] `innovation-market-analysis.md`
  - [x] `gap-resolution-log.md` + schema
  - [x] `qa-report.md`
  - [x] `process-registry.md`
  - [x] Management summaries (process, cx, compliance, innovation)

---

## Documentation

- [ ] Complete README.md with usage examples
- [ ] Enhance docs/ folder with more guides
- [ ] Add troubleshooting section
- [ ] Document configuration options in detail
- [ ] Add screenshots/diagrams of typical usage

---

## Next Steps

1. **Build core agents first:** Companion and PDA
2. **Build utility workflows:** update-progress, capture-item
3. **Build core workflows:** assess-state, start-new-process
4. **Test basic flow:** New process → Companion guidance → PDA capture
5. **Build remaining agents and workflows**
6. **Test full flow end-to-end**
7. **Polish documentation and examples**

---

_Last updated: 2026-02-04_
