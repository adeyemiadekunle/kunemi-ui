import * as React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "./table";
import { Pagination, PaginationContent, PaginationLink } from "./pagination";
import { PromptInput } from "./prompt-input";
import { ToolStatus } from "./tool-status";
import { ApprovalDialog } from "./approval-dialog";

describe("P1 & AI-Native Components", () => {
  it("renders Table structure properly", () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Model</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Gemini 2.5</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByText("Model")).toBeDefined();
    expect(screen.getByText("Gemini 2.5")).toBeDefined();
  });

  it("renders Pagination navigation controls", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationContent>
      </Pagination>
    );
    const link = screen.getByRole("link", { name: "1" });
    expect(link.getAttribute("aria-current")).toBe("page");
  });

  it("handles PromptInput enter key submission", () => {
    const handleSubmit = vi.fn();
    render(<PromptInput onSubmitPrompt={handleSubmit} />);
    const textarea = screen.getByPlaceholderText(/ask anything/i);

    fireEvent.change(textarea, { target: { value: "Hello world" } });
    fireEvent.keyDown(textarea, { key: "Enter", shiftKey: false });

    expect(handleSubmit).toHaveBeenCalledWith("Hello world");
  });

  it("renders ToolStatus with appropriate state badge", () => {
    render(
      <ToolStatus
        toolName="run_migration"
        state="succeeded"
        durationMs={420}
      />
    );
    expect(screen.getByText("run_migration")).toBeDefined();
    expect(screen.getByText("Completed")).toBeDefined();
    expect(screen.getByText("420ms")).toBeDefined();
  });

  it("renders ApprovalDialog trigger", () => {
    render(
      <ApprovalDialog
        title="Confirm deletion"
        description="This action cannot be undone."
        actionName="Delete Database"
        isDestructive
        onApprove={vi.fn()}
        trigger={<span>Trigger Action</span>}
      />
    );
    expect(screen.getByText("Trigger Action")).toBeDefined();
  });
});
