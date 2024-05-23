import { create } from 'zustand';

export interface ISearchState {
  focus: boolean;
  value: string;
}

export interface ISearchStore {
  searchState: ISearchState;
  setSearchState: (searchState: ISearchState) => void;
}

export const useSearchStore = create((set) => ({
  searchState: {
    focus: false,
    value: '',
  },
  setSearchState: (searchState: ISearchState) => set({ searchState }),
  setUnFocus: () =>
    set((state: ISearchStore) => ({
      searchState: { ...state.searchState, focus: false },
    })),
}));
