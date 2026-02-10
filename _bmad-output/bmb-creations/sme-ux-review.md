# SME-Facing UX Review: Agent Invocation Messages, Menus & Guidance

**Review Date:** 2026-02-10
**Implementation Status:** IMPLEMENTED (2026-02-10) — all text-only changes applied
**Scope:** All agent activation messages, menu descriptions, handoff text, milestone prompts, workflow step menus, and error messages
**Perspective:** A sitting SME who has never used ProcessMiner before

---

## Executive Summary

ProcessMiner's agents are powerful, but the text an SME actually sees on screen assumes too much prior knowledge. Menu items use cryptic 2-letter codes with thin descriptions, agent names are unexplained personas, internal reference IDs (PP#, FP#, TD#) appear without context, and workflow step menus offer bare-bones options with no preview of what happens next.

An SME sitting in front of this for the first time will repeatedly think: *"What does this do? What will happen if I pick this? How long will it take? What should I have ready?"*

This review catalogs every issue by agent, organized into categories:

| Category | Symbol | Meaning |
|----------|--------|---------|
| **Missing Context** | MC | SME doesn't know what an option does or what to expect |
| **Jargon Leak** | JL | Internal terminology or ID references with no explanation |
| **Bare Menu** | BM | Menu options lack enough description for an uninformed choice |
| **Missing Orientation** | MO | SME doesn't know where they are in the overall journey |
| **Name Confusion** | NC | Agent persona names used without role explanation |

---

## 1. Companion Agent (Sage)

The Companion is the entry point. This is where first impressions happen.

### 1.1 Welcome Message — New User

**Current:**
```
Welcome {contributor_name}! I'm Sage, your Process Journey Companion.
As a {contributor_role}, your perspective is invaluable to this documentation journey.

No active process found. Let's get started:

1. [NP] New Process — Start documenting a new process
2. [SP] Select Process — Open an existing process

Please select an option to continue.
```

**Issues:**

| # | Cat | Issue | Recommendation |
|---|-----|-------|----------------|
| C-01 | NC | "I'm Sage" — who is Sage? Why does it have a name? The SME has no context for persona names. | Add a one-line role description: *"I'm Sage, your Process Journey Companion — I'll guide you through documenting your process and connecting you with the right specialist when needed."* |
| C-02 | MO | No overview of what the overall journey looks like. The SME doesn't know what they're signing up for. | Add a brief orientation after the greeting: *"Together we'll document how your process works today, then bring in specialists to analyze compliance, customer experience, innovation opportunities, and transformation options."* |
| C-03 | BM | "[NP] New Process — Start documenting a new process" — what does "documenting" involve? How long? What do I need to bring? | Expand: *"[NP] New Process — Set up a new process for documentation. I'll ask for the process name, then we'll start capturing how it works today. (~5 min setup, then we'll work section by section)"* |

### 1.2 Welcome Message — Returning User

**Current:**
```
Welcome back {contributor_name}! I'm Sage, your Process Journey Companion.

You have an active process:
─────────────────────────────
Process: {process_name} ({process_id})
Status:  {progress_percent}% complete
Last updated: {last_updated}
─────────────────────────────

{contextual_insight}

Here's what I can help you with:
```

**Issues:**

| # | Cat | Issue | Recommendation |
|---|-----|-------|----------------|
| C-04 | MO | "Here's what I can help you with:" is followed by the full menu, but the SME doesn't know which options are relevant to their current state. | Add a suggestion line before the menu: *"Based on your current progress, I'd suggest: {recommended_action}. But here's everything available:"* |
| C-05 | MO | The process ID (e.g., "005") means nothing to the SME. It's an internal folder number. | Display process name prominently; show ID only in parentheses or not at all. |

### 1.3 Agent Handoff Menu

**Current descriptions (what the SME actually sees):**
```
[PDA] Switch to Process Documentation Analyst
[CXA] Switch to Client Journey Analyst
[CTRL] Switch to Control Analyst
[INNO] Switch to Innovation Analyst
[ITA] Switch to IT Architect
[TRX] Switch to Transformation Agent (recommended: complete CXA, CTRL, INNO first)
[QA] Switch to QA Agent
```

**Issues:**

