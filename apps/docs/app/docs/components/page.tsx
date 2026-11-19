"use client";

import * as React from "react";
import Link from "next/link";
import { ThemeToggle, Badge } from "@kunemi-ui/ui";
import {
  SparklesIcon,
  CopyIcon,
  CheckIcon,
  ExternalLinkIcon,
  ChevronRightIcon,
} from "@kunemi-ui/icons";
import { COMPONENTS_CATALOG } from "./components-data";

export default function ComponentsDocsPage() {
  const [selectedSlug, setSelectedSlug] = React.useState<string>("accordion");
  const [activeTab, setActiveTab] = React.useState<"preview" | "code">("preview");
  const [filterQuery, setFilterQuery] = React.useState<string>("");
  const [copiedSection, setCopiedSection] = React.useState<string | null>(null);

  const selectedComponent =
    COMPONENTS_CATALOG.find((c) => c.slug === selectedSlug) ?? COMPONENTS_CATALOG[0];

  const filteredComponents = React.useMemo(() => {
    if (!filterQuery) return COMPONENTS_CATALOG;
    return COMPONENTS_CATALOG.filter(
      (c) =>
        c.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
        c.description.toLowerCase().includes(filterQuery.toLowerCase())
    );
  }, [filterQuery]);

  const copyToClipboard = (text: string, sectionId: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const primitives = filteredComponents.filter((c) => c.category === "Primitives");
  const aiSuite = filteredComponents.filter((c) => c.category === "AI-Native");
  const blocks = filteredComponents.filter((c) => c.category === "Blocks");

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Top Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto flex h-14 items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 font-semibold text-base tracking-tight hover:opacity-90 transition-opacity">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-xs">
                <SparklesIcon size={15} />
              </span>
              <span>Kunemi UI</span>
              <span className="rounded-full bg-muted/60 px-2 py-0.5 text-[10px] font-mono text-muted-foreground border border-border/50">
                Docs
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">Overview</Link>
              <span className="text-foreground font-semibold">Components</span>
              <Link href="/#tokens" className="hover:text-foreground transition-colors">Tokens</Link>
              <Link href="/#registry" className="hover:text-foreground transition-colors">Registry</Link>
            </nav>
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5">
            <a
              href="https://github.com/adeyemiadekunle/kunemi-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 items-center gap-1.5 text-xs font-medium px-2.5 rounded-lg border border-border/40 hover:bg-muted transition-colors"
            >
              <ExternalLinkIcon size={12} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <ThemeToggle className="h-8 w-8 rounded-lg border border-border/40" />
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto flex min-h-[calc(100vh-3.5rem)]">
        {/* Left Sidebar */}
        <aside className="w-64 shrink-0 border-r border-border/40 p-4 sm:p-6 space-y-6 hidden md:block">
          {/* Search Filter */}
          <div className="relative">
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Search components..."
              className="w-full h-8 rounded-lg border border-input/60 bg-muted/40 px-3 text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </div>

          <div className="space-y-6 text-sm">
            {/* Primitives Section */}
            {primitives.length > 0 && (
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-2">
                  Primitives (Base UI)
                </div>
                <div className="space-y-1">
                  {primitives.map((comp) => (
                    <button
                      key={comp.slug}
                      type="button"
                      onClick={() => {
                        setSelectedSlug(comp.slug);
                        setActiveTab("preview");
                      }}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center justify-between ${
                        selectedSlug === comp.slug
                          ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <span>{comp.title}</span>
                      {selectedSlug === comp.slug && <ChevronRightIcon size={12} />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* AI-Native Suite */}
            {aiSuite.length > 0 && (
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-2">
                  AI-Native Interface Suite
                </div>
                <div className="space-y-1">
                  {aiSuite.map((comp) => (
                    <button
                      key={comp.slug}
                      type="button"
                      onClick={() => {
                        setSelectedSlug(comp.slug);
                        setActiveTab("preview");
                      }}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center justify-between ${
                        selectedSlug === comp.slug
                          ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <span>{comp.title}</span>
                      {selectedSlug === comp.slug && <ChevronRightIcon size={12} />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Composed Blocks */}
            {blocks.length > 0 && (
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-2">
                  Composed Blocks
                </div>
                <div className="space-y-1">
                  {blocks.map((comp) => (
                    <button
                      key={comp.slug}
                      type="button"
                      onClick={() => {
                        setSelectedSlug(comp.slug);
                        setActiveTab("preview");
                      }}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer flex items-center justify-between ${
                        selectedSlug === comp.slug
                          ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <span>{comp.title}</span>
                      {selectedSlug === comp.slug && <ChevronRightIcon size={12} />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Right Main Content */}
        <main className="flex-1 p-6 sm:p-10 max-w-4xl space-y-10 overflow-y-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Docs</Link>
            <span>/</span>
            <span className="hover:text-foreground">Components</span>
            <span>/</span>
            <span className="text-foreground font-medium">{selectedComponent.title}</span>
          </div>

          {/* Component Header */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                {selectedComponent.title}
              </h1>
              <Badge variant="outline" className="border-border/60 text-xs">
                {selectedComponent.category}
              </Badge>
              <Badge variant="secondary" className="text-xs">
                WCAG 2.2 AA
              </Badge>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              {selectedComponent.description}
            </p>
          </div>

          {/* Component Showcase Box (Preview / Code Tabs) */}
          <div className="space-y-3">
            <div className="rounded-xl border border-border/40 bg-card overflow-hidden shadow-xs">
              {/* Tab Header & Copy Action */}
              <div className="flex items-center justify-between border-b border-border/40 px-4 py-2.5 bg-muted/20">
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setActiveTab("preview")}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                      activeTab === "preview"
                        ? "bg-background text-foreground shadow-2xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Preview
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("code")}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                      activeTab === "code"
                        ? "bg-background text-foreground shadow-2xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Code
                  </button>
                </div>

                {/* Copy Code Button */}
                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard(
                      activeTab === "code" ? selectedComponent.usageCode : selectedComponent.sourceCode,
                      "showcase-code"
                    )
                  }
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md border border-border/40 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer shadow-2xs"
                  title="Copy code to clipboard"
                >
                  {copiedSection === "showcase-code" ? (
                    <>
                      <CheckIcon size={12} className="text-emerald-500" />
                      <span className="text-emerald-500 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <CopyIcon size={12} />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === "preview" ? (
                <div className="min-h-[300px] flex items-center justify-center p-8 sm:p-12 bg-background/50">
                  {selectedComponent.renderPreview()}
                </div>
              ) : (
                <div className="p-4 sm:p-6 bg-muted/20 overflow-x-auto text-xs font-mono">
                  <pre className="text-foreground leading-relaxed">
                    <code>{selectedComponent.usageCode}</code>
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Installation Section */}
          <div className="space-y-4 pt-4 border-t border-border/40">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">Installation</h2>
            <div className="flex items-center justify-between rounded-lg border border-border/60 bg-muted/30 px-4 py-2.5 font-mono text-xs shadow-2xs">
              <span className="truncate text-foreground select-all">{selectedComponent.cliCommand}</span>
              <button
                type="button"
                onClick={() => copyToClipboard(selectedComponent.cliCommand, "cli-cmd")}
                className="ml-3 text-muted-foreground hover:text-foreground cursor-pointer shrink-0"
                title="Copy install command"
              >
                {copiedSection === "cli-cmd" ? (
                  <CheckIcon size={14} className="text-emerald-500" />
                ) : (
                  <CopyIcon size={14} />
                )}
              </button>
            </div>
          </div>

          {/* Component Source Code (Manual Install / Implementation) */}
          <div className="space-y-4 pt-4 border-t border-border/40">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-foreground">Component Source</h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Direct copy-paste implementation file ({selectedComponent.sourcePath}).
                </p>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(selectedComponent.sourceCode, "component-source")}
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-border/40 hover:bg-muted text-foreground transition-colors cursor-pointer shadow-xs"
              >
                {copiedSection === "component-source" ? (
                  <>
                    <CheckIcon size={12} className="text-emerald-500" />
                    <span className="text-emerald-500 font-medium">Copied Source!</span>
                  </>
                ) : (
                  <>
                    <CopyIcon size={12} />
                    <span>Copy Source Code</span>
                  </>
                )}
              </button>
            </div>

            <div className="rounded-xl border border-border/40 bg-muted/20 p-4 sm:p-6 overflow-x-auto text-xs font-mono max-h-[420px] overflow-y-auto">
              <pre className="text-foreground leading-relaxed">
                <code>{selectedComponent.sourceCode}</code>
              </pre>
            </div>
          </div>

          {/* Usage Anatomy */}
          <div className="space-y-4 pt-4 border-t border-border/40">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">Usage</h2>
            <div className="rounded-lg border border-border/40 bg-muted/20 p-4 text-xs font-mono">
              <pre className="text-foreground">
                <code>{selectedComponent.usageCode}</code>
              </pre>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
