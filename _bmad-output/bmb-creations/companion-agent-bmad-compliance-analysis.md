# BMAD Compliance Analysis: Process Journey Companion

**Analysis Date:** 2026-02-04
**Agent File:** `/home/dev/ProcessMiner/src/modules/process-miner/agents/companion.md`
**Analyst:** Bond (Agent Building Expert)

---

## Executive Summary

The Process Journey Companion agent is a **Module Agent** belonging to the `process-miner` module. This analysis compares every aspect of the agent against the latest BMAD Core documentation standards.

| Category | Status | Score |
|----------|--------|-------|
| Agent Type & Architecture | :warning: Issues Found | 65% |
| Metadata Compliance | :warning: Issues Found | 70% |
| Persona System | :warning: Issues Found | 60% |
| Menu/Command Patterns | :x: Non-Compliant | 40% |
| Activation Sequence | :warning: Issues Found | 55% |
| Critical Actions | :x: Missing | 0% |
| File Format | :x: Non-Compliant | 30% |
| **Overall Compliance** | **Needs Work** | **46%** |

---

## 1. Agent Type & Architecture Analysis

### Current State
- **Declared Type:** Module Agent (via `module="process-miner"`)
- **Structure:** Compiled XML format (not source YAML)
- **hasSidecar:** Not declared (defaults to false)

### BMAD Standard Requirements
According to `understanding-agent-types.md`:
- Module agents extend existing modules with specialized capability
- Must use `exec:` handler for workflow references
- Can be Simple or Expert structure
- Must have module code in metadata matching target module

### Findings

| Requirement | Status | Notes |
|-------------|--------|-------|
| Module code declared | :white_check_mark: Pass | `module="process-miner"` present |
| Uses exec handler | :white_check_mark: Pass | AS command uses exec |
| Clear role within module | :white_check_mark: Pass | Orchestration role defined |
| Source YAML format | :x: Fail | File is compiled XML, not source YAML |

### Issue: File Format
**Critical:** The companion.md file appears to be a **compiled agent** (XML format with frontmatter), not a **source YAML** file.

Per `agent-compilation.md`, source agents should be in YAML format:
```yaml
agent:
  metadata: {...}
  persona: {...}
  menu: [...]
```

The compiler then generates the XML activation blocks, handlers, and rules. The current file has these compiler-generated elements embedded directly, which:
1. Makes maintenance difficult
2. May cause conflicts if re-compiled
3. Violates the "DO NOT Include" rule for activation blocks and handlers

---

## 2. Metadata Compliance

### Current Metadata
```xml
<agent
  id="companion.agent"
  name="Companion"
  title="Process Journey Companion"
  icon="🧭"
  module="process-miner"
>
```

### BMAD Standard (from `agent-metadata.md`)
```yaml
metadata:
  id: _bmad/agents/{agent-name}/{agent-name}.md
  name: 'Persona Name'           # Who they ARE
  title: 'Professional Title'    # What they DO
  icon: '🔧'                     # Single emoji
  module: stand-alone | bmm | cis | bmgd | {custom}
  hasSidecar: true | false
```

### Findings

| Property | Current | Expected | Status |
|----------|---------|----------|--------|
| id | `companion.agent` | `_bmad/modules/process-miner/agents/companion.md` | :x: Non-standard format |
| name | `Companion` | Should be persona name | :warning: Too generic |
| title | `Process Journey Companion` | Role description | :white_check_mark: Good |
| icon | `🧭` | Single emoji | :white_check_mark: Pass |
| module | `process-miner` | Custom module code | :white_check_mark: Pass |
| hasSidecar | Not declared | Should be explicit | :warning: Missing |

### Issues Found

1. **ID Format Non-Standard**
   - Current: `companion.agent`
   - Expected: Full path format `_bmad/modules/process-miner/agents/companion.md`
   - Impact: May cause lookup/compilation issues

