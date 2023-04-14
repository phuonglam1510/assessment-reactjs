import React, { useEffect } from "react";
import ProductList from "../features/products/ProductList";
import TagFilter from "../features/tags/TagFilter";
import { fetchAllProducts } from "../stores/products.store";
import { store } from "../stores/root.store";
import { Box } from "@mui/material";

interface Props {}

const ProductsPage: React.FC<Props> = () => {
  useEffect(() => {
    store.dispatch(fetchAllProducts({}));
  }, []);

  return (
    <Box>
      <TagFilter />
      <ProductList />
    </Box>
  );
};

export default ProductsPage;
