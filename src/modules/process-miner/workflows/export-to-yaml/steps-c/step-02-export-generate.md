---
name: 'step-02-export-generate'
description: 'Generate and save export file'

# File References
processFolder: '{process_output_folder}/{process_id}'
---

# Step 2: Export and Generate

## STEP GOAL:

Parse documents, generate export, validate, and save.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER save without preview
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR generating output

### Step-Specific Rules:

- 🎯 Focus on accurate export
- 🚫 FORBIDDEN to include invalid data
- 💬 Approach: Generate, preview, confirm, save

## MANDATORY SEQUENCE

### 1. Parse Documents

"**Generating export...**"

1. Load target document(s)
2. Extract items by type
3. Parse markdown structure
4. Build data model

### 2. Generate Export

**FOR YAML format:**
```yaml
process:
  id: {process_id}
  name: {process_name}
  export_date: {timestamp}

{structured_data}
```

**FOR JSON format:**
```json
{
  "process": {...},
  "data": {...}
}
```

**FOR Mermaid format:**
Generate appropriate diagram code (flowchart, journey, C4).

### 3. Preview Export

"**Export Preview:**

```{format}
{first_50_lines}
...
```

**Statistics:**
- Items exported: {count}
- File size: {size}
- Format: {format}"

### 4. Validate Export

Check:
- Valid YAML/JSON syntax
- No empty required fields
- References are valid

### 5. Save Export

"Saving to: `{process_folder}/exports/{filename}`"

### 6. Confirm Export

"✓ **Export complete!**

**File:** exports/{filename}
**Size:** {size}
**Items exported:**
- {item_count_1} {item_type_1}
- {item_count_2} {item_type_2}

**What's next?**
- **[V]** View full export
- **[D]** Download / copy path
- **[M]** Generate Mermaid diagram
- **[A]** Export another scope
- **[COMP]** Return to Companion"

#### Menu Handling Logic:

- IF V: Display full export content
- IF D: Show file path for copy
- IF M: Generate Mermaid from data
- IF A: Return to step-01-select-scope
- IF COMP: End workflow

#### EXECUTION RULES:

- ALWAYS halt and wait for user input
- Support multiple exports in sequence

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- Documents parsed correctly
- Export generated in correct format
- Preview shown
- File saved
- Options offered

### ❌ SYSTEM FAILURE:

- Malformed export
- Saving without preview
- Not offering next actions