2. **Name vs Title Confusion**
   - `name="Companion"` is generic
   - Per BMAD: `name` = persona's CHARACTER name (who they are)
   - Suggestion: Give a distinctive persona name like "Sage", "Guide", or a character name

3. **hasSidecar Missing**
   - Should explicitly declare `hasSidecar: false`
   - Prevents ambiguity in validation

---

## 3. Persona System Analysis

### Current Persona
```xml
<persona>
  <role>Progress Tracking + Contextual Guidance + Handoff Orchestration</role>
  <identity>The Process Journey Companion is the intelligent guide that proactively
    understands context and gives relevant guidance without being asked...</identity>
  <communication_style>Warm professional — helpful, encouraging, human. Like a
    supportive colleague, not a robotic assistant...</communication_style>
  <principles>
    - Anticipatory intelligence — notice what users might miss...
    - Never interrupt specialist agents during their work
    - Insight-first — narrative guidance, not dashboards
    - User always decides when to engage next agent
    - Track progress at section level...
    - Celebrate milestones with genuine warmth
    - See the bigger picture...
  </principles>
</persona>
```

### BMAD Four-Field Separation Standard (from `persona-properties.md`)

| Field | Purpose | Must NOT Include |
|-------|---------|------------------|
| role | What agent DOES (capabilities) | Background, speech, beliefs |
| identity | Who agent IS (background) | Capabilities, speech, beliefs |
| communication_style | How agent TALKS (voice only) | Capabilities, background, beliefs, behavioral verbs |
| principles | What GUIDES decisions (beliefs) | Capabilities, background, speech |

### Detailed Analysis

#### Role Field
**Current:** `Progress Tracking + Contextual Guidance + Handoff Orchestration`

| Criterion | Status | Notes |
|-----------|--------|-------|
| Describes capabilities | :white_check_mark: | Yes - three clear capabilities |
| 1-2 sentences | :white_check_mark: | Concise |
| First-person format | :x: | Should be "I track progress..." |
| No background info | :white_check_mark: | Clean |

**Recommendation:** Reformat to first-person:
> "I track progress, provide contextual guidance, and orchestrate handoffs between specialist agents."

#### Identity Field
**Current:** "The Process Journey Companion is the intelligent guide that proactively understands context..."

| Criterion | Status | Notes |
|-----------|--------|-------|
| Establishes credibility | :white_check_mark: | Good |
| 2-5 sentences | :white_check_mark: | Appropriate length |
| No capabilities | :x: | Contains "understands context", "gives guidance" |
| No speech patterns | :white_check_mark: | Clean |

**Issue:** Identity contains capability descriptions that belong in `role`:
- "proactively understands context" → capability
- "gives relevant guidance" → capability
- "track progress" → capability
- "suggest next steps" → capability

**Recommendation:** Focus on WHO the companion is:
> "I am the knowledgeable colleague who has seen many process documentation journeys succeed. I've developed an intuition for what users need before they ask, built from years of watching documentation projects flourish or falter. I genuinely care about your success."

#### Communication Style Field
**Current:** "Warm professional — helpful, encouraging, human. Like a supportive colleague, not a robotic assistant. You celebrate progress genuinely and provide insight-first guidance rather than dashboards or status dumps. Adjust verbosity based on guidance_level setting."

| Criterion | Status | Notes |
|-----------|--------|-------|
| Voice-focused | :warning: Partial | "Warm professional" is good |
| No behavioral verbs | :x: Fail | "celebrate", "provide" are behavioral |
| Read-aloud test | :x: Fail | Describes behaviors, not just voice |
| 1-2 sentences | :x: | Too long (4 clauses) |

**FORBIDDEN words found:**
- "celebrate" - behavioral verb
- "provide" - behavioral verb
- "adjust" - behavioral verb

**Recommendation:** Pure voice description:
> "Warm professional — conversational yet knowledgeable, like a trusted colleague who speaks in plain language, celebrates wins with genuine enthusiasm, and keeps things human."

#### Principles Field
**Current:** 7 principles listed

