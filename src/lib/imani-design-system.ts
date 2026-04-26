import { tokens } from "../../generated/tokens";

export const imaniColors = [
  {
    group: "Brand primitives",
    description: "Identity colors. Use these for logo, brand moments, and approved accent roles.",
    colors: [
      ["--color-brand-tunic-green", "Tunic Green", tokens.colorBrandTunicGreen, "Primary brand, CTAs, active states, highlight accents", "#FFFFFF"],
      ["--color-brand-fence-green", "Fence Green", tokens.colorBrandFenceGreen, "Brand text, headings on light, and dark brand anchor", "#FFFFFF"],
      ["--color-brand-aqua-bliss", "Aqua Bliss", tokens.colorBrandAquaBliss, "Secondary accent, focus ring, soft callout fill", "#073C2B"],
      ["--color-brand-cloud-bleach", "Cloud Bleach", tokens.colorBrandCloudBleach, "Light neutral surface and card fill", "#073C2B"],
      ["--color-brand-black-feather", "Black Feather", tokens.colorBrandBlackFeather, "Deep neutral for body type and occasional dark surfaces", "#FFFFFF"],
      ["--color-brand-white", "White", tokens.colorBrandWhite, "Page surface and type on dark", "#073C2B"],
    ],
  },
  {
    group: "Application surfaces",
    description: "Product UI backgrounds. These are the shadcn-consumable colors for pages, cards, popovers, and dark mode.",
    colors: [
      ["--color-surface-page", "Page", tokens.colorSurfacePage, "Default light page", "#073C2B"],
      ["--color-surface-page-alt", "Page alt", tokens.colorSurfacePageAlt, "Soft section banding", "#073C2B"],
      ["--color-surface-page-warm", "Page warm", tokens.colorSurfacePageWarm, "Fresh off-white product UI background", "#073C2B"],
      ["--color-surface-card", "Card", tokens.colorSurfaceCard, "Default card surface", "#073C2B"],
      ["--color-surface-brand-dark", "Dark app", tokens.colorSurfaceBrandDark, "Primary dark-mode application background", "#FFFFFF"],
      ["--color-surface-brand-dark-raised", "Dark raised", tokens.colorSurfaceBrandDarkRaised, "Cards and raised panels on dark mode", "#FFFFFF"],
      ["--color-surface-brand-dark-elevated", "Dark elevated", tokens.colorSurfaceBrandDarkElevated, "Focused panels and high-emphasis sections", "#FFFFFF"],
      ["--color-surface-popover-dark", "Popover dark", tokens.colorSurfacePopoverDark, "Menus, command palettes, selects on dark mode", "#FFFFFF"],
    ],
  },
  {
    group: "Text",
    description: "Readable foreground colors separated by light and dark UI contexts.",
    colors: [
      ["--color-text-light-primary", "Light primary", tokens.colorTextLightPrimary, "Body text on light surfaces", "#FFFFFF"],
      ["--color-text-light-heading", "Light heading", tokens.colorTextLightHeading, "Headings on light surfaces", "#FFFFFF"],
      ["--color-text-light-secondary", "Light secondary", tokens.colorTextLightSecondary, "Secondary copy on light surfaces", "#073C2B"],
      ["--color-text-light-muted", "Light muted", tokens.colorTextLightMuted, "Hints, placeholders, meta copy", "#073C2B"],
      ["--color-text-dark-primary", "Dark primary", tokens.colorTextDarkPrimary, "Primary text on dark surfaces", "#073C2B"],
      ["--color-text-dark-secondary", "Dark secondary", tokens.colorTextDarkSecondary, "Secondary text on dark surfaces", "#073C2B"],
      ["--color-text-dark-muted", "Dark muted", tokens.colorTextDarkMuted, "Meta and helper text on dark surfaces", "#073C2B"],
    ],
  },
  {
    group: "Semantic states",
    description: "Complementary application states. These are not brand colors; they exist so product UI can communicate clearly.",
    colors: [
      ["--color-state-success", "Success", tokens.colorStateSuccess, "Success text and icons on light", "#FFFFFF"],
      ["--color-state-success-surface", "Success surface", tokens.colorStateSuccessSurface, "Success alert backgrounds", "#073C2B"],
      ["--color-state-success-dark", "Success dark", tokens.colorStateSuccessDark, "Success accent on dark", "#073C2B"],
      ["--color-state-info", "Info", tokens.colorStateInfo, "Informational text and icons", "#FFFFFF"],
      ["--color-state-info-surface", "Info surface", tokens.colorStateInfoSurface, "Info alert backgrounds", "#073C2B"],
      ["--color-state-warning", "Warning", tokens.colorStateWarning, "Warning text and icons", "#FFFFFF"],
      ["--color-state-warning-surface", "Warning surface", tokens.colorStateWarningSurface, "Warning alert backgrounds", "#073C2B"],
      ["--color-state-danger", "Danger", tokens.colorStateDanger, "Destructive actions and errors", "#FFFFFF"],
      ["--color-state-danger-surface", "Danger surface", tokens.colorStateDangerSurface, "Error alert backgrounds", "#073C2B"],
    ],
  },
  {
    group: "Charts",
    description: "Data visualization colors tuned to complement Imani without overusing brand green.",
    colors: [
      ["--color-chart-primary", "Chart primary", tokens.colorChartPrimary, "Primary measures and active bars", "#FFFFFF"],
      ["--color-chart-secondary", "Chart secondary", tokens.colorChartSecondary, "Pale comparison series on dark surfaces", "#073C2B"],
      ["--color-chart-accent", "Chart accent", tokens.colorChartAccent, "Info and aqua-adjacent data series", "#073C2B"],
      ["--color-chart-cool", "Chart cool", tokens.colorChartCool, "Cool blue-green supporting series", "#FFFFFF"],
      ["--color-chart-warning", "Chart warning", tokens.colorChartWarning, "Thresholds and attention ranges", "#073C2B"],
      ["--color-chart-success-deep", "Chart success deep", tokens.colorChartSuccessDeep, "Dense success comparison series", "#FFFFFF"],
      ["--color-chart-danger", "Chart danger", tokens.colorChartDanger, "Failure and exception ranges", "#073C2B"],
      ["--color-chart-indigo", "Chart indigo", tokens.colorChartIndigo, "Rare auxiliary series for crowded charts", "#FFFFFF"],
      ["--color-chart-neutral", "Chart neutral", tokens.colorChartNeutral, "Inactive or baseline series", "#FFFFFF"],
      ["--color-chart-grid", "Chart grid", tokens.colorChartGrid, "Axes, grid lines, and dividers", "#073C2B"],
    ],
  },
  {
    group: "Borders",
    description: "Structure, focus, and separation tokens for inputs, cards, tables, and overlays.",
    colors: [
      ["--color-border-subtle", "Subtle", tokens.colorBorderSubtle, "Light card, table, and input borders", "#073C2B"],
      ["--color-border-strong", "Strong", tokens.colorBorderStrong, "High-emphasis borders on light", "#FFFFFF"],
      ["--color-border-brand", "Brand", tokens.colorBorderBrand, "Brand separators and active accents", "#FFFFFF"],
      ["--color-border-inverse", "Inverse", tokens.colorBorderInverse, "Borders on dark mode surfaces", "#073C2B"],
      ["--color-state-focus", "Focus", tokens.colorStateFocus, "Keyboard and focus rings", "#073C2B"],
    ],
  },
] as const;

