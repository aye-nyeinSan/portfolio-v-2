"use client";

import { useTheme } from "next-themes";
import { Toggle } from "@/components/ui/toggle";
import { Sun, MoonStar } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Toggle
      aria-label="Toggle mode"
      size="sm"
      variant="outline"
      pressed={theme === "dark"}
      onPressedChange={(pressed) => setTheme(pressed ? "dark" : "light")}
    >
      {theme === "dark" ? <MoonStar /> : <Sun />}
    </Toggle>
  );
}