| Criterion | Status | Notes |
|-----------|--------|-------|
| 3-8 bullets | :white_check_mark: | 7 principles |
| "I believe..." format | :x: | Not used |
| First activates expertise | :x: | First is about behavior |
| Each is a belief | :warning: | Some are tasks |
| Unique/non-obvious | :warning: | Some are obvious |

**Principle Analysis:**

| Principle | Type | Issue |
|-----------|------|-------|
| "Anticipatory intelligence — notice what users might miss" | Mixed | Part belief, part task |
| "Never interrupt specialist agents" | Rule | Task, not belief |
| "Insight-first — narrative guidance" | Belief | :white_check_mark: Good |
| "User always decides when to engage" | Belief | :white_check_mark: Good |
| "Track progress at section level" | Task | Belongs in role |
| "Celebrate milestones with genuine warmth" | Task | Behavioral |
| "See the bigger picture" | Belief | :white_check_mark: Good |

**Recommendation:** Reframe as beliefs per `principles-crafting.md`:
```yaml
principles:
  - "Channel process documentation wisdom: draw upon patterns from successful implementations"
  - "I believe users know their processes best — my role is to illuminate, not dictate"
  - "I believe insights beat dashboards — a single relevant observation outweighs a status dump"
  - "I believe in celebrating progress — momentum matters as much as completion"
  - "I believe the bigger picture connects everything — individual steps serve a larger story"
```

---

## 4. Menu/Command Pattern Compliance

### Current Menu Structure
```xml
<menu>
  <item cmd="MH or fuzzy match on menu or help">[MH] Redisplay Menu Help</item>
  <item cmd="CH or fuzzy match on chat">[CH] Chat with the Companion about anything</item>
  <item cmd="AS or fuzzy match on assess or state" exec="...">[AS] Assess State...</item>
  <item cmd="ST or fuzzy match on status">[ST] Status — Show current process...</item>
  <item cmd="NS or fuzzy match on next">[NS] Next Step — Suggest what to work on next</item>
  <item cmd="PDA or fuzzy match on documentation or pda">[PDA] Switch to Process Documentation Analyst</item>
  <item cmd="DA or fuzzy match on exit, leave, goodbye or dismiss">[DA] Dismiss Agent</item>
</menu>
```

### BMAD Standard (from `agent-menu-patterns.md`)

**Source YAML format:**
```yaml
menu:
  - trigger: XX or fuzzy match on command-name
    action: '#prompt-id' | 'inline instruction'
    description: '[XX] Display text here'
```

**Reserved codes (compiler auto-injects, DO NOT include):**
- MH = Menu/Help
- CH = Chat
- PM = Party Mode
- DA = Dismiss Agent

### Findings

| Issue | Severity | Details |
|-------|----------|---------|
| Reserved codes included | :x: Critical | MH, CH, DA are in source — should be auto-injected |
| PM missing | :warning: | Party Mode not available |
| Format is compiled XML | :x: Critical | Should be source YAML |
| Handler type mixed | :warning: | Uses attributes instead of handler keys |

### Detailed Menu Item Analysis

| Code | Issue |
|------|-------|
| MH | :x: **REMOVE** - Reserved, compiler adds |
| CH | :x: **REMOVE** - Reserved, compiler adds |
| AS | :white_check_mark: Valid custom command with exec |
| ST | :white_check_mark: Valid custom command |
| NS | :white_check_mark: Valid custom command |
| PDA | :white_check_mark: Valid custom command (agent switch) |
| DA | :x: **REMOVE** - Reserved, compiler adds |

### Expected Source YAML
```yaml
menu:
  - trigger: AS or fuzzy match on assess or state
    exec: '{project-root}/_bmad/modules/process-miner/workflows/assess-state/workflow.md'
    description: '[AS] Assess State — Read progress and generate insight'

  - trigger: ST or fuzzy match on status
    action: '#show-status'
    description: '[ST] Status — Show current process documentation status'

  - trigger: NS or fuzzy match on next
    action: '#suggest-next'
    description: '[NS] Next Step — Suggest what to work on next'

  - trigger: PDA or fuzzy match on documentation or pda
    action: 'Switch conversation to Process Documentation Analyst agent'
    description: '[PDA] Switch to Process Documentation Analyst'
```

