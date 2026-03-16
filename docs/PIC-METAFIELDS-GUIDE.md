# Product Intelligence Center (PIC) Metafields Guide

This document provides a complete reference for all metafields used in the Product Intelligence Center section of the Brightlink LED Product theme.

---

## Overview

- **Namespace:** `custom`
- **Prefix:** `pic_` (Product Intelligence Content)
- **Total Metafields:** 37

---

## Table of Contents

1. [Section Header](#1-section-header)
2. [Overview Tab](#2-overview-tab)
3. [Specifications Tab](#3-specifications-tab)
4. [Features Tab](#4-features-tab)
5. [What's Included Tab](#5-whats-included-tab)
6. [Installation Tab](#6-installation-tab)
7. [Support Tab](#7-support-tab)
8. [Complete JSON Data](#8-complete-json-data)

---

## 1. Section Header

Controls the main header of the Product Intelligence section.

| Metafield Key | Type | Description |
|---------------|------|-------------|
| `pic_label` | Single line text | Gold label above heading (e.g., "PRODUCT INTELLIGENCE") |
| `pic_heading` | Single line text | Main section heading |
| `pic_subheading` | Multi-line text | Description text below heading |

### JSON Format

```json
{
  "pic_label": "PRODUCT INTELLIGENCE",
  "pic_heading": "Everything You Need to Know",
  "pic_subheading": "Comprehensive specifications, installation guides, and support resources for your Pro Spectrum LED video wall system."
}
```

---

## 2. Overview Tab

Controls the Overview tab content including description, image, and feature cards.

| Metafield Key | Type | Description |
|---------------|------|-------------|
| `pic_overview_description` | Multi-line text | Main description paragraphs |
| `pic_overview_image` | File reference (image) | Product image displayed on right |
| `pic_overview_card_titles` | List of single line text | Feature card titles (3 cards) |
| `pic_overview_card_descriptions` | List of single line text | Feature card descriptions |

### JSON Format

```json
{
  "pic_overview_description": "Meet the Brightlink Pro Spectrum COB LED Video Wall in our 217\" Diagonal configuration. This 15.75' x 8.86' masterpiece delivers 8,294,400 pixels at 1.25mm pitch - true 4K resolution with HDR support.\n\nThe Pro Spectrum represents the pinnacle of COB technology. True pixel-to-LED resolution, high dynamic range, and superior contrast deliver visuals that feel alive.",
  "pic_overview_image": "[Upload product image]",
  "pic_overview_card_titles": [
    "4-Year Warranty",
    "Lifetime Support",
    "5% Spare Parts"
  ],
  "pic_overview_card_descriptions": [
    "Comprehensive coverage",
    "855-449-4733",
    "Included standard"
  ]
}
```

---

## 3. Specifications Tab

Controls the technical specifications displayed in a tabbed format. All specification metafields use JSON format for structured data.

| Metafield Key | Type | Description |
|---------------|------|-------------|
| `pic_specs_display` | JSON | Display specifications (resolution, brightness, etc.) |
| `pic_specs_physical` | JSON | Physical specifications (dimensions, weight, etc.) |
| `pic_specs_electrical` | JSON | Electrical specifications (power, voltage, etc.) |
| `pic_specs_environmental` | JSON | Environmental specifications (temperature, humidity, etc.) |

### JSON Format

#### pic_specs_display
```json
{
  "Pixel Pitch": "1.25mm",
  "Resolution": "3840 × 2160 (4K UHD)",
  "Total Pixels": "8,294,400",
  "Brightness": "600 nits (calibrated)",
  "Contrast Ratio": "10,000:1",
  "Refresh Rate": "3840Hz",
  "Color Depth": "16-bit processing",
  "Viewing Angle": "170° H / 170° V",
  "HDR Support": "HDR10, HLG"
}
```

#### pic_specs_physical
```json
{
  "Display Size": "217\" diagonal (15.75' × 8.86')",
  "Cabinet Size": "600mm × 337.5mm × 25mm",
  "Array Configuration": "8 × 8 cabinets (64 total)",
  "Total Weight": "384 lbs (6 lbs per cabinet)",
  "Panel Thickness": "25mm (0.98\")",
  "Bezel Width": "Seamless (0mm)",
  "Installation Type": "Wall mount / Floor stand",
  "Serviceability": "Front-access magnetic modules"
}
```

#### pic_specs_electrical
```json
{
  "Power Consumption": "Average: 180W/m² | Max: 540W/m²",
  "Total System Power": "2,520W average | 7,560W max",
  "Input Voltage": "100-240V AC, 50/60Hz",
  "Power Redundancy": "Dual power input per cabinet",
  "Power Factor": "> 0.95",
  "BTU Output": "8,600 BTU/hr (average)",
  "Standby Power": "< 0.5W per cabinet"
}
```

#### pic_specs_environmental
```json
{
  "Operating Temperature": "0°C to 40°C (32°F to 104°F)",
  "Storage Temperature": "-20°C to 60°C (-4°F to 140°F)",
  "Operating Humidity": "10% - 80% RH (non-condensing)",
  "IP Rating": "IP30 (indoor use)",
  "Noise Level": "< 35dB (fanless design)",
  "MTBF": "> 100,000 hours",
  "Certifications": "CE, FCC, UL, RoHS"
}
```

---

## 4. Features Tab

Controls the Features tab with feature cards displayed in a grid.

| Metafield Key | Type | Description |
|---------------|------|-------------|
| `pic_features_titles` | List of single line text | Feature card titles |
| `pic_features_descriptions` | List of single line text | Feature card descriptions |

### JSON Format

```json
{
  "pic_features_titles": [
    "COB Technology",
    "True 4K Resolution",
    "HDR10 Support",
    "Ultra-Wide Viewing Angle",
    "Seamless Design",
    "Front Serviceability"
  ],
  "pic_features_descriptions": [
    "Chip-on-Board technology delivers superior image quality with enhanced durability and heat dissipation.",
    "8.3 million pixels at 1.25mm pitch for crystal-clear detail visible from any distance.",
    "High Dynamic Range support for vivid colors and realistic contrast in any content.",
    "170° horizontal and vertical viewing ensures perfect visibility from every seat.",
    "Zero bezel design creates a continuous canvas for immersive visual experiences.",
    "Magnetic front-access modules allow quick maintenance without wall access."
  ]
}
```

---

## 5. What's Included Tab

Controls the What's Included tab showing all components in the package.

| Metafield Key | Type | Description |
|---------------|------|-------------|
| `pic_included_badges` | List of single line text | Category badges (e.g., "64×", "1×") |
| `pic_included_titles` | List of single line text | Component titles |
| `pic_included_descriptions` | List of single line text | Component descriptions |

### JSON Format

```json
{
  "pic_included_badges": [
    "64×",
    "1×",
    "64×",
    "1×",
    "1×",
    "1×"
  ],
  "pic_included_titles": [
    "LED Cabinet Panels",
    "NovaStar H2 Controller",
    "Power Cables",
    "Mounting Frame System",
    "Control Software License",
    "5% Spare Modules"
  ],
  "pic_included_descriptions": [
    "600mm × 337.5mm COB panels with magnetic modules",
    "Professional video processor with 4K input support",
    "Regional power cables with redundant connections",
    "Complete wall-mount frame for 8×8 configuration",
    "NovaLCT + VMP software for full system control",
    "Additional modules for field replacement"
  ]
}
```

---

## 6. Installation Tab

Controls the Installation tab including steps, requirements, and support info.

### Installation Steps

| Metafield Key | Type | Description |
|---------------|------|-------------|
| `pic_install_step_numbers` | List of single line text | Step numbers (e.g., "01", "02") |
| `pic_install_step_titles` | List of single line text | Step titles |
| `pic_install_step_descriptions` | List of single line text | Step descriptions |
| `pic_install_step_durations` | List of single line text | Duration for each step |

### Installation Requirements

| Metafield Key | Type | Description |
|---------------|------|-------------|
| `pic_install_requirements_heading` | Single line text | Section heading for requirements |
| `pic_install_requirements_titles` | List of single line text | Requirement card titles |
| `pic_install_requirements_descriptions` | List of single line text | Requirement card descriptions |

### Installation Support

| Metafield Key | Type | Description |
|---------------|------|-------------|
| `pic_install_support_title` | Single line text | Support box title |
| `pic_install_support_description` | Single line text | Support box description |
| `pic_install_support_button` | Single line text | Button text |

### JSON Format

```json
{
  "pic_install_step_numbers": ["01", "02", "03", "04", "05"],
  "pic_install_step_titles": [
    "Site Preparation",
    "Frame Installation",
    "Cabinet Mounting",
    "System Connection",
    "Calibration & Testing"
  ],
  "pic_install_step_descriptions": [
    "Verify wall structure, power availability, and environmental conditions meet specifications.",
    "Secure mounting frame to wall studs or concrete anchors per engineering drawings.",
    "Attach LED cabinets to frame starting from bottom-left, working right then up.",
    "Connect power and data cables between cabinets and to the NovaStar controller.",
    "Run auto-calibration, adjust brightness uniformity, and verify all inputs."
  ],
  "pic_install_step_durations": [
    "2-4 hours",
    "4-6 hours",
    "6-8 hours",
    "2-3 hours",
    "1-2 hours"
  ],
  "pic_install_requirements_heading": "Installation Requirements",
  "pic_install_requirements_titles": [
    "Structural Support",
    "Electrical Requirements",
    "Environmental Control"
  ],
  "pic_install_requirements_descriptions": [
    "Wall must support 450+ lbs. Consult structural engineer for verification.",
    "Dedicated 30A circuit at 208-240V. Isolated ground recommended.",
    "Maintain 65-75°F ambient temperature. HVAC assessment recommended."
  ],
  "pic_install_support_title": "Need Installation Help?",
  "pic_install_support_description": "Our certified technicians are available nationwide for professional installation.",
  "pic_install_support_button": "Schedule Installation"
}
```

---

## 7. Support Tab

Controls the Support & Resources tab including downloadable resources, contact information, and use case showcase.

### Header & Resources

| Metafield Key | Type | Description |
|---------------|------|-------------|
| `pic_support_heading` | Single line text | Section heading |
| `pic_support_resource_titles` | List of single line text | Resource card titles |
| `pic_support_resource_descriptions` | List of single line text | Resource card descriptions |
| `pic_support_resource_badges` | List of single line text | File type badges (PDF, DWG, ZIP) |
| `pic_support_resource_sizes` | List of single line text | File sizes |
| `pic_support_resource_links` | List of URLs | Download links |

### Contact Section

| Metafield Key | Type | Description |
|---------------|------|-------------|
| `pic_support_contact` | JSON | Phone, email, and lifetime support info |

### Use Case Section

| Metafield Key | Type | Description |
|---------------|------|-------------|
| `pic_support_usecase_image` | File reference (image) | Use case showcase image |
| `pic_support_usecase_title` | Single line text | Use case title |
| `pic_support_usecase_description` | Multi-line text | Use case description |
| `pic_support_usecase_specs` | JSON | View distance, typical size, use case type |
| `pic_support_usecase_config` | JSON | Common configuration details |
| `pic_support_usecase_features_title` | Single line text | Features section title |
| `pic_support_usecase_features` | List of single line text | Feature bullet points |

### JSON Format

#### Resources
```json
{
  "pic_support_heading": "Support & Resources",
  "pic_support_resource_titles": [
    "Pro Spectrum Spec Sheet",
    "LED Viewing Distance Guide",
    "Mounting Frame Drawings",
    "Power & Network Diagrams",
    "NovaStar H2 Quick Start",
    "NovaStar H2 User Manual",
    "NovaStar H2 Specifications",
    "COB vs GOB Comparison Chart"
  ],
  "pic_support_resource_descriptions": [
    "Complete technical specifications for Pro Spectrum COB LED series. Includes display, electrical, and environmental specs.",
    "Comprehensive guide for calculating optimal viewing distances and pixel pitch selection for LED video walls.",
    "Detailed CAD drawings for BL-PS-COB-LED-217 8×8 configuration. Includes dimensions and mounting specifications.",
    "Complete wiring diagrams for power distribution and network connections in 8×8 cabinet array configuration.",
    "Quick start guide for NovaStar H2 controller setup, initial configuration, and basic operation.",
    "Complete user manual for NovaStar H2 video processor. Covers advanced features, troubleshooting, and specifications.",
    "Detailed technical specifications for NovaStar H2 including I/O configurations, processing capacity, and features.",
    "Side-by-side comparison of COB and GOB LED technologies. Understand the advantages of COB for professional applications."
  ],
  "pic_support_resource_badges": [
    "PDF", "PDF", "DWG", "DWG", "PDF", "PDF", "PDF", "PDF"
  ],
  "pic_support_resource_sizes": [
    "2.4 MB", "1.8 MB", "856 KB", "743 KB", "3.1 MB", "12.5 MB", "1.2 MB", "2.1 MB"
  ],
  "pic_support_resource_links": [
    "#", "#", "#", "#", "#", "#", "#", "#"
  ]
}
```

#### Contact (pic_support_contact)
```json
{
  "phone": {
    "number": "855-449-4733",
    "hours": "Monday - Friday: 7AM - 5PM PST",
    "note": "Press 2 for Technical Support"
  },
  "email": {
    "address": "support@brightlinkav.com",
    "response": "Response within 1-2 hours during business hours"
  },
  "lifetime": {
    "title": "Lifetime Technical Support",
    "description": "Even after warranty expires, full support continues."
  }
}
```

#### Use Case Specs (pic_support_usecase_specs)
```json
{
  "view_distance": "6-15 feet",
  "typical_size": "180-250\"",
  "use_case": "Premium"
}
```

#### Use Case Config (pic_support_usecase_config)
```json
{
  "size": "6×4 to 10×8 arrays",
  "resolution": "2.88M to 7.2M pixels",
  "brightness": "600 nits",
  "controller": "NovaStar H2/H5",
  "mounting": "Flush wall mount",
  "integration": "Corporate AV systems"
}
```

#### Use Case Features
```json
{
  "pic_support_usecase_title": "Executive Boardrooms & Conference Centers",
  "pic_support_usecase_description": "Transform corporate presentations with unmatched clarity and sophistication. Pro Spectrum's 1.25mm pixel pitch delivers razor-sharp text and graphics visible from close range, while the ultra-slim 25mm profile creates a seamless, architectural presence that complements high-end interiors.\n\nPerfect for Fortune 500 boardrooms where every detail matters —from financial dashboards to video conferencing. The wide 170° viewing angle ensures every stakeholder sees crisp, accurate content regardless of seating position.",
  "pic_support_usecase_features_title": "Why Pro Spectrum?",
  "pic_support_usecase_features": [
    "Crystal-clear text readability at 6+ feet",
    "Professional aesthetic matches premium spaces",
    "Silent operation (no fan noise)",
    "4K content support for presentations",
    "HDR for realistic video conferencing",
    "Zero flicker for comfortable extended viewing"
  ]
}
```

---

## 8. Complete JSON Data

### All Metafields Summary Table

| # | Metafield Key | Type | Tab |
|---|---------------|------|-----|
| 1 | `pic_label` | Single line text | Header |
| 2 | `pic_heading` | Single line text | Header |
| 3 | `pic_subheading` | Multi-line text | Header |
| 4 | `pic_overview_description` | Multi-line text | Overview |
| 5 | `pic_overview_image` | File reference | Overview |
| 6 | `pic_overview_card_titles` | List | Overview |
| 7 | `pic_overview_card_descriptions` | List | Overview |
| 8 | `pic_specs_display` | JSON | Specifications |
| 9 | `pic_specs_physical` | JSON | Specifications |
| 10 | `pic_specs_electrical` | JSON | Specifications |
| 11 | `pic_specs_environmental` | JSON | Specifications |
| 12 | `pic_features_titles` | List | Features |
| 13 | `pic_features_descriptions` | List | Features |
| 14 | `pic_included_badges` | List | What's Included |
| 15 | `pic_included_titles` | List | What's Included |
| 16 | `pic_included_descriptions` | List | What's Included |
| 17 | `pic_install_step_numbers` | List | Installation |
| 18 | `pic_install_step_titles` | List | Installation |
| 19 | `pic_install_step_descriptions` | List | Installation |
| 20 | `pic_install_step_durations` | List | Installation |
| 21 | `pic_install_requirements_heading` | Single line text | Installation |
| 22 | `pic_install_requirements_titles` | List | Installation |
| 23 | `pic_install_requirements_descriptions` | List | Installation |
| 24 | `pic_install_support_title` | Single line text | Installation |
| 25 | `pic_install_support_description` | Single line text | Installation |
| 26 | `pic_install_support_button` | Single line text | Installation |
| 27 | `pic_support_heading` | Single line text | Support |
| 28 | `pic_support_resource_titles` | List | Support |
| 29 | `pic_support_resource_descriptions` | List | Support |
| 30 | `pic_support_resource_badges` | List | Support |
| 31 | `pic_support_resource_sizes` | List | Support |
| 32 | `pic_support_resource_links` | List (URLs) | Support |
| 33 | `pic_support_contact` | JSON | Support |
| 34 | `pic_support_usecase_image` | File reference | Support |
| 35 | `pic_support_usecase_title` | Single line text | Support |
| 36 | `pic_support_usecase_description` | Multi-line text | Support |
| 37 | `pic_support_usecase_specs` | JSON | Support |
| 38 | `pic_support_usecase_config` | JSON | Support |
| 39 | `pic_support_usecase_features_title` | Single line text | Support |
| 40 | `pic_support_usecase_features` | List | Support |

---

### Complete Export-Ready JSON

Below is the complete JSON data for all PIC metafields that can be used for bulk import:

```json
{
  "metafields": {
    "section_header": {
      "pic_label": "PRODUCT INTELLIGENCE",
      "pic_heading": "Everything You Need to Know",
      "pic_subheading": "Comprehensive specifications, installation guides, and support resources for your Pro Spectrum LED video wall system."
    },
    "overview_tab": {
      "pic_overview_description": "Meet the Brightlink Pro Spectrum COB LED Video Wall in our 217\" Diagonal configuration. This 15.75' x 8.86' masterpiece delivers 8,294,400 pixels at 1.25mm pitch - true 4K resolution with HDR support.\n\nThe Pro Spectrum represents the pinnacle of COB technology. True pixel-to-LED resolution, high dynamic range, and superior contrast deliver visuals that feel alive.",
      "pic_overview_card_titles": ["4-Year Warranty", "Lifetime Support", "5% Spare Parts"],
      "pic_overview_card_descriptions": ["Comprehensive coverage", "855-449-4733", "Included standard"]
    },
    "specifications_tab": {
      "pic_specs_display": {
        "Pixel Pitch": "1.25mm",
        "Resolution": "3840 × 2160 (4K UHD)",
        "Total Pixels": "8,294,400",
        "Brightness": "600 nits (calibrated)",
        "Contrast Ratio": "10,000:1",
        "Refresh Rate": "3840Hz",
        "Color Depth": "16-bit processing",
        "Viewing Angle": "170° H / 170° V",
        "HDR Support": "HDR10, HLG"
      },
      "pic_specs_physical": {
        "Display Size": "217\" diagonal (15.75' × 8.86')",
        "Cabinet Size": "600mm × 337.5mm × 25mm",
        "Array Configuration": "8 × 8 cabinets (64 total)",
        "Total Weight": "384 lbs (6 lbs per cabinet)",
        "Panel Thickness": "25mm (0.98\")",
        "Bezel Width": "Seamless (0mm)",
        "Installation Type": "Wall mount / Floor stand",
        "Serviceability": "Front-access magnetic modules"
      },
      "pic_specs_electrical": {
        "Power Consumption": "Average: 180W/m² | Max: 540W/m²",
        "Total System Power": "2,520W average | 7,560W max",
        "Input Voltage": "100-240V AC, 50/60Hz",
        "Power Redundancy": "Dual power input per cabinet",
        "Power Factor": "> 0.95",
        "BTU Output": "8,600 BTU/hr (average)",
        "Standby Power": "< 0.5W per cabinet"
      },
      "pic_specs_environmental": {
        "Operating Temperature": "0°C to 40°C (32°F to 104°F)",
        "Storage Temperature": "-20°C to 60°C (-4°F to 140°F)",
        "Operating Humidity": "10% - 80% RH (non-condensing)",
        "IP Rating": "IP30 (indoor use)",
        "Noise Level": "< 35dB (fanless design)",
        "MTBF": "> 100,000 hours",
        "Certifications": "CE, FCC, UL, RoHS"
      }
    },
    "features_tab": {
      "pic_features_titles": [
        "COB Technology",
        "True 4K Resolution",
        "HDR10 Support",
        "Ultra-Wide Viewing Angle",
        "Seamless Design",
        "Front Serviceability"
      ],
      "pic_features_descriptions": [
        "Chip-on-Board technology delivers superior image quality with enhanced durability and heat dissipation.",
        "8.3 million pixels at 1.25mm pitch for crystal-clear detail visible from any distance.",
        "High Dynamic Range support for vivid colors and realistic contrast in any content.",
        "170° horizontal and vertical viewing ensures perfect visibility from every seat.",
        "Zero bezel design creates a continuous canvas for immersive visual experiences.",
        "Magnetic front-access modules allow quick maintenance without wall access."
      ]
    },
    "included_tab": {
      "pic_included_badges": ["64×", "1×", "64×", "1×", "1×", "1×"],
      "pic_included_titles": [
        "LED Cabinet Panels",
        "NovaStar H2 Controller",
        "Power Cables",
        "Mounting Frame System",
        "Control Software License",
        "5% Spare Modules"
      ],
      "pic_included_descriptions": [
        "600mm × 337.5mm COB panels with magnetic modules",
        "Professional video processor with 4K input support",
        "Regional power cables with redundant connections",
        "Complete wall-mount frame for 8×8 configuration",
        "NovaLCT + VMP software for full system control",
        "Additional modules for field replacement"
      ]
    },
    "installation_tab": {
      "pic_install_step_numbers": ["01", "02", "03", "04", "05"],
      "pic_install_step_titles": [
        "Site Preparation",
        "Frame Installation",
        "Cabinet Mounting",
        "System Connection",
        "Calibration & Testing"
      ],
      "pic_install_step_descriptions": [
        "Verify wall structure, power availability, and environmental conditions meet specifications.",
        "Secure mounting frame to wall studs or concrete anchors per engineering drawings.",
        "Attach LED cabinets to frame starting from bottom-left, working right then up.",
        "Connect power and data cables between cabinets and to the NovaStar controller.",
        "Run auto-calibration, adjust brightness uniformity, and verify all inputs."
      ],
      "pic_install_step_durations": ["2-4 hours", "4-6 hours", "6-8 hours", "2-3 hours", "1-2 hours"],
      "pic_install_requirements_heading": "Installation Requirements",
      "pic_install_requirements_titles": [
        "Structural Support",
        "Electrical Requirements",
        "Environmental Control"
      ],
      "pic_install_requirements_descriptions": [
        "Wall must support 450+ lbs. Consult structural engineer for verification.",
        "Dedicated 30A circuit at 208-240V. Isolated ground recommended.",
        "Maintain 65-75°F ambient temperature. HVAC assessment recommended."
      ],
      "pic_install_support_title": "Need Installation Help?",
      "pic_install_support_description": "Our certified technicians are available nationwide for professional installation.",
      "pic_install_support_button": "Schedule Installation"
    },
    "support_tab": {
      "pic_support_heading": "Support & Resources",
      "pic_support_resource_titles": [
        "Pro Spectrum Spec Sheet",
        "LED Viewing Distance Guide",
        "Mounting Frame Drawings",
        "Power & Network Diagrams",
        "NovaStar H2 Quick Start",
        "NovaStar H2 User Manual",
        "NovaStar H2 Specifications",
        "COB vs GOB Comparison Chart"
      ],
      "pic_support_resource_descriptions": [
        "Complete technical specifications for Pro Spectrum COB LED series. Includes display, electrical, and environmental specs.",
        "Comprehensive guide for calculating optimal viewing distances and pixel pitch selection for LED video walls.",
        "Detailed CAD drawings for BL-PS-COB-LED-217 8×8 configuration. Includes dimensions and mounting specifications.",
        "Complete wiring diagrams for power distribution and network connections in 8×8 cabinet array configuration.",
        "Quick start guide for NovaStar H2 controller setup, initial configuration, and basic operation.",
        "Complete user manual for NovaStar H2 video processor. Covers advanced features, troubleshooting, and specifications.",
        "Detailed technical specifications for NovaStar H2 including I/O configurations, processing capacity, and features.",
        "Side-by-side comparison of COB and GOB LED technologies. Understand the advantages of COB for professional applications."
      ],
      "pic_support_resource_badges": ["PDF", "PDF", "DWG", "DWG", "PDF", "PDF", "PDF", "PDF"],
      "pic_support_resource_sizes": ["2.4 MB", "1.8 MB", "856 KB", "743 KB", "3.1 MB", "12.5 MB", "1.2 MB", "2.1 MB"],
      "pic_support_resource_links": ["#", "#", "#", "#", "#", "#", "#", "#"],
      "pic_support_contact": {
        "phone": {
          "number": "855-449-4733",
          "hours": "Monday - Friday: 7AM - 5PM PST",
          "note": "Press 2 for Technical Support"
        },
        "email": {
          "address": "support@brightlinkav.com",
          "response": "Response within 1-2 hours during business hours"
        },
        "lifetime": {
          "title": "Lifetime Technical Support",
          "description": "Even after warranty expires, full support continues."
        }
      },
      "pic_support_usecase_title": "Executive Boardrooms & Conference Centers",
      "pic_support_usecase_description": "Transform corporate presentations with unmatched clarity and sophistication. Pro Spectrum's 1.25mm pixel pitch delivers razor-sharp text and graphics visible from close range, while the ultra-slim 25mm profile creates a seamless, architectural presence that complements high-end interiors.\n\nPerfect for Fortune 500 boardrooms where every detail matters —from financial dashboards to video conferencing. The wide 170° viewing angle ensures every stakeholder sees crisp, accurate content regardless of seating position.",
      "pic_support_usecase_specs": {
        "view_distance": "6-15 feet",
        "typical_size": "180-250\"",
        "use_case": "Premium"
      },
      "pic_support_usecase_config": {
        "size": "6×4 to 10×8 arrays",
        "resolution": "2.88M to 7.2M pixels",
        "brightness": "600 nits",
        "controller": "NovaStar H2/H5",
        "mounting": "Flush wall mount",
        "integration": "Corporate AV systems"
      },
      "pic_support_usecase_features_title": "Why Pro Spectrum?",
      "pic_support_usecase_features": [
        "Crystal-clear text readability at 6+ feet",
        "Professional aesthetic matches premium spaces",
        "Silent operation (no fan noise)",
        "4K content support for presentations",
        "HDR for realistic video conferencing",
        "Zero flicker for comfortable extended viewing"
      ]
    }
  }
}
```

---

## Shopify Metafield Creation Guide

### Creating Metafields in Shopify Admin

1. Go to **Settings** > **Custom data** > **Products**
2. Click **Add definition**
3. Enter the metafield details:
   - **Name:** Human-readable name (e.g., "PIC Label")
   - **Namespace and key:** `custom.pic_label`
   - **Type:** Select appropriate type (see table above)
4. Save the definition
5. Repeat for all metafields

### Metafield Types Reference

| Type in Guide | Shopify Type |
|---------------|--------------|
| Single line text | Single line text |
| Multi-line text | Multi-line text |
| List of single line text | List of single line text values |
| JSON | JSON |
| File reference | File |
| List (URLs) | List of URLs |

---

## Notes

- All metafields fall back to hardcoded defaults if not set
- JSON metafields allow flexible key-value pairs
- List metafields maintain order correlation (index 0 of titles matches index 0 of descriptions)
- Image metafields accept Shopify file references

---

*Document Version: 1.0*
*Last Updated: January 2026*
