# STRUCTURE DECISIONS
## Approved by: Ari (Architect)
## Date: 2026-01-22

---

## DECISION FRAMEWORK

**Guiding Principles:**
1. Remove dead code/files
2. Minimize breaking changes
3. Keep changes focused on organization, not refactoring
4. Preserve functionality

---

## APPROVED ACTIONS

### 1. DELETE: Dead Files

| File | Action | Reason |
|------|--------|--------|
| `preview.html` | **DELETE** | 962-line prototype not used by React app |
| `netlify.toml` | **DELETE** | Vercel is the actual host per README |
| `src/components/Footer.jsx` | **DELETE** | Unused duplicate; `layout/Footer.jsx` is imported |
| `docs/.gitkeep` | **KEEP** | Keep folder for future documentation |

### 2. KEEP: Potentially Confusing But Functional

| File | Action | Reason |
|------|--------|--------|
| `Navbar.jsx` | **KEEP** | Used by Home.jsx; different from Navigation.jsx |
| `Navigation.jsx` | **KEEP** | Used by App.jsx; they serve different contexts |
| Component/Page name collisions | **KEEP AS-IS** | Common React pattern; pages import components |

**Rationale:** Renaming components would require updating imports across the app. This is refactoring, not organization. The current pattern (pages import section components) is valid and common.

### 3. MOVE: Misplaced Files

| File | From | To | Reason |
|------|------|-----|--------|
| `IMAGE-OPTIMIZATION-TODO.md` | Root | `docs/` | Keep root clean |

### 4. DO NOT CHANGE: Component Structure

**Decision:** Keep flat component structure.

**Rationale:**
- 24 components is manageable
- Subfolder organization (ui/, sections/, forms/) would require updating many imports
- This is refactoring scope, not organization scope
- Can be done in a future `refactor/component-structure` branch if needed

### 5. UPDATE: Documentation

| File | Action |
|------|--------|
| `README.md` | Update project structure to reflect actual layout |
| `docs/` | Move TODO file here; remove .gitkeep text |

### 6. DO NOT CHANGE: Skills Windows Paths

**Decision:** Leave `.claude/skills/*.md` paths as-is.

**Rationale:**
- These reference external agent system files
- Changing paths is functional change, not organization
- Paths may be needed when on Windows machine
- Can document this discrepancy in README if needed

---

## IMPLEMENTATION ORDER

Ralph will execute in this order:

1. **Commit 1:** Delete `preview.html`
2. **Commit 2:** Delete `netlify.toml`
3. **Commit 3:** Delete `src/components/Footer.jsx` (unused duplicate)
4. **Commit 4:** Move `IMAGE-OPTIMIZATION-TODO.md` to `docs/`
5. **Commit 5:** Update `docs/.gitkeep` content
6. **Commit 6:** Update `README.md` with accurate structure
7. **Commit 7:** Verify build passes

---

## EXPLICITLY NOT APPROVED

The following are **out of scope** for this task:

- Component renaming (Navbar, Navigation, etc.)
- Component subfolder reorganization
- Updating Windows paths in skills
- Adding new documentation files
- Any code changes beyond file deletion/movement

---

## APPROVAL

**Ari confirms:** These decisions are final. Ralph may proceed with implementation.

**Branch:** `chore/repo-organization`
**Target:** Will PR to `develop` or `main` after verification
