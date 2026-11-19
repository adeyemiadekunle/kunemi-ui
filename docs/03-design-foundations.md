# Kunemi UI — Design Foundations

## Principles

Clarity before ornament; predictable interactions; accessible by default; restrained visual hierarchy; consistent spacing; meaningful motion. Kunemi should develop its own identity, rather than rebrand Geist.

## Token architecture

Primitive palette → semantic tokens → optional component tokens. All consumer-facing components use semantic tokens. Themes change values, not component markup.

### Proposed initial palette

| Token | Light | Dark |
|---|---|---|
| background | #ffffff | #101010 |
| foreground | #171717 | #ededed |
| primary | #171717 | #fafafa |
| primary-foreground | #ffffff | #171717 |
| muted | #f5f5f5 | #262626 |
| muted-foreground | #737373 | #a3a3a3 |
| border | #e5e5e5 | #333333 |
| accent | #1d4ed8 | #93c5fd |
| ring | #2563eb | #60a5fa |
| success | #166534 | #86efac |
| warning | #92400e | #fcd34d |
| destructive | #b91c1c | #fca5a5 |

These are initial candidates, not a contrast-certified palette. Add paired foreground/surface tokens for interactive and status components; test every actual colour pairing. Borders that communicate control boundaries require adequate non-text contrast; decorative borders need not meet the same threshold.

```css
:root {
  --background: #fff;
  --foreground: #171717;
  --primary: #171717;
  --primary-foreground: #fff;
  --radius: 0.375rem;
}
.dark {
  --background: #101010;
  --foreground: #ededed;
  --primary: #fafafa;
  --primary-foreground: #171717;
}
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
}
```

## Typography and layout

Use Geist Sans and Geist Mono as proposed fonts, subject to license review, with system fallbacks. Use rem-based sizes.

| Role | Size / line height |
|---|---|
| Caption | 12 / 16 px |
| Small | 14 / 20 px |
| Body | 16 / 24 px |
| Heading small | 20 / 28 px |
| Heading medium | 24 / 32 px |
| Heading large | 32 / 40 px |
| Display | 40 / 48 px |

Spacing scale: 0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64 px. Radii: 0, 4, 6, 8, 12 and full. Elevation: flat, raised, overlay; prefer borders for separation. Motion: short transitions for state, longer transitions for layout only when useful; respect prefers-reduced-motion.

## Accessibility standards

Target WCAG 2.2 AA. Normal text contrast at least 4.5:1; large text 3:1; relevant non-text controls 3:1. Visible focus, meaningful labels, keyboard navigation, appropriate ARIA, logical reading order, responsive layouts at zoom and no colour-only status cues. Aim for 44px touch targets when practical and meet applicable WCAG target-size requirements. Test with screen readers and real keyboard paths.

## Theme policy

Support light, dark and system preferences. Avoid first-render theme flashes; verify SSR hydration. Document customization via CSS variables. All tokens require a documented purpose, sample and deprecation path.
