import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesStore from "./categories.store";
import collectionsStore from "./collections.store";
import productsStore from "./products.store";
import cartStore from "./cart.store";
import appStore from "./app.store";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import tagsStore from "./tags.store";

const rootReducer = combineReducers({
  categories: categoriesStore,
  collections: collectionsStore,
  tags: tagsStore,
  products: productsStore,
  cart: cartStore,
  app: appStore,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
