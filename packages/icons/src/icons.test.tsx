import * as React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  CheckIcon,
  ChevronDownIcon,
  SunIcon,
  MoonIcon,
  LoaderIcon,
  SendIcon,
  createIcon,
} from "./index";

describe("@kunemi-ui/icons", () => {
  it("renders with default props (size 16, aria-hidden=true, role=presentation)", () => {
    const { container } = render(<CheckIcon data-testid="check" />);
    const svg = container.querySelector("svg");
    expect(svg).toBeDefined();
    expect(svg?.getAttribute("width")).toBe("16");
    expect(svg?.getAttribute("height")).toBe("16");
    expect(svg?.getAttribute("aria-hidden")).toBe("true");
    expect(svg?.getAttribute("role")).toBe("presentation");
  });

  it("supports custom size and className", () => {
    const { container } = render(
      <ChevronDownIcon size={24} className="text-blue-500" />
    );
    const svg = container.querySelector("svg");
    expect(svg?.getAttribute("width")).toBe("24");
    expect(svg?.getAttribute("height")).toBe("24");
    expect(svg?.classList.contains("text-blue-500")).toBe(true);
  });

  it("renders accessible role='img' and title element when title prop is provided", () => {
    render(<SunIcon title="Bright mode" />);
    const icon = screen.getByRole("img");
    expect(icon).toBeDefined();
    expect(icon.getAttribute("aria-hidden")).toBeNull();
    expect(icon.querySelector("title")?.textContent).toBe("Bright mode");
  });

  it("renders accessible role='img' when aria-label is provided", () => {
    render(<MoonIcon aria-label="Dark mode icon" />);
    const icon = screen.getByRole("img", { name: "Dark mode icon" });
    expect(icon).toBeDefined();
    expect(icon.getAttribute("aria-hidden")).toBeNull();
  });

  it("creates custom icon with createIcon helper", () => {
    const CustomIcon = createIcon(
      "CustomIcon",
      <circle cx="12" cy="12" r="10" />
    );
    const { container } = render(<CustomIcon />);
    const circle = container.querySelector("circle");
    expect(circle).toBeDefined();
    expect(circle?.getAttribute("r")).toBe("10");
  });

  it("renders LoaderIcon and SendIcon correctly", () => {
    const { container: loaderContainer } = render(<LoaderIcon />);
    expect(loaderContainer.querySelectorAll("line").length).toBe(8);

    const { container: sendContainer } = render(<SendIcon />);
    expect(sendContainer.querySelector("polygon")).toBeDefined();
  });
});
