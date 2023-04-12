import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ProductModel } from "../../models/Product.model";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../stores/cart.store";
import { openSnackbar } from "../../stores/app.store";

interface Props {
  product: ProductModel;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { id, title, price, pictures, description } = product;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCart = () => {
    dispatch((addItemToCart as any)(product));
    dispatch((openSnackbar as any)("Add item to cart successfully"));
  };

  return (
    <Card key={id} sx={{ mr: 1, minWidth: 240, mb: 1, maxWidth: 240 }}>
      <CardMedia
        component="img"
        height="194"
        image={pictures[0]}
        alt="Paella dish"
        sx={{ cursor: "pointer" }}
        onClick={() => navigate(`/products/${id}`)}
      />
      <CardContent>
        <Typography
          sx={{ cursor: "pointer" }}
          onClick={() => navigate(`/products/${id}`)}
          noWrap
          variant="h6"
          component="div"
        >
          {title}
        </Typography>
        <Typography
          textOverflow="ellipsis"
          overflow="clip"
          height={42}
          variant="body2"
          color="text.secondary"
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
        <IconButton aria-label="add to cart" onClick={addToCart}>
          <ShoppingCartIcon />
        </IconButton>
        <Typography variant="body2" fontWeight="bold" color="text.secondary">
          {price}$
        </Typography>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
