# HMG Enterprise v5.0 — Comprehensive Bug Audit

## 🔴 CRITICAL BUGS

### Bug 1: `ST.init()` Never Called (storage.js)
- **Severity:** CRITICAL — Breaks entire app on first visit
- **Location:** `storage.js` — the `init()` function is defined in the IIFE and exported but NEVER called in any HTML page
- **Impact:** 
  - Default config, sample products (DP), and all data stores are never seeded to localStorage
  - `ST.products()` falls back to `[]` (empty array) instead of the 8 sample products in `DP`
  - Upgrade/migration logic for older versions never runs
  - Sales page: product dropdown is empty, quick-select grid is empty
  - Dashboard: stock value shows ₦0 with no products
  - All other pages relying on product data are broken
- **Fix:** Add `ST.init();` at the end of `storage.js` (auto-init) AND ensure all pages call it

### Bug 2: `ST.products()` Fallback Is Empty Array (storage.js, line ~88)
- **Severity:** CRITICAL
- **Location:** `const prods=()=>g(K.products,[]);`
- **Impact:** Even if init() isn't called, the fallback should return default sample products (DP), not an empty array. This is inconsistent with `ST.config()` which DOES return defaults (DC).
- **Fix:** Change to `const prods=()=>g(K.products,DP);`

### Bug 3: `applyTheme()` Destroys Sidebar Nav Active State (app.js)
- **Severity:** HIGH — Breaks sidebar menu highlighting
- **Location:** `app.js`, `applyTheme()` function
- **Code:**
  ```javascript
  document.querySelectorAll('.nav-item').forEach(a=>{
    a.classList.remove('active');
    if(a.getAttribute('data-page')===t)a.classList.add('active');
  });
  ```
- **Impact:** This removes `active` from ALL nav items and tries to match the theme string (e.g., "indigo", "blue") against `data-page` attributes ("index.html", "sales.html", etc.) — they never match. When theme is changed from Settings page, ALL nav highlighting disappears permanently.
- **Fix:** Remove the nav manipulation from `applyTheme()` entirely. The DOMContentLoaded handler already handles nav active state correctly.

### Bug 4: Missing Pages — `suppliers.html` and `staff.html`
- **Severity:** HIGH — 404 errors for sidebar links
- **Location:** All pages' sidebar navigation
- **Impact:** Clicking "Suppliers" or "Staff" in the sidebar results in 404 errors since these HTML files don't exist in the repository.
- **Fix:** Create placeholder pages for both, or remove the links from the sidebar.

## 🟡 SIGNIFICANT BUGS

### Bug 5: Nav Active Detection Uses Last Path Segment Only (app.js)
- **Severity:** MEDIUM
- **Location:** DOMContentLoaded handler in app.js
- **Code:** `const currentPage=window.location.pathname.split('/').pop()||'index.html';`
- **Impact:** Works correctly for GitHub Pages (`/business-manager/index.html` → `index.html`), but could fail with query strings or hash fragments.
- **Fix:** Strip query strings and hash from the path before extracting the filename.

### Bug 6: `kpiTodayRevChange` Div Never Populated (index.html)
- **Severity:** LOW
- **Location:** Dashboard inline script, `index.html`
- **Impact:** The `#kpiTodayRevChange` div remains empty. This was likely intended to show a day-over-day change indicator.
- **Fix:** Remove the empty div or populate it with comparison data.

## 🟢 MINOR/COSMETIC ISSUES

### Bug 7: Inline Script Uses `var()` Inconsistently
- The inline script in index.html uses inline styles with CSS variables (e.g., `var(--primary-bg)`). These work but are fragile.

### Bug 8: `body[data-page]` Attribute Unused
- `<body data-page="dashboard">` on index.html but never referenced by CSS or JS.

### Bug 9: No Input Validation on Search
- The global search fires on every keystroke without debouncing for very fast typers (200ms timeout is reasonable but could be improved).

### Bug 10: Health Score `Calculating…` Default State Has No Timeout
- If health score calculation fails silently, the UI stays stuck on "Calculating…" indefinitely.

## 📋 SUMMARY OF FIXES APPLIED

1. ✅ `storage.js`: Added auto-init call `ST.init();` at end of file
2. ✅ `storage.js`: Changed `products` fallback from `[]` to `DP` (default sample products)
3. ✅ `app.js`: Removed nav active manipulation from `applyTheme()` function
4. ✅ `app.js`: Strengthened nav active detection in DOMContentLoaded
5. ✅ Created `suppliers.html` placeholder page
6. ✅ Created `staff.html` placeholder page
7. ✅ `index.html`: Cleaned up unused `kpiTodayRevChange` div
