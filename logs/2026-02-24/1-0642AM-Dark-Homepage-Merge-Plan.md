# Dark Homepage Merge Plan
**Date:** Feb 24, 2026 6:42 AM EST

## Goal
Merge the dark homepage from "Copy of brightlink-5 Dev 18" (Theme #186443727136) into a duplicate of the current live theme, creating an unpublished theme for preview/testing.

**Target Theme:** "Live Duplicate for Draft Work - Feb 24 6:38 AM" (Theme #186594853152)
**Source Theme (dark homepage):** "Copy of brightlink-5 Dev 18" (Theme #186443727136)

---

## What We're Doing
- The target theme already has all live theme settings (product pages, header, footer, customizer config, etc.)
- We only need to replace the homepage (`templates/index.json`) and ensure all referenced section files + their CSS/JS exist on the target theme

---

## Dark Homepage Sections Needed (from index.json)

| # | Section Type | Section File | CSS File | Status |
|---|-------------|-------------|----------|--------|
| 1 | hero-banner | sections/hero-banner.liquid | Inline CSS (in liquid) | Section EXISTS |
| 2 | slideshow (product cards) | sections/slideshow.liquid | Inline CSS (in liquid) | Section EXISTS - NOTE: this is a DIFFERENT slideshow than the live theme's slideshow |
| 3 | categories | sections/categories.liquid | Inline CSS (in liquid) | Section EXISTS |
| 4 | environment-showcase | sections/environment-showcase.liquid | Inline CSS (in liquid) | Section EXISTS |
| 5 | why-brightlink-blogs | sections/why-brightlink-blogs.liquid | Inline CSS (in liquid) | Section EXISTS |
| 6 | controller-tabs | sections/controller-tabs.liquid | assets/controller-tabs.css | Section + CSS EXISTS |
| 7 | compare-before-after | sections/compare-before-after.liquid | Inline CSS (in liquid) | Section EXISTS |
| 8 | blog-post | sections/blog-post.liquid | Inline CSS (in liquid) | Section EXISTS |
| 9 | our-trusted-partners | sections/our-trusted-partners.liquid | Inline CSS (in liquid) | Section EXISTS |
| 10 | best-seller | sections/best-seller.liquid | Inline CSS (in liquid) | Section EXISTS |
| 11 | knowledge-center | sections/knowledge-center.liquid | assets/knowledge-center.css | Section + CSS EXISTS |
| 12 | judgeme_carousel_section | Already on live theme | Already on live theme | No action needed |

**Old sections disabled in dark homepage:** offers, promotion-list, featured-collection, image-with-text-overlay, collection-with-image, custom_text-with-icons, blog-posts (old), logo-list (old), newsletter

---

## Steps

### Step 1: Check which section files already exist on target theme
The target theme is a duplicate of the live theme. Some sections may already exist (like `hero-banner.liquid`, `slideshow.liquid`). We need to check if the dark theme versions differ from the live versions - if they do, we push the dark versions which will overwrite.

### Step 2: Push dark homepage section files to target theme
Push these files from the pulled dark theme (`/tmp/dark-homepage-sections/`) to the target theme (#186594853152):
- `sections/hero-banner.liquid`
- `sections/slideshow.liquid` (dark version with product_card blocks)
- `sections/categories.liquid`
- `sections/environment-showcase.liquid`
- `sections/why-brightlink-blogs.liquid`
- `sections/controller-tabs.liquid`
- `sections/compare-before-after.liquid`
- `sections/blog-post.liquid`
- `sections/our-trusted-partners.liquid`
- `sections/best-seller.liquid`
- `sections/knowledge-center.liquid`

### Step 3: Push CSS assets (if separate files exist)
- `assets/controller-tabs.css`
- `assets/knowledge-center.css`
- Any other CSS/JS assets referenced inside the liquid files (need to check each liquid file for `asset_url` references)

### Step 4: Check liquid files for asset references
Grep each dark section liquid file for `| asset_url` to find any CSS/JS files they reference that need to be pushed.

### Step 5: Push the dark index.json
Replace `templates/index.json` on the target theme with the dark homepage version.

### Step 6: Preview and verify
Preview the target theme at: `https://brightlink-av.myshopify.com/?preview_theme_id=186594853152`
- Verify homepage loads with dark theme
- Verify product pages still work correctly (should be untouched)
- Verify header/footer are intact

---

## Risk Assessment
- **Low risk:** Product pages, header, footer, and all other templates are untouched since we're only changing `index.json` and adding section files
- **Medium risk:** The `slideshow.liquid` on the dark theme is different from the live theme's `slideshow.liquid` - pushing it will overwrite. But the live theme's slideshow is only used on the homepage which we're replacing anyway
- **Action if something breaks:** We can always revert by pushing the live theme's `slideshow.liquid` back, or just use the original live theme

---

## Important Notes
- Most dark sections have their CSS inline within the liquid files (inside `<style>` tags), so separate CSS files aren't needed for most
- The `hero-banner.liquid` in the dark theme has different settings schema (background_image, tagline fields) vs the live theme version
- The dark homepage uses placeholder/lorem ipsum content in some sections - these would need to be updated with real content via the Shopify customizer after the merge
