/**
 * Convert 3 or 6 digit hex string to RGB tuple [0..255, 0..255, 0..255]
 */
export function hexToRgb(hex: string): [number, number, number] {
  let clean = hex.replace("#", "").trim();
  if (clean.length === 3) {
    clean = clean
      .split("")
      .map((c) => c + c)
      .join("");
  }
  if (clean.length !== 6) {
    throw new Error(`Invalid hex color: ${hex}`);
  }
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return [r, g, b];
}

/**
 * Calculate relative luminance according to WCAG 2.1 / 2.2 specifications
 * https://www.w3.org/WAI/GL/wiki/Relative_luminance
 */
export function getRelativeLuminance(rgb: [number, number, number]): number {
  const [r, g, b] = rgb.map((val) => {
    const s = val / 255;
    return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Calculate contrast ratio between two hex colors
 * Returns a number between 1 and 21
 */
export function getContrastRatio(hex1: string, hex2: string): number {
  const lum1 = getRelativeLuminance(hexToRgb(hex1));
  const lum2 = getRelativeLuminance(hexToRgb(hex2));
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Check if pairing meets WCAG 2.2 AA for normal text (>= 4.5:1)
 */
export function meetsWcagAANormalText(hex1: string, hex2: string): boolean {
  return getContrastRatio(hex1, hex2) >= 4.5;
}

/**
 * Check if pairing meets WCAG 2.2 AA for large text or graphical controls (>= 3.0:1)
 */
export function meetsWcagAAGraphical(hex1: string, hex2: string): boolean {
  return getContrastRatio(hex1, hex2) >= 3.0;
}
