import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCampersById } from "./operations";

const initialState = {
  items: [],
  total: 0,
  hasNextPage: false,
  page: 1,
  selectedCampers: null,

  isLoadingCampers: false,
  isErrorCampers: false,

  favoritesIds: [], // обране
};

const slice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    resetList(state) {
      state.items = [];
      state.page = 1;
      state.hasNextPage = false;
      state.total = 0;
    },
    setPage(state, { payload }) {
      state.page = payload;
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
        const { data, total, hasNextPage, page } = payload;
        s.total = total ?? s.total;
        s.hasNextPage = Boolean(hasNextPage);
        s.page = page ?? s.page;

        s.items = s.page > 1 ? [...s.items, ...data] : data;
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
        s.selectedCampers = payload.data;
      })
      .addCase(fetchCampersById.rejected, (s) => {
        s.isLoadingCampers = false;
        s.isErrorCampers = true;
        s.selectedCampers = null;
      });
  },
});

export const { resetList, setPage, toggleFavorite } = slice.actions;
export default slice.reducer;