| # | Cat | Issue | Recommendation |
|---|-----|-------|----------------|
| C-06 | NC | Every handoff says "Switch to {Title}" but never explains what that agent *does* with the SME. The SME has to guess from titles alone. | Each handoff should include a one-line "what you'll do" explanation. See proposed text below. |
| C-07 | JL | "[TRX] Switch to Transformation Agent (recommended: complete CXA, CTRL, INNO first)" — uses three agent codes (CXA, CTRL, INNO) that the SME may not recognize. | Use plain names: *"recommended: complete Client Journey, Control, and Innovation analysis first"* |
| C-08 | BM | No indication of what each specialist session involves: Will they ask me questions? How long? Do I need data? | Add brief expectation-setting per agent. |
| C-09 | MO | No indication of which agents have already completed their work and which haven't started. | Append status to each: *"[CXA] ... (not started)" or "[CTRL] ... (complete)"* |

**Proposed Agent Handoff Descriptions:**

```
[PDA] Document Process — Walk through your process step by step with Doc, our Process Documentation Analyst.
      They'll ask about each step, who does it, what systems are used, and where things go wrong. {status}

[CXA] Map Customer Journey — Work with Journey, our Client Journey Analyst, to map how customers
      experience this process — touchpoints, friction, and moments that matter. {status}

[CTRL] Analyze Controls — Work with Guardian, our Control Analyst, to validate compliance checkpoints,
       audit evidence, and regulatory requirements in your process. {status}

[INNO] Explore Innovation — Work with Spark, our Innovation Analyst, to identify automation opportunities,
       technology options, and feasibility of improvements. {status}

[TRX] Plan Transformation — Work with Phoenix, our Transformation Agent, to synthesize all findings
      into prioritized improvement recommendations.
      Best results when Client Journey, Control, and Innovation are complete first. {status}

[ITA] Design Architecture — Work with Blueprint, our IT Architect, to translate recommendations
      into technical architecture and integration designs. {status}

[QA] Validate Quality — Work with Scrutiny, our QA Agent, to check documentation completeness,
     cross-references, and consistency before delivery. {status}
```

### 1.4 Guidance Section

**Current:**
```
[AS] Assess State — Read progress and generate insight
```

**Issues:**

| # | Cat | Issue | Recommendation |
|---|-----|-------|----------------|
| C-10 | BM | "Read progress and generate insight" is vague. Insight about what? | Rewrite: *"[AS] Where Am I? — See what's complete, what's missing, and what to work on next"* |

### 1.5 Process Management

**Current:**
```
[DP] Discontinue Process — Archive a process with audit trail
```

**Issues:**

| # | Cat | Issue | Recommendation |
|---|-----|-------|----------------|
| C-11 | MC | "Archive a process with audit trail" — SME may not know what "audit trail" means in this context. | Rewrite: *"[DP] Discontinue Process — Stop working on a process and record why (process files are preserved)"* |

### 1.6 QA Trigger Messages

**Current (specialist handoff):**
```
{agent_name} has completed their analysis. A quick QA validation can catch any gaps before moving on.

**[QV] Run QA Validation** — Validate {agent_name}'s documentation
**[N] Next specialist** — Continue to next agent
```

**Issues:**

| # | Cat | Issue | Recommendation |
|---|-----|-------|----------------|
| C-12 | MC | "QA validation" — what does this actually check? How long does it take? | Add: *"This checks cross-references, completeness, and consistency (~2-3 min). You'll see a report with any issues found."* |
| C-13 | BM | "[N] Next specialist — Continue to next agent" — which specialist? The SME doesn't know the sequence. | If possible, name the suggested next agent: *"[N] Continue — Move on (next suggested: {agent_name})"* |

---

## 2. PDA (Doc — Process Documentation Analyst)

### 2.1 Menu

**Current:**
```
[PD] Continue document refinement session
[CI] Capture Item — Add pain point, exception, control, or system
[IM] Import Docs — Import existing documentation
[SI] SIPOC Analysis — Map suppliers, inputs, process, outputs, customers
[DI] DILO Observation — Day-in-the-life-of role analysis
[QA] Quality Check — Validate cross-references and completeness
[MS] Management Summary — Create Process Management Summary (Amazon 6-Pager)
[COMP] Switch to Process Journey Companion
```

