import React from "react";
import CartItems from "../features/cart/CartItems";

interface Props {}

const CartsPage: React.FC<Props> = () => {
  return (
    <div>
      <CartItems />
    </div>
  );
};

export default CartsPage;
