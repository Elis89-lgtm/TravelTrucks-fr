import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  bodyType: null, // 'panelTruck' | 'fullyIntegrated' | 'alcove'
  features: [], // ['AC','kitchen','bathroom',...]
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation: (s, { payload }) => {
      s.location = payload;
    },
    setBodyType: (s, { payload }) => {
      s.bodyType = s.bodyType === payload ? null : payload;
    },
    toggleFeature: (s, { payload }) => {
      s.features = s.features.includes(payload)
        ? s.features.filter((f) => f !== payload)
        : [...s.features, payload];
    },
    resetFilters: () => ({ ...initialState }),
    setMany: (s, { payload }) => {
      if (payload.location !== undefined) s.location = payload.location;
      if (payload.bodyType !== undefined) s.bodyType = payload.bodyType;
      if (payload.features !== undefined) s.features = payload.features;
    },
  },
});

export const {
  setLocation,
  setBodyType,
  toggleFeature,
  resetFilters,
  setMany,
} = slice.actions;
export default slice.reducer;