**Issues:**

| # | Cat | Issue | Recommendation |
|---|-----|-------|----------------|
| PDA-01 | MC | "[PD] Continue document refinement session" — what is a "document refinement session"? This is the most important menu item (the main work loop) and it has the least helpful description. | Rewrite: *"[PD] Work on Documentation — Review and refine your process documentation section by section"* |
| PDA-02 | JL | "[CI] Capture Item — Add pain point, exception, control, or system" — "pain point" and "exception" are ProcessMiner-specific item types. The SME may use different language. | Rewrite: *"[CI] Add an Item — Capture something specific: a problem, workaround, control check, system, or exception"* |
| PDA-03 | JL | "[SI] SIPOC Analysis" — SIPOC is a lean/six-sigma term. Many SMEs won't know it. | Add brief explanation: *"[SI] SIPOC Analysis — Map the full picture: who supplies input, what goes in, what the process does, what comes out, and who receives it"* |
| PDA-04 | JL | "[DI] DILO Observation" — "DILO" is highly specialized terminology. Most SMEs won't know it. | Rewrite: *"[DI] Day-in-the-Life — Observe and document a role's typical day working this process"* |
| PDA-05 | JL | "Validate cross-references and completeness" — "cross-references" is internal system terminology. | Rewrite: *"[QA] Quality Check — Check documentation for gaps, inconsistencies, and missing details"* |
| PDA-06 | MC | "[MS] Management Summary — Create Process Management Summary (Amazon 6-Pager)" — "Amazon 6-Pager" is a cultural reference that may not land. | Rewrite: *"[MS] Management Summary — Generate an executive summary document for stakeholder review"* |
| PDA-07 | MO | No indication of which items to use first. An SME new to this agent doesn't know to start with [PD]. | Add a brief orientation before the menu: *"Start with [PD] to walk through your process. Use [CI] to add specific items as they come up."* |

### 2.2 No Active Process Error

**Current:**
```
No active process found. Please start or select a process through the Companion agent first.
```

**Issues:**

| # | Cat | Issue | Recommendation |
|---|-----|-------|----------------|
| PDA-08 | NC | "the Companion agent" — the SME may not know what the Companion agent is or how to get there. | Rewrite: *"No active process found. To get started, switch to Sage (your Process Journey Companion) — they'll help you create or select a process. Type COMP to switch."* |

---

## 3. Transformation Agent (Phoenix)

### 3.1 Menu

**Current:**
```
[AI] Analyze Improvements — Full transformation analysis (loads ALL upstream specialist data)
[QW] Quick Wins — Identify low-effort, high-impact improvements from all upstream inputs
[AD] Add Decision — Capture a transformation design decision
[MS] Management Summary — Create Transformation Management Summary (Amazon 6-Pager)
[RM] Roadmap — Generate phased transformation roadmap
[DM] Dependency Map — Map interdependencies between decisions
[VT] Validate Target State — Self-check against specialist criteria, raise VG# for SME triage
[COMP] Switch to Process Journey Companion
```

**Issues:**

| # | Cat | Issue | Recommendation |
|---|-----|-------|----------------|
| TRX-01 | JL | "(loads ALL upstream specialist data)" — what is "upstream specialist data"? The SME doesn't think in terms of data pipelines. | Rewrite: *"[AI] Analyze Improvements — Review all findings from other specialists and generate prioritized recommendations"* |
| TRX-02 | JL | "from all upstream inputs" — same issue. | Rewrite: *"[QW] Quick Wins — Find improvements that are easy to implement and have high impact"* |
| TRX-03 | JL | "[AD] Add Decision — Capture a transformation design decision" — "transformation design decision" is ProcessMiner jargon. | Rewrite: *"[AD] Add Decision — Record a specific improvement decision (what to change and why)"* |
| TRX-04 | JL | "[VT] Validate Target State — Self-check against specialist criteria, raise VG# for SME triage" — "VG#", "specialist criteria", "triage" are all internal terms. | Rewrite: *"[VT] Validate Recommendations — Cross-check decisions against compliance, customer experience, and innovation requirements. I'll flag any concerns for your review."* |
| TRX-05 | MC | "[RM] Roadmap" and "[DM] Dependency Map" don't explain what the SME will see or need to provide. | Add context: *"[RM] Roadmap — Organize improvement decisions into phases (quick wins first, then tactical, then strategic)"* and *"[DM] Dependency Map — Show which improvements depend on each other and what the critical path is"* |
| TRX-06 | MO | No guidance on which option to pick first. [AI] is the main workflow but it looks like one of seven equal options. | Add orientation: *"Start with [AI] for a full analysis. Use [QW] if you just want quick wins. The other options help you refine and organize the results."* |

