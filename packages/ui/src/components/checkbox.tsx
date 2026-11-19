"use client";

import * as React from "react";
import { Checkbox as BaseCheckbox } from "@base-ui-components/react";
import { cn } from "../lib/utils";

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof BaseCheckbox.Root> {
  className?: string;
}

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <BaseCheckbox.Root
        ref={ref}
        className={cn(
          "peer h-4 w-4 shrink-0 rounded-[var(--radius-sm)] border border-[var(--primary)] shadow-sm",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "data-[checked]:bg-[var(--primary)] data-[checked]:text-[var(--primary-foreground)]",
          "cursor-pointer inline-flex items-center justify-center transition-colors",
          className
        )}
        {...props}
      >
        <BaseCheckbox.Indicator className="flex items-center justify-center text-current">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3 w-3"
            data-testid="checkbox-check"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </BaseCheckbox.Indicator>
      </BaseCheckbox.Root>
    );
  }
);

Checkbox.displayName = "Checkbox";
