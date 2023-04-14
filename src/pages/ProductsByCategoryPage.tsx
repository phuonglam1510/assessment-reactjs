import React, { useEffect } from "react";
import ProductList from "../features/products/ProductList";
import { useParams } from "react-router-dom";
import { fetchAllProducts } from "../stores/products.store";
import { store } from "../stores/root.store";

interface Props {}

const ProductsByCategoryPage: React.FC<Props> = () => {
  const { category } = useParams();

  useEffect(() => {
    store.dispatch(fetchAllProducts({ category }));
  }, [category]);

  return <ProductList title={`Products for ${category} category`} />;
};

export default ProductsByCategoryPage;
