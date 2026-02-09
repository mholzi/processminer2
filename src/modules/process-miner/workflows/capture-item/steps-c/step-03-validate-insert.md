---
name: 'step-03-validate-insert'
description: 'Insert item into document and update progress'
---

# Step 3: Validate and Insert

## STEP GOAL:

Insert the formatted item into the appropriate document section and update progress tracking.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER skip progress update
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR completing the capture

### Step-Specific Rules:

- 🎯 Focus on clean insertion and tracking update
- 🚫 FORBIDDEN to change field values (go back if needed)
- 🚫 FORBIDDEN to use hardcoded section mappings
- 💬 Approach: Insert, update, confirm, offer batch

## MANDATORY SEQUENCE

### 1. Resolve Target Location from Schema

**Using context from step-01 and step-02:**

The following should already be available from previous steps:
- `item_type` — the code (e.g., PP, JT, II)
- `schema_file` — which schema defines this type
- `section_id` — which section in the schema
- `section_heading` — the actual heading from the schema
- `item_prefix` — the ID prefix from the schema
- `item_template` — how to format the item (from schema)
- `item_fields` — field definitions (from schema)

**Derive target document:**
- Get `template_file` from the schema (e.g., "as-is-process-documentation.md")
- The document path is: `{process_output_folder}/{process_id}/{template_file}`

**Example resolutions (from schema, NOT hardcoded):**
- PP → as-is-process-documentation.md → "9. Pain Points and Improvement Opportunities"
- JT → cx-journey-documentation.md → "2. Client Touchpoints"
- II → innovation-analysis-documentation.md → "4. Innovation Backlog"

### 2. Format Item

**Apply the `item_template` from schema with gathered values:**

Use the schema's `item_template` if defined, otherwise use default:

```markdown
### {item_id}: {title}

**{Field1}:** {value1}
**{Field2}:** {value2}
{additional_fields}
```

Ensure all `required: true` fields from `item_fields` are populated.

### 3. Insert Into Document

**Insert at end of appropriate section:**

1. Load target document from `{process_output_folder}/{process_id}/{template_file}`
2. Find section by matching `{section_heading}` (e.g., "## 9. Pain Points")
3. Find end of section (before next ## heading or end of file)
4. Insert formatted item
5. Save document

### 4. Update Progress

**Update _progress.yaml:**

```yaml
documents:
  {template_file}:
    sections:
      {section_id}:
        status: in_progress
        count: {previous + 1}
        last_updated: {timestamp}

meta:
  last_updated: {timestamp}
```

### 5. Confirm Capture

**Show confirmation:**

"✓ **Captured: {item_id}** — {title}

{Brief summary of key fields}

Added to **{template_file}** under **{section_heading}**."

### 6. Offer Batch Capture

**Ask if they want to capture more:**

"Would you like to capture another item?

- **[Y]** Yes, capture another {item_type_name}
- **[D]** Yes, but different type
- **[N]** No, I'm done"

#### Menu Handling Logic:

- IF Y: Return to step-02-gather-fields with same item_type and schema context
- IF D: Return to step-01-determine-type
- IF N: End workflow with summary

#### EXECUTION RULES:

- ALWAYS halt and wait for user input
- Support batch capture for efficiency

### 7. End Workflow (If N selected)

**Provide session summary:**

"**Capture session complete!**

Items captured this session:
- {item_id_1}: {title_1}
- {item_id_2}: {title_2}
...

Progress updated. The Companion will reflect these changes."

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Target location resolved from schema (not hardcoded)
- Item inserted in correct location using schema's heading
- Format matches schema's item_template
- _progress.yaml count updated
- Timestamp updated
- Batch capture offered
- Clean confirmation shown

### ❌ SYSTEM FAILURE:

- Using hardcoded section mappings instead of schema
- Item inserted in wrong section
- _progress.yaml not updated
- Duplicate ID created
- Malformed markdown inserted
- Not offering batch capture

**Workflow Complete** — Item captured, documented, and tracked.
