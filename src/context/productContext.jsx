/* ----- STEPS ------ */
// 1. create a context 
// 2. provider 
// 3. consumer - to make it simple we use useContext Hook

import { createContext, useContext } from "react";

// create context
const AppContext = createContext();

// provider
const AppProvider = ({ children }) => {
    return <AppContext.Provider value="Raghav">
        {children}
    </AppContext.Provider>
};

// custom hook
const useProductContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };