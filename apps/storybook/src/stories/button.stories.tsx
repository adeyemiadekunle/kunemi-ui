import * as React from "react";
import { Button } from "@kunemi-ui/ui";

export default {
  title: "Components/Button",
  component: Button,
};

export const Variants = () => (
  <div className="flex flex-wrap gap-4 p-6">
    <Button variant="primary">Primary Button</Button>
    <Button variant="secondary">Secondary Button</Button>
    <Button variant="outline">Outline Button</Button>
    <Button variant="ghost">Ghost Button</Button>
    <Button variant="destructive">Destructive Button</Button>
  </div>
);

export const Sizes = () => (
  <div className="flex items-center gap-4 p-6">
    <Button size="sm">Small (sm)</Button>
    <Button size="md">Medium (md)</Button>
    <Button size="lg">Large (lg)</Button>
  </div>
);

export const Disabled = () => (
  <div className="flex gap-4 p-6">
    <Button disabled>Disabled Primary</Button>
    <Button variant="outline" disabled>
      Disabled Outline
    </Button>
  </div>
);
