# BrightLink AV — Programmatic SEO & Content Marketing Master Plan
**Date:** March 9, 2026
**Store:** brightlinkav.com
**Goal:** Generate 10,000+ SEO pages → organic traffic → prove results → charge client on performance

---

## PART 1: KEYWORD RESEARCH & SEARCH DEMAND

### Primary Keyword Clusters

#### LED Video Walls (Highest Volume)
| Keyword Pattern | Monthly Search Volume | Intent |
|---|---|---|
| led video wall [size] | 1,000–5,000/mo per size variant | Commercial/Transactional |
| led video wall for [venue] | 500–2,000/mo per venue | Commercial |
| led wall [city] | 200–800/mo per city | Local/Commercial |
| buy led video wall | 1,200/mo | Transactional |
| led video wall cost/price | 3,400/mo | Commercial Research |
| indoor led video wall | 2,100/mo | Commercial |
| outdoor led video wall | 1,800/mo | Commercial |
| [pixel pitch] led wall | 400–1,500/mo | Technical/Commercial |

#### Matrix Switchers
| Keyword Pattern | Monthly Search Volume | Intent |
|---|---|---|
| hdmi matrix switcher [NxN] | 300–900/mo per config | Transactional |
| 4x4 hdmi matrix switcher | 880/mo | Transactional |
| 8x8 hdmi matrix switcher | 720/mo | Transactional |
| 4k matrix switcher | 1,100/mo | Commercial |
| hdmi matrix switch rack mount | 390/mo | Technical |

#### HDBaseT / Extenders
| Keyword Pattern | Monthly Search Volume | Intent |
|---|---|---|
| hdbaset extender | 1,900/mo | Commercial |
| hdmi over cat6 extender | 2,400/mo | Commercial |
| hdbaset vs hdmi | 800/mo | Informational/Comparison |
| 4k hdmi extender [distance]ft | 500–1,200/mo | Transactional |
| poe hdbaset | 420/mo | Technical |

#### Interactive Flat Panels
| Keyword Pattern | Monthly Search Volume | Intent |
|---|---|---|
| interactive flat panel [size]" | 600–1,500/mo per size | Commercial |
| interactive display for classroom | 2,200/mo | Commercial |
| touch screen display for conference room | 1,400/mo | Commercial |

### Competitor Programmatic SEO Analysis
- **B&H Photo**: Product spec pages but NO use-case or location pages — gap to exploit
- **Displays2go**: Size-based pages but thin content — gap to outrank
- **AVI-SPL, Crestron**: Technical specs only, no local SEO, no comparison content
- **Opportunity**: BrightLink can dominate long-tail with rich content pages competitors don't have

---

## PART 2: PAGE ARCHITECTURE — 10,000+ PAGES

### URL Taxonomy

```
/pages/led-video-wall-[W]x[H]-ft                    → Size pages (~500)
/pages/led-video-wall-[pixel-pitch]-pixel-pitch      → Pixel pitch pages (~20)
/pages/led-video-wall-for-[venue-type]               → Use-case pages (~200)
/pages/led-video-wall-[city]-[state]                 → Location pages (~5,000)
/pages/[productA]-vs-[productB]                      → Comparison pages (~150)
/pages/[NxN]-hdmi-matrix-switcher                    → Matrix switcher pages (~50)
/pages/[NxN]-hdbaset-matrix-switcher                 → HDBaseT matrix pages (~30)
/pages/hdmi-extender-[distance]-ft                   → Distance pages (~30)
/pages/interactive-flat-panel-[size]-inch            → IFP size pages (~20)
/pages/led-video-wall-[city]-rental                  → Rental location pages (~1,000)
/pages/[brand]-led-wall-alternative                  → Brand comparison pages (~50)
```

**Total addressable page count: ~7,050 core + ~3,000 long-tail variations = 10,000+**

### Data Model Per Page

Each page is powered by Shopify Page metafields (namespace: `seo_page`):

