"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  Box,
  CalendarClock,
  Check,
  ChevronDown,
  ClipboardList,
  FlaskConical,
  Gauge,
  GitBranch,
  Layers,
  Menu,
  MoreHorizontal,
  PackageCheck,
  Recycle,
  Route,
  ShieldCheck,
  SlidersHorizontal,
  TrendingUp,
  Truck,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import { ImaniLogo, ImaniMark } from "@/components/imani-logo";
import { ColorModeSwitcher } from "@/components/color-mode-switcher";
import { imaniColors, typeScale } from "@/lib/imani-design-system";
import type { ChartConfig } from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
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
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const metrics = [
  ["Refill rate", "68%", "+12%", PackageCheck],
  ["Batch score", "94", "+4", ShieldCheck],
  ["Orders packed", "1,248", "+18%", Box],
  ["Delivery SLA", "97.2%", "+2.1%", Truck],
] as const;

const orders = [
  ["Counter Spray", "Refill", "Packed", "Kampala"],
  ["Dish Drops", "Starter", "Queued", "Entebbe"],
  ["Floor Wash", "Bulk", "Shipped", "Jinja"],
  ["Glass Cleaner", "Refill", "Packed", "Mbarara"],
] as const;

const usage = [44, 68, 52, 76, 58, 84, 72, 91, 63, 78, 86, 69];

const operationsData = usage.map((packed, index) => ({
  batch: `${index + 1}`,
  packed,
  exceptions: Math.max(10, 100 - packed) / 2,
}));

