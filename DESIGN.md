# Imani — Design System

> **Brand essence:** Eco-friendly cleaning, reimagined. Fresh, modern, and unmistakably green.
> **Voice:** Confident, light, witty ("Stains? Not on our palette!"). Plain-spoken about sustainability — never preachy.

---

## 1. Brand Foundation

| | |
|---|---|
| **Name** | Imani |
| **Category** | Eco-friendly cleaning products |
| **Mission** | Effective cleaning products that protect both the environment and the health of our customers. |
| **Pillars** | Sustainability · Innovation · Care · Convenience |
| **Tagline patterns** | "Wiping the slate clean" · "The fresh face of clean" · "A font as fresh as our suds" · "Bubbles of creativity" |
| **Design system source** | `https://github.com/xtellarco/imani-design-system` |

Section subtitles in marketing material lean into water/cleaning metaphors. Match that tone in headers, but don't force it on functional UI copy.

---

## 2. Logo

The logo is a **wordmark + petal/pinwheel icon** lockup. The icon is a 7-petal swirl that evokes the *circular motion of cleaning* — thoroughness and continuity.

### Variants

| Variant | Use |
|---|---|
| **Primary lockup** | Default — icon + wordmark, side-by-side, baseline-aligned to wordmark x-height |
| **Wordmark** | When the icon would be redundant (e.g. inside a product card already showing the icon) |
| **Icon** | App icons, favicons, social avatars, watermark backgrounds |

### Color treatments

| Background | Icon | Wordmark |
|---|---|---|
| White / Cloud Bleach (`#F2F2F2`) | Tunic Green `#00CA00` | Fence Green `#073C2B` |
| Tunic Green `#00CA00` | White `#FFFFFF` | Fence Green `#073C2B` |
| Fence Green `#073C2B` | Tunic Green `#00CA00` | White `#FFFFFF` |

### Clear space

Maintain padding on **all four sides** equal to **the height of the lowercase "a"** in the wordmark. Never crowd, never anchor flush to an edge.

### Don'ts

- Don't recolor the icon or wordmark outside the table above
- Don't outline, drop-shadow, or apply effects
- Don't rotate the icon or stretch the lockup
- Don't use the icon as a bullet/inline glyph at body sizes — it's a logo, not an icon

---

## 3. Color

The palette is **green-dominant** with a deep neutral, an aqua tint, and two near-monochrome anchors. Tunic Green leads in most contexts; Fence Green carries weight on dark surfaces and as the brand's primary text-on-light color.

### Tokens

| Token | Name | Hex | Role |
|---|---|---|---|
| `--imani-tunic-green` | **Tunic Green** | `#00CA00` | Primary brand · CTAs · highlight accents · icon fill |
| `--imani-fence-green` | **Fence Green** | `#073C2B` | Dark surfaces · primary headings on light · brand text |
| `--imani-aqua-bliss` | **Aqua Bliss** | `#B8E0D9` | Secondary accent · soft fills · highlight type on dark |
| `--imani-cloud-bleach` | **Cloud Bleach** | `#F2F2F2` | Light surface · page background alt · card fills |
| `--imani-black-feather` | **Black Feather** | `#101C23` | Deepest neutral · body type on light, surface on dark |
| `--imani-white` | White | `#FFFFFF` | Page background · type on dark surfaces |

### Application ratios (rough)

- **Tunic Green** — ~25–35% (the brand voice; never timid)
- **Fence Green** — ~20–30% (the grounding dark)
- **White / Cloud Bleach** — ~30–45% (breathing room)
- **Aqua Bliss** — ≤10% (accents, callouts, soft secondary)
- **Black Feather** — ≤10% (deep type, occasional dark surface)

### Pairings that work

- Fence Green surface + White type + Tunic Green accent (the hero pairing — see brand cover)
- White surface + Fence Green type + Tunic Green logo/CTA
- Tunic Green surface + White type + Fence Green logo
- Black Feather surface + White type + Aqua Bliss subtitle accent

### Pairings to avoid

