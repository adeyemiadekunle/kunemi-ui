import * as React from "react";

export interface UseSelectionModelOptions<T extends string = string> {
  mode?: "single" | "multiple";
  defaultSelected?: T[];
  selected?: T[];
  onSelectionChange?: (selected: T[]) => void;
  items?: T[];
}

export function useSelectionModel<T extends string = string>({
  mode = "multiple",
  defaultSelected = [],
  selected: controlledSelected,
  onSelectionChange,
  items = [],
}: UseSelectionModelOptions<T> = {}) {
  const [internalSelected, setInternalSelected] = React.useState<T[]>(defaultSelected);
  const anchorRef = React.useRef<T | null>(null);

  const selected = controlledSelected !== undefined ? controlledSelected : internalSelected;

  const updateSelection = React.useCallback(
    (next: T[]) => {
      if (controlledSelected === undefined) {
        setInternalSelected(next);
      }
      onSelectionChange?.(next);
    },
    [controlledSelected, onSelectionChange]
  );

  const isSelected = React.useCallback(
    (id: T) => selected.includes(id),
    [selected]
  );

  const selectItem = React.useCallback(
    (id: T, event?: { shiftKey?: boolean; ctrlKey?: boolean; metaKey?: boolean }) => {
      if (mode === "single") {
        updateSelection([id]);
        anchorRef.current = id;
        return;
      }

      const isModifier = event?.ctrlKey || event?.metaKey;
      const isShift = event?.shiftKey && anchorRef.current && items.length > 0;

      if (isShift && anchorRef.current) {
        const anchorIndex = items.indexOf(anchorRef.current);
        const targetIndex = items.indexOf(id);

        if (anchorIndex !== -1 && targetIndex !== -1) {
          const start = Math.min(anchorIndex, targetIndex);
          const end = Math.max(anchorIndex, targetIndex);
          const rangeItems = items.slice(start, end + 1);

          const newSet = new Set(selected);
          rangeItems.forEach((item) => newSet.add(item));
          updateSelection(Array.from(newSet));
          return;
        }
      }

      if (isModifier) {
        if (selected.includes(id)) {
          updateSelection(selected.filter((item) => item !== id));
        } else {
          updateSelection([...selected, id]);
        }
        anchorRef.current = id;
        return;
      }

      // Default click without modifiers: replace selection or toggle
      if (selected.length === 1 && selected[0] === id) {
        updateSelection([]);
        anchorRef.current = null;
      } else {
        updateSelection([id]);
        anchorRef.current = id;
      }
    },
    [mode, selected, items, updateSelection]
  );

  const selectAll = React.useCallback(() => {
    if (mode === "multiple" && items.length > 0) {
      updateSelection([...items]);
    }
  }, [mode, items, updateSelection]);

  const deselectAll = React.useCallback(() => {
    updateSelection([]);
    anchorRef.current = null;
  }, [updateSelection]);

  const getSelectionProps = React.useCallback(
    (id: T) => ({
      "aria-selected": isSelected(id),
      role: "option",
      tabIndex: isSelected(id) ? 0 : -1,
      onClick: (e: React.MouseEvent) => {
        selectItem(id, {
          shiftKey: e.shiftKey,
          ctrlKey: e.ctrlKey,
          metaKey: e.metaKey,
        });
      },
    }),
    [isSelected, selectItem]
  );

  return {
    selected,
    isSelected,
    selectItem,
    selectAll,
    deselectAll,
    getSelectionProps,
  };
}
