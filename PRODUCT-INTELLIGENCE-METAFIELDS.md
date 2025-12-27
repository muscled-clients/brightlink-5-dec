# Product Intelligence Section - Metafields Guide

This document outlines all metafields required for the Product Intelligence section.

**Naming Convention:** `pic_` prefix (Product Intelligence Content) + full descriptive words

---

## Summary

| Section | Metafields Count | Type |
|---------|------------------|------|
| Section Header | 3 | Text |
| Specifications Tab | 4 | JSON |
| What's Included Tab | 3 | List |
| Features Tab | 2 | List |
| Installation Tab | 10 | List + Text |
| Overview Tab | 4 | Mixed |
| Support Tab | 0 | Hardcoded |
| **Total** | **26** | - |

---

## Namespace

All metafields use namespace: `custom`

---

## Section Header (3 Metafields)

| Key | Type | Purpose | Example |
|-----|------|---------|---------|
| `pic_label` | single_line_text_field | Section label | "PRODUCT DETAILS" |
| `pic_heading` | single_line_text_field | Section heading | "Product Intelligence" |
| `pic_subheading` | single_line_text_field | Section sub-heading | "Everything you need to know about your LED display" |

---

## 1. Specifications Tab (4 JSON Metafields)

### 1.1 Display Specifications

| Key | Type | Fields Count |
|-----|------|--------------|
| `pic_specs_display` | json | 21 |

**JSON Structure:**
```json
{
  "pixel_pitch": "1.25mm",
  "led_type": "COB (Chip-on-Board)",
  "led_packaging": "TOP",
  "led_config": "1R 1G 1B",
  "module_resolution": "320 x 270 pixels (W×H)",
  "cabinet_resolution": "480 × 270 pixels (W×H)",
  "screen_resolution": "3840 × 2160 pixels (Full 4K)",
  "total_pixels": "8,294,400",
  "scanning_method": "S45",
  "refresh_rate": "≥3840Hz",
  "drive_mode": "1/43s",
  "brightness": "600cd/m² (Standard), 1000cd/m² (Optional)",
  "contrast_ratio": "≥8000:1",
  "colors": "281 Trillion",
  "gray_scale": "16-bit",
  "color_temp": "3000~9500K (Adjustable)",
  "luminance_uniformity": "≥98%",
  "chromatic_uniformity": "±0.003Cx,Cy",
  "viewing_angle": "170° Horizontal / 160° Vertical (>50%)",
  "view_distance": "2m - 50m (6' - 165')",
  "frame_rate": "50/60Hz"
}
```

### 1.2 Physical Specifications

| Key | Type | Fields Count |
|-----|------|--------------|
| `pic_specs_physical` | json | 15 |

**JSON Structure:**
```json
{
  "module_size": "150mm × 337.5mm (W×H)",
  "module_weight": "340g ±10g",
  "cabinet_size": "600mm × 337.5mm × 25mm (W×H×D)",
  "cabinet_size_imperial": "23.62\" × 13.3\" × 1\"",
  "cabinet_weight": "3.78kg (8.3 lbs)",
  "screen_dimensions": "4.8m × 2.7m (15.75' × 8.86')",
  "screen_diagonal": "217 Inches",
  "total_screen_area": "12.96m² (141 sq ft)",
  "cabinet_quantity": "64 units (8 wide × 8 high)",
  "modules_per_cabinet": "4 units (1 wide × 4 high)",
  "cabinet_material": "Die-Cast Aluminum",
  "aspect_ratio": "16:9",
  "installation_type": "Wall mount, stacking, or hanging",
  "service_access": "100% front serviceable",
  "protection_level": "IP30"
}
```

### 1.3 Electrical Specifications

| Key | Type | Fields Count |
|-----|------|--------------|
| `pic_specs_electrical` | json | 9 |

