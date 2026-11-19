import * as React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { AuthCard, MetricCard, AIChatBlock } from "./index";

describe("Composed Application Blocks", () => {
  it("renders AuthCard with form fields", () => {
    render(<AuthCard />);
    expect(screen.getByText("Welcome back")).toBeDefined();
    expect(screen.getByLabelText("Email")).toBeDefined();
    expect(screen.getByRole("button", { name: "Sign in" })).toBeDefined();
  });

  it("renders MetricCard with value and delta", () => {
    render(
      <MetricCard
        label="Monthly Active Users"
        value="48,200"
        change="+12.4%"
        isPositive
      />
    );
    expect(screen.getByText("Monthly Active Users")).toBeDefined();
    expect(screen.getByText("48,200")).toBeDefined();
    expect(screen.getByText("+12.4%")).toBeDefined();
  });

  it("renders AIChatBlock with prompt input and agent status", () => {
    render(<AIChatBlock />);
    expect(screen.getByText("Autonomous Agent")).toBeDefined();
    expect(screen.getByText("semantic_search")).toBeDefined();
    expect(screen.getByPlaceholderText(/instruct the assistant/i)).toBeDefined();
  });
});
