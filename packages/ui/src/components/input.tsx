"use client";

import * as React from "react";
import { Input as BaseInput } from "@base-ui-components/react";
import { cn } from "../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", invalid = false, ...props }, ref) => {
    return (
      <BaseInput
        type={type}
        ref={ref}
        aria-invalid={invalid ? "true" : undefined}
        className={cn(
          "flex h-10 w-full rounded-[var(--radius-md)] border border-[var(--input)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--foreground)]",
          "placeholder:text-[var(--muted-foreground)] transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          invalid &&
            "border-[var(--destructive)] focus-visible:ring-[var(--destructive)]",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
