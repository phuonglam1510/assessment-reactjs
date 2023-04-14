import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../models/Product.model";
import {
  ProductFilterParams,
  ProductService,
} from "../services/product.service";

export interface ProductListState {
  fetching: boolean;
  products: ProductModel[];
  error?: string;
}

const initialState: ProductListState = { fetching: false, products: [] };

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAll",
  async (filter: ProductFilterParams) => {
    const data = await new ProductService().getProducts(filter);
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state, action) => {
        state.fetching = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.fetching = false;
        state.products = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.fetching = false;
        state.products = [];
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
