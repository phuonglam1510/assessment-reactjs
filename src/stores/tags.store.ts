import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TagService } from "../services/tag.service";

export interface TagListState {
  fetching: boolean;
  tags: string[];
  error?: string;
}

const initialState: TagListState = { fetching: false, tags: [] };

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const data = await new TagService().getAllTags();
  return data;
});

const tagSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state, action) => {
        state.fetching = true;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.fetching = false;
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.fetching = false;
        state.tags = [];
        state.error = action.error.message;
      });
  },
});

export default tagSlice.reducer;
