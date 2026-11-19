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
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Sticky Compact Header (h-14 shadcn standard) */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto flex h-14 items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center gap-2 font-semibold text-base tracking-tight hover:opacity-90 transition-opacity">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-xs">
                <SparklesIcon size={15} />
              </span>
              <span>Kunemi UI</span>
              <span className="rounded-full bg-muted/60 px-2 py-0.5 text-[10px] font-mono text-muted-foreground border border-border/50">
                v0.1.1
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-muted-foreground">
              <a href="#primitives" className="hover:text-foreground transition-colors">Primitives</a>
              <a href="#ai-native" className="hover:text-foreground transition-colors">AI Suite</a>
              <a href="#blocks" className="hover:text-foreground transition-colors">Blocks</a>
              <a href="#tokens" className="hover:text-foreground transition-colors">Tokens</a>
              <a href="#registry" className="hover:text-foreground transition-colors">Registry</a>
            </nav>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Quick Command Palette Search Pill */}
            <button
              type="button"
              onClick={() => alert("Command search shortcut (⌘K) — ready for docs integration!")}
              className="hidden sm:inline-flex relative h-8 w-44 lg:w-56 justify-between items-center rounded-lg border border-input/60 bg-muted/40 hover:bg-muted/70 px-2.5 text-xs text-muted-foreground transition-colors cursor-pointer"
            >
              <span>Search docs...</span>
              <kbd className="pointer-events-none rounded border border-border/60 bg-background px-1.5 font-mono text-[10px] text-muted-foreground shadow-2xs">
                ⌘K
              </kbd>
            </button>

            <a
              href="https://github.com/adeyemiadekunle/kunemi-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 items-center gap-1.5 text-xs font-medium px-2.5 rounded-lg border border-border/40 hover:bg-muted transition-colors"
            >
              <ExternalLinkIcon size={12} />
              <span className="hidden sm:inline">GitHub</span>
            </a>

            <ThemeToggle className="h-8 w-8 rounded-lg border border-border/40" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-b border-border/40 bg-gradient-to-b from-muted/20 via-background to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
          {/* Announcement Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 hover:bg-muted/80 px-3 py-1 text-xs font-medium text-foreground transition-colors shadow-xs">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>WCAG 2.2 AA Contrast Certified & Base UI Powered</span>
            <ExternalLinkIcon size={10} className="text-muted-foreground" />
          </div>

          {/* Editorial H1 Heading */}
          <h1 className="text-balance text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.08] text-foreground">
            The Accessible & AI-Native <br className="hidden sm:inline" />
            Design System for React
          </h1>

          <p className="max-w-2xl mx-auto text-balance text-base sm:text-lg text-muted-foreground font-normal leading-relaxed">
            Engineered on top of headless <strong>Base UI</strong> primitives and styled with <strong>Tailwind CSS v4</strong>.
            Distributable via <strong>shadcn registry</strong> and ready for autonomous coding agents.
          </p>

          {/* Quick Install Bar & CTA Pair */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a href="#primitives">
              <Button size="md" className="rounded-full px-5 h-9 shadow-xs">
                Explore Primitives
              </Button>
            </a>
            <div className="flex items-center rounded-full border border-border/60 bg-muted/40 hover:bg-muted/60 px-3.5 py-1.5 font-mono text-xs text-foreground transition-colors shadow-2xs">
              <span className="text-muted-foreground select-none mr-2">$</span>
              <span className="truncate max-w-[260px] sm:max-w-none">{registryInstallCmd}</span>
              <button
                type="button"
                onClick={copyToClipboard}
                className="ml-2 text-muted-foreground hover:text-foreground cursor-pointer"
                title="Copy install command"
              >
                {copied ? <CheckIcon size={14} className="text-emerald-500" /> : <CopyIcon size={14} />}
              </button>
            </div>
          </div>

          {/* Key Metrics Bento Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-3xl mx-auto">
            <div className="p-3.5 rounded-xl border border-border/40 bg-card/60 shadow-xs text-left">
              <div className="text-2xl font-bold tracking-tight">14 + 4</div>
              <div className="text-xs text-muted-foreground font-medium mt-0.5">P0 & P1 Primitives</div>
            </div>
            <div className="p-3.5 rounded-xl border border-border/40 bg-card/60 shadow-xs text-left">
              <div className="text-2xl font-bold tracking-tight">75</div>
              <div className="text-xs text-muted-foreground font-medium mt-0.5">Passing Tests (100%)</div>
            </div>
            <div className="p-3.5 rounded-xl border border-border/40 bg-card/60 shadow-xs text-left">
              <div className="text-2xl font-bold tracking-tight">24</div>
              <div className="text-xs text-muted-foreground font-medium mt-0.5">Registry Manifests</div>
            </div>
            <div className="p-3.5 rounded-xl border border-border/40 bg-card/60 shadow-xs text-left">
              <div className="text-2xl font-bold tracking-tight">≥ 4.5:1</div>
              <div className="text-xs text-muted-foreground font-medium mt-0.5">WCAG 2.2 AA Contrast</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Showcase */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-14 space-y-16">

        {/* Section 1: Core Primitives */}
        <section id="primitives" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-border/40 pb-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Core UI Primitives</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Headless focus, accessibility, and keyboard loops powered by Base UI.
              </p>
            </div>
            <Badge variant="outline" className="border-border/60">P0 + P1 Primitives</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Buttons Showcase */}
            <Card className="rounded-xl border border-border/40 bg-card shadow-xs">
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
                <div className="flex items-center gap-2 pt-2 border-t border-border/40">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon" aria-label="Sparkles"><SparklesIcon size={16} /></Button>
                </div>
              </CardContent>
            </Card>

            {/* Form Controls */}
            <Card className="rounded-xl border border-border/40 bg-card shadow-xs">
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
            <Card className="rounded-xl border border-border/40 bg-card shadow-xs">
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
            <Card className="rounded-xl border border-border/40 bg-card shadow-xs">
              <CardHeader>
                <CardTitle>Data Table & Status</CardTitle>
                <CardDescription>Accessible tabular view styled with semantic theme borders</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="rounded-lg border border-border/40 overflow-hidden">
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
            <Card className="rounded-xl border border-border/40 bg-card shadow-xs">
              <CardHeader>
                <CardTitle>Feedback & Status</CardTitle>
                <CardDescription>Alerts, animated skeletons, and separators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert variant="default" className="border-border/40">
                  <InfoIcon size={16} />
                  <AlertTitle>System Notice</AlertTitle>
                  <AlertDescription>Tokens loaded with WCAG 2.2 AA compliant contrast.</AlertDescription>
                </Alert>
                <Separator className="bg-border/40" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </CardContent>
            </Card>

            {/* Tabbed Navigation */}
            <Card className="rounded-xl border border-border/40 bg-card shadow-xs">
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
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 2: AI-Native Suite */}
        <section id="ai-native" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-border/40 pb-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">AI-Native Interface Suite</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Components designed specifically for LLM and autonomous coding agent interfaces.
              </p>
            </div>
            <Badge variant="primary">Phase 6 Suite</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Prompt Composer */}
            <Card className="rounded-xl border border-border/40 bg-card shadow-xs">
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
            <Card className="rounded-xl border border-border/40 bg-card shadow-xs">
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
            <Card className="md:col-span-2 rounded-xl border border-border/40 bg-card shadow-xs">
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
                    <Badge variant="outline" className="text-xs border-border/60">
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
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-border/40 pb-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Composed Application Blocks</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Ready-to-use patterns composed from core primitives and tokens.
              </p>
            </div>
            <Badge variant="outline" className="border-border/60">@kunemi-ui/blocks</Badge>
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
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-border/40 pb-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">WCAG 2.2 AA Contrast Tokens</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Zero hardcoded colors. All tokens adapt dynamically across light and dark modes.
              </p>
            </div>
            <Badge variant="success">Certified ≥ 4.5:1</Badge>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            <div className="p-3.5 rounded-xl border border-border/40 bg-card shadow-xs">
              <div className="h-8 rounded-lg bg-background border border-border/60 mb-2" />
              <div className="text-xs font-mono font-medium">--background</div>
            </div>
            <div className="p-3.5 rounded-xl border border-border/40 bg-card shadow-xs">
              <div className="h-8 rounded-lg bg-foreground mb-2" />
              <div className="text-xs font-mono font-medium">--foreground</div>
            </div>
            <div className="p-3.5 rounded-xl border border-border/40 bg-card shadow-xs">
              <div className="h-8 rounded-lg bg-primary mb-2" />
              <div className="text-xs font-mono font-medium">--primary</div>
            </div>
            <div className="p-3.5 rounded-xl border border-border/40 bg-card shadow-xs">
              <div className="h-8 rounded-lg bg-secondary mb-2" />
              <div className="text-xs font-mono font-medium">--secondary</div>
            </div>
            <div className="p-3.5 rounded-xl border border-border/40 bg-card shadow-xs">
              <div className="h-8 rounded-lg bg-destructive mb-2" />
              <div className="text-xs font-mono font-medium">--destructive</div>
            </div>
            <div className="p-3.5 rounded-xl border border-border/40 bg-card shadow-xs">
              <div className="h-8 rounded-lg bg-muted mb-2" />
              <div className="text-xs font-mono font-medium">--muted</div>
            </div>
          </div>
        </section>

        {/* Section 5: AI Discoverability & Registry */}
        <section id="registry" className="p-8 rounded-xl border border-border/40 bg-card shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight">AI Coding Agent Discoverability</h2>
            <Badge variant="outline" className="border-border/60">llms.txt + AGENTS.md</Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Kunemi UI includes machine-readable guidelines for autonomous agents such as Antigravity, Claude Code, Cursor, and Codex:
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="/llms.txt"
              target="_blank"
              className="text-xs font-mono font-medium px-3 py-2 rounded-lg border border-border/40 bg-background hover:bg-muted flex items-center gap-1.5 transition-colors"
            >
              <span>/llms.txt</span>
              <ExternalLinkIcon size={12} />
            </a>
            <a
              href="/llms-full.txt"
              target="_blank"
              className="text-xs font-mono font-medium px-3 py-2 rounded-lg border border-border/40 bg-background hover:bg-muted flex items-center gap-1.5 transition-colors"
            >
              <span>/llms-full.txt</span>
              <ExternalLinkIcon size={12} />
            </a>
            <a
              href="/r/index.json"
              target="_blank"
              className="text-xs font-mono font-medium px-3 py-2 rounded-lg border border-border/40 bg-background hover:bg-muted flex items-center gap-1.5 transition-colors"
            >
              <span>/r/index.json</span>
              <ExternalLinkIcon size={12} />
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 text-center text-xs text-muted-foreground space-y-2">
        <p>Built with Base UI primitives and Tailwind CSS v4. WCAG 2.2 AA Certified.</p>
        <p>MIT License © {new Date().getFullYear()} Adekunle Adeyemi</p>
      </footer>
    </div>
  );
}
