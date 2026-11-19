"use client";

import * as React from "react";
import { cn } from "../lib/utils";
import { Button } from "./button";

export interface PromptInputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  onSubmitPrompt?: (value: string) => void;
  loading?: boolean;
  onStop?: () => void;
  actions?: React.ReactNode;
}

export const PromptInput = React.forwardRef<HTMLTextAreaElement, PromptInputProps>(
  (
    {
      className,
      value,
      defaultValue,
      onChange,
      onSubmitPrompt,
      loading = false,
      onStop,
      actions,
      placeholder = "Ask anything or type a prompt...",
      disabled,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(
      defaultValue !== undefined ? String(defaultValue) : ""
    );
    const currentValue = value !== undefined ? String(value) : internalValue;

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        if (currentValue.trim() && onSubmitPrompt && !loading && !disabled) {
          onSubmitPrompt(currentValue.trim());
        }
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (value === undefined) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);
    };

    const handleFormSubmit = () => {
      if (currentValue.trim() && onSubmitPrompt && !loading && !disabled) {
        onSubmitPrompt(currentValue.trim());
      }
    };

    return (
      <div
        className={cn(
          "relative flex flex-col w-full rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--background)] p-3 shadow-sm transition-colors",
          "focus-within:border-[var(--ring)] focus-within:ring-2 focus-within:ring-[var(--ring)]/20",
          className
        )}
      >
        <textarea
          ref={ref}
          value={currentValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          rows={3}
          className="w-full resize-none bg-transparent text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          {...props}
        />

        <div className="flex items-center justify-between pt-2 border-t border-[var(--border)]/40 mt-2">
          <div className="flex items-center gap-2">{actions}</div>

          <div className="flex items-center gap-2">
            {loading ? (
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={onStop}
                aria-label="Stop generating"
              >
                <span className="h-2 w-2 rounded-xs bg-[var(--destructive)] mr-1.5" />
                Stop
              </Button>
            ) : (
              <Button
                type="button"
                size="sm"
                variant="primary"
                disabled={!currentValue.trim() || disabled}
                onClick={handleFormSubmit}
                aria-label="Submit prompt"
              >
                Send
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }
);

PromptInput.displayName = "PromptInput";