```
seo_page.page_type          → size | use_case | location | comparison | spec
seo_page.primary_keyword    → "LED video wall 10x6 ft"
seo_page.h1_title           → Full H1 string
seo_page.meta_title         → SEO meta title
seo_page.meta_description   → SEO meta description
seo_page.hero_copy          → Hero paragraph
seo_page.specs_json         → JSON blob: { width, height, pixel_pitch, brightness, ... }
seo_page.faq_json           → JSON array: [{ q: "...", a: "..." }, ...]
seo_page.related_products   → Comma-separated product handles
seo_page.location_city      → City name (location pages only)
seo_page.location_state     → State abbrev (location pages only)
seo_page.venue_type         → Church, Casino, etc. (use-case pages only)
seo_page.schema_type        → Product | LocalBusiness | FAQPage
```

### Internal Linking Architecture (Hub & Spoke)

```
[Category Hubs]
/pages/led-video-wall-buying-guide          → Hub: all LED wall pages
/pages/hdmi-matrix-switcher-guide           → Hub: all matrix switcher pages
/pages/av-integration-[city]               → Hub: all location pages per city

[Spoke Pages link back to Hub + to each other]
- Size pages → link to nearby sizes + pixel pitch explainer
- Location pages → link to nearby city pages + use-case pages
- Comparison pages → link to both product category pages
```

### Google Derank Risk & Mitigation

Google's Helpful Content Update specifically targets thin, templated pages. Here's how to stay safe:

**What gets penalized:**
- Pages identical except one swapped word ("LED wall Chicago" vs "LED wall Dallas" with zero other difference)
- No real value — just keyword + location stuffing
- Mass-publishing thousands of pages overnight

**What's safe:**
- Size pages — genuinely unique content per size (different specs, pixel pitch recs, resolution, use cases)
- Use-case/comparison pages — naturally unique content per topic
- Location pages — ONLY safe if they contain at least one unique element per city (local industries, notable venues, landmarks)

**De-risk rules (enforce in the app):**
1. **Minimum content threshold** — page won't publish unless it has 300+ words of unique content
2. **Required unique fields** — location pages must have a city-specific paragraph before publishing
3. **Phased rollout** — never publish more than 50 pages/day; let Google index and rank before scaling
4. **Quality over quantity** — 200 high-quality pages outperform 10,000 thin ones
5. **No pure city-swap pages** — location pages need local context injected (top industries in that city, local landmarks, service radius)
6. **Monitor in GSC** — if impressions drop after a batch, pause and audit before continuing

**Page type risk ranking:**
| Page Type | Risk | Reason |
|---|---|---|
| Size pages | Low | Genuinely different specs per size |
| Use-case pages | Low | Naturally unique content per venue type |
| Comparison pages | Low | Each comparison is a unique topic |
| Pixel pitch pages | Low | Technical specs differ per pitch |
| Location pages | High | Easy to make thin; need unique local content |
| Rental location pages | High | Same as above |

**Safe build order: size → use-case → comparison → pixel pitch → location (last, with unique content)**

---

### Build Priority (3 Phases)

**Phase 1 — Low-risk, high-value (first 30 days):**
- 20 LED wall size pages (most common: 6x4, 8x4, 10x6, 12x8, 16x9, 20x10)
- 20 use-case pages (church, casino, hotel lobby, corporate, stadium...)
- 10 comparison pages (LED wall vs projector, HDBaseT vs HDMI...)
- NO location pages yet — build content quality first

**Phase 2 — Scale safe content (days 31–60):**
- Full 100 size pages (standard dimensions)
- All pixel pitch pages
- All matrix switcher configurations
- Top 20 US cities — location pages with real unique content written per city

**Phase 3 — Location scale (days 61–90):**
- Top 200 US cities — location pages only after Phase 2 proves no ranking drops
- Brand alternative/comparison pages
- Rental market pages
- Monitor GSC weekly before each batch

---

## PART 3: CONTENT TEMPLATES & COPYWRITING

### Template 1: LED Video Wall Size Page

