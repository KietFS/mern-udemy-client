import { createContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";
import setAuthToken from "../utils/setAuthToken";

import { useState } from "react";
import axios from "axios";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "./constants";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  //State

  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: null,
    carts: [],
    cartLoading: true,
  });

  //Get all carts

  const getCarts = async () => {
    try {
      const response = await axios.get(`${apiUrl}/carts`);
      if (response.data.success) {
        dispatch({
          type: "CARTS_LOADED_SUCCESS",
          payload: response.data.carts,
        });
      } else {
        console.log("Loaded fail");
      }
    } catch (error) {
      setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
      dispatch({ type: "CARTS_LOADED_FAIL" });
    }
  };

  //Add cart
  const addCart = async (newCart) => {
    try {
      const response = await axios.post(`${apiUrl}/carts`, newCart);
      if (response.data.success) {
        dispatch({ type: "ADD_CART", payload: response.data.cart });
        getCarts();
        return response.data;
      } else {
        console.log("U failed");
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server Error" };
    }
  };

  //Delete cart
  const deleteCart = async (title) => {
    try {
      const response = await axios.delete(`${apiUrl}/carts`, { title });
      if (response.data.success) {
        dispatch({ type: "DELETE_CART", payload: title });
        getCarts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clearCarts = async () => {
    try {
      const response = await axios.delete(`${apiUrl}/carts/allcarts`);
      if (response.data.success) {
        dispatch({ type: "CLEAR_CARTS" });
      }
    } catch (error) {
      console.log(error);
    }
  };
  //Cart context data
  useEffect(() => {
    getCarts();
  }, [cartState.cartLoading]);

  const cartContextData = {
    cartState,
    getCarts,
    addCart,
    deleteCart,
    clearCarts,
  };

  return (
    <CartContext.Provider value={cartContextData}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
