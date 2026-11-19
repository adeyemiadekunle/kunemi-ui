---
name: kunemi-ui
description: Guidelines and patterns for authoring components, tokens, and blocks in Kunemi UI.
---

# Kunemi UI Skill

## Component Authoring Rules
- Components live in `packages/ui/src/components/`.
- Every component exports typed props and semantic variant classes using `cva` and `cn`.
- Headless interactions must be delegated to Base UI (`@base-ui-components/react`) where appropriate.
- Client boundaries (`"use client"`) are applied only when interactivity or state requires it; keep static primitives server-compatible.

## Tokens
- Semantic tokens are defined in `@kunemi-ui/tokens/theme.css`.
- Support both `.dark` and light `:root` themes.
- Touch target minimum: 44px where practical; focus rings must have distinct contrast.