### 3.2 Upstream Missing Warning

**Current (from step-01-load-analyze.md):**
```
⚠️ **Upstream Analysis Gaps Detected:**

| Upstream Agent | Status | Impact if Missing |
|----------------|--------|-------------------|
| CX Journey (FP#, CES) | {complete/missing} | Decisions may miss client friction points |
| Control (CIR#, CP# gaps) | {complete/missing} | Decisions may miss compliance opportunities or violate constraints |
| Innovation (II#, TR#) | {complete/missing} | Decisions may propose manual solutions when automation is feasible |

Transformation decisions based on incomplete upstream input will have **reduced confidence**.

**[P]** Proceed with available data (reduced confidence)
**[R]** Return to Companion to complete upstream analysis first
```

**Issues:**

| # | Cat | Issue | Recommendation |
|---|-----|-------|----------------|
| TRX-07 | JL | "FP#, CES", "CIR#, CP# gaps", "II#, TR#" — these ID references mean nothing to the SME. | Remove the ID references from the table. Use plain language: *"CX Journey | {status} | Recommendations may miss problems that affect your customers"* |
| TRX-08 | BM | "[P] Proceed" / "[R] Return" — single-letter codes with no context about what happens next. | Expand: *"[P] Proceed anyway — I'll work with what's available, but some recommendations will have lower confidence"* and *"[R] Go back — Return to Sage to run the missing analyses first, then come back"* |

### 3.3 Workflow Step Menus

**Current (step-02-generate-recommendations):**
```
**Ready to create document?** [C] Continue [E] Edit recommendations [V] View details
```

**Current (step-01-load-analyze):**
```
**Ready to generate recommendations?** [C] Continue [D] Details on specific item [U] Show upstream-only opportunities
```

**Issues:**

| # | Cat | Issue | Recommendation |
|---|-----|-------|----------------|
| TRX-09 | BM | "[C] Continue" — continue to what? The SME doesn't know what the next step is. | Say what happens next: *"[C] Continue to document generation — I'll compile the recommendations into a structured document"* |
| TRX-10 | JL | "[U] Show upstream-only opportunities" — "upstream-only" is internal architecture language. | Rewrite: *"[U] Show additional opportunities — Items surfaced by other specialists that aren't tied to existing pain points"* |
| TRX-11 | BM | "[D] Details on specific item" — details on what kind of item? How do I specify which one? | Rewrite: *"[D] Drill into details — Ask about any specific pain point or recommendation (e.g., 'Tell me more about PP3')"* |

### 3.4 Self-Validation Pre-Check (step-03)

**Current:**
```
⚠️ **Validation Pre-Check Found {count} Potential Issues:**

| VG# | Severity | Domain | Issue |
|-----|----------|--------|-------|
| VG-{PROC}-001 | {Critical/High/Medium/Low} | {Control/CX/Innovation/Process} | {description} |

**[R]** Resolve now — address issues before completing
**[A]** Accept and continue — issues noted in gap resolution log
**[E]** Edit recommendations — return to step 2
```

**Issues:**

| # | Cat | Issue | Recommendation |
|---|-----|-------|----------------|
| TRX-12 | JL | "VG-{PROC}-001" — the VG# ID system is meaningless to the SME. | Use simpler numbering in the display: *"Issue 1", "Issue 2"* etc. Keep VG# in the file but not in the user-facing table. |
| TRX-13 | MC | "[A] Accept and continue — issues noted in gap resolution log" — what is a "gap resolution log"? Will someone follow up on these? | Rewrite: *"[A] Accept and continue — I'll record these as known gaps. They can be addressed later."* |
| TRX-14 | BM | "[R] Resolve now" — what does resolving involve? How long will it take? | Rewrite: *"[R] Resolve now — We'll go through each issue together and update the recommendations (~5-10 min)"* |

