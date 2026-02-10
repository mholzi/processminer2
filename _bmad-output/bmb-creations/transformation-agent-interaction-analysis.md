# Transformation Agent (Phoenix) — Upstream Interaction Analysis

**Date:** 2026-02-10
**Analyst:** Bond (Agent Building Expert)
**Scope:** How Phoenix interacts with upstream agents, shared workflows, and the SME collaboration model

---

## 1. Executive Summary

Phoenix (Transformation Agent) sits at a critical convergence point in the ProcessMiner ecosystem. It is the **decision-making agent** that synthesizes inputs from ALL upstream specialist agents — PDA (pain points, process structure), CX Journey (client friction, effort scores), Control (compliance gaps, improvement recommendations), and Innovation (automation opportunities, technology feasibility) — to produce transformation decisions (TD#) that drive the Target State design.

**Critical Architectural Insight:** Innovation, CX Journey, and Control are NOT peers of Phoenix — they are **upstream inputs**. Phoenix cannot make sound transformation decisions without knowing what technology can do (II#), what compliance requires (CIR#, REG#), and where clients suffer (FP#, CES). The correct flow is:

```
PDA (Foundation) → [CX Journey, Control, Innovation] → Transformation → Target State
                   ↑ ANALYSIS LAYER (parallel)         ↑ DECISION LAYER   ↑ DESIGN LAYER
```

**Critical Gap:** The Target State schema defines validation sections (§9-§12) for each specialist agent, but no agent has the workflow, menu trigger, or feedback mechanism to actually perform Target State review. Furthermore, there is no SME validation loop for specialist concerns (VG# items) raised during review.

This analysis maps every data dependency, workflow handoff, cross-reference chain, collaborative touchpoint, and architectural gap in detail.

---

## 2. Agent Ecosystem Map

### 2.1 The 8-Agent Architecture (CORRECTED)

**Previous (flawed) assumption:** All specialist agents are parallel peers consuming PDA output.
**Corrected model:** Three-layer architecture with explicit upstream/decision/validation flow.

```
                         ┌──────────────────────┐
                         │   Companion (Sage)    │
                         │   🧭 Orchestrator     │
                         └──────────┬───────────┘
                                    │
              ══════════════════════════════════════════
              ║        LAYER 1: FOUNDATION              ║
              ══════════════════════════════════════════
                                    │
                          ┌─────────┴─────────┐
                          │    PDA (Doc) 📋    │
                          │    AS-IS Capture   │
                          │  PS#, PP#, EX#,    │
                          │  SYS#, BR#, CP#    │
                          └────┬────┬────┬─────┘
                               │    │    │
              ══════════════════════════════════════════
              ║     LAYER 2: ANALYSIS (parallel)        ║
              ║     "What's happening & what's possible"║
              ══════════════════════════════════════════
                               │    │    │
                    ┌──────────┘    │    └──────────┐
                    ▼              ▼               ▼
            ┌──────────────┐ ┌──────────┐ ┌──────────────┐
            │CX Journey 🗺️ │ │Control🛡️ │ │Innovation 💡 │
            │              │ │          │ │              │
            │ FP# friction │ │ CIR# rec │ │ II# ideas    │
            │ CES score    │ │ REG# reg │ │ TR# trends   │
            │ EI# enhance  │ │ CP# gaps │ │ Feasibility  │
            │ JT# touch    │ │ SOD# sod │ │ ROI est.     │
            └──────┬───────┘ └────┬─────┘ └──────┬───────┘
                   │              │               │
              ══════════════════════════════════════════
              ║     LAYER 3: DECISION                   ║
              ║     "What should we do about it"        ║
              ══════════════════════════════════════════
                   │              │               │
                   └──────────────┼───────────────┘
                                  ▼
              ╔═══════════════════════════════════════╗
              ║   TRANSFORMATION AGENT (Phoenix) 🔄   ║
              ║                                       ║
              ║   INPUTS:                             ║
              ║   - PP#, PS#, EX#, SYS# (from PDA)   ║
              ║   - FP#, CES, EI# (from CX Journey)  ║
              ║   - CIR#, REG#, CP# gaps (from Ctrl)  ║
              ║   - II#, TR#, feasibility (from Inno)  ║
              ║                                       ║
              ║   PRODUCES: TD# decisions             ║
              ╚══════════════════╤════════════════════╝
                                 │
              ══════════════════════════════════════════
              ║     LAYER 4: DESIGN & VALIDATION        ║
              ║     "Build it, then verify it"          ║
              ══════════════════════════════════════════
                                 │
                    ┌────────────┴────────────┐
                    ▼                         ▼
          ┌─────────────────┐    ┌───────────────────┐
          │  Target State   │    │  IT Architect 🏛️   │
          │  Documentation  │    │  (Blueprint)       │
          │  TS#, TC#, TJ#  │    │  Technical design  │
          └────────┬────────┘    └───────────────────┘
                   │
        ┌──────────┼──────────┬──────────┐
        ▼          ▼          ▼          ▼
   ┌─────────┐┌─────────┐┌─────────┐┌─────────┐
   │Guardian  ││Journey  ││Spark    ││Doc      │
   │reviews   ││reviews  ││reviews  ││reviews  │
   │§9 Ctrl   ││§10 CX   ││§11 Inno ││§12 Proc │
   │validation││validation││validation││validation│
   └────┬─────┘└────┬─────┘└────┬─────┘└────┬─────┘
        │           │           │           │
        └───────────┼───────────┘           │
                    ▼                       │
            ┌───────────────┐               │
            │ VG# items     │◄──────────────┘
            │ consolidated  │
            └───────┬───────┘
                    ▼
        ┌───────────────────────┐
        │  SME VALIDATION GATE  │
        │  Confirm/reject/      │
        │  contextualize VG#    │
        └───────────┬───────────┘
                    ▼
            ┌───────────────┐
            │ Phoenix       │
            │ resolves VG#  │
            │ updates TD#   │
            └───────┬───────┘
                    ▼
              [Re-validation cycle]
                    ▼
            ┌───────────────┐
            │  QA (Scrutiny)│
            │  Final gate ✅ │
            └───────────────┘
```

### 2.2 Phoenix's Position Classification (CORRECTED)

| Relationship | Agent | Direction | What Flows | Layer |
|:---|:---|:---|:---|:---|
| **Upstream L1** | PDA (Doc) | PDA → Phoenix | PS#, PP#, EX#, SYS#, BR#, SLA#, PGAP# | Foundation |
| **Upstream L2** | CX Journey (Journey) | Journey → Phoenix | FP#, CES, EI#, JT# | Analysis |
| **Upstream L2** | Control (Guardian) | Guardian → Phoenix | CIR#, REG#, CP# gaps, SOD#, automation analysis | Analysis |
| **Upstream L2** | Innovation (Spark) | Spark → Phoenix | II#, TR#, feasibility scores, ROI estimates | Analysis |
| **Downstream** | IT Architect (Blueprint) | Phoenix → Blueprint | TD# drives architecture; technical constraints may loop back | Design |
| **Downstream** | Target State Doc | Phoenix → Target State | TD# populates §7 (sync_enabled: true) | Design |
| **Downstream Validator** | All 4 Specialists | Target State → Specialists → SME → Phoenix | VG# validation gaps requiring SME review and Phoenix resolution | Validation |
| **Final Gate** | QA (Scrutiny) | Phoenix → Scrutiny | Cross-reference validation across all documents | Validation |
| **Orchestrator** | Companion (Sage) | Sage ↔ Phoenix | Progress tracking, handoff routing, validation loop coordination | All |

**Key correction:** Innovation is **NOT a peer** — it is an upstream analysis agent. Phoenix should consume II# and TR# the same way it consumes PP# and FP#. You cannot decide WHAT to change without knowing what technology makes possible.

---

## 3. Upstream Data Dependencies (What Phoenix Consumes)

### 3.1 From PDA (Doc) — The Foundation

PDA produces the AS-IS Process Documentation, which is the **mandatory prerequisite** for Phoenix. The `analyze-improvements` workflow explicitly checks:

```
Prerequisites:
- Process steps documented (count >= 3)
- Pain points documented (count >= 1)
```

**If not met, Phoenix refuses to proceed:**
> "Transformation analysis requires documented pain points. Return to PDA to capture more pain points first."

#### Items Consumed from PDA

| ID Prefix | Item Type | How Phoenix Uses It |
|:---|:---|:---|
| **PP#** | Pain Points | **Primary input.** Every TD# must reference the PP# it addresses. Phoenix's entire raison d'etre is converting PP# items into TD# recommendations. |
| **PS#** | Process Steps | Referenced in TD# `affected_steps` and `AS-IS References Affected` tables. Provides the structural context for where pain occurs. |
| **EX#** | Exceptions | Inform transformation scope — exceptions that should be eliminated or automated in TO-BE. |
| **SYS#** | Systems | Identify which systems need modification, replacement, or integration in transformation. |
| **BR#** | Business Rules | Constraints that may need updating when processes change. |
| **SLA#** | Service Levels | Baseline performance that transformation must improve or maintain. |
| **PGAP#** | Process Gaps | Gaps that transformation should close — tracked in gap-resolution-log.md. |

#### The Pain Points Detail Document — Phoenix's Primary Feed

The `pain-points-detail.schema.yaml` contains a dedicated **Section 7: Input for Downstream Agents** with an explicit subsection:

```yaml
- id: for_transformation_agent
  heading: "For Transformation Agent"
  content_type: prose
  guidance: "Key pain points to address in TO-BE design."
```

This means PDA actively curates which pain points are most relevant for Phoenix, pre-digesting the priority analysis. Pain points also include:
- `root_cause_analysis` — helps Phoenix target the cause, not the symptom
- `improvement_ideas` — SME-sourced suggestions Phoenix can validate and formalize
- `transformation_considerations` — explicit notes for TO-BE design
- `priority_score` — weighted 40% Impact, 30% Frequency, 20% Breadth, 10% Solvability
- `quick_win` flag — pre-identified by PDA

### 3.2 From CX Journey (Journey) — The Client Lens

| ID Prefix | Item Type | How Phoenix Uses It |
|:---|:---|:---|
| **JT#** | Journey Touchpoints | Transformation must preserve or improve client touchpoints. Each JT# maps to PS# steps. |
| **FP#** | Friction Points | Client-facing pain — often correlates with internal PP#. Phoenix should address FP# through TD# recommendations. |
| **CH#** | Channels | Channel strategy informs transformation approach (digitization, omnichannel). |
| **CES** | Client Effort Score | Baseline metric; transformation should target 30% CES reduction (defined in target-state schema metrics). |

#### CX Journey's Downstream Feed

The CX Journey Documentation includes friction points with `enhancement_ideas` — these represent the client-facing equivalent of PP# improvement_ideas and should inform TD# items that address client experience.

### 3.3 From Control (Guardian) — The Compliance Guardrails

| ID Prefix | Item Type | How Phoenix Uses It |
|:---|:---|:---|
| **CP#** | Control Points | Every transformation decision must consider control impact. TD# items reference affected CP#. |
| **REG#** | Regulations | Non-negotiable constraints that shape what can and cannot change. |
| **SOD#** | Segregation of Duties | Must be preserved in TO-BE design — constrains process step consolidation. |
| Control Gaps | Identified weaknesses | Transformation opportunities — close gaps through improved controls in TO-BE. |

#### Control Points Detail Feed

The `control-points-detail.schema.yaml` Section 9 explicitly provides:

```
- For Transformation Agent: Control gaps, automation candidates, improvement priorities
```

Including per-control:
- **Automation Analysis** — potential, blockers, prerequisites, ROI, fallback
- **Control Economics** — cost per execution, annual cost, risk reduction value
- **Control Improvement Recommendations (CIR#)** — directly actionable for TD# creation

### 3.4 Upstream Dependency Summary

```
PDA (Doc)                     CX Journey (Journey)          Control (Guardian)
─────────                     ────────────────────          ──────────────────
PP# (MANDATORY)               JT# touchpoints               CP# control points
PS# process steps             FP# friction points            REG# regulations
EX# exceptions                CH# channels                   SOD# segregation
SYS# systems                  CES score baseline             Control gaps
BR# business rules                                           CIR# improvement recs
SLA# service levels                                          Automation analysis
PGAP# process gaps
Pain Points Detail §7
  └─ "For Transformation Agent"
         │                           │                           │
         └───────────────────────────┼───────────────────────────┘
                                     │
                                     ▼
                        ╔═══════════════════════╗
                        ║  Phoenix (TD# output) ║
                        ╚═══════════════════════╝
```

---

## 4. Phoenix's Production: What It Creates

### 4.1 Primary Output: Transformation Decisions (TD#)

Each TD# record is a rich, structured decision with:

| Field | Purpose | Cross-References |
|:---|:---|:---|
| Decision Overview | Scope (Strategic/Tactical/Operational), Characteristics (Trade-off/Constrained/Time-bound), Status, Confidence, Uncertainty Source | — |
| Context & Problem | Why this decision is needed | PP# that drive it |
| Alternatives Considered | Options evaluated with pros/cons | — |
| Evaluation Criteria | Feasibility, Cost, Risk, Time, Strategic Alignment, Client Impact, Operational Impact | — |
| Constraints Applied | Regulatory, technical, budgetary limits | REG#, SYS# |
| AS-IS References Affected | What changes in the current state | PS#, CP#, SYS# |
| TO-BE References Created | New target state items | TS#, TC#, TJ# |
| Consequences | Positive and negative outcomes | — |
| Dependencies | depends_on, blocks, conflicts_with other TD# | TD# cross-refs |
| Key Assumptions | Per-decision assumptions with validation status | — |
| Stakeholder Input | Who was consulted, what they said | SME names |

### 4.2 Secondary Outputs

| Output | Description |
|:---|:---|
| **Trade-off Analysis** | Consolidated view of competing demands (Efficiency vs Control, Speed vs Quality, etc.) |
| **Deferred Decisions** | TD# items in "Deferred" status with deferral rationale and revisit triggers |
| **Decision Debt Summary** | Aggregate risk view of deferred decisions by category |
| **Decision Patterns & Themes** | Common themes, emerging design principles, dependency map (Mermaid) |
| **Assumptions Register** | Cross-decision assumption tracking with invalidation impact |
| **Decision Audit Trail** | Chronological record of all decisions and revisions |
| **Implementation Roadmap** | Phased: Quick Wins (0-3mo), Tactical (3-6mo), Strategic (6-12mo), Long-term (12+mo) |

### 4.3 Management Summary

Phoenix can generate an Amazon 6-Pager management summary via the `executive-summary` workflow with variant `transformation`, rendered using `management-summary-transformation.md` (if defined) or the generic innovation summary template.

---

## 5. Downstream Consumers (What Eats Phoenix's Output)

### 5.1 Target State Documentation — The Convergence Point

The Target State Document (`target-state-documentation.schema.yaml`) is where ALL specialist agents' work converges. Phoenix's TD# items populate **Section 7: Transformation Decisions** with `sync_enabled: true`:

```yaml
- id: transformation_decisions
  heading: "7. Transformation Decisions"
  item_prefix: "TD"
  detail_document: "transformation-decisions-detail.md"
  sync_enabled: true
```

This means:
- TD# items in `transformation-decisions-detail.md` automatically sync to Section 7 of the Target State
- The Target State schema requires `transformation_decisions.count >= 1` as a minimum completeness rule
- Cross-reference validation is **bidirectional** — every TD# must exist in both documents

#### How TD# Shapes the Entire Target State

| Target State Section | How TD# Influences It |
|:---|:---|
| **§2 AS-IS to TO-BE Reconciliation** | TD# rationale explains WHY each PS# changes (Modified, Eliminated, Automated, Consolidated, New) |
| **§3 TO-BE Process Design** | TD# drives which new TS# steps are created and how existing PS# are modified |
| **§4 Control Design** | TD# with control impact creates new TC# items; must preserve SOD# |
| **§5 Client Experience Design** | TD# addressing FP# shapes TJ# touchpoint improvements; CES targets |
| **§6 Innovation Integration** | TD# incorporating II# ideas shows which innovations made it to TO-BE |
| **§7 Transformation Decisions** | Direct sync — the TD# detail document |
| **§14 Impact Analysis** | TD# aggregate impact on roles, systems, organization |
| **§15 Implementation Considerations** | TD# dependencies and sequencing drive implementation roadmap |

### 5.2 Phoenix Self-Validates Before Exit (Option 2 — Agreed Design)

The Target State schema defines specialist validation sections (§9-§12) with structured focus areas per domain. Rather than requiring the SME to exit and switch to each specialist agent, **Phoenix performs the validation itself** using the schema-defined checklists — inline, within the same continue-session workflow, before the SME exits.

**How it works:**

```
SME + Phoenix (continue-session on Target State)
    │
    │  Phoenix completes TD# → Target State draft done
    │
    │  "Target State draft complete. Running validation pre-check..."
    │
    ├─ Phoenix loads specialist focus areas from target-state-documentation.schema.yaml
    │
    │  CONTROL CHECK (§9 criteria):
    │  → Control gaps closed? SOD preserved? Regulatory compliance? Audit trail?
    │
    │  CX CHECK (§10 criteria):
    │  → CES targets met? Friction resolved? Moments that matter protected?
    │
    │  INNOVATION CHECK (§11 criteria):
    │  → MUST HAVE innovations included? Feasibility aligned? Future-proofed?
    │
    │  PROCESS CHECK (§12 criteria):
    │  → Traceability complete? References consistent? Documentation aligned?
    │
    │  Raises VG# items for any issues found
    ▼
    "Pre-check found 3 potential issues:
     VG-KYC-001 [High/Control]: SOD not verified for consolidated TS-KYC-004
     VG-KYC-002 [Medium/CX]: FP-KYC-003 resolution not documented
     VG-KYC-003 [Low/Innovation]: II-KYC-002 (MUST HAVE) not addressed

     [R] Resolve now  [D] Defer to Companion specialist review  [C] Continue anyway"
    │
    ├─ IF [R]: SME reviews each VG# inline:
    │    ✓ Confirm — Phoenix resolves, updates TD# and Target State
    │    ✗ Reject — "Acceptable because [reason]" → VG# closed with rationale
    │    ? Defer — "Post-implementation" → VG# deferred with risk acceptance
    │
    ├─ IF [D]: SME exits to Companion for full specialist review (deeper analysis)
    │
    └─ IF [C]: SME accepts current state, VG# items remain open
```

**UX benefit:** Zero agent switches for routine validation. The SME stays in one continuous session. Only complex/contested issues require escalation to Companion-led specialist review.

**Schema basis:** The validation criteria are already codified in `target-state-documentation.schema.yaml`:

```yaml
validation:
  specialists:
    - id: "control"
      focus_areas: ["Control gap closure", "SOD preservation",
                    "Regulatory compliance", "Audit trail"]
    - id: "cx"
      focus_areas: ["CES reduction", "Friction resolution",
                    "Moments that matter", "Exception handling"]
    - id: "innovation"
      focus_areas: ["MUST HAVE inclusion", "Feasibility alignment",
                    "Future-proofing"]
    - id: "process"
      focus_areas: ["Traceability completeness", "Reference consistency",
                    "Documentation alignment"]
```

Each VG# raised is tracked in **§13 Gap Resolution Log** (`gap-resolution-log.md`, sync_enabled: true) with severity, resolution, and SME rationale.

### 5.3 QA Agent (Scrutiny) — Final Gate

QA performs cross-reference validation across all documents:
- Every TD# must reference valid PP# items
- Every TD#'s AS-IS references must point to valid PS#, CP#, SYS#
- Bidirectional sync between `transformation-decisions-detail.md` and Target State §7
- Completeness scoring against schema minimums

---

## 6. Upstream Analysis Agents (Layer 2)

### 6.1 Innovation Analyst (Spark) — UPSTREAM INPUT (Corrected)

**Previous classification:** Bidirectional peer
**Corrected classification:** Upstream analysis agent (Layer 2 → feeds Layer 3)

**Why upstream, not peer:** Phoenix cannot make sound transformation decisions without knowing what technology makes possible. Innovation analysis answers "What COULD we do?" — Transformation then decides "What SHOULD we do?" Making these parallel means Phoenix operates in a technology vacuum.

**Spark → Phoenix (primary flow):**
- II# (Innovation Ideas) — automation opportunities with feasibility scores and ROI estimates
- TR# (Market Trends) — industry direction that should inform strategic TD# items
- MoSCoW prioritization — MUST HAVE items that TD# must incorporate
- Feasibility matrix — six-dimension scoring (Technical, Business, Strategic, Resource, Risk, Customer)
- Technology candidates — matched to specific PP# and SYS# items

**Phoenix → Target State §6 (downstream, not back to Spark):**
- TD# items that incorporate II# populate Target State §6 (Innovation Integration)
- II# items not incorporated are documented as "Deferred Innovations" in §6.4
- Phoenix self-validates §11 (Innovation) to check MUST HAVE inclusion

### 6.2 IT Architect (Blueprint) — Downstream with Feedback

**Blueprint sits in Layer 4 (Design)**, consuming TD# output. However, technical constraints may feed back:

**Phoenix → Blueprint (primary flow):**
- TD# items with system impact drive architecture design
- Blueprint derives technical requirements FROM TD# and II# items
- System diagrams use SYS# references from TD# items

**Blueprint → Phoenix (feedback, if needed):**
- Technical infeasibility of a TD# item → Phoenix revises or defers
- Integration complexity affects TD# effort estimates
- This is an exception flow, not a standard input

---

## 7. The SME Collaboration Model

### 7.1 How the SME Participates in Transformation

The ProcessMiner system is designed around the principle that **AI drafts, SMEs validate**. For Phoenix specifically:

#### Stage 1: SME Feeds the Foundation (via PDA)

The SME works with PDA (Doc) to capture:
- Process steps (PS#) — "What happens first? Then what?"
- Pain points (PP#) — "What frustrates you most? Where do things go wrong?"
- Exceptions (EX#) — "What happens when things don't go as planned?"
- Current workarounds — "How do you cope with these issues?"
- **Improvement ideas** — SME-sourced suggestions captured directly in PP# records

These SME inputs become the **evidence base** that Phoenix must reference in every TD#.

#### Stage 2: SME Reviews Cross-Agent Input Briefing (via Phoenix)

Before generating TD# items, Phoenix loads and presents a **consolidated briefing** from ALL upstream agents:

**Upstream Data Loaded:**
- PP# pain points + improvement ideas (from PDA)
- FP# friction points + CES score + EI# enhancement ideas (from CX Journey)
- CIR# control improvement recommendations + CP# gaps + automation analysis (from Control)
- II# innovation ideas + TR# market trends + feasibility scores (from Innovation)

**If any upstream analysis is missing**, Phoenix warns the SME:
> "Innovation analysis has not been completed yet. Transformation decisions will be made without knowledge of automation opportunities. Proceed with reduced confidence, or complete Innovation analysis first?"

Phoenix's `analyze-improvements` workflow is interactive:

1. **Step 1 — Load & Analyze:** Phoenix presents cross-agent analysis to the SME:
   - PP# assessed for addressability, solution type, effort, benefit
   - FP# cross-referenced with PP# to identify client-facing impacts
   - II# matched to PP# to identify technology-enabled solutions
   - CIR# surfaced as compliance-driven improvement opportunities
   - SME can drill into details before proceeding
   - Menu: `[C] Continue  [D] Details on specific item`

2. **Step 2 — Generate Recommendations:** Phoenix proposes TD# items:
   - Each TD# cites its source evidence (PP#, FP#, CIR#, II# as applicable)
   - Prioritization incorporates innovation feasibility and compliance priority
   - Implementation roadmap accounts for technology timelines and regulatory deadlines
   - **SME can edit recommendations** before finalization
   - Menu: `[C] Continue  [E] Edit recommendations  [V] View details`

3. **Step 3 — Create Document:** Final transformation document generated with SME approval

#### Stage 3: SME Validates Decisions Iteratively

Through the `continue-session` workflow (used by all agents):
- SME can revisit any TD# record and refine it
- Section-by-section review with confidence tracking
- Change log tracks every modification with contributor name and role
- The `Stakeholder Input` table in each TD# explicitly records who was consulted

#### Stage 4: SME Validates Target State Inline (Phoenix Self-Check)

Phoenix performs a self-validation against all specialist checklists **before the SME exits the session**:

- Phoenix loads validation focus areas from `target-state-documentation.schema.yaml`
- Systematically checks Control, CX, Innovation, and Process criteria
- Raises VG# items for any gaps found
- Presents consolidated findings to SME for inline triage:
  - **Confirm** — "Yes, this is a real gap" → Phoenix resolves immediately, updates TD#
  - **Reject** — "No, acceptable because [reason]" → VG# closed with rationale
  - **Defer** — "Post-implementation" → VG# deferred with risk acceptance documented
- Only if SME wants deeper specialist review does control exit to Companion

**This means the SME never needs to switch agents for routine validation.** Complex or contested gaps can optionally be escalated to a Companion-led specialist review.

### 7.2 SME Touchpoints Across the Transformation Lifecycle

```
SME + PDA ──► Capture PP#, PS#, EX#, SYS#
                  │
                  │  "What frustrates you? What takes too long?"
                  │  "What happens when things go wrong?"
                  │  "What would you change if you could?"
                  ▼
SME + [CX, Control, Innovation] ──► Upstream specialist analysis
                  │
                  │  CX: "Walk me through a client's experience..."
                  │  Control: "Let me assess your compliance posture..."
                  │  Innovation: "Let me identify automation opportunities..."
                  ▼
SME + Phoenix ──► Review CROSS-AGENT briefing
                  │
                  │  "Here's what all upstream agents found:
                  │   - 9 pain points, 7 friction points, 4 control gaps,
                  │     6 automation opportunities. Let's prioritize..."
                  │  "Innovation says RPA is feasible for PS-KYC-003.
                  │   Does that match your experience?"
                  ▼
SME + Phoenix ──► Confirm TD# items
                  │
                  │  "Here are 8 recommendations drawing from all sources.
                  │   Want to edit any?"
                  │  "The roadmap incorporates Innovation timelines
                  │   and compliance deadlines. Right sequence?"
                  ▼
SME + Phoenix ──► Self-validate Target State (INLINE)
                  │
                  │  "Pre-check found 3 potential issues:
                  │   VG-001 [High/Control]: SOD not verified...
                  │   VG-002 [Medium/CX]: Friction unresolved...
                  │   VG-003 [Low/Innovation]: MUST HAVE missing..."
                  │
                  │  SME triages each: Confirm / Reject / Defer
                  │  Phoenix resolves confirmed gaps immediately
                  ▼
SME + QA ──► Final quality check
                  │
                  │  "Cross-references validated. All clean."
                  ▼
              Approved Transformation Package
```

### 7.3 Contributor Traceability

Every document modification is attributed:
- Session file captures contributor name + role at activation
- Change logs record date, contributor, role, changes
- TD# `Stakeholder Input` table records who provided what input
- This creates a full audit trail of SME involvement in transformation decisions

---

## 8. Workflow Interactions

### 8.1 Phoenix's Workflows (Updated)

| Workflow | Trigger | Purpose | Key Interactions |
|:---|:---|:---|:---|
| `analyze-improvements` | [AI] menu | Full transformation analysis | Loads ALL upstream data (PP#, FP#, CIR#, II#, TR#); produces TD# items; writes transformation-decisions-detail.md |
| `capture-item` (TD mode) | [AD] menu | Add single TD# decision | Uses shared capture-item workflow with `item_type: TD`; validates against schema |
| `continue-session` | [PD equivalent] | Refine transformation doc | Section-by-section review of transformation-decisions-detail.md |
| `generate-outputs` | [MS] menu | Management summary | Generates Amazon 6-Pager from TD# data |
| `target-state-validation` (NEW) | [VT] menu | Self-validate Target State | Loads specialist focus areas from schema; checks Control, CX, Innovation, Process criteria; raises VG# items; SME triages inline |

### 8.2 Shared Workflow: `continue-session`

This is the **hub workflow** used by ALL agents for document refinement. It's agent-agnostic and process-agnostic:

```
S1 (Load Context) → S2 (Import Docs)* → S3 (Section Overview — HUB)
                                         ↕
                                   S4 (Section Review)
                                         ↓
                                   S5 (Write & Reconcile)
                                         ↓
                                   S6 (Resolve Discrepancies)
                                         ↓
                                   → S3 (HUB — loop)
```

When Phoenix uses `continue-session`:
- Template loaded: `transformation-decisions-detail.md`
- Schema loaded: `transformation-decisions-detail.schema.yaml`
- Sections discovered dynamically from schema (7 sections)
- SME reviews each section, adds/refines TD# items
- Dual persistence: MD for humans, JSON for AI processing

### 8.3 Shared Workflow: `capture-item`

When Phoenix captures a TD# via [AD]:
- `item_type: TD` passed as parameter
- Required fields enforced from schema: id, title, scope, context, alternatives, rationale, impact
- Cross-references validated: PP# must exist, PS# must be valid
- Item added to both structured-data.json and transformation-decisions-detail.md
- `_progress.yaml` updated

### 8.4 Companion Orchestration (Updated Sequencing)

Companion (Sage) manages handoffs with **recommended sequencing guidance**:

```
[User at Companion] → "Switch to Transformation Agent" [TRX]
                    → Phoenix activates
                    → Checks prerequisites:
                       REQUIRED: PP# exist? PS# exist?
                       RECOMMENDED: FP# exist? CIR# exist? II# exist?
                    → If required not met: "Return to PDA first"
                    → If recommended not met: "CX/Control/Innovation analysis
                       not complete. Proceed with reduced confidence,
                       or complete upstream analysis first?"
                    → If met: presents Phoenix menu

[User at Phoenix] → Completes TD# work
                  → [VT] Self-validates Target State (inline)
                  → SME triages VG# items
                  → Phoenix resolves confirmed gaps
                  → [COMP] Returns to Companion

[User at Companion] → Companion reads _progress.yaml
                    → Surfaces insight: "Phoenix has logged 5 TD# items
                       and self-validated. 1 VG# deferred. Ready for QA."
```

**Companion sequencing guidance (new):**
- After PDA completes AS-IS → recommend CX Journey, Control, Innovation (parallel)
- After all three complete → recommend Transformation (Phoenix)
- After Phoenix completes + self-validates → recommend QA
- This is guidance, not a hard gate — SME can override at any time

---

## 9. Cross-Reference Validation Chain

### 9.1 References Phoenix Must Validate

| Reference | Source | Target | Validation Rule |
|:---|:---|:---|:---|
| TD# → PP# | Every TD# `Addresses` field | AS-IS pain-points-detail | Must reference valid PP# |
| TD# → PS# | TD# `Affected Steps` field | AS-IS process steps | Must reference valid PS# |
| TD# → TS# | TD# `TO-BE References` field | Target State process steps | Must reference valid TS# |
| TD# → CP# | TD# control impact | Control points detail | Must reference valid CP# |
| TD# → FP# | TD# client friction reference | CX journey friction points | Must reference valid FP# (NEW) |
| TD# → II# | TD# innovation incorporation | Innovation analysis backlog | Must reference valid II# (NEW) |
| TD# → CIR# | TD# compliance-driven change | Control improvement recommendations | Must reference valid CIR# (NEW) |
| TD# → TD# | Dependencies (depends_on, blocks, conflicts_with) | Same document | Self-referential validation |
| TD# ↔ Target State §7 | Bidirectional sync | target-state-documentation | Every TD# in detail must appear in §7 and vice versa |
| VG# → TD# | Validation gap reference | transformation-decisions-detail | VG# must reference valid TD# (NEW) |

### 9.2 The Bidirectional Sync Rule

The schema explicitly requires **bidirectional** cross-reference validation:

```yaml
cross_references:
  inter_document:
    - description: "All TD# must correspond to decisions in Target State section 7 (bidirectional)"
      direction: "bidirectional"
```

This means:
- If a TD# exists in `transformation-decisions-detail.md`, it MUST appear in Target State §7
- If a TD# appears in Target State §7, it MUST have a full record in the detail document
- Orphans in either direction are validation failures

---

## 10. Schema-Driven Architecture Implications

### 10.1 "SCHEMA IS LAW"

Phoenix's critical_actions include:
> "SCHEMA IS LAW — when creating or modifying document content, ALWAYS enforce per-document .schema.yaml validation rules (min_words, min_count, required item_fields, enum values, reference validity) as generation constraints"

This means Phoenix doesn't just produce content and hope it passes validation — it **uses schema rules as generation constraints**:

| Schema Rule | Generation Constraint |
|:---|:---|
| `decision_catalog.count >= 1` | Must produce at least 1 TD# |
| `detailed_decisions.count >= 1` | Must produce at least 1 detailed record |
| `required_fields: [id, title, scope, context, alternatives, rationale, impact]` | Every TD# must have all 7 fields populated |
| `scope: [strategic, tactical, operational]` | Must classify using these 3 values only |
| `status_values: [Proposed, Under Review, Active, ...]` | Must use approved status values |
| `confidence_levels: [high, medium, low]` | Must assess confidence |
| `tradeoff decisions have matching analysis entries` | If TD# is tagged "trade-off", must have a Trade-off Analysis entry |

### 10.2 Shared Defaults Impact

From `_defaults.yaml`, Phoenix inherits:
- **ID format:** `TD-{PROCESS_ABBREV}-{SEQ}` (e.g., `TD-KYC-001`)
- **Document statuses:** DRAFT → IN_PROGRESS → REVIEW → APPROVED → ARCHIVED
- **Confidence thresholds:** HIGH (90%), MEDIUM (70%), LOW (40%), STUB (<40%)
- **Incomplete markers:** Content containing `[TBD]`, `[Unknown]`, `{{.*}}` is flagged as incomplete
- **Diagram rules:** Mermaid flowchart for dependency maps, specific syntax constraints

---

## 11. Critical Architectural Issues

### 11.1 ISSUE A: Innovation Is Incorrectly Positioned as a Peer

**Current state:** Phoenix treats Innovation (Spark) as a parallel peer agent. The `analyze-improvements` workflow only requires PP# and PS# as prerequisites. Innovation's II# and TR# outputs are never loaded.

**Why this is wrong:**

Transformation decisions answer: "What should we change and how?" To answer this properly, Phoenix needs to know:

1. **What technology makes possible** (II# automation opportunities, feasibility scores, ROI estimates from Spark)
2. **What the market demands** (TR# market trends, competitive landscape from Spark)
3. **What compliance requires** (CIR# control improvement recommendations, REG# regulations from Guardian)
4. **What clients need** (FP# friction points, CES scores, EI# enhancement ideas from Journey)

Without these inputs, Phoenix is making decisions based solely on internal pain points — like an architect designing a building knowing only what's broken, without knowing what materials exist, what codes apply, or what the occupants want.

**Impact on TD# quality:**

| Missing Input | Consequence |
|:---|:---|
| No II# from Innovation | TD# may propose manual solutions when automation is feasible; may propose automation that isn't feasible |
| No TR# from Innovation | Strategic TD# items may be misaligned with market direction |
| No CIR# from Control | TD# may miss compliance-driven opportunities or violate constraints |
| No FP# from CX Journey | TD# may solve internal pain without addressing client friction |
| No CES baseline | No way to set measurable client experience improvement targets |

**Required change:** Innovation, Control, and CX Journey must complete their analysis BEFORE Phoenix runs `analyze-improvements`. The Companion should enforce this sequencing, and Phoenix's prerequisites must expand:

```yaml
# CURRENT prerequisites (insufficient)
prerequisites:
  - "Process steps documented (count >= 3)"
  - "Pain points documented (count >= 1)"

# CORRECTED prerequisites
prerequisites:
  required:
    - "Process steps documented (PS# count >= 3)"
    - "Pain points documented (PP# count >= 1)"
  recommended:
    - "CX Journey analysis complete (FP# documented)"
    - "Control analysis complete (CIR# documented)"
    - "Innovation analysis complete (II# documented)"
  behavior_if_recommended_missing:
    - "Warn user that decisions will be based on incomplete input"
    - "Offer to proceed with available data or return to complete analysis"
    - "Flag which upstream analyses are missing in TD# confidence field"
```

### 11.2 ISSUE B: No Target State Review Mechanism for Specialists

**Current state:** The Target State schema defines validation sections §9-§12 for Control, CX, Innovation, and PDA validation. These sections have detailed structure (VG# gap items, severity levels, specialist feedback prose). But:

- **No specialist agent has a menu item** to trigger Target State review
- **No workflow exists** for Target State validation
- **No VG# feedback loop** routes concerns back to Phoenix
- **No SME validation gate** exists for specialist-raised concerns

**Why this matters:**

The entire value of multi-agent specialist analysis is lost if specialists cannot verify their concerns were properly addressed in the TO-BE design. Without this:

- Control Analyst cannot verify SOD preservation, regulatory compliance, or control gap closure
- CX Analyst cannot verify friction points were resolved or CES targets met
- Innovation Analyst cannot verify MUST HAVE innovations were included
- PDA cannot verify traceability completeness (every PS# has a TO-BE disposition)

**The SME must be in the loop** because:

1. Specialists may raise theoretical concerns that aren't practical (SME provides operational reality)
2. Some VG# items may have context only the SME knows ("We already have budget approval for this")
3. Trade-offs between specialist concerns require human judgment ("Compliance says X, CX says Y — which matters more here?")
4. Acceptance of residual risk is a business decision, not a technical one

**Required feedback loop architecture:**

```
Phase 1: Phoenix produces Target State with TD# items
         ↓
Phase 2: Each specialist reviews their domain
         Guardian → reviews §4 (Control Design) → writes §9 findings + VG# items
         Journey  → reviews §5 (CX Design) → writes §10 findings + VG# items
         Spark    → reviews §6 (Innovation) → writes §11 findings + VG# items
         Doc      → reviews §2-3 (Reconciliation) → writes §12 findings + VG# items
         ↓
Phase 3: VG# consolidation + SME validation
         Companion presents ALL VG# items to SME, grouped by specialist
         SME reviews each:
           ✓ Confirm — "Yes, this is a real gap, Phoenix must address it"
           ✗ Reject — "No, this is acceptable because [reason]" → VG# closed with rationale
           ? Defer — "We'll address this post-implementation" → VG# deferred with risk acceptance
         ↓
Phase 4: Phoenix resolves confirmed VG# items
         Updates affected TD# items
         May create new TD# items
         May modify Target State sections
         ↓
Phase 5: Re-validation (optional, for Critical/High severity VG#)
         Affected specialist re-reviews their section
         Cycle continues until clean or SME accepts residual
         ↓
Phase 6: QA performs final cross-reference validation
```

**What needs to change in each agent:**

| Agent | Required Addition |
|:---|:---|
| **Phoenix** | New menu item: `[RV] Resolve Validation Gaps` — load VG# items, update TD# |
| **Guardian** | New menu item: `[RT] Review Target State` — validate §4, write §9, raise VG# |
| **Journey** | New menu item: `[RT] Review Target State` — validate §5, write §10, raise VG# |
| **Spark** | New menu item: `[RT] Review Target State` — validate §6, write §11, raise VG# |
| **Doc (PDA)** | New menu item: `[RT] Review Target State` — validate §2-3, write §12, raise VG# |
| **Companion** | New menu item: `[VR] Validation Review` — consolidate VG#, facilitate SME review |
| **New workflow** | `review-target-state` — shared workflow parameterized per specialist |
| **New workflow** | `resolve-validation-gaps` — Phoenix-specific gap resolution workflow |
| **New workflow** | `sme-validation-review` — Companion-facilitated SME review of VG# items |

### 11.3 Additional Gaps (From Original Analysis)

| # | Gap | Impact |
|:---|:---|:---|
| G4 | **Inline prompts lack schema enforcement.** `quick-wins`, `roadmap-generation`, `dependency-mapping` prompts don't reference schema constraints. | Non-compliant content when using prompts outside the main workflow. |
| G7 | **No Target State ownership.** No agent or workflow explicitly owns creating the Target State document. It's the convergence of all agents but nobody initiates it. | Unclear who creates the initial Target State draft that specialists then review. |
| G8 | **Companion doesn't enforce sequencing.** Companion lets users switch to any agent at any time. There's no guidance that CX/Control/Innovation should complete before Transformation. | Users may run Phoenix prematurely with incomplete upstream analysis. |

### 11.4 Enhancement Opportunities for SME Collaboration

| # | Opportunity | Description |
|:---|:---|:---|
| E1 | **Cross-Agent Input Briefing** | Before generating TD#, present the SME with a consolidated view from ALL upstream agents — PP# from PDA, FP# from CX, CIR# from Control, II# from Innovation — so the SME sees the full picture and can guide prioritization. |
| E2 | **Decision Impact Preview** | When proposing a TD#, show the SME cascading impact: which PS# steps change, which CP# controls are affected, which JT# touchpoints shift, which II# items are incorporated. |
| E3 | **Validation Review Dashboard** | Companion presents a consolidated VG# dashboard to the SME with specialist concerns grouped by severity, domain, and affected TD# — enabling efficient triage. |
| E4 | **Residual Risk Register** | When SME rejects or defers a VG# item, capture the rationale and risk acceptance in a formal register — creating an audit trail for why certain specialist concerns were overridden. |

---

## 12. Appendix: Reference ID Cross-Map

### Which Agent Produces Each ID Prefix

| Prefix | Name | Producing Agent | Consumed By Phoenix? |
|:---|:---|:---|:---|
| PS# | Process Step | PDA | Yes (mandatory) |
| PP# | Pain Point | PDA | Yes (mandatory, primary input) |
| EX# | Exception | PDA | Yes (contextual) |
| SYS# | System | PDA | Yes (contextual) |
| BR# | Business Rule | PDA | Yes (constraint) |
| SLA# | Service Level | PDA | Yes (baseline) |
| PGAP# | Process Gap | PDA | Yes (opportunity) |
| HO# | Handoff Point | PDA | Indirectly (via PS#) |
| DP# | Decision Point | PDA | Indirectly (via PS#) |
| DOC# | Document/Data | PDA | Indirectly |
| INT# | Integration Point | PDA | Indirectly (via SYS#) |
| JT# | Journey Touchpoint | CX Journey | Yes — upstream L2 input (PLANNED) |
| FP# | Friction Point | CX Journey | Yes — upstream L2 input (PLANNED) |
| CH# | Channel | CX Journey | Indirectly (via FP#) |
| CP# | Control Point | Control | Yes — upstream L2 input (PLANNED) |
| REG# | Regulation | Control | Yes — as constraint (PLANNED) |
| SOD# | Segregation of Duties | Control | Yes — as constraint (PLANNED) |
| CIR# | Control Improvement Rec | Control | Yes — upstream L2 input (PLANNED) |
| II# | Innovation Idea | Innovation | Yes — upstream L2 input (PLANNED) |
| TR# | Market Trend | Innovation | Yes — upstream L2 input (PLANNED) |
| TD# | Transformation Decision | **Phoenix (produces)** | N/A — this is output |
| TS# | Target Step | Target State | Referenced in TD# TO-BE refs |
| TC# | Target Control | Target State | Referenced in TD# TO-BE refs |
| TJ# | Target Journey | Target State | Referenced in TD# TO-BE refs |
| VG# | Validation Gap | Phoenix self-check | Yes — raised and triaged inline (PLANNED) |

---

_Generated by Bond (Agent Building Expert) for Phoenix edit planning._
_Document ID: transformation-agent-interaction-analysis-2026-02-10_
