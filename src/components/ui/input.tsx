import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-[var(--component-input-height)] w-full min-w-0 rounded-[var(--component-input-radius)] border-[length:var(--component-input-border-width)] border-input bg-[var(--component-input-background)] px-3 py-2 text-base text-[var(--component-input-text)] transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-[var(--component-input-placeholder)] focus-visible:border-primary focus-visible:ring-[var(--component-focus-ring-width)] focus-visible:ring-[var(--component-input-focus-ring)]/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Input }