### 3.5 Completion Summary

**Current:**
```
✓ **Transformation Analysis Complete**

**Recommendations Generated:** {count}
├── Quick Wins: {count}
├── Tactical: {count}
└── Strategic: {count}

**Upstream Sources Integrated:**
├── Pain Points (PP#): {count} analyzed
├── Friction Points (FP#): {count} cross-referenced
├── Control Recs (CIR#): {count} cross-referenced
└── Innovation Ideas (II#): {count} cross-referenced

**Validation Pre-Check:** {passed / {count} issues noted}

**Top Recommendations:**
1. TD1: {title} (Quick Win, High Impact)
2. TD2: {title} (Tactical, High Impact)
3. TD3: {title} (Strategic, High Impact)

**Document:** transformation-recommendations.md

**What's next?**
- **[V]** View recommendations
- **[E]** Edit recommendations
- **[VT]** Run full Target State validation (deeper check)
- **[ES]** Generate executive summary
- **[COMP]** Return to Companion
```

**Issues:**

| # | Cat | Issue | Recommendation |
|---|-----|-------|----------------|
| TRX-15 | JL | "Upstream Sources Integrated" with "PP#", "FP#", "CIR#", "II#" references. | Use plain language: *"Sources Analyzed: {count} pain points, {count} customer friction points, {count} compliance items, {count} innovation ideas"* |
| TRX-16 | JL | "TD1:", "TD2:", "TD3:" prefixes on recommendations. | Show as numbered list without TD prefix in user-facing summary. Keep TD# in the document. |
| TRX-17 | MC | "[VT] Run full Target State validation (deeper check)" — what's "Target State"? What makes this deeper than the pre-check? | Rewrite: *"[VT] Deep Validation — Run a thorough cross-check against compliance, CX, and innovation requirements"* |
| TRX-18 | MC | "[ES] Generate executive summary" — is this a separate document? How is it different from [MS]? | Clarify: *"[ES] Executive Summary — Generate a 1-2 page summary of key recommendations for leadership"* |

---

## 4. Control Analyst (Guardian)

### 4.1 Menu

**Current:**
```
[CC] Control Compliance — Full control and compliance analysis
[AC] Add Control — Document a control point
[CG] Control Gaps — Identify steps without controls
[CV] Control Validation — Validate control effectiveness
[MS] Management Summary — Create Compliance Management Summary (Amazon 6-Pager)
[COMP] Switch to Process Journey Companion
```

**Issues:**

| # | Cat | Issue | Recommendation |
|---|-----|-------|----------------|
| CTRL-01 | MC | "[CC] Control Compliance — Full control and compliance analysis" — what does "full analysis" involve? Will it ask me questions? | Rewrite: *"[CC] Full Compliance Analysis — Walk through each process step to identify and assess control checkpoints, audit evidence, and regulatory requirements"* |
| CTRL-02 | JL | "[AC] Add Control — Document a control point" — "control point" is compliance jargon. Some SMEs will know it, others won't. | Rewrite: *"[AC] Add Control — Record a specific check, approval, or verification step in the process"* |
| CTRL-03 | BM | "[CG] Control Gaps — Identify steps without controls" — helpful but could be clearer about what happens. | Rewrite: *"[CG] Find Gaps — Show which process steps don't have compliance checks and suggest what's needed"* |
| CTRL-04 | BM | "[CV] Control Validation — Validate control effectiveness" — what does "effectiveness" mean here? | Rewrite: *"[CV] Validate Controls — Check that each documented control has proper evidence requirements, classification, and coverage"* |
| CTRL-05 | MO | No orientation. An SME new to this agent doesn't know where to start. | Add: *"Start with [CC] for a guided compliance walkthrough. Use [AC] to add controls one at a time. [CG] and [CV] analyze what's already documented."* |

---

## 5. CX Journey Analyst (Journey)

### 5.1 Menu

**Current:**
```
[CX] CX Journey Analysis — Full customer journey mapping
[JT] Journey Touchpoint — Capture a customer touchpoint
[FP] Friction Points — Identify and document friction
[JM] Journey Map — Generate visual journey map (Mermaid)
[MS] Management Summary — Create CX Management Summary (Amazon 6-Pager)
[COMP] Switch to Process Journey Companion
```