- Tunic Green type on Aqua Bliss (low contrast)
- Aqua Bliss as a primary surface (it's an accent — rinses out at scale)
- Tunic Green CTA on Tunic Green field (use White or Fence Green inversion)

### Contrast notes

- Tunic Green on Fence Green: passes for large display type, **not** body. Use White or Aqua Bliss for body on Fence Green.
- Body copy on light surfaces should be Fence Green or Black Feather, never Tunic Green.

---

## 4. Typography

Two-font system. The primary face carries the brand's **personality** (rounded, friendly, "fresh"); the secondary face is the **workhorse** (modern geometric sans for body and UI).

### Primary — display / personality

**Agency** — Bold weight, used for major headings, section titles, and short editorial subheads. The brand guide pairs it with the wordmark family — its rounded, slightly idiosyncratic terminals are what makes Imani feel handmade and approachable rather than industrial.

> **Web fallback:** Agency is not on Google Fonts. Use **Fraunces** *(soft optical-sizing)* or **DM Serif Display** as a paid-license substitute, or **Quicksand 700** as a free alternative that preserves the rounded, friendly geometry. Always set `font-family: "Agency", Quicksand, system-ui, sans-serif;`.

### Secondary — workhorse / UI

**DM Sans** — Regular, Medium, Bold. Used for body, subheads, captions, UI labels, and any extended reading.

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Quicksand:wght@500;700&display=swap');

--font-display: "Agency", "Quicksand", system-ui, sans-serif;
--font-body:    "DM Sans", system-ui, sans-serif;
```

### Type scale

| Token | Size / line | Weight | Family | Use |
|---|---|---|---|---|
| `display-xl` | 160 / 0.95 | 700 | Display | Editorial section numerals (e.g. "01", "02") |
| `display-lg` | 96 / 1.05 | 700 | Display | Hero headings |
| `h1` | 64 / 1.1 | 700 | Display | Page titles |
| `h2` | 44 / 1.15 | 700 | Display | Section titles · pairing tagline ("Stains? Not on our palette.") |
| `h3` | 28 / 1.25 | 700 | Body | Card titles · UI section headers |
| `subtitle` | 22 / 1.3 | 500 | Body | Eyebrows, label-style subheads |
| `body` | 16 / 1.55 | 400 | Body | Default paragraph |
| `body-sm` | 14 / 1.5 | 400 | Body | Secondary, meta |
| `caption` | 12 / 1.4 | 500 | Body | Color-token labels, footnotes, hex codes |

### Pairing rules

- **Display = Agency, never DM Sans.** The personality lives in the display face; using DM Sans for h1/h2 strips the brand.
- **Body = DM Sans, never Agency.** Agency at body sizes reduces readability.
- **Eyebrow + title pairing** (used throughout the brand book): small green Agency eyebrow over large Fence-Green Agency title — e.g. "The fresh face of clean" / "Logo".
- Avoid italics; the brand book has none. Use weight or color for emphasis.

---

## 5. Iconography & Graphics

### The icon as a graphic device

The petal icon doubles as a decorative motif. Use it:

- **Large + low opacity (8–15%)** as a watermark/background flourish, bleeding off-canvas at the corner. (See cover and section opener layouts.)
- **Tonal** — petal in a slightly lighter or darker shade of the surface color (e.g. on Fence Green, draw the petal in `#0E5A3F` at full opacity for a "ghosted" texture).
- **Cropped to bleed** — never centered as a full standalone shape unless it's *the* logo.

### Don't

- Don't draw new flora, leaves, water-drops, or sparkles. The petal is the only brand-native graphic.
- Don't combine multiple petals into patterns or kaleidoscopes.
- Don't tilt or rotate the petal arbitrarily — keep its orientation as in the master logo.

### Section openers

The brand book uses **giant outlined or filled numerals** ("01", "02", …) bleeding off the left edge as section markers. Reuse this pattern for chapter dividers, slide section titles, and report covers.

```text
[ "02"  bleeding off left edge ]   [ Title (Agency h1) ]
                                   [ Tagline (Agency h2, Tunic Green) ]
                                   [ Body paragraph (DM Sans, ~480px col) ]
```

---

## 6. Layout & Composition

### Grid

- **12-column** for marketing, **8-column** for product UI
- **Gutter:** 24px desktop / 16px mobile
- **Page margin:** 64px desktop / 24px mobile
- Single-column reading width: **max 560px** for body copy

### Spacing scale (4px base)

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`

```css
--space-1: 4px;  --space-2: 8px;   --space-3: 12px;  --space-4: 16px;
--space-5: 24px; --space-6: 32px;  --space-8: 48px;  --space-10: 64px;
--space-12: 96px; --space-16: 128px;
```

### Radii

- `--radius-sm: 6px` — inputs, tags
- `--radius-md: 12px` — buttons, small cards
- `--radius-lg: 20px` — cards, modals
- `--radius-xl: 32px` — feature panels, hero containers
- `--radius-pill: 999px` — pill buttons, capsule labels

The brand reads soft and rounded — favor `md`/`lg` over square.

### Elevation

The brand is mostly **flat**. Use shadows sparingly.

- `--shadow-sm: 0 1px 2px rgba(7, 60, 43, 0.06)` — input focus, list dividers
- `--shadow-md: 0 6px 18px rgba(7, 60, 43, 0.10)` — cards lifted off page
- `--shadow-lg: 0 18px 48px rgba(7, 60, 43, 0.16)` — modals, focused panels

Tint shadows with Fence Green, not pure black — keeps depth on-brand.

---

## 7. Components

### Buttons

| Variant | Surface | Type | State |
|---|---|---|---|
| **Primary** | `Tunic Green` fill | White, DM Sans 500, 16px | Hover: darken 6% · Active: darken 12% · Focus: 2px Aqua Bliss ring |
| **Secondary (dark)** | `Fence Green` fill | White, DM Sans 500 | Hover: lighten 8% |
| **Outline** | Transparent, 1.5px Fence Green border | Fence Green | Hover: Cloud Bleach fill |
| **Ghost** | Transparent | Fence Green | Hover: Cloud Bleach fill |
| **Inverse (on dark)** | White fill | Fence Green type | Hover: Aqua Bliss fill |

- Height: 44px default, 36px compact, 56px hero
- Padding: 16px / 24px / 32px (compact / default / hero) horizontal
- Radius: `md` (12px), or `pill` for marketing CTAs
- Icon-left allowed; never both sides
- Header action groups must keep paired controls the same height. If an icon-only color-mode button sits next to an "Agent brief" button, both use the compact 36px height.

### Navigation / Site Shell

- Homepage and showcase pages share the same navbar rhythm: 64px header height, 24px horizontal padding, and a `1680px` max content width.
- Do not mix marketing-header spacing with product-showcase spacing inside the same site.
- Header controls on dark brand surfaces must use explicit dark-surface foreground/border treatment; do not rely on default `--foreground` if it resolves to Fence Green on Fence Green.
- Keep nav links compact and readable. Primary header actions may use default buttons; secondary navigation links may use compact/ghost treatment.

### Inputs

- Height 44px, radius `md`, 1.5px Cloud-Bleach-darkened border
- Focus: border becomes Tunic Green, plus 3px Aqua-Bliss outer ring
- Error: border Black Feather + tiny inline message in `body-sm`
- Label above field, DM Sans 500, 14px, Fence Green

### Cards

- Surface: White or Cloud Bleach
- Radius: `lg` (20px)
- Padding: `space-6` (32px)
- Optional Tunic Green 4px top accent **only** for promotional/feature cards — never default

### Tags / Pills

- `pill` radius, 6px / 12px padding, DM Sans 500 12px
- Variants: `Tunic Green / White`, `Aqua Bliss / Fence Green`, `Cloud Bleach / Fence Green`

### Surfaces

| Token | Color | Use |
|---|---|---|
| `surface-page` | White | Default page |
| `surface-page-alt` | Cloud Bleach | Section banding, soft contrast |
| `surface-brand-dark` | Fence Green | Hero blocks, footers, section openers |
| `surface-brand-vivid` | Tunic Green | Promo banners, CTAs at full bleed |
| `surface-brand-soft` | Aqua Bliss | Callouts, notes, highlight quotes |

---

## 8. Imagery & Photography

The brand book leans on **product mockups and lifestyle shots** rather than illustration. Direction:

- Bright, naturally lit, lots of negative space
- White, eucalyptus, raw wood, ceramic, brushed steel — material vocabulary
- Avoid: dramatic shadows, hyper-saturation, stock-photo "happy cleaner" tropes
- When type sits over imagery, use a **Fence Green protection block** at 90% opacity rather than a gradient — keeps it crisp

For placeholders before final photography exists, render a Cloud Bleach panel with monospace 12px label in Fence Green: `[ product shot — counter-spray, 4:5 ]`.

---

## 9. Voice & Copy

- **Headlines** are punny, short, water/clean-themed. Reserve them for marketing — never put a pun on a button or error message.
- **Body** is plain, warm, factual. Talk about ingredients, refills, and impact in concrete numbers.
- **UI microcopy** is direct. "Add to cart", not "Sparkle it into your basket".
- Sentence case for buttons and form labels. Title Case for section headings is fine.
- Em dashes welcome. Exclamation points: max one per page.

---

## 10. Quick reference — CSS tokens

```css
:root {
  /* Color */
  --imani-tunic-green:  #00CA00;
  --imani-fence-green:  #073C2B;
  --imani-aqua-bliss:   #B8E0D9;
  --imani-cloud-bleach: #F2F2F2;
  --imani-black-feather:#101C23;
  --imani-white:        #FFFFFF;

  /* Type */
  --font-display: "Agency", "Quicksand", system-ui, sans-serif;
  --font-body:    "DM Sans", system-ui, sans-serif;

  /* Spacing (4px base) */
  --space-1: 4px;  --space-2: 8px;  --space-3: 12px; --space-4: 16px;
  --space-5: 24px; --space-6: 32px; --space-8: 48px; --space-10: 64px;
  --space-12: 96px; --space-16: 128px;

  /* Radius */
  --radius-sm: 6px; --radius-md: 12px; --radius-lg: 20px;
  --radius-xl: 32px; --radius-pill: 999px;

  /* Shadow (Fence-Green-tinted) */
  --shadow-sm: 0 1px 2px rgba(7, 60, 43, 0.06);
  --shadow-md: 0 6px 18px rgba(7, 60, 43, 0.10);
  --shadow-lg: 0 18px 48px rgba(7, 60, 43, 0.16);
}
```

---

## 11. shadcn/ui token system

This section maps Imani's brand palette onto shadcn/ui's semantic token contract so any shadcn component (Button, Card, Dialog, Input, Select, Tabs, Toast, etc.) renders on-brand out of the box. Tokens follow the standard shadcn names — swap these into `app/globals.css` (or wherever your shadcn install keeps its CSS variables).

> **Format:** OKLCH for perceptual consistency in light/dark. shadcn/ui v0.8+ ships in OKLCH; earlier versions used HSL — both maps below.

### 11.1 Semantic palette (OKLCH)

```css
@layer base {
  :root {
    /* Surfaces */
    --background:          oklch(1 0 0);                /* White */
    --foreground:          oklch(0.22 0.04 165);        /* Fence Green */

    --card:                oklch(1 0 0);
    --card-foreground:     oklch(0.22 0.04 165);

    --popover:             oklch(1 0 0);
    --popover-foreground:  oklch(0.22 0.04 165);

    /* Brand */
    --primary:             oklch(0.74 0.27 142);        /* Tunic Green #00CA00 */
    --primary-foreground:  oklch(1 0 0);

    --secondary:           oklch(0.22 0.04 165);        /* Fence Green */
    --secondary-foreground:oklch(1 0 0);

    --accent:              oklch(0.88 0.05 175);        /* Aqua Bliss */
    --accent-foreground:   oklch(0.22 0.04 165);        /* Fence Green */

    /* Quiet */
    --muted:               oklch(0.96 0 0);             /* Cloud Bleach */
    --muted-foreground:    oklch(0.45 0.02 165);        /* Fence Green @ 60% */

    /* Status */
    --destructive:         oklch(0.58 0.22 27);         /* Red */
    --destructive-foreground: oklch(1 0 0);
    --success:             oklch(0.74 0.27 142);        /* same as Tunic */
    --success-foreground:  oklch(1 0 0);
    --warning:             oklch(0.82 0.16 85);
    --warning-foreground:  oklch(0.22 0.04 165);
    --info:                oklch(0.88 0.05 175);
    --info-foreground:     oklch(0.22 0.04 165);

    /* Lines & inputs */
    --border:              oklch(0.92 0.01 165);
    --input:               oklch(0.92 0.01 165);
    --ring:                oklch(0.74 0.27 142);        /* Tunic — focus ring */

    /* Charts (8 hues, on-brand) */
    --chart-1: oklch(0.74 0.27 142);   /* Tunic Green */
    --chart-2: oklch(0.22 0.04 165);   /* Fence Green */
    --chart-3: oklch(0.88 0.05 175);   /* Aqua Bliss */
    --chart-4: oklch(0.55 0.13 200);   /* Deep aqua */
    --chart-5: oklch(0.82 0.16 85);    /* Citrus warning */
    --chart-6: oklch(0.45 0.18 142);   /* Mid green */
    --chart-7: oklch(0.65 0.22 30);    /* Coral counterpoint */
    --chart-8: oklch(0.30 0.05 240);   /* Slate blue */

    /* Sidebar (shadcn pattern) */
    --sidebar:                       oklch(0.98 0.005 165);
    --sidebar-foreground:            oklch(0.22 0.04 165);
    --sidebar-primary:               oklch(0.74 0.27 142);
    --sidebar-primary-foreground:    oklch(1 0 0);
    --sidebar-accent:                oklch(0.94 0.02 165);
    --sidebar-accent-foreground:     oklch(0.22 0.04 165);
    --sidebar-border:                oklch(0.92 0.01 165);
    --sidebar-ring:                  oklch(0.74 0.27 142);

    /* Radius (shadcn uses one base + computed sm/md/lg/xl) */
    --radius: 0.75rem;                /* 12px — matches Imani --radius-md */
  }

  .dark {
    --background:          oklch(0.16 0.02 175);        /* deeper Black Feather */
    --foreground:          oklch(0.98 0.005 165);

    --card:                oklch(0.20 0.03 165);        /* Fence Green raised */
    --card-foreground:     oklch(0.98 0.005 165);

    --popover:             oklch(0.20 0.03 165);
    --popover-foreground:  oklch(0.98 0.005 165);

    --primary:             oklch(0.78 0.27 142);        /* Tunic boosted for dark */
    --primary-foreground:  oklch(0.16 0.02 175);

    --secondary:           oklch(0.28 0.04 165);
    --secondary-foreground:oklch(0.98 0.005 165);

    --accent:              oklch(0.55 0.07 180);        /* dimmed Aqua */
    --accent-foreground:   oklch(0.98 0.005 165);

    --muted:               oklch(0.24 0.02 165);
    --muted-foreground:    oklch(0.72 0.02 165);

    --destructive:         oklch(0.65 0.22 27);
    --destructive-foreground: oklch(0.98 0.005 165);
    --success:             oklch(0.78 0.27 142);
    --success-foreground:  oklch(0.16 0.02 175);
    --warning:             oklch(0.82 0.16 85);
    --warning-foreground:  oklch(0.16 0.02 175);
    --info:                oklch(0.65 0.10 180);
    --info-foreground:     oklch(0.16 0.02 175);

    --border:              oklch(0.28 0.03 165);
    --input:               oklch(0.28 0.03 165);
    --ring:                oklch(0.78 0.27 142);

    --chart-1: oklch(0.78 0.27 142);
    --chart-2: oklch(0.88 0.05 175);
    --chart-3: oklch(0.65 0.10 180);
    --chart-4: oklch(0.55 0.13 200);
    --chart-5: oklch(0.82 0.16 85);
    --chart-6: oklch(0.55 0.20 142);
    --chart-7: oklch(0.70 0.22 30);
    --chart-8: oklch(0.55 0.07 240);

    --sidebar:                       oklch(0.18 0.025 170);
    --sidebar-foreground:            oklch(0.98 0.005 165);
    --sidebar-primary:               oklch(0.78 0.27 142);
    --sidebar-primary-foreground:    oklch(0.16 0.02 175);
    --sidebar-accent:                oklch(0.24 0.03 165);
    --sidebar-accent-foreground:     oklch(0.98 0.005 165);
    --sidebar-border:                oklch(0.28 0.03 165);
    --sidebar-ring:                  oklch(0.78 0.27 142);
  }
}
```

### 11.2 HSL fallback (shadcn ≤ v0.7)

```css
:root {
  --background: 0 0% 100%;
  --foreground: 156 70% 13%;       /* #073C2B */

  --card: 0 0% 100%;
  --card-foreground: 156 70% 13%;
  --popover: 0 0% 100%;
  --popover-foreground: 156 70% 13%;

  --primary: 120 100% 40%;         /* #00CA00 */
  --primary-foreground: 0 0% 100%;

  --secondary: 156 70% 13%;
  --secondary-foreground: 0 0% 100%;

  --accent: 170 39% 80%;           /* #B8E0D9 */
  --accent-foreground: 156 70% 13%;

  --muted: 0 0% 95%;               /* #F2F2F2 */
  --muted-foreground: 156 18% 35%;

  --destructive: 0 72% 51%;
  --destructive-foreground: 0 0% 100%;

  --border: 156 10% 90%;
  --input:  156 10% 90%;
  --ring:   120 100% 40%;

  --radius: 0.75rem;
}

.dark {
  --background: 195 30% 10%;       /* #101C23-ish */
  --foreground: 0 0% 98%;

  --card: 156 50% 11%;
  --card-foreground: 0 0% 98%;
  --popover: 156 50% 11%;
  --popover-foreground: 0 0% 98%;

  --primary: 120 100% 45%;
  --primary-foreground: 195 30% 10%;

  --secondary: 156 30% 22%;
  --secondary-foreground: 0 0% 98%;

  --accent: 170 20% 35%;
  --accent-foreground: 0 0% 98%;

  --muted: 156 20% 18%;
  --muted-foreground: 156 10% 70%;

  --destructive: 0 70% 55%;
  --destructive-foreground: 0 0% 98%;

  --border: 156 20% 22%;
  --input:  156 20% 22%;
  --ring:   120 100% 45%;
}
```

### 11.3 Tailwind v4 — `@theme` block

```css
@import "tailwindcss";

@theme inline {
  /* Colors — every token wired to a Tailwind utility */
  --color-background: var(--background);
  --color-foreground: var(--foreground);

  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);

  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);

  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-success: var(--success);
  --color-success-foreground: var(--success-foreground);
  --color-warning: var(--warning);
  --color-warning-foreground: var(--warning-foreground);
  --color-info: var(--info);
  --color-info-foreground: var(--info-foreground);

  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);

  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-chart-6: var(--chart-6);
  --color-chart-7: var(--chart-7);
  --color-chart-8: var(--chart-8);

  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  /* Type */
  --font-sans: "DM Sans", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Agency", "Quicksand", ui-sans-serif, system-ui, sans-serif;
  --font-mono: ui-monospace, "JetBrains Mono", Menlo, Consolas, monospace;

  /* Radius — shadcn computes sm/md/lg/xl from --radius */
  --radius-sm: calc(var(--radius) - 6px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 8px);

  /* Shadows — Fence-Green-tinted */
  --shadow-xs: 0 1px 2px rgba(7, 60, 43, 0.04);
  --shadow-sm: 0 1px 2px rgba(7, 60, 43, 0.06);
  --shadow-md: 0 6px 18px rgba(7, 60, 43, 0.10);
  --shadow-lg: 0 18px 48px rgba(7, 60, 43, 0.16);
  --shadow-xl: 0 24px 64px rgba(7, 60, 43, 0.20);

  /* Animation — shadcn standard */
  --animate-accordion-down: accordion-down 0.2s ease-out;
  --animate-accordion-up:   accordion-up   0.2s ease-out;
}
```

### 11.4 Tailwind v3 — `tailwind.config.ts`

```ts
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["DM Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Agency", "Quicksand", "ui-sans-serif", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

### 11.5 Token map — brand → shadcn semantic

| Brand token | shadcn semantic | Where it shows up |
|---|---|---|
| Tunic Green `#00CA00` | `--primary`, `--ring`, `--success`, `--chart-1` | Primary buttons, focus rings, default switch/checkbox, success toasts, primary chart series |
| Fence Green `#073C2B` | `--secondary`, `--foreground`, `--sidebar-foreground` | Secondary buttons, body text, sidebar nav text |
| Aqua Bliss `#B8E0D9` | `--accent`, `--info` | Hover surfaces on nav items, info callouts, soft chips |
| Cloud Bleach `#F2F2F2` | `--muted` | Disabled fields, skeletons, subtle banding |
| Black Feather `#101C23` | `.dark --background` | Dark-mode page surface |
| White `#FFFFFF` | `--background`, `--card`, `--popover`, `--primary-foreground` | Default surface, card fills, on-green type |

### 11.6 Component-by-component on-brand defaults

| shadcn component | What to expect with these tokens |
|---|---|
| **Button** (default) | Tunic Green fill, white text, Tunic ring on focus. `variant="secondary"` = Fence Green. `variant="outline"` = transparent w/ Fence border. `variant="ghost"` = Cloud Bleach hover. `variant="destructive"` = red. |
| **Input / Textarea / Select** | White surface, `--input` border, Tunic ring on focus, Cloud Bleach disabled state |
| **Card** | White surface, soft Fence-tinted shadow on hover, `--radius` (12px) corners |
| **Dialog / Sheet / Popover** | White surface, `--shadow-lg`, Fence Green text |
| **Tabs / ToggleGroup** | Cloud Bleach track, Tunic Green active pill |
| **Badge** | `default` = Tunic, `secondary` = Fence, `outline` = bordered, `destructive` = red |
| **Toast (sonner)** | White surface · Fence text · Tunic accent for success · red for destructive |
| **Sidebar** | Slightly off-white `--sidebar`, Tunic Green active item, Aqua Bliss hover state |
| **Chart (recharts)** | 8-color brand-aware ramp; Tunic primary, Fence secondary, Aqua tertiary |
| **Skeleton** | `--muted` shimmer on Cloud Bleach |
| **Header / Navbar** | Shared 64px shell, 24px horizontal padding, `1680px` max width. Paired header actions use matching compact 36px control height. |

### 11.7 Install

```bash
npx shadcn@latest init
# When prompted, choose: New York · OKLCH · CSS variables: yes
# Then paste 11.1 into app/globals.css and 11.3 into the same file under @theme
```

For new components:

```bash
npx shadcn@latest add button card dialog input select tabs toast sidebar chart
```

All shadcn components consume `--primary`, `--secondary`, `--accent`, `--muted`, etc., so they'll pick up the Imani brand automatically — no per-component overrides needed.

### 11.8 Required web assets

Every Imani web project must generate these assets from the official logo sources:

- `/favicon.svg` copied from `/favicon-real.svg`
- `/favicon.ico` containing 16px, 32px, and 48px PNG entries for browser fallback
- `/icons/favicon-16x16.png`
- `/icons/favicon-32x32.png`
- `/apple-touch-icon.png`
- `/icons/apple-touch-icon.png`
- `/icons/android-chrome-192x192.png`
- `/icons/android-chrome-512x512.png`
- `/icons/maskable-icon-512x512.png`
- `/site.webmanifest`
- `/og/imani-og.png`
- `/og/imani-twitter.png`

---

## 12. Don't-do checklist

- ❌ Drop shadows on the logo or icon
- ❌ Tunic Green body copy
- ❌ Aqua Bliss as a page background
- ❌ Hand-drawn leaves, droplets, sparkles, or "eco" cliché icons
- ❌ More than one exclamation point per page
- ❌ Italics anywhere
- ❌ Display type (Agency) at body sizes
- ❌ The petal icon rotated, recolored outside the approved table, or multiplied into patterns
