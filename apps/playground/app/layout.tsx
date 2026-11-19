import type { Metadata } from "next";
import { ThemeProvider } from "@kunemi-ui/ui";
import "@kunemi-ui/tokens/theme.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kunemi UI — Interactive Playground",
  description: "Testbench for components, composed blocks, behaviors, and icons.",
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
