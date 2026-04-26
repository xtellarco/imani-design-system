"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const modes = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
] as const;

export function ColorModeSwitcher({
  surface = "default",
  size = "default",
}: {
  surface?: "default" | "dark";
  size?: "default" | "compact";
}) {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="Change color mode"
          className={cn(
            "bg-transparent",
            size === "compact" && "size-9",
            surface === "dark"
              ? "border-white/68 text-white hover:bg-white/10 hover:text-white"
              : "border-border text-foreground hover:bg-muted hover:text-foreground dark:bg-white/10 dark:hover:bg-white/15"
          )}
        >
          <Monitor className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {modes.map((mode) => {
          const Icon = mode.icon;

          return (
            <DropdownMenuItem
              key={mode.value}
              onClick={() => setTheme(mode.value)}
            >
              <Icon className="size-4" />
              {mode.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
