import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, "../../..");
const UI_SRC = path.resolve(ROOT_DIR, "packages/ui/src");
const TOKENS_SRC = path.resolve(ROOT_DIR, "packages/tokens");
const OUTPUT_DIR = path.resolve(ROOT_DIR, "apps/docs/public/r");

interface ComponentMeta {
  name: string;
  type: "registry:ui" | "registry:lib" | "registry:theme";
  title: string;
  description: string;
  sourceFile: string;
  targetPath: string;
  dependencies: string[];
  registryDependencies: string[];
}

const REGISTRY_COMPONENTS: ComponentMeta[] = [
  {
    name: "button",
    type: "registry:ui",
    title: "Button",
    description: "Action control with semantic variants, sizes, and loading state.",
    sourceFile: path.join(UI_SRC, "components/button.tsx"),
    targetPath: "components/ui/button.tsx",
    dependencies: ["@base-ui-components/react", "class-variance-authority"],
    registryDependencies: ["utils"],
  },
  {
    name: "input",
    type: "registry:ui",
    title: "Input",
    description: "Text input with Base UI field integration and invalid states.",
    sourceFile: path.join(UI_SRC, "components/input.tsx"),
    targetPath: "components/ui/input.tsx",
    dependencies: ["@base-ui-components/react"],
    registryDependencies: ["utils"],
  },
  {
    name: "label",
    type: "registry:ui",
    title: "Label",
    description: "Accessible form label with optional required indicator.",
    sourceFile: path.join(UI_SRC, "components/label.tsx"),
    targetPath: "components/ui/label.tsx",
    dependencies: [],
    registryDependencies: ["utils"],
  },
  {
    name: "checkbox",
    type: "registry:ui",
    title: "Checkbox",
    description: "Base UI tri-state capable checkbox with custom SVG check indicator.",
    sourceFile: path.join(UI_SRC, "components/checkbox.tsx"),
    targetPath: "components/ui/checkbox.tsx",
    dependencies: ["@base-ui-components/react"],
    registryDependencies: ["utils"],
  },
  {
    name: "switch",
    type: "registry:ui",
    title: "Switch",
    description: "Base UI accessible toggle switch with smooth animated thumb.",
    sourceFile: path.join(UI_SRC, "components/switch.tsx"),
    targetPath: "components/ui/switch.tsx",
    dependencies: ["@base-ui-components/react"],
    registryDependencies: ["utils"],
  },
  {
    name: "dialog",
    type: "registry:ui",
    title: "Dialog",
    description: "Base UI modal dialog with backdrop blur, focus trap, and dismiss close icon.",
    sourceFile: path.join(UI_SRC, "components/dialog.tsx"),
    targetPath: "components/ui/dialog.tsx",
    dependencies: ["@base-ui-components/react"],
    registryDependencies: ["utils"],
  },
  {
    name: "select",
    type: "registry:ui",
    title: "Select",
    description: "Base UI accessible dropdown select with popup positioning and indicators.",
    sourceFile: path.join(UI_SRC, "components/select.tsx"),
    targetPath: "components/ui/select.tsx",
    dependencies: ["@base-ui-components/react"],
    registryDependencies: ["utils"],
  },
  {
    name: "tooltip",
    type: "registry:ui",
    title: "Tooltip",
    description: "Base UI hover/focus tooltip with positioning and directional arrow.",
    sourceFile: path.join(UI_SRC, "components/tooltip.tsx"),
    targetPath: "components/ui/tooltip.tsx",
    dependencies: ["@base-ui-components/react"],
    registryDependencies: ["utils"],
  },
  {
    name: "tabs",
    type: "registry:ui",
    title: "Tabs",
    description: "Base UI tabbed navigation interface with keyboard arrows support.",
    sourceFile: path.join(UI_SRC, "components/tabs.tsx"),
    targetPath: "components/ui/tabs.tsx",
    dependencies: ["@base-ui-components/react"],
    registryDependencies: ["utils"],
  },
  {
    name: "badge",
    type: "registry:ui",
    title: "Badge",
    description: "Small status indicator pill with semantic color variants.",
    sourceFile: path.join(UI_SRC, "components/badge.tsx"),
    targetPath: "components/ui/badge.tsx",
    dependencies: ["class-variance-authority"],
    registryDependencies: ["utils"],
  },
  {
    name: "card",
    type: "registry:ui",
    title: "Card",
    description: "Container component for displaying structured content with header, content, and footer.",
    sourceFile: path.join(UI_SRC, "components/card.tsx"),
    targetPath: "components/ui/card.tsx",
    dependencies: [],
    registryDependencies: ["utils"],
  },
  {
    name: "alert",
    type: "registry:ui",
    title: "Alert",
    description: "Callout component for user attention with semantic status variants.",
    sourceFile: path.join(UI_SRC, "components/alert.tsx"),
    targetPath: "components/ui/alert.tsx",
    dependencies: ["class-variance-authority"],
    registryDependencies: ["utils"],
  },
  {
    name: "skeleton",
    type: "registry:ui",
    title: "Skeleton",
    description: "Animated placeholder for displaying loading states.",
    sourceFile: path.join(UI_SRC, "components/skeleton.tsx"),
    targetPath: "components/ui/skeleton.tsx",
    dependencies: [],
    registryDependencies: ["utils"],
  },
  {
    name: "separator",
    type: "registry:ui",
    title: "Separator",
    description: "Visual or semantic separator divider with horizontal/vertical orientation.",
    sourceFile: path.join(UI_SRC, "components/separator.tsx"),
    targetPath: "components/ui/separator.tsx",
    dependencies: ["@base-ui-components/react"],
    registryDependencies: ["utils"],
  },
];

