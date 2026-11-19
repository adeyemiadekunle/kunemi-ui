import * as React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from "./badge";
import { Card, CardHeader, CardTitle, CardContent } from "./card";
import { Alert, AlertTitle, AlertDescription } from "./alert";
import { Skeleton } from "./skeleton";
import { Separator } from "./separator";

describe("Feedback & Layout components", () => {
  it("renders Badge variants correctly", () => {
    const { rerender } = render(<Badge>Default</Badge>);
    let badge = screen.getByText("Default");
    expect(badge.className).toContain("bg-[var(--primary)]");

    rerender(<Badge variant="destructive">Failed</Badge>);
    badge = screen.getByText("Failed");
    expect(badge.className).toContain("bg-[var(--destructive)]");

    rerender(<Badge variant="success">Active</Badge>);
    badge = screen.getByText("Active");
    expect(badge.className).toContain("bg-[var(--success)]");
  });

  it("renders Card with subcomponents", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Account Details</CardTitle>
        </CardHeader>
        <CardContent>Card body content</CardContent>
      </Card>
    );
    expect(screen.getByText("Account Details")).toBeDefined();
    expect(screen.getByText("Card body content")).toBeDefined();
  });

  it("renders Alert with role=alert", () => {
    render(
      <Alert variant="destructive">
        <AlertTitle>Error Encountered</AlertTitle>
        <AlertDescription>Please check your network connection.</AlertDescription>
      </Alert>
    );
    const alert = screen.getByRole("alert");
    expect(alert).toBeDefined();
    expect(alert.className).toContain("border-[var(--destructive)]");
  });

  it("renders Skeleton with animation class", () => {
    const { container } = render(<Skeleton className="h-6 w-24" />);
    const skeleton = container.firstChild as HTMLElement;
    expect(skeleton.className).toContain("animate-pulse");
    expect(skeleton.className).toContain("bg-[var(--muted)]");
  });

  it("renders Separator with horizontal orientation", () => {
    const { container } = render(<Separator />);
    const separator = container.firstChild as HTMLElement;
    expect(separator.className).toContain("bg-[var(--border)]");
    expect(separator.className).toContain("h-[1px]");
  });
});
