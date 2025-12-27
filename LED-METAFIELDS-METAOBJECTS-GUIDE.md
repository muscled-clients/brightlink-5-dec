# LED Template - Metafields & Metaobjects Guide

This document outlines the recommended metafield and metaobject structure for the Brightlink LED product template.

---

## Table of Contents

1. [Overview](#overview)
2. [Metafields (Product-Specific)](#metafields-product-specific)
3. [Metaobjects (Shared/Global)](#metaobjects-sharedglobal)
4. [How to Set Up in Shopify Admin](#how-to-set-up-in-shopify-admin)
5. [Liquid Usage Examples](#liquid-usage-examples)

---

## Overview

### Metafields vs Metaobjects

| Type | Purpose | Example |
|------|---------|---------|
| **Metafields** | Data unique to each product | Screen size, pixel pitch, price |
| **Metaobjects** | Shared data across products | Controllers, warranties, certifications |

### Benefits

- **Single Source of Truth** - Update once, reflects everywhere
- **Easy Product Management** - Clone products, just update metafields
- **Consistent Data** - Same warranty/certification info on all products
- **Admin Friendly** - Edit in Shopify admin, no code changes needed
- **Scalable** - Add new products easily with same structure

---

## Metafields (Product-Specific)

These metafields store data unique to each LED product.

### Namespace: `led_specs`

Core technical specifications for the LED display.

| Key | Type | Description | Example Value |
|-----|------|-------------|---------------|
| `screen_size` | Single line text | Diagonal screen size | `217"` |
| `pixel_count` | Single line text | Total pixel count | `8.3M` |
| `pixel_count_full` | Single line text | Full pixel count number | `8,294,400` |
| `pixel_pitch` | Single line text | Pixel pitch in mm | `1.25mm` |
| `resolution` | Single line text | Display resolution | `3840 x 2160` |
| `resolution_label` | Single line text | Resolution marketing name | `True 4K UHD` |
| `refresh_rate` | Single line text | Refresh rate in Hz | `3840Hz` |
| `brightness_min` | Single line text | Minimum brightness | `600` |
| `brightness_max` | Single line text | Maximum brightness | `1000` |
| `brightness_unit` | Single line text | Brightness unit | `nits` |
| `contrast_ratio` | Single line text | Contrast ratio | `8000:1` |
| `viewing_angle` | Single line text | Viewing angle in degrees | `170°` |
| `lifespan_hours` | Single line text | Lifespan in hours | `100,000` |
| `installation_time` | Single line text | Typical installation time | `2-4 hours` |
| `color_depth` | Single line text | Color bit depth | `10-bit` |
| `color_count` | Single line text | Number of colors | `281 trillion` |

---

### Namespace: `led_cabinet`

Cabinet and array configuration details.

| Key | Type | Description | Example Value |
|-----|------|-------------|---------------|
| `total_cabinets` | Integer | Total number of cabinets | `64` |
| `array_columns` | Integer | Columns in array | `8` |
| `array_rows` | Integer | Rows in array | `8` |
| `cabinet_width_mm` | Single line text | Cabinet width in mm | `600mm` |
| `cabinet_height_mm` | Single line text | Cabinet height in mm | `337.5mm` |
| `cabinet_depth_mm` | Single line text | Cabinet depth in mm | `25mm` |
| `cabinet_width_in` | Single line text | Cabinet width in inches | `23.62"` |
| `cabinet_height_in` | Single line text | Cabinet height in inches | `13.3"` |
| `cabinet_depth_in` | Single line text | Cabinet depth in inches | `1"` |
| `cabinet_weight_kg` | Single line text | Cabinet weight in kg | `3.7kg` |
| `cabinet_weight_lb` | Single line text | Cabinet weight in lbs | `8.3 lbs` |
| `cabinet_resolution` | Single line text | Pixels per cabinet | `480 × 270` |
| `cabinet_modules` | Single line text | Modules per cabinet | `4 COB modules` |
| `total_weight_kg` | Single line text | Total system weight kg | `237kg` |
| `total_weight_lb` | Single line text | Total system weight lbs | `522 lbs` |

---

### Namespace: `led_pricing`

Pricing and availability information.

| Key | Type | Description | Example Value |
|-----|------|-------------|---------------|
| `original_price` | Single line text | Original/list price | `$179,000` |
| `current_price` | Single line text | Current selling price | `$149,000` |
| `discount_amount` | Single line text | Discount amount | `$30,000` |
| `discount_percent` | Single line text | Discount percentage | `SAVE 17%` |
| `shipping_time` | Single line text | Shipping/lead time | `10-12 weeks` |
| `leasing_monthly` | Single line text | Monthly leasing rate | `$2,100/month` |
| `controller_value` | Single line text | Included controller value | `$8,500` |

---

### Namespace: `led_scale`

Scale comparison metrics for Experience Scale section.

| Key | Type | Description | Example Value |
|-----|------|-------------|---------------|
| `scale_multiplier` | Single line text | Size comparison multiplier | `36x` |
| `scale_comparison` | Single line text | What it's compared to | `Larger than a 65" TV` |
| `diagonal_feet` | Single line text | Diagonal in feet | `17'` |
| `square_footage` | Single line text | Total square footage | `141 sq ft` |
| `equivalent_displays` | Single line text | Equivalent TV count | `4× 65" TVs` |

---

### Namespace: `led_features`

Feature highlights and competitive advantages.

| Key | Type | Description | Example Value |
|-----|------|-------------|---------------|
| `feature_1_value` | Single line text | First feature value | `2-4 HOURS` |
| `feature_1_label` | Single line text | First feature label | `Complete Installation` |
| `feature_1_comparison` | Single line text | Industry comparison | `Industry Standard: 3 Days` |
| `feature_2_value` | Single line text | Second feature value | `100% FLAT` |
| `feature_2_label` | Single line text | Second feature label | `True Flat Surface` |
| `feature_3_value` | Single line text | Third feature value | `100,000 HRS` |
| `feature_3_label` | Single line text | Third feature label | `Lifespan Guarantee` |

---

### Namespace: `led_media`

Product images and videos.

| Key | Type | Description | Example Value |
|-----|------|-------------|---------------|
| `hero_video` | File reference | Hero section video | `hero-video.mp4` |
| `product_3d_image` | File reference | 3D product render | `led-3d-render.png` |
| `cabinet_image` | File reference | Cabinet detail image | `cabinet-detail.png` |
| `connection_image` | File reference | Connection detail image | `connection.png` |
| `scale_image` | File reference | Scale comparison image | `scale-room.png` |

---

## Metaobjects (Shared/Global)

These metaobjects store data shared across multiple products.

---

### 1. Controllers

**Definition Name:** `controller`
**API Identifier:** `controller`
**Description:** Video wall controllers compatible with LED displays

#### Fields

| Field Name | API Key | Type | Required | Description |
|------------|---------|------|----------|-------------|
| Name | `name` | Single line text | Yes | Controller model name |
| Description | `description` | Multi-line text | No | Full description |
| Short Description | `short_description` | Single line text | No | Brief tagline |
| Price | `price` | Single line text | No | Controller price |
| Image | `image` | File | No | Product image |
| Pixel Capacity | `pixel_capacity` | Single line text | No | Max pixels supported |
| Max Layers | `max_layers` | Single line text | No | Maximum layers |
| HDR Support | `hdr_support` | Boolean | No | HDR10/HLG support |
| Color Depth | `color_depth` | Single line text | No | Color processing depth |
| Features | `features` | JSON | No | Array of features |
| Inputs | `inputs` | JSON | No | Array of input types |
| Outputs | `outputs` | Single line text | No | Output configuration |
| Spec Sheet URL | `spec_sheet_url` | URL | No | Download link |

#### Sample Entries

**Entry 1: NovaStar H2**
```json
{
  "name": "NovaStar H2",
  "description": "The NovaStar H2 is a powerful, modular video wall splicing processor designed specifically for fine-pitch LED displays. With 26 million pixels of processing capacity and hot-swappable I/O cards, it supports HDMI, DVI, DisplayPort, SDI, VGA, and IP inputs.",
  "short_description": "Enterprise-grade processing power for mission-critical installations",
  "price": "$8,500",
  "pixel_capacity": "26 million pixels",
  "max_layers": "32 layers",
  "hdr_support": true,
  "color_depth": "10-bit",
  "features": [
    "26 million pixel processing capacity",
    "Up to 32 layers and multiple screens",
    "HDR10 and HLG support",
    "Hot-swappable modular I/O design",
    "10-bit color processing",
    "Web-based control interface",
    "Real-time monitoring and diagnostics"
  ],
  "inputs": [
    "4× Full HD (1080p) input cards",
    "1× HDMI 2.0 input card (4K@60Hz)",
    "DisplayPort 1.4 support",
    "SDI input options"
  ],
  "outputs": "32× CAT6 Ethernet outputs (2×16-port cards)"
}
```

**Entry 2: NovaStar H5**
```json
{
  "name": "NovaStar H5",
  "description": "Advanced video processor for large-scale LED installations with enhanced processing capabilities.",
  "price": "$12,500",
  "pixel_capacity": "40 million pixels",
  "max_layers": "64 layers",
  "hdr_support": true,
  "color_depth": "12-bit"
}
```

---

### 2. Warranty Plans

**Definition Name:** `warranty_plan`
**API Identifier:** `warranty_plan`
**Description:** Warranty and protection plans for LED displays

#### Fields

| Field Name | API Key | Type | Required | Description |
|------------|---------|------|----------|-------------|
| Name | `name` | Single line text | Yes | Warranty plan name |
| Duration | `duration` | Single line text | Yes | Coverage duration |
| Price | `price` | Single line text | No | Additional cost |
| Is Default | `is_default` | Boolean | No | Included with purchase |
| Coverage Items | `coverage` | JSON | No | What's covered |
| Description | `description` | Multi-line text | No | Full description |

#### Sample Entries

**Entry 1: 4-Year Comprehensive (Default)**
```json
{
  "name": "4-Year Comprehensive Warranty",
  "duration": "4 years",
  "price": "Included",
  "is_default": true,
  "coverage": [
    "All parts and components",
    "Labor and service calls",
    "On-site technician visits",
    "Priority technical support",
    "Firmware updates"
  ],
  "description": "Our standard comprehensive warranty covers all aspects of your LED display system for complete peace of mind."
}
```

**Entry 2: 7-Year Extended**
```json
{
  "name": "7-Year Extended Warranty",
  "duration": "7 years",
  "price": "+$4,500",
  "is_default": false,
  "coverage": [
    "Everything in 4-Year plan",
    "Extended parts coverage",
    "Priority response time",
    "Annual preventive maintenance",
    "Loaner equipment if needed"
  ],
  "description": "Extend your coverage to 7 years for maximum protection and peace of mind on your investment."
}
```

---

### 3. Add-Ons / Accessories

**Definition Name:** `addon`
**API Identifier:** `addon`
**Description:** Optional add-ons and accessories for LED systems

#### Fields

| Field Name | API Key | Type | Required | Description |
|------------|---------|------|----------|-------------|
| Name | `name` | Single line text | Yes | Add-on name |
| Description | `description` | Multi-line text | No | Full description |
| Price | `price` | Single line text | Yes | Price |
| Image | `image` | File | No | Product image |
| Icon | `icon` | Single line text | No | Icon identifier |
| Button Text | `button_text` | Single line text | No | CTA button text |
| SKU | `sku` | Single line text | No | Product SKU |
| Category | `category` | Single line text | No | Category (tool, warranty, parts) |

#### Sample Entries

**Entry 1: Vacuum Tool**
```json
{
  "name": "BL-VT PRO VACUUM TOOL",
  "description": "Professional LED module vacuum tool for effortless front maintenance and module replacement. Essential for service teams.",
  "price": "$249",
  "icon": "tool",
  "button_text": "ADD TO ORDER",
  "category": "tool"
}
```

**Entry 2: Extended Warranty**
```json
{
  "name": "EXTENDED WARRANTY",
  "description": "Extend comprehensive warranty coverage from 4 years to 7 years. Includes all parts, labor, and priority support.",
  "price": "+$4,500",
  "icon": "shield",
  "button_text": "ADD PROTECTION",
  "category": "warranty"
}
```

**Entry 3: Spare Module Kit**
```json
{
  "name": "SPARE MODULE KIT",
  "description": "Additional 10% spare COB LED modules beyond standard 5%. Recommended for mission-critical installations.",
  "price": "+$8,900",
  "icon": "package",
  "button_text": "ADD SPARES",
  "category": "parts"
}
```

---

### 4. Certifications

**Definition Name:** `certification`
**API Identifier:** `certification`
**Description:** Product certifications and compliance standards

#### Fields

| Field Name | API Key | Type | Required | Description |
|------------|---------|------|----------|-------------|
| Name | `name` | Single line text | Yes | Short name (CE, FCC) |
| Full Name | `full_name` | Single line text | No | Full certification name |
| Description | `description` | Single line text | No | Brief description |
| Icon/Logo | `logo` | File | No | Certification logo |
| Region | `region` | Single line text | No | Geographic region |

#### Sample Entries

```json
[
  {
    "name": "CE",
    "full_name": "Conformité Européenne",
    "description": "European safety and environmental certification",
    "region": "Europe"
  },
  {
    "name": "RoHS",
    "full_name": "Restriction of Hazardous Substances",
    "description": "Restricts hazardous materials in electronics",
    "region": "Global"
  },
  {
    "name": "FCC",
    "full_name": "Federal Communications Commission",
    "description": "US electromagnetic compatibility certification",
    "region": "United States"
  },
  {
    "name": "ISO9001",
    "full_name": "ISO 9001:2015",
    "description": "Quality management system certification",
    "region": "Global"
  }
]
```

---

### 5. Trusted Companies

**Definition Name:** `trusted_company`
**API Identifier:** `trusted_company`
**Description:** Companies/organizations that use Brightlink products

#### Fields

| Field Name | API Key | Type | Required | Description |
|------------|---------|------|----------|-------------|
| Name | `name` | Single line text | Yes | Company name |
| Logo | `logo` | File | No | Company logo |
| Link | `link` | URL | No | Company website |
| Industry | `industry` | Single line text | No | Industry category |
| Order | `display_order` | Integer | No | Display order |

#### Sample Entries

```json
[
  { "name": "SpaceX", "industry": "Aerospace", "display_order": 1 },
  { "name": "University of Hawaii", "industry": "Education", "display_order": 2 },
  { "name": "Epic Games", "industry": "Gaming", "display_order": 3 },
  { "name": "City of Mesa", "industry": "Government", "display_order": 4 }
]
```

---

### 6. Application Use Cases

**Definition Name:** `application`
**API Identifier:** `application`
**Description:** Industry applications and use cases for LED displays

#### Fields

| Field Name | API Key | Type | Required | Description |
|------------|---------|------|----------|-------------|
| Title | `title` | Single line text | Yes | Application name |
| Icon | `icon` | Single line text | Yes | Icon identifier |
| Heading | `heading` | Single line text | No | Section heading |
| Description | `description` | Multi-line text | No | Main description |
| Description 2 | `description_2` | Multi-line text | No | Secondary description |
| Image | `image` | File | No | Application image |
| Viewing Distance | `viewing_distance` | Single line text | No | Recommended viewing |
| Typical Size | `typical_size` | Single line text | No | Typical display size |
| Environment | `environment` | Single line text | No | Environment type |
| Features | `features` | JSON | No | Array of features |
| Configurations | `configurations` | JSON | No | Array of config options |
| Display Order | `display_order` | Integer | No | Tab order |

#### Sample Entry

```json
{
  "title": "Digital Signage",
  "icon": "monitor",
  "heading": "Digital Signage & Public Displays",
  "description": "Captivate audiences in high-traffic environments with vibrant, attention-grabbing displays. Pro Spectrum's 8000:1 contrast ratio and 281 trillion colors ensure your content stands out in any lighting condition.",
  "description_2": "Ideal for corporate lobbies, museums, transportation hubs, and public spaces where visual impact drives engagement.",
  "viewing_distance": "10-30 feet",
  "typical_size": "150-300\"",
  "environment": "High-Traffic",
  "features": [
    "24/7 operation with 100,000-hour lifespan",
    "Anti-reflective surface for bright environments",
    "CMS-ready for remote content management",
    "Energy efficient (<190W/m² average)",
    "Impact-resistant COB technology",
    "Wide viewing angles for passing traffic"
  ],
  "configurations": [
    { "label": "Size", "value": "4×3 to 12×8 arrays" },
    { "label": "Resolution", "value": "1.7M to 15.8M pixels" },
    { "label": "Brightness", "value": "1000 nits (optional)" },
    { "label": "Controller", "value": "Novastar H2/H5" },
    { "label": "Mounting", "value": "Recessed or freestanding" },
    { "label": "Integration", "value": "CMS & scheduling systems" }
  ],
  "display_order": 1
}
```

---

### 7. FAQ Categories

**Definition Name:** `faq_category`
**API Identifier:** `faq_category`
**Description:** FAQ categories with questions and answers

#### Fields

| Field Name | API Key | Type | Required | Description |
|------------|---------|------|----------|-------------|
| Title | `title` | Single line text | Yes | Category name |
| Icon | `icon` | Single line text | No | Icon identifier |
| Filter Key | `filter_key` | Single line text | No | Filter identifier |
| Questions | `questions` | JSON | No | Array of Q&A objects |
| Display Order | `display_order` | Integer | No | Category order |

#### Sample Entry

```json
{
  "title": "Product & Technical",
  "icon": "monitor",
  "filter_key": "product",
  "questions": [
    {
      "question": "What is pixel pitch and why does it matter?",
      "answer": "Pixel pitch is the distance between LED pixels measured in millimeters. Smaller pixel pitch means higher resolution and better image quality for closer viewing distances."
    },
    {
      "question": "How long do Brightlink LED displays last?",
      "answer": "Our LED displays are designed to last 100,000+ hours of operation with proper maintenance and care."
    },
    {
      "question": "What is COB technology?",
      "answer": "COB (Chip-on-Board) technology directly mounts LED chips to the PCB without individual packaging, resulting in better heat dissipation, higher reliability, and superior image quality."
    }
  ],
  "display_order": 2
}
```

---

### 8. System Includes

**Definition Name:** `system_include`
**API Identifier:** `system_include`
**Description:** Items included with the LED system purchase

#### Fields

| Field Name | API Key | Type | Required | Description |
|------------|---------|------|----------|-------------|
| Item | `item` | Single line text | Yes | Item description |
| Icon | `icon` | Single line text | No | Icon type |
| Value | `value` | Single line text | No | Value if applicable |
| Display Order | `display_order` | Integer | No | Display order |

#### Sample Entries

```json
[
  { "item": "64 premium cabinets (8×8 array)", "display_order": 1 },
  { "item": "Complete cable package + spares", "display_order": 2 },
  { "item": "Service tools (suction + vacuum)", "display_order": 3 },
  { "item": "4-year comprehensive warranty", "display_order": 4 },
  { "item": "NovaStar H2 controller ($8,500 value)", "display_order": 5 },
  { "item": "Professional mounting system", "display_order": 6 },
  { "item": "5% spare modules included", "display_order": 7 },
  { "item": "Lifetime technical support", "display_order": 8 }
]
```

---

### 9. Company Info

**Definition Name:** `company_info`
**API Identifier:** `company_info`
**Description:** Company contact and information (single entry)

#### Fields

| Field Name | API Key | Type | Required | Description |
|------------|---------|------|----------|-------------|
| Phone | `phone` | Single line text | No | Phone number |
| Email | `email` | Single line text | No | Email address |
| Hours | `hours` | Single line text | No | Business hours |
| Founded Year | `founded_year` | Single line text | No | Year established |
| Tagline | `tagline` | Single line text | No | Company tagline |
| Address | `address` | Multi-line text | No | Physical address |

#### Sample Entry

```json
{
  "phone": "855-449-4733",
  "email": "support@brightlinkav.com",
  "hours": "Mon-Fri 7AM-5PM PST",
  "founded_year": "2009",
  "tagline": "Established Excellence"
}
```

---

## How to Set Up in Shopify Admin

### Setting Up Metafields

1. Go to **Settings** → **Custom data**
2. Click **Products**
3. Click **Add definition**
4. Enter:
   - **Name**: e.g., "Screen Size"
   - **Namespace and key**: e.g., `led_specs.screen_size`
   - **Type**: Select appropriate type
5. Save and repeat for each metafield

### Setting Up Metaobjects

1. Go to **Settings** → **Custom data**
2. Click **Metaobjects**
3. Click **Add definition**
4. Enter definition name (e.g., "Controller")
5. Add all fields as defined above
6. Save the definition
7. Click **Add entry** to create entries

### Connecting Metaobjects to Products

1. Create a metafield on Products with type **Metaobject reference**
2. Namespace: `led_references`
3. Key: `controller` (or `warranty`, etc.)
4. Select the metaobject type to reference

---

## Liquid Usage Examples

### Accessing Product Metafields

```liquid
{% comment %} Basic metafield access {% endcomment %}
{{ product.metafields.led_specs.screen_size }}
{{ product.metafields.led_specs.pixel_pitch }}
{{ product.metafields.led_cabinet.total_cabinets }}
{{ product.metafields.led_pricing.current_price }}

{% comment %} With fallback values {% endcomment %}
{{ product.metafields.led_specs.screen_size | default: '217"' }}

{% comment %} Conditional display {% endcomment %}
{% if product.metafields.led_specs.screen_size %}
  <span class="screen-size">{{ product.metafields.led_specs.screen_size }}</span>
{% endif %}
```

### Accessing Metaobject References

```liquid
{% comment %} Access referenced controller {% endcomment %}
{% assign controller = product.metafields.led_references.controller.value %}
{{ controller.name }}
{{ controller.price }}
{{ controller.pixel_capacity }}

{% comment %} Loop through features array {% endcomment %}
{% for feature in controller.features.value %}
  <li>{{ feature }}</li>
{% endfor %}
```

### Accessing Global Metaobjects

```liquid
{% comment %} Loop through all controllers {% endcomment %}
{% for controller in shop.metaobjects.controller.values %}
  <div class="controller-card">
    <h3>{{ controller.name }}</h3>
    <p>{{ controller.description }}</p>
    <span>{{ controller.price }}</span>
  </div>
{% endfor %}

{% comment %} Loop through trusted companies {% endcomment %}
{% for company in shop.metaobjects.trusted_company.values %}
  <span class="company">{{ company.name }}</span>
{% endfor %}

{% comment %} Loop through certifications {% endcomment %}
{% for cert in shop.metaobjects.certification.values %}
  <span class="cert-badge">{{ cert.name }}</span>
{% endfor %}
```

### Hero Section Example

```liquid
<section class="hero">
  <h1>{{ product.metafields.led_specs.screen_size }} COB LED Video Wall</h1>

  <div class="hero-stats">
    <div class="stat">
      <span class="value">{{ product.metafields.led_specs.screen_size }}</span>
      <span class="label">Diagonal Display</span>
    </div>
    <div class="stat">
      <span class="value">{{ product.metafields.led_specs.pixel_count }}</span>
      <span class="label">Total Pixels</span>
    </div>
    <div class="stat">
      <span class="value">{{ product.metafields.led_specs.pixel_pitch }}</span>
      <span class="label">Pixel Pitch</span>
    </div>
    <div class="stat">
      <span class="value">{{ product.metafields.led_specs.installation_time }}</span>
      <span class="label">Installation Time</span>
    </div>
  </div>
</section>
```

### Investment Config Example

```liquid
{% assign controller = product.metafields.led_references.controller.value %}

<section class="investment-config">
  <div class="pricing-card">
    <h3>{{ product.title }}</h3>
    <p>{{ product.metafields.led_specs.pixel_count_full }} Pixels |
       {{ product.metafields.led_specs.pixel_pitch }} Pitch |
       {{ product.metafields.led_specs.resolution_label }}</p>

    <div class="pricing">
      <span class="original">{{ product.metafields.led_pricing.original_price }}</span>
      <span class="discount">{{ product.metafields.led_pricing.discount_percent }}</span>
      <span class="current">{{ product.metafields.led_pricing.current_price }}</span>
    </div>

    <div class="includes">
      <h4>Complete System Includes:</h4>
      <ul>
        <li>{{ product.metafields.led_cabinet.total_cabinets }} premium cabinets
            ({{ product.metafields.led_cabinet.array_columns }}×{{ product.metafields.led_cabinet.array_rows }} array)</li>
        <li>{{ controller.name }} controller ({{ controller.price }} value)</li>
        {% for item in shop.metaobjects.system_include.values %}
          <li>{{ item.item }}</li>
        {% endfor %}
      </ul>
    </div>
  </div>
</section>
```

---

## Visual Data Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                    SHOPIFY ADMIN                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  METAOBJECTS (Settings → Custom data → Metaobjects)             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐              │
│  │ Controllers │  │ Warranties  │  │  Add-ons    │              │
│  │ - H2        │  │ - 4-Year    │  │ - Vacuum    │              │
│  │ - H5        │  │ - 7-Year    │  │ - Spares    │              │
│  └──────┬──────┘  └──────┬──────┘  └─────────────┘              │
│         │                │                                       │
│         │  Referenced by │                                       │
│         ▼                ▼                                       │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │              PRODUCT: LED Wall 217"                      │    │
│  │                                                          │    │
│  │  METAFIELDS (unique values):                            │    │
│  │  • led_specs.screen_size = "217\""                      │    │
│  │  • led_specs.pixel_pitch = "1.25mm"                     │    │
│  │  • led_cabinet.total_cabinets = 64                      │    │
│  │  • led_pricing.current_price = "$149,000"               │    │
│  │                                                          │    │
│  │  REFERENCES (to metaobjects):                           │    │
│  │  • led_references.controller → NovaStar H2              │    │
│  │  • led_references.warranty → 4-Year Comprehensive       │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    LIQUID TEMPLATES                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  {{ product.metafields.led_specs.screen_size }}                 │
│  {{ product.metafields.led_references.controller.value.name }}  │
│  {{ shop.metaobjects.certification.values }}                    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    LED TEMPLATE PAGE                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  HERO: 217" COB LED Video Wall                          │    │
│  │  Stats: 8.3M Pixels | 1.25mm | 2-4 hrs install         │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  TECH SPECS: Resolution, Brightness, Contrast...        │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  CONTROLLER: NovaStar H2 - $8,500 value                 │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  PRICING: $149,000 (Save 17%)                           │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Next Steps

1. **Create metafield definitions** in Shopify Admin
2. **Create metaobject definitions** with all fields
3. **Populate metaobject entries** (controllers, warranties, etc.)
4. **Add metafield values** to each LED product
5. **Update Liquid sections** to read from metafields/metaobjects
6. **Test** all sections display correctly

---

*Document created: December 2024*
*For: Brightlink LED Product Template*
