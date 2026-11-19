"use client";

import * as React from "react";
import { Menu as BaseMenu } from "@base-ui-components/react";
import { cn } from "../lib/utils";

export const Menu = BaseMenu.Root;
export const MenuTrigger = BaseMenu.Trigger;
export const MenuGroup = BaseMenu.Group;
export const MenuGroupLabel = BaseMenu.GroupLabel;

export const MenuContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseMenu.Popup> & {
    sideOffset?: number;
  }
>(({ className, sideOffset = 4, ...props }, ref) => (
  <BaseMenu.Portal>
    <BaseMenu.Positioner sideOffset={sideOffset}>
      <BaseMenu.Popup
        ref={ref}
        className={cn(
          "z-50 min-w-[8rem] overflow-hidden rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--popover)] p-1 text-[var(--popover-foreground)] shadow-md",
          className
        )}
        {...props}
      />
    </BaseMenu.Positioner>
  </BaseMenu.Portal>
));
MenuContent.displayName = "MenuContent";

export const MenuItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseMenu.Item>
>(({ className, ...props }, ref) => (
  <BaseMenu.Item
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center rounded-[var(--radius-sm)] px-2 py-1.5 text-sm outline-none transition-colors",
      "data-[highlighted]:bg-[var(--accent)] data-[highlighted]:text-[var(--accent-foreground)]",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  />
));
MenuItem.displayName = "MenuItem";

export const MenuSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseMenu.Separator>
>(({ className, ...props }, ref) => (
  <BaseMenu.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-[var(--border)]", className)}
    {...props}
  />
));
MenuSeparator.displayName = "MenuSeparator";
