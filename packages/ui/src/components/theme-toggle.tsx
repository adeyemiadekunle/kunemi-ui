"use client";

import * as React from "react";
import { useTheme } from "../providers/theme-provider";
import { cn } from "../lib/utils";

export interface ThemeToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const ThemeToggle = React.forwardRef<HTMLButtonElement, ThemeToggleProps>(
  ({ className, ...props }, ref) => {
    const { theme, resolvedTheme, setTheme } = useTheme();

    const toggleTheme = () => {
      if (resolvedTheme === "dark") {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    };

    return (
      <button
        ref={ref}
        type="button"
        aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
        title={`Current theme: ${theme} (resolved: ${resolvedTheme})`}
        onClick={toggleTheme}
        className={cn(
          "inline-flex items-center justify-center rounded-[var(--radius-md)] px-3 py-1.5 text-sm font-medium",
          "border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)]",
          "hover:bg-[var(--muted)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]",
          "cursor-pointer",
          className
        )}
        {...props}
      >
        <span className="capitalize">{resolvedTheme} mode</span>
      </button>
    );
  }
);

ThemeToggle.displayName = "ThemeToggle";
