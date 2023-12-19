/* ----- STEPS ------ */
// 1. create a context
// 2. provider
// 3. consumer - to make it simple we use useContext Hook

import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer.js";

// create context
const AppContext = createContext();

const TOP_GADGETS = "/api/products"; // Endpoint

const API = `https://e-shop-api-steel.vercel.app${TOP_GADGETS}`;
// const API = `http://localhost:5001${TOP_GADGETS}`;

const initialState = {
  isLoading: false,
  isError: false,
  allProducts: [],
  featureProducts: [],
};

// provider
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      console.log(res.data.Products); // TESTED ✅
      const allProducts = await res.data.Products;
      // console.log(allProducts); // TESTED ✅
      dispatch({ type: "SET_API_DATA", payload: allProducts });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

// custom hook
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
