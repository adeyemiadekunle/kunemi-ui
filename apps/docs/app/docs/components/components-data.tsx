"use client";

import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Button,
  Input,
  Label,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Alert,
  AlertTitle,
  AlertDescription,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogBackdrop,
  DialogPopup,
  DialogTitle,
  DialogDescription,
  DialogClose,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  PromptInput,
  ToolStatus,
  ApprovalDialog,
} from "@kunemi-ui/ui";
import { AuthCard, MetricCard } from "@kunemi-ui/blocks";
import {
  SparklesIcon,
  AlertTriangleIcon,
  InfoIcon,
} from "@kunemi-ui/icons";

export interface ComponentDoc {
  slug: string;
  title: string;
  category: "Primitives" | "AI-Native" | "Blocks";
  description: string;
  sourcePath: string;
  cliCommand: string;
  usageCode: string;
  sourceCode: string;
  renderPreview: () => React.ReactNode;
}

export const COMPONENTS_CATALOG: ComponentDoc[] = [
  {
    slug: "accordion",
    title: "Accordion",
    category: "Primitives",
    description: "A vertically stacked set of interactive headings that each reveal an associated section of content.",
    sourcePath: "components/ui/accordion.tsx",
    cliCommand: "npx shadcn@latest add https://kunemi-ui.dev/r/accordion.json",
    usageCode: `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion defaultValue={["item-1"]} className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA Accordion design pattern and relies on Base UI focus management.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled with Tailwind CSS v4?</AccordionTrigger>
        <AccordionContent>
          Yes. It leverages modern Tailwind CSS v4 utility classes and WCAG 2.2 AA semantic tokens.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can it be distributed via shadcn CLI?</AccordionTrigger>
        <AccordionContent>
          Yes. It is fully packaged as a shadcn registry JSON manifest with automatic import mapping.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
    sourceCode: `"use client";

import * as React from "react";
import { Accordion as BaseAccordion } from "@base-ui-components/react";
import { cn } from "@/lib/utils";

export const Accordion = BaseAccordion.Root;

export const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseAccordion.Item>
>(({ className, ...props }, ref) => (
  <BaseAccordion.Item
    ref={ref}
    className={cn("border-b border-border/40", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

export const AccordionHeader = BaseAccordion.Header;

export const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof BaseAccordion.Trigger>
>(({ className, children, ...props }, ref) => (
  <BaseAccordion.Header className="flex">
    <BaseAccordion.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left cursor-pointer",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-1",
        "[&[data-panel-open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4 shrink-0 text-muted-foreground transition-transform duration-200"
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </BaseAccordion.Trigger>
  </BaseAccordion.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseAccordion.Panel>
>(({ className, children, ...props }, ref) => (
  <BaseAccordion.Panel
    ref={ref}
    className={cn(
      "overflow-hidden text-sm text-muted-foreground transition-all pb-4 pt-0",
      className
    )}
    {...props}
  >
    {children}
  </BaseAccordion.Panel>
));
AccordionContent.displayName = "AccordionContent";`,
    renderPreview: () => (
      <div className="w-full max-w-md">
        <Accordion defaultValue={["item-1"]}>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA Accordion design pattern and relies on Base UI focus management.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled with Tailwind CSS v4?</AccordionTrigger>
            <AccordionContent>
              Yes. It leverages modern Tailwind CSS v4 utility classes and WCAG 2.2 AA semantic tokens.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can it be distributed via shadcn CLI?</AccordionTrigger>
            <AccordionContent>
              Yes. It is fully packaged as a shadcn registry JSON manifest with automatic import mapping.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    ),
  },
  {
    slug: "button",
    title: "Button",
    category: "Primitives",
    description: "Action control with semantic variants, sizes, tactile click feedback, and animated loading state.",
    sourcePath: "components/ui/button.tsx",
    cliCommand: "npx shadcn@latest add https://kunemi-ui.dev/r/button.json",
    usageCode: `import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="primary" loading>Loading</Button>
    </div>
  );
}`,
    sourceCode: `"use client";

import * as React from "react";
import { Button as BaseButton } from "@base-ui-components/react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-1.5 font-medium select-none whitespace-nowrap outline-none transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:translate-y-px",
  {
    variants: {
      variant: {
        primary: "bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90 shadow-xs",
        secondary: "bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-[var(--muted)]",
        outline: "border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--muted)] shadow-xs",
        ghost: "text-[var(--foreground)] hover:bg-[var(--muted)]",
        destructive: "bg-[var(--destructive)] text-[var(--destructive-foreground)] hover:opacity-90 shadow-xs",
      },
      size: {
        sm: "h-8 px-2.5 text-xs rounded-[var(--radius-sm)]",
        md: "h-9 px-3.5 text-sm rounded-[var(--radius-md)]",
        lg: "h-10 px-5 text-sm rounded-[var(--radius-lg)]",
        icon: "h-9 w-9 p-0 rounded-[var(--radius-md)]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);`,
    renderPreview: () => (
      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-wrap gap-2.5 items-center justify-center">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="primary" loading>Loading</Button>
        </div>
        <div className="flex items-center gap-2 pt-2 border-t border-border/40">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="icon" aria-label="Sparkles"><SparklesIcon size={16} /></Button>
        </div>
      </div>
    ),
  },
  {
    slug: "dialog",
    title: "Dialog",
    category: "Primitives",
    description: "A modal window overlaid on the primary window, trapping focus and dismissing via Escape key or backdrop click.",
    sourcePath: "components/ui/dialog.tsx",
    cliCommand: "npx shadcn@latest add https://kunemi-ui.dev/r/dialog.json",
    usageCode: `import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogBackdrop,
  DialogPopup,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">Open Dialog</Button>} />
      <DialogPortal>
        <DialogBackdrop />
        <DialogPopup>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
          <div className="mt-4 flex justify-end gap-2">
            <DialogClose render={<Button variant="outline" size="sm">Cancel</Button>} />
            <Button size="sm">Save changes</Button>
          </div>
        </DialogPopup>
      </DialogPortal>
    </Dialog>
  );
}`,
    sourceCode: `"use client";

import * as React from "react";
import { Dialog as BaseDialog } from "@base-ui-components/react";
import { cn } from "@/lib/utils";

export const Dialog = BaseDialog.Root;
export const DialogTrigger = BaseDialog.Trigger;
export const DialogPortal = BaseDialog.Portal;
export const DialogClose = BaseDialog.Close;

export const DialogBackdrop = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Backdrop>
>(({ className, ...props }, ref) => (
  <BaseDialog.Backdrop
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
      className
    )}
    {...props}
  />
));`,
    renderPreview: () => (
      <Dialog>
        <DialogTrigger render={<Button variant="outline">Open Modal Dialog</Button>} />
        <DialogPortal>
          <DialogBackdrop />
          <DialogPopup>
            <DialogTitle>Base UI Dialog</DialogTitle>
            <DialogDescription>
              Focus is trapped automatically, ESC restores focus to trigger, and backdrop clicking dismisses.
            </DialogDescription>
            <div className="mt-4 flex justify-end gap-2">
              <DialogClose render={<Button variant="outline" size="sm">Cancel</Button>} />
              <Button size="sm">Save changes</Button>
            </div>
          </DialogPopup>
        </DialogPortal>
      </Dialog>
    ),
  },
  {
    slug: "input",
    title: "Input",
    category: "Primitives",
    description: "Accessible text field control with support for associated labels, error indicators, and focus halos.",
    sourcePath: "components/ui/input.tsx",
    cliCommand: "npx shadcn@latest add https://kunemi-ui.dev/r/input.json",
    usageCode: `import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputDemo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="email" requiredIndicator>Email Address</Label>
      <Input id="email" type="email" placeholder="name@company.com" />
    </div>
  );
}`,
    sourceCode: `"use client";

import * as React from "react";
import { Input as BaseInput } from "@base-ui-components/react";
import { cn } from "@/lib/utils";

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
          "flex h-9 w-full rounded-[var(--radius-md)] border border-[var(--input)] border-input/60 bg-[var(--background)] px-3 py-1 text-sm text-[var(--foreground)] shadow-xs",
          "placeholder:text-[var(--muted-foreground)] transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--background)]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          invalid && "border-[var(--destructive)] focus-visible:ring-[var(--destructive)]",
          className
        )}
        {...props}
      />
    );
  }
);`,
    renderPreview: () => (
      <div className="w-full max-w-sm space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="demo-user-input" requiredIndicator>User handle</Label>
          <Input id="demo-user-input" placeholder="e.g. adekunle" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="demo-error-input">Invalid Input State</Label>
          <Input id="demo-error-input" defaultValue="invalid@format" invalid />
        </div>
      </div>
    ),
  },
  {
    slug: "select",
    title: "Select",
    category: "Primitives",
    description: "Displays a list of options for the user to pick from—triggered by a button with full keyboard navigation.",
    sourcePath: "components/ui/select.tsx",
    cliCommand: "npx shadcn@latest add https://kunemi-ui.dev/r/select.json",
    usageCode: `import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export function SelectDemo() {
  return (
    <Select defaultValue="gemini">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a model" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="gemini">Gemini 2.0 Flash</SelectItem>
        <SelectItem value="claude">Claude 3.5 Sonnet</SelectItem>
        <SelectItem value="gpt4">GPT-4o</SelectItem>
      </SelectContent>
    </Select>
  );
}`,
    sourceCode: `"use client";

import * as React from "react";
import { Select as BaseSelect } from "@base-ui-components/react";
import { cn } from "@/lib/utils";

export const Select = BaseSelect.Root;
export const SelectTrigger = BaseSelect.Trigger;
export const SelectContent = BaseSelect.Popup;
export const SelectItem = BaseSelect.Item;`,
    renderPreview: () => (
      <div className="w-64">
        <Select defaultValue="gemini">
          <SelectTrigger>
            <SelectValue placeholder="Select model" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gemini">Gemini 2.0 Flash</SelectItem>
            <SelectItem value="claude">Claude 3.5 Sonnet</SelectItem>
            <SelectItem value="gpt4">GPT-4o</SelectItem>
          </SelectContent>
        </Select>
      </div>
    ),
  },
  {
    slug: "tabs",
    title: "Tabs",
    category: "Primitives",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    sourcePath: "components/ui/tabs.tsx",
    cliCommand: "npx shadcn@latest add https://kunemi-ui.dev/r/tabs.json",
    usageCode: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Manage your account settings here.</TabsContent>
      <TabsContent value="password">Update your security credentials.</TabsContent>
    </Tabs>
  );
}`,
    sourceCode: `"use client";

import * as React from "react";
import { Tabs as BaseTabs } from "@base-ui-components/react";
import { cn } from "@/lib/utils";

export const Tabs = BaseTabs.Root;
export const TabsList = BaseTabs.List;
export const TabsTrigger = BaseTabs.Tab;
export const TabsContent = BaseTabs.Panel;`,
    renderPreview: () => (
      <Tabs defaultValue="overview" className="w-full max-w-md">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="anatomy">Anatomy</TabsTrigger>
          <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="text-sm text-muted-foreground pt-3">
          Headless keyboard loops adhering to W3C APG patterns.
        </TabsContent>
        <TabsContent value="anatomy" className="text-sm text-muted-foreground pt-3">
          Composed with Base UI TabsList and TabsTrigger primitives.
        </TabsContent>
        <TabsContent value="guidelines" className="text-sm text-muted-foreground pt-3">
          Supports automatic arrow key navigation and focus trapping.
        </TabsContent>
      </Tabs>
    ),
  },
  {
    slug: "card",
    title: "Card",
    category: "Primitives",
    description: "Displays a card with header, content, and footer sections using refined border alpha and shadow.",
    sourcePath: "components/ui/card.tsx",
    cliCommand: "npx shadcn@latest add https://kunemi-ui.dev/r/card.json",
    usageCode: `import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CardDemo() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new agent in one click.</CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="w-full">Deploy</Button>
      </CardContent>
    </Card>
  );
}`,
    sourceCode: `import * as React from "react";
import { cn } from "@/lib/utils";

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-xl border border-border/40 bg-card text-card-foreground shadow-xs transition-colors", className)}
      {...props}
    />
  )
);`,
    renderPreview: () => (
      <Card className="w-full max-w-sm rounded-xl border border-border/40 bg-card shadow-xs">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your autonomous coding agent in one click.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Input placeholder="Project name" />
          <Button className="w-full">Deploy Now</Button>
        </CardContent>
      </Card>
    ),
  },
  {
    slug: "prompt-input",
    title: "PromptInput",
    category: "AI-Native",
    description: "AI-native multiline prompt composer supporting keyboard submit (Enter) and line breaks (Shift+Enter).",
    sourcePath: "components/ui/prompt-input.tsx",
    cliCommand: "npx shadcn@latest add https://kunemi-ui.dev/r/prompt-input.json",
    usageCode: `import { PromptInput } from "@/components/ui/prompt-input";

export function PromptInputDemo() {
  return (
    <PromptInput
      placeholder="Ask Kunemi Agent to write code or inspect tokens..."
      onSubmitPrompt={(prompt) => console.log("Submitted:", prompt)}
    />
  );
}`,
    sourceCode: `"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface PromptInputProps {
  placeholder?: string;
  onSubmitPrompt?: (prompt: string) => void;
  disabled?: boolean;
}`,
    renderPreview: () => (
      <div className="w-full max-w-md">
        <PromptInput
          placeholder="Ask Kunemi Agent to inspect design tokens..."
          onSubmitPrompt={(val) => alert(`Submitted prompt: "${val}"`)}
        />
      </div>
    ),
  },
  {
    slug: "tool-status",
    title: "ToolStatus",
    category: "AI-Native",
    description: "Visual status indicator for autonomous agent tool execution lifecycles (running, succeeded, failed).",
    sourcePath: "components/ui/tool-status.tsx",
    cliCommand: "npx shadcn@latest add https://kunemi-ui.dev/r/tool-status.json",
    usageCode: `import { ToolStatus } from "@/components/ui/tool-status";

export function ToolStatusDemo() {
  return (
    <div className="space-y-2">
      <ToolStatus toolName="PostgresQuery" state="running" durationMs={120} />
      <ToolStatus toolName="ContrastAudit" state="succeeded" durationMs={35} />
      <ToolStatus toolName="SandboxCheck" state="failed" error="Socket timeout" />
    </div>
  );
}`,
    sourceCode: `"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ToolStatusProps {
  toolName: string;
  state: "idle" | "running" | "succeeded" | "failed";
  durationMs?: number;
  error?: string;
}`,
    renderPreview: () => (
      <div className="w-full max-w-md space-y-2.5">
        <ToolStatus toolName="PostgresQuery" state="running" durationMs={120} />
        <ToolStatus toolName="ContrastAudit" state="succeeded" durationMs={35} />
        <ToolStatus toolName="SandboxCheck" state="failed" error="Container socket timeout" />
      </div>
    ),
  },
  {
    slug: "approval-dialog",
    title: "ApprovalDialog",
    category: "AI-Native",
    description: "Consequential action gate requiring explicit human confirmation before executing high-impact agent operations.",
    sourcePath: "components/ui/approval-dialog.tsx",
    cliCommand: "npx shadcn@latest add https://kunemi-ui.dev/r/approval-dialog.json",
    usageCode: `import { ApprovalDialog } from "@/components/ui/approval-dialog";
import { Button } from "@/components/ui/button";

export function ApprovalDemo() {
  return (
    <ApprovalDialog
      title="Delete Production Index"
      actionName="Delete Production Index"
      description="This will permanently delete the search index. This operation cannot be undone."
      isDestructive={true}
      trigger={<Button variant="destructive">Trigger Destructive Action</Button>}
      onApprove={() => console.log("Approved")}
      onReject={() => console.log("Rejected")}
    />
  );
}`,
    sourceCode: `"use client";

import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogBackdrop,
  DialogPopup,
  DialogTitle,
  DialogDescription,
} from "./dialog";
import { Button } from "./button";`,
    renderPreview: () => (
      <ApprovalDialog
        title="Purge Staging Database"
        actionName="Purge Staging Database"
        description="This will permanently delete all records in the staging database. This operation cannot be rolled back."
        isDestructive={true}
        trigger={<Button variant="destructive">Trigger Destructive Action</Button>}
        onApprove={() => alert("Approved action")}
        onReject={() => alert("Rejected action")}
      />
    ),
  },
  {
    slug: "auth-card",
    title: "AuthCard",
    category: "Blocks",
    description: "Composed authentication login form with email & password fields, validation states, and submit trigger.",
    sourcePath: "packages/blocks/src/auth-card.tsx",
    cliCommand: "npx shadcn@latest add https://kunemi-ui.dev/r/composed-blocks.json",
    usageCode: `import { AuthCard } from "@kunemi-ui/blocks";

