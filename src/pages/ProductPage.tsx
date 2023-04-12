import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../stores/root.store";
import { Box, Button, Chip, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { addItemToCart } from "../stores/cart.store";
import { openSnackbar } from "../stores/app.store";

interface Props {}

const ProductPage: React.FC<Props> = () => {
  let { productId } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  console.log(products);
  const product = React.useMemo(
    () => products.find((product) => product.id === +(productId || 0)),
    [products, productId]
  );
  if (!product) {
    return <div>Not found</div>;
  }

  const { pictures, price, title, description, tags } = product;

  const handleAddCart = () => {
    dispatch((addItemToCart as any)(product));
    dispatch((openSnackbar as any)("Add cart successfully"));
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mt: 2,
        }}
      >
        <Box sx={{ mr: { xs: 0, md: 2 } }}>
          <img
            src={pictures[0]}
            width="400"
            height="400"
            alt="Product pictures"
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Box>
          <Typography variant="h4">{title}</Typography>
          <Typography fontWeight="bold" fontSize={20}>
            {price}$
          </Typography>
          <Typography>{description}</Typography>
          <Typography fontWeight="bold" sx={{ mt: 1 }}>
            Tags
          </Typography>
          <Box sx={{ mb: 3 }}>
            {tags.map((tag) => (
              <Chip key={tag} label={tag} sx={{ mr: 1 }} />
            ))}
          </Box>
          <Button
            onClick={handleAddCart}
            variant="outlined"
            startIcon={<ShoppingCart />}
          >
            Add to cart
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default ProductPage;
