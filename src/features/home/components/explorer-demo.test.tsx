import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { ExplorerDemo } from "./explorer-demo";

describe("ExplorerDemo", () => {
  afterEach(cleanup);

  it("takes a visitor from a map marker to a successful join state", async () => {
    const user = userEvent.setup();
    render(<ExplorerDemo />);

    await user.click(screen.getByRole("button", { name: /xem roam vận hành/i }));
    const dialog = screen.getByRole("dialog");

    await user.click(within(dialog).getByRole("button", { name: "Chọn Hà Giang" }));
    expect(within(dialog).getByRole("heading", { name: "Hà Giang" })).toBeInTheDocument();

    await user.click(within(dialog).getByRole("button", { name: /xem sự kiện mẫu/i }));
    expect(within(dialog).getByText(/hoạt động minh hoạ/i)).toBeInTheDocument();

    await user.click(within(dialog).getByRole("button", { name: /tham gia hoạt động/i }));
    expect(within(dialog).getByText(/yêu cầu tham gia đã sẵn sàng/i)).toBeInTheDocument();
  });

  it("closes the demo with Escape", async () => {
    const user = userEvent.setup();
    render(<ExplorerDemo />);
    await user.click(screen.getByRole("button", { name: /xem roam vận hành/i }));

    await user.keyboard("{Escape}");

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
