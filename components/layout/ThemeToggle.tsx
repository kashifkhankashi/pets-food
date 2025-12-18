"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Always render the same structure to avoid hydration mismatches
  // Use resolvedTheme only after mount, default to false for initial render
  const isDark = mounted ? resolvedTheme === "dark" : false;

  return (
    <div className="flex items-center gap-2" suppressHydrationWarning>
      <Sun className="h-4 w-4 text-muted-foreground" />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => {
          setTheme(checked ? "dark" : "light");
        }}
        aria-label="Toggle theme"
        disabled={!mounted}
      />
      <Moon className="h-4 w-4 text-muted-foreground" />
    </div>
  );
}


