import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-24 w-full rounded-[var(--component-input-radius)] border-[length:var(--component-input-border-width)] border-input bg-[var(--component-input-background)] px-3 py-2 text-base text-[var(--component-input-text)] transition-colors outline-none placeholder:text-[var(--component-input-placeholder)] focus-visible:border-primary focus-visible:ring-[var(--component-focus-ring-width)] focus-visible:ring-[var(--component-input-focus-ring)]/70 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
