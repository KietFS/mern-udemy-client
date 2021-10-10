import React, { useContext, useState } from "react";
import { CartContext } from "../../../../../contexts/CartContext";
import {
  CartInfoContainer,
  CartItemImage,
  CartInfoItem,
  EmptyText,
  KeepShoppingText,
  CartItemContent,
  CartItemLabel,
  CartItemLecture,
  CartItemPrice,
  CartTotalContainer,
  CartTotalContent,
  GoToCartButton,
} from "./styles";
import { Link } from "react-router-dom";

const CartInfo = ({ className }) => {
  //Contexts
  const {
    cartState: { carts },
  } = useContext(CartContext);

  const [open, setOpen] = useState(true);

  if (carts.length === 0) {
    return (
      <CartInfoContainer className={className}>
        <EmptyText>Your cart is empty</EmptyText>
        <KeepShoppingText>Keep shopping</KeepShoppingText>
      </CartInfoContainer>
    );
  } else {
    let total = 0;
    return (
      <CartInfoContainer
        className={className}
        onMouseLeave={() => setOpen(false)}
      >
        {carts.map((cart) => {
          total += cart.course.price;
          console.log(total);
          return (
            <CartInfoItem key={cart._id}>
              <CartItemImage>
                <img src={cart.course.imageUrl} alt="/" />
              </CartItemImage>
              <CartItemContent>
                <CartItemLabel>{cart.course.title}</CartItemLabel>
                <CartItemLecture>{cart.course.lecture}</CartItemLecture>
                <CartItemPrice>${cart.course.price - 1}.99</CartItemPrice>
              </CartItemContent>
            </CartInfoItem>
          );
        })}
        <CartTotalContainer>
          <CartTotalContent>Total: </CartTotalContent>
          <CartTotalContent>${total - carts.length * 0.01}</CartTotalContent>
        </CartTotalContainer>
        <Link to="/cart">
          <GoToCartButton>Go to cart</GoToCartButton>
        </Link>
      </CartInfoContainer>
    );
  }
};

export default CartInfo;
