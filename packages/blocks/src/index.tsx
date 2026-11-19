import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
  Input,
  Label,
  Checkbox,
  Badge,
  PromptInput,
  ToolStatus,
} from "@kunemi-ui/ui";

export interface AuthCardProps {
  title?: string;
  description?: string;
  onSubmit?: (e: React.FormEvent) => void;
}

export function AuthCard({
  title = "Welcome back",
  description = "Enter your credentials to access your account",
  onSubmit,
}: AuthCardProps) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <form onSubmit={onSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="auth-email">Email</Label>
            <Input
              id="auth-email"
              type="email"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="auth-password">Password</Label>
              <a
                href="#forgot"
                className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              >
                Forgot password?
              </a>
            </div>
            <Input id="auth-password" type="password" required />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember-me" />
            <Label htmlFor="remember-me" className="text-xs">
              Remember for 30 days
            </Label>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" variant="primary" className="w-full">
            Sign in
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

export interface MetricCardProps {
  label: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
}

export function MetricCard({
  label,
  value,
  change,
  isPositive = true,
}: MetricCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-[var(--muted-foreground)]">
          {label}
        </CardTitle>
        {change && (
          <Badge variant={isPositive ? "success" : "destructive"}>
            {change}
          </Badge>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-[var(--foreground)]">{value}</div>
      </CardContent>
    </Card>
  );
}

export interface AIChatBlockProps {
  onSendMessage?: (message: string) => void;
  loading?: boolean;
}

export function AIChatBlock({ onSendMessage, loading = false }: AIChatBlockProps) {
  return (
    <div className="space-y-3 w-full">
      <div className="flex items-center justify-between px-1">
        <span className="text-xs font-mono text-[var(--muted-foreground)]">
          Autonomous Agent
        </span>
        <Badge variant="primary">Online</Badge>
      </div>

      <ToolStatus
        toolName="semantic_search"
        state="succeeded"
        durationMs={180}
      />

      <PromptInput
        placeholder="Instruct the assistant..."
        loading={loading}
        onSubmitPrompt={onSendMessage}
      />
    </div>
  );
}