**JSON Structure:**
```json
{
  "input_voltage": "AC 100-240V, 50/60Hz",
  "supply_voltage": "DC 4.2V",
  "max_current": "4A",
  "peak_power": "≤350W/m²",
  "avg_power": "≤190W/m²",
  "power_interface": "Three-pole flat connector",
  "signal_interface": "RJ45 (Ethernet)",
  "control_mode": "Synchronous or Asynchronous",
  "receiver_card": "A10S-PLUS-N / A8S-N / A8S-PRO"
}
```

### 1.4 Environmental Specifications

| Key | Type | Fields Count |
|-----|------|--------------|
| `pic_specs_environmental` | json | 12 |

**JSON Structure:**
```json
{
  "operating_temp": "-20°C to +50°C (-4°F to 122°F)",
  "storage_temp": "-40°C to +70°C (-40°F to 158°F)",
  "operating_humidity": "10% - 95% RH (non-condensing)",
  "storage_humidity": "10% - 95% RH (non-condensing)",
  "lifespan": "≥100,000 hours",
  "mtbf": "≥10,000 hours",
  "certifications": "CE, RoHS, FCC, CCC, ISO9001",
  "waterproof": "Yes (sealed modules)",
  "dustproof": "Yes",
  "anti_oxidation": "Yes",
  "anti_static": "Yes",
  "anti_impact": "Yes (COB protective layer)"
}
```

---

## 2. What's Included Tab (3 List Metafields)

| Key | Type | Purpose |
|-----|------|---------|
| `pic_included_badges` | list.single_line_text_field | Badge labels |
| `pic_included_titles` | list.single_line_text_field | Item titles |
| `pic_included_descriptions` | list.single_line_text_field | Item descriptions |

**Example Values:**

| Index | Badge | Title | Description |
|-------|-------|-------|-------------|
| 0 | "64 Cabinets" | "Complete Cabinet Array" | "23.62\" × 13.3\" × 1\" interlocking cabinets..." |
| 1 | "Controller" | "NovaStar Controller" | "Industry-leading video processor..." |
| 2 | "Cables" | "Complete Cable Package" | "All required power and data cables..." |

---

## 3. Features Tab (2 List Metafields)

| Key | Type | Purpose |
|-----|------|---------|
| `pic_features_titles` | list.single_line_text_field | Feature titles |
| `pic_features_descriptions` | list.single_line_text_field | Feature descriptions |

**Example Values:**

| Index | Title | Description |
|-------|-------|-------------|
| 0 | "Quick Connect Locking System" | "Revolutionary cabinet assembly with our Quick Connect system..." |
| 1 | "Ultra-Slim Profile" | "Industry-leading slim design at just 25mm (1 inch) deep..." |
| 2 | "Integrated Power & Network Hub" | "Simplified cable management..." |

---

## 4. Installation Tab (10 Metafields)

### 4.1 Installation Steps (4 List Metafields)

| Key | Type | Purpose |
|-----|------|---------|
| `pic_install_step_numbers` | list.single_line_text_field | Step numbers |
| `pic_install_step_titles` | list.single_line_text_field | Step titles |
| `pic_install_step_descriptions` | list.single_line_text_field | Step descriptions |
| `pic_install_step_durations` | list.single_line_text_field | Step durations |

**Example Values:**

| Index | Number | Title | Description | Duration |
|-------|--------|-------|-------------|----------|
| 0 | "1" | "Site Preparation" | "Assess wall structure and electrical requirements..." | "2-3 hours" |
| 1 | "2" | "Mounting Structure" | "Install mounting brackets and support frame..." | "4-6 hours" |
| 2 | "3" | "Cabinet Installation" | "Begin cabinet installation from bottom-left..." | "6-8 hours" |

### 4.2 Installation Requirements (3 Text Metafields)

| Key | Type | Purpose |
|-----|------|---------|
| `pic_install_requirements_label` | single_line_text_field | Section header label |
| `pic_install_requirements_title` | single_line_text_field | Section title |
| `pic_install_requirements_description` | multi_line_text_field | Requirements description |

