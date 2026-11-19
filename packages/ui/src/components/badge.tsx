import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

export const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2 select-none",
  {
    variants: {
      variant: {
        primary:
          "border-transparent bg-[var(--primary)] text-[var(--primary-foreground)] shadow-xs",
        secondary:
          "border-transparent bg-[var(--secondary)] text-[var(--secondary-foreground)]",
        destructive:
          "border-transparent bg-[var(--destructive)] text-[var(--destructive-foreground)] shadow-xs",
        outline: "text-[var(--foreground)] border-[var(--border)]",
        success:
          "border-transparent bg-[var(--success)] text-[var(--success-foreground)] shadow-xs",
        warning:
          "border-transparent bg-[var(--warning)] text-[var(--warning-foreground)] shadow-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
