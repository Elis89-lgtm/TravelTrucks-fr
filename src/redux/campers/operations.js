import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ page = 1, limit = 4, filterParams = {} } = {}, thunkAPI) => {
    try {
      const params = { page, limit, ...filterParams };

      const { data } = await axios.get(
        "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
        {
          params,
        },
      );
      return {
        items: data,
        total: data.length,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const fetchCampersById = createAsyncThunk(
  "campers/fetchCampersById",
  async (campersId, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${campersId}`,
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const fetchLocations = createAsyncThunk(
  "campers/fetchLocations",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(
        "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
      );
      return data.items ?? data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const setFilters = (filters) => ({
  type: "campers/setFilters",
  payload: filters,
});
