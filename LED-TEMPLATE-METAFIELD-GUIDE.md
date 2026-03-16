# LED Template Metafield Guide

This guide explains how to use the `custom.led_template_data` JSON metafield to populate LED product template sections with dynamic product-specific data.

## Table of Contents

1. [Quick Start Summary](#quick-start-summary)
2. [Overview](#overview)
3. [Setting Up the Metafield](#setting-up-the-metafield)
4. [Complete JSON Structure](#complete-json-structure)
5. [Section-by-Section Guide](#section-by-section-guide)
6. [Image URLs (Shopify CDN)](#image-urls-shopify-cdn)
7. [Working with Tabs](#working-with-tabs)
8. [Working with FAQ Categories](#working-with-faq-categories)
9. [Example JSON](#example-json)
10. [Troubleshooting](#troubleshooting)
11. [Quick Reference: Icon Names](#quick-reference-icon-names)

---

## Quick Start Summary

### How It All Works

```
┌─────────────────────────────────────────────────────────────────┐
│                    SHOPIFY PRODUCT                              │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  Metafield: custom.led_template_data (JSON)               │  │
│  │  ┌─────────────────────────────────────────────────────┐  │  │
│  │  │ {                                                   │  │  │
│  │  │   "hero": {...},                                    │  │  │
│  │  │   "technical_specs": [...],                         │  │  │
│  │  │   "applications": { "tabs": [...] },                │  │  │
│  │  │   "knowledge_center": { "categories": [...] }       │  │  │
│  │  │ }                                                   │  │  │
│  │  └─────────────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    LIQUID SECTIONS                              │
│                                                                 │
│   Each section reads:                                           │
│   1. First: Check metafield data                                │
│   2. Fallback: Use section settings/blocks                      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### One JSON, Multiple Sections

**Single Source of Truth:** All product data lives in ONE JSON metafield (`custom.led_template_data`)

| Section | JSON Key | Data Type |
|---------|----------|-----------|
| Hero | `hero` | Object with metrics array |
| Technical Specs | `technical_specs` + `technical_specs_header` | Array + Object |
| Experience Scale | `experience_scale` | Object with metrics array |
| System Config | `system_config` | Object with nested objects |
| Product Intelligence | `product_intelligence` | Object (header only) |
| Applications | `applications` | Object with `tabs` array |
| Controller | `controller` | Object (header only) |
| Config Builder | `config_builder` | Object (header only) |
| Knowledge Center | `knowledge_center` | Object with `categories` array |

### The Fallback Pattern

Every section uses this pattern:

```liquid
{% assign led_data = product.metafields.custom.led_template_data.value %}
{% assign section_data = led_data.hero %}

{% assign title = section_data.title | default: section.settings.title %}
```

**What this means:**
- If JSON has data → Use JSON data
- If JSON is empty → Use Theme Customizer settings
- **Result:** Works even without metafield configured

### Tab Sections Flow

For **Applications** and **Knowledge Center**, tabs/categories can come from JSON or Section Blocks:

```
┌─────────────────────────┐     ┌─────────────────────────┐
│   JSON Metafield        │ OR  │   Section Blocks        │
│   (Product-specific)    │     │   (Theme Customizer)    │
└─────────────────────────┘     └─────────────────────────┘
         │                               │
         │ tabs.size > 0?                │
         ▼                               ▼
    ┌────────┐                     ┌────────┐
    │  YES   │                     │   NO   │
    └────────┘                     └────────┘
         │                               │
         ▼                               ▼
   Use JSON tabs              Use section.blocks
```

### File Structure

```
LED-TEMPLATE/
├── templates/
│   └── product.led-template.json      # Template definition
├── sections/
│   ├── hero-video-wall.liquid         # Hero section
│   ├── technical-specs.liquid         # Specs grid
│   ├── experience-scale.liquid        # Scale comparison
│   ├── system-configuration.liquid    # Cabinet config
│   ├── product-intelligence.liquid    # Info tabs
│   ├── applications-tabs.liquid       # Use case tabs
│   ├── controller-tabs.liquid         # Controller tabs
│   ├── custom-config-builder.liquid   # Builder tool
│   └── knowledge-center.liquid        # FAQ accordion
├── LED-TEMPLATE-METAFIELD-GUIDE.md    # This documentation
└── led-template-example-data.json     # Ready-to-use JSON
```

### Quick Setup Steps

1. **Create Metafield Definition**
   - Shopify Admin → Settings → Custom data → Products
   - Add: `custom.led_template_data` (JSON type)

2. **Copy JSON** from `led-template-example-data.json`

3. **Paste into Product**
   - Products → Your LED Product → Metafields → LED Template Data

4. **Customize Values** for your specific product

### Important JSON Rules

| Do | Don't |
|----|-------|
| Use straight quotes `"` | Use smart quotes `"` `"` |
| Use `x` for dimensions (8x5) | Use `×` multiplication sign |
| Use plain numbers (178) | Use `°` degree symbol |
| Use `2` for squared (m2) | Use `²` superscript |
| Validate at jsonlint.com | Copy from Word/Google Docs |

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
| `tabs` | array | Array of tab objects (see below) |

#### Tab Object Structure:
| Field | Type | Description |
|-------|------|-------------|
| `tab_title` | string | Tab button text |
| `icon` | string | Icon: `monitor`, `briefcase`, `video`, `layout`, `store` |
| `heading` | string | Panel content heading |
| `description` | string | Main description text |
| `description2` | string | Secondary description (optional) |
| `image` | string | Shopify CDN URL for tab image |
| `stat1_label`, `stat1_value` | string | Stat overlay item 1 |
| `stat2_label`, `stat2_value` | string | Stat overlay item 2 |
| `stat3_label`, `stat3_value` | string | Stat overlay item 3 |
| `configs` | array | Array of `{label, value}` objects for configuration grid |
| `features` | array | Array of feature strings for "Why Pro Spectrum" list |

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

### 9. Knowledge Center (`knowledge-center.liquid`)

**Metafield Key:** `knowledge_center`

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Section title |
| `subtitle` | string | Section subtitle |
| `categories` | array | Array of FAQ category objects (see below) |

#### Category Object Structure:
| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Category accordion title |
| `icon` | string | Icon: `info`, `monitor`, `tool`, `headphones`, `truck`, `credit-card`, `handshake` |
| `filter` | string | Filter category: `all`, `product`, `support`, `shipping`, `payment`, `partnerships` |
| `questions` | array | Array of `{question, answer}` objects |

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

### Two Ways to Configure Tabs

Tab-based sections support **two configuration methods**:

1. **JSON Metafield (Recommended for different products)** - Configure tabs via the JSON metafield for product-specific content
2. **Section Blocks (Default fallback)** - Use Theme Customizer blocks as default/template content

### How It Works

The sections check for metafield data first, then fall back to section blocks:

```liquid
{% if apps_tabs.size > 0 %}
  {%- for tab in apps_tabs -%}
    <!-- Render tab from metafield -->
  {%- endfor -%}
{% else %}
  {%- for block in section.blocks -%}
    <!-- Fallback to section blocks -->
  {%- endfor -%}
{% endif %}
```

### Adding Tabs via JSON Metafield

For product-specific tab content, add the `tabs` array to your JSON:

```json
{
  "applications": {
    "title": "Built for Every Environment",
    "description": "Section description",
    "tabs": [
      {
        "tab_title": "Tab Name",
        "icon": "monitor",
        "heading": "Tab Heading",
        "description": "Main description",
        "configs": [
          { "label": "Label", "value": "Value" }
        ],
        "features": [
          "Feature 1",
          "Feature 2"
        ]
      }
    ]
  }
}
```

### Adding Tabs via Theme Customizer (Fallback)

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

## Working with FAQ Categories

The Knowledge Center section supports dynamic FAQ categories via JSON metafield.

### Two Ways to Configure FAQs

1. **JSON Metafield (Recommended)** - Configure categories and questions via the JSON metafield
2. **Section Blocks (Fallback)** - Use Theme Customizer blocks as default content

### Adding FAQ Categories via JSON

```json
{
  "knowledge_center": {
    "title": "Knowledge Center",
    "subtitle": "Everything you need to know",
    "categories": [
      {
        "title": "Category Title",
        "icon": "info",
        "filter": "all",
        "questions": [
          {
            "question": "Your question here?",
            "answer": "The answer to the question."
          },
          {
            "question": "Another question?",
            "answer": "Another answer."
          }
        ]
      }
    ]
  }
}
```

### Category Object Fields

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Accordion header title |
| `icon` | string | Icon name (see icon reference below) |
| `filter` | string | Filter category for navigation |
| `questions` | array | Array of question/answer objects |

### Available Icons for Categories

- `info` - Information/About
- `monitor` - Product/Technical
- `tool` - Installation/Setup
- `headphones` - Support
- `truck` - Shipping/Delivery
- `credit-card` - Payment/Pricing
- `handshake` - Partnerships

### Available Filter Categories

- `all` - Shows in all filters
- `product` - Product related questions
- `support` - Support & installation
- `shipping` - Shipping & delivery
- `payment` - Payment & pricing
- `partnerships` - Partner programs

---

## Example JSON

Here's a **complete example** for a 217" LED Video Wall with all sections fully configured:

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
    "description": "From boardrooms to broadcast studios, Pro Spectrum delivers uncompromising performance",
    "tabs": [
      {
        "tab_title": "Digital Signage",
        "icon": "monitor",
        "heading": "Digital Signage & Public Displays",
        "description": "Captivate audiences with stunning, attention-grabbing displays designed for high-traffic environments.",
        "description2": "Our digital signage solutions deliver consistent, vibrant imagery that cuts through ambient light and captures attention.",
        "image": "https://cdn.shopify.com/s/files/1/xxxx/xxxx/files/digital-signage.jpg",
        "stat1_label": "View Distance",
        "stat1_value": "10-50 feet",
        "stat2_label": "Typical Size",
        "stat2_value": "150-300\"",
        "stat3_label": "Environment",
        "stat3_value": "High-Traffic",
        "configs": [
          { "label": "Display Size", "value": "150\" to 300\"+" },
          { "label": "Resolution", "value": "Full HD to 4K" },
          { "label": "Brightness", "value": "600-1000 nits" },
          { "label": "Operation", "value": "24/7 Capable" }
        ],
        "features": [
          "24/7 operation with 100,000-hour lifespan",
          "Anti-reflective surface for bright environments",
          "CMS-ready for remote content management",
          "Energy-efficient operation reduces costs",
          "Wide viewing angles for public spaces"
        ]
      },
      {
        "tab_title": "Executive Boardrooms",
        "icon": "briefcase",
        "heading": "Executive Boardrooms & Conference Centers",
        "description": "Transform executive spaces with displays that command attention and elevate every presentation.",
        "description2": "Ultra-fine pixel pitch ensures crystal-clear detail for charts, graphics, and video conferencing.",
        "image": "https://cdn.shopify.com/s/files/1/xxxx/xxxx/files/boardroom.jpg",
        "stat1_label": "View Distance",
        "stat1_value": "6-20 feet",
        "stat2_label": "Typical Size",
        "stat2_value": "120-200\"",
        "stat3_label": "Environment",
        "stat3_value": "Professional",
        "configs": [
          { "label": "Display Size", "value": "120\" to 200\"" },
          { "label": "Resolution", "value": "4K UHD" },
          { "label": "Brightness", "value": "400-600 nits" },
          { "label": "Audio", "value": "Conference Integration" }
        ],
        "features": [
          "Silent operation for quiet meeting environments",
          "4K resolution for detailed financial data",
          "Video conferencing integration ready",
          "Low blue light mode for extended viewing",
          "Professional mounting solutions"
        ]
      },
      {
        "tab_title": "Broadcast Studios",
        "icon": "video",
        "heading": "Broadcast & Production Studios",
        "description": "Broadcast-quality visuals with exceptional color accuracy and high refresh rates for flicker-free camera capture.",
        "description2": "Perfect for news studios, live productions, and virtual sets where color precision matters.",
        "image": "https://cdn.shopify.com/s/files/1/xxxx/xxxx/files/broadcast.jpg",
        "stat1_label": "Refresh Rate",
        "stat1_value": "3840Hz",
        "stat2_label": "Color Depth",
        "stat2_value": "16-bit",
        "stat3_label": "Camera",
        "stat3_value": "Flicker-Free",
        "configs": [
          { "label": "Display Size", "value": "Custom configurations" },
          { "label": "Resolution", "value": "4K+ capable" },
          { "label": "Color", "value": "100% sRGB" },
          { "label": "Refresh", "value": "3840Hz" }
        ],
        "features": [
          "High refresh rate eliminates camera flicker",
          "Precise color calibration for broadcast standards",
          "HDR support for dynamic content",
          "Genlock synchronization available",
          "Virtual production ready"
        ]
      },
      {
        "tab_title": "Control Rooms",
        "icon": "layout",
        "heading": "Command & Control Centers",
        "description": "Mission-critical visualization for 24/7 monitoring environments where reliability is paramount.",
        "description2": "Display multiple data sources simultaneously with exceptional clarity and no bezels.",
        "image": "https://cdn.shopify.com/s/files/1/xxxx/xxxx/files/control-room.jpg",
        "stat1_label": "Operation",
        "stat1_value": "24/7",
        "stat2_label": "MTBF",
        "stat2_value": "100K hrs",
        "stat3_label": "Redundancy",
        "stat3_value": "Built-in",
        "configs": [
          { "label": "Display Size", "value": "Video wall arrays" },
          { "label": "Resolution", "value": "8K+ total" },
          { "label": "Windows", "value": "Unlimited sources" },
          { "label": "Uptime", "value": "99.99% SLA" }
        ],
        "features": [
          "Redundant power and signal paths",
          "Hot-swappable modules for zero downtime",
          "Multi-source windowing capability",
          "Network monitoring integration",
          "24/7 technical support available"
        ]
      },
      {
        "tab_title": "Retail Spaces",
        "icon": "store",
        "heading": "Retail & Commercial Environments",
        "description": "Drive engagement and sales with immersive displays that showcase products in stunning detail.",
        "description2": "From flagship stores to shopping malls, create memorable brand experiences.",
        "image": "https://cdn.shopify.com/s/files/1/xxxx/xxxx/files/retail.jpg",
        "stat1_label": "Impact",
        "stat1_value": "5x Engagement",
        "stat2_label": "ROI",
        "stat2_value": "18 months",
        "stat3_label": "Content",
        "stat3_value": "Dynamic",
        "configs": [
          { "label": "Display Size", "value": "Custom to space" },
          { "label": "Resolution", "value": "Scalable" },
          { "label": "CMS", "value": "Cloud-based" },
          { "label": "Analytics", "value": "Viewership data" }
        ],
        "features": [
          "High brightness for storefront visibility",
          "Dynamic content scheduling",
          "Touch integration available",
          "Analytics and audience measurement",
          "Energy-efficient operation"
        ]
      }
    ]
  },

  "controller": {
    "title": "Professional Control Solutions",
    "description": "Enterprise-grade video processing for demanding applications"
  },

  "config_builder": {
    "title": "Custom Configuration Builder",
    "description": "Design your perfect LED display setup"
  },

  "knowledge_center": {
    "title": "Knowledge Center",
    "subtitle": "Everything you need to know about Pro Spectrum LED displays",
    "categories": [
      {
        "title": "About Brightlink",
        "icon": "info",
        "filter": "all",
        "questions": [
          {
            "question": "How long has Brightlink been in business?",
            "answer": "Brightlink has been a trusted leader in LED display technology for over 15 years. We've installed thousands of displays worldwide, from corporate boardrooms to major broadcast studios."
          },
          {
            "question": "What makes Brightlink different from other LED manufacturers?",
            "answer": "We combine premium Korean-manufactured LED technology with US-based support and a comprehensive warranty. Our Pro Spectrum series uses the latest COB (Chip-on-Board) technology for superior reliability and image quality."
          },
          {
            "question": "Where are your products manufactured?",
            "answer": "Our LED displays are manufactured in state-of-the-art facilities in South Korea using premium components. Each display undergoes rigorous quality testing before shipping."
          }
        ]
      },
      {
        "title": "Product & Technical",
        "icon": "monitor",
        "filter": "product",
        "questions": [
          {
            "question": "What is pixel pitch and how do I choose the right one?",
            "answer": "Pixel pitch is the distance (in millimeters) between the center of one LED pixel to the center of the adjacent pixel. Smaller pixel pitch means higher resolution and closer optimal viewing distance. For boardrooms (6-15 feet), choose 1.2-1.5mm. For larger venues (15+ feet), 1.5-2.5mm works well."
          },
          {
            "question": "What is COB technology and why is it better?",
            "answer": "COB (Chip-on-Board) technology encapsulates the LEDs in a protective epoxy layer, making them more durable, easier to clean, and resistant to damage from touch or impact. This results in better reliability and a smoother surface appearance."
          },
          {
            "question": "How long do LED displays last?",
            "answer": "Our Pro Spectrum displays are rated for 100,000+ hours of operation, which translates to over 11 years of 24/7 use. The actual lifespan depends on brightness settings and environmental conditions."
          },
          {
            "question": "Can I use these displays outdoors?",
            "answer": "The Pro Spectrum series is designed for indoor use. For outdoor applications, we offer specialized outdoor LED solutions with higher brightness and weather-resistant designs. Contact us for outdoor options."
          },
          {
            "question": "What resolution can I achieve?",
            "answer": "Resolution depends on your display size and pixel pitch. Our 217\" 1.25mm display achieves true 4K (3840×2160) resolution. Larger configurations can achieve 8K or higher."
          }
        ]
      },
      {
        "title": "Installation & Setup",
        "icon": "tool",
        "filter": "support",
        "questions": [
          {
            "question": "Do you provide professional installation services?",
            "answer": "Yes! We offer nationwide professional installation services. Our certified technicians handle everything from site survey to final calibration. Installation is included with many configurations or available as an add-on."
          },
          {
            "question": "What are the power requirements?",
            "answer": "Power requirements vary by display size. A typical 217\" display requires approximately 2,400W at full brightness. We recommend dedicated circuits and can provide detailed electrical specifications for your installation."
          },
          {
            "question": "How long does installation take?",
            "answer": "Most installations are completed in a single day. The magnetic mounting system allows for quick cabinet assembly - a typical 217\" display can be installed in 2-4 hours by experienced technicians."
          },
          {
            "question": "What wall preparation is needed?",
            "answer": "The wall must support the display weight (approximately 200-400 lbs depending on size) and be flat within tolerance. We provide mounting brackets and can recommend structural reinforcement if needed."
          }
        ]
      },
      {
        "title": "Support & Warranty",
        "icon": "headphones",
        "filter": "support",
        "questions": [
          {
            "question": "What warranty is included?",
            "answer": "All Pro Spectrum displays include a comprehensive 3-year manufacturer warranty covering parts and labor. Extended warranty options up to 5 years are available at purchase."
          },
          {
            "question": "What if a cabinet or module fails?",
            "answer": "Our modular design allows for quick replacement. We maintain inventory of replacement parts and can ship overnight in most cases. Hot-swappable modules mean repairs can be done without taking down the entire display."
          },
          {
            "question": "Do you offer technical support?",
            "answer": "Yes, we provide US-based technical support via phone, email, and remote assistance. Business hours support is included; 24/7 premium support is available for mission-critical installations."
          }
        ]
      },
      {
        "title": "Shipping & Delivery",
        "icon": "truck",
        "filter": "shipping",
        "questions": [
          {
            "question": "How is the display shipped?",
            "answer": "Displays are carefully packaged in custom flight cases designed to protect each cabinet during transit. We use climate-controlled freight for domestic shipments."
          },
          {
            "question": "What is the typical delivery time?",
            "answer": "Standard configurations ship within 2-3 weeks. Custom configurations may require 4-6 weeks. Expedited shipping is available for urgent projects."
          },
          {
            "question": "Do you ship internationally?",
            "answer": "Yes, we ship worldwide. International orders may have different lead times and shipping costs. Contact us for a custom quote."
          }
        ]
      },
      {
        "title": "Payment & Pricing",
        "icon": "credit-card",
        "filter": "payment",
        "questions": [
          {
            "question": "What payment methods do you accept?",
            "answer": "We accept major credit cards, ACH bank transfers, wire transfers, and offer financing options through our partners. Purchase orders are accepted from qualified businesses."
          },
          {
            "question": "Do you offer financing?",
            "answer": "Yes, we partner with leading equipment financing companies to offer flexible payment plans. Terms from 12-60 months are available for qualified buyers. Contact sales for details."
          },
          {
            "question": "Can I get a custom quote?",
            "answer": "Absolutely! Contact our sales team for custom configurations, volume pricing, or special project requirements. We offer competitive pricing for large installations."
          }
        ]
      },
      {
        "title": "Partnerships",
        "icon": "handshake",
        "filter": "partnerships",
        "questions": [
          {
            "question": "Do you have a reseller program?",
            "answer": "Yes, we offer authorized reseller partnerships with competitive margins, sales support, and marketing resources. Contact our partnership team to apply."
          },
          {
            "question": "Do you work with AV integrators?",
            "answer": "We actively partner with AV integrators nationwide. Our integrator program includes technical training, dedicated support, and preferential pricing."
          },
          {
            "question": "Can you provide solutions for large commercial projects?",
            "answer": "Yes, we specialize in large-scale commercial installations. Our team can work with architects, designers, and general contractors from the planning phase through completion."
          }
        ]
      }
    ]
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

### Knowledge Center Category Icons:
- `info` - Information circle (About)
- `monitor` - Display icon (Product/Technical)
- `tool` - Wrench icon (Installation/Setup)
- `headphones` - Headset icon (Support)
- `truck` - Delivery truck (Shipping)
- `credit-card` - Credit card (Payment)
- `handshake` - Handshake icon (Partnerships)
