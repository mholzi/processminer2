# Upload & Archive Procedure

Standard procedure for receiving and archiving uploaded documents before extraction.

---

## Folder Structure

```
{process_output_folder}/
└── uploads/
    ├── _manifest.yaml
    └── {YYYY-MM-DD}_{original-filename}
```

---

## Procedure

### 1. Create Uploads Folder (if first upload)

- Create `{uploadsFolder}` directory if it does not exist
- Initialize `{uploadManifest}` with header:
  ```yaml
  meta:
    process_id: '{process_id}'
    created: '{ISO-8601-timestamp}'
  uploads: []
  ```

### 2. Save Original Document

- Save the uploaded file to `{uploadsFolder}/{YYYY-MM-DD}_{original-filename}`
- If the user pasted text content (not a file upload), save as `{uploadsFolder}/{YYYY-MM-DD}_{descriptive-name}.txt`
- Preserve the original format — do not convert or modify the file

### 3. Display Document Receipt

Generate a brief summary of the document content (maximum 50 words) and display to the user:

```
📄 **Document received:** `{filename}`

*{50-word-max summary of document content}*
```

### 4. Log to Upload Manifest

Append entry to `{uploadManifest}`:

```yaml
- filename: '{saved-filename}'
  original_name: '{original-filename}'
  uploaded: '{ISO-8601-timestamp}'
  source_type: '{SOP|work-instruction|interview-notes|meeting-minutes|flowchart|procedure-manual|other}'
  summary: '{50-word-max summary}'
  sections_extracted: []   # populated after extraction
```

### 5. Update After Extraction

After extraction completes, update the current upload's `sections_extracted` field in `{uploadManifest}` with the list of section IDs that received content from this document.

---

## Source Types

| Type | Description |
|------|-------------|
| `SOP` | Standard Operating Procedure |
| `work-instruction` | Detailed work instructions |
| `interview-notes` | SME interview transcripts or notes |
| `meeting-minutes` | Meeting notes with process discussion |
| `flowchart` | Process flow diagram (described textually) |
| `procedure-manual` | Comprehensive procedure documentation |
| `other` | Other documentation types |
