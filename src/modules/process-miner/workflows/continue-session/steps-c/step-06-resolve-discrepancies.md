---
name: 'step-06-resolve-discrepancies'
description: 'Resolve, defer, or skip open discrepancies with inline resolution'

# File References
hubStepFile: './step-03-section-overview.md'
qerModesRef: '../data/qer-modes.md'
---

# Step 6: Resolve Discrepancies

## STEP GOAL:

Present all open discrepancies to the user and facilitate resolution. For each discrepancy, offer inline resolution, deferral with reason, or skip. Write resolved changes back to MD + JSON.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER auto-resolve discrepancies — user must approve every resolution
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR — present issues, propose solutions, let user decide
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Step-Specific Rules:

- 🎯 Show scope (intra/inter) clearly for each discrepancy
- 🚫 FORBIDDEN to silently resolve without user confirmation
- 💬 Approach: Present both sides of the issue, propose a fix, let user choose
- 📊 For inter-document issues, load and show content from both documents

## MANDATORY SEQUENCE

### 1. Load Open Discrepancies

**Load from JSON discrepancy array where `status: open`:**

- Sort by scope (intra-document first, then inter-document)
- Within scope, sort by severity/impact if determinable, otherwise by ID order

### 2. Present Discrepancy Table

"**Open Discrepancies: {count} items to review**

| # | ID | Scope | Type | Source | Target | Description |
|---|----|-------|------|--------|--------|-------------|
| 1 | {disc_id} | {intra/inter} | {type} | {source_section} | {target_section} | {description} |
| 2 | ... | ... | ... | ... | ... | ... |

Let's work through these. Starting with #1."

### 3. Per-Discrepancy Resolution (Loop)

**For each open discrepancy:**

**3a. Present the Issue:**

"**{disc_id}: {description}**
**Scope:** {intra-document / inter-document}
**Type:** {cross-reference / missing / inconsistent}

**Source:** {source_section} in {source_document}
{Show relevant content from source}

**Target:** {target_section} in {target_document}
{Show relevant content from target — or show that target is missing}"

**For inter-document discrepancies:**
- Load the target document's relevant shard/section
- Present content from both documents side by side

**3b. Propose Resolution (if possible):**

"**Suggested Fix:** {Proposed resolution based on the discrepancy type}

For example:
- Cross-reference: 'Add missing ID PS-ONB-005 to process steps, or update the reference in pain points'
- Missing: 'This field is required by the schema. Provide the value or mark as [TBD]'
- Inconsistent: 'Executive summary says 5 pain points but detail section has 7. Update summary to 7'"

**3c. Present Options:**

"**[R] Resolve** — Apply the fix (or provide your own resolution)
**[Q] QER** — Deep-dive into the affected section(s) to investigate and refine
**[D] Defer** — Postpone this issue (provide a reason)
**[S] Skip** — Leave open, move to next"

**3d. Handle Selection:**

#### IF [R] Resolve:
- If user accepts proposed fix: apply it in memory
- If user provides custom fix: apply their version in memory
- Confirm the resolution: show the updated content
- Mark discrepancy as `status: resolved`, set `resolved_in_step: 6`
- If inter-document: update both documents in memory

#### IF [Q] QER:
- Load the affected section(s) content
- Present the QER submenu (Quick Questions / Advanced Elicitation / Party Mode / [X] Exit) per {qerModesRef}
- Focus the QER on resolving the specific discrepancy — the discrepancy description provides the context
- After QER completes: persist immediately (MD + JSON), recalculate confidence
- Re-present the FULL revised content of the affected section (never a change summary)
- Re-evaluate whether the discrepancy is now resolved
- IF resolved: mark as `status: resolved`, set `resolved_in_step: 6`, advance to next
- IF still open: return to 3c with updated content for user to choose again

#### IF [D] Defer:
- Ask for reason: "Why are you deferring this? (e.g., need to check with SME, pending decision)"
- Mark discrepancy as `status: deferred`, record reason
- Deferred items will show in Step 3 hub table under "Deferred" column

#### IF [S] Skip:
- Leave as `status: open`
- Move to next discrepancy

**3e. Advance to next discrepancy or finish loop.**

### 4. Write Resolutions Back

**After all discrepancies reviewed:**

- Write all resolved changes to MD (shards or monolithic) and JSON
- Update discrepancy array with new statuses
- Update _progress.yaml

### 5. Display Resolution Summary

"**Discrepancy Resolution Summary**

| Metric | Count |
|--------|-------|
| Reviewed this pass | {count} |
| Resolved | {count} |
| Deferred | {count} |
| Still open | {count} |

{If all resolved: '✅ All discrepancies resolved!'}
{If deferred exist: '⏸️ {count} items deferred — will show in section overview.'}
{If open remain: '⚠️ {count} items still open — will show in section overview.'}"

### 6. Route to Hub

Load, read entire file, then execute {hubStepFile} (Step 3 — Section Overview hub).

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- All open discrepancies presented to user
- Scope clearly shown (intra vs inter)
- Inter-document issues show content from both documents
- Resolution proposed where possible
- User confirmed every resolution
- QER available for deep-dive investigation into affected sections
- Post-QER: full revised content shown, discrepancy re-evaluated
- Deferrals include reasons
- Changes written to MD + JSON
- Resolution summary displayed
- Routed back to hub

### ❌ SYSTEM FAILURE:

- Auto-resolving without user confirmation
- Not showing scope for discrepancies
- Not loading target document for inter-document issues
- Not offering QER option for deep-dive
- Not writing resolutions to both MD and JSON
- Not recording deferral reasons
- Not routing back to hub

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.
