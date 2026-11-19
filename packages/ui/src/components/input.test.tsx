import * as React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./input";
import { Label } from "./label";

describe("Input & Label components", () => {
  it("renders input with default placeholder and type", () => {
    render(<Input placeholder="Enter username" />);
    const input = screen.getByPlaceholderText("Enter username");
    expect(input).toBeDefined();
    expect(input.getAttribute("type")).toBe("text");
  });

  it("handles changes correctly", () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} placeholder="Type here" />);
    const input = screen.getByPlaceholderText("Type here");
    fireEvent.change(input, { target: { value: "test value" } });
    expect(handleChange).toHaveBeenCalled();
  });

  it("applies invalid styles and aria-invalid when invalid prop is true", () => {
    render(<Input invalid placeholder="Invalid input" />);
    const input = screen.getByPlaceholderText("Invalid input");
    expect(input.getAttribute("aria-invalid")).toBe("true");
    expect(input.className).toContain("border-[var(--destructive)]");
  });

  it("renders label associated with input via htmlFor", () => {
    render(
      <div>
        <Label htmlFor="email-input">Email Address</Label>
        <Input id="email-input" placeholder="you@example.com" />
      </div>
    );
    const label = screen.getByText("Email Address");
    expect(label.getAttribute("for")).toBe("email-input");
  });

  it("renders required indicator when requiredIndicator prop is true", () => {
    render(<Label requiredIndicator>Full Name</Label>);
    expect(screen.getByText("*")).toBeDefined();
  });
});