export function AuthCardDemo() {
  return (
    <AuthCard
      title="Sign in to Kunemi"
      description="Enter your developer credentials to manage your design system."
      onSubmit={(email) => console.log("Logging in:", email)}
    />
  );
}`,
    sourceCode: `"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@kunemi-ui/ui";
import { Input, Label, Button } from "@kunemi-ui/ui";`,
    renderPreview: () => (
      <div className="w-full max-w-md">
        <AuthCard
          title="Sign in to Kunemi"
          description="Enter your developer credentials to manage your design system."
          onSubmit={(email) => alert(`Logging in as: ${email}`)}
        />
      </div>
    ),
  },
  {
    slug: "metric-card",
    title: "MetricCard",
    category: "Blocks",
    description: "Analytics and telemetry KPI stat card with positive/negative delta change trends.",
    sourcePath: "packages/blocks/src/metric-card.tsx",
    cliCommand: "npx shadcn@latest add https://kunemi-ui.dev/r/composed-blocks.json",
    usageCode: `import { MetricCard } from "@kunemi-ui/blocks";

export function MetricCardDemo() {
  return (
    <MetricCard
      label="Weekly Agent Invocations"
      value="2,481,200"
      change="+23.5%"
      isPositive={true}
    />
  );
}`,
    sourceCode: `"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@kunemi-ui/ui";
import { Badge } from "@kunemi-ui/ui";`,
    renderPreview: () => (
      <div className="w-full max-w-sm">
        <MetricCard
          label="Weekly Agent Invocations"
          value="2,481,200"
          change="+23.5%"
          isPositive={true}
        />
      </div>
    ),
  },
  {
    slug: "alert",
    title: "Alert",
    category: "Primitives",
    description: "Displays a callout for user attention with icons and semantic severity tones.",
    sourcePath: "components/ui/alert.tsx",
    cliCommand: "npx shadcn@latest add https://kunemi-ui.dev/r/alert.json",
    usageCode: `import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "@kunemi-ui/icons";

export function AlertDemo() {
  return (
    <Alert>
      <InfoIcon size={16} />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the shadcn CLI.
      </AlertDescription>
    </Alert>
  );
}`,
    sourceCode: `import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const Alert = React.forwardRef<HTMLDivElement, any>(({ className, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn("relative w-full rounded-lg border p-4 text-sm", className)} {...props} />
));`,
    renderPreview: () => (
      <div className="w-full max-w-md space-y-3">
        <Alert variant="default">
          <InfoIcon size={16} />
          <AlertTitle>System Notice</AlertTitle>
          <AlertDescription>Tokens loaded with WCAG 2.2 AA compliant contrast.</AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertTriangleIcon size={16} />
          <AlertTitle>High Severity</AlertTitle>
          <AlertDescription>Authentication token expired. Please re-authenticate.</AlertDescription>
        </Alert>
      </div>
    ),
  },
  {
    slug: "badge",
    title: "Badge",
    category: "Primitives",
    description: "Displays a small status badge or pill tag with WCAG compliant colors.",
    sourcePath: "components/ui/badge.tsx",
    cliCommand: "npx shadcn@latest add https://kunemi-ui.dev/r/badge.json",
    usageCode: `import { Badge } from "@/components/ui/badge";

export function BadgeDemo() {
  return (
    <div className="flex gap-2">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  );
}`,
    sourceCode: `import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const Badge = ({ className, variant, ...props }: any) => (
  <div className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold", className)} {...props} />
);`,
    renderPreview: () => (
      <div className="flex flex-wrap gap-2.5 items-center justify-center">
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </div>
    ),
  },
  {
    slug: "table",
    title: "Table",
    category: "Primitives",
    description: "A responsive, accessible data table component styled with semantic theme row borders.",
    sourcePath: "components/ui/table.tsx",
    cliCommand: "npx shadcn@latest add https://kunemi-ui.dev/r/table.json",
    usageCode: `import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

export function TableDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`,
    sourceCode: `import * as React from "react";
import { cn } from "@/lib/utils";

export const Table = React.forwardRef<HTMLTableElement, any>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props} />
  </div>
));`,
    renderPreview: () => (
      <div className="w-full max-w-md rounded-lg border border-border/40 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-border/40">
              <TableHead>Service</TableHead>
              <TableHead>Environment</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border-b border-border/40">
              <TableCell className="font-medium">Inference Gateway</TableCell>
              <TableCell>Production</TableCell>
              <TableCell><Badge variant="success">Active</Badge></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Embedding Worker</TableCell>
              <TableCell>Staging</TableCell>
              <TableCell><Badge variant="secondary">Idle</Badge></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    ),
  },
];
