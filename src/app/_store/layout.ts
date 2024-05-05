import { create } from 'zustand'

interface LayoutStoreState {
    activeSideItem: number;
    setActiveItem: (val: number) => void
}

export const useLayoutStore = create<LayoutStoreState>((set) => ({
    activeSideItem: 1,
    setActiveItem: (val: number) => set({ activeSideItem: val }),
}))