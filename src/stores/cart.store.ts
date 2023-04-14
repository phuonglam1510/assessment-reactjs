import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../models/Product.model";

export type CartState = { product: ProductModel; quantity: number }[];

const initialState: CartState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (
      state: Draft<CartState>,
      action: PayloadAction<ProductModel>
    ) => {
      const product = action.payload;
      const item = state.find((item) => item.product.id === product.id);
      if (item) {
        item.quantity = item.quantity + 1;
      } else {
        state.push({ product, quantity: 1 });
      }
    },
    updateCartItem: (
      state: Draft<CartState>,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const item = state.find((item) => item.product.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    removeItemFromCart: (
      state: Draft<CartState>,
      action: PayloadAction<number>
    ) => {
      const productId = action.payload;
      return state.filter(({ product }) => product.id !== productId);
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateCartItem } =
  cartSlice.actions;

export default cartSlice.reducer;
