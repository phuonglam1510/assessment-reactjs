import React, { useEffect } from "react";
import ProductList from "../features/products/ProductList";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "../stores/products.store";

interface Props {}

const ProductsByCategoryPage: React.FC<Props> = () => {
  const { category } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts({ category }) as any);
  }, [category]);

  return (
    <div id="error-page">
      <ProductList title={`Products for ${category} category`} />
    </div>
  );
};

export default ProductsByCategoryPage;
