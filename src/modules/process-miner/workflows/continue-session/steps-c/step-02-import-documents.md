---
name: 'step-02-import-documents'
description: 'Import existing documentation, archive originals, extract structured data, persist to MD + JSON with discrepancies'

# File References
nextStepFile: './step-03-section-overview.md'
discrepancySchema: '../data/discrepancy-schema.md'
uploadProcedure: '../data/upload-archive-procedure.md'
uploadsFolder: '{process_output_folder}/uploads'
uploadManifest: '{process_output_folder}/uploads/_manifest.yaml'
---

# Step 2: Import Existing Documentation

## STEP GOAL:

Import existing process documentation provided by the user, extract structured data aligned to the loaded template, persist to both MD and JSON formats, and flag discrepancies found during extraction.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER proceed without offering import opportunity
- 📖 CRITICAL: Read the complete step file before taking any action
- 📋 YOU ARE A FACILITATOR guiding document import
- ✅ YOU MUST ALWAYS SPEAK OUTPUT In your Agent communication style with the config `{communication_language}`

### Step-Specific Rules:

- 🎯 Parse against the LOADED template structure — discover sections dynamically
- 🚫 FORBIDDEN to skip persistence — every import must write to MD + JSON
- 💬 Approach: Show clear extraction summaries after each document
- 📊 Flag discrepancies immediately in JSON using standard format

## MANDATORY SEQUENCE

### 1. Check for Previously Imported Documents

**Before prompting for new documents, check the upload manifest:**

1. Check if `{uploadManifest}` exists
2. IF manifest exists AND has entries in `uploads` array:

"**Previously Imported Documents:**

| # | Filename | Date | Source Type | Summary | Sections Populated |
|---|----------|------|-------------|---------|-------------------|
| 1 | {filename} | {uploaded_date} | {source_type} | {summary} | {sections_extracted} |
| ... | ... | ... | ... | ... | ... |

**Total:** {count} document(s) imported"

3. IF no manifest OR empty uploads array:

"No documents have been imported yet for this process."

### 2. Prompt for Documentation

"Do you have existing process documentation to provide? This can be:
- Existing process documents (Word, PDF, text)
- SOPs, work instructions, or procedure manuals
- Interview notes or meeting minutes
- Flowcharts or process maps (describe them)
- Any other relevant documentation

Please paste or upload your documentation, or type **[S] Skip** if you have no documents to import."

### 3. Receive & Archive Document

For each document the user provides, **before any extraction**, follow the upload and archive procedure in {uploadProcedure}:

1. Create uploads folder if needed
2. Save original document with date prefix
3. Display document receipt with 50-word summary
4. Log entry to upload manifest

### 4. Parse and Extract (Per Document)

For each document the user provides:

**4a. Template-Aligned Extraction:**
- Map document content to the runtime section registry (built from template in Step 1)
- For each section in the template, extract relevant content from the uploaded document
- Assign structured IDs using the schema's `item_prefix` patterns
- **SCHEMA IS LAW:** Generate all content constrained by the full per-document `.schema.yaml` loaded in Step 1 — validation rules are generation targets, not post-hoc metrics. Do NOT rely on rules restated here; the schema is the single source of truth for all constraints (word limits, item counts, required fields, enum values, reference validity, field types, guidance).
- If source material is genuinely insufficient to meet a schema minimum, get as close as possible and mark the shortfall with `[To be expanded]`

**4b. Confidence Scoring:**
- Score each extracted section based on completeness and clarity
- Use schema confidence rules: 90+ = HIGH, 70-89 = MEDIUM, below 70 = LOW
- Detect incomplete markers: `[TBD]`, `[TODO]`, `[Unknown]`, `{{.*}}`, `...`

**4c. Discrepancy Detection:**
- Cross-reference validation: do referenced IDs exist?
- Internal consistency: do counts, names, and references align?
- Completeness gaps: which required fields are missing?
- Record each discrepancy in the standard format (see {discrepancySchema})

### 5. Validate Against Schema

**Before persisting, validate ALL extracted content against the per-document `.schema.yaml`:**

- Run every validation rule defined in the schema against the extracted content
- The schema is the single source of truth — do not use hardcoded rules
- Record each violation (section, rule, expected vs actual)

### 6. Show Extraction Summary

**MANDATORY FORMAT: The extraction summary MUST be presented as a markdown table. Never use prose, bullet lists, or any other format.**

After each document, display:

"**Import Summary: {document_name}**

| Section | Items Extracted | Confidence | Schema Violations | Discrepancies |
|---------|----------------|------------|-------------------|---------------|
| {section_heading} | {count} {items/words} | {score}% {HIGH/MED/LOW} | {count} | {count} |
| ... | ... | ... | ... | ... |

**Totals:** {total_items} items across {sections_touched} sections, {violation_count} schema violations, {discrepancy_count} discrepancies flagged"

If schema violations found:

"**Schema Violations:**
- {section}: {rule} — expected {expected}, got {actual}
- ..."

If discrepancies found:

"**Discrepancies Found:**
- DISC-{NNN}: {brief description}
- ..."

### 7. Persist to MD + JSON

**Immediately after each import:**

**MD Persistence (human-readable):**
- Render extracted content through Handlebars templates
- If sharded: write to per-section files (`{section_id}.md`)
- If monolithic: update the single document file
- Use `{{#if}}` / `{{#each}}` for populated/empty state handling

**JSON Persistence (AI-readable):**
- Write structured data per master schema field definitions
- Include `template_id` field at root for schema validation
- Include `discrepancies` array with all flagged items in standard format:
  ```json
  {
    "template_id": "{document_type}",
    "sections": { ... },
    "discrepancies": [
      {
        "id": "DISC-001",
        "scope": "intra-document",
        "type": "cross-reference | missing | inconsistent",
        "source_section": "...",
        "target_section": "...",
        "description": "...",
        "status": "open",
        "found_in_step": 2,
        "resolved_in_step": null
      }
    ]
  }
  ```

**Update _progress.yaml** with new section statuses and item counts.

**Update Upload Manifest:**
- Update `sections_extracted` per {uploadProcedure}.

### 8. Loop for More Documents

"Do you have more documentation to provide? Paste or upload the next document, or type **[C] Continue** to proceed to section review."

- IF more docs: Return to section 3 (Receive & Archive)
- IF no docs and nothing was imported: Proceed anyway — Step 4 will show gaps against the template
- IF C: Load, read entire file, then execute {nextStepFile}

### 9. Present MENU OPTIONS

Display: "**Import complete.** [C] Continue to Section Overview"

#### Menu Handling Logic:

- IF C: Load, read entire file, then execute {nextStepFile}
- IF user asks questions: Answer, then redisplay menu
- IF user wants to import more: Return to section 1

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- User given opportunity to import (even if they skip)
- Upload procedure followed (see {uploadProcedure})
- Each document parsed against loaded template structure
- Extraction summary shown per document
- Data persisted to both MD and JSON
- Upload manifest updated with `sections_extracted` after extraction
- Discrepancies flagged in JSON with standard format
- _progress.yaml updated

### ❌ SYSTEM FAILURE:

- Skipping import opportunity
- Not following upload procedure (see {uploadProcedure})
- Hardcoding section names instead of using template registry
- Not persisting to both MD and JSON
- Not flagging discrepancies
- Not showing extraction summary
- Proceeding without user confirmation

**Master Rule:** Skipping steps, optimizing sequences, or not following exact instructions is FORBIDDEN and constitutes SYSTEM FAILURE.
