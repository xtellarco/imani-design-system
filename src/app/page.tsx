import {
  ArrowRight,
  Check,
  ClipboardList,
  Download,
  ExternalLink,
  FileText,
  GitBranch,
  PackageCheck,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import { ImaniLogo, ImaniMark } from "@/components/imani-logo";
import {
  imaniColors,
  imaniRadii,
  imaniSpacing,
  typeScale,
  componentRules,
} from "@/lib/imani-design-system";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ColorModeSwitcher } from "@/components/color-mode-switcher";

const sectionLinks = [
  ["Foundation", "#foundation"],
  ["Primitives", "#primitives"],
  ["Components", "#components"],
  ["Agents", "#agents"],
] as const;

const surfaces = [
  ["surface-page", "White", "Default page", "bg-white text-imani-fence-green"],
  [
    "surface-page-alt",
    "Cloud Bleach",
    "Section banding",
    "bg-imani-cloud-bleach text-imani-fence-green",
  ],
  [
    "surface-brand-dark",
    "Fence Green",
    "Heroes and footers",
    "bg-imani-fence-green text-white",
  ],
  [
    "surface-brand-vivid",
    "Tunic Green",
    "Full-bleed CTAs",
    "bg-imani-tunic-green text-white",
  ],
  [
    "surface-brand-soft",
    "Aqua Bliss",
    "Callouts and notes",
    "bg-imani-aqua-bliss text-imani-fence-green",
  ],
] as const;

const implementationSteps = [
  "Start from tokens in src/app/globals.css and src/lib/imani-design-system.ts.",
  "Compose screens with shadcn/ui source components from src/components/ui.",
  "Use the local Agency font for display and DM Sans for all body/UI copy.",
  "Ship on Vercel under the imani-design-system project.",
] as const;

const githubUrl = "https://github.com/xtellarco/imani-design-system";

export default function Home() {
  return (
    <main className="bg-white text-imani-black-feather dark:bg-[var(--color-surface-brand-dark)] dark:text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[var(--color-surface-brand-dark)]/95 text-white backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1680px] items-center justify-between gap-6 px-6">
          <a href="#" className="shrink-0">
            <ImaniLogo treatment="dark" />
          </a>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {sectionLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-md px-3 py-2 text-sm font-medium text-white/78 transition hover:bg-white/10 hover:text-white"
              >
                {label}
              </a>
            ))}
            <a
              href="/showcase"
              className="rounded-md px-3 py-2 text-sm font-medium text-white/78 transition hover:bg-white/10 hover:text-white"
            >
              Showcase
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="inverse" size="sm" className="hidden sm:inline-flex">
              <a href="/llms.txt">
                <ClipboardList data-icon="inline-start" />
                Agent brief
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              aria-label="Open GitHub repository"
              className="hidden size-9 border border-white/20 text-white hover:bg-white/10 hover:text-white sm:inline-flex"
            >
              <a href={githubUrl} target="_blank" rel="noreferrer">
                <GitBranch />
              </a>
            </Button>
            <ColorModeSwitcher surface="dark" size="compact" />
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[var(--color-surface-brand-dark)] text-white">
        <ImaniMark className="absolute -right-20 top-8 size-[420px] opacity-[0.12]" />
        <div className="imani-container relative grid min-h-[calc(100vh-64px)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <p className="font-display text-2xl font-bold text-imani-tunic-green">
              The fresh face of clean
            </p>
            <h1 className="mt-5 max-w-4xl font-display text-6xl font-bold leading-[1.02] text-balance sm:text-7xl lg:text-8xl">
              Imani design system
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/82">
              A production-ready technical site for scaling Imani interfaces with
              exact brand primitives, shadcn/ui source components, and agent-readable
              implementation rules.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#components">
                  <PackageCheck data-icon="inline-start" />
                  View components
                </a>
              </Button>
              <Button asChild variant="inverse" size="lg">
                <a href="#agents">
                  <ArrowRight data-icon="inline-start" />
                  Read the build rules
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-xl border border-white/14 bg-white p-5 text-imani-fence-green shadow-[var(--shadow-lg)]">
            <div className="rounded-lg bg-imani-cloud-bleach p-5">
              <div className="flex items-center justify-between gap-4">
                <ImaniLogo />
                <Badge className="bg-imani-aqua-bliss text-imani-fence-green">
                  shadcn/ui
                </Badge>
              </div>
              <div className="mt-8 grid gap-3">
                {componentRules.slice(0, 4).map((rule) => (
                  <div
                    key={rule}
                    className="flex items-start gap-3 rounded-md bg-white p-4 text-sm leading-6 shadow-[var(--shadow-sm)]"
                  >
                    <Check className="mt-0.5 size-4 text-imani-tunic-green" />
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="foundation" className="py-20 dark:bg-[var(--color-surface-brand-dark)]">
        <div className="imani-container grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionIntro
            number="01"
            eyebrow="Wiping the slate clean"
            title="Foundation"
            body="The system turns the brand book into implementation primitives: colors, type, space, radii, shadows, logo behavior, and shadcn component defaults."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {[
              ["Mission", "Effective cleaning products that protect the environment and customer health."],
              ["Pillars", "Sustainability, innovation, care, and convenience guide every UI decision."],
              ["Voice", "Confident, light, witty in marketing, direct in functional UI."],
              ["Composition", "12-column marketing grids, 8-column product grids, soft radii, flat depth."],
            ].map(([title, body]) => (
              <Card key={title} className="bg-imani-cloud-bleach">
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription className="text-imani-black-feather/72">
                    {body}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="primitives" className="bg-imani-cloud-bleach py-20 dark:bg-[var(--color-surface-brand-dark-raised)]">
        <div className="imani-container space-y-14">
          <SectionIntro
            number="02"
            eyebrow="Bubbles of clarity"
            title="Primitives"
            body="Every UI component on this site inherits from the same tokens exposed in CSS and TypeScript for repeatable consumption across projects."
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {imaniColors[0].colors.map(([token, name, hex, role, foreground]) => (
              <Card key={token} className="bg-white">
                <CardContent className="pt-0">
                  <div
                    className="flex h-36 flex-col justify-between rounded-lg p-4"
                    style={{ backgroundColor: hex, color: foreground }}
                  >
                    <span className="text-xs font-bold uppercase tracking-normal">
                      {token}
                    </span>
                    <span className="font-display text-4xl font-bold">{name}</span>
                  </div>
                  <div className="mt-4 space-y-2">
                    <p className="font-mono text-xs font-medium text-imani-fence-green">
                      {hex}
                    </p>
                    <p className="text-sm leading-6 text-imani-black-feather/72">
                      {role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Type Scale</CardTitle>
                <CardDescription>
                  Display type uses Agency; body and UI use DM Sans.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Token</TableHead>
                      <TableHead>Size / line</TableHead>
                      <TableHead>Family</TableHead>
                      <TableHead>Use</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {typeScale.map(([token, size, weight, family, use]) => (
                      <TableRow key={token}>
                        <TableCell className="font-mono text-xs">{token}</TableCell>
                        <TableCell>{size}</TableCell>
                        <TableCell>{family} {weight}</TableCell>
                        <TableCell>{use}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <div className="grid gap-6">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Spacing</CardTitle>
                  <CardDescription>4px base scale for layouts and controls.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {imaniSpacing.map(([token, value]) => (
                    <div key={token} className="grid grid-cols-[96px_1fr_48px] items-center gap-3">
                      <span className="font-mono text-xs text-imani-fence-green">{token}</span>
                      <span className="h-3 rounded-sm bg-imani-tunic-green" style={{ width: value }} />
                      <span className="text-sm text-imani-black-feather/70">{value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Radii</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-3">
                  {imaniRadii.map(([token, value, use]) => (
                    <div key={token} className="flex items-center gap-4">
                      <div
                        className="size-12 border-[1.5px] border-imani-fence-green bg-imani-aqua-bliss"
                        style={{ borderRadius: value }}
                      />
                      <div>
                        <p className="font-mono text-xs text-imani-fence-green">{token}</p>
                        <p className="text-sm text-imani-black-feather/70">{value} · {use}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="components" className="py-20 dark:bg-[var(--color-surface-brand-dark)]">
        <div className="imani-container space-y-12">
          <SectionIntro
            number="03"
            eyebrow="A font as fresh as our suds"
            title="Components"
            body="The examples below consume shadcn/ui source components customized with Imani token defaults, so downstream projects can copy patterns without reinterpreting the brand."
          />

          <Tabs defaultValue="buttons" className="gap-6">
            <TabsList className="h-auto flex-wrap rounded-md bg-imani-cloud-bleach p-1">
              <TabsTrigger value="buttons" className="px-4 py-2">Buttons</TabsTrigger>
              <TabsTrigger value="forms" className="px-4 py-2">Forms</TabsTrigger>
              <TabsTrigger value="cards" className="px-4 py-2">Cards</TabsTrigger>
              <TabsTrigger value="surfaces" className="px-4 py-2">Surfaces</TabsTrigger>
            </TabsList>

            <TabsContent value="buttons">
              <Card>
                <CardHeader>
                  <CardTitle>Button System</CardTitle>
                  <CardDescription>
                    Primary actions are Tunic Green. Secondary dark actions are Fence Green.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap items-center gap-3">
                  <Button><PackageCheck data-icon="inline-start" /> Add refill</Button>
                  <Button variant="secondary"><ShieldCheck data-icon="inline-start" /> Verify batch</Button>
                  <Button variant="outline"><Download data-icon="inline-start" /> Download tokens</Button>
                  <Button variant="ghost"><SlidersHorizontal data-icon="inline-start" /> Adjust</Button>
                  <div className="rounded-lg bg-[var(--color-surface-brand-dark-elevated)] p-3">
                    <Button variant="inverse"><ExternalLink data-icon="inline-start" /> Open guide</Button>
                  </div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button size="icon" aria-label="Copy component rules">
                        <ClipboardList />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Copy component rules</TooltipContent>
                  </Tooltip>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="forms">
              <Card>
                <CardHeader>
                  <CardTitle>Form Controls</CardTitle>
                  <CardDescription>
                    Labels are direct, controls are 44px high, focus uses Tunic Green plus Aqua Bliss.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="product-name">Product name</Label>
                      <Input id="product-name" defaultValue="Counter Spray" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="surface">Surface</Label>
                      <Select defaultValue="cloud">
                        <SelectTrigger id="surface">
                          <SelectValue placeholder="Choose surface" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="white">White</SelectItem>
                          <SelectItem value="cloud">Cloud Bleach</SelectItem>
                          <SelectItem value="fence">Fence Green</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between rounded-md border border-border p-4">
                      <Label htmlFor="refill" className="leading-6">
                        Refill reminder
                      </Label>
                      <Switch id="refill" defaultChecked />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notes">Ingredient note</Label>
                    <Textarea
                      id="notes"
                      defaultValue="Plant-based surfactants, refillable packaging, and fragrance disclosure by batch."
                    />
                    <p className="text-sm leading-6 text-imani-black-feather/64">
                      UI microcopy stays practical: labels describe the task, not the pun.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cards">
              <div className="grid gap-5 md:grid-cols-3">
                {[
                  ["Feature card", "White surface, 32px padding, 20px radius, minimal shadow."],
                  ["Promo card", "Optional 4px Tunic Green top accent for promotional content only."],
                  ["Product placeholder", "Use Cloud Bleach with a monospace image label until final photography exists."],
                ].map(([title, body], index) => (
                  <Card
                    key={title}
                    className={index === 1 ? "border-t-4 border-t-imani-tunic-green" : ""}
                  >
                    <CardHeader>
                      <CardTitle>{title}</CardTitle>
                      <CardDescription>{body}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex aspect-[4/5] items-center justify-center rounded-lg bg-imani-cloud-bleach font-mono text-xs text-imani-fence-green">
                        [ product shot - counter-spray, 4:5 ]
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="surfaces">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                {surfaces.map(([token, label, use, classes]) => (
                  <div key={token} className={`min-h-48 rounded-xl p-5 ${classes}`}>
                    <p className="font-mono text-xs opacity-75">{token}</p>
                    <h3 className="mt-6 font-display text-3xl font-bold">{label}</h3>
                    <p className="mt-3 text-sm leading-6 opacity-75">{use}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="bg-[var(--color-surface-brand-dark)] py-20 text-white">
        <div className="imani-container grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionIntro
            number="04"
            eyebrow="Stains? Not on our palette."
            title="Layouts"
            body="Marketing pages use a 12-column grid with generous margins. Product UI can tighten to 8 columns while keeping the same color, spacing, and type rules."
            dark
          />
          <div className="imani-grid-mark grid grid-cols-4 gap-4 rounded-xl border border-white/12 p-5">
            {Array.from({ length: 12 }, (_, index) => (
              <div
                key={index}
                className="flex h-24 items-end rounded-md bg-white/10 p-3 text-xs font-medium text-white/68"
              >
                {String(index + 1).padStart(2, "0")}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="agents" className="py-20 dark:bg-[var(--color-surface-brand-dark)]">
        <div className="imani-container grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionIntro
            number="05"
            eyebrow="Clean handoff"
            title="Agent resources"
            body="This project includes both repo-local and website-visible resources so future agents can build Imani surfaces consistently."
          />
          <div className="space-y-5">
            <Card>
              <CardHeader>
                <CardTitle>Repeatable Build Contract</CardTitle>
                <CardDescription>
                  Root AGENTS.md documents stack, design constraints, token sources, shadcn usage, and Vercel deployment target.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {implementationSteps.map((step, index) => (
                    <AccordionItem key={step} value={`step-${index}`}>
                      <AccordionTrigger>Step {index + 1}</AccordionTrigger>
                      <AccordionContent>{step}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <a
                href="/agents.md"
                className="rounded-lg border border-border bg-imani-cloud-bleach p-6 transition hover:border-imani-tunic-green"
              >
                <ClipboardList className="size-5 text-imani-tunic-green" />
                <h3 className="mt-4 font-sans text-2xl font-bold text-imani-fence-green">
                  /agents.md
                </h3>
                <p className="mt-2 text-sm leading-6 text-imani-black-feather/70">
                  Website-visible guide for agents visiting imani.company.
                </p>
              </a>
              <a
                href="/llms.txt"
                className="rounded-lg border border-border bg-imani-cloud-bleach p-6 transition hover:border-imani-tunic-green"
              >
                <FileText className="size-5 text-imani-tunic-green" />
                <h3 className="mt-4 font-sans text-2xl font-bold text-imani-fence-green">
                  /llms.txt
                </h3>
                <p className="mt-2 text-sm leading-6 text-imani-black-feather/70">
                  Concise crawlable implementation brief for model context.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-imani-cloud-bleach py-10 dark:bg-[var(--color-surface-brand-dark-raised)]">
        <div className="imani-container flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <ImaniLogo />
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="bg-imani-tunic-green text-white">Bun</Badge>
            <Badge className="bg-imani-aqua-bliss text-imani-fence-green">Next.js</Badge>
            <Badge className="bg-imani-fence-green text-white">TypeScript</Badge>
            <Badge className="bg-imani-cloud-bleach text-imani-fence-green">shadcn/ui</Badge>
            <Badge className="bg-imani-black-feather text-white">Vercel</Badge>
            <Button asChild variant="outline" size="sm">
              <a href={githubUrl} target="_blank" rel="noreferrer">
                <GitBranch data-icon="inline-start" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SectionIntro({
  number,
  eyebrow,
  title,
  body,
  dark = false,
}: {
  number: string;
  eyebrow: string;
  title: string;
  body: string;
  dark?: boolean;
}) {
  return (
    <div className="relative">
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -left-8 -top-8 font-display text-9xl font-bold leading-none ${
          dark ? "text-white/10" : "text-imani-fence-green/8"
        }`}
      >
        {number}
      </span>
      <div className="relative max-w-xl">
        <p className="font-display text-2xl font-bold text-imani-tunic-green">
          {eyebrow}
        </p>
        <h2
          className={`mt-3 font-display text-5xl font-bold leading-tight text-balance ${
            dark ? "text-white" : "text-imani-fence-green"
          }`}
        >
          {title}
        </h2>
        <Separator className={`my-6 ${dark ? "bg-white/18" : ""}`} />
        <p className={`text-base leading-7 ${dark ? "text-white/76" : "text-imani-black-feather/72"}`}>
          {body}
        </p>
      </div>
    </div>
  );
}
