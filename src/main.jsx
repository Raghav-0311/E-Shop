import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from '@auth0/auth0-react';
import { AppProvider } from "./context/productContext.jsx";
import { FilterContextProvider } from "./context/filterContext.jsx";
import { CartProvider } from "./context/cartContext.jsx";
// import 'dotenv/config'; // UNKNOWN ERROR 
// const domain = process.env.DOMAIN; // process is not defined
// const clientId = process.env.CLIENT_ID; // process is not defined

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-zoj6c1mip8xqabpq.us.auth0.com"
    clientId="NhIr5E7jWGggwDDJScNKFaIdQcVj45JQ"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </Auth0Provider>
);