const UTILS_ITEM: ComponentMeta = {
  name: "utils",
  type: "registry:lib",
  title: "Utils",
  description: "Shared helper function for merging class names (clsx + tailwind-merge).",
  sourceFile: path.join(UI_SRC, "lib/utils.ts"),
  targetPath: "lib/utils.ts",
  dependencies: ["clsx", "tailwind-merge"],
  registryDependencies: [],
};

const THEME_ITEM: ComponentMeta = {
  name: "theme",
  type: "registry:theme",
  title: "Theme",
  description: "Kunemi UI semantic CSS tokens and theme variables.",
  sourceFile: path.join(TOKENS_SRC, "styles/theme.css"),
  targetPath: "styles/theme.css",
  dependencies: [],
  registryDependencies: [],
};

export function buildRegistry() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const allItems = [UTILS_ITEM, THEME_ITEM, ...REGISTRY_COMPONENTS];
  const manifestItems: any[] = [];

  for (const item of allItems) {
    if (!fs.existsSync(item.sourceFile)) {
      throw new Error(`Source file missing: ${item.sourceFile}`);
    }

    let content = fs.readFileSync(item.sourceFile, "utf-8");

    // Standardize internal utility imports for consumer workspaces
    if (item.type === "registry:ui") {
      content = content.replace(/from\s+["']\.\.\/lib\/utils["']/g, 'from "@/lib/utils"');
    }

    const registryItem = {
      $schema: "https://ui.shadcn.com/schema/registry-item.json",
      name: item.name,
      type: item.type,
      title: item.title,
      description: item.description,
      dependencies: item.dependencies,
      registryDependencies: item.registryDependencies,
      files: [
        {
          path: item.targetPath,
          content,
          type: item.type,
          target: item.targetPath,
        },
      ],
    };

    const outPath = path.join(OUTPUT_DIR, `${item.name}.json`);
    fs.writeFileSync(outPath, JSON.stringify(registryItem, null, 2), "utf-8");
    manifestItems.push({
      name: item.name,
      type: item.type,
      title: item.title,
      description: item.description,
    });
  }

  // Generate index.json
  const registryIndex = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "kunemi-ui",
    homepage: "https://kunemi-ui.dev",
    items: manifestItems,
  };

  const indexPath = path.join(OUTPUT_DIR, "index.json");
  fs.writeFileSync(indexPath, JSON.stringify(registryIndex, null, 2), "utf-8");

  console.log(`Successfully built ${allItems.length} registry items to ${OUTPUT_DIR}`);
}

// Auto-run if executed directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  buildRegistry();
}
