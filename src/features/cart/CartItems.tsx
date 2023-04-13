import {
  Box,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores/root.store";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeItemFromCart, updateCartItem } from "../../stores/cart.store";

interface Props {}

const CartItems: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart);

  const removeItem = (productId: number) => {
    dispatch((removeItemFromCart as any)(productId));
  };

  const handleChange = (productId: number, value: number) => {
    dispatch((updateCartItem as any)({ id: productId, quantity: value }));
  };

  return (
    <div>
      <Typography variant="h4" sx={{ mt: 2 }}>
        Carts
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {items.map(({ product, quantity }) => (
          <Card
            key={product.id}
            sx={{
              mb: 1,
              height: { xs: 140, sm: 160 },
              display: "flex",
              width: "100%",
              padding: 1,
            }}
          >
            <CardMedia
              component="img"
              sx={{ display: "inline-block", width: { xs: 120, sm: 200 } }}
              image={product.pictures[0]}
              alt="Paella dish"
            />
            <CardContent sx={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ maxWidth: { xs: 120, sm: 300 } }}>
                  <Typography
                    sx={{
                      fontSize: { xs: 16, sm: 18 },
                      maxHeight: { xs: 44, sm: 100 },
                      overflow: "hidden",
                    }}
                    fontWeight="bold"
                    component="div"
                  >
                    {product.title}
                  </Typography>
                  <Typography noWrap component="div">
                    {product.categories[0]}
                  </Typography>
                  <Typography noWrap component="div">
                    Unit price: {product.price}$
                  </Typography>
                </Box>
                <FormControl>
                  <InputLabel id="quantity-label">Quantity</InputLabel>
                  <Select
                    labelId="quantity-label"
                    value={quantity}
                    label="Quantity"
                    sx={{ minWidth: 80 }}
                    onChange={(event) =>
                      handleChange(product.id, +event.target.value)
                    }
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <IconButton
                aria-label="add to cart"
                onClick={() => removeItem(product.id)}
                sx={{ mt: 2 }}
              >
                <DeleteIcon />
              </IconButton>
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default CartItems;
