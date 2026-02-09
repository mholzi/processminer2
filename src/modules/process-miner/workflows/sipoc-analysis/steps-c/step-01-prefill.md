---
name: 'step-01-prefill'
description: 'AI reads AS-IS and generates draft SIPOC'

# File References
nextStepFile: './step-03-cross-read.md'  # After continue-session returns
processFolder: '{process_output_folder}/{process_id}'
sipocTemplate: '{project-root}/src/modules/process-miner/templates/documents/sipoc-analysis.md'
asisDoc: '{processFolder}/as-is-process-documentation.md'
painPointsDoc: '{processFolder}/pain-points-detail.md'
exceptionsDoc: '{processFolder}/exceptions-detail.md'
controlsDoc: '{processFolder}/control-points-detail.md'
---

# Step 1: AI Prefill SIPOC

## STEP GOAL:

Read all existing AS-IS documentation and generate a draft SIPOC analysis
with confidence markers. No SME interaction in this step — pure AI extraction.

## MANDATORY EXECUTION RULES:

- 🛑 NEVER ask the SME anything in this step
- 📖 Read ALL referenced documents completely
- 🎯 Extract every supplier, input, output, customer you can identify
- ⚠️ Mark everything with [PREFILLED — needs SME validation]
- 💾 Write the draft SIPOC to the process folder

## MANDATORY SEQUENCE

### 1. Load All Source Documents

Read these completely:
1. AS-IS process documentation (all sections)
2. Pain points detail (for supplier/quality issues)
3. Exceptions detail (for interface failures)
4. Control points detail (for regulatory inputs/outputs)

### 2. Extract Suppliers

**From AS-IS, identify anyone who PROVIDES something to the process:**

Extraction heuristics:
- Section 1.4 (Stakeholders) — external stakeholders are likely suppliers or customers
- Section 2 (Process Steps) — "receives from", "gets input from", first step's trigger source
- Section 5 (Systems) — upstream systems are automated suppliers
- Section 6 (RACI) — teams that are "Consulted" may be suppliers of information
- Pain points mentioning "waiting for" → supplier with reliability issues
- Exceptions triggered by "missing" or "incorrect" input → supplier quality issue

For each extracted supplier, generate:
- SUP# ID (format: SUP-{ABBREV}-{SEQ}, e.g., SUP-ONB-001)
- Name, Type, Category
- What they supply (map to INP#)
- Interface method (extracted from system integrations or step details)
- Reliability: [PREFILLED — inferred from pain points/exceptions]

### 3. Extract Inputs

**From AS-IS, identify everything that ENTERS the process:**

Extraction heuristics:
- Section 2 (Process Steps) — first step's trigger and inputs
- Per-step descriptions mentioning documents, data, decisions
- Section 5 (Systems) — data received from other systems
- Section 7 (Documentation) — required documents, DTPs
- Control points with "evidence" requirements → compliance inputs
- Exceptions triggered by "missing document" → required input

For each:
- INP# ID (format: INP-{ABBREV}-{SEQ})
- Name, Type, Format
- Source supplier (SUP#)
- Which steps use it (PS#)
- Quality issues: [PREFILLED from pain points that mention input quality]

### 4. Extract Outputs

**From AS-IS, identify everything the process PRODUCES:**

Extraction heuristics:
- Last process step's output
- Section 7 (KPIs) — reports produced
- Control points with "evidence captured" → compliance outputs
- Systems that receive data FROM this process → system outputs
- Exceptions that mention "notification sent" → notification outputs

For each:
- OUT# ID (format: OUT-{ABBREV}-{SEQ})
- Name, Type, Format
- Which step produces it (PS#)
- Who receives it (CUS#)
- Quality metrics: [PREFILLED if KPIs mention quality targets]

### 5. Extract Customers

**From AS-IS, identify everyone who RECEIVES outputs:**

Extraction heuristics:
- Section 1.4 (Stakeholders) — who benefits from the process completion
- Last step's recipient
- RACI "Informed" parties → reporting customers
- Regulatory bodies mentioned in controls → compliance customers
- Downstream processes mentioned anywhere → process customers

For each:
- CUS# ID (format: CUS-{ABBREV}-{SEQ})
- Name, Type, Segment
- What they receive (OUT#)
- Channel, Satisfaction: [PREFILLED — inferred where possible]

### 6. Generate Draft Document

Using the SIPOC template, fill in ALL sections with extracted data.

Mark every prefilled value with:
`[PREFILLED — {{confidence_reason}}]`

Example:
```
| SUP-ONB-001 | Client | External Client | Self-Service | INP-ONB-001 | Portal Upload | [PREFILLED — inferred from PS-ONB-001 description] |
```

Fill Section 4 (Process) by mapping existing PS# items to the extracted INP# and OUT# items.

Fill Section 7 (Interface & Boundary Analysis) with any issues identified during extraction.

Fill Section 8 (Cross-Reference Reconciliation) with placeholder — will be completed in cross-read.

### 7. Persist Draft

Write the draft SIPOC to:
- MD: `{processFolder}/sipoc-analysis.md`
- JSON: `{processFolder}/sipoc-analysis.json`

### 8. Generate Prefill Summary

Present to SME:

"**SIPOC Draft Generated** from your AS-IS documentation.

I extracted:
- **{{supplier_count}} suppliers** ({{high_conf_count}} high confidence, {{low_conf_count}} need validation)
- **{{input_count}} inputs** ({{high_conf_count}} high confidence, {{low_conf_count}} need validation)
- **{{output_count}} outputs** ({{high_conf_count}} high confidence, {{low_conf_count}} need validation)
- **{{customer_count}} customers** ({{high_conf_count}} high confidence, {{low_conf_count}} need validation)

Items marked [PREFILLED] need your validation.

**[C] Continue to SME refinement**"

### 9. Hand Off to continue-session

When C selected:
- Call continue-session workflow with parameter: `document_type=sipoc`
- continue-session loads SIPOC template + schema from `sipoc-analysis.schema.yaml`
- continue-session reads `section_prompts` from `sipoc-analysis.schema.yaml`
- SME refines section by section using existing hub-and-spoke loop
- When SME exits continue-session (DONE or EXIT):
  → Return here and load {nextStepFile} (step-03-cross-read.md)

**This replaces a dedicated step-02-refine-sme.** The continue-session workflow
already handles template-driven section discovery, hub-and-spoke review,
dual persistence, and confidence tracking. No need to duplicate.
