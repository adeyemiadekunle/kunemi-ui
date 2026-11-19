import type { Metadata } from "next";
import { ThemeProvider } from "@kunemi-ui/ui";
import "@kunemi-ui/tokens/theme.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kunemi UI — Accessible & AI-Native Design System",
  description:
    "A coherent, accessible and extensible design system for web and AI applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[var(--background)] text-[var(--foreground)] min-h-screen antialiased">
        <ThemeProvider defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