**Issues:**

| # | Cat | Issue | Recommendation |
|---|-----|-------|----------------|
| CX-01 | JL | "CX Journey Analysis" — "CX" may not be familiar to all SMEs. | Rewrite: *"[CX] Customer Journey Analysis — Map how customers experience this process, from their first interaction to resolution"* |
| CX-02 | JL | "[JT] Journey Touchpoint — Capture a customer touchpoint" — "touchpoint" is CX jargon. | Rewrite: *"[JT] Add Touchpoint — Record a moment where the customer interacts with your process (email, call, portal, in-person)"* |
| CX-03 | BM | "[FP] Friction Points — Identify and document friction" — "friction" is vague without context. | Rewrite: *"[FP] Friction Points — Identify where customers get stuck, confused, frustrated, or have to wait"* |
| CX-04 | JL | "[JM] Journey Map — Generate visual journey map (Mermaid)" — "Mermaid" is a diagramming library name. SMEs don't care about the rendering engine. | Rewrite: *"[JM] Journey Map — Generate a visual diagram of the customer journey with emotion indicators"* |
| CX-05 | MO | No orientation. | Add: *"Start with [CX] for a guided walkthrough. Use [JT] and [FP] to add specific items. [JM] creates a visual diagram from what's documented."* |

---

## 6. Innovation Analyst (Spark)

### 6.1 Menu

**Current:**
```
[IA] Innovation Analysis — Full automation opportunity analysis
[AO] Automation Opportunities — Identify automation candidates
[TC] Technology Candidates — Recommend technologies
[AI] Add Innovation Idea — Capture an automation or improvement opportunity
[ES] Executive Summary — Generate innovation summary
[MS] Management Summary — Create Innovation Management Summary (Amazon 6-Pager)
[COMP] Switch to Process Journey Companion
```

**Issues:**

| # | Cat | Issue | Recommendation |
|---|-----|-------|----------------|
| INNO-01 | MC | "[IA] Innovation Analysis" vs "[AO] Automation Opportunities" — what's the difference? Both seem to be about automation. | Clarify the distinction: *"[IA] Full Innovation Analysis — Guided walkthrough: identify automation opportunities, assess feasibility, and recommend technologies"* vs *"[AO] Quick Scan — Automatically identify automation candidates based on documented pain points and manual steps"* |
| INNO-02 | MC | "[TC] Technology Candidates — Recommend technologies" — technologies for what? Based on what? | Rewrite: *"[TC] Technology Recommendations — Match identified opportunities to specific technologies (RPA, AI, APIs, workflow tools) with feasibility and ROI estimates"* |
| INNO-03 | BM | "[AI] Add Innovation Idea" — confusing trigger code since "AI" commonly means artificial intelligence. | Consider renaming trigger to [II] or [AII]. Rewrite description: *"[AI] Add Idea — Manually capture a specific automation or technology improvement opportunity"* |
| INNO-04 | MC | "[ES] Executive Summary" vs "[MS] Management Summary" — two summary options with unclear difference. | Clarify: *"[ES] Quick Summary — Generate a concise innovation summary"* vs *"[MS] Management Report — Create a detailed executive report for stakeholder review"* |
| INNO-05 | MO | No orientation. | Add: *"Start with [IA] for a comprehensive analysis. [AO] and [TC] let you focus on specific aspects. [AI] lets you add ideas manually."* |

---

## 7. IT Architect (Blueprint)

### 7.1 Menu

**Current:**
```
[AR] Design Architecture — Create technical architecture design
[SD] System Diagram — Generate system architecture diagram
[IP] Integration Points — Document integration requirements
[TR] Technical Requirements — Derive technical requirements
[MS] Management Summary — Create Architecture Management Summary (Amazon 6-Pager)
[COMP] Switch to Process Journey Companion
```

**Issues:**

