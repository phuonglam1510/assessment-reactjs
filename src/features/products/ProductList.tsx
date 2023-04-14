import { Box, Skeleton, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/root.store";
import ProductCard from "./ProductCard";
import { ProductListState } from "../../stores/products.store";

interface Props {
  title?: string;
}

const ProductList: React.FC<Props> = ({ title }) => {
  const { products, fetching } = useSelector<RootState, ProductListState>(
    (state) => state.products
  );

  return (
    <Box>
      <Typography variant="h4" sx={{ mt: 2 }}>
        {title || "Products"}
      </Typography>
      {fetching ? (
        <Box sx={{ display: "flex" }}>
          <Skeleton variant="rounded" width={200} sx={{ mr: 1 }} height={60} />
          <Skeleton variant="rounded" width={200} sx={{ mr: 1 }} height={60} />
          <Skeleton variant="rounded" width={200} height={60} />
        </Box>
      ) : (
        <Box sx={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
          {products.map((product, index) => (
            <ProductCard key={product.id} index={index} product={product} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ProductList;
