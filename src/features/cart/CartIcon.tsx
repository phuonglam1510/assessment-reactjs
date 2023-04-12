import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/root.store";

const CartIcon = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart);

  const handleOpenCart = () => {
    navigate("cart");
  };

  return (
    <IconButton
      size="large"
      aria-label="open cart"
      onClick={handleOpenCart}
      color="inherit"
    >
      <Badge badgeContent={cartItems.length} color="secondary">
        <ShoppingCart />
      </Badge>
    </IconButton>
  );
};
export default CartIcon;
