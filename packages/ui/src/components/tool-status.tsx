import * as React from "react";
import { cn } from "../lib/utils";
import { Badge } from "./badge";

export type ToolExecutionState =
  | "queued"
  | "running"
  | "succeeded"
  | "failed"
  | "cancelled";

export interface ToolStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  toolName: string;
  state: ToolExecutionState;
  durationMs?: number;
  error?: string;
}

export function ToolStatus({
  toolName,
  state,
  durationMs,
  error,
  className,
  ...props
}: ToolStatusProps) {
  const stateBadgeMap: Record<
    ToolExecutionState,
    { variant: "primary" | "secondary" | "success" | "destructive" | "warning"; label: string }
  > = {
    queued: { variant: "secondary", label: "Queued" },
    running: { variant: "primary", label: "Executing" },
    succeeded: { variant: "success", label: "Completed" },
    failed: { variant: "destructive", label: "Failed" },
    cancelled: { variant: "warning", label: "Cancelled" },
  };

  const current = stateBadgeMap[state];

  return (
    <div
      className={cn(
        "flex flex-col gap-1.5 p-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--muted)]/40 text-xs font-mono",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between">
        <span className="font-semibold text-[var(--foreground)]">{toolName}</span>
        <div className="flex items-center gap-2">
          {durationMs !== undefined && (
            <span className="text-[var(--muted-foreground)]">{durationMs}ms</span>
          )}
          <Badge variant={current.variant}>{current.label}</Badge>
        </div>
      </div>
      {error && (
        <div className="text-[var(--destructive)] text-[11px] font-sans pt-1">
          {error}
        </div>
      )}
    </div>
  );
}
