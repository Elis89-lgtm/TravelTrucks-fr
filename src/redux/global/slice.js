import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchCampers, fetchCampersById } from "../campers/operations";

const slice = createSlice({
  name: "global",
  initialState: {
    isLoading: false,
  },
  reducers: {
    setLoadingState(state, action) {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(fetchCampers.pending, fetchCampersById.pending),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchCampers.fulfilled,
          fetchCampers.rejected,
          fetchCampersById.fulfilled,
          fetchCampersById.rejected
        ),
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

export const { setLoadingState } = slice.actions;
export default slice.reducer;
