# Kunemi UI — Product Requirements Document

Status: Draft v0.1 | Audience: maintainers, designers, frontend engineers

## Vision

Create a coherent, accessible and extensible design system that helps teams ship polished web and AI applications without rebuilding interface foundations. Learn from Geist's disciplined design language, without copying its branding.

## Users and needs

| Persona | Need |
|---|---|
| Frontend engineer | Predictable APIs, TypeScript, easy installation |
| Product designer | Consistent tokens, states and patterns |
| AI application engineer | Streaming, tools, citations and approval interfaces |
| Coding agent | Machine-readable contracts and reliable examples |
| Maintainer | Automated tests, release gates and clear ownership |

## Goals

- A distinctive visual language with light and dark themes.
- Accessible composable React components built on Base UI when applicable.
- Source distribution via a shadcn-compatible registry; package distribution later if demand warrants it.
- Documentation with interactive examples, keyboard behaviour and usage guidance.
- Optional behaviour extensions using Vercel UI SDK, without making beta dependencies mandatory.

## Scope

### MVP (P0)
Design tokens, typography, layout primitives, Button, Input, Label, Checkbox, Switch, Select, Dialog, Tooltip, Tabs, Badge, Card, Alert, Skeleton and Separator; docs site; registry; automated tests.

### P1
Combobox, Menu, Toast, Table, Pagination, Sidebar, Command Menu, forms, block examples and npm package evaluation.

### P2
AI chat components, streamed output, structured tool status, agent-readable metadata, custom behaviour prototypes and optional MCP integration.

## Non-goals

No full application framework, backend service, AI provider lock-in, universal cross-framework support or blanket claim of regulatory compliance. No pixel-for-pixel Geist clone.

## Success criteria

- Every MVP component has typed props, documented states, light/dark examples and appropriate keyboard tests.
- Registry installation succeeds in a clean supported Next.js project in CI.
- No known critical or serious automated accessibility violations in tested stories; manual checks supplement automation.
- A real consumer application validates theme and component reuse without SDK dependencies.
- Stable releases have changelogs and migration guidance for breaking changes.

## Risks and constraints

Beta SDK APIs can change; isolate them. Source-copy distribution can diverge; document update and migration policy. Font, icon and copied component licenses must be checked and notices retained. Accessibility requires ongoing verification, not merely using headless primitives.
