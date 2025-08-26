import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ page = 1, perPage = 12, filter = "all" } = {}, thunkAPI) => {
    try {
      const params = { page, perPage };

      if (filter === "popular") {
        params.sortBy = "rate";
        params.sortOrder = "desc";
      }
      const response = await axios.get(
        "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
        {
          params,
        }
      );
      return {
        data: response.data?.data?.data ?? [],
        page: response.data?.data?.page ?? 1,
        total: response.data?.data?.totalItems ?? 0,
        hasNextPage: response.data?.data?.hasNextPage ?? false,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);
export const fetchCampersById = createAsyncThunk(
  "campers/fetchArticleById",
  async (campersId, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/:id`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);
