---
mode: edit
originalAgent: 'src/modules/process-miner/agents/pda.md'
agentName: 'Doc'
agentType: 'module'
editSessionDate: '2026-02-05'
stepsCompleted:
  - e-01-load-existing.md
  - e-02-discover-edits.md
  - e-04-type-metadata.md
  - e-05-persona.md
  - e-06-commands-menu.md
  - e-07-activation.md
  - e-08c-edit-module.md
  - e-09-celebrate.md
---

# Edit Plan: Doc (Process Documentation Analyst)

## Original Agent Snapshot

**File:** src/modules/process-miner/agents/pda.md
**Type:** module (process-miner, no sidecar)
**Version:** n/a (no version field present)

### Current Persona

**Role:** I extract knowledge from Subject Matter Experts efficiently and create comprehensive AS-IS process documentation with structured references for steps, pain points, exceptions, controls, and systems.

**Identity:** I am the foundation upon which all other ProcessMiner agents build. I understand that SMEs are busy people who know processes inside-out but hate long interview sessions. I've learned how to ask precise questions, confirm understanding quickly, and avoid redundancy. My documentation becomes the source of truth for the entire analysis.

**Communication Style:** Professional and domain-focused — clear, efficient, and respectful of SME time. Confirms understanding frequently without being repetitive.

**Principles:**
1. Channel SME interview expertise: draw upon proven knowledge extraction techniques and conversational patterns
2. I believe AI drafts and SME validates — minimal burden on experts is the goal
3. I believe pain points are gold — SMEs love talking about what frustrates them
4. I believe structured capture enables analysis — PS#, PP#, EX#, CP#, SYS# references create connections
5. I believe quality over speed — accurate documentation serves everyone better

### Current Commands

| # | Trigger | Description | Exec |
|---|---------|-------------|------|
| 1 | PD | Continue refining AS-IS process documentation | continue-session/workflow.md |
| 2 | CI | Capture Item — Add pain point, exception, control, or system | capture-item/workflow.md |
| 3 | CD | Compose Document — Generate document section from data | compose-document/workflow.md |
| 4 | RD | Review Draft — Review and finalize documentation | review-draft/workflow.md |
| 5 | IM | Import Docs — Import existing documentation | import-existing/workflow.md |
| 6 | COMP | Switch to Process Journey Companion | (action: switch agent) |

### Current Critical Actions

1. Check for active process context in {process_output_folder}
2. If NO process context exists, HALT activation — redirect to Companion agent
3. If process context exists, load current documentation state
4. Prepare to capture items using structured references

### Current Prompts

| ID | Purpose |
|----|---------|
| process-walkthrough | Walk through the process step by step |
| pain-discovery | Discover pain points in the process |
| exception-hunting | Probe for exception scenarios |

### Current Metadata

- **id:** src/modules/process-miner/agents/pda.md
- **name:** Doc
- **title:** Process Documentation Analyst
- **icon:** 📋
- **module:** process-miner
- **hasSidecar:** false

---

## Metadata Edits

No type conversion or metadata field changes required. Agent type (module, no sidecar) is correct.

---

## Edits Planned

*Source: Deep-dive review of PDA/AS-IS templates (30 findings) + SIPOC/DILO design*

### Command Edits

- [x] **P2-8** Add 4 new prompt sets to agent: `control-discovery`, `system-deep-dive`, `timing-volume`, `sla-discovery` — ✅ APPROVED
- [ ] **SIPOC** Add `[SI] SIPOC Analysis` menu trigger → `exec: sipoc-analysis/workflow.md`
- [ ] **DILO** Add `[DI] DILO Observation` menu trigger → `exec: dilo-observation/workflow.md`
- [ ] **NEW-PDA-4** Add `[QA] Quality Check` menu trigger → `exec: qa-validation/workflow.md`

#### Command YAML (additions)

```yaml
- trigger: SI or fuzzy match on sipoc-analysis
  exec: '{project-root}/src/modules/process-miner/workflows/sipoc-analysis/workflow.md'
  description: '[SI] SIPOC Analysis — Map suppliers, inputs, process, outputs, customers'

- trigger: DI or fuzzy match on dilo-observation
  exec: '{project-root}/src/modules/process-miner/workflows/dilo-observation/workflow.md'
  description: '[DI] DILO Observation — Day-in-the-life-of role analysis'

- trigger: QA or fuzzy match on quality-check
  exec: '{project-root}/src/modules/process-miner/workflows/qa-validation/workflow.md'
  description: '[QA] Quality Check — Validate cross-references and completeness'
```

No modifications or removals to existing commands.

### Persona Edits

- [ ] **P4-principle** Update principle 4:
  - **From:** `I believe structured capture enables analysis — PS#, PP#, EX#, CP#, SYS# references create connections`
  - **To:** `I believe structured capture enables analysis — a unified ID system (PS#, PP#, EX#, CP#, SYS#, BR#, DP#, DOC#, HO#, SLA#, PGAP#) creates the cross-reference web that powers downstream agents`

### Template Edits (AS-IS Process Documentation)

- [x] **P1-1** ID format unification — `PREFIX-{ABBREV}-{SEQ}`, 3-char abbreviation, stored in `_progress.yaml` — ✅ APPROVED
- [x] **P1-2** Add SLA / Service Level section — capturable item, flows to target-state — ✅ APPROVED
- [x] **P1-3** Add per-step timing — duration, wait time, volume/branching % to step summary table — ✅ APPROVED
- [x] **P1-4** Restructure gap analysis (Section 8) — `PGAP#` prefix (distinct from compliance `GAP#`), IDs, severity, owners, status — ✅ APPROVED
- [x] **P2-6** Add Data/Document Inventory section — `DOC#` prefix, capturable item — ✅ APPROVED
- [x] **P2-7** Add Handoff Points section — `HO#` prefix, capturable item — ✅ APPROVED
- [x] **P2-9** Multi-level Mermaid diagrams — L1 + L2 + swim lane mandatory, plus system interaction diagram — ✅ APPROVED
- [x] **P2-10** Summary table column alignment — add Handling Owner, Risk Level, Quick Win? to match detail docs — ✅ APPROVED
- [x] **P2-11** Add Business Rules & Decision Points — `BR#` and `DP#` prefixes, capturable items — ✅ APPROVED
- [x] **P3-13** Confidence numeric scores — HIGH ≥90%, MEDIUM ≥70%, LOW ≥40%, STUB <40% — ✅ APPROVED
- [ ] **P3-14** Document status/lifecycle — add `{{status}}` field from registry values (DRAFT/IN_PROGRESS/REVIEW/APPROVED/ARCHIVED) to all template headers
- [ ] **P3-15** Version column in change log — map changes to document versions
- [ ] **P3-16** Process steps: convert flat `{{process_steps_brief}}` to `{{#each process_steps}}` repeating blocks matching detail doc pattern
- [ ] **P3-17** Control-points-detail: add back-link to `compliance-control-assessment.md` parent
- [ ] **P3-18** Process Variants section — capture product/segment/jurisdiction variants
- [ ] **P3-19** Gap resolution tracking link — reference `gap-resolution-log.md` from Section 8
- [ ] **P3-20** Control-points-detail: add `Related Pain Points` per entry for bidirectional tracing (CP→PP)
- [ ] **P3-21** Link `client-touchpoints-detail.md` as companion document from AS-IS template
- [ ] **P3-22** Decision Points / Gateways section — structured capture of decision criteria
- [ ] **P3-23** Review/approval signature fields — Reviewed By, Approved By, dates (elevated to P0 by cross-read)

### Schema Edits

- [x] **P2-5** Create `exceptions-detail.schema.yaml` + `pain-points-detail.schema.yaml` with sync rules — ✅ APPROVED

### Detail Doc Edits

- [x] **P2-12** Add "Input for Downstream Agents" section to `exceptions-detail.md` — ✅ APPROVED
- [ ] **P3-24** Detail docs: add `Synced with AS-IS Version: {{parent_version}}` header field

### Cross-Read Additions

- [ ] **NEW-PDA-1** (P1) AS-IS step details: add channel, document count, interaction count fields for CES calculation
- [ ] **NEW-PDA-2** (P2) Section 5.2: convert `{{system_integrations}}` narrative to Integration Matrix table (API/batch/manual, criticality, SLA)
- [ ] **NEW-PDA-3** (P2) Add "Related Specialist Analyses" section to AS-IS footer — back-links from downstream docs
- [ ] **NEW-PDA-4** (P3) Add QA validation menu item `[QA]` to PDA agent menu

### Low Priority

- [ ] **P4-25** Add STUB confidence level for early-stage documentation
- [ ] **P4-26** Cost/Resource section (FTE allocation, cost per transaction)
- [ ] **P4-27** Management summary appendix: reference detail docs instead of duplicating tables
- [ ] **P4-28** Process registry: add document path linkage column
- [ ] **P4-29** PDA menu: QA/Validate option (duplicate of NEW-PDA-4)
- [ ] **P4-30** Structured evidence source tracking in confidence system

---

## Approval Status

| Status | Count |
|--------|-------|
| ✅ Approved | 13 |
| ⬜ Pending | 24 |
| **Total** | **37** |

*13 findings approved in prior session. Resuming from P3-14.*

---

## Activation Edits

No changes to critical_actions. Current activation sequence is correct for expanded agent.

## Routing

```yaml
routing:
  destinationEdit: e-08c-edit-module.md
  sourceType: module  # module=process-miner, hasSidecar=false
```

---

## Edits Applied

### Applied in e-08c (2026-02-05)

1. ✅ **Persona principle 4** — Updated to reflect expanded ID system (11 ID types)
2. ✅ **4 new prompt sets** — `control-discovery`, `system-deep-dive`, `timing-volume`, `sla-discovery` (P2-8)
3. ✅ **[SI] SIPOC Analysis** — Menu item added → `sipoc-analysis/workflow.md` (⬜ workflow pending creation)
4. ✅ **[DI] DILO Observation** — Menu item added → `dilo-observation/workflow.md` (⬜ workflow pending creation)
5. ✅ **[QA] Quality Check** — Menu item added → `qa-validation/workflow.md` (✅ workflow exists)

### Validation Results

- ✅ YAML valid
- ✅ 9 menu triggers, no reserved conflicts
- ✅ 7 prompts (3 original + 4 new)
- ✅ 5 principles
- ✅ 6/8 workflow paths exist
- ⬜ 2 workflows pending: `sipoc-analysis`, `dilo-observation` (being created by sub-agent)
- ✅ Backup at `pda.md.backup`

## Edit Session Complete ✅

**Completed:** 2026-02-05 09:50 UTC
**Status:** Success — agent file edits applied, full implementation delegated to sub-agents

### Final State
- Agent file updated successfully (persona, prompts, menu)
- All edits applied to agent YAML
- Backup preserved at pda.md.backup
- Template/schema/workflow implementation running via sub-agents