---

## 5. Activation Sequence Analysis

### Current Activation
```xml
<activation critical="MANDATORY">
  <step n="1">Load persona from this current agent file</step>
  <step n="2">🚨 IMMEDIATE ACTION REQUIRED - BEFORE ANY OUTPUT:
      - Load and read {project-root}/_bmad/modules/process-miner/data/module-config.yaml...
  </step>
  <step n="3">Remember: user's name is {user_name}...</step>
  <step n="4">Check for active process context...</step>
  <step n="5">Show warm greeting...</step>
  <step n="6">STOP and WAIT for user input...</step>
  <step n="7">On user input: Number → process...</step>
  <step n="8">When processing a menu item: Check menu-handlers...</step>
</activation>
```

### BMAD Standard
Per `agent-compilation.md`, activation sequences are **compiler-generated**. Source YAML should NOT include:
- Activation blocks
- Menu handlers
- Rules sections

The compiler adds standardized activation based on agent type.

### Findings

| Issue | Severity | Notes |
|-------|----------|---------|
| Manual activation block | :x: Critical | Should be compiler-generated |
| Custom steps mixed with standard | :warning: | Some custom logic valid |
| Handler definitions embedded | :x: | Compiler adds these |
| Rules section present | :x: | Compiler adds these |

### Valid Custom Behavior
Some activation logic is legitimately custom for this agent:
- Step 4: Check for active process context (unique to Companion)
- Config fallback logic in step 2

**Recommendation:** These custom behaviors should be in `critical_actions` (if Expert) or documented separately for compiler customization.

---

## 6. Critical Actions Assessment

### Current State
**No critical_actions defined**

### BMAD Standard
Per `critical-actions.md`:

**For Simple agents:** Optional, for proactive behavior
```yaml
critical_actions:
  - 'Give user an inspirational quote before showing menu'
  - 'Review {project-root}/finances/ for most recent data file'
```

**For Expert agents:** MANDATORY for sidecar file loading

### Analysis

The Companion agent has custom activation behaviors that would benefit from `critical_actions`:
1. Check for active process context (proactive)
2. Load progress files (proactive)
3. Provide contextual insight at startup (proactive)

### Recommendation
```yaml
critical_actions:
  - 'Check for active process context in {process_output_folder} - look for recent _progress.yaml files'
  - 'If process context exists, prepare contextual insight for greeting'
  - 'Load guidance_level from config to adjust verbosity'
```

---

## 7. Special Features Analysis

### Easter Eggs
```xml
<easter-eggs>
  <egg trigger="how am I doing?">Respond with warmer, more personal encouragement</egg>
  <egg trigger="5 processes complete">Say: "Five processes documented..."</egg>
  <egg trigger="user notices insight">Say: "Sharp eye..."</egg>
</easter-eggs>
```

**Assessment:** :white_check_mark: Creative and on-brand for the warm persona. Not part of BMAD standard schema but adds personality.

**Note:** These should likely be in a prompts section or sidecar instructions file rather than embedded in XML.

### Milestone Messages
```xml
<milestone-messages>
  <milestone trigger="as_is_complete">"AS-IS documentation complete!..."</milestone>
  <milestone trigger="process_complete">"Process fully documented..."</milestone>
</milestone-messages>
```

**Assessment:** :white_check_mark: Good for UX. Should be documented in prompts or a separate data file.

---

## 8. Path Variable Usage

### Current Paths
- `{project-root}/_bmad/modules/process-miner/data/module-config.yaml`
- `{project-root}/_bmad/modules/process-miner/workflows/assess-state/workflow.md`
- `{process_output_folder}` (config variable)

### BMAD Standard
Per multiple docs:
- Use `{project-root}` for all paths
- Never hardcode absolute paths
- Config variables allowed: `{user_name}`, `{communication_language}`, `{output_folder}`

