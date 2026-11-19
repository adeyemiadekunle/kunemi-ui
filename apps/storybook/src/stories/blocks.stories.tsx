import * as React from "react";
import { AuthCard, MetricCard, AIChatBlock } from "@kunemi-ui/blocks";

export default {
  title: "Blocks/Composed",
};

export const Authentication = () => (
  <div className="max-w-md p-6">
    <AuthCard
      title="Sign in to Kunemi"
      description="Enter your developer credentials to manage your design system."
      onSubmit={(email) => alert(`Logging in as: ${email}`)}
    />
  </div>
);

export const Metrics = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl gap-4 p-6">
    <MetricCard
      label="Daily Active Developers"
      value="14,290"
      change="+14.2%"
      isPositive={true}
    />
    <MetricCard
      label="Failed Invocations"
      value="0.02%"
      change="-8.5%"
      isPositive={true}
    />
  </div>
);

export const ChatInterface = () => (
  <div className="max-w-xl p-6">
    <AIChatBlock
      onSendMessage={(msg) => alert(`Agent received: ${msg}`)}
    />
  </div>
);
