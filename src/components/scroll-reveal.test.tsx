import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ScrollReveal } from "./scroll-reveal";

describe("ScrollReveal", () => {
  it("shows its content when IntersectionObserver is unavailable", async () => {
    render(<ScrollReveal>Khám phá chậm hơn</ScrollReveal>);

    const content = screen.getByText("Khám phá chậm hơn");
    await waitFor(() => expect(content).toHaveClass("is-visible"));
  });
});
