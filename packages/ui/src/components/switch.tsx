"use client";

import * as React from "react";
import { Switch as BaseSwitch } from "@base-ui-components/react";
import { cn } from "../lib/utils";

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof BaseSwitch.Root> {
  className?: string;
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, ...props }, ref) => {
    return (
      <BaseSwitch.Root
        ref={ref}
        className={cn(
          "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "bg-[var(--muted)] data-[checked]:bg-[var(--primary)]",
          className
        )}
        {...props}
      >
        <BaseSwitch.Thumb
          className={cn(
            "pointer-events-none block h-5 w-5 rounded-full bg-[var(--background)] shadow-lg ring-0 transition-transform",
            "data-[checked]:translate-x-5 data-[unchecked]:translate-x-0"
          )}
        />
      </BaseSwitch.Root>
    );
  }
);

Switch.displayName = "Switch";
