import { create } from "zustand";

type UiState = {
  isWaitlistNoticeVisible: boolean;
  showWaitlistNotice: () => void;
  dismissWaitlistNotice: () => void;
};

export const useUiStore = create<UiState>((set) => ({
  isWaitlistNoticeVisible: false,
  showWaitlistNotice: () => set({ isWaitlistNoticeVisible: true }),
  dismissWaitlistNotice: () => set({ isWaitlistNoticeVisible: false }),
}));
