import { create } from "zustand";

export const useTravelAgencies = create((set) => ({
  data: [],
  setData: (arrayData) => set(() => ({ data: arrayData })),
}));

export const useInfoModal = create((set) => ({
  isShow: false,
  toggleModal: () => set((state) => ({ isShow: !state.isShow })),
}));

export const useCurrentInfoModal = create((set) => ({
  data: {},
  setData: (objectData) => set(() => ({ data: objectData })),
}));

export const useEmptyModal = create((set) => ({
  isShow: false,
  toggleModal: () => set((state) => ({ isShow: !state.isShow })),
}));

// export const useRenameModal = create((set) => ({
//   isShow: false,
//   chatInfo: {},
//   toogle: () => set((state) => ({ isShow: !state.isShow })),
//   addInfo: (info) => set(() => ({ chatInfo: info })),
// }));
//
// export const useShowMenu = create((set) => ({
//   isShow: false,
//   toogle: () => set((state) => ({ isShow: !state.isShow })),
//   close: () => set(() => ({ isShow: false })),
// }));