"use client";

import * as React from "react";
import {
  ThemeToggle,
  Button,
  Input,
  Label,
  Checkbox,
  Switch,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Alert,
  AlertTitle,
  AlertDescription,
  Separator,
  Skeleton,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
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
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  PromptInput,
  ToolStatus,
  ApprovalDialog,
} from "@kunemi-ui/ui";
import { AuthCard, MetricCard, AIChatBlock } from "@kunemi-ui/blocks";
import {
  SparklesIcon,
  BotIcon,
  AlertTriangleIcon,
  CopyIcon,
  CheckIcon,
  ExternalLinkIcon,
  InfoIcon,
} from "@kunemi-ui/icons";

export default function HomePage() {
  const [copied, setCopied] = React.useState(false);
  const [approvalLog, setApprovalLog] = React.useState<string | null>(null);

  const registryInstallCmd = "npx shadcn@latest add https://kunemi-ui.dev/r/button.json";

  const copyToClipboard = () => {
    navigator.clipboard?.writeText(registryInstallCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--primary)] selection:text-[var(--primary-foreground)]">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center gap-2.5 font-bold text-lg tracking-tight hover:opacity-90 transition-opacity">
              <span className="flex h-8 w-8 items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] text-[var(--primary-foreground)]">
                <SparklesIcon size={18} />
              </span>
              <span>Kunemi UI</span>
              <Badge variant="outline" className="text-[10px] uppercase font-mono px-1.5 py-0">
                v0.1.0
              </Badge>
            </a>

            <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-[var(--muted-foreground)]">
              <a href="#primitives" className="hover:text-[var(--foreground)] transition-colors">Primitives</a>
              <a href="#ai-native" className="hover:text-[var(--foreground)] transition-colors">AI Suite</a>
              <a href="#blocks" className="hover:text-[var(--foreground)] transition-colors">Blocks</a>
              <a href="#tokens" className="hover:text-[var(--foreground)] transition-colors">Tokens</a>
              <a href="#registry" className="hover:text-[var(--foreground)] transition-colors">Registry</a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/adeyemiadekunle/kunemi-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-[var(--radius-md)] border border-[var(--border)] hover:bg-[var(--muted)] transition-colors"
            >
              <span>GitHub</span>
              <ExternalLinkIcon size={12} />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-28 border-b border-[var(--border)] bg-gradient-to-b from-[var(--muted)]/20 to-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)] px-3.5 py-1 text-xs font-medium text-[var(--muted-foreground)] shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>WCAG 2.2 AA Contrast Certified & Base UI Powered</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[var(--foreground)]">
            The Accessible & AI-Native <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--foreground)] to-[var(--muted-foreground)] bg-clip-text text-transparent">
              Design System for React
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Engineered on top of headless <strong>Base UI</strong> primitives and styled with <strong>Tailwind CSS v4</strong>.
            Distributable via <strong>shadcn registry</strong> and ready for autonomous coding agents.
          </p>

          {/* Quick Install Bar */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
            <div className="w-full flex items-center justify-between rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--card)] px-3.5 py-2.5 font-mono text-xs shadow-xs text-left">
              <span className="text-[var(--muted-foreground)] select-none mr-2">$</span>
              <span className="truncate text-[var(--foreground)]">{registryInstallCmd}</span>
              <button
                type="button"
                onClick={copyToClipboard}
                className="ml-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] cursor-pointer"
                title="Copy install command"
              >
                {copied ? <CheckIcon size={14} className="text-emerald-500" /> : <CopyIcon size={14} />}
              </button>
            </div>
            <a href="#primitives" className="w-full sm:w-auto">
              <Button className="w-full">Explore Primitives</Button>
            </a>
          </div>

          {/* Key Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 max-w-3xl mx-auto">
            <div className="p-3.5 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--card)] text-left">
              <div className="text-2xl font-bold">14 + 4</div>
              <div className="text-xs text-[var(--muted-foreground)] font-medium">P0 & P1 Primitives</div>
            </div>
            <div className="p-3.5 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--card)] text-left">
              <div className="text-2xl font-bold">75</div>
              <div className="text-xs text-[var(--muted-foreground)] font-medium">Passing Tests (100%)</div>
            </div>
            <div className="p-3.5 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--card)] text-left">
              <div className="text-2xl font-bold">24</div>
              <div className="text-xs text-[var(--muted-foreground)] font-medium">Registry Manifests</div>
            </div>
            <div className="p-3.5 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--card)] text-left">
              <div className="text-2xl font-bold">≥ 4.5:1</div>
              <div className="text-xs text-[var(--muted-foreground)] font-medium">WCAG 2.2 AA Contrast</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Showcase */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-16 space-y-20">

        {/* Section 1: Core Primitives */}
        <section id="primitives" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[var(--border)] pb-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Core UI Primitives</h2>
              <p className="text-sm text-[var(--muted-foreground)] mt-1">
                Headless focus, accessibility, and keyboard loops powered by Base UI.
              </p>
            </div>
            <Badge variant="outline">P0 + P1 Primitives</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Buttons Showcase */}
            <Card>
              <CardHeader>
                <CardTitle>Button Variants & States</CardTitle>
                <CardDescription>WCAG compliant contrast, active state, and loading spinners</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2.5 items-center">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="primary" loading>Loading</Button>
                </div>
                <div className="flex items-center gap-2 pt-2 border-t border-[var(--border)]">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon" aria-label="Sparkles"><SparklesIcon size={16} /></Button>
                </div>
              </CardContent>
            </Card>

            {/* Form Controls */}
            <Card>
              <CardHeader>
                <CardTitle>Form Controls & Labels</CardTitle>
                <CardDescription>Associated accessible labels, required indicator, and error states</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="demo-user" requiredIndicator>User handle</Label>
                  <Input id="demo-user" placeholder="e.g. adekunle" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="demo-model">Model Selector</Label>
                  <Select defaultValue="gemini">
                    <SelectTrigger id="demo-model">
                      <SelectValue placeholder="Select model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gemini">Gemini 2.0 Flash</SelectItem>
                      <SelectItem value="claude">Claude 3.5 Sonnet</SelectItem>
                      <SelectItem value="gpt4">GPT-4o</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-6 pt-2">
                  <div className="flex items-center gap-2">
                    <Checkbox id="demo-terms" defaultChecked />
                    <Label htmlFor="demo-terms">Accept terms</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="demo-stream" defaultChecked />
                    <Label htmlFor="demo-stream">Live Stream</Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Overlays & Dialog */}
            <Card>
              <CardHeader>
                <CardTitle>Overlays & Modals</CardTitle>
                <CardDescription>Base UI Dialog with focus trap, backdrop blur, and dismiss mechanics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
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

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger render={<Button variant="secondary" size="sm">Hover for Tooltip</Button>} />
                      <TooltipContent>
                        Accessible floating tooltip with arrow
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </CardContent>
            </Card>

            {/* Data Table */}
            <Card>
              <CardHeader>
                <CardTitle>Data Table & Status</CardTitle>
                <CardDescription>Accessible tabular view styled with semantic theme borders</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="rounded-[var(--radius-md)] border border-[var(--border)] overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Service</TableHead>
                        <TableHead>Environment</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
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
                <Pagination>
                  <PaginationContent>
                    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
                    <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationNext href="#" /></PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardContent>
            </Card>

            {/* Feedback & Status */}
            <Card>
              <CardHeader>
                <CardTitle>Feedback & Status</CardTitle>
                <CardDescription>Alerts, animated skeletons, and separators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert variant="default">
                  <InfoIcon size={16} />
                  <AlertTitle>System Notice</AlertTitle>
                  <AlertDescription>Tokens loaded with WCAG 2.2 AA compliant contrast.</AlertDescription>
                </Alert>
                <Separator />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </CardContent>
            </Card>

            {/* Tabbed Navigation */}
            <Card>
              <CardHeader>
                <CardTitle>Tabbed Navigation</CardTitle>
                <CardDescription>Accessible keyboard-navigated tab panels</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="overview">
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="anatomy">Anatomy</TabsTrigger>
                    <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="text-sm text-[var(--muted-foreground)] pt-3">
                    Headless keyboard loops adhering to W3C APG patterns.
                  </TabsContent>
                  <TabsContent value="anatomy" className="text-sm text-[var(--muted-foreground)] pt-3">
                    Composed with Base UI TabsList and TabsTrigger primitives.
                  </TabsContent>
                  <TabsContent value="guidelines" className="text-sm text-[var(--muted-foreground)] pt-3">
                    Supports automatic arrow key navigation and focus trapping.
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 2: AI-Native Suite */}
        <section id="ai-native" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[var(--border)] pb-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">AI-Native Interface Suite</h2>
              <p className="text-sm text-[var(--muted-foreground)] mt-1">
                Components designed specifically for LLM and autonomous coding agent interfaces.
              </p>
            </div>
            <Badge variant="primary">Phase 6 Suite</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Prompt Composer */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BotIcon size={18} />
                  <span>Prompt Composer (`PromptInput`)</span>
                </CardTitle>
                <CardDescription>
                  Supports multiline input (`Shift+Enter`) and rapid keyboard submission (`Enter`)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <PromptInput
                  placeholder="Ask Kunemi Agent to generate code or inspect tokens..."
                  onSubmitPrompt={(val) => alert(`Submitted prompt: "${val}"`)}
                />
              </CardContent>
            </Card>

            {/* Tool Status Lifecycle */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SparklesIcon size={18} />
                  <span>Tool Execution Lifecycle (`ToolStatus`)</span>
                </CardTitle>
                <CardDescription>
                  Explicit status reporting for agent tool execution steps
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <ToolStatus
                  toolName="PostgresQuery"
                  state="running"
                  durationMs={120}
                />
                <ToolStatus
                  toolName="ContrastAudit"
                  state="succeeded"
                  durationMs={35}
                />
                <ToolStatus
                  toolName="SandboxCheck"
                  state="failed"
                  error="Container socket timeout"
                />
              </CardContent>
            </Card>

            {/* Approval Gate */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangleIcon size={18} className="text-amber-500" />
                  <span>Consequential Action Protection (`ApprovalDialog`)</span>
                </CardTitle>
                <CardDescription>
                  Prevents unauthorized high-impact actions by requiring explicit human-in-the-loop confirmation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-4">
                  <ApprovalDialog
                    title="Purge Staging Database"
                    actionName="Purge Staging Database"
                    description="This will permanently delete all records in the staging environment. This operation cannot be rolled back."
                    isDestructive={true}
                    trigger={<Button variant="destructive">Trigger Destructive Action</Button>}
                    onApprove={() => setApprovalLog("Approved at " + new Date().toLocaleTimeString())}
                    onReject={() => setApprovalLog("Rejected at " + new Date().toLocaleTimeString())}
                  />
                  {approvalLog && (
                    <Badge variant="outline" className="text-xs">
                      Last Decision: {approvalLog}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 3: Composed Blocks */}
        <section id="blocks" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[var(--border)] pb-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Composed Application Blocks</h2>
              <p className="text-sm text-[var(--muted-foreground)] mt-1">
                Ready-to-use patterns composed from core primitives and tokens.
              </p>
            </div>
            <Badge variant="outline">@kunemi-ui/blocks</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AuthCard
              title="Sign in to Kunemi"
              description="Enter your developer credentials to manage your design system."
              onSubmit={(email) => alert(`Logging in as: ${email}`)}
            />
            <div className="space-y-4">
              <MetricCard
                label="Weekly Agent Invocations"
                value="2,481,200"
                change="+23.5%"
                isPositive={true}
              />
              <MetricCard
                label="Error Rate"
                value="0.04%"
                change="-12.1%"
                isPositive={true}
              />
              <AIChatBlock
                onSendMessage={(msg) => alert(`Agent received: ${msg}`)}
              />
            </div>
          </div>
        </section>

        {/* Section 4: Design Tokens & Contrast Matrix */}
        <section id="tokens" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[var(--border)] pb-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">WCAG 2.2 AA Contrast Tokens</h2>
              <p className="text-sm text-[var(--muted-foreground)] mt-1">
                Zero hardcoded colors. All tokens adapt dynamically across light and dark modes.
              </p>
            </div>
            <Badge variant="success">Certified ≥ 4.5:1</Badge>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            <div className="p-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background)]">
              <div className="h-8 rounded bg-[var(--background)] border border-[var(--border)] mb-2" />
              <div className="text-xs font-mono font-medium">--background</div>
            </div>
            <div className="p-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--card)]">
              <div className="h-8 rounded bg-[var(--foreground)] mb-2" />
              <div className="text-xs font-mono font-medium">--foreground</div>
            </div>
            <div className="p-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--card)]">
              <div className="h-8 rounded bg-[var(--primary)] mb-2" />
              <div className="text-xs font-mono font-medium">--primary</div>
            </div>
            <div className="p-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--card)]">
              <div className="h-8 rounded bg-[var(--secondary)] mb-2" />
              <div className="text-xs font-mono font-medium">--secondary</div>
            </div>
            <div className="p-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--card)]">
              <div className="h-8 rounded bg-[var(--destructive)] mb-2" />
              <div className="text-xs font-mono font-medium">--destructive</div>
            </div>
            <div className="p-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--card)]">
              <div className="h-8 rounded bg-[var(--muted)] mb-2" />
              <div className="text-xs font-mono font-medium">--muted</div>
            </div>
          </div>
        </section>

        {/* Section 5: AI Discoverability & Registry */}
        <section id="registry" className="p-8 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--card)] space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight">AI Coding Agent Discoverability</h2>
            <Badge variant="outline">llms.txt + AGENTS.md</Badge>
          </div>
          <p className="text-sm text-[var(--muted-foreground)]">
            Kunemi UI includes machine-readable guidelines for autonomous agents such as Antigravity, Claude Code, Cursor, and Codex:
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="/llms.txt"
              target="_blank"
              className="text-xs font-mono font-medium px-3 py-2 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background)] hover:bg-[var(--muted)] flex items-center gap-1.5"
            >
              <span>/llms.txt</span>
              <ExternalLinkIcon size={12} />
            </a>
            <a
              href="/llms-full.txt"
              target="_blank"
              className="text-xs font-mono font-medium px-3 py-2 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background)] hover:bg-[var(--muted)] flex items-center gap-1.5"
            >
              <span>/llms-full.txt</span>
              <ExternalLinkIcon size={12} />
            </a>
            <a
              href="/r/index.json"
              target="_blank"
              className="text-xs font-mono font-medium px-3 py-2 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background)] hover:bg-[var(--muted)] flex items-center gap-1.5"
            >
              <span>/r/index.json</span>
              <ExternalLinkIcon size={12} />
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-8 text-center text-xs text-[var(--muted-foreground)] space-y-2">
        <p>Built with Base UI primitives and Tailwind CSS v4. WCAG 2.2 AA Certified.</p>
        <p>MIT License © {new Date().getFullYear()} Adekunle Adeyemi</p>
      </footer>
    </div>
  );
}
