import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import RootPage from "./pages/RootPage";
import ProductPage from "./pages/ProductPage";
import ProductsPage from "./pages/ProductsPage";
import { persistor, store } from "./stores/root.store";
import ProductsByCollectionPage from "./pages/ProductsByCollectionPage";
import ProductsByCategoryPage from "./pages/ProductsByCategoryPage";
import SnackbarController from "./features/core/SnackbarController";
import CartsPage from "./pages/CartsPage";
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "cart",
        element: <CartsPage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:productId",
        element: <ProductPage />,
      },
      {
        path: "collections/:collection",
        element: <ProductsByCollectionPage />,
      },
      {
        path: "categories/:category",
        element: <ProductsByCategoryPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
        <SnackbarController />
      </PersistGate>
    </Provider>
  );
}

export default App;
