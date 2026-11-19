import * as React from "react";

export interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
  disabled?: boolean;
}

export interface UseTreeNavigationOptions {
  defaultExpanded?: string[];
  expanded?: string[];
  onExpandedChange?: (expanded: string[]) => void;
  selectedId?: string;
  onSelect?: (node: TreeNode) => void;
}

export function useTreeNavigation({
  defaultExpanded = [],
  expanded: controlledExpanded,
  onExpandedChange,
  selectedId: controlledSelected,
  onSelect,
}: UseTreeNavigationOptions = {}) {
  const [internalExpanded, setInternalExpanded] = React.useState<string[]>(defaultExpanded);
  const [focusedId, setFocusedId] = React.useState<string | null>(null);
  const [internalSelected, setInternalSelected] = React.useState<string | null>(null);

  const expanded = controlledExpanded !== undefined ? controlledExpanded : internalExpanded;
  const selectedId = controlledSelected !== undefined ? controlledSelected : internalSelected;

  const updateExpanded = React.useCallback(
    (next: string[]) => {
      if (controlledExpanded === undefined) {
        setInternalExpanded(next);
      }
      onExpandedChange?.(next);
    },
    [controlledExpanded, onExpandedChange]
  );

  const isExpanded = React.useCallback(
    (id: string) => expanded.includes(id),
    [expanded]
  );

  const toggleExpand = React.useCallback(
    (id: string) => {
      if (isExpanded(id)) {
        updateExpanded(expanded.filter((item) => item !== id));
      } else {
        updateExpanded([...expanded, id]);
      }
    },
    [expanded, isExpanded, updateExpanded]
  );

  const expand = React.useCallback(
    (id: string) => {
      if (!isExpanded(id)) {
        updateExpanded([...expanded, id]);
      }
    },
    [expanded, isExpanded, updateExpanded]
  );

  const collapse = React.useCallback(
    (id: string) => {
      if (isExpanded(id)) {
        updateExpanded(expanded.filter((item) => item !== id));
      }
    },
    [expanded, isExpanded, updateExpanded]
  );

  const selectNode = React.useCallback(
    (node: TreeNode) => {
      if (node.disabled) return;
      if (controlledSelected === undefined) {
        setInternalSelected(node.id);
      }
      setFocusedId(node.id);
      onSelect?.(node);
    },
    [controlledSelected, onSelect]
  );

  const handleKeyDown = React.useCallback(
    (
      event: React.KeyboardEvent,
      node: TreeNode,
      visibleFlatList: TreeNode[],
      parentMap: Map<string, string | null>
    ) => {
      const hasChildren = Boolean(node.children && node.children.length > 0);
      const currentIndex = visibleFlatList.findIndex((item) => item.id === node.id);

      switch (event.key) {
        case "ArrowRight": {
          event.preventDefault();
          if (hasChildren) {
            if (!isExpanded(node.id)) {
              expand(node.id);
            } else if (node.children && node.children.length > 0) {
              setFocusedId(node.children[0].id);
            }
          }
          break;
        }
        case "ArrowLeft": {
          event.preventDefault();
          if (hasChildren && isExpanded(node.id)) {
            collapse(node.id);
          } else {
            const parentId = parentMap.get(node.id);
            if (parentId) {
              setFocusedId(parentId);
            }
          }
          break;
        }
        case "ArrowDown": {
          event.preventDefault();
          if (currentIndex < visibleFlatList.length - 1) {
            setFocusedId(visibleFlatList[currentIndex + 1].id);
          }
          break;
        }
        case "ArrowUp": {
          event.preventDefault();
          if (currentIndex > 0) {
            setFocusedId(visibleFlatList[currentIndex - 1].id);
          }
          break;
        }
        case "Home": {
          event.preventDefault();
          if (visibleFlatList.length > 0) {
            setFocusedId(visibleFlatList[0].id);
          }
          break;
        }
        case "End": {
          event.preventDefault();
          if (visibleFlatList.length > 0) {
            setFocusedId(visibleFlatList[visibleFlatList.length - 1].id);
          }
          break;
        }
        case "Enter":
        case " ": {
          event.preventDefault();
          selectNode(node);
          break;
        }
      }
    },
    [collapse, expand, isExpanded, selectNode]
  );

  const getTreeNodeProps = React.useCallback(
    (node: TreeNode, level = 1) => {
      const hasChildren = Boolean(node.children && node.children.length > 0);
      const isSelected = selectedId === node.id;
      const isFocused = focusedId === node.id || (!focusedId && level === 1 && isSelected);

      return {
        role: "treeitem" as const,
        tabIndex: isFocused ? 0 : -1,
        "aria-expanded": hasChildren ? isExpanded(node.id) : undefined,
        "aria-selected": isSelected,
        "aria-level": level,
        "aria-disabled": node.disabled ? true : undefined,
      };
    },
    [expanded, focusedId, isExpanded, selectedId]
  );

  return {
    expanded,
    focusedId,
    selectedId,
    setFocusedId,
    isExpanded,
    toggleExpand,
    expand,
    collapse,
    selectNode,
    handleKeyDown,
    getTreeNodeProps,
  };
}
