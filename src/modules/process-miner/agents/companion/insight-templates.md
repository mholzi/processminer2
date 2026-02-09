# Insight Templates

Templates for generating contextual insights based on process state.

---

## Session Start Insights

### First Visit to Process

```
You're starting fresh with {process_name}.

The first step is capturing how this process works today — the AS-IS state.
PDA (Process Documentation Analyst) specializes in knowledge extraction.
Want me to bring them in?
```

### Returning to Active Process

```
{process_name} is {progress_percent}% complete.

{primary_insight}

{suggestion}
```

**Primary insight patterns:**
- "You've documented {step_count} process steps. The foundation is solid."
- "Pain points are looking sparse — only {count} so far."
- "{agent_name} finished their analysis since your last visit."
- "It's been {days} days. Ready to pick up where you left off?"

---

## Progress Analysis Insights

### Good Momentum

```
You've made real progress this session — {completed_items} items documented.

{specific_achievement}

{next_suggestion}
```

### Stalled Progress

```
{section_name} has been in progress for {days} days without updates.

Sometimes processes get stuck when we hit complexity or need SME input.
Would it help to review what's blocking progress?
```

### Near Completion

```
{process_name} is {progress_percent}% complete — almost there.

Just {remaining_sections} to finish:
{remaining_list}

{next_agent_suggestion}
```

---

## Gap Analysis Insights

### Single Sparse Section

```
{section_name} looks light with only {count} items.

Processes like this typically have {expected_range}. This could mean:
- The process is unusually simple here
- There are items we haven't captured yet
- SME knowledge hasn't been fully extracted

Worth a second look with {suggested_agent}?
```

### Multiple Sparse Sections

```
A few sections are running light:
- {section_1}: {count_1} (expected {range_1})
- {section_2}: {count_2} (expected {range_2})

This might indicate areas where SME knowledge hasn't been fully captured.
PDA can help with targeted questions.
```

### Blocked Agent

```
{agent_name} is ready to contribute but waiting on {dependency}.

Once {dependency_section} is complete, {agent_name} can {agent_contribution}.
```

---

## Handoff Insights

### After PDA Completes AS-IS

```
AS-IS documentation is solid. You've captured:
- {step_count} process steps
- {pain_point_count} pain points
- {system_count} systems
- {exception_count} exceptions

The specialists can now analyze this foundation:

{recommendations_based_on_gaps}
```

### Specialist Recommendation Logic

**If pain_points.count >= 3:**
```
With {count} pain points documented, Transformation Agent can identify
improvement opportunities.
```

**If control_points.count < expected:**
```
Control points are sparse. Control Analyst can identify compliance
checkpoints you might have missed.
```

**If customer_touchpoints not started:**
```
No customer touchpoints documented yet. CX Journey can map the customer
experience through this process.
```

---

## Comparative Insights

### Cross-Process Patterns

```
Interesting — {process_name} has more pain points than typical.

{count} pain points is {comparison} the average for {process_type} processes.
This suggests {interpretation}.
```

### Complexity Indicators

```
{process_name} is more complex than it first appeared.

{evidence}

This isn't a problem — some processes are genuinely complex. It just means
documentation will take more care.
```

---

## Celebration Insights

### Section Complete

```
{section_name} is complete. {celebration_detail}

{contextual_next_step}
```

### Milestone Reached

```
{milestone_message}

{reflection_on_achievement}

{forward_looking_suggestion}
```

---

## Easter Egg Insights

### "How am I doing?" Response

```
You're doing well.

{personalized_observation}

{encouraging_detail}

Keep going — you've got this.
```

### Sharp Observation Acknowledged

```
Sharp eye. Most people miss that connection.

{elaboration_on_what_they_noticed}
```
