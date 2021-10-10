import React from "react";
import {
  CartCheckOutContainer,
  CartTotalContainer,
  CheckOutButton,
  SurplusContainer,
} from "./styles";
import { AuthContext } from "../../../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { CourseContext } from "../../../contexts/CourseContext";

const CartCheckOut = ({ carts, user }) => {
  //Contexts
  const { updateUser } = useContext(AuthContext);
  const { clearCarts } = useContext(CartContext);
  const { addCourse } = useContext(CourseContext);

  //Local State
  const [minusNumber, setMinusNumber] = useState();
  const [userName, setUserName] = useState();
  const [surplus, setUserSurplus] = useState();

  //Effect for the updateUser function
  useEffect(() => {
    updateUser({
      userName: userName,
      surplus: surplus,
      minusValue: minusNumber,
    });
  }, [userName, minusNumber, surplus]);

  //Calcultate the price
  let total = 0;

  if (carts.length === 0) return <></>;
  else {
    return (
      <CartCheckOutContainer>
        <CartTotalContainer>
          <h3 className="text-lg font-semibold text-gray-900">
            Total:{" "}
            {carts.map((cart) => {
              total = total + Number(cart.course.price + 1);
            })}
          </h3>
          <h3 className="text-xl font-bold text-gray-900">${total - 0.01}</h3>
        </CartTotalContainer>
        <SurplusContainer>
          <h3 className="text-sm font-semibold text-gray-900">Your Surplus:</h3>
          <h3 className="text-sm font-semibold text-purple-500">
            {user.surplus}.99$
          </h3>
        </SurplusContainer>
        <CheckOutButton
          onClick={() => {
            setMinusNumber(total);
            setUserName(user.userName.toString());
            setUserSurplus(Number(user.surplus));
            // eslint-disable-next-line no-lone-blocks
            {
              // eslint-disable-next-line array-callback-return
              carts.map((cart) => {
                addCourse(cart.course);
              });
            }
            clearCarts();
            alert("Congratulation, you got our courses");
          }}
        >
          Buy now
        </CheckOutButton>
      </CartCheckOutContainer>
    );
  }
};

export default CartCheckOut;
