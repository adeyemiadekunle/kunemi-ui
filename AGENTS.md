# AGENTS.md — Instructions for AI Coding Agents

Welcome to Kunemi UI. This document contains guidelines, constraints, and architecture rules for autonomous and assistive coding agents.

## Core Principles
1. **Never bypass Base UI primitives**: For stable interactive widgets (dialog, select, tooltip, etc.), rely on Base UI for focus, keyboard, and accessibility mechanics.
2. **Use Semantic Tokens**: Never hardcode colors or hex values in component markup. Always use semantic CSS variable classes (e.g. `bg-[var(--background)]`, `text-[var(--foreground)]`, `border-[var(--border)]`).
3. **Isolation of Experimental Behaviors**: The `@kunemi-ui/behaviors` package hosts experimental Vercel UI SDK adapters. Never import `@kunemi-ui/behaviors` inside `@kunemi-ui/ui`.
4. **Accessible by Default**: Every component must support keyboard interaction, visible focus, ARIA attributes, and WCAG 2.2 AA contrast compliance.

## Project Structure
- `packages/tokens`: CSS variables and semantic theme mappings (React-agnostic).
- `packages/ui`: Canonical React component source.
- `packages/behaviors`: Experimental SDK adapters.
- `packages/registry`: shadcn-compatible registry manifests and generator.
- `packages/blocks`: Composed application patterns.
- `packages/icons`: Icon wrappers and conventions.
- `apps/docs`: Next.js App Router documentation site.
- `apps/playground`: Interactive testing playground.
- `apps/storybook`: Isolated component storybook.

## Verification Commands
Before submitting or concluding any turn:
- Typecheck: `pnpm typecheck`
- Lint: `pnpm lint`
- Test: `pnpm test`
