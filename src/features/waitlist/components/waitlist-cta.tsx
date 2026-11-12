"use client";

import { useUiStore } from "@/stores/ui-store";

export function WaitlistCta() {
  const isNoticeVisible = useUiStore((state) => state.isWaitlistNoticeVisible);
  const showWaitlistNotice = useUiStore((state) => state.showWaitlistNotice);
  const dismissWaitlistNotice = useUiStore((state) => state.dismissWaitlistNotice);

  return (
    <div className="flex flex-col items-center gap-3 sm:items-start">
      <button
        type="button"
        onClick={showWaitlistNotice}
        className="bg-moss-500 shadow-moss-950/20 hover:bg-moss-600 focus-visible:outline-moss-300 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        Nhận thông báo khi ra mắt
      </button>
      {isNoticeVisible ? (
        <div role="status" className="text-ink-100 flex items-center gap-3 text-sm">
          <span>Chúng mình sẽ sớm mở đăng ký.</span>
          <button
            type="button"
            onClick={dismissWaitlistNotice}
            className="focus-visible:outline-moss-300 font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Đóng
          </button>
        </div>
      ) : null}
    </div>
  );
}
