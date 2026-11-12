import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { useUiStore } from "@/stores/ui-store";
import { WaitlistCta } from "./waitlist-cta";

describe("WaitlistCta", () => {
  beforeEach(() => useUiStore.setState({ isWaitlistNoticeVisible: false }));
  it("shows a local confirmation without calling an API", async () => {
    const user = userEvent.setup();
    render(<WaitlistCta />);
    await user.click(screen.getByRole("button", { name: /nhận thông báo/i }));
    expect(screen.getByRole("status")).toHaveTextContent(/sớm mở đăng ký/i);
  });
});
