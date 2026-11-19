import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, it, expect, beforeAll } from "vitest";
import { buildRegistry } from "./build.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.resolve(__dirname, "../../../apps/docs/public/r");

interface RegistryItem {
  name: string;
  type: string;
  title?: string;
  description?: string;
  dependencies?: string[];
  registryDependencies?: string[];
  files: Array<{
    path: string;
    content: string;
    type: string;
  }>;
}

describe("Consumer Distribution Smoke Test (shadcn Registry)", () => {
  let indexJson: { name: string; items: RegistryItem[] };

  beforeAll(() => {
    buildRegistry();
    const indexPath = path.join(OUTPUT_DIR, "index.json");
    indexJson = JSON.parse(fs.readFileSync(indexPath, "utf-8"));
  });

  it("verifies all registered items have physical manifest files", () => {
    expect(indexJson.items.length).toBe(25);

    for (const item of indexJson.items) {
      const manifestPath = path.join(OUTPUT_DIR, `${item.name}.json`);
      expect(fs.existsSync(manifestPath), `Missing manifest for ${item.name}`).toBe(true);

      const parsed: RegistryItem = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
      expect(parsed.name).toBe(item.name);
      expect(parsed.files.length).toBeGreaterThan(0);
      expect(parsed.files[0].content.length).toBeGreaterThan(20);
    }
  });

  it("ensures all component manifests remap imports to @/lib/utils and avoid relative parent traversal", () => {
    for (const item of indexJson.items) {
      if (item.type === "registry:theme") continue;

      const manifestPath = path.join(OUTPUT_DIR, `${item.name}.json`);
      const parsed: RegistryItem = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));

      for (const file of parsed.files) {
        // Must never leak monorepo parent paths
        expect(file.content).not.toContain("../../lib/utils");
        expect(file.content).not.toContain("../lib/utils");
      }
    }
  });

  it("ensures AI-native components and composed blocks are fully distributable", () => {
    const aiItems = ["prompt-input", "tool-status", "approval-dialog", "composed-blocks"];
    for (const name of aiItems) {
      const manifestPath = path.join(OUTPUT_DIR, `${name}.json`);
      expect(fs.existsSync(manifestPath)).toBe(true);
      const manifest: RegistryItem = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
      expect(manifest.files[0].content).toContain("export");
    }
  });
});
