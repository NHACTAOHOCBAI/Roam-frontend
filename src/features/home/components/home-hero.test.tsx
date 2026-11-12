import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HomeHero } from "./home-hero";

describe("HomeHero", () => {
  it("renders the Roam message and exploration CTA", () => {
    render(<HomeHero />);
    expect(screen.getByRole("heading", { name: /đi xa hơn một địa điểm/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /khám phá việt nam/i })).toBeInTheDocument();
    expect(screen.getByText(/mỗi tỉnh thành là một lời mời/i)).toBeInTheDocument();
  });
});
