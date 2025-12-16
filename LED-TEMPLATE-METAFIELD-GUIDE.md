# LED Template Metafield Guide

This guide explains how to use the `custom.led_template_data` JSON metafield to populate LED product template sections with dynamic product-specific data.

## Table of Contents

1. [Overview](#overview)
2. [Setting Up the Metafield](#setting-up-the-metafield)
3. [Complete JSON Structure](#complete-json-structure)
4. [Section-by-Section Guide](#section-by-section-guide)
5. [Image URLs (Shopify CDN)](#image-urls-shopify-cdn)
6. [Working with Tabs](#working-with-tabs)
7. [Example JSON](#example-json)

---

## Overview

The LED template uses a single JSON metafield (`custom.led_template_data`) to store all product-specific data. This approach:

- Keeps all product data in one place
- Allows different LED products to have unique specifications
- Falls back to section settings if metafield data is not provided
- Supports Shopify CDN image URLs for dynamic images

### How It Works

Each section reads from the metafield with fallback to section settings:

```liquid
{% assign led_data = product.metafields.custom.led_template_data.value %}
{% assign hero_data = led_data.hero %}

{% assign title = hero_data.title | default: section.settings.title %}
```

---

## Setting Up the Metafield

### Step 1: Create the Metafield Definition

1. Go to **Shopify Admin > Settings > Custom data**
2. Click **Products**
3. Click **Add definition**
4. Configure:
   - **Name:** LED Template Data
   - **Namespace and key:** `custom.led_template_data`
   - **Type:** JSON
   - **Description:** Complete data for LED product template sections

### Step 2: Add Data to Products

1. Go to **Products > [Your LED Product]**
2. Scroll to **Metafields** section
3. Find **LED Template Data**
4. Paste your JSON data (see structure below)

---

## Complete JSON Structure

```json
{
  "hero": {
    "series_label": "PRO SPECTRUM SERIES",
    "tagline": "The Pinnacle of Visual Excellence",
    "description": "True 4K resolution. 600 nits brightness. 100,000-hour lifespan.",
    "metrics": [
      { "value": "217\"", "label": "Diagonal Display" },
      { "value": "8.3M", "label": "Total Pixels" },
      { "value": "1.25mm", "label": "Pixel Pitch" },
      { "value": "2hrs", "label": "Installation Time" }
    ]
  },

  "technical_specs_header": {
    "title": "Engineering Excellence",
    "subtitle": "Every specification designed for uncompromising performance"
  },

  "technical_specs": [
    {
      "icon": "grid",
      "value": "8,294,400",
      "label": "Total Pixels",
      "detail": "True 4K UHD resolution"
    },
    {
      "icon": "pen",
      "value": "1.25mm",
      "label": "Pixel Pitch",
      "detail": "Ultra-fine detail at any distance"
    },
    {
      "icon": "refresh",
      "value": "3840Hz",
      "label": "Refresh Rate",
      "detail": "Flicker-free performance"
    },
    {
      "icon": "sun",
      "value": "600 nits",
      "label": "Brightness",
      "detail": "Vivid in any lighting"
    },
    {
      "icon": "contrast",
      "value": "10000:1",
      "label": "Contrast Ratio",
      "detail": "Deep blacks, bright whites"
    },
    {
      "icon": "eye",
      "value": "178°",
      "label": "Viewing Angle",
      "detail": "Perfect from any position"
    }
  ],

  "experience_scale": {
    "title": "Experience the Scale",
    "subtitle": "217 inches of immersive visual excellence",
    "image": "https://cdn.shopify.com/s/files/1/xxxx/xxxx/files/scale-image.jpg",
    "metrics": [
      { "value": "36x", "label": "Larger", "detail": "than a typical 65\" TV" },
      { "value": "17'", "label": "Diagonal", "detail": "equivalent display size" },
      { "value": "141", "label": "sq ft", "detail": "of visual real estate" }
    ]
  },

  "system_config": {
    "title": "System Configuration",
    "description": "Modular design for seamless installation",
    "display_image": "https://cdn.shopify.com/s/files/1/xxxx/xxxx/files/config-image.jpg",
    "panel_config": {
      "columns": 8,
      "rows": 5,
      "total_cabinets": 40
    },
    "cabinet_specs": {
      "dimensions": "600mm × 337.5mm",
      "imperial": "23.6\" × 13.3\"",
      "weight": "5.2 kg (11.5 lbs)",
      "resolution": "480 × 270 pixels",
      "modules": "4 COB modules"
    }
  },

  "product_intelligence": {
    "title": "Product Intelligence",
    "description": "Everything you need to know about your LED video wall"
  },

  "applications": {
    "title": "Built for Every Environment",
    "description": "From boardrooms to broadcast studios, Pro Spectrum delivers uncompromising performance"
  },

  "controller": {
    "title": "Professional Control Solutions",
    "description": "Enterprise-grade video processing for demanding applications"
  },

  "config_builder": {
    "title": "Custom Configuration Builder",
    "description": "Configure your perfect LED display setup"
  }
}
```

---

## Section-by-Section Guide

### 1. Hero Video Wall (`hero-video-wall.liquid`)

**Metafield Key:** `hero`

| Field | Type | Description |
|-------|------|-------------|
| `series_label` | string | Small label above title (e.g., "PRO SPECTRUM SERIES") |
| `tagline` | string | Subheading text |
| `description` | string | Paragraph description |
| `metrics` | array | Feature boxes with `value` and `label` |

**Note:** Video and background images are set via section settings (not metafield).

---

### 2. Technical Specs (`technical-specs.liquid`)

**Metafield Keys:** `technical_specs_header` and `technical_specs`

#### Header:
| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Section heading |
| `subtitle` | string | Section subheading |

#### Specs Array:
| Field | Type | Description |
|-------|------|-------------|
| `icon` | string | Icon name: `grid`, `pen`, `refresh`, `sun`, `contrast`, `eye`, `layers`, `weight` |
| `value` | string | Main value (e.g., "8,294,400") |
| `label` | string | Label (e.g., "Total Pixels") |
| `detail` | string | Additional description |

---

### 3. Experience Scale (`experience-scale.liquid`)

**Metafield Key:** `experience_scale`

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Section title |
| `subtitle` | string | Section subtitle |
| `image` | string | Shopify CDN URL for display image |
| `metrics` | array | Metric cards with `value`, `label`, `detail` |

---

### 4. System Configuration (`system-configuration.liquid`)

**Metafield Key:** `system_config`

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Section title |
| `description` | string | Section description |
| `display_image` | string | Shopify CDN URL for main display image |
| `panel_config.columns` | number | Number of columns |
| `panel_config.rows` | number | Number of rows |
| `panel_config.total_cabinets` | number | Total cabinet count |
| `cabinet_specs.dimensions` | string | Cabinet dimensions (metric) |
| `cabinet_specs.imperial` | string | Cabinet dimensions (imperial) |
| `cabinet_specs.weight` | string | Cabinet weight |
| `cabinet_specs.resolution` | string | Cabinet resolution |
| `cabinet_specs.modules` | string | Module count |

---

### 5. Product Intelligence (`product-intelligence.liquid`)

**Metafield Key:** `product_intelligence`

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Section title |
| `description` | string | Section description |

**Note:** Tabs are configured via Shopify section blocks (see [Working with Tabs](#working-with-tabs)).

---

### 6. Applications Tabs (`applications-tabs.liquid`)

**Metafield Key:** `applications`

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Section title |
| `description` | string | Section description |

**Note:** Application tabs are configured via Shopify section blocks.

---

### 7. Controller Tabs (`controller-tabs.liquid`)

**Metafield Key:** `controller`

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Section title |
| `description` | string | Section description |

**Note:** Controller tabs are configured via Shopify section blocks.

---

### 8. Custom Config Builder (`custom-config-builder.liquid`)

**Metafield Key:** `config_builder`

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Section title |
| `description` | string | Section description |

---

## Image URLs (Shopify CDN)

For images in the JSON metafield, use **Shopify CDN URLs**. To get an image URL:

### Method 1: Upload via Files

1. Go to **Settings > Files**
2. Upload your image
3. Click the image to copy its URL
4. Use the URL in your JSON:

```json
{
  "experience_scale": {
    "image": "https://cdn.shopify.com/s/files/1/0123/4567/8901/files/led-display.jpg"
  }
}
```

### Method 2: From Product Images

If the image is already on a product:

1. Go to the product
2. Right-click the image > "Copy image address"
3. Use the URL in your JSON

### Image URL Format

Shopify CDN URLs follow this pattern:
```
https://cdn.shopify.com/s/files/1/{shop_id}/files/{filename}.{extension}
```

You can add size parameters:
```
https://cdn.shopify.com/s/files/1/{shop_id}/files/{filename}_1200x.jpg
```

---

## Working with Tabs

### Why Tabs Use Section Blocks

Tab-based sections (Product Intelligence, Applications, Controller) use **Shopify section blocks** instead of JSON metafields because:

1. **Visual Editing:** Tabs can be added/removed/reordered in Theme Customizer
2. **Rich Content:** Each tab has multiple fields (title, content, image, features)
3. **Flexibility:** Different products can have different numbers of tabs

### Adding Tabs in Theme Customizer

1. Go to **Online Store > Customize**
2. Navigate to a product using the LED template
3. Select the tab section (e.g., "Product Intelligence")
4. Click **Add block** to add a new tab
5. Configure the tab settings:
   - Tab Title
   - Tab Icon
   - Tab Content
   - Tab Image
   - Features (if applicable)

### Tab Block Settings

#### Product Intelligence Tabs:
- `tab_title`: Tab button text
- `tab_icon`: Icon type (overview, specs, features, included, installation, support)
- `tab_content`: Rich text content
- `tab_image`: Image for the tab panel
- `show_features`: Toggle feature cards
- `feature_1_title`, `feature_1_desc`, `feature_1_icon`: Feature card 1
- `feature_2_title`, `feature_2_desc`, `feature_2_icon`: Feature card 2
- `feature_3_title`, `feature_3_desc`, `feature_3_icon`: Feature card 3

#### Applications Tabs:
- `tab_title`: Tab button text
- `icon`: Icon type (monitor, briefcase, video, layout, store)
- `image`: Application image
- `heading`: Content heading
- `description`: Main description
- `stat1_label`, `stat1_value`: Stat overlay 1
- `stat2_label`, `stat2_value`: Stat overlay 2
- `stat3_label`, `stat3_value`: Stat overlay 3
- `feature1` through `feature7`: Feature list items

#### Controller Tabs:
- `tab_title`: Tab button text
- `icon`: Icon type (overview, integration, 4k, processing, quality, flexible)
- `image`: Controller/product image
- `certified_badge`: Badge text (e.g., "Certified")
- `description`: Tab description
- `config_title`: Configuration section title
- `config1` through `config5`: Configuration items
- `feature1` through `feature7`: Feature list items

---

## Example JSON

Here's a complete example for a 217" LED Video Wall:

```json
{
  "hero": {
    "series_label": "PRO SPECTRUM SERIES",
    "tagline": "The Pinnacle of Visual Excellence",
    "description": "True 4K resolution. 600 nits brightness. 100,000-hour lifespan. The world's most advanced LED video wall technology.",
    "metrics": [
      { "value": "217\"", "label": "Diagonal Display" },
      { "value": "8.3M", "label": "Total Pixels" },
      { "value": "1.25mm", "label": "Pixel Pitch" },
      { "value": "2hrs", "label": "Installation Time" }
    ]
  },
  "technical_specs_header": {
    "title": "Engineering Excellence",
    "subtitle": "Every specification designed for uncompromising performance"
  },
  "technical_specs": [
    { "icon": "grid", "value": "8,294,400", "label": "Total Pixels", "detail": "True 4K UHD resolution" },
    { "icon": "pen", "value": "1.25mm", "label": "Pixel Pitch", "detail": "Ultra-fine detail at any distance" },
    { "icon": "refresh", "value": "3840Hz", "label": "Refresh Rate", "detail": "Flicker-free performance" },
    { "icon": "sun", "value": "600 nits", "label": "Brightness", "detail": "Vivid in any lighting" },
    { "icon": "contrast", "value": "10000:1", "label": "Contrast Ratio", "detail": "Deep blacks, bright whites" },
    { "icon": "eye", "value": "178°", "label": "Viewing Angle", "detail": "Perfect from any position" }
  ],
  "experience_scale": {
    "title": "Experience the Scale",
    "subtitle": "217 inches of immersive visual excellence",
    "image": "https://cdn.shopify.com/s/files/1/xxxx/xxxx/files/217-scale.jpg",
    "metrics": [
      { "value": "36x", "label": "Larger", "detail": "than a typical 65\" TV" },
      { "value": "17'", "label": "Diagonal", "detail": "equivalent display size" },
      { "value": "141", "label": "sq ft", "detail": "of visual real estate" }
    ]
  },
  "system_config": {
    "title": "System Configuration",
    "description": "40 precision-engineered cabinets in an 8×5 array",
    "display_image": "https://cdn.shopify.com/s/files/1/xxxx/xxxx/files/config-217.jpg",
    "panel_config": {
      "columns": 8,
      "rows": 5,
      "total_cabinets": 40
    },
    "cabinet_specs": {
      "dimensions": "600mm × 337.5mm",
      "imperial": "23.6\" × 13.3\"",
      "weight": "5.2 kg (11.5 lbs)",
      "resolution": "480 × 270 pixels",
      "modules": "4 COB modules"
    }
  },
  "product_intelligence": {
    "title": "Product Intelligence",
    "description": "Everything you need to know about your LED video wall"
  },
  "applications": {
    "title": "Built for Every Environment",
    "description": "From boardrooms to broadcast studios, Pro Spectrum delivers uncompromising performance"
  },
  "controller": {
    "title": "Professional Control Solutions",
    "description": "Enterprise-grade video processing for demanding applications"
  },
  "config_builder": {
    "title": "Custom Configuration Builder",
    "description": "Design your perfect LED display"
  }
}
```

---

## Troubleshooting

### Data Not Showing

1. **Check JSON validity:** Use a JSON validator (jsonlint.com)
2. **Check metafield key:** Must be exactly `custom.led_template_data`
3. **Check product:** Ensure you're viewing a product with the metafield set

### Images Not Loading

1. **Check URL:** Ensure it's a valid Shopify CDN URL
2. **Check file exists:** Visit the URL directly in browser
3. **Check HTTPS:** URLs must use `https://`

### Fallback Not Working

If metafield is empty, section settings should show. If not:
1. Check that section settings have default values
2. Clear theme cache by republishing theme

---

## Quick Reference: Icon Names

### Technical Specs Icons:
- `grid` - Grid/pixels icon
- `pen` - Ruler/measurement icon
- `refresh` - Refresh rate icon
- `sun` - Brightness icon
- `contrast` - Contrast icon
- `eye` - Viewing angle icon
- `layers` - Profile/depth icon
- `weight` - Weight icon

### Product Intelligence Tab Icons:
- `overview` - Checkmark circle
- `specs` - List icon
- `features` - Star icon
- `included` - Folder icon
- `installation` - Tool icon
- `support` - Question mark icon

### Applications Tab Icons:
- `monitor` - Display/monitor
- `briefcase` - Corporate/business
- `video` - Broadcast/video
- `layout` - Control room
- `store` - Retail

### Controller Tab Icons:
- `overview` - Chart/overview
- `integration` - Connection/integration
- `4k` - 4K badge
- `processing` - Compass/processing
- `quality` - Heart/quality
- `flexible` - Question/flexibility
