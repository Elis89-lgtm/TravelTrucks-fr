import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const homeDataAPI = axios.create({
  baseURL: " https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
});

export const fetchHomeCampers = createAsyncThunk(
  "homeData/fetchHomeCampers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await homeDataAPI.get(
        "/catalog?page=1&perPage=4&sortBy=rate&sortOrder=desc"
      );
      return response.data["data"]["data"];
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
