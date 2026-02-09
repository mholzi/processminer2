# Agents Reference

ProcessMiner includes 8 specialized agents that work together to document banking processes comprehensively.

---

## 🧭 Process Journey Companion

**Role:** Progress tracking, contextual guidance, handoff suggestions

**When to Use:**
- At the start of any session to understand current state
- When you're unsure what to work on next
- To check overall progress on a process

**Key Capabilities:**
- Reads `_progress.yaml` for section-level tracking
- Validates progress against actual document content
- Provides insight-first guidance (not just dashboards)
- Suggests which agent to engage next

**Menu Triggers:**
- `[AS]` Assess State
- `[ST]` Status
- `[NS]` Next Step

**Communication Style:** Warm professional — like a supportive colleague

---

## 📋 Process Documentation Analyst (PDA)

**Role:** SME knowledge extraction, AS-IS documentation

**When to Use:**
- Starting a new process documentation project
- Conducting SME interviews
- Capturing process steps, pain points, exceptions
- Building the foundation that all other agents build upon

**Key Capabilities:**
- Efficient SME interview techniques
- Structured data capture (PS#, PP#, EX#, CP#, SYS#)
- Section-by-section documentation
- Import existing documentation

**Menu Triggers:**
- `[NP]` New Process
- `[CS]` Continue Session
- `[CI]` Capture Item
- `[CD]` Compose Document
- `[RD]` Review Draft
- `[IM]` Import Docs

**Communication Style:** Professional, efficient — respects SME time

---

## 🔄 Transformation Agent

**Role:** Process improvement recommendations

**When to Use:**
- After AS-IS documentation is substantially complete
- When you need to identify quick wins
- When planning strategic transformation

**Key Capabilities:**
- Connects pain points to actionable improvements
- Prioritizes by impact vs. effort
- Generates TD# recommendations with rationale

**Prerequisites:** Requires AS-IS documentation with pain points

**Menu Triggers:**
- `[AI]` Analyze Improvements
- `[QW]` Quick Wins
- `[ES]` Executive Summary

---

## 🗺️ Client Journey Analyst

**Role:** Customer touchpoint mapping, friction analysis

**When to Use:**
- To understand customer experience through the process
- To identify moments of truth
- To find friction points from customer perspective

**Key Capabilities:**
- Maps touchpoints with channels and emotions
- Identifies friction points (FP#)
- Generates Mermaid journey diagrams
- Links friction to internal pain points (PP#)

**Prerequisites:** Requires process steps (PS#) documented

**Menu Triggers:**
- `[CX]` CX Journey Analysis
- `[JT]` Journey Touchpoint
- `[FP]` Friction Points
- `[JM]` Journey Map

---

## 🛡️ Control Analyst

**Role:** Compliance validation, control effectiveness

**When to Use:**
- To validate control coverage
- To prepare for audit
- To identify control gaps

**Key Capabilities:**
- Analyzes control coverage by process step
- Classifies controls (Preventive, Detective, Corrective)
- Validates evidence documentation
- Identifies high-risk steps without controls

**Prerequisites:** Requires process steps (PS#) documented

**Menu Triggers:**
- `[CC]` Control Compliance
- `[AC]` Add Control
- `[CG]` Control Gaps
- `[CV]` Control Validation

---

## 💡 Innovation Analyst

**Role:** Automation and technology opportunities

**When to Use:**
- To find automation candidates
- To identify technology modernization opportunities
- To build ROI case for improvements

**Key Capabilities:**
- Identifies manual steps for automation
- Recommends RPA, AI/ML, API integration opportunities
- Assesses feasibility and complexity
- Quantifies potential ROI

**Prerequisites:** Requires AS-IS documentation with systems

**Menu Triggers:**
- `[IA]` Innovation Analysis
- `[AO]` Automation Opportunities
- `[TC]` Technology Candidates
- `[ES]` Executive Summary

---

## 🏛️ IT Architect

**Role:** Technical implementation design

**When to Use:**
- After transformation/innovation recommendations
- To create technical architecture
- To design integration approach

**Key Capabilities:**
- Translates recommendations to architecture
- Documents integration points
- Generates Mermaid C4 diagrams
- Derives technical requirements

**Prerequisites:** Requires transformation or innovation analysis

**Menu Triggers:**
- `[DA]` Design Architecture
- `[SD]` System Diagram
- `[IP]` Integration Points
- `[TR]` Technical Requirements

---

## ✅ QA Agent

**Role:** Quality assurance, validation checks

**When to Use:**
- Before stakeholder delivery
- To check documentation completeness
- To validate cross-references

**Key Capabilities:**
- Validates against per-document `.schema.yaml` + `_defaults.yaml` rules
- Checks cross-references (PP# → PS#, CP# → PS#)
- Calculates completeness scores
- Identifies sparse sections

**Menu Triggers:**
- `[QV]` QA Validation
- `[QC]` Quick Check
- `[CR]` Cross-Reference Check
- `[CS]` Completeness Score

---

## Agent Interaction Model

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

**Key Principle:** Specialist agents never invoke each other directly. All transitions flow through the Companion. User always decides when to engage the next agent.
