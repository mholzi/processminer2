---
name: 'step-02-gather-fields'
description: 'Gather required and optional fields for the item'

# File References
nextStepFile: './step-03-validate-insert.md'
---

# Step 2: Gather Fields

## STEP GOAL:

Gather all required fields and relevant optional fields for the item being captured, using field definitions from the schema.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER skip required fields
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR gathering data efficiently
- 📏 **SCHEMA IS LAW** — Use `item_fields` from schema, not hardcoded field lists

### Step-Specific Rules:

- 🎯 Focus on efficient field collection
- 🚫 FORBIDDEN to insert into document yet
- 🚫 FORBIDDEN to use hardcoded field definitions
- 💬 Approach: Ask for essentials, allow skipping optional

## CONTEXT BOUNDARIES:

- Available context from step-01:
  - `item_type` — the selected code (PP, JT, II, etc.)
  - `item_type_name` — display name (Pain Point, Journey Touchpoint, etc.)
  - `schema_file` — which schema file
  - `section_id` — which section in the schema
  - `item_prefix` — ID prefix from schema (PP, JT, II, etc.)
  - `item_fields` — field definitions from schema
  - `item_template` — formatting template from schema (if defined)
- Focus: Gathering field values based on schema
- Limits: Collection only, no insertion yet

## MANDATORY SEQUENCE

### 1. Generate Next ID

**Calculate next available ID using unified format `PREFIX-ABBREV-SEQ`:**

Use `item_prefix` from the schema (passed from step-01):

```
1. Load _progress.yaml to get the process abbreviation (3-char uppercase, e.g., "ONB")
   - If not set, derive from process name (first 3 consonants or first 3 chars, uppercase)
2. Load target document
3. Find all existing IDs with this prefix and abbreviation (e.g., {item_prefix}-ONB-001)
4. Get maximum sequence number
5. Increment by 1
6. Format: {item_prefix}-{ABBREV}-{SEQ zero-padded to 3 digits}
```

"This will be **{item_id}**."

### 2. Gather Required Fields (from Schema)

**Iterate over `item_fields` from the schema. For each field where `required: true`:**

```yaml
# Example item_fields from schema:
item_fields:
  - name: title
    required: true
  - name: impact
    type: enum
    values: [High, Medium, Low]
    required: true
  - name: affected_steps
    type: reference_list
    prefix: "PS"
    required: false
```

**For each required field, ask an appropriate question based on field type:**

| Field Type | Question Pattern |
|------------|------------------|
| `text` (default) | "What is the {field_name}?" |
| `enum` | "What is the {field_name}? [{values joined by /}]" |
| `reference` | "Which {prefix}# does this relate to? (e.g., {prefix}1)" |
| `reference_list` | "Which {prefix}# items does this affect? (e.g., {prefix}1, {prefix}3)" |
| `number` | "What is the {field_name}? (number)" |
| `boolean` | "Is {field_name}? [Yes/No]" |

**Example for Pain Point (PP) — derived from schema:**

Schema defines:
- `title` (required) → "What's the pain point?"
- `impact` (required, enum: High/Medium/Low) → "What's the impact? [High/Medium/Low]"
- `frequency` (required, enum) → "How often does this occur? [Always/Often/Sometimes/Rarely]"
- `affected_steps` (optional, reference_list, prefix: PS) → offered in optional section

### 3. Gather Optional Fields (from Schema)

**For each field in `item_fields` where `required: false`:**

"Any additional details to add?

Optional fields available:
{list optional field names}

(Enter field name to add, or 'skip' to continue)"

**If user wants to add an optional field, ask the appropriate question based on field type.**

### 4. Validate References

**For any field with `type: reference` or `type: reference_list`:**

```
IF reference provided (e.g., "PS-ONB-001, PS-ONB-003"):
  1. Parse references
  2. Get the prefix from field definition (e.g., "PS")
  3. Load target document and find all items with that prefix
  4. Check each referenced ID exists
  5. IF invalid: "{ref} doesn't exist. Valid items: {list}. Please correct."
  6. IF valid: Continue
```

### 5. Preview Item

**Show formatted preview using `item_template` from schema if available:**

If schema has `item_template`:
```markdown
{Apply item_template with gathered values}
```

If no template defined, use default format:
```markdown
### {item_id}: {title}

**{Field1}:** {value1}
**{Field2}:** {value2}
...
```

"Here's what I'll add:

{formatted preview}

Does this look correct?"

### 6. Present MENU OPTIONS

Display: "**Ready to insert?** [C] Continue to insert [E] Edit fields"

#### Menu Handling Logic:

- IF C: Store all field values (with schema context), load, read entire file, then execute {nextStepFile}
- IF E: Return to field gathering (section 2)
- IF user wants to change something: Help them update, redisplay preview

#### EXECUTION RULES:

- ALWAYS halt and wait for user input
- ONLY proceed when user selects 'C'

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Fields gathered based on schema's `item_fields`
- All `required: true` fields populated
- Optional fields offered (not forced)
- Enum fields validated against schema's `values`
- Reference fields validated against existing items
- Preview uses schema's `item_template` if available
- Unique ID generated using schema's `item_prefix`

### ❌ SYSTEM FAILURE:

- Using hardcoded field definitions instead of schema
- Missing required fields (per schema)
- Invalid enum values accepted
- Invalid references accepted
- Duplicate ID generated
- Inserting into document in this step
