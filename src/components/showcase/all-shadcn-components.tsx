"use client";

import * as React from "react";
import {
  Command as CommandIcon,
  Copy,
  Inbox,
  LayoutDashboard,
  MoreHorizontal,
  PanelLeft,
  PackageCheck,
  Search,
  Settings,
  ShieldCheck,
  Star,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
} from "recharts";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuTrigger } from "@/components/ui/context-menu";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DirectionProvider } from "@/components/ui/direction";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet, FieldTitle } from "@/components/ui/field";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Kbd } from "@/components/ui/kbd";
import { Label } from "@/components/ui/label";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Spinner } from "@/components/ui/spinner";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const chartData = [
  { month: "Jan", refills: 42 },
  { month: "Feb", refills: 58 },
  { month: "Mar", refills: 73 },
  { month: "Apr", refills: 68 },
  { month: "May", refills: 86 },
  { month: "Jun", refills: 91 },
];

const chartConfig = {
  refills: {
    label: "Refills",
    color: "var(--imani-tunic-green)",
  },
} satisfies ChartConfig;

export function AllShadcnComponents() {
  return (
    <section className="space-y-6" id="all-components">
      <Tabs defaultValue="inputs" className="gap-6">
        <TabsList className="h-auto flex-wrap rounded-full border border-border/70 bg-card p-1">
          <TabsTrigger value="inputs" className="px-4 py-2">Inputs</TabsTrigger>
          <TabsTrigger value="navigation" className="px-4 py-2">Navigation</TabsTrigger>
          <TabsTrigger value="overlays" className="px-4 py-2">Overlays</TabsTrigger>
          <TabsTrigger value="display" className="px-4 py-2">Display</TabsTrigger>
          <TabsTrigger value="layout" className="px-4 py-2">Layout</TabsTrigger>
        </TabsList>

        <TabsContent value="inputs">
          <div className="overflow-x-auto pb-4">
          <div className="grid min-w-[1500px] grid-cols-3 gap-6">
            <ComponentCard title="Field, Label, Input, Textarea">
              <FieldGroup>
                <FieldSet>
                  <FieldLegend>Product intake</FieldLegend>
                  <Field>
                    <FieldLabel htmlFor="component-product">Product</FieldLabel>
                    <Input id="component-product" defaultValue="Counter Spray" />
                    <FieldDescription>Use direct, functional labels.</FieldDescription>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="component-notes">Batch note</FieldLabel>
                    <Textarea id="component-notes" defaultValue="Refill pack ready for QA." />
                  </Field>
                  <Field data-invalid>
                    <FieldTitle>Validation</FieldTitle>
                    <FieldError>Formula code is required.</FieldError>
                  </Field>
                </FieldSet>
              </FieldGroup>
            </ComponentCard>

            <ComponentCard title="Select, Native Select, Combobox">
              <div className="space-y-4">
                <Select defaultValue="refill">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="starter">Starter kit</SelectItem>
                    <SelectItem value="refill">Refill</SelectItem>
                    <SelectItem value="bulk">Bulk</SelectItem>
                  </SelectContent>
                </Select>
                <NativeSelect className="w-full">
                  <NativeSelectOption>Cloud Bleach</NativeSelectOption>
                  <NativeSelectOption>Fence Green</NativeSelectOption>
                </NativeSelect>
                <InputGroup>
                  <InputGroupAddon><Search className="size-4" /></InputGroupAddon>
                  <InputGroupInput placeholder="Combobox search pattern" />
                </InputGroup>
              </div>
            </ComponentCard>

            <ComponentCard title="Checkbox, Radio, Switch, Slider">
              <div className="space-y-5">
                <Label className="flex items-center gap-3"><Checkbox defaultChecked /> Refillable</Label>
                <RadioGroup defaultValue="weekly">
                  <Label className="flex items-center gap-3"><RadioGroupItem value="weekly" /> Weekly</Label>
                  <Label className="flex items-center gap-3"><RadioGroupItem value="monthly" /> Monthly</Label>
                </RadioGroup>
                <div className="flex items-center justify-between"><Label>Auto reorder</Label><Switch defaultChecked /></div>
                <Slider defaultValue={[68]} max={100} />
              </div>
            </ComponentCard>

            <ComponentCard title="Input OTP, Toggle, Toggle Group">
              <div className="space-y-5">
                <InputOTP maxLength={4}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                </InputOTP>
                <Toggle aria-label="Toggle favorite" defaultPressed><Star className="size-4" /> Favorite</Toggle>
                <ToggleGroup type="multiple" defaultValue={["bold"]}>
                  <ToggleGroupItem value="bold">B</ToggleGroupItem>
                  <ToggleGroupItem value="medium">M</ToggleGroupItem>
                  <ToggleGroupItem value="clean">C</ToggleGroupItem>
                </ToggleGroup>
              </div>
            </ComponentCard>

            <ComponentCard title="Calendar">
              <Calendar mode="single" selected={new Date(2026, 3, 26)} className="rounded-lg border" />
            </ComponentCard>

            <ComponentCard title="Button, Button Group, Kbd">
              <div className="space-y-4">
                <ButtonGroup>
                  <Button><PackageCheck /> Pack</Button>
                  <Button variant="outline">Ship</Button>
                </ButtonGroup>
                <ButtonGroup>
                  <ButtonGroupText><CommandIcon className="size-4" /> Shortcut</ButtonGroupText>
                  <Button variant="outline"><Kbd>⌘K</Kbd></Button>
                </ButtonGroup>
              </div>
            </ComponentCard>
          </div>
          </div>
        </TabsContent>

        <TabsContent value="navigation">
          <div className="overflow-x-auto pb-4">
          <div className="grid min-w-[1500px] grid-cols-3 gap-6">
            <ComponentCard title="Breadcrumb, Pagination">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem><BreadcrumbLink href="#">Products</BreadcrumbLink></BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem><BreadcrumbPage>Refills</BreadcrumbPage></BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <Pagination className="mt-5">
                <PaginationContent>
                  <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
                  <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationNext href="#" /></PaginationItem>
                </PaginationContent>
              </Pagination>
            </ComponentCard>

            <ComponentCard title="Navigation Menu, Menubar">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Systems</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-64 gap-2 p-3">
                        <NavigationMenuLink className="rounded-md p-2 hover:bg-muted">Tokens</NavigationMenuLink>
                        <NavigationMenuLink className="rounded-md p-2 hover:bg-muted">Components</NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <Menubar className="mt-5">
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Export tokens</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Open guide</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </ComponentCard>

            <ComponentCard title="Sidebar, Scroll Area">
              <SidebarProvider className="min-h-0">
                <div className="grid h-64 w-full grid-cols-[180px_1fr] overflow-hidden rounded-lg border">
                  <Sidebar className="relative h-full border-r" collapsible="none">
                    <SidebarContent>
                      <SidebarGroup>
                        <SidebarGroupLabel>Imani</SidebarGroupLabel>
                        <SidebarGroupContent>
                          <SidebarMenu>
                            {["Dashboard", "Orders", "Settings"].map((item) => (
                              <SidebarMenuItem key={item}>
                                <SidebarMenuButton><LayoutDashboard /> {item}</SidebarMenuButton>
                              </SidebarMenuItem>
                            ))}
                          </SidebarMenu>
                        </SidebarGroupContent>
                      </SidebarGroup>
                    </SidebarContent>
                  </Sidebar>
                  <ScrollArea className="h-64 p-4">
                    {Array.from({ length: 12 }, (_, index) => (
                      <p key={index} className="mb-3 text-sm text-muted-foreground">
                        Scroll area row {index + 1}: refill operations note.
                      </p>
                    ))}
                  </ScrollArea>
                </div>
              </SidebarProvider>
            </ComponentCard>
          </div>
          </div>
        </TabsContent>

        <TabsContent value="overlays">
          <div className="overflow-x-auto pb-4">
          <div className="grid min-w-[1500px] grid-cols-3 gap-6">
            <ComponentCard title="Dialog, Alert Dialog, Sheet">
              <div className="flex flex-wrap gap-3">
                <Dialog>
                  <DialogTrigger asChild><Button>Dialog</Button></DialogTrigger>
                  <DialogContent>
                    <DialogHeader><DialogTitle>Batch details</DialogTitle><DialogDescription>Review the refill batch before release.</DialogDescription></DialogHeader>
                    <DialogFooter><Button>Save</Button></DialogFooter>
                  </DialogContent>
                </Dialog>
                <AlertDialog>
                  <AlertDialogTrigger asChild><Button variant="outline">Alert</Button></AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader><AlertDialogTitle>Archive batch?</AlertDialogTitle><AlertDialogDescription>This action removes it from active operations.</AlertDialogDescription></AlertDialogHeader>
                    <AlertDialogFooter><AlertDialogCancel>Cancel</AlertDialogCancel><AlertDialogAction>Archive</AlertDialogAction></AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                <Sheet>
                  <SheetTrigger asChild><Button variant="secondary"><PanelLeft /> Sheet</Button></SheetTrigger>
                  <SheetContent>
                    <SheetHeader><SheetTitle>Filters</SheetTitle><SheetDescription>Choose product and refill filters.</SheetDescription></SheetHeader>
                  </SheetContent>
                </Sheet>
              </div>
            </ComponentCard>

            <ComponentCard title="Drawer, Popover, Hover Card, Tooltip">
              <div className="flex flex-wrap gap-3">
                <Drawer>
                  <DrawerTrigger asChild><Button variant="outline">Drawer</Button></DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader><DrawerTitle>Mobile actions</DrawerTitle><DrawerDescription>Drawer behavior for compact screens.</DrawerDescription></DrawerHeader>
                    <DrawerFooter><DrawerClose asChild><Button>Done</Button></DrawerClose></DrawerFooter>
                  </DrawerContent>
                </Drawer>
                <Popover>
                  <PopoverTrigger asChild><Button variant="outline">Popover</Button></PopoverTrigger>
                  <PopoverContent>
                    <PopoverHeader><PopoverTitle>Token note</PopoverTitle><PopoverDescription>Aqua Bliss is an accent surface only.</PopoverDescription></PopoverHeader>
                  </PopoverContent>
                </Popover>
                <HoverCard>
                  <HoverCardTrigger asChild><Button variant="ghost">Hover card</Button></HoverCardTrigger>
                  <HoverCardContent>Use hover cards for secondary metadata.</HoverCardContent>
                </HoverCard>
                <Tooltip>
                  <TooltipTrigger asChild><Button size="icon" aria-label="Copy"><Copy /></Button></TooltipTrigger>
                  <TooltipContent>Copy token</TooltipContent>
                </Tooltip>
              </div>
            </ComponentCard>

            <ComponentCard title="Dropdown, Context Menu, Command">
              <div className="flex flex-wrap gap-3">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild><Button variant="outline"><MoreHorizontal /> Menu</Button></DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Archive</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <ContextMenu>
                  <ContextMenuTrigger className="rounded-md border border-dashed px-4 py-2 text-sm">Right click</ContextMenuTrigger>
                  <ContextMenuContent>
                    <ContextMenuItem>Inspect</ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem>Export</ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              </div>
              <Command className="mt-5 rounded-lg border">
                <CommandInput placeholder="Search components" />
                <CommandList>
                  <CommandEmpty>No component found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem><Search /> Search</CommandItem>
                    <CommandItem><Settings /> Settings</CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                </CommandList>
              </Command>
            </ComponentCard>
          </div>
          </div>
        </TabsContent>

        <TabsContent value="display">
          <div className="overflow-x-auto pb-4">
          <div className="grid min-w-[1500px] grid-cols-3 gap-6">
            <ComponentCard title="Alert, Badge, Avatar">
              <Alert className="border-imani-aqua-bliss bg-imani-aqua-bliss/40">
                <ShieldCheck className="size-4" />
                <AlertTitle>Batch passed</AlertTitle>
                <AlertDescription>All ingredient checks are complete.</AlertDescription>
              </Alert>
              <div className="mt-4 flex items-center gap-3">
                <Badge>Primary</Badge>
                <Badge className="bg-imani-aqua-bliss text-imani-fence-green">Soft</Badge>
                <AvatarGroup>
                  <Avatar><AvatarFallback>IM</AvatarFallback><AvatarBadge /></Avatar>
                  <Avatar><AvatarFallback>QA</AvatarFallback></Avatar>
                  <AvatarGroupCount>+3</AvatarGroupCount>
                </AvatarGroup>
              </div>
            </ComponentCard>

            <ComponentCard title="Chart, Progress, Spinner, Skeleton">
              <ChartContainer config={chartConfig} className="h-44 w-full">
                <AreaChart data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area dataKey="refills" type="natural" fill="var(--color-refills)" fillOpacity={0.22} stroke="var(--color-refills)" />
                </AreaChart>
              </ChartContainer>
              <div className="mt-4 space-y-3">
                <Progress value={74} />
                <div className="flex items-center gap-3 text-sm"><Spinner /> Syncing inventory</div>
                <Skeleton className="h-4 w-2/3" />
              </div>
            </ComponentCard>

            <ComponentCard title="Table, Item, Empty">
              <ItemGroup>
                <Item variant="muted">
                  <ItemMedia variant="icon"><PackageCheck className="text-imani-tunic-green" /></ItemMedia>
                  <ItemContent><ItemTitle>Refill pack</ItemTitle><ItemDescription>Ready for dispatch.</ItemDescription></ItemContent>
                  <ItemActions><Badge>Ready</Badge></ItemActions>
                </Item>
              </ItemGroup>
              <Table className="mt-4">
                <TableHeader><TableRow><TableHead>SKU</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
                <TableBody><TableRow><TableCell>IM-2404</TableCell><TableCell>Active</TableCell></TableRow></TableBody>
              </Table>
              <Empty className="mt-4 border">
                <EmptyHeader>
                  <EmptyMedia variant="icon"><Inbox /></EmptyMedia>
                  <EmptyTitle>No exceptions</EmptyTitle>
                  <EmptyDescription>Everything is moving cleanly.</EmptyDescription>
                </EmptyHeader>
                <EmptyContent><Button variant="outline" size="sm">Refresh</Button></EmptyContent>
              </Empty>
            </ComponentCard>
          </div>
          </div>
        </TabsContent>

        <TabsContent value="layout">
          <div className="overflow-x-auto pb-4">
          <div className="grid min-w-[1500px] grid-cols-3 gap-6">
            <ComponentCard title="Accordion, Collapsible, Separator">
              <Accordion type="single" collapsible>
                <AccordionItem value="one"><AccordionTrigger>Usage guidance</AccordionTrigger><AccordionContent>Use Tunic Green for primary actions only.</AccordionContent></AccordionItem>
              </Accordion>
              <Separator className="my-4" />
              <Collapsible>
                <CollapsibleTrigger asChild><Button variant="outline">Toggle notes</Button></CollapsibleTrigger>
                <CollapsibleContent className="mt-3 rounded-md bg-muted p-3 text-sm">Collapsible content uses restrained surfaces.</CollapsibleContent>
              </Collapsible>
            </ComponentCard>

            <ComponentCard title="Aspect Ratio, Carousel">
              <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg bg-muted">
                <div className="flex size-full items-center justify-center font-mono text-xs text-foreground">[ product shot - 16:9 ]</div>
              </AspectRatio>
              <Carousel className="mx-auto mt-6 w-[80%]">
                <CarouselContent>
                  {[1, 2, 3].map((item) => (
                    <CarouselItem key={item}><div className="flex h-20 items-center justify-center rounded-lg bg-imani-aqua-bliss text-imani-fence-green">Slide {item}</div></CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </ComponentCard>

            <ComponentCard title="Resizable, Direction, Sonner">
              <DirectionProvider dir="ltr">
                <ResizablePanelGroup className="h-32 rounded-lg border">
                  <ResizablePanel defaultSize={55}><div className="flex h-full items-center justify-center bg-card text-sm">Panel A</div></ResizablePanel>
                  <ResizableHandle withHandle />
                  <ResizablePanel defaultSize={45}><div className="flex h-full items-center justify-center bg-muted text-sm">Panel B</div></ResizablePanel>
                </ResizablePanelGroup>
              </DirectionProvider>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Sonner is installed for toast notifications; wire app-level toasts where product flows need transient feedback.
              </p>
            </ComponentCard>
          </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}

function ComponentCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="border-border/70 bg-card shadow-[var(--shadow-sm)]">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