export const imaniSpacing = [
  ["--spacing-1", tokens.spacing1],
  ["--spacing-2", tokens.spacing2],
  ["--spacing-3", tokens.spacing3],
  ["--spacing-4", tokens.spacing4],
  ["--spacing-5", tokens.spacing5],
  ["--spacing-6", tokens.spacing6],
  ["--spacing-8", tokens.spacing8],
  ["--spacing-10", tokens.spacing10],
  ["--spacing-12", tokens.spacing12],
  ["--spacing-16", tokens.spacing16],
] as const;

export const imaniRadii = [
  ["--radius-sm", tokens.radiusSm, "Inputs and tags"],
  ["--radius-md", tokens.radiusMd, "Buttons and small controls"],
  ["--radius-lg", tokens.radiusLg, "Cards and modals"],
  ["--radius-xl", tokens.radiusXl, "Feature panels"],
  ["--radius-pill", tokens.radiusPill, "Capsules and marketing CTAs"],
] as const;

export const typeScale = [
  ["display-xl", `${tokens.fontSizeDisplayXl} / ${tokens.fontLineHeightDisplayXl}`, tokens.fontWeightBold, "Display", "Editorial numerals"],
  ["display-lg", `${tokens.fontSizeDisplayLg} / ${tokens.fontLineHeightDisplayLg}`, tokens.fontWeightBold, "Display", "Hero headings"],
  ["h1", `${tokens.fontSizeH1} / ${tokens.fontLineHeightH1}`, tokens.fontWeightBold, "Display", "Page titles"],
  ["h2", `${tokens.fontSizeH2} / ${tokens.fontLineHeightH2}`, tokens.fontWeightBold, "Display", "Section titles"],
  ["h3", `${tokens.fontSizeH3} / ${tokens.fontLineHeightH3}`, tokens.fontWeightBold, "Body", "Card titles"],
  ["subtitle", `${tokens.fontSizeSubtitle} / ${tokens.fontLineHeightSubtitle}`, tokens.fontWeightMedium, "Body", "Eyebrows and label-style subheads"],
  ["body", `${tokens.fontSizeBody} / ${tokens.fontLineHeightBody}`, tokens.fontWeightRegular, "Body", "Default paragraph"],
  ["body-sm", `${tokens.fontSizeBodySm} / ${tokens.fontLineHeightBodySm}`, tokens.fontWeightRegular, "Body", "Secondary and meta"],
  ["caption", `${tokens.fontSizeCaption} / ${tokens.fontLineHeightCaption}`, tokens.fontWeightMedium, "Body", "Token labels and footnotes"],
] as const;

export const componentRules = [
  "Use Tunic Green for primary actions and brand highlights.",
  "Use Fence Green for headings on light surfaces and dark brand bands.",
  "Use DM Sans for body, UI labels, forms, tables, and extended reading.",
  "Use Agency for h1, h2, display numerals, and short editorial subheads.",
  "Keep the petal mark as a logo or large tonal watermark, not as a body icon.",
  "Deploy the site to Vercel as imani-design-system.",
] as const;
