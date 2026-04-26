import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-[var(--component-button-radius)] border border-transparent bg-clip-padding font-[family-name:var(--component-button-font-family)] font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-[var(--component-focus-ring-width)] focus-visible:ring-ring/60 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-[var(--component-button-primary-bg)] text-[var(--component-button-primary-text)] [a]:hover:bg-[var(--component-button-primary-hover)] hover:bg-[var(--component-button-primary-hover)] active:bg-[var(--component-button-primary-active)]",
        outline:
          "border-[1.5px] border-secondary bg-transparent text-[var(--component-button-outline-text)] hover:bg-muted aria-expanded:bg-muted aria-expanded:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90 aria-expanded:bg-secondary/90 aria-expanded:text-secondary-foreground",
        ghost:
          "bg-transparent text-foreground hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        inverse:
          "bg-[var(--component-button-inverse-bg)] text-[var(--component-button-inverse-text)] hover:bg-accent aria-expanded:bg-accent aria-expanded:text-secondary",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-[var(--component-button-height-default)] gap-2 px-[var(--component-button-padding-x-default)] text-[length:var(--component-button-font-size)] has-data-[icon=inline-start]:pl-5",
        xs: "h-7 gap-1 rounded-sm px-2 text-xs has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-[var(--component-button-height-compact)] gap-1.5 rounded-[var(--component-button-radius)] px-[var(--component-button-padding-x-compact)] text-sm has-data-[icon=inline-start]:pl-3 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-[var(--component-button-height-hero)] gap-2 rounded-full px-[var(--component-button-padding-x-hero)] text-base has-data-[icon=inline-start]:pl-7",
        icon: "size-11",
        "icon-xs":
          "size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3.5",
        "icon-sm":
          "size-10 rounded-[var(--component-button-radius)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
