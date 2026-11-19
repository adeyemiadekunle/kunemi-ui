import { describe, it, expect, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import {
  useSelectionModel,
  useStreamResponse,
  useTreeNavigation,
  type TreeNode,
} from "./index";

describe("@kunemi-ui/behaviors", () => {
  describe("useSelectionModel", () => {
    it("handles single selection mode", () => {
      const { result } = renderHook(() =>
        useSelectionModel({ mode: "single", items: ["a", "b", "c"] })
      );

      expect(result.current.selected).toEqual([]);

      act(() => {
        result.current.selectItem("a");
      });
      expect(result.current.selected).toEqual(["a"]);
      expect(result.current.isSelected("a")).toBe(true);

      act(() => {
        result.current.selectItem("b");
      });
      expect(result.current.selected).toEqual(["b"]);
      expect(result.current.isSelected("a")).toBe(false);
    });

    it("handles multiple selection and selectAll / deselectAll", () => {
      const { result } = renderHook(() =>
        useSelectionModel({ mode: "multiple", items: ["1", "2", "3"] })
      );

      act(() => {
        result.current.selectAll();
      });
      expect(result.current.selected).toEqual(["1", "2", "3"]);

      act(() => {
        result.current.deselectAll();
      });
      expect(result.current.selected).toEqual([]);
    });

    it("handles Shift+Click range selection", () => {
      const { result } = renderHook(() =>
        useSelectionModel({ mode: "multiple", items: ["item-0", "item-1", "item-2", "item-3"] })
      );

      // First click item-1
      act(() => {
        result.current.selectItem("item-1");
      });
      expect(result.current.selected).toEqual(["item-1"]);

      // Shift click item-3
      act(() => {
        result.current.selectItem("item-3", { shiftKey: true });
      });
      expect(result.current.selected).toEqual(["item-1", "item-2", "item-3"]);
    });

    it("provides accessible ARIA attributes with getSelectionProps", () => {
      const { result } = renderHook(() =>
        useSelectionModel<string>({ mode: "multiple", defaultSelected: ["item-1"] })
      );

      const props1 = result.current.getSelectionProps("item-1");
      expect(props1["aria-selected"]).toBe(true);
      expect(props1.role).toBe("option");
      expect(props1.tabIndex).toBe(0);

      const props2 = result.current.getSelectionProps("item-2");
      expect(props2["aria-selected"]).toBe(false);
      expect(props2.tabIndex).toBe(-1);
    });
  });

  describe("useStreamResponse", () => {
    it("manages streaming lifecycle and throttles live announcements", () => {
      const onFinish = vi.fn();
      const { result } = renderHook(() =>
        useStreamResponse({ onFinish, throttleLiveIntervalMs: 500 })
      );

      expect(result.current.status).toBe("idle");
      expect(result.current.content).toBe("");

      // Append token without sentence boundary
      act(() => {
        result.current.appendChunk("Hello ");
      });
      expect(result.current.status).toBe("streaming");
      expect(result.current.content).toBe("Hello ");

      // Sentence boundary flushes live announcement immediately
      act(() => {
        result.current.appendChunk("world.");
      });
      expect(result.current.content).toBe("Hello world.");
      expect(result.current.liveAnnouncement).toBe("Hello world.");

      // Finish streaming
      act(() => {
        result.current.finish();
      });
      expect(result.current.status).toBe("done");
      expect(onFinish).toHaveBeenCalledWith("Hello world.");
    });

    it("handles error and cancellation states", () => {
      const onError = vi.fn();
      const { result } = renderHook(() => useStreamResponse({ onError }));

      act(() => {
        result.current.appendChunk("Initial content");
      });

      act(() => {
        result.current.cancel();
      });
      expect(result.current.status).toBe("cancelled");

      act(() => {
        result.current.fail("Connection aborted by server");
      });
      expect(result.current.status).toBe("error");
      expect(result.current.error?.message).toBe("Connection aborted by server");
      expect(onError).toHaveBeenCalled();
    });

    it("returns accessible live-region props", () => {
      const { result } = renderHook(() => useStreamResponse());
      const props = result.current.getLiveRegionProps();
      expect(props.role).toBe("status");
      expect(props["aria-live"]).toBe("polite");
      expect(props["aria-busy"]).toBe(false);

      act(() => {
        result.current.appendChunk("Thinking...");
      });
      expect(result.current.getLiveRegionProps()["aria-busy"]).toBe(true);
    });
  });

  describe("useTreeNavigation", () => {
    const sampleTree: TreeNode[] = [
      {
        id: "root-1",
        label: "Documents",
        children: [
          { id: "child-1", label: "Report.pdf" },
          { id: "child-2", label: "Budget.xlsx" },
        ],
      },
      {
        id: "root-2",
        label: "Images",
        children: [{ id: "child-3", label: "Logo.png" }],
      },
    ];

    it("toggles and expands nodes", () => {
      const { result } = renderHook(() =>
        useTreeNavigation({ defaultExpanded: ["root-1"] })
      );

      expect(result.current.isExpanded("root-1")).toBe(true);
      expect(result.current.isExpanded("root-2")).toBe(false);

      act(() => {
        result.current.toggleExpand("root-2");
      });
      expect(result.current.isExpanded("root-2")).toBe(true);

      act(() => {
        result.current.collapse("root-1");
      });
      expect(result.current.isExpanded("root-1")).toBe(false);
    });

    it("generates correct ARIA props with getTreeNodeProps", () => {
      const { result } = renderHook(() =>
        useTreeNavigation({ defaultExpanded: ["root-1"], selectedId: "root-1" })
      );

      const props = result.current.getTreeNodeProps(sampleTree[0], 1);
      expect(props.role).toBe("treeitem");
      expect(props["aria-expanded"]).toBe(true);
      expect(props["aria-selected"]).toBe(true);
      expect(props["aria-level"]).toBe(1);

      // Child leaf node without children
      const leafProps = result.current.getTreeNodeProps(sampleTree[0].children![0], 2);
      expect(leafProps["aria-expanded"]).toBeUndefined();
      expect(leafProps["aria-level"]).toBe(2);
    });

    it("navigates with keyboard (ArrowRight, ArrowLeft, ArrowDown)", () => {
      const { result } = renderHook(() => useTreeNavigation());
      const parentMap = new Map<string, string | null>([
        ["root-1", null],
        ["child-1", "root-1"],
        ["child-2", "root-1"],
        ["root-2", null],
      ]);

      const preventDefault = vi.fn();

      // ArrowRight on closed node expands it
      act(() => {
        result.current.handleKeyDown(
          { key: "ArrowRight", preventDefault } as unknown as React.KeyboardEvent,
          sampleTree[0],
          sampleTree,
          parentMap
        );
      });
      expect(result.current.isExpanded("root-1")).toBe(true);

      // ArrowLeft on opened node collapses it
      act(() => {
        result.current.handleKeyDown(
          { key: "ArrowLeft", preventDefault } as unknown as React.KeyboardEvent,
          sampleTree[0],
          sampleTree,
          parentMap
        );
      });
      expect(result.current.isExpanded("root-1")).toBe(false);
    });
  });
});
