import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer.js";

const CartContext = createContext();

// Get Data From User's Browser Local Storage
const getLocalCartData = () => {
  let localCartData = localStorage.getItem("User_eShop_Cart");
  if (localCartData == []) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

const initialState = {
  //   cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 5000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (_id, color, quantity, singleProduct) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { _id, color, quantity, singleProduct },
    });
  };

  // Increment the Product
  const setQuantityIncrement = (_id) => {
    dispatch({ type: "SET_INCREMENT", payload: _id });
  };

  // Decrement the Product
  const setQuantityDecrement = (_id) => {
    dispatch({ type: "SET_DECREMENT", payload: _id });
  };

  // Remove Individual Item from cart
  const removeItem = (_id) => {
    dispatch({ type: "REMOVE_ITEM", payload: _id });
  };

  // Add Data to User's Browser Local Storage
  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM"});
    localStorage.setItem("User_eShop_Cart", JSON.stringify(state.cart));
  }, [state.cart]);

  // Clear Cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setQuantityDecrement,
        setQuantityIncrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
