import * as React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion";

describe("Accordion component", () => {
  it("renders accordion items and triggers", () => {
    render(
      <Accordion defaultValue={["item-1"]}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled with Tailwind?</AccordionTrigger>
          <AccordionContent>Yes. It is fully styled with Tailwind CSS v4.</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText("Is it accessible?")).toBeDefined();
    expect(screen.getByText("Is it styled with Tailwind?")).toBeDefined();
    expect(screen.getByText("Yes. It adheres to the WAI-ARIA design pattern.")).toBeDefined();
  });

  it("handles item trigger clicks", () => {
    render(
      <Accordion>
        <AccordionItem value="item-1">
          <AccordionTrigger>Toggle Panel</AccordionTrigger>
          <AccordionContent>Secret Content Revealed</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger = screen.getByText("Toggle Panel");
    fireEvent.click(trigger);
    expect(screen.getByText("Secret Content Revealed")).toBeDefined();
  });
});
