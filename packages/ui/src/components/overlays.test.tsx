import * as React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  Dialog,
  DialogTrigger,
  DialogPopup,
  DialogTitle,
  DialogDescription,
} from "./dialog";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "./tooltip";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";

describe("Overlays & Navigation components", () => {
  it("renders dialog trigger and closed state by default", () => {
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogPopup>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>Dialog Content</DialogDescription>
        </DialogPopup>
      </Dialog>
    );
    expect(screen.getByRole("button", { name: /open dialog/i })).toBeDefined();
    expect(screen.queryByText("Dialog Title")).toBeNull();
  });

  it("renders tooltip trigger with accessible wrapping", () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Helpful info</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
    expect(screen.getByRole("button", { name: /hover me/i })).toBeDefined();
  });

  it("renders tabs and activates default tab panel", () => {
    render(
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Account Settings</TabsContent>
        <TabsContent value="password">Password Settings</TabsContent>
      </Tabs>
    );
    expect(screen.getByRole("tab", { name: /account/i })).toBeDefined();
    expect(screen.getByRole("tab", { name: /password/i })).toBeDefined();
    expect(screen.getByText("Account Settings")).toBeDefined();
  });
});
