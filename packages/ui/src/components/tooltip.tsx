"use client";

import * as React from "react";
import { Tooltip as BaseTooltip } from "@base-ui-components/react";
import { cn } from "../lib/utils";

export const TooltipProvider = BaseTooltip.Provider;
export const Tooltip = BaseTooltip.Root;
export const TooltipTrigger = BaseTooltip.Trigger;

export const TooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseTooltip.Popup> & {
    sideOffset?: number;
  }
>(({ className, sideOffset = 4, children, ...props }, ref) => (
  <BaseTooltip.Portal>
    <BaseTooltip.Positioner sideOffset={sideOffset}>
      <BaseTooltip.Popup
        ref={ref}
        className={cn(
          "z-50 overflow-hidden rounded-[var(--radius-sm)] bg-[var(--primary)] px-3 py-1.5 text-xs text-[var(--primary-foreground)] shadow-md select-none",
          className
        )}
        {...props}
      >
        {children}
        <BaseTooltip.Arrow className="fill-[var(--primary)]" />
      </BaseTooltip.Popup>
    </BaseTooltip.Positioner>
  </BaseTooltip.Portal>
));

TooltipContent.displayName = "TooltipContent";
