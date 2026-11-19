"use client";

import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogPopup,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "./dialog";
import { Button } from "./button";

export interface ApprovalDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title: string;
  description: string;
  actionName: string;
  isDestructive?: boolean;
  onApprove: () => void;
  onReject?: () => void;
  loading?: boolean;
  trigger?: React.ReactNode;
  children?: React.ReactNode;
}

export function ApprovalDialog({
  open,
  onOpenChange,
  title,
  description,
  actionName,
  isDestructive = false,
  onApprove,
  onReject,
  loading = false,
  trigger,
  children,
}: ApprovalDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger>{trigger}</DialogTrigger>}
      <DialogPopup>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        {children && <div className="py-2 text-sm">{children}</div>}

        <DialogFooter>
          <DialogClose
            render={
              <Button
                type="button"
                variant="outline"
                disabled={loading}
                onClick={onReject}
              >
                Cancel
              </Button>
            }
          />
          <Button
            type="button"
            variant={isDestructive ? "destructive" : "primary"}
            loading={loading}
            onClick={onApprove}
          >
            {actionName}
          </Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
}
