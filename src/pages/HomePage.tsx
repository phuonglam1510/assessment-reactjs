import React, { useEffect } from "react";
import CategorieList from "../features/categories/CategorieList";
import CollectionList from "../features/collections/CollectionList";
import ProductList from "../features/products/ProductList";
import { fetchAllProducts } from "../stores/products.store";
import { store } from "../stores/root.store";
import { Box } from "@mui/material";

interface Props {}

const HomePage: React.FC<Props> = () => {
  useEffect(() => {
    store.dispatch(fetchAllProducts({}));
  }, []);

  return (
    <Box>
      <CategorieList />
      <CollectionList />
      <ProductList />
    </Box>
  );
};

export default HomePage;
