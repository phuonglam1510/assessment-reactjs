import React, { useEffect } from "react";
import ProductList from "../features/products/ProductList";
import { useParams } from "react-router-dom";
import { fetchAllProducts } from "../stores/products.store";
import { store } from "../stores/root.store";

interface Props {}

const ProductsByCollectionPage: React.FC<Props> = () => {
  const { collection } = useParams();

  useEffect(() => {
    store.dispatch(fetchAllProducts({ collection }));
  }, [collection]);

  return <ProductList title={`Products for ${collection} collection`} />;
};

export default ProductsByCollectionPage;
