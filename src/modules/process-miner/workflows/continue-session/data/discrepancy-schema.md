# Discrepancy Schema Reference

Standard format for tracking discrepancies across the document refinement pipeline.

---

## JSON Structure

Every process JSON file includes a `discrepancies` array at the root level. Each entry follows this schema:

```json
{
  "id": "DISC-001",
  "scope": "intra-document | inter-document",
  "type": "cross-reference | missing | inconsistent",
  "source_document": "as_is",
  "source_section": "pain_points",
  "target_document": "as_is",
  "target_section": "process_steps",
  "description": "PP-003 references PS-ONB-012 which does not exist",
  "status": "open | resolved | deferred",
  "found_in_step": 2,
  "resolved_in_step": null,
  "deferred_reason": null
}
```

---

## Field Definitions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | yes | Unique identifier, sequential: `DISC-001`, `DISC-002`, etc. |
| `scope` | enum | yes | `intra-document` (within one doc) or `inter-document` (across docs) |
| `type` | enum | yes | `cross-reference` (broken ref), `missing` (required data absent), `inconsistent` (conflicting data) |
| `source_document` | string | yes | Document type where the issue originates (e.g., `as_is`, `cx_journey`) |
| `source_section` | string | yes | Section ID where the issue originates |
| `target_document` | string | conditional | Required for `inter-document` scope and `cross-reference` type |
| `target_section` | string | conditional | Required for `cross-reference` type |
| `description` | string | yes | Human-readable description of the discrepancy |
| `status` | enum | yes | `open` (needs resolution), `resolved` (fixed), `deferred` (postponed) |
| `found_in_step` | integer | yes | Workflow step number where discrepancy was first detected |
| `resolved_in_step` | integer | no | Workflow step number where discrepancy was resolved (null if unresolved) |
| `deferred_reason` | string | no | User-provided reason for deferral (null if not deferred) |

---

## Discrepancy Types

### cross-reference
A structured ID reference points to a target that does not exist or has been removed.

**Examples:**
- `PP-003.affected_steps` references `PS-ONB-012` but that step ID is not defined
- `FP-001.related_pain_point` references `PP-005` in AS-IS but that pain point was deleted
- `CP-002.at_step` references `PS-ONB-003` which was renumbered to `PS-ONB-004`

### missing
Required data is absent per the schema validation rules.

**Examples:**
- `control_points` section has 0 items but schema requires `min_count: 1`
- `executive_summary` has 45 words but schema requires `min_words: 100`
- Required field `impact` on pain point `PP-002` is empty

### inconsistent
Data conflicts between sections or documents.

**Examples:**
- Executive summary states "6 pain points identified" but pain_points section contains 8
- Process step `PS-ONB-003` is named "Verify Identity" in process_steps but referenced as "ID Verification" in control_points
- Systems section lists 4 systems but process steps reference a 5th system not in the list

---

## Lifecycle

```
Created (open) → Resolved (in Step 4 QER or Step 6)
                → Deferred (in Step 6, with reason)

Deferred items remain visible in Step 3 hub under "Deferred" column.
Open items trigger Step 6 after Step 5 reconciliation.
Resolved items are retained in the array for audit trail.
```

---

## ID Assignment Rules

- IDs are sequential across the entire process: `DISC-001`, `DISC-002`, etc.
- IDs are never reused — even if a discrepancy is resolved, its ID is not recycled
- New discrepancies found in later passes continue the sequence
