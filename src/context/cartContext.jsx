import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cartReducer.js";

const CartContext = createContext();

const initialState = {
  cart: [],
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

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
    return useContext(CartContext);
};

export { CartProvider, useCartContext };
