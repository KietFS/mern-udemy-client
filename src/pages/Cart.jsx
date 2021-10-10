import React from "react";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import SingleCart from "../components/Cart/SingleCart";
import CartBanner from "../components/Cart/CartBanner";
import CartCheckOut from "../components/Cart/CartCheckOut";
import { AuthContext } from "../contexts/AuthContext";
import EmptyCart from "../images/empty-cart.jpg";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";
import SliderComponent from "../components/Home/Slider";

export const CartWrapper = tw.div`w-4/5 px-10 overflow-x-hidden mx-auto  mt-20`;

export const CartBodyWrapper = tw.div`flex justify-between `;

export const CartBodyLeft = tw.div` w-full `;

export const CartBodyRight = tw.div`w-1/4`;

export const EmptyCartContainer = tw.div`justify-center shadow-md mt-10 py-8`;

const Cart = () => {
  const {
    cartState: { carts },
  } = useContext(CartContext);
  const {
    authState: { user },
  } = useContext(AuthContext);

  if (carts.length > 0)
    return (
      <>
        <Header />
        <CartBanner />
        <CartWrapper>
          <h3 className="text-lg font-semibold text-black ">
            {carts.length} Courses in Carts
          </h3>

          <CartBodyWrapper>
            <CartBodyLeft>
              {carts.map((cart) => {
                return (
                  <SingleCart
                    title={cart.course.title}
                    lecture={cart.course.lecture}
                    price={cart.course.price}
                    rate={cart.course.rate}
                    imageUrl={cart.course.imageUrl}
                  />
                );
              })}
            </CartBodyLeft>

            <CartBodyRight>
              <CartCheckOut carts={carts} user={user} />
            </CartBodyRight>
          </CartBodyWrapper>

          <div className="mt-20">
            <h1 className="text-2xl font-bold text-gray-900">
              {" "}
              You might also like{" "}
            </h1>
            <SliderComponent type={carts[0].course.topic} />
          </div>
        </CartWrapper>

        <Footer />
      </>
    );
  else
    return (
      <>
        <Header />
        <CartBanner />
        <CartWrapper>
          <h3 className="text-lg font-semibold text-black ">
            {carts.length} Courses in Carts
          </h3>
          <EmptyCartContainer>
            <img src={EmptyCart} alt="empty-cart" className="mx-auto" />
            <p className="text-sm font-semibold text-center text-gray-900 ">
              Your cart is empty. Keep shopping to find a course!
            </p>
            <Link to="/">
              <button className="block w-1/6 px-4 py-2 mx-auto mt-10 font-semibold text-center text-white bg-purple-500">
                Keep shopping
              </button>
            </Link>
          </EmptyCartContainer>
        </CartWrapper>

        <Footer />
      </>
    );
};

export default Cart;
