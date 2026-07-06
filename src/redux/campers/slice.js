import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCampersById, fetchLocations } from "./operations";

const initialState = {
  items: [],
  total: 0,
  hasNextPage: false,
  page: 1,
  selectedCampers: null,
  filters: {},
  isLoadingCampers: false,
  isErrorCampers: false,
  locations: [],
  favoritesIds: [],
};

const slice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    clearCampers: (state) => {
      state.items = [];
      state.total = 0;
    },

    setPage(state, { payload }) {
      state.page = payload;
    },
    setFilters: (state, { payload }) => {
      state.filters = payload; // Оновлюємо фільтри
    },
    resetPage: (state) => {
      state.page = 1;
      console.log(state.page);
    },
    // обране
    toggleFavorite(state, { payload }) {
      const id = String(payload);
      const i = state.favoritesIds.indexOf(id);
      if (i >= 0) state.favoritesIds.splice(i, 1);
      else state.favoritesIds.push(id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (s) => {
        s.isLoadingCampers = true;
        s.isErrorCampers = false;
      })
      .addCase(fetchCampers.fulfilled, (s, { payload }) => {
        s.isLoadingCampers = false;
        const { items, total } = payload;

        s.items = items;
        s.total = total;
        // const uniqueItems = items.filter(
        //   (item) =>
        //     !s.items.some((existingItem) => existingItem.id === item.id),
        // );
        // s.items = [...s.items, ...uniqueItems];
      })
      .addCase(fetchCampers.rejected, (s) => {
        s.isLoadingCampers = false;
        s.isErrorCampers = true;
      })

      .addCase(fetchCampersById.pending, (s) => {
        s.isLoadingCampers = true;
        s.isErrorCampers = false;
      })
      .addCase(fetchCampersById.fulfilled, (s, { payload }) => {
        s.isLoadingCampers = false;
        s.selectedCampers = payload;
      })
      .addCase(fetchCampersById.rejected, (s) => {
        s.isLoadingCampers = false;
        s.isErrorCampers = true;
        s.selectedCampers = null;
      })
      .addCase(fetchLocations.pending, (s) => {
        s.isLoadingCampers = true;
        s.isErrorCampers = false;
      })
      .addCase(fetchLocations.fulfilled, (s, { payload }) => {
        s.isLoadingCampers = false;
        // s.selectedCampers = payload;
        const uniqueLocations = [
          ...new Set(payload.map((item) => item.location)),
        ];
        s.locations = uniqueLocations;
      })
      .addCase(fetchLocations.rejected, (s) => {
        s.isLoadingCampers = false;
        s.isErrorCampers = true;
        s.selectedCampers = null;
      });
  },
});
export const { setPage, clearCampers, setFilters, resetPage, toggleFavorite } =
  slice.actions;
export default slice.reducer;
