# Kunemi UI — AI-Native Strategy

## Objectives

Make the design system easy for coding agents to discover and use, and offer safe, accessible building blocks for AI application interfaces. These are distinct goals; the UI SDK alone does not automatically make an interface agent-operable.

## Agent-readable design system

Publish AGENTS.md, a Kunemi SKILL.md, optional llms.txt documentation index, registry metadata and concise component usage examples. Specify import paths, semantic tokens, preferred component composition, accessibility requirements and commands to check work. Treat agent-generated code as untrusted until reviewed and tested.

Example metadata:

```json
{
  "name": "Button",
  "status": "stable",
  "variants": ["primary", "secondary", "outline", "ghost", "destructive"],
  "accessibility": ["accessible name required for icon-only actions"],
  "examples": ["Save changes", "Cancel"]
}
```

## Vercel UI SDK integration

The repository README inspected on 19 November 2026 describes a beta behaviour library with framework adapters, focus, selection, dismissal, popups, keyboard interactions and drag-and-drop. Use `@ui-sdk/core` with `@ui-sdk/react` in an optional experimental package. Evaluate one custom widget first: e.g. file tree or a keyboard-accessible selection surface.

```bash
npx skills@latest add vercel-labs/ui --skill ui-sdk
```

Review third-party skills before installing. Pin dependencies and put adapters behind Kunemi contracts. Keep Base UI as sole behaviour owner for existing standard primitives.

## AI application components

Prompt composer, message, streamed response, source citation, tool status, approval dialog, model selector, error/retry and feedback. Distinguish queued/running/succeeded/failed/cancelled states. Avoid announcing every streamed token; use considered live-region updates. Clearly distinguish generated content from verified sources.

## Optional MCP / WebMCP

Start with read-only tools for component search, metadata and examples. Evaluate browser-agent interaction support separately rather than assuming the SDK supplies a complete integration. Expose narrow typed actions, not arbitrary DOM or command execution. Server-side authorization must be independent of the UI.

## Security and privacy

Treat model output and retrieved text as untrusted; sanitize rendered content, avoid unsafe HTML, validate tool inputs, prevent unauthorized action execution, require explicit meaningful approval for consequential actions, and minimize logged personal data. Do not leak secrets into component metadata or agent context. Test injection, cancelled requests, stale approvals and malicious payloads.

## Release gate

A custom SDK component must pass keyboard and screen-reader checks, controlled state tests, hydration tests and dependency isolation checks. AI features must pass authorization and data handling tests before production release.
