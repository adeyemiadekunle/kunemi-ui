# Kunemi UI — Documentation and Distribution

## Documentation information architecture

- Getting started: introduction, installation, architecture, changelog.
- Foundations: colours, typography, spacing, motion, icons, accessibility.
- Components: pages with live demos, source, installation, props and usage.
- Blocks: dashboard, settings, authentication and chat patterns.
- AI-native: skill, behaviour extensions and agent integration.

Use Next.js and MDX. Include search, responsive navigation, light/dark theme, copyable code and accessible previews. Storybook is the internal isolated development and test surface; docs are the public consumption surface.

## Registry-first model

Canonical source resides in `packages/ui`; build registry JSON from that source and publish from docs or a static host. Each item declares files, external dependencies and registry dependencies. Ensure the token item is installed before components that require it. Registry files are build outputs, not hand-edited copies.

Illustrative manifest item:

```json
{
  "name": "button",
  "type": "registry:ui",
  "title": "Button",
  "description": "Kunemi action control",
  "files": [{"path": "registry/ui/button.tsx", "type": "registry:ui"}]
}
```

Actual paths and dependencies must match generated source and the current shadcn registry schema. Proposed installation after hosting:

```bash
npx shadcn@latest add https://<kunemi-host>/r/button.json
```

Do not treat this placeholder as a live endpoint. Provide prerequisites, theme install instructions, alias configuration and tested framework versions. Warn users to review diffs before updating copied components.

## Optional npm distribution

Proposed package `@kunemi-ui/react` with typed subpath exports, CSS token exports and React peer dependencies. Confirm namespace availability, tree shaking, CSS preservation, RSC compatibility and package contents before publishing. Avoid mixing package and copied source for the same component instance unless explicitly supported.

## Release process

Changesets, semantic versioning, tagged releases, changelog, migration notes and CI validation. Mark experimental APIs clearly and keep them separate from stable contracts. Use a preview channel before stable releases.

## Legal and operations

Audit upstream licenses and notices (including fonts/icons), choose a project license, establish contribution and security reporting policies, and verify the project name/domain/package scope. Hosting and publication require separately configured accounts; no registration or deployment is implied.
