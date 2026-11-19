import * as React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Checkbox } from "./checkbox";
import { Switch } from "./switch";

describe("Checkbox & Switch components", () => {
  it("renders checkbox and toggles checked state", () => {
    const handleCheckedChange = vi.fn();
    render(
      <Checkbox
        aria-label="Accept terms"
        onCheckedChange={handleCheckedChange}
      />
    );
    const checkbox = screen.getByRole("checkbox", { name: /accept terms/i });
    expect(checkbox).toBeDefined();
    expect(checkbox.getAttribute("aria-checked")).toBe("false");

    fireEvent.click(checkbox);
    expect(handleCheckedChange).toHaveBeenCalled();
  });

  it("renders switch and toggles state", () => {
    const handleCheckedChange = vi.fn();
    render(
      <Switch
        aria-label="Notifications"
        onCheckedChange={handleCheckedChange}
      />
    );
    const switchControl = screen.getByRole("switch", {
      name: /notifications/i,
    });
    expect(switchControl).toBeDefined();
    expect(switchControl.getAttribute("aria-checked")).toBe("false");

    fireEvent.click(switchControl);
    expect(handleCheckedChange).toHaveBeenCalled();
  });
});