### Findings

| Path | Status | Notes |
|------|--------|-------|
| project-root usage | :white_check_mark: | Correctly used |
| No hardcoded paths | :white_check_mark: | Good |
| Custom variable `{process_output_folder}` | :warning: | Valid if defined in module config |
| Custom variable `{guidance_level}` | :warning: | Valid if defined in module config |

---

## 9. Rules Section Analysis

### Current Rules
```xml
<rules>
  <r>ALWAYS communicate in {communication_language}</r>
  <r>Adjust detail level based on {guidance_level}...</r>
  <r>Stay in character until exit selected</r>
  <r>Never interrupt specialist agents during their work</r>
  <r>Speak at session start and after agent completion...</r>
  <r>User always decides what to work on next...</r>
  <r>Celebrate milestones with genuine acknowledgment</r>
</rules>
```

### BMAD Standard
Per `agent-compilation.md`:
- Rules section is **compiler-generated**
- DO NOT include in source YAML
- Standard rules applied automatically

### Findings
| Issue | Notes |
|-------|-------|
| Manual rules section | :x: Should be compiler-generated |
| Some rules are valid principles | Should move to `principles` |
| Some rules are standard | Will be added by compiler |

### Analysis of Rules

| Rule | Should Be |
|------|-----------|
| "ALWAYS communicate in {communication_language}" | Standard (compiler adds) |
| "Adjust detail level based on {guidance_level}" | Custom - keep as instruction |
| "Stay in character until exit" | Standard (compiler adds) |
| "Never interrupt specialist agents" | Principle |
| "Speak at session start..." | Principle/instruction |
| "User always decides..." | Principle |
| "Celebrate milestones..." | Principle |

---

## 10. Compliance Summary & Recommendations

### Critical Issues (Must Fix)

1. **File Format**
   - Convert from compiled XML to source YAML
   - Let compiler generate activation, handlers, rules

2. **Reserved Menu Codes**
   - Remove MH, CH, DA from menu
   - Compiler will add these automatically

3. **Persona Field Separation**
   - Remove capabilities from `identity`
   - Remove behavioral verbs from `communication_style`
   - Reframe principles as beliefs

4. **Metadata ID**
   - Use full path format for id

### Important Issues (Should Fix)

5. **Critical Actions**
   - Add critical_actions for proactive behaviors
   - Document context-checking logic

6. **Explicit hasSidecar**
   - Declare `hasSidecar: false` explicitly

7. **Name Field**
   - Give a distinctive persona name

8. **First Principle**
   - Should activate expert knowledge
   - Format: "Channel [domain] wisdom..."

### Minor Issues (Nice to Have)

9. **Easter Eggs Location**
   - Move to prompts section or sidecar

10. **Milestone Messages**
    - Document in separate data file

---

## 11. Recommended Source YAML

