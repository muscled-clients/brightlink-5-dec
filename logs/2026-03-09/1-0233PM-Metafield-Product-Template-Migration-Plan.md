# Metafield Product Template Migration Plan
**From:** `brightlink/COB-Hero-Varient-selector-11-02-D10` (#186262126880)
**Into:** `brightlink-5-dec/BL-Live-Snapshot-Mar 9` (#186914832672)
**Date:** March 9, 2026

---

## Goal
Bring the fully built metafield product template (used on the Brightlink 4K 2x2 product and other LED display products) from the COB-D10 theme into the new BL-Live-Snapshot-Mar 9 theme.

---

## File Status Summary

### CRITICAL - Files Missing in Destination (must copy from COB-D10)

| File | COB-D10 Size | Action |
|------|-------------|--------|
| `sections/product-details.liquid` | 590 lines | **COPY FROM COB-D10** |
| `sections/custom-slider-pcr-metafield.liquid` | 666 lines | **COPY FROM COB-D10** |
| `sections/product-trusted.liquid` | 257 lines | **COPY FROM COB-D10** |
| `assets/product-details.css` | 649 lines | **COPY FROM COB-D10** |
| `assets/product-metafileds-custom.css.liquid` | Empty | **COPY FROM COB-D10** |

---

### CRITICAL - Files Exist in Both but DIFFERENT (must update destination)

| File | COB-D10 | BL-Live-Mar9 | Key Differences |
|------|---------|--------------|-----------------|
| `sections/main-product.liquid` | 2,877 lines | 2,402 lines | COB has 475 extra lines including 379-line inline `<style>` block for metafield dark theme styling (header, nav, background, search bar). Targets `product.template_suffix == 'metafield'` |
| `snippets/product-variant-selector.liquid` | 634 lines | 612 lines | COB adds shipping time icon, inventory icon, hides SKU display (commented out) |
| `templates/product.metafield.json` | 59,689 bytes | 43,152 bytes | COB has more block definitions and settings — 27.7% larger |
| `assets/applications-tabs.css` | 948 lines | 910 lines | COB removes fixed 1440px width, uses 100%, adds responsive media queries, overflow: hidden on panels |
| `assets/controller-tabs.css` | 955 lines | 904 lines | COB changes color from gold/amber to blue gradients, uses 100% width, adds responsive improvements |

---

### HIGH - layout/theme.liquid Missing Metafield CSS Link

COB-D10 has this line in `theme.liquid` (line 106) that BL-Live-Mar9 is missing:
```html
<link rel="stylesheet" href="{{ 'product-metafields-custom.css.liquid' | asset_url }}">
```
Must add this to the destination theme's `theme.liquid`.

---

## Migration Phases

### Phase 1 — Copy Missing Files (straightforward, no conflicts)
1. Copy `sections/product-details.liquid` from COB-D10 → BL-Live-Mar9
2. Copy `sections/custom-slider-pcr-metafield.liquid` from COB-D10 → BL-Live-Mar9
3. Copy `sections/product-trusted.liquid` from COB-D10 → BL-Live-Mar9
4. Copy `assets/product-details.css` from COB-D10 → BL-Live-Mar9
5. Copy `assets/product-metafileds-custom.css.liquid` from COB-D10 → BL-Live-Mar9
6. Add metafield CSS link to `layout/theme.liquid`

**UI Test:** None needed yet (just file copies)

---

### Phase 2 — Replace main-product.liquid
Replace destination `sections/main-product.liquid` with COB-D10 version (2,877 lines).
This brings in the dark theme styling block, metafield-conditional styles, and all product page improvements.

**UI Test:** Preview the metafield product page — confirm dark theme styling, product info layout, accordions render correctly.

---

### Phase 3 — Replace product-variant-selector.liquid
Replace destination `snippets/product-variant-selector.liquid` with COB-D10 version (634 lines).
Brings in shipping time icon, inventory icon, SKU hidden.

**UI Test:** Confirm variant selector, shipping info icons, and inventory display work correctly on product page.

---

### Phase 4 — Replace product.metafield.json
Replace destination `templates/product.metafield.json` with COB-D10 version.
This is the template configuration with all the correct block definitions.

**UI Test:** Full product page review — all blocks (accordions, tabs, FBT, downloads, etc.) render correctly.

---

### Phase 5 — Update CSS Assets
Replace destination versions with COB-D10 versions:
- `assets/applications-tabs.css` (responsive improvements)
- `assets/controller-tabs.css` (color scheme + responsive)

**UI Test:** Check accordion tabs and controller tabs sections on the product page for correct styling/responsiveness.

---

## Metafield References Used (for reference)
The template pulls data from these product metafields:
- `product.metafields.custom.shipping_times`
- `product.metafields.custom.shipping_price`
- `product.metafields.custom.estimated_delivery_on`
- `product.metafields.custom.product_description`
- `product.metafields.custom.accordion_downloads`
- `product.metafields.custom.block_product_information` (nested)
- `product.metafields.custom.block_request_zone`
- `product.metafields.custom.request_for_zone_url_pdp`
- `product.metafields.custom.brightlink_av_preferred_installers_description`
- `product.metafields.my_fields.pdf_files_1/2/3`
- `product.metafields.my_fields.pdf_link_name_1/2/3`

---

## Notes
- All migrated files will be pushed to `BL-Live-Snapshot-Mar 9` Shopify theme via `shopify theme push`
- The metafield dark styling only activates for products using the `product.metafield` template (checks `product.template_suffix == 'metafield'`)
- `product-metafileds-custom.css.liquid` is currently empty in COB-D10 — it's a placeholder for any future custom overrides
