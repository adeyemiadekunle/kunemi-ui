import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, it, expect, beforeAll } from "vitest";
import { buildRegistry } from "./build.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.resolve(__dirname, "../../../apps/docs/public/r");

describe("shadcn Registry Generator", () => {
  beforeAll(() => {
    buildRegistry();
  });

  it("generates index.json with all registry items", () => {
    const indexPath = path.join(OUTPUT_DIR, "index.json");
    expect(fs.existsSync(indexPath)).toBe(true);

    const indexContent = JSON.parse(fs.readFileSync(indexPath, "utf-8"));
    expect(indexContent.name).toBe("kunemi-ui");
    expect(Array.isArray(indexContent.items)).toBe(true);
    expect(indexContent.items.length).toBeGreaterThanOrEqual(16);
  });

  it("generates valid component manifests with mapped paths", () => {
    const buttonPath = path.join(OUTPUT_DIR, "button.json");
    expect(fs.existsSync(buttonPath)).toBe(true);

    const buttonJson = JSON.parse(fs.readFileSync(buttonPath, "utf-8"));
    expect(buttonJson.name).toBe("button");
    expect(buttonJson.type).toBe("registry:ui");
    expect(buttonJson.dependencies).toContain("@base-ui-components/react");
    expect(buttonJson.registryDependencies).toContain("utils");
    expect(buttonJson.files[0].content).toContain('from "@/lib/utils"');
  });

  it("generates theme manifest with CSS tokens", () => {
    const themePath = path.join(OUTPUT_DIR, "theme.json");
    expect(fs.existsSync(themePath)).toBe(true);

    const themeJson = JSON.parse(fs.readFileSync(themePath, "utf-8"));
    expect(themeJson.name).toBe("theme");
    expect(themeJson.files[0].content).toContain("--background");
    expect(themeJson.files[0].content).toContain("--foreground");
  });
});
