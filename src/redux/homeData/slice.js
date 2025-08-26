import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchHomeCampers } from "./operations";

const initialState = {
  favoritCampers: [],

  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: "homeData",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeCampers.fulfilled, (state, action) => {
        state.favoritCampers = action.payload;
      })

      .addMatcher(isAnyOf(fetchHomeCampers.pending), (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addMatcher(isAnyOf(fetchHomeCampers.fulfilled), (state) => {
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(fetchHomeCampers.rejected), (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const homeDataReducer = slice.reducer;
