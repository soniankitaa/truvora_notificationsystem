import { create } from "zustand";

type SidebarState = {
  collapsed: boolean;
  mobileOpen: boolean;

  toggleCollapsed: () => void;

  openMobile: () => void;

  closeMobile: () => void;
};

export const useSidebarStore = create<SidebarState>((set) => ({
  collapsed: false,

  mobileOpen: false,

  toggleCollapsed: () =>
    set((state) => ({
      collapsed: !state.collapsed,
    })),

  openMobile: () =>
    set({
      mobileOpen: true,
    }),

  closeMobile: () =>
    set({
      mobileOpen: false,
    }),
}));