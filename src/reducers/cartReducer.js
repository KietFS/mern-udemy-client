export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        carts: [...state.carts, payload],
      };

    case "SHOW_SINGLE_CART":
      return {
        ...state,
        cart: payload,
      };

    case "CARTS_LOADED_SUCCESS":
      return {
        ...state,
        carts: payload,
        cartLoading: false,
      };

    case "CARTS_LOADED_FAIL":
      return {
        ...state,
        carts: [],
        cartLoading: false,
      };

    case "DELETE_CART":
      return {
        ...state,
        carts: state.carts.filter((cart) => cart._title !== payload),
      };

    case "CLEAR_CARTS":
      return {
        ...state,
        carts: [],
      };

    default:
      return state;
  }
};
