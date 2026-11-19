"use client";

import * as React from "react";
import { Toast as BaseToast } from "@base-ui-components/react";
import { cn } from "../lib/utils";

export const ToastProvider = BaseToast.Provider;
export const Toast = BaseToast.Root;
export const ToastTitle = BaseToast.Title;
export const ToastDescription = BaseToast.Description;
export const ToastClose = BaseToast.Close;
export const ToastAction = BaseToast.Action;
export const useToastManager = BaseToast.useToastManager;

export const ToastViewport = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseToast.Viewport>
>(({ className, ...props }, ref) => (
  <BaseToast.Portal>
    <BaseToast.Viewport
      ref={ref}
      className={cn(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        className
      )}
      {...props}
    />
  </BaseToast.Portal>
));
ToastViewport.displayName = "ToastViewport";

export const ToastContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseToast.Content>
>(({ className, ...props }, ref) => (
  <BaseToast.Content
    ref={ref}
    className={cn(
      "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background)] p-4 pr-8 shadow-lg transition-all",
      className
    )}
    {...props}
  />
));
ToastContent.displayName = "ToastContent";
