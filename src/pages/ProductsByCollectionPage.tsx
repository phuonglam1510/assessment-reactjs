import React, { useEffect } from "react";
import ProductList from "../features/products/ProductList";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "../stores/products.store";

interface Props {}

const ProductsByCollectionPage: React.FC<Props> = () => {
  const { collection } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts({ collection }) as any);
  }, [collection]);

  return (
    <div id="error-page">
      <ProductList title={`Products for ${collection} collection`} />
    </div>
  );
};

export default ProductsByCollectionPage;
