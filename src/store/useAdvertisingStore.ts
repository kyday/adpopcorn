import { create } from "zustand";

type UseBearStoreType = {
  date: number;
  increaseDate: () => void;
  decreaseDate: () => void;
};

export const useAdvertisingStore = create<UseBearStoreType>((set, get) => ({
  date: 2018,

  increaseDate: () => {
    if (get().date === 2021) return;
    set(({ date }) => ({ date: date + 1 }));
  },
  decreaseDate: () => {
    if (get().date === 2018) return;
    set(({ date }) => ({ date: date - 1 }));
  },
}));