const operationsChartConfig = {
  packed: {
    label: "Packed",
    color: "var(--chart-1)",
  },
  exceptions: {
    label: "Exceptions",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

const refillChannelData = [
  { day: "Mon", refill: 38, starter: 14, bulk: 8 },
  { day: "Tue", refill: 56, starter: 18, bulk: 11 },
  { day: "Wed", refill: 48, starter: 20, bulk: 10 },
  { day: "Thu", refill: 72, starter: 24, bulk: 14 },
  { day: "Fri", refill: 61, starter: 22, bulk: 16 },
  { day: "Sat", refill: 82, starter: 28, bulk: 18 },
  { day: "Sun", refill: 69, starter: 21, bulk: 13 },
];

const refillChannelChartConfig = {
  refill: {
    label: "Refill plans",
    color: "var(--chart-1)",
  },
  starter: {
    label: "Starter kits",
    color: "var(--chart-3)",
  },
  bulk: {
    label: "Bulk",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

const inventoryForecastData = [
  { week: "W1", onHand: 52, demand: 34 },
  { week: "W2", onHand: 64, demand: 42 },
  { week: "W3", onHand: 48, demand: 39 },
  { week: "W4", onHand: 71, demand: 51 },
  { week: "W5", onHand: 86, demand: 58 },
  { week: "W6", onHand: 62, demand: 54 },
  { week: "W7", onHand: 44, demand: 61 },
  { week: "W8", onHand: 58, demand: 66 },
  { week: "W9", onHand: 73, demand: 72 },
  { week: "W10", onHand: 89, demand: 76 },
];

const inventoryForecastChartConfig = {
  onHand: {
    label: "On hand",
    color: "var(--chart-1)",
  },
  demand: {
    label: "Projected demand",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

const analyticsData = [
  { month: "Jan", visitors: 24, starts: 10 },
  { month: "Feb", visitors: 36, starts: 14 },
  { month: "Mar", visitors: 44, starts: 18 },
  { month: "Apr", visitors: 62, starts: 22 },
  { month: "May", visitors: 40, starts: 17 },
  { month: "Jun", visitors: 55, starts: 21 },
  { month: "Jul", visitors: 66, starts: 28 },
  { month: "Aug", visitors: 58, starts: 24 },
  { month: "Sep", visitors: 39, starts: 16 },
  { month: "Oct", visitors: 52, starts: 20 },
  { month: "Nov", visitors: 70, starts: 31 },
  { month: "Dec", visitors: 31, starts: 12 },
];

const analyticsChartConfig = {
  visitors: {
    label: "Guide views",
    color: "var(--chart-1)",
  },
  starts: {
    label: "Refill finder starts",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

const dispatchDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

const routeLabels = {
  kampala: "Kampala refill loop",
  entebbe: "Entebbe refill",
  jinja: "Jinja bulk dispatch",
} as const;

const githubUrl = "https://github.com/xtellarco/imani-design-system";

export default function ShowcasePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1680px] items-center justify-between gap-6 px-6">
          <ImaniLogo />
          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" size="sm">
              <Link href="/">
                <ArrowLeft data-icon="inline-start" />
                Overview
              </Link>
            </Button>
            <Button asChild size="sm">
              <a href="/llms.txt">
                <ClipboardList data-icon="inline-start" />
                Agent brief
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              aria-label="Open GitHub repository"
              className="size-9"
            >
              <a href={githubUrl} target="_blank" rel="noreferrer">
                <GitBranch />
              </a>
            </Button>
            <ColorModeSwitcher size="compact" />
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-border bg-card">
        <ImaniMark className="absolute -right-10 top-2 size-56 opacity-[0.07]" />
        <div className="mx-auto grid max-w-[1680px] gap-8 px-6 py-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <Badge className="bg-imani-aqua-bliss text-imani-fence-green">
              Component gallery
            </Badge>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.03] text-imani-fence-green text-balance dark:text-white md:text-6xl">
              Clean UI, ready to rinse and repeat
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
              Applied Imani product patterns built from design tokens, shadcn/ui
              components, operational forms, dashboard surfaces, and accessible
              component states.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button>
                <PackageCheck data-icon="inline-start" />
                  Start with components
              </Button>
              <Button asChild variant="outline">
                <a href="/resources/tokens.ts">
                  <SlidersHorizontal data-icon="inline-start" />
                  View tokens
                </a>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {metrics.map(([label, value, delta, Icon]) => (
              <Card
                key={label}
                size="sm"
                className="border-0 bg-muted/45 shadow-none ring-1 ring-border/70"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between gap-4">
                    <CardDescription className="text-base leading-6 md:text-lg">
                      {label}
                    </CardDescription>
                    <span className="rounded-md bg-muted p-2 text-imani-tunic-green">
                      <Icon className="size-4" />
                    </span>
                  </div>
                  <CardTitle className="font-display !text-[2rem] !leading-none text-foreground md:!text-[2.25rem]">
                    {value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-imani-aqua-bliss px-3 py-1 text-sm font-medium text-imani-fence-green">
                    {delta} this cycle
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1680px] px-6 py-8">
        <Tabs defaultValue="examples" className="gap-8">
          <TabsList className="h-auto flex-wrap rounded-full border border-border/70 bg-card p-1 shadow-[var(--shadow-sm)]">
            <TabsTrigger value="examples" className="px-4 py-2">
              Examples
            </TabsTrigger>
            <TabsTrigger value="dashboard" className="px-4 py-2">
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="typography" className="px-4 py-2">
              Typography
            </TabsTrigger>
            <TabsTrigger value="colors" className="px-4 py-2">
              Colors
            </TabsTrigger>
            <TabsTrigger value="components" className="px-4 py-2">
              Components
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
              <Card className="bg-card">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle>Refill Operations</CardTitle>
                      <CardDescription>
                        Dense, readable layouts for repeated operations and daily review.
                      </CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <BarChart3 data-icon="inline-start" />
                      Report
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={operationsChartConfig}
                    className="h-72 w-full rounded-md bg-muted p-5"
                  >
                    <BarChart accessibilityLayer data={operationsData}>
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="batch"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={10}
                      />
                      <YAxis hide />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar
                        dataKey="packed"
                        fill="var(--color-packed)"
                        radius={4}
                      />
                      <Bar
                        dataKey="exceptions"
                        fill="var(--color-exceptions)"
                        radius={4}
                      />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card className="bg-[var(--color-surface-brand-dark-elevated)] text-white">
                <CardHeader>
                  <CardTitle className="text-white">Batch Health</CardTitle>
                  <CardDescription className="text-white/70">
                    Dark surfaces use semantic tokens, white body text, and restrained Tunic Green accents.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  {[
                    ["Ingredients disclosed", "100%"],
                    ["Packaging recycled", "82%"],
                    ["Refill inventory", "74%"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="text-white/72">{label}</span>
                        <span className="font-medium">{value}</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/14">
                        <div
                          className="h-2 rounded-full bg-imani-tunic-green"
                          style={{ width: value }}
                        />
                      </div>
                    </div>
                  ))}
                  <Separator className="bg-white/14" />
                  <div className="flex items-center gap-3 rounded-lg bg-white/8 p-4">
                    <Gauge className="size-5 text-imani-tunic-green" />
                    <p className="text-sm leading-6 text-white/76">
                      Large accents may use Tunic Green on dark surfaces; body
                      copy stays white, muted, or Aqua Bliss.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card lg:col-span-2">
                <CardHeader>
                  <CardTitle>Order Queue</CardTitle>
                  <CardDescription>
                    Tables use DM Sans, restrained borders, and direct operational labels.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Destination</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {orders.map(([product, type, status, destination]) => (
                        <TableRow key={product}>
                          <TableCell className="font-medium text-foreground">
                            {product}
                          </TableCell>
                          <TableCell>{type}</TableCell>
                          <TableCell>
                            <Badge
                              className={
                                status === "Shipped"
                                  ? "bg-[var(--color-surface-brand-dark-elevated)] text-white"
                                  : "bg-imani-aqua-bliss text-imani-fence-green"
                              }
                            >
                              {status}
                            </Badge>
                          </TableCell>
                          <TableCell>{destination}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="examples">
            <div className="space-y-10">
              <div className="overflow-x-auto pb-4">
                <div className="grid min-w-[1560px] grid-cols-5 gap-5">
                  <div className="space-y-5">
                  <ProductSetupCard />
                  <DispatchCalendarCard />
                  <ScheduleDispatchFormCard />
                  <ImpactScoreCard />
                  <ComponentStatesCard />
                  <DarkSurfaceCard />
                  </div>
                  <div className="space-y-5">
                    <ActionToolbarCard />
                    <ButtonSpecimenCard />
                  <DropdownMenuCard />
                  <PopoverSpecimenCard />
                  <VerificationCard />
                  <IngredientComplianceCard />
                  <TokenStackCard />
                  </div>
                  <div className="space-y-5">
                    <RefillChannelsCard />
                    <InventoryForecastCard />
                    <InviteTeamCard />
                    <MenuDialogCard />
                    <ShortcutCard />
                  </div>
                  <div className="space-y-5">
                  <BatchHealthCard />
                  <RefillPreferencesCard />
                  <RouteEfficiencyCard />
                  <ReportBugCard />
                  <ContributorCard />
                  </div>
                  <div className="space-y-5">
                    <FeedbackCard />
                    <SubscriptionMixCard />
                    <ProfileCard />
                    <AnalyticsCard />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="typography">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle>Type Specimens</CardTitle>
                <CardDescription>
                  Agency gives Imani its display voice; DM Sans keeps product UI readable.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="rounded-xl bg-[var(--color-surface-brand-dark-elevated)] p-8 text-white">
                  <p className="font-display text-2xl font-bold text-imani-tunic-green">
                    The fresh face of clean
                  </p>
                  <h2 className="mt-3 max-w-3xl font-display text-6xl font-bold leading-tight text-balance">
                    Stains? Not on our palette.
                  </h2>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Token</TableHead>
                      <TableHead>Spec</TableHead>
                      <TableHead>Family</TableHead>
                      <TableHead>Use</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {typeScale.map(([token, spec, weight, family, use]) => (
                      <TableRow key={token}>
                        <TableCell className="font-mono text-xs">{token}</TableCell>
                        <TableCell>{spec}</TableCell>
                        <TableCell>{family} {weight}</TableCell>
                        <TableCell>{use}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="colors">
            <div className="space-y-10">
              {imaniColors.map((group) => (
                <section key={group.group} className="space-y-4">
                  <div className="max-w-3xl">
                    <h2 className="font-display text-3xl font-bold text-foreground">
                      {group.group}
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {group.description}
                    </p>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {group.colors.map(([token, name, hex, role, foreground]) => (
                      <Card key={token} className="bg-card">
                        <CardContent className="space-y-4">
                          <div
                            className="flex h-32 flex-col justify-between rounded-lg border border-border p-4"
                            style={{ background: hex, color: foreground }}
                          >
                            <span className="font-mono text-xs font-medium">{hex}</span>
                            <h3 className="font-display text-2xl font-bold leading-none">
                              {name}
                            </h3>
                          </div>
                          <div>
                            <p className="font-mono text-xs text-muted-foreground">{token}</p>
                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                              {role}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="components">
            <AppliedComponentPatterns />
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}

function ProductSetupCard() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Product Setup</CardTitle>
        <CardDescription>Direct labels keep product setup fast and unambiguous.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="showcase-name">Product name</Label>
          <Input id="showcase-name" defaultValue="Laundry Sheets" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="showcase-category">Category</Label>
          <Select defaultValue="laundry">
            <SelectTrigger id="showcase-category" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="surface">Surface care</SelectItem>
              <SelectItem value="dish">Dish care</SelectItem>
              <SelectItem value="laundry">Laundry</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="showcase-note">Sustainability note</Label>
          <Textarea
            id="showcase-note"
            defaultValue="Plastic-free pack, measured dosage, lower transport weight."
          />
        </div>
        <div className="flex items-center justify-between rounded-md border border-border p-4">
          <Label htmlFor="showcase-visible">Publish product</Label>
          <Switch id="showcase-visible" defaultChecked />
        </div>
      </CardContent>
    </Card>
  );
}

function DispatchCalendarCard() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-2xl">Dispatch Calendar</CardTitle>
        <CardDescription>Route scheduling with compact calendar density and visible next steps.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-md border border-border bg-muted/25 p-3">
            <Calendar
              mode="single"
              selected={new Date(2026, 3, 22)}
              month={new Date(2026, 3, 1)}
              showOutsideDays={false}
              className="mx-auto bg-transparent p-0 [--cell-size:2.15rem]"
            classNames={{
              caption_label: "text-sm font-bold",
              weekday: "text-xs text-muted-foreground",
            }}
          />
        </div>
        <div className="grid gap-2 text-sm">
          {[
            ["Apr 22", "Kampala refill loop", "8 stops"],
            ["Apr 26", "Jinja bulk dispatch", "3 stops"],
          ].map(([date, route, stops]) => (
            <div key={route} className="flex items-center justify-between rounded-md border border-border bg-background px-3 py-2.5">
              <div>
                <p className="font-medium text-foreground">{route}</p>
                <p className="text-xs text-muted-foreground">{date}</p>
              </div>
              <Badge className="bg-imani-aqua-bliss text-imani-fence-green">{stops}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function ScheduleDispatchFormCard() {
  const [route, setRoute] = useState<keyof typeof routeLabels>("kampala");
  const [dispatchDate, setDispatchDate] = useState<Date | undefined>(
    new Date(2026, 5, 17, 12)
  );
  const [time, setTime] = useState("10:30");
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const formattedDate = dispatchDate
    ? dispatchDateFormatter.format(dispatchDate)
    : "Choose a date";

  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Schedule Dispatch</CardTitle>
        <CardDescription>Pick a route window and confirm the dispatch summary in one flow.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
          <div className="space-y-2">
            <Label htmlFor="dispatch-route">Route</Label>
            <Select
              value={route}
              onValueChange={(value) =>
                setRoute(value as keyof typeof routeLabels)
              }
            >
              <SelectTrigger id="dispatch-route" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kampala">Kampala refill loop</SelectItem>
                <SelectItem value="entebbe">Entebbe refill</SelectItem>
                <SelectItem value="jinja">Jinja bulk dispatch</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-3">
            <div className="space-y-2">
              <Label htmlFor="dispatch-date">Dispatch date</Label>
              <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
                <PopoverTrigger asChild>
                  <Button
                    id="dispatch-date"
                    type="button"
                    variant="outline"
                    className="w-full justify-start rounded-md text-left font-normal"
                  >
                    <CalendarClock className="size-4" />
                    {formattedDate}
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-auto p-3">
                  <Calendar
                    mode="single"
                    selected={dispatchDate}
                    defaultMonth={dispatchDate}
                    onSelect={(date) => {
                      setDispatchDate(date);
                      if (date) {
                        setDatePickerOpen(false);
                      }
                    }}
                    showOutsideDays={false}
                    className="[--cell-size:2rem]"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="dispatch-time">Time</Label>
              <Input
                id="dispatch-time"
                type="time"
                value={time}
                onChange={(event) => setTime(event.target.value)}
              />
            </div>
          </div>
          <div className="rounded-md border border-border bg-muted/35 p-3 text-sm">
            <p className="font-medium text-foreground">Dispatch summary</p>
            <p className="mt-1 text-muted-foreground">
              {routeLabels[route]} · {formattedDate} at {time} · 8 stops
            </p>
          </div>
          <Button type="button" className="w-full">
            <Truck className="size-4" />
            Schedule route
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function ActionToolbarCard() {
  return (
    <Card className="bg-card">
      <CardContent className="flex items-center gap-3">
        {[PackageCheck, BarChart3, SlidersHorizontal, ClipboardList, Gauge].map((Icon, index) => (
          <Button key={index} variant="ghost" size="icon" aria-label={`Toolbar action ${index + 1}`}>
            <Icon className="size-4" />
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}

function ButtonSpecimenCard() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Buttons</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <Button><PackageCheck /> Create</Button>
          <Button variant="secondary">Export</Button>
          <Button variant="destructive">Delete</Button>
          <Button variant="outline">Open</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="ghost">Ghost</Button>
          <Button variant="inverse">Inverse</Button>
          <Button size="icon"><Check /></Button>
        </div>
      </CardContent>
    </Card>
  );
}

function TokenStackCard() {
  const artifacts = [
    ["variables.css", "CSS variables", "/resources/variables.css"],
    ["tokens.ts", "typed constants", "/resources/tokens.ts"],
    ["tailwind-preset.js", "theme extension", "/resources/tailwind-preset.js"],
    ["design-rules.md", "agent rules", "/resources/design-rules.md"],
  ] as const;

  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Token Stack</CardTitle>
        <CardDescription>Generated implementation artifacts for every Imani project.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 font-mono text-xs">
        {artifacts.map(([file, use, href]) => (
          <a
            key={file}
            href={href}
            className="flex items-center justify-between gap-4 rounded-md border border-border bg-muted/45 px-3 py-2 transition hover:border-primary hover:bg-muted"
          >
            <span className="text-foreground">{file}</span>
            <span className="text-muted-foreground">{use}</span>
          </a>
        ))}
      </CardContent>
    </Card>
  );
}

function DropdownMenuCard() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Dropdown Menu</CardTitle>
        <CardDescription>Action menus match select radius, spacing, and row rhythm.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full justify-between rounded-md">
              Batch actions
              <ChevronDown className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64">
            <DropdownMenuLabel>Order workflow</DropdownMenuLabel>
            <DropdownMenuItem>
              <PackageCheck className="size-4" />
              Mark as packed
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Truck className="size-4" />
              Assign route
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <MoreHorizontal className="size-4" />
              Open audit trail
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="rounded-lg border border-border bg-muted/35 p-3 text-sm text-muted-foreground">
          Menu rows use a 40px minimum height with 12px or more horizontal padding.
        </div>
      </CardContent>
    </Card>
  );
}

function PopoverSpecimenCard() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Popover</CardTitle>
        <CardDescription>Compact overlays for metrics, guidance, and batch metadata.</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="rounded-md">
              <Gauge className="size-4" />
              Score
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start">
            <PopoverHeader>
              <PopoverTitle>Batch score</PopoverTitle>
              <PopoverDescription>
                Formula disclosure, packaging status, and route readiness.
              </PopoverDescription>
            </PopoverHeader>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div className="rounded-md bg-muted p-2">
                <p className="font-display text-2xl font-bold">94</p>
                <p className="text-xs text-muted-foreground">Score</p>
              </div>
              <div className="rounded-md bg-muted p-2">
                <p className="font-display text-2xl font-bold">3</p>
                <p className="text-xs text-muted-foreground">Checks</p>
              </div>
              <div className="rounded-md bg-muted p-2">
                <p className="font-display text-2xl font-bold">0</p>
                <p className="text-xs text-muted-foreground">Blocks</p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="rounded-md">
              <ClipboardList className="size-4" />
              Dialog
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Batch details</DialogTitle>
              <DialogDescription>
                Review the refill batch before release.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-2 rounded-md border border-border bg-muted/40 p-3 text-sm">
              <span>Route: Kampala loop</span>
              <span>Inventory: 14.2k units</span>
              <span>Status: Ready</span>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}

function VerificationCard() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Batch Verification</CardTitle>
        <CardDescription>Verification controls support approval workflows without becoming decorative pills.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-2">
          <Label>Release code</Label>
          <InputOTP maxLength={4} defaultValue="2406">
            <InputOTPGroup>
              <InputOTPSlot index={0} className="size-11 text-base" />
              <InputOTPSlot index={1} className="size-11 text-base" />
              <InputOTPSlot index={2} className="size-11 text-base" />
              <InputOTPSlot index={3} className="size-11 text-base" />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <div className="space-y-2">
          <Label>Approval scope</Label>
          <ToggleGroup type="single" defaultValue="formula" className="rounded-md" size="lg">
            <ToggleGroupItem value="formula" className="px-5">Formula</ToggleGroupItem>
            <ToggleGroupItem value="claims" className="px-5">Claims</ToggleGroupItem>
            <ToggleGroupItem value="pack" className="px-5">Pack</ToggleGroupItem>
          </ToggleGroup>
        </div>
        <Toggle aria-label="Mark as favorite review" defaultPressed className="rounded-md">
          <ShieldCheck className="size-4" />
          QA approved
        </Toggle>
      </CardContent>
    </Card>
  );
}

function RefillChannelsCard() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Refill Channels</CardTitle>
        <CardDescription>Weekly order-source mix across refill plans, starter kits, and bulk deliveries.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ChartContainer
          config={refillChannelChartConfig}
          className="h-48 w-full rounded-md bg-muted/45 p-4"
        >
          <BarChart accessibilityLayer data={refillChannelData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis hide />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="refill" fill="var(--color-refill)" radius={4} />
            <Bar dataKey="starter" fill="var(--color-starter)" radius={4} />
            <Bar dataKey="bulk" fill="var(--color-bulk)" radius={4} />
          </BarChart>
        </ChartContainer>
        <div className="grid grid-cols-3 gap-2 text-sm">
          <div>
            <p className="text-muted-foreground">Refill</p>
            <p className="font-display text-2xl font-bold">64%</p>
          </div>
          <div>
            <p className="text-muted-foreground">Starter</p>
            <p className="font-display text-2xl font-bold">21%</p>
          </div>
          <div>
            <p className="text-muted-foreground">Bulk</p>
            <p className="font-display text-2xl font-bold">15%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function MenuDialogCard() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Menu & Dialog</CardTitle>
        <CardDescription>Menus and confirmation dialogs inherit the same overlay tokens.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <Menu className="mr-2 size-4" />
              Product
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New product</MenubarItem>
              <MenubarItem>Duplicate formula</MenubarItem>
              <MenubarItem>Archive draft</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Token grid</MenubarItem>
              <MenubarItem>Component states</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              <Layers className="size-4" />
              Open dialog
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Publish product update</DialogTitle>
              <DialogDescription>
                Confirm the new refill messaging, route status, and compliance notes before publishing.
              </DialogDescription>
            </DialogHeader>
            <div className="rounded-lg border border-border bg-muted/40 p-4 text-sm">
              3 fields changed · 2 approvals attached · 1 route updated
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Publish</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}

function ImpactScoreCard() {
  const stats = [
    ["Plastic avoided", "18.4t", 78, Recycle],
    ["Water saved", "42k L", 64, Gauge],
    ["Refill adoption", "71%", 71, TrendingUp],
  ] as const;

  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Impact Score</CardTitle>
        <CardDescription>Impact widgets fit customer portals, reports, and operations dashboards.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {stats.map(([label, value, width, Icon]) => (
          <div key={label} className="space-y-2">
            <div className="flex items-center justify-between gap-3 text-sm">
              <span className="flex items-center gap-2 text-muted-foreground">
                <Icon className="size-4 text-primary" />
                {label}
              </span>
              <span className="font-medium text-foreground">{value}</span>
            </div>
            <div className="h-2 rounded-full bg-muted">
              <div className="h-2 rounded-full bg-primary" style={{ width: `${width}%` }} />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function IngredientComplianceCard() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Ingredient Compliance</CardTitle>
        <CardDescription>Regulatory, formula, and packaging reviews need compact status views.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {[
          ["Formula disclosed", "Approved", "bg-[var(--color-state-success-surface)] text-[var(--color-state-success)]"],
          ["Fragrance allergens", "Review", "bg-[var(--color-state-warning-surface)] text-[var(--color-state-warning)]"],
          ["Claims language", "Approved", "bg-[var(--color-state-success-surface)] text-[var(--color-state-success)]"],
        ].map(([label, status, className]) => (
          <div key={label} className="flex items-center justify-between gap-3 rounded-lg border border-border bg-muted/30 p-3">
            <span className="flex items-center gap-2 text-sm text-foreground">
              <FlaskConical className="size-4 text-primary" />
              {label}
            </span>
            <Badge className={className}>{status}</Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function InventoryForecastCard() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Inventory Forecast</CardTitle>
        <CardDescription>Forecast refill packs, concentrates, and packaging components before stock runs low.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ChartContainer
          config={inventoryForecastChartConfig}
          className="h-36 w-full rounded-md bg-muted/40 p-4"
        >
          <AreaChart accessibilityLayer data={inventoryForecastData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="week"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis hide />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              dataKey="onHand"
              type="natural"
              fill="var(--color-onHand)"
              fillOpacity={0.22}
              stroke="var(--color-onHand)"
              strokeWidth={2}
            />
            <Area
              dataKey="demand"
              type="natural"
              fill="var(--color-demand)"
              fillOpacity={0.18}
              stroke="var(--color-demand)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
        <div className="grid grid-cols-3 gap-2 text-sm">
          <div>
            <p className="text-muted-foreground">On hand</p>
            <p className="font-display text-2xl font-bold">14.2k</p>
          </div>
          <div>
            <p className="text-muted-foreground">Runway</p>
            <p className="font-display text-2xl font-bold">18d</p>
          </div>
          <div>
            <p className="text-muted-foreground">Reorder</p>
            <p className="font-display text-2xl font-bold">May 4</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function RouteEfficiencyCard() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Route Efficiency</CardTitle>
        <CardDescription>Compare delivery planning, collection loops, and refill route performance.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {[
          ["Kampala loop", "92%", 92],
          ["Entebbe refill", "76%", 76],
          ["Jinja bulk", "68%", 68],
        ].map(([route, value, width]) => (
          <div key={route} className="rounded-lg border border-border bg-muted/30 p-3">
            <div className="mb-2 flex items-center justify-between gap-3 text-sm">
              <span className="flex items-center gap-2 text-foreground">
                <Route className="size-4 text-primary" />
                {route}
              </span>
              <span className="font-medium">{value}</span>
            </div>
            <div className="h-2 rounded-full bg-muted">
              <div className="h-2 rounded-full bg-[var(--chart-2)]" style={{ width: `${width}%` }} />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function SubscriptionMixCard() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Subscription Mix</CardTitle>
        <CardDescription>Show channel health with complementary chart tokens, not one-note green.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {[
          ["Refill plans", "52%", "var(--chart-1)"],
          ["Starter kits", "28%", "var(--chart-2)"],
          ["Bulk orders", "20%", "var(--chart-4)"],
        ].map(([label, value, color]) => (
          <div key={label} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">{label}</span>
              <span className="font-medium text-foreground">{value}</span>
            </div>
            <div className="h-3 rounded-full bg-muted">
              <div
                className="h-3 rounded-full"
                style={{ width: value, backgroundColor: color }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function RefillPreferencesCard() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Refill Preferences</CardTitle>
        <CardDescription>Input controls model customer subscriptions and reorder thresholds.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <Label className="flex items-center gap-3 rounded-md border border-border bg-muted/30 p-3">
          <Checkbox defaultChecked />
          Refillable packaging
        </Label>
        <RadioGroup defaultValue="monthly" className="grid gap-2">
          <Label className="flex items-center gap-3 rounded-md border border-border p-3">
            <RadioGroupItem value="weekly" />
            Weekly replenishment
          </Label>
          <Label className="flex items-center gap-3 rounded-md border border-border p-3">
            <RadioGroupItem value="monthly" />
            Monthly replenishment
          </Label>
        </RadioGroup>
        <div className="flex items-center justify-between rounded-md border border-border bg-muted/30 p-3">
          <Label htmlFor="auto-reorder">Auto reorder</Label>
          <Switch id="auto-reorder" defaultChecked />
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <Label>Reorder threshold</Label>
            <span className="font-medium text-foreground">68%</span>
          </div>
          <Slider defaultValue={[68]} max={100} />
        </div>
      </CardContent>
    </Card>
  );
}

function ComponentStatesCard() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Component States</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {[
          ["Ready", "All product fields are complete."],
          ["Review", "Ingredient disclosure needs approval."],
          ["Packed", "Fulfillment label generated."],
        ].map(([title, body]) => (
          <div key={title} className="rounded-lg border border-border bg-muted/35 p-4">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-primary p-1 text-primary-foreground">
                <Check className="size-3.5" />
              </span>
              <h3 className="font-sans text-base font-bold text-foreground">{title}</h3>
            </div>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function AppliedComponentPatterns() {
  return (
    <div className="space-y-6">
      <div className="max-w-3xl">
        <h2 className="font-display text-3xl font-bold text-foreground">
          Applied Component Patterns
        </h2>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">
          Components are shown inside Imani workflows: scheduling, verification, subscriptions, overlays, analytics, and operational forms.
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        <ProductSetupCard />
        <DispatchCalendarCard />
        <ScheduleDispatchFormCard />
        <RefillPreferencesCard />
        <VerificationCard />
        <DropdownMenuCard />
        <PopoverSpecimenCard />
        <MenuDialogCard />
        <RefillChannelsCard />
        <AnalyticsCard />
      </div>
    </div>
  );
}

function BatchHealthCard() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Batch Health</CardTitle>
        <CardDescription>Semantic states stay readable in both light and dark modes.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {[
          ["Ingredients disclosed", "100%"],
          ["Packaging recycled", "82%"],
          ["Refill inventory", "74%"],
        ].map(([label, value]) => (
          <div key={label}>
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-muted-foreground">{label}</span>
              <span className="font-medium text-foreground">{value}</span>
            </div>
            <div className="h-2 rounded-full bg-muted">
              <div className="h-2 rounded-full bg-primary" style={{ width: value }} />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function InviteTeamCard() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Invite Reviewers</CardTitle>
        <CardDescription>Add launch reviewers before a product update ships.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <Input defaultValue="alex@imani.company" />
        <Input defaultValue="sam@imani.company" />
        <Button className="w-full">Send invites</Button>
      </CardContent>
    </Card>
  );
}

function ShortcutCard() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Workflow Shortcuts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {[
          ["Search", "⌘ K"],
          ["Quick actions", "⌘ J"],
          ["New product", "⌘ N"],
        ].map(([label, keys]) => (
          <div key={label} className="flex items-center justify-between text-sm">
            <span>{label}</span>
            <kbd className="rounded-md border border-border bg-muted px-2 py-1 font-mono text-xs">{keys}</kbd>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function ReportBugCard() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Report Component Issue</CardTitle>
        <CardDescription>Capture UI defects with enough context for design-system triage.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <Input placeholder="Issue summary" />
        <Textarea placeholder="Component, viewport, theme, and steps to reproduce" />
        <Button className="w-full">Submit issue</Button>
      </CardContent>
    </Card>
  );
}

function ContributorCard() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Design Contributors <span className="text-sm font-normal text-muted-foreground">312</span></CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {["AC", "BK", "CM", "DL", "EF", "GH", "IJ", "KL", "MN", "OP", "QR", "ST"].map((name) => (
          <span key={name} className="flex size-9 items-center justify-center rounded-full bg-muted text-xs font-medium text-foreground">
            {name}
          </span>
        ))}
      </CardContent>
    </Card>
  );
}

function FeedbackCard() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Design Feedback</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Select defaultValue="tokens">
          <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="tokens">Tokens</SelectItem>
            <SelectItem value="components">Components</SelectItem>
            <SelectItem value="docs">Docs</SelectItem>
          </SelectContent>
        </Select>
        <Textarea placeholder="Share a token, component, or documentation note." />
        <Button>Submit feedback</Button>
      </CardContent>
    </Card>
  );
}

function ProfileCard() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Contributor Profile</CardTitle>
        <CardDescription>Manage visible contributor information for design-system reviews.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <Input defaultValue="imani" />
        <Input defaultValue="systems@imani.company" />
        <Textarea placeholder="Role, team, and contribution focus" />
        <Button>Save profile</Button>
      </CardContent>
    </Card>
  );
}

function AnalyticsCard() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Analytics</CardTitle>
        <CardDescription>Documentation traffic, refill education starts, and support deflection.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="font-display text-3xl font-bold">418.2K</p>
            <p className="text-sm text-muted-foreground">Documentation visits</p>
          </div>
          <Badge className="bg-[var(--color-state-success-surface)] text-[var(--color-state-success)]">
            +10%
          </Badge>
        </div>
        <ChartContainer
          config={analyticsChartConfig}
          className="h-36 w-full border-b border-border pb-3"
        >
          <BarChart accessibilityLayer data={analyticsData}>
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis hide />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="visitors" fill="var(--color-visitors)" radius={4} />
            <Bar dataKey="starts" fill="var(--color-starts)" radius={4} />
          </BarChart>
        </ChartContainer>
        <div className="space-y-2 text-sm">
          {[
            ["Guide views", "162.4K"],
            ["Refill finder starts", "38.7K"],
            ["Support deflection", "21%"],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between gap-4">
              <span className="text-muted-foreground">{label}</span>
              <span className="font-medium text-foreground">{value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function DarkSurfaceCard() {
  return (
    <Card className="bg-[var(--color-surface-brand-dark-elevated)] text-white">
      <CardHeader>
        <CardTitle className="text-white">Dark Surface</CardTitle>
        <CardDescription className="text-white/75">
          Dark elevated surfaces ground high-focus panels and footers.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-lg bg-white/10 p-4">
          <p className="font-display text-4xl font-bold text-white">94</p>
          <p className="mt-1 text-sm text-white/75">Batch quality score</p>
        </div>
        <Button variant="inverse" className="w-full">Review batch</Button>
      </CardContent>
    </Card>
  );
}
