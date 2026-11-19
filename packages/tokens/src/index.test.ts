import { describe, it, expect } from "vitest";
import { tokens } from "./index";

describe("tokens", () => {
  it("exports light and dark color schemes", () => {
    expect(tokens.colors.light.background).toBe("#ffffff");
    expect(tokens.colors.dark.background).toBe("#09090b");
    expect(tokens.colors.light.foreground).toBe("#09090b");
    expect(tokens.colors.dark.foreground).toBe("#fafafa");
  });

  it("exports typography definitions and scale", () => {
    expect(tokens.typography.fontSans).toBeDefined();
    expect(tokens.typography.fontMono).toBeDefined();
    expect(tokens.typography.scale.body.size).toBe("1rem");
  });
});
