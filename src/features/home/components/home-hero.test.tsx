import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HomeHero } from "./home-hero";

describe("HomeHero", () => {
  it("renders the Roam message, demo CTA and product storyboards", () => {
    render(<HomeHero />);
    expect(screen.getByRole("heading", { name: /đi xa hơn một địa điểm/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /xem roam vận hành/i })).toBeInTheDocument();
    expect(screen.getByText(/mỗi tỉnh thành là một lời mời/i)).toBeInTheDocument();
    expect(screen.getByText(/một nơi. năm lớp trải nghiệm/i)).toBeInTheDocument();
    expect(screen.getByText("Nguồn tham khảo")).toBeInTheDocument();
    expect(screen.getByText(/dạo bên sông hương/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /khám phá bản đồ việt nam/i })).toHaveAttribute(
      "href",
      "#kham-pha",
    );
  });
});
