"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Toggle } from "@/components/ui/toggle";
import { Sun, MoonStar } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // The server can't read localStorage, so the resolved theme is only known
  // after mount. Render a neutral placeholder until then to keep the server
  // and first client render identical.
  React.useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <Toggle
      aria-label="Toggle mode"
      size="sm"
      variant="outline"
      pressed={isDark}
      onPressedChange={(pressed) => setTheme(pressed ? "dark" : "light")}
    >
      {mounted ? (
        isDark ? (
          <MoonStar />
        ) : (
          <Sun />
        )
      ) : (
        <span className="size-4" aria-hidden />
      )}
    </Toggle>
  );
}
