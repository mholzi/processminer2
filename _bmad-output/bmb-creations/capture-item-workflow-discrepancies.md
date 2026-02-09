# Capture-Item Workflow Alignment Report
**Generated:** 2026-02-05
**Master Standard:** PDA (Process Documentation Analyst)
**Workflow:** capture-item
**Status:** ✅ ALL RESOLVED

---

## Summary

| Agent | Menu Item | item_type Param | Status |
|-------|-----------|-----------------|--------|
| pda.md | CI | None (correct - generic) | ✅ OK |
| control.md | AC | CP | ✅ FIXED |
| cx-journey.md | JT | JT | ✅ FIXED |
| cx-journey.md | FP | FP | ✅ FIXED |
| innovation.md | AI | II | ✅ ADDED |
| transformation.md | AD | TD | ✅ ADDED |

**Total Discrepancies:** 5
**Resolved:** 5
**Remaining:** 0

---

## Workflow Analysis

The capture-item workflow supports an `item_type` parameter:
- **If provided**: Skips type selection, goes directly to field capture
- **If not provided**: Shows menu of all available item types

### Supported Item Types

| Code | Name | Category | Schema File | Agent Domain |
|------|------|----------|-------------|--------------|
| PS | Process Step | AS-IS Documentation | as-is-process-documentation.schema.yaml | PDA |
| PP | Pain Point | AS-IS Documentation | as-is-process-documentation.schema.yaml | PDA |
| EX | Exception | AS-IS Documentation | as-is-process-documentation.schema.yaml | PDA |
| CP | Control Point | AS-IS Documentation | as-is-process-documentation.schema.yaml | PDA, Control |
| SYS | System | AS-IS Documentation | as-is-process-documentation.schema.yaml | PDA |
| JT | Journey Touchpoint | CX Journey | cx-journey-documentation.schema.yaml | CX Journey |
| FP | Friction Point | CX Journey | cx-journey-documentation.schema.yaml | CX Journey |
| II | Innovation Idea | Innovation | innovation-analysis-documentation.schema.yaml | Innovation |
| TD | Transformation Decision | Transformation | target-state-documentation.schema.yaml | Transformation |

---

## Resolution Log

### DISC-CI-001: control.md — Missing item_type parameter ✅ RESOLVED
- **Menu Item:** AC (Add Control)
- **Fix:** Added `data: { item_type: CP }`

### DISC-CI-002: cx-journey.md — Missing item_type parameter (JT) ✅ RESOLVED
- **Menu Item:** JT (Journey Touchpoint)
- **Fix:** Added `data: { item_type: JT }`

### DISC-CI-003: cx-journey.md — Missing item_type parameter (FP) ✅ RESOLVED
- **Menu Item:** FP (Friction Points)
- **Fix:** Added `data: { item_type: FP }`

### DISC-CI-004: innovation.md — Missing capture-item menu entry ✅ RESOLVED
- **Fix:** Added new menu item:
```yaml
- trigger: AI or fuzzy match on add idea or add innovation
  exec: '{project-root}/src/modules/process-miner/workflows/capture-item/workflow.md'
  data:
    item_type: II
  description: '[AI] Add Innovation Idea — Capture an automation or improvement opportunity'
```

### DISC-CI-005: transformation.md — Missing capture-item menu entry ✅ RESOLVED
- **Fix:** Added new menu item:
```yaml
- trigger: AD or fuzzy match on add decision or add transformation
  exec: '{project-root}/src/modules/process-miner/workflows/capture-item/workflow.md'
  data:
    item_type: TD
  description: '[AD] Add Decision — Capture a transformation design decision'
```

---

## Final State

All agents now properly invoke capture-item with appropriate parameters:

| Agent | Menu Item | Trigger | item_type | Behavior |
|-------|-----------|---------|-----------|----------|
| pda.md | CI | `CI or fuzzy match on capture item` | (none) | Shows all item type options |
| control.md | AC | `AC or fuzzy match on add control` | CP | Direct to Control Point capture |
| cx-journey.md | JT | `JT or fuzzy match on touchpoint` | JT | Direct to Journey Touchpoint capture |
| cx-journey.md | FP | `FP or fuzzy match on friction` | FP | Direct to Friction Point capture |
| innovation.md | AI | `AI or fuzzy match on add idea or add innovation` | II | Direct to Innovation Idea capture |
| transformation.md | AD | `AD or fuzzy match on add decision or add transformation` | TD | Direct to Transformation Decision capture |

---

## Design Pattern Established

### Generic Agent (PDA)
```yaml
# No item_type - user selects from all options
- trigger: CI or fuzzy match on capture item
  exec: '.../capture-item/workflow.md'
  description: '[CI] Capture Item — Add pain point, exception, control, or system'
```

### Specialist Agents (Control, CX Journey, Innovation, Transformation)
```yaml
# Pre-selected item_type - skips type selection for better UX
- trigger: XX or fuzzy match on ...
  exec: '.../capture-item/workflow.md'
  data:
    item_type: XX
  description: '[XX] ... — ...'
```
