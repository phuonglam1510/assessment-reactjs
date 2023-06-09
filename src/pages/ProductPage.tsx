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
  const product = React.useMemo(
    () => products.find((product) => product.id === +(productId || 0)),
    [products, productId]
  );
  if (!product) {
    return <Box>Not found</Box>;
  }

  const { pictures, price, title, description, tags } = product;

  const handleAddCart = () => {
    dispatch(addItemToCart(product));
    dispatch(openSnackbar("Add cart successfully"));
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: { xs: "wrap", sm: "nowrap" },
          mt: 2,
        }}
      >
        <Box sx={{ mr: { xs: 0, sm: 2 }, width: { xs: "100vw", sm: 400 } }}>
          <img
            src={pictures[0]}
            width="100%"
            height="100%"
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
    </Box>
  );
};

export default ProductPage;
