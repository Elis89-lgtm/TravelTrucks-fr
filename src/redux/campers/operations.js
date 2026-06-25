import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ page = 1, perPage = 12, filter = "all" } = {}, thunkAPI) => {
    try {
      const params = { page, perPage, filter };

      const response = await axios.get(
        "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
        {
          params,
        },
      );
      return {
        data: response.data?.data?.data ?? [],
        page: response.data?.data?.page ?? 1,
        total: response.data?.data?.totalItems ?? 0,
        hasNextPage: response.data?.data?.hasNextPage ?? false,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message,
      );
    }
  },
);
export const fetchCampersById = createAsyncThunk(
  "campers/fetchCampersById",
  async (campersId, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${campersId}`,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message,
      );
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
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response?.data?.message || error.message,
      );
    }
  },
);

export const setFilters = (filters) => ({
  type: "campers/setFilters",
  payload: filters,
});
