import React, { useEffect } from "react";
import ProductList from "../features/products/ProductList";
import TagFilter from "../features/tags/TagFilter";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "../stores/products.store";

interface Props {}

const ProductsPage: React.FC<Props> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts({}) as any);
  }, []);

  return (
    <div id="error-page">
      <TagFilter />
      <ProductList />
    </div>
  );
};

export default ProductsPage;