| # | Cat | Issue | Recommendation |
|---|-----|-------|----------------|
| ITA-01 | MC | "[AR] Design Architecture" — this is the main workflow but the description is circular ("create architecture design"). | Rewrite: *"[AR] Design Architecture — Create a technical design for the recommended improvements, including system changes and integration approach"* |
| ITA-02 | JL | "[SD] System Diagram — Generate system architecture diagram" — doesn't say what kind of diagram or what level of detail. | Rewrite: *"[SD] System Diagram — Generate a visual diagram showing how systems connect and interact (current or proposed)"* |
| ITA-03 | BM | "[TR] Technical Requirements — Derive technical requirements" — derive from what? | Rewrite: *"[TR] Technical Requirements — Translate improvement recommendations into specific technical requirements with complexity estimates"* |

---

## 8. QA Agent (Scrutiny)

### 8.1 Menu

**Current:**
```
[QV] QA Validation — Full quality validation check
[QC] Quick Check — Fast validation of current state
[SV] Suite Validation — Cross-document consistency, sync, coverage, and confidence propagation checks
[CR] Cross-Reference Check — Validate all cross-references
[CS] Completeness Score — Calculate documentation completeness
[MS] Management Summary — Create QA Management Summary (Amazon 6-Pager)
[COMP] Switch to Process Journey Companion
```

**Issues:**

