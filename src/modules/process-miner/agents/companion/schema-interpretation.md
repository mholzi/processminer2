# Schema Interpretation Guide

How to read and interpret per-document `.schema.yaml` files for generating insights.

---

## Understanding the Schema

Each document type has its own `.schema.yaml` (e.g., `as-is-process-documentation.schema.yaml`)
plus a shared `_defaults.yaml` for confidence thresholds, ID prefixes, and incomplete markers.
Use the per-document schema to understand what sections exist, what's expected in each, and how to
identify gaps.

---

## Key Schema Elements

### Section Definition

```yaml
sections:
  - id: pain_points
    heading: "## 4. Pain Points"
    content_type: item_list
    validation:
      expected_range: [3, 10]
```

**How to interpret:**
- `id`: Use this to match against _progress.yaml
- `content_type`: `prose` (paragraphs) vs `item_list` (numbered items)
- `validation.expected_range`: Minimum and maximum expected items
- `validation.min_words` / `max_words`: For prose sections

---

## Generating Insights from Schema + Progress

### Sparse Section Detection

**Logic:**
```
IF section.count < validation.expected_range[0]
THEN section is sparse
```

**Insight pattern:**
> "{section_name} has {count} items. Most processes have {expected_range[0]}-{expected_range[1]}.
> This might be worth revisiting with the SME."

### Over-documented Section

**Logic:**
```
IF section.count > validation.expected_range[1] * 1.5
THEN section may be over-documented
```

**Insight pattern:**
> "{section_name} has {count} items — that's thorough! Consider whether some
> could be consolidated or if this process is unusually complex."

### Missing Required Sections

**Logic:**
```
IF section.required == true AND section.status == "not_started"
THEN required section is missing
```

**Insight pattern:**
> "{section_name} hasn't been started yet. This is a required section for
> complete documentation."

---

## Progress Status Mapping

| Status | Meaning | Insight Approach |
|--------|---------|------------------|
| `not_started` | Empty | Encourage starting |
| `in_progress` | Partially complete | Note what's done, what remains |
| `complete` | Meets validation | Celebrate, suggest next |
| `blocked` | Dependency missing | Explain what's blocking |

---

## Section Dependencies

Some sections depend on others:

| Section | Depends On | Insight When Blocked |
|---------|------------|---------------------|
| Control Points | Process Steps | "Control points need process steps first" |
| TO-BE Process | Pain Points | "TO-BE design builds on identified pain points" |
| Technical Design | TO-BE Process | "Technical design follows process redesign" |

---

## Agent-Section Mapping

Which agent is best suited for each section:

| Section | Primary Agent | Insight When Sparse |
|---------|---------------|-------------------|
| Process Steps | PDA | "PDA can help capture the detailed steps" |
| Pain Points | PDA | "PDA can surface pain points with SME" |
| Control Points | Control Analyst | "Control Analyst can identify compliance checkpoints" |
| Customer Touchpoints | CX Journey | "CX Journey can map the customer experience" |
| Improvement Opportunities | Transformation | "Transformation can identify optimizations" |
| Technology Opportunities | Innovation | "Innovation can spot automation potential" |

---

## Quality Indicators

### Strong Documentation Signs
- All required sections at least `in_progress`
- Item counts within expected ranges
- No sections blocked for >3 days
- Recent activity (updated within 7 days)

### Warning Signs
- Multiple sparse sections
- Required sections not started
- Long gaps between updates
- Agent blocked on dependencies

---

## Using This for Insights

1. **Load schema** to understand expected structure
2. **Load _progress.yaml** to see current state
3. **Compare** counts against expected ranges
4. **Identify** blocked agents and why
5. **Suggest** appropriate next agent based on gaps
6. **Celebrate** completed milestones
