import { create } from "zustand";

import { User } from "../types/data-interfaces";

interface ExploresState {
  explores: User[];
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setExplores: (explores: User[]) => void;
  removeExplore: (id: string) => void;
}

const exploresStore = create<ExploresState>((set) => ({
  explores: [],
  loading: true,
  setLoading: (loading) => set({ loading }),
  setExplores: (explores) => set({ explores }),
  removeExplore: (id) =>
    set((state) => ({
      explores: state.explores.filter((explore) => explore._id !== id),
    })),
}));

export default exploresStore;
