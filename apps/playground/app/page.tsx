"use client";

import * as React from "react";
import {
  Button,
  Input,
  Label,
  Checkbox,
  Switch,
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogBackdrop,
  DialogPopup,
  DialogTitle,
  DialogDescription,
  DialogClose,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  Alert,
  AlertTitle,
  AlertDescription,
  PromptInput,
  ToolStatus,
  ApprovalDialog,
  ThemeToggle,
} from "@kunemi-ui/ui";
import { AuthCard, MetricCard, AIChatBlock } from "@kunemi-ui/blocks";
import {
  useSelectionModel,
  useStreamResponse,
  useTreeNavigation,
  type TreeNode,
} from "@kunemi-ui/behaviors";
import {
  SparklesIcon,
  BotIcon,
  CheckCircleIcon,
  AlertTriangleIcon,
  LoaderIcon,
  SendIcon,
  CopyIcon,
  SunIcon,
  MoonIcon,
  SearchIcon,
  CheckIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  InfoIcon,
} from "@kunemi-ui/icons";

export default function PlaygroundPage() {
  // Stream Simulator State
  const stream = useStreamResponse({ throttleLiveIntervalMs: 300 });
  const [streamInput, setStreamInput] = React.useState("Kunemi UI is accessible, fast, and AI-native.");

  const startStreamSimulation = () => {
    stream.reset();
    const tokens = streamInput.split(" ");
    let i = 0;
    const interval = setInterval(() => {
      if (i < tokens.length) {
        stream.appendChunk((i > 0 ? " " : "") + tokens[i]);
        i++;
      } else {
        clearInterval(interval);
        stream.finish();
      }
    }, 150);
  };

  // Selection Model Tester
  const sampleItems = ["Alpha Feature", "Beta Optimizer", "Gamma Engine", "Delta Protocol"];
  const selection = useSelectionModel({ mode: "multiple", items: sampleItems, defaultSelected: ["Alpha Feature"] });

  // Tree Navigation Tester
  const treeData: TreeNode[] = [
    {
      id: "packages",
      label: "packages",
      children: [
        { id: "tokens", label: "@kunemi-ui/tokens" },
        { id: "ui", label: "@kunemi-ui/ui" },
        { id: "blocks", label: "@kunemi-ui/blocks" },
        { id: "behaviors", label: "@kunemi-ui/behaviors" },
        { id: "icons", label: "@kunemi-ui/icons" },
      ],
    },
    {
      id: "apps",
      label: "apps",
      children: [
        { id: "docs", label: "docs" },
        { id: "playground", label: "playground" },
      ],
    },
  ];
  const tree = useTreeNavigation({ defaultExpanded: ["packages", "apps"] });

  // Approval Dialog State
  const [approvalLog, setApprovalLog] = React.useState<string | null>(null);

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10 space-y-8">
      {/* Top Bar */}
      <header className="flex items-center justify-between border-b border-[var(--border)] pb-6">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <SparklesIcon className="text-yellow-500" size={24} />
            Kunemi UI Interactive Playground
          </h1>
          <p className="text-sm text-[var(--muted-foreground)] mt-1">
            End-to-end interactive testbench for components, composed blocks, behaviors, and icon sets.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </header>

      {/* Main Tabs */}
      <Tabs defaultValue="ai-native">
        <TabsList className="grid grid-cols-5 w-full max-w-2xl">
          <TabsTrigger value="ai-native">AI-Native</TabsTrigger>
          <TabsTrigger value="behaviors">Behaviors</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="blocks">Blocks</TabsTrigger>
          <TabsTrigger value="icons">Icons</TabsTrigger>
        </TabsList>

        {/* Tab 1: AI-Native Primitives */}
        <TabsContent value="ai-native" className="space-y-6 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Prompt Composer & Submission</CardTitle>
              <CardDescription>
                Keyboard-accessible prompt input supporting Enter to submit and Shift+Enter for multiline input.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <PromptInput
                placeholder="Ask Kunemi Agent to generate code or inspect tokens..."
                onSubmitPrompt={(val) => alert(`Prompt submitted: "${val}"`)}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Agent Tool Status Lifecycle</CardTitle>
              <CardDescription>
                Structured state reporting for tool invocations (`queued`, `running`, `succeeded`, `failed`, `cancelled`).
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                toolName="DeploymentJob"
                state="queued"
              />
              <ToolStatus
                toolName="SandboxCheck"
                state="failed"
                error="Network unreachable inside sandbox container"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Consequential Action Confirmation</CardTitle>
              <CardDescription>
                Prevents unauthorized or accidental high-impact actions by requiring deliberate confirmation.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4 items-center">
                <ApprovalDialog
                  title="Purge Staging Database"
                  actionName="Purge Staging Database"
                  description="This will permanently delete all records in the staging environment. This operation cannot be rolled back."
                  isDestructive={true}
                  trigger={<Button variant="destructive">Purge Staging Database</Button>}
                  onApprove={() => setApprovalLog("Approved at " + new Date().toLocaleTimeString())}
                  onReject={() => setApprovalLog("Rejected at " + new Date().toLocaleTimeString())}
                />
                {approvalLog && (
                  <Badge variant="outline" className="text-xs">
                    Last action: {approvalLog}
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab 2: Experimental Behaviors */}
        <TabsContent value="behaviors" className="space-y-6 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>AI Stream Consumer (`useStreamResponse`)</CardTitle>
              <CardDescription>
                Simulates real-time token streaming with throttled screen reader live region announcements to comply with WCAG 2.2.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  value={streamInput}
                  onChange={(e) => setStreamInput(e.target.value)}
                  placeholder="Text to simulate streaming"
                  className="max-w-md"
                />
                <Button onClick={startStreamSimulation} disabled={stream.status === "streaming"}>
                  {stream.status === "streaming" ? "Streaming..." : "Simulate Stream"}
                </Button>
                <Button variant="secondary" onClick={stream.reset}>
                  Reset
                </Button>
              </div>

              <div className="p-4 rounded-md border border-[var(--border)] bg-[var(--muted)]/40 min-h-[100px] space-y-2">
                <div className="flex items-center justify-between text-xs text-[var(--muted-foreground)]">
                  <span>Status: <strong>{stream.status}</strong></span>
                  <span>Visible tokens: {stream.content.length} chars</span>
                </div>
                <p className="text-sm font-mono whitespace-pre-wrap">{stream.content || "Click 'Simulate Stream' to begin..."}</p>
              </div>

              {/* Screen reader polite live region */}
              <div {...stream.getLiveRegionProps()} className="sr-only">
                {stream.liveAnnouncement}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accessible Multi-Item Selection (`useSelectionModel`)</CardTitle>
              <CardDescription>
                Supports click selection, Shift+Click range select, Cmd/Ctrl toggle, and Select All.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={selection.selectAll}>
                  Select All
                </Button>
                <Button size="sm" variant="ghost" onClick={selection.deselectAll}>
                  Deselect All
                </Button>
              </div>
              <div className="space-y-1 max-w-sm">
                {sampleItems.map((item) => (
                  <div
                    key={item}
                    {...selection.getSelectionProps(item)}
                    className={`p-2.5 rounded-md text-sm border cursor-pointer select-none transition-colors flex items-center justify-between ${
                      selection.isSelected(item)
                        ? "border-[var(--primary)] bg-[var(--accent)] font-medium"
                        : "border-[var(--border)] hover:bg-[var(--muted)]"
                    }`}
                  >
                    <span>{item}</span>
                    {selection.isSelected(item) && <CheckIcon size={14} className="text-green-500" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accessible Tree Navigation (`useTreeNavigation`)</CardTitle>
              <CardDescription>
                Complies with W3C APG tree pattern: ArrowRight expands, ArrowLeft collapses, and Enter activates.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div role="tree" aria-label="Project Structure" className="p-3 border rounded-md max-w-sm">
                {treeData.map((node) => (
                  <div key={node.id} className="space-y-1">
                    <button
                      type="button"
                      {...tree.getTreeNodeProps(node, 1)}
                      onClick={() => tree.toggleExpand(node.id)}
                      className="w-full text-left flex items-center gap-1.5 p-1 rounded hover:bg-[var(--muted)] text-sm font-medium"
                    >
                      {tree.isExpanded(node.id) ? (
                        <ChevronDownIcon size={14} />
                      ) : (
                        <ChevronRightIcon size={14} />
                      )}
                      {node.label}
                    </button>
                    {tree.isExpanded(node.id) && (
                      <div className="pl-6 space-y-1 border-l border-[var(--border)] ml-2">
                        {node.children?.map((child) => (
                          <div
                            key={child.id}
                            {...tree.getTreeNodeProps(child, 2)}
                            onClick={() => tree.selectNode(child)}
                            className={`p-1 rounded text-xs cursor-pointer ${
                              tree.selectedId === child.id
                                ? "bg-[var(--accent)] font-semibold"
                                : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"
                            }`}
                          >
                            {child.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab 3: Core Primitives */}
        <TabsContent value="components" className="space-y-6 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Base UI Primitives Sandbox</CardTitle>
              <CardDescription>
                Form controls, dialogs, selects, and status indicators styled with semantic tokens.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-3">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="demo-input" requiredIndicator>Input with Label</Label>
                  <Input id="demo-input" placeholder="Type here..." />
                </div>
                <div className="space-y-2">
                  <Label>Dropdown Select</Label>
                  <Select defaultValue="light">
                    <SelectTrigger>
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light Mode</SelectItem>
                      <SelectItem value="dark">Dark Mode</SelectItem>
                      <SelectItem value="system">System Default</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Checkbox id="cb1" defaultChecked />
                  <Label htmlFor="cb1">Remember setting</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Switch id="sw1" defaultChecked />
                  <Label htmlFor="sw1">Hardware acceleration</Label>
                </div>
              </div>

              <Alert>
                <InfoIcon className="h-4 w-4" />
                <AlertTitle>Component Certified</AlertTitle>
                <AlertDescription>
                  All components use semantic CSS tokens with certified WCAG 2.2 AA contrast pairings.
                </AlertDescription>
              </Alert>

              <div>
                <Dialog>
                  <DialogTrigger render={<Button variant="outline">Test Modal Dialog</Button>} />
                  <DialogPortal>
                    <DialogBackdrop />
                    <DialogPopup>
                      <DialogTitle>Base UI Dialog</DialogTitle>
                      <DialogDescription>
                        Focus is trapped, ESC closes, and backdrop clicking dismisses appropriately.
                      </DialogDescription>
                      <div className="mt-4 flex justify-end">
                        <DialogClose render={<Button size="sm">Dismiss</Button>} />
                      </div>
                    </DialogPopup>
                  </DialogPortal>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab 4: Composed Blocks */}
        <TabsContent value="blocks" className="space-y-6 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AuthCard
              title="Welcome Back"
              description="Sign in to your Kunemi UI developer account"
              onSubmit={(email) => alert(`Submitted ${email}`)}
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
            </div>
          </div>
          <AIChatBlock
            onSendMessage={(msg) => alert(`Sent: ${msg}`)}
          />
        </TabsContent>

        {/* Tab 5: Icons Gallery */}
        <TabsContent value="icons" className="space-y-6 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Accessible SVG Icons (`@kunemi-ui/icons`)</CardTitle>
              <CardDescription>
                Zero-dependency, accessible icon wrappers with default `aria-hidden` and full title/aria-label support.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 gap-4 text-center">
                <div className="p-3 border rounded flex flex-col items-center gap-2">
                  <BotIcon size={24} />
                  <span className="text-xs">Bot</span>
                </div>
                <div className="p-3 border rounded flex flex-col items-center gap-2">
                  <SparklesIcon size={24} className="text-yellow-500" />
                  <span className="text-xs">Sparkles</span>
                </div>
                <div className="p-3 border rounded flex flex-col items-center gap-2">
                  <CheckCircleIcon size={24} className="text-green-500" />
                  <span className="text-xs">CheckCircle</span>
                </div>
                <div className="p-3 border rounded flex flex-col items-center gap-2">
                  <AlertTriangleIcon size={24} className="text-amber-500" />
                  <span className="text-xs">Alert</span>
                </div>
                <div className="p-3 border rounded flex flex-col items-center gap-2">
                  <LoaderIcon size={24} className="animate-spin text-blue-500" />
                  <span className="text-xs">Loader</span>
                </div>
                <div className="p-3 border rounded flex flex-col items-center gap-2">
                  <SendIcon size={24} />
                  <span className="text-xs">Send</span>
                </div>
                <div className="p-3 border rounded flex flex-col items-center gap-2">
                  <CopyIcon size={24} />
                  <span className="text-xs">Copy</span>
                </div>
                <div className="p-3 border rounded flex flex-col items-center gap-2">
                  <SunIcon size={24} />
                  <span className="text-xs">Sun</span>
                </div>
                <div className="p-3 border rounded flex flex-col items-center gap-2">
                  <MoonIcon size={24} />
                  <span className="text-xs">Moon</span>
                </div>
                <div className="p-3 border rounded flex flex-col items-center gap-2">
                  <SearchIcon size={24} />
                  <span className="text-xs">Search</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
