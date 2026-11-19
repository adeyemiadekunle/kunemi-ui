# Kunemi UI — Implementation Roadmap

Status: proposed sequence; estimates and owners intentionally omitted until capacity is known.

| Phase | Deliverables | Exit gate |
|---|---|---|
| 0 — Setup | Repository, workspace, lint, CI, ADRs | Clean install, lint and build pass |
| 1 — Foundation | Tokens, typography, themes, layout rules | Documented tokens and verified contrast pairings |
| 2 — Core UI | P0 catalogue, tests and stories | All P0 components meet definition of done |
| 3 — Docs + registry | MDX pages, demos, generated registry | Clean consumer install and docs build pass |
| 4 — Pilot | Real consumer application, feedback, fixes | Core flows validated in light/dark and keyboard use |
| 5 — Expansion | P1 components, blocks, package evaluation | Stable contracts and release process validated |
| 6 — AI extensions | Agent skill, AI components, SDK prototype | Isolation, accessibility and security gates pass |

## First implementation backlog

- [ ] Initialize monorepo and add license decision record.
- [ ] Configure Base UI-backed shadcn workspace.
- [ ] Establish tokens, Tailwind mappings and theme provider.
- [ ] Implement Button and Input/Label as reference components.
- [ ] Configure Storybook and automated interaction/accessibility tests.
- [ ] Implement Dialog and Select with manual keyboard validation.
- [ ] Complete remaining P0 components.
- [ ] Create documentation shell and representative component pages.
- [ ] Generate registry and test installation in a separate app.
- [ ] Pilot with a consumer project such as ApprenticesHub, if appropriate.
- [ ] Publish first prerelease only after legal, accessibility and CI review.
- [ ] Prototype optional UI SDK behaviour and assess beta stability.

## Release readiness checklist

- [ ] Build, lint, typecheck, tests and registry smoke tests pass.
- [ ] Automated accessibility findings triaged; manual flows verified.
- [ ] Responsive layouts, themes, focus and reduced motion checked.
- [ ] Licenses, notices, name availability and dependency security reviewed.
- [ ] Docs, changelog, support policy and migration notices complete.
- [ ] Experimental features labelled and excluded from stable dependency graph.

## Open decisions

Brand identity and logo; project license; domain and npm namespace; whether to publish npm at all; support matrix; Figma library scope; hosting; maintainership and governance; SDK adoption after prototype. No external account, repository or package has been created by these specifications.