**Example Values:**
- Label: `"REQUIREMENTS"`
- Title: `"Installation Requirements"`
- Description: `"Professional installation recommended. Requires structural assessment, dedicated electrical circuit (20A minimum), and proper ventilation..."`

### 4.3 Need Professional Support (3 Text Metafields)

| Key | Type | Purpose |
|-----|------|---------|
| `pic_install_support_title` | single_line_text_field | Support section title |
| `pic_install_support_description` | single_line_text_field | Support description |
| `pic_install_support_button` | single_line_text_field | Button text |

**Example Values:**
- Title: `"Need Professional Installation?"`
- Description: `"Our certified installers ensure perfect setup and calibration"`
- Button: `"FIND AN INSTALLER"`

**Note:** Button link (`installer_link`) remains in theme customizer settings.

---

## 5. Overview Tab (4 Metafields)

| Key | Type | Purpose |
|-----|------|---------|
| `pic_overview_description` | multi_line_text_field | Main product description |
| `pic_overview_image` | file_reference | Product hero image |
| `pic_overview_card_titles` | list.single_line_text_field | Feature card titles (3 items) |
| `pic_overview_card_descriptions` | list.single_line_text_field | Feature card descriptions (3 items) |

**Example Values:**

**Description:**
```
Meet the Brightlink Pro Spectrum COB LED Video Wall in our 217" Diagonal configuration. This 15.75' × 8.86' masterpiece delivers 8,294,400 pixels at 1.25mm pitch — true 4K resolution with HDR support.

The Pro Spectrum represents the pinnacle of COB technology. True pixel-to-LED resolution, high dynamic range, and superior contrast deliver visuals that feel alive.
```

**Feature Cards:**

| Index | Title | Description |
|-------|-------|-------------|
| 0 | "4-Year Warranty" | "Comprehensive coverage for complete peace of mind" |
| 1 | "Lifetime Support" | "Expert technical assistance whenever you need it" |
| 2 | "Spare Parts" | "5% spare modules included with every system" |

---

## 6. Support Tab

### Approach: Keep Hardcoded

The Support & Resources tab contains company-wide information that doesn't change per product:
- Contact information
- Documentation links
- FAQ categories
- Resource downloads

**No metafields required** - content remains in theme template.

---

## Settings Kept in Theme Customizer

These settings remain in the section schema (not metafields):

| Tab | Setting | Purpose |
|-----|---------|---------|
| All Tabs | `tab_title` | Tab label text |
| All Tabs | `tab_icon` | Tab icon selection |
| Overview | `read_more_link` | Read more URL |
| Overview | `show_features` | Toggle feature cards |
| Specs | `download_link` | PDF download URL |
| Installation | `installer_link` | Find installer URL |

---

## Quick Reference - All Metafield Keys

```
# Section Header (3 Text)
custom.pic_label
custom.pic_heading
custom.pic_subheading

# Specifications Tab (4 JSON)
custom.pic_specs_display
custom.pic_specs_physical
custom.pic_specs_electrical
custom.pic_specs_environmental

# What's Included Tab (3 Lists)
custom.pic_included_badges
custom.pic_included_titles
custom.pic_included_descriptions

# Features Tab (2 Lists)
custom.pic_features_titles
custom.pic_features_descriptions

# Installation Tab (10 Mixed)
custom.pic_install_step_numbers
custom.pic_install_step_titles
custom.pic_install_step_descriptions
custom.pic_install_step_durations
custom.pic_install_requirements_label
custom.pic_install_requirements_title
custom.pic_install_requirements_description
custom.pic_install_support_title
custom.pic_install_support_description
custom.pic_install_support_button

# Overview Tab (4 Mixed)
custom.pic_overview_description
custom.pic_overview_image
custom.pic_overview_card_titles
custom.pic_overview_card_descriptions
```

---

## Total: 26 Metafields

| Type | Count |
|------|-------|
| JSON | 4 |
| list.single_line_text_field | 12 |
| single_line_text_field | 7 |
| multi_line_text_field | 2 |
| file_reference | 1 |
