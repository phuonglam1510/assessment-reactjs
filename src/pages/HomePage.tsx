import React, { useEffect } from "react";
import CategorieList from "../features/categories/CategorieList";
import CollectionList from "../features/collections/CollectionList";
import ProductList from "../features/products/ProductList";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "../stores/products.store";

interface Props {}

const HomePage: React.FC<Props> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts({}) as any);
  }, []);

  return (
    <div>
      <CategorieList />
      <CollectionList />
      <ProductList />
    </div>
  );
};

export default HomePage;
