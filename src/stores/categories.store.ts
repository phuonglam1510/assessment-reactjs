import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CategoryService } from "../services/category.service";

export interface CategoryListState {
  fetching: boolean;
  categories: string[];
  error?: string;
}

const initialState: CategoryListState = { fetching: false, categories: [] };

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const data = await new CategoryService().getAllCategories();
    return data;
  }
);

const categorieSlice = createSlice({
  name: "catetgories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.fetching = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.fetching = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.fetching = false;
        state.categories = [];
        state.error = action.error.message;
      });
  },
});

export default categorieSlice.reducer;
