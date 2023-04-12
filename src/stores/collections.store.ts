import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CollectionService } from "../services/collection.service";

export interface CollectionListState {
  fetching: boolean;
  collections: string[];
  error?: string;
}

export const fetchCollections = createAsyncThunk(
  "collections/fetch",
  async () => {
    const data = await new CollectionService().getAllCollections();
    return data;
  }
);

const collectionsSlice = createSlice<CollectionListState, any>({
  name: "collections",
  initialState: { fetching: false, collections: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCollections.pending, (state, action) => {
        state.fetching = true;
      })
      .addCase(fetchCollections.fulfilled, (state, action) => {
        state.fetching = false;
        state.collections = action.payload;
      })
      .addCase(fetchCollections.rejected, (state, action) => {
        state.fetching = false;
        state.collections = [];
        state.error = action.error.message;
      });
  },
});

export default collectionsSlice.reducer;
