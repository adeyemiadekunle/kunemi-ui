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
} from "@kunemi-ui/ui";

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

      {/* P0 Components Showcase */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">P0 Core Primitives</h2>
          <p className="text-sm text-[var(--muted-foreground)]">
            Base UI mechanics, semantic tokens, and full WCAG 2.2 AA compliance.
          </p>
        </div>

        {/* Buttons */}
        <div className="p-6 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--card)] space-y-4">
          <h3 className="text-base font-medium text-[var(--foreground)]">Button Variants & States</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="primary" loading>Saving...</Button>
            <Button variant="outline" disabled>Disabled</Button>
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

        {/* Feedback & Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>System Health</CardTitle>
                <Badge variant="success">Operational</Badge>
              </div>
              <CardDescription>Real-time cluster status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="primary">P0</Badge>
                <Badge variant="secondary">Turborepo</Badge>
                <Badge variant="outline">Base UI</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="sm" variant="outline" className="w-full">
                View telemetry
              </Button>
            </CardFooter>
          </Card>

          <div className="space-y-4">
            <Alert variant="default">
              <AlertTitle>Ready for Registry</AlertTitle>
              <AlertDescription>
                Phase 2 core components pass all automated tests and typechecks.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertTitle>Notice</AlertTitle>
              <AlertDescription>
                Destructive actions require explicit confirmation dialogs.
              </AlertDescription>
            </Alert>

            <div className="space-y-2 p-4 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--card)]">
              <div className="text-xs font-mono text-[var(--muted-foreground)]">Loading state</div>
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
