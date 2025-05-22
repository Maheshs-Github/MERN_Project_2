import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ShopContextProvider from "./Context/ShopContextProvider";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
  // </StrictMode>
);
