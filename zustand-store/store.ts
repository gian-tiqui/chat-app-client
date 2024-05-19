import { create } from "zustand";

type NumberStore = {
  num: number;
  setNum: (delta: number) => void;
};

export const useNumberStore = create<NumberStore>((set) => ({
  num: 0,
  setNum: (delta: number) => {
    set((state) => ({ num: state.num + delta }));
  },
}));
