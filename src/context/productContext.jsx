/* ----- STEPS ------ */
// 1. create a context 
// 2. provider 
// 3. consumer - to make it simple we use useContext Hook

import axios from "axios";
import { createContext, useContext, useEffect } from "react";

// create context
const AppContext = createContext();

const TOP_GADGETS = "/top_e_gadgets.json"; // Endpoint

const API = `https://raghav-0311.github.io/eShop-API${TOP_GADGETS}`;

// provider
const AppProvider = ({ children }) => {

    const getProducts = async (url) => {
        const res = await axios.get(url);
        // console.log(res.data.data); // TESTED ✅
        const allProducts = await res.data.data;
        // console.log(allProducts); // TESTED ✅
    }

    useEffect(() => {
        getProducts(API);
    }, []);

    return <AppContext.Provider value="Raghav">
        {children}
    </AppContext.Provider>
};

// custom hook
const useProductContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };