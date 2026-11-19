"use client";

import * as React from "react";
import { useTheme } from "../providers/theme-provider";
import { cn } from "../lib/utils";

export interface ThemeToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle = React.forwardRef<HTMLButtonElement, ThemeToggleProps>(
  ({ className, showLabel = false, children, ...props }, ref) => {
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
          "inline-flex items-center justify-center rounded-[var(--radius-md)] text-sm font-medium",
          "border border-[var(--border)] border-border/50 bg-[var(--background)] text-[var(--foreground)]",
          "hover:bg-[var(--muted)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]",
          "cursor-pointer active:translate-y-px",
          showLabel ? "px-3 py-1.5 gap-2" : "h-8 w-8 p-0",
          className
        )}
        {...props}
      >
        {children ? (
          children
        ) : showLabel ? (
          <span className="capitalize">{resolvedTheme} mode</span>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hidden dark:block"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="block dark:hidden"
              aria-hidden="true"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          </>
        )}
      </button>
    );
  }
);

ThemeToggle.displayName = "ThemeToggle";
