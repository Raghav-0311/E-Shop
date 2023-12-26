import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/filterReducer.js";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
};

export const FilterContextProvider = ({ children }) => {
    const { allProducts } = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState);

    // To set the grid view 
    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW"})
    }

    // To set the list view
    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" })
    }

    // To sort data acc to price
    const sorting = (event) => {
        let userValue = event.target.value;
        dispatch({ type: "GET_SORT_VALUE", payload: userValue });
    }

    // To load all products for Grid & List Views
    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: allProducts });
    }, [allProducts]);

    // To Sort The Products
    useEffect(() => {
        dispatch({ type: "SORTING_PRODUCTS" });
    }, [allProducts, state.sorting_value]);

  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
