import { describe, it, expect } from "vitest";
import {
  tokens,
  getContrastRatio,
  meetsWcagAANormalText,
  meetsWcagAAGraphical,
} from "./index";

describe("WCAG 2.2 AA Contrast Certification", () => {
  describe("Light Theme Pairings", () => {
    const { light } = tokens.colors;

    it("ensures default text meets normal text contrast (>= 4.5:1)", () => {
      const ratio = getContrastRatio(light.background, light.foreground);
      expect(ratio).toBeGreaterThanOrEqual(4.5);
      expect(meetsWcagAANormalText(light.background, light.foreground)).toBe(true);
    });

    it("ensures card and popover foregrounds meet contrast", () => {
      expect(getContrastRatio(light.card, light.cardForeground)).toBeGreaterThanOrEqual(4.5);
      expect(getContrastRatio(light.popover, light.popoverForeground)).toBeGreaterThanOrEqual(4.5);
    });

    it("ensures primary button text meets contrast", () => {
      const ratio = getContrastRatio(light.primary, light.primaryForeground);
      expect(ratio).toBeGreaterThanOrEqual(4.5);
      expect(meetsWcagAANormalText(light.primary, light.primaryForeground)).toBe(true);
    });

    it("ensures secondary button text meets contrast", () => {
      const ratio = getContrastRatio(light.secondary, light.secondaryForeground);
      expect(ratio).toBeGreaterThanOrEqual(4.5);
    });

    it("ensures muted text on muted background meets contrast", () => {
      const ratio = getContrastRatio(light.muted, light.mutedForeground);
      expect(ratio).toBeGreaterThanOrEqual(4.5);
    });

    it("ensures destructive action text meets contrast", () => {
      const ratio = getContrastRatio(light.destructive, light.destructiveForeground);
      expect(ratio).toBeGreaterThanOrEqual(4.5);
    });

    it("ensures status tokens meet contrast", () => {
      expect(getContrastRatio(light.success, light.successForeground)).toBeGreaterThanOrEqual(4.5);
      expect(getContrastRatio(light.warning, light.warningForeground)).toBeGreaterThanOrEqual(4.5);
    });

    it("ensures focus ring has adequate non-text contrast against background (>= 3.0:1)", () => {
      const ratio = getContrastRatio(light.background, light.ring);
      expect(ratio).toBeGreaterThanOrEqual(3.0);
      expect(meetsWcagAAGraphical(light.background, light.ring)).toBe(true);
    });
  });

  describe("Dark Theme Pairings", () => {
    const { dark } = tokens.colors;

    it("ensures default text meets normal text contrast (>= 4.5:1)", () => {
      const ratio = getContrastRatio(dark.background, dark.foreground);
      expect(ratio).toBeGreaterThanOrEqual(4.5);
      expect(meetsWcagAANormalText(dark.background, dark.foreground)).toBe(true);
    });

    it("ensures card and popover foregrounds meet contrast", () => {
      expect(getContrastRatio(dark.card, dark.cardForeground)).toBeGreaterThanOrEqual(4.5);
      expect(getContrastRatio(dark.popover, dark.popoverForeground)).toBeGreaterThanOrEqual(4.5);
    });

    it("ensures primary button text meets contrast", () => {
      const ratio = getContrastRatio(dark.primary, dark.primaryForeground);
      expect(ratio).toBeGreaterThanOrEqual(4.5);
      expect(meetsWcagAANormalText(dark.primary, dark.primaryForeground)).toBe(true);
    });

    it("ensures secondary button text meets contrast", () => {
      const ratio = getContrastRatio(dark.secondary, dark.secondaryForeground);
      expect(ratio).toBeGreaterThanOrEqual(4.5);
    });

    it("ensures muted text on muted background meets contrast", () => {
      const ratio = getContrastRatio(dark.muted, dark.mutedForeground);
      expect(ratio).toBeGreaterThanOrEqual(4.5);
    });

    it("ensures destructive action text meets contrast", () => {
      const ratio = getContrastRatio(dark.destructive, dark.destructiveForeground);
      expect(ratio).toBeGreaterThanOrEqual(4.5);
    });

    it("ensures status tokens meet contrast", () => {
      expect(getContrastRatio(dark.success, dark.successForeground)).toBeGreaterThanOrEqual(4.5);
      expect(getContrastRatio(dark.warning, dark.warningForeground)).toBeGreaterThanOrEqual(4.5);
    });

    it("ensures focus ring has adequate non-text contrast against background (>= 3.0:1)", () => {
      const ratio = getContrastRatio(dark.background, dark.ring);
      expect(ratio).toBeGreaterThanOrEqual(3.0);
      expect(meetsWcagAAGraphical(dark.background, dark.ring)).toBe(true);
    });
  });
});
