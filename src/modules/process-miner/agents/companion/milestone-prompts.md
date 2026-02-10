# Milestone Prompts

Rich celebration and acknowledgment templates for key progress points.

---

## AS-IS Documentation Complete

**Trigger:** `as_is.overall_status == "complete"`

**Template:**
```
AS-IS documentation complete!

{step_count} process steps mapped out. {pain_point_count} pain points identified.
{system_count} systems documented. {exception_count} exceptions captured.

That's a thorough foundation — you've captured the reality of how this process
actually works today. The hard part of knowledge extraction is done.

Ready to bring in the specialists? They can now analyze what you've documented:
- **Control Analyst** can validate compliance points
- **CX Journey** can map the customer experience
- **Transformation** can identify improvement opportunities
```

---

## Section Milestone

**Trigger:** `section.status` changes to `complete`

**Template (Pain Points):**
```
Pain points section complete — {count} documented.

You've captured the friction in this process. These insights will drive
transformation recommendations later.
```

**Template (Control Points):**
```
Control points documented — {count} compliance checkpoints mapped.

This gives Control Analyst a clear picture for compliance validation.
```

---

## Specialist Analysis Complete

**Trigger:** `agent.status == "complete"`

**Template (Control Analyst):**
```
Control analysis complete. {finding_count} findings documented.

{compliant_count} controls validated. {gap_count} gaps identified.
The compliance picture is clear now.
```

**Template (CX Journey):**
```
Customer journey mapped. {touchpoint_count} touchpoints, {friction_count} friction points.

You now see this process through the customer's eyes.
```

**Template (Transformation):**
```
Transformation opportunities identified. {opportunity_count} improvements suggested.

{quick_win_count} quick wins, {strategic_count} strategic changes recommended.
```

---

## Specialist Analysis Complete — QA Suggestion

**Trigger:** Any specialist agent reaches `status == "complete"`

**Appended to specialist completion message:**
```
Would you like to run a quick quality check before moving on?

**[QV] Run Quality Check** — Check {agent_name}'s documentation for completeness and consistency
**[N] Continue** — Move to the next step
```

**Note:** This is advisory only — the user decides whether to validate. Append this block after the specialist-specific completion template above.

---

## All Specialists Complete

**Trigger:** All specialist agents have `status == "complete"`

**Template:**
```
All specialist analyses are in.

This process has been examined from every angle:
- Process documented step by step
- Compliance and controls validated
- Customer journey mapped
- Improvement opportunities identified
- Technology and automation options explored

You've built a comprehensive view. Before sharing with stakeholders, a full quality
check ensures everything ties together consistently.

**[SV] Run Full Quality Check** — Check consistency across all documents before delivery (recommended)
**[D] Proceed to Delivery** — Skip validation and proceed to stakeholder output
```

---

## Process Fully Complete

**Trigger:** `process.status == "complete"`

**Template:**
```
{process_name} is fully documented.

All agents have contributed. Every section is complete. The documentation
tells a complete story — from how it works today to how it could work tomorrow.

You've built something comprehensive. This is ready for stakeholders.

Well done.
```

---

## User Milestone: Five Processes

**Trigger:** `user.completed_processes == 5`

**Template:**
```
Five processes documented.

You've developed a real feel for this — knowing what questions to ask,
where the complexity hides, how to surface the details that matter.

You're becoming a ProcessMiner pro.
```

---

## Personalized Encouragement (Easter Egg)

**Trigger:** User asks "how am I doing?" instead of "status"

**Template:**
```
You're doing well, {user_name}.

{process_name} is {progress_percent}% complete. You've been thorough —
the sections you've finished are solid, not just checked off.

{contextual_insight}

Keep going. You've got momentum.
```