| # | Cat | Issue | Recommendation |
|---|-----|-------|----------------|
| QA-01 | MC | "[QV] QA Validation" vs "[QC] Quick Check" vs "[SV] Suite Validation" — three validation options with unclear differences. | Distinguish clearly: *"[QC] Quick Check — Fast scan of current documentation (~1 min)"*, *"[QV] Full Validation — Thorough check of one document's quality and completeness (~3-5 min)"*, *"[SV] Suite Validation — Check consistency across ALL documents — references, sync, and coverage (~5-10 min)"* |
| QA-02 | JL | "confidence propagation checks" — internal ProcessMiner concept. | Remove from description. Use: *"Cross-document consistency and completeness checks"* |
| QA-03 | JL | "[CR] Cross-Reference Check — Validate all cross-references" — "cross-references" are internal ID links (PP# -> PS#). | Rewrite: *"[CR] Reference Check — Verify that all items correctly link to related steps, controls, and systems"* |
| QA-04 | BM | "[CS] Completeness Score — Calculate documentation completeness" — just a score? What does the SME do with it? | Rewrite: *"[CS] Completeness Score — See how complete each section is and what still needs work"* |

---

## 9. Cross-Cutting Issues

### 9.1 The "Amazon 6-Pager" Reference

Every agent has `[MS] Management Summary — Create {X} Management Summary (Amazon 6-Pager)`. This reference appears **7 times** across agents.

**Issue:** "Amazon 6-Pager" is a specific corporate culture reference. Many SMEs, especially in banking/financial services, won't know what this means or why it's relevant.

**Recommendation:** Drop the reference entirely. Use: *"[MS] Management Summary — Generate an executive summary report for stakeholder review"*. If the format is important, explain it in the document itself, not in the menu item.

### 9.2 [COMP] Across All Agents

Every agent has:
```
[COMP] Switch to Process Journey Companion
```

**Issue:** "Process Journey Companion" is the full title. The SME may not remember what the Companion does or why they'd want to go there.

**Recommendation:** Rewrite consistently: *"[COMP] Return to Sage — Go back to the main menu to switch agents or assess progress"*

### 9.3 ID Reference Leakage Pattern

Throughout the system, internal ID prefixes appear in user-facing text:

| ID | Meaning | Where it leaks |
|----|---------|----------------|
| PP# | Pain Point | Transformation menus, step outputs, completion summaries |
| PS# | Process Step | Control/CX prerequisites |
| FP# | Friction Point | Transformation warnings, completion summaries |
| CIR# | Control Improvement Rec | Transformation warnings, completion summaries |
| II# | Innovation Idea | Transformation warnings, completion summaries |
| TD# | Transformation Decision | Transformation menus, step outputs |
| VG# | Validation Gap | Self-validation output |
| CP# | Control Point | Control menus |
| JT# | Journey Touchpoint | CX menus |
| SYS# | System | Innovation prerequisites |
| EX# | Exception | PDA capture items |

**Recommendation:** ID prefixes are useful *in documents* for traceability, but should be minimized in conversational/menu text. When they do appear, always pair with the plain-language name on first use: *"pain point (PP3)"* rather than *"PP3"*.

### 9.4 Missing "What Happens Next" Pattern

Across all agents, workflow step menus use bare options like:
```
[C] Continue  [E] Edit  [V] View
```

The SME never knows what "Continue" means — continue to *what*? This pattern repeats in:
- step-01-load-analyze: `[C] Continue [D] Details [U] Upstream-only`
- step-02-generate-recommendations: `[C] Continue [E] Edit [V] View details`
- step-03-create-document: `[R] Resolve [A] Accept [E] Edit`

**Recommendation:** Every [C] Continue should say what the next step is: *"[C] Continue to recommendations — I'll generate prioritized improvement suggestions"*

### 9.5 No "Help" or "What Does This Do?" Option

No agent menu offers a way for the SME to learn more about an option before selecting it. The only way to find out what [CC] does is to select it.

**Recommendation:** Add a universal convention: *"Type ? followed by a code (e.g., ?CC) to learn more about an option before selecting it."* Or add a `[?] Help — Explain what each option does` menu item.

### 9.6 Agent Persona Names Without Introduction

Each agent has a persona name (Sage, Doc, Phoenix, Guardian, Journey, Spark, Blueprint, Scrutiny) but:
- The Companion introduces itself as "I'm Sage" but never explains what Sage is
- Other agents don't introduce themselves at all
- The Companion's handoff menu uses titles ("Control Analyst") not names ("Guardian")

**Recommendation:** Either:
- **(A)** Introduce persona names consistently: *"I'm Guardian, your Control Analyst. I specialize in compliance validation..."*
- **(B)** Drop persona names from user-facing text entirely and use only titles
- **(C)** Use both: *"Guardian (Control Analyst)"* in menus

Option A is recommended — it builds personality and makes the experience warmer, but only if every agent does it consistently.

---

## 10. Priority Summary

### Critical (SME will be confused or stuck)

| # | Issue | Impact |
|---|-------|--------|
| C-06 | Agent handoff menu has no role descriptions | SME doesn't know which specialist to pick |
| PDA-01 | "[PD] Continue document refinement session" is the main work loop with the worst description | SME doesn't know what their primary activity is |
| 9.4 | No "what happens next" on Continue options | SME clicks blind through workflow steps |
| 9.3 | ID references (PP#, FP#, etc.) in conversational text | SME sees gibberish codes |

### High (SME will be slowed down or uncertain)

| # | Issue | Impact |
|---|-------|--------|
| C-02 | No journey overview at first contact | SME doesn't know what they're getting into |
| TRX-07 | Upstream warning table full of ID codes | Warning loses its purpose |
| QA-01 | Three validation options with unclear differences | SME picks randomly |
| INNO-01 | Two similar-sounding automation options | SME picks randomly |
| 9.5 | No help/explanation option | SME can't learn before committing |
| 9.1 | "Amazon 6-Pager" repeated 7 times | Confusing cultural reference |

### Medium (SME will manage but experience is degraded)

| # | Issue | Impact |
|---|-------|--------|
| C-09 | No agent completion status in handoff menu | SME can't see what's done vs pending |
| PDA-03/04 | SIPOC and DILO unexplained | SME skips useful features |
| 9.6 | Inconsistent persona name usage | Mild confusion about who they're talking to |
| CX-04 | "Mermaid" in menu item | Unnecessary technical detail |

---

## 11. Implementation Notes

All recommendations above are **description/text changes only** — no workflow logic, prompt, or schema changes needed. The changes fall into these categories:

1. **Menu descriptions** — update `description` fields in agent YAML `menu` blocks
2. **Activation messages** — update `format` fields in Companion `activation.steps`
3. **Milestone/guidance text** — update templates in Companion sidecar files
4. **Workflow step display text** — update quoted display strings in step MD files

Estimated scope: ~40 text changes across ~15 files. No structural or behavioral changes.

### Not Implemented (Would Require Behavioral Changes)

- **9.5 (Help convention)** — Adding a `?` prefix to learn about menu options before selecting them would require changes to the menu handling logic in workflows, not just text. Noted as a future enhancement.
- **C-09 (Agent status in handoff menu)** — Showing `(complete)` / `(not started)` next to each agent handoff requires runtime progress checking logic, not just text changes. The companion already checks progress on activation; this would extend it to menu display. Noted as a future enhancement.
