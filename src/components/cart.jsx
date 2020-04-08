//input ==> product, isInCart (true/false)
//output ==> onToggleCart

import React from "react";

const Cart = props => {
  return (
    <i
      onClick={() => props.onToggleCart(props.product)}
      className={
        props.isInCart
          ? "fas pointer fa-cart-plus"
          : "fas pointer fa-cart-plus gray"
      }
    ></i>
  );
};

export default Cart;
