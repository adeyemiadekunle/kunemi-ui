import * as React from "react";
import { PromptInput, ToolStatus, ApprovalDialog, Button } from "@kunemi-ui/ui";

export default {
  title: "AI-Native/Suite",
};

export const PromptComposer = () => {
  const [prompts, setPrompts] = React.useState<string[]>([]);

  return (
    <div className="max-w-2xl p-6 space-y-4">
      <PromptInput
        placeholder="Ask the AI agent anything (Enter to submit, Shift+Enter for newline)..."
        onSubmitPrompt={(val) => setPrompts((prev) => [...prev, val])}
      />
      {prompts.length > 0 && (
        <div className="space-y-2 border-t pt-4">
          <h4 className="text-sm font-semibold">Submitted Prompts:</h4>
          {prompts.map((p, i) => (
            <div key={i} className="text-xs p-2 rounded bg-[var(--muted)]">
              {p}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const ToolLifecycle = () => (
  <div className="max-w-xl p-6 space-y-3">
    <ToolStatus
      toolName="DatabaseIndexAudit"
      state="running"
      durationMs={120}
    />
    <ToolStatus
      toolName="WCAGContrastChecker"
      state="succeeded"
      durationMs={45}
    />
    <ToolStatus
      toolName="ProductionDeploy"
      state="queued"
    />
    <ToolStatus
      toolName="NetworkProxyHandshake"
      state="failed"
      error="Socket timeout while negotiating TLS connection"
    />
  </div>
);

export const ConsequentialApproval = () => (
  <div className="p-6">
    <ApprovalDialog
      title="Delete Production Workspace"
      actionName="Permanent Workspace Deletion"
      description="This action will delete all 12 projects and databases associated with this workspace. This action cannot be reversed."
      isDestructive={true}
      trigger={<Button variant="destructive">Delete Workspace</Button>}
      onApprove={() => alert("Approved and executed")}
      onReject={() => alert("Rejected")}
    />
  </div>
);