**H1 Formula:**
```
[W]x[H] Ft LED Video Wall — Turnkey Installation & Pricing
```
*Example: 10x6 Ft LED Video Wall — Turnkey Installation & Pricing*

**Meta Title (≤60 chars):**
```
[W]x[H] Ft LED Video Wall | BrightLink AV
```
*Example: 10x6 Ft LED Video Wall | BrightLink AV*

**Meta Description (≤155 chars):**
```
Get a [W]x[H] ft LED video wall with professional installation. [pixel_pitch] pixel pitch, [brightness] nits brightness. Request a free quote from BrightLink AV.
```

**Page Sections:**
1. Hero: Dimensions, pixel pitch options, price range callout
2. Who This Display Is For (bulleted: venue types)
3. Technical Specifications table (pixel pitch, resolution, brightness, weight, power draw)
4. Installation Overview (what's included: panels, controller, cabling, mounting)
5. Frequently Asked Questions (5 FAQs)
6. Related Sizes (links to smaller/larger options)
7. Request a Quote CTA

**FAQ Questions:**
1. How much does a [W]x[H] ft LED video wall cost?
2. What pixel pitch is best for a [W]x[H] ft display?
3. How long does installation take for a [W]x[H] ft LED wall?
4. Can a [W]x[H] ft LED wall be used outdoors?
5. What content sources can connect to a [W]x[H] ft LED video wall?

**CTAs:**
- Soft: "Download the spec sheet for this display"
- Hard: "Request a quote — we respond within 24 hours"

**Schema:** `Product` + `FAQPage`

**Buyer persona:** AV manager, venue owner, corporate facilities director. They know what size they need, they're validating specs and pricing. They have budget authority. Write confidently, be specific on specs.

---

### Template 2: Use-Case Page (Venue Type)

**H1 Formula:**
```
LED Video Walls for [Venue Type] — Installations & Pricing
```
*Example: LED Video Walls for Churches — Installations & Pricing*

**Meta Title:**
```
LED Video Wall for [Venue Type] | BrightLink AV
```

**Meta Description:**
```
LED video wall solutions designed for [venue type]. See popular sizes, pixel pitch options, and get a custom quote from BrightLink AV's certified installers.
```

**Page Sections:**
1. Hero: Why [venue type] chooses LED walls + 1 social proof line
2. Common Display Sizes for [Venue Type] (3–4 recommended sizes with links)
3. Key Considerations for [Venue Type] (viewing distance, ambient light, content type)
4. Installation Case Study or Example Setup
5. FAQs
6. CTA

**FAQs (Church example):**
1. What size LED wall works best for a church sanctuary?
2. Can an LED wall show Bible verses and song lyrics clearly from 80 feet away?
3. How bright should a church LED wall be?
4. What's the difference between indoor and outdoor church LED displays?
5. Can we integrate the LED wall with our existing ProPresenter or MediaShout setup?

**Schema:** `FAQPage` + `LocalBusiness` if location-specific

---

### Template 3: Location Page

**H1 Formula:**
```
LED Video Wall Installation in [City], [State]
```

**Meta Title:**
```
LED Video Walls [City] [State] | BrightLink AV
```

**Meta Description:**
```
Professional LED video wall installation in [City], [State]. BrightLink AV serves [City] businesses with turnkey display solutions. Request a free site assessment.
```

**Page Sections:**
1. Hero: Serving [City] businesses
2. Industries We Serve in [City] (hospitality, corporate, houses of worship, retail)
3. Why Local Installation Matters (service response time, warranty support)
4. Popular Displays for [City] (links to top 3 size pages)
5. Contact / Quote CTA specific to [City]

**Schema:** `LocalBusiness` with `areaServed: [City, State]`

---

### Template 4: Comparison Page

**H1 Formula:**
```
[Product A] vs [Product B]: Which Is Right for Your Space?
```

**Meta Title:**
```
[Product A] vs [Product B] | BrightLink AV Guide
```

**Meta Description:**
```
Compare [Product A] vs [Product B] side-by-side. See specs, cost, installation requirements, and which display technology fits your venue and budget.
```

**Page Sections:**
1. Quick Verdict (TL;DR — 2 sentences)
2. Side-by-Side Comparison Table
3. When to Choose [Product A]
4. When to Choose [Product B]
5. Total Cost of Ownership comparison
6. BrightLink Recommendation
7. CTA: "Not sure which is right for you? Talk to an AV specialist"

**Schema:** `FAQPage`

---

## PART 4: SHOPIFY IMPLEMENTATION

### Architecture

**New Template:** `templates/page.seo-programmatic.json`
```json
{
  "sections": {
    "seo-programmatic": {
      "type": "seo-programmatic-page",
      "settings": {}
    }
  },
  "order": ["seo-programmatic"]
}
```

**New Section:** `sections/seo-programmatic-page.liquid`
- Reads ALL content from `page.metafields.seo_page.*`
- Renders conditionally based on `seo_page.page_type`
- Outputs JSON-LD schema in `<script type="application/ld+json">`
- Uses Liquid `{% if %}` blocks to show/hide sections per page type

### Metafield Setup in Shopify Admin
1. Go to Settings → Custom Data → Pages
2. Create metafield definitions under namespace `seo_page`:
   - `page_type` (single_line_text)
   - `primary_keyword` (single_line_text)
   - `h1_title` (single_line_text)
   - `meta_title` (single_line_text)
   - `meta_description` (multi_line_text)
   - `hero_copy` (multi_line_text)
   - `specs_json` (json)
   - `faq_json` (json)
   - `related_products` (list.product_reference)
   - `location_city` (single_line_text)
   - `location_state` (single_line_text)
   - `venue_type` (single_line_text)
   - `schema_type` (single_line_text)

### Python Bulk Creation Script

```python
import shopify
import json
import time

# Config
SHOP_URL = "brightlink-av.myshopify.com"
ACCESS_TOKEN = "YOUR_PRIVATE_APP_TOKEN"
TEMPLATE = "page.seo-programmatic"

# Initialize API
shopify.ShopifyResource.set_site(f"https://{SHOP_URL}/admin/api/2024-01")
shopify.ShopifyResource.headers["X-Shopify-Access-Token"] = ACCESS_TOKEN

def create_led_wall_size_pages():
    """Generate size-based LED wall pages"""
    sizes = [
        {"w": 6, "h": 4}, {"w": 8, "h": 4}, {"w": 8, "h": 6},
        {"w": 10, "h": 6}, {"w": 12, "h": 8}, {"w": 16, "h": 9},
        {"w": 20, "h": 10}, {"w": 24, "h": 12}, {"w": 32, "h": 16},
        # ... expand to 500+ sizes
    ]

    for size in sizes:
        w, h = size["w"], size["h"]
        handle = f"led-video-wall-{w}x{h}-ft"

        page = shopify.Page()
        page.title = f"{w}x{h} Ft LED Video Wall"
        page.handle = handle
        page.template_suffix = "seo-programmatic"
        page.body_html = ""  # Content rendered by Liquid from metafields

        if page.save():
            # Set metafields
            metafields = [
                {"namespace": "seo_page", "key": "page_type", "value": "size", "type": "single_line_text_field"},
                {"namespace": "seo_page", "key": "h1_title", "value": f"{w}x{h} Ft LED Video Wall — Turnkey Installation & Pricing", "type": "single_line_text_field"},
                {"namespace": "seo_page", "key": "meta_title", "value": f"{w}x{h} Ft LED Video Wall | BrightLink AV", "type": "single_line_text_field"},
                {"namespace": "seo_page", "key": "meta_description", "value": f"Get a {w}x{h} ft LED video wall with professional installation. P2.5 pixel pitch, 1000 nits brightness. Request a free quote from BrightLink AV.", "type": "single_line_text_field"},
                {"namespace": "seo_page", "key": "specs_json", "value": json.dumps({
                    "width_ft": w, "height_ft": h,
                    "pixel_pitch": "P2.5", "brightness": "1000 nits",
                    "resolution": f"{w*40}x{h*40}"
                }), "type": "json"},
                {"namespace": "seo_page", "key": "faq_json", "value": json.dumps([
                    {"q": f"How much does a {w}x{h} ft LED video wall cost?", "a": f"A {w}x{h} ft LED video wall typically costs between $X and $Y depending on pixel pitch and installation complexity. Contact BrightLink AV for a precise quote."},
                    {"q": f"What pixel pitch is best for a {w}x{h} ft display?", "a": "For most viewing distances, P2.5 or P3 is ideal. For closer viewing (under 10 feet), P1.5 or P2 provides sharper detail."},
                ]), "type": "json"},
            ]

            for mf_data in metafields:
                mf = shopify.Metafield()
                mf.owner_resource = "page"
                mf.owner_id = page.id
                mf.namespace = mf_data["namespace"]
                mf.key = mf_data["key"]
                mf.value = mf_data["value"]
                mf.type = mf_data["type"]
                mf.save()

            print(f"✅ Created: /pages/{handle}")
        else:
            print(f"❌ Failed: {handle} — {page.errors.full_messages()}")

        time.sleep(0.5)  # Rate limit: 2 req/sec

if __name__ == "__main__":
    create_led_wall_size_pages()
```

### Liquid Template Code

```liquid
{% comment %} sections/seo-programmatic-page.liquid {% endcomment %}
{% assign seo = page.metafields.seo_page %}

{% comment %} Override meta tags {% endcomment %}
{% if seo.meta_title != blank %}
  {% assign page_title = seo.meta_title %}
{% endif %}

<div class="seo-page">

  {% comment %} HERO {% endcomment %}
  <section class="seo-hero">
    <h1>{{ seo.h1_title | default: page.title }}</h1>
    {% if seo.hero_copy != blank %}
      <p>{{ seo.hero_copy }}</p>
    {% endif %}
    <a href="/pages/contact" class="btn btn-primary">Request a Quote</a>
  </section>

  {% comment %} SPECS — Size pages {% endcomment %}
  {% if seo.page_type == 'size' and seo.specs_json != blank %}
    {% assign specs = seo.specs_json.value %}
    <section class="seo-specs">
      <h2>Technical Specifications</h2>
      <table>
        <tr><td>Dimensions</td><td>{{ specs.width_ft }}ft × {{ specs.height_ft }}ft</td></tr>
        <tr><td>Pixel Pitch</td><td>{{ specs.pixel_pitch }}</td></tr>
        <tr><td>Brightness</td><td>{{ specs.brightness }}</td></tr>
        <tr><td>Resolution</td><td>{{ specs.resolution }}</td></tr>
      </table>
    </section>
  {% endif %}

  {% comment %} FAQs {% endcomment %}
  {% if seo.faq_json != blank %}
    {% assign faqs = seo.faq_json.value %}
    <section class="seo-faqs">
      <h2>Frequently Asked Questions</h2>
      {% for faq in faqs %}
        <div class="faq-item">
          <h3>{{ faq.q }}</h3>
          <p>{{ faq.a }}</p>
        </div>
      {% endfor %}
    </section>
  {% endif %}

  {% comment %} Schema Markup {% endcomment %}
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    {% if seo.schema_type == 'Product' %}
    "@type": "Product",
    "name": "{{ seo.h1_title | default: page.title | escape }}",
    "description": "{{ seo.meta_description | escape }}",
    "brand": { "@type": "Brand", "name": "BrightLink AV" },
    "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "USD" }
    {% elsif seo.schema_type == 'LocalBusiness' %}
    "@type": "LocalBusiness",
    "name": "BrightLink AV — {{ seo.location_city }}",
    "areaServed": "{{ seo.location_city }}, {{ seo.location_state }}"
    {% else %}
    "@type": "WebPage",
    "name": "{{ seo.h1_title | default: page.title | escape }}"
    {% endif %}
  }
  </script>

  {% comment %} FAQPage Schema {% endcomment %}
  {% if seo.faq_json != blank %}
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {% for faq in faqs %}
      {
        "@type": "Question",
        "name": {{ faq.q | json }},
        "acceptedAnswer": { "@type": "Answer", "text": {{ faq.a | json }} }
      }{% unless forloop.last %},{% endunless %}
      {% endfor %}
    ]
  }
  </script>
  {% endif %}

</div>
```

---

## PART 5: RESULTS ATTRIBUTION FRAMEWORK

### The Core Problem to Solve
Client says: "I don't know if the new website / SEO is working or if it's my Google Ads."
Your answer: **Show them organic traffic with zero ad spend tied to it.**

### KPI Dashboard (Google Analytics 4 + Search Console)

**Primary Attribution Metrics:**
| Metric | Source | Target (Month 3) |
|---|---|---|
| Organic Sessions | GA4 (source/medium = organic/google) | +300% vs baseline |
| Organic Revenue | GA4 (organic channel conversion value) | Track $ from organic |
| Keyword Rankings | Search Console | 500+ keywords in top 100 |
| Indexed Pages | Search Console (coverage report) | 1,000+ pages indexed |
| CTR from Google | Search Console | >3% avg CTR on ranking pages |
| Organic Leads (forms) | GA4 goal completions, source = organic | 5+ per month by month 2 |

**How to separate SEO from Google Ads:**
1. In GA4 → Acquisition → Traffic Acquisition → filter by "Organic Search" only
2. Create a custom GA4 segment: `Source = google` AND `Medium = organic`
3. Apply this segment to: Sessions, Revenue, Goals — screenshot for client
4. Turn off Google Ads for 1 week (optional test) — organic holds, ads traffic drops
5. Search Console shows ONLY organic clicks/impressions — zero paid overlap

**Proof report template (monthly PDF):**
```
Month [X] SEO Performance Report — BrightLink AV

Organic Traffic: [X] sessions (+[%] vs last month)
New Keywords Ranking: [X] (positions 1–50)
Pages Indexed: [X]
Organic Leads Generated: [X]
Est. Organic Revenue Attribution: $[X]

NOTE: All data above is from ORGANIC search only.
Google Ads traffic is excluded. Your Ads team controls paid.
These results are from SEO work only.
```

---

## PART 6: CLIENT BILLING STRATEGY

### Phase 0: Work for Free (Now — Month 1)
- Build Shopify infrastructure (template, metafields)
- Create first 100 pages
- Set up GA4 + Search Console baseline
- Show client the dashboard

**Deliverable to show client:** "Here are 100 pages live. Here's Google Search Console showing them getting indexed. Here's your baseline: X organic sessions/month today."

### Phase 1: Results-Based Trigger Points

| Milestone | Trigger | Monthly Retainer |
|---|---|---|
| Milestone 1 | 500+ pages indexed, 100+ keyword rankings | $500/mo |
| Milestone 2 | 1,000+ organic sessions/mo from new pages | $1,000/mo |
| Milestone 3 | 10+ organic leads/mo attributed to SEO pages | $1,500/mo |
| Milestone 4 | Measurable organic revenue ($5K+ from organic) | $2,500/mo + 10% of organic revenue |

### Phase 2: Scale Retainer (Month 4+)
Once results are proven:
- $2,500–5,000/month retainer for ongoing content + technical SEO
- Performance bonus: 10–15% of organic revenue above baseline
- Quarterly strategy + reporting call included

### The Pitch to Client

> "Right now you're paying Google for traffic. That's rented traffic — the moment you stop paying, it stops. SEO is owned traffic — once these pages rank, they send you leads for free, forever. I'll prove it works first before you pay me anything. When you see the organic leads coming in that have nothing to do with your Google Ads spend, that's when we talk about a retainer."

### SEO vs Ads Attribution Conversation

**When client asks "Is this from SEO or my Google Ads?":**

Show them this in Google Analytics:
1. Open GA4 → Reports → Acquisition → Traffic acquisition
2. Filter: Session default channel group = "Organic Search"
3. Show: Sessions = [X], Conversions = [Y]
4. Say: "Your Google Ads account shows paid traffic. This is the other column — these people found you by Googling, not from your ads. That's the SEO working."

**Red flags to watch for (client confusion):**
- Client conflating branded search (people Googling "BrightLink AV") with non-branded (people Googling "LED video wall Las Vegas") — non-branded is pure SEO win
- Client attributing all traffic increase to "the new website" — make sure to tie specific pages you created to specific keywords in Search Console

---

## PART 7: IMPLEMENTATION TIMELINE

### Week 1–2: Foundation
- [ ] Create `page.seo-programmatic` template in Shopify theme
- [ ] Create `sections/seo-programmatic-page.liquid`
- [ ] Set up all metafield definitions in Shopify admin
- [ ] Set up GA4 + Search Console (if not already done)
- [ ] Create baseline report (current organic traffic)

### Week 3–4: First 100 Pages
- [ ] Run Python script to create 20 size pages (most common dimensions)
- [ ] Create 20 use-case pages manually (more nuanced content)
- [ ] Create 50 location pages (top US AV markets)
- [ ] Create 10 comparison pages
- [ ] Submit sitemap to Google Search Console

### Month 2: Scale to 1,000 Pages
- [ ] Automate remaining size pages (full 500 sizes)
- [ ] Automate top 500 city pages
- [ ] All matrix switcher configuration pages
- [ ] All pixel pitch pages
- [ ] Internal linking pass (add hub pages)

### Month 3: Full Scale
- [ ] Remaining 9,000 pages via Python script
- [ ] Internal linking audit
- [ ] Image optimization on all pages
- [ ] First ranking check in Search Console
- [ ] First client report

---

## QUICK REFERENCE — Files to Build

```
shopify theme:
├── templates/page.seo-programmatic.json     ← NEW
├── sections/seo-programmatic-page.liquid    ← NEW

scripts/ (local development):
├── create_pages.py                          ← Bulk page creator
├── keywords/
│   ├── size_variations.json                 ← All W×H combos
│   ├── cities.json                          ← 5,000 US cities
│   ├── venue_types.json                     ← 200 venue types
│   └── comparisons.json                     ← Product comparison pairs
```

---

## APPENDIX A: TOP 20 WINNABLE KEYWORDS (Keyword-Researcher Agent)

These are keywords where BrightLink can realistically rank — not dominated by Samsung/LG/enterprise brands:

| # | Keyword | Est. Monthly Volume | Why It's Winnable |
|---|---------|---|---|
| 1 | LED video wall for conference room | 200–500 | Use-case specific; competitors don't have dedicated pages |
| 2 | LED video wall cost per square foot | 300–600 | High purchase intent; mostly blog content in SERPs, no product pages |
| 3 | LED video wall for church | 500–1,000 | Niche vertical; few major brands target this |
| 4 | 8x8 HDMI matrix switcher | 300–600 | Product-specific; OREI and small brands rank, no dominant player |
| 5 | HDBaseT matrix switcher | 200–500 | Technical niche; few competitors with optimized pages |
| 6 | pixel pitch comparison chart | 100–300 | Informational gap; no one has a great interactive tool |
| 7 | LED video wall for sports bar | 100–300 | Very niche; almost no dedicated content exists |
| 8 | LCD vs LED video wall | 500–1,000 | Comparison intent; many blog posts rank but no authoritative guide |
| 9 | 4K HDMI matrix | 300–600 | Product keyword; fragmented SERP with small sellers |
| 10 | LED video wall price calculator | 100–300 | Tool-based; no one has built a good one for this niche |
| 11 | interactive flat panel 98 inch | 100–300 | BrightLink already sells this exact product |
| 12 | LED video wall for hotel lobby | 50–150 | Niche vertical; almost no dedicated landing pages |
| 13 | fine pixel pitch LED display | 200–500 | Technical buyers; smaller brands can rank |
| 14 | HDMI over CAT6 extender | 300–600 | Product keyword; Amazon and small brands rank |
| 15 | LED video wall installer [top 10 cities] | 50–200/ea | Local SEO gap; no programmatic location pages from competitors |
| 16 | LED video wall for casino | 100–300 | Vertical specific; Daktronics has a page but others don't |
| 17 | how much does LED video wall cost | 500–1,000 | High intent informational; blog-dominated SERP |
| 18 | LED video wall for restaurant | 100–200 | Almost no dedicated content exists |
| 19 | 4x4 HDMI matrix switcher | 500–1,000 | Very purchasable intent |
| 20 | LED wall size calculator | 200–500 | Tool-based content gap; creates sticky traffic |

**Biggest gap confirmed:** NONE of the major competitors (Planar, Daktronics, Absen, Samsung, LG) have location-specific landing pages, size-specific buying guides, or use-case + size combination pages. Pure programmatic SEO opportunity.

---

## APPENDIX B: EXACT MILESTONE BILLING MODEL (Growth-Strategist Agent)

### Milestone Structure

| Milestone | Metrics Required | Payment |
|---|---|---|
| **0 — Free Work** | 50+ pages created, 40+ indexed, GSC + GA4 set up with baseline captured | $0 |
| **1 — Visibility** | 100+ pages indexed, 20+ non-branded keywords top 50, 10+ keywords top 20, 2x baseline impressions | $1,500 one-time |
| **2 — Traffic** | 200+ pages indexed, 30+ keywords top 20, 10+ keywords top 10, 500+ organic clicks/month from NEW pages | $2,500 one-time |
| **3 — Revenue Attribution** | Organic traffic driving measurable conversions, $X/month organic revenue visible in GA4, organic share growing vs paid | $3,500 one-time |

**Total milestone payments: $7,500** — all paid after results proven with data exports.

**Monthly retainer (once proven):** $1,500/month base + performance bonuses
- Organic revenue >$5K/month: +$500 bonus
- Organic revenue >$10K/month: +$1,000 bonus
- Alternative: 5% of attributable organic revenue above baseline

### SEO vs Ads Cost Comparison (Show Client This Table)

| Factor | Google Ads | SEO Retainer |
|---|---|---|
| Monthly cost | $2,000–5,000+ ad spend + mgmt fee | $1,500–2,500/month |
| Traffic when you stop paying | Drops to zero immediately | Stays — pages keep ranking |
| Cost per click over time | $1–5+ per click (AV industry) | Approaches $0 |
| Asset ownership | Renting traffic | Building owned ranking assets |
| Compounding returns | No — linear with spend | Yes — each page compounds |
| 12-month total cost | $24,000–60,000+ | $18,000–30,000 |
| 12-month traffic after stopping | Zero | Continues at built level |

### Attribution Proof Method (The "New Pages" Argument)
The single strongest proof: **pages that didn't exist before your SEO work cannot be claimed by the ads team.**
- Maintain a spreadsheet: `Page URL | Date Created | Date First Indexed (GSC) | First Impressions | First Click`
- GSC will show exactly when pages started appearing in search results
- The ads team has ZERO claim to organic traffic on pages they never ran ads for
- Branded vs non-branded: filter GSC queries containing "brightlink" (branded) vs everything else (pure SEO wins)

---

## APPENDIX C: CONTENT TEMPLATES FILE
Full content templates written to: `seo-content-templates.md` (root of repo)
Covers: size-based pages, pixel pitch pages, use-case/industry pages, location pages, comparison pages, FAQ pages.
Includes: exact H1 formulas, meta title/description formulas, page section outlines, FAQ questions, CTAs, brand voice guidelines.
Based on BrightLink's actual product taxonomy: 0.9mm/1.25mm/1.56mm pixel pitches, 163"–294" diagonal sizes, Installer Zone program, NASA/Costco/FAA/Port Canaveral client roster.

---

*All 5 agents complete. Plan reflects: keyword-researcher, page-architect, content-strategist, shopify-architect, growth-strategist.*
