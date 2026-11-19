# Kunemi UI — Component Specification

## Catalogue

| Component | Priority | Behaviour source | Key states |
|---|---|---|---|
| Button | P0 | Native / Base UI where suitable | default, hover, focus, disabled, busy |
| Input + Label | P0 | Native / Base UI field | empty, filled, invalid, disabled |
| Checkbox | P0 | Base UI | checked, unchecked, mixed |
| Switch | P0 | Base UI | on, off, disabled |
| Select | P0 | Base UI | closed, open, selected, disabled |
| Dialog | P0 | Base UI | open, closed |
| Tooltip | P0 | Base UI | hidden, visible |
| Tabs | P0 | Base UI | active, inactive, disabled |
| Badge, Card, Alert | P0 | Semantic HTML | variants, status |
| Skeleton, Separator | P0 | CSS / semantic HTML | loading, orientation |
| Combobox, Menu | P1 | Base UI | open, filtered, selected |
| Toast | P1 | Base UI or evaluated library | visible, dismissed |
| Table, Pagination | P1 | Semantic HTML / composition | empty, loading, sorted |
| Sidebar, Command Menu | P1 | Composition | expanded, collapsed, filtered |
| Prompt input, messages, citations | P2 | Composition | streaming, error, complete |
| File tree, workflow controls | P2 | evaluated UI SDK | selected, expanded, moving |

## Component contract template

Every component page must define purpose, anatomy, props, variants, sizes, event semantics, keyboard behaviour, focus management, accessibility labels, examples, do/don't guidance, test cases and dependencies. Include RTL and reduced-motion behaviour when relevant.

### Button example contract

Variants: primary, secondary, outline, ghost, destructive. Sizes: sm, md, lg, icon. Use actual buttons for actions and links for navigation. Default to type=button where appropriate; form submission explicitly uses submit. Busy state prevents accidental repeated activation and communicates progress. Icon-only controls require an accessible name.

```tsx
<Button variant="primary" size="md">Save changes</Button>
<Button variant="outline" disabled>Unavailable</Button>
```

### Dialog acceptance criteria

Focus enters the dialog, modal focus stays within it, Escape closes when appropriate, focus returns to the invoking control, content has an accessible name, and dismissal is consistent. Destructive confirmation should state the consequence and provide a safe cancellation path.

### Select acceptance criteria

Keyboard navigation, selection, escape dismissal and disabled options behave according to the underlying primitive contract. Provide accessible labels and test long labels and viewport collision.

## Definition of done

Typed implementation, semantic tokens, accessible states, examples, unit/interaction tests, visual snapshots in both themes, registry install test and reviewed API. A component is not stable merely because it renders correctly.
