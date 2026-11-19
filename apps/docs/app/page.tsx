"use client";

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
  CardFooter,
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
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  ToolStatus,
  ApprovalDialog,
} from "@kunemi-ui/ui";
import { MetricCard, AIChatBlock } from "@kunemi-ui/blocks";

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
      <header className="flex items-center justify-between border-b border-[var(--border)] pb-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">Kunemi UI</h1>
          <p className="text-sm text-[var(--muted-foreground)]">
            Accessible, extensible, and AI-native React design system built on Base UI.
          </p>
        </div>
        <ThemeToggle />
      </header>

      {/* Registry Installation Banner */}
      <section className="p-4 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--muted)]/50 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-medium text-[var(--foreground)]">
            shadcn Registry Integration
          </span>
          <Badge variant="success">Active</Badge>
        </div>
        <pre className="text-xs font-mono p-2.5 rounded-[var(--radius-md)] bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] overflow-x-auto">
          npx shadcn@latest add https://kunemi-ui.dev/r/button.json
        </pre>
      </section>

      {/* Metrics Row */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <MetricCard label="Passing Tests" value="56" change="100%" isPositive />
        <MetricCard label="Registry Items" value="24" change="+10" isPositive />
        <MetricCard label="WCAG Compliance" value="2.2 AA" change="Certified" isPositive />
      </section>

      {/* AI-Native Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">AI-Native Components</h2>
        <p className="text-sm text-[var(--muted-foreground)]">
          Building blocks tailored for generative AI agent workflows and interfaces.
        </p>

        <Card className="p-6">
          <AIChatBlock />
        </Card>

        <div className="flex flex-wrap gap-3">
          <ApprovalDialog
            title="Execute Database Migration"
            description="Apply schema migrations to production database cluster 'prod-db-01'."
            actionName="Approve Migration"
            isDestructive
            onApprove={() => {}}
            trigger={
              <Button variant="destructive" size="sm">
                Request Tool Approval
              </Button>
            }
          />
        </div>
      </section>

      {/* P0 & P1 Components Showcase */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Core Primitives</h2>
          <p className="text-sm text-[var(--muted-foreground)]">
            Base UI mechanics, semantic tokens, and keyboard accessibility.
          </p>
        </div>

        {/* Buttons */}
        <div className="p-6 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--card)] space-y-4">
          <h3 className="text-base font-medium text-[var(--foreground)]">Button Variants</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="primary" loading>Loading...</Button>
          </div>
        </div>

        {/* Form Controls */}
        <div className="p-6 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--card)] space-y-4">
          <h3 className="text-base font-medium text-[var(--foreground)]">Form & Selection</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="demo-email" requiredIndicator>Email address</Label>
              <Input id="demo-email" type="email" placeholder="name@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="demo-invalid">Invalid State</Label>
              <Input id="demo-invalid" invalid defaultValue="invalid-input" />
            </div>
          </div>

          <Separator className="my-2" />

          <div className="flex items-center gap-6 pt-2">
            <label className="flex items-center gap-2 cursor-pointer text-sm">
              <Checkbox id="demo-check" defaultChecked />
              <span>Remember me</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer text-sm">
              <Switch id="demo-switch" defaultChecked />
              <span>Auto-save draft</span>
            </label>
          </div>
        </div>

        {/* Table & Pagination */}
        <div className="p-6 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--card)] space-y-4">
          <h3 className="text-base font-medium text-[var(--foreground)]">Table & Pagination</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Component</TableHead>
                <TableHead>Primitive</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Button</TableCell>
                <TableCell>Base UI Button</TableCell>
                <TableCell><Badge variant="success">P0 Stable</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">PromptInput</TableCell>
                <TableCell>Custom Textarea</TableCell>
                <TableCell><Badge variant="primary">AI-Native</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">ApprovalDialog</TableCell>
                <TableCell>Base UI Dialog</TableCell>
                <TableCell><Badge variant="warning">P1 Security</Badge></TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Pagination className="pt-2">
            <PaginationContent>
              <PaginationPrevious href="#" />
              <PaginationLink href="#" isActive>1</PaginationLink>
              <PaginationLink href="#">2</PaginationLink>
              <PaginationNext href="#" />
            </PaginationContent>
          </Pagination>
        </div>

        {/* Feedback Cards & Skeletons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Architecture Status</CardTitle>
                <Badge variant="success">Verified</Badge>
              </div>
              <CardDescription>Continuous integration gates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-xs text-[var(--muted-foreground)]">
                All P0 and P1 primitives compiled and tested against strict typechecking and WCAG 2.2 AA.
              </div>
              <div className="space-y-1.5 pt-1">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-4/5" />
              </div>
            </CardContent>
            <CardFooter>
              <Button size="sm" variant="outline" className="w-full">
                View Documentation
              </Button>
            </CardFooter>
          </Card>

          <div className="space-y-4">
            <Alert variant="default">
              <AlertTitle>Phase 5 & 6 Ready</AlertTitle>
              <AlertDescription>
                P1 expansion components and AI agent building blocks are fully functional.
              </AlertDescription>
            </Alert>

            <ToolStatus
              toolName="pnpm_verify_pipeline"
              state="succeeded"
              durationMs={840}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
