export interface RegistryItemFile {
  path: string;
  content?: string;
  type: "registry:ui" | "registry:hook" | "registry:lib" | "registry:block";
  target?: string;
}

export interface RegistryItem {
  name: string;
  type: "registry:ui" | "registry:hook" | "registry:lib" | "registry:block";
  title?: string;
  description?: string;
  dependencies?: string[];
  devDependencies?: string[];
  registryDependencies?: string[];
  files: RegistryItemFile[];
}

export interface RegistryIndex {
  name: string;
  version: string;
  items: RegistryItem[];
}