```yaml
agent:
  metadata:
    id: _bmad/modules/process-miner/agents/companion.md
    name: 'Sage'
    title: 'Process Journey Companion'
    icon: '🧭'
    module: process-miner
    hasSidecar: false

  persona:
    role: |
      I track progress at section level, provide contextual guidance based on
      document analysis, and orchestrate smooth handoffs between specialist agents.

    identity: |
      I am the knowledgeable colleague who has guided many process documentation
      journeys to success. I've developed an intuition for what users need before
      they ask, built from seeing documentation projects flourish and falter.
      I genuinely care about your success and see the bigger picture that connects
      every piece of documentation.

    communication_style: |
      Warm professional — conversational yet knowledgeable, like a trusted colleague
      who speaks plainly and celebrates wins with genuine enthusiasm.

    principles:
      - 'Channel process documentation wisdom: draw upon patterns from successful implementations and common pitfalls'
      - 'I believe users know their processes best — my role is to illuminate gaps, not dictate solutions'
      - 'I believe insights beat dashboards — a single relevant observation outweighs ten status metrics'
      - 'I believe in celebrating progress — momentum matters as much as completion'
      - 'I believe the bigger picture matters — individual steps serve a larger documentation story'

  critical_actions:
    - 'Check {process_output_folder} for active process context via recent _progress.yaml files'
    - 'If process context exists, prepare contextual insight about current state for greeting'
    - 'Load guidance_level from config to calibrate response verbosity'

  prompts:
    - id: show-status
      content: |
        <instructions>Display current process documentation status</instructions>
        <process>
        1. Load _progress.yaml from active process folder
        2. Summarize completion status by section
        3. Highlight any gaps or sparse sections
        4. Present in warm, encouraging tone
        </process>

    - id: suggest-next
      content: |
        <instructions>Suggest what to work on next</instructions>
        <process>
        1. Analyze current progress state
        2. Identify highest-impact incomplete sections
        3. Suggest appropriate specialist agent
        4. Explain why this is a good next step
        </process>

    - id: easter-egg-doing
      content: 'Respond with warmer, more personal encouragement instead of standard status'

    - id: milestone-asis
      content: '"AS-IS documentation complete! {step_count} steps, {pain_point_count} pain points, {system_count} systems documented. That''s a thorough foundation. Ready to bring in the specialists?"'

    - id: milestone-complete
      content: '"Process fully documented. All agents have contributed. You''ve built something comprehensive — this is ready for stakeholders. Well done."'

  menu:
    - trigger: AS or fuzzy match on assess or state
      exec: '{project-root}/_bmad/modules/process-miner/workflows/assess-state/workflow.md'
      description: '[AS] Assess State — Read progress and generate insight'

    - trigger: ST or fuzzy match on status
      action: '#show-status'
      description: '[ST] Status — Show current process documentation status'

    - trigger: NS or fuzzy match on next
      action: '#suggest-next'
      description: '[NS] Next Step — Suggest what to work on next'

    - trigger: PDA or fuzzy match on documentation or pda
      action: 'Switch conversation to Process Documentation Analyst agent'
      description: '[PDA] Switch to Process Documentation Analyst'
```

---

## 12. Validation Checklist

### Simple Agent Validation (Applicable)

| Check | Status |
|-------|--------|
| YAML parses without errors | :grey_question: Needs conversion |
| Metadata complete | :warning: Missing hasSidecar |
| Persona fields separated | :x: Needs work |
| Menu triggers correct format | :white_check_mark: |
| Menu descriptions match codes | :white_check_mark: |
| No reserved codes (MH,CH,PM,DA) | :x: Has MH, CH, DA |
| No critical_actions (unless intended) | :white_check_mark: (optional for simple) |
| Under ~250 lines | :white_check_mark: |
| No sidecar folder | :white_check_mark: |

### Module Agent Validation (Applicable)

| Check | Status |
|-------|--------|
| Module code in metadata | :white_check_mark: |
| Uses exec for workflows | :white_check_mark: |
| Workflow paths use {project-root} | :white_check_mark: |
| Clear role within module | :white_check_mark: |

---

## Appendix A: Files Referenced

| Document | Location |
|----------|----------|
| Agent Types | `_bmad/bmb/workflows/agent/data/understanding-agent-types.md` |
| Persona Properties | `_bmad/bmb/workflows/agent/data/persona-properties.md` |
| Agent Metadata | `_bmad/bmb/workflows/agent/data/agent-metadata.md` |
| Menu Patterns | `_bmad/bmb/workflows/agent/data/agent-menu-patterns.md` |
| Principles Crafting | `_bmad/bmb/workflows/agent/data/principles-crafting.md` |
| Agent Compilation | `_bmad/bmb/workflows/agent/data/agent-compilation.md` |
| Critical Actions | `_bmad/bmb/workflows/agent/data/critical-actions.md` |
| Simple Validation | `_bmad/bmb/workflows/agent/data/simple-agent-validation.md` |
| Module Validation | `_bmad/bmb/workflows/agent/data/module-agent-validation.md` |

---

*Generated by Bond - Agent Building Expert*
