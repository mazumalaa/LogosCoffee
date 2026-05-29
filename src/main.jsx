// =====> Imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "./styles/global.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { CartProvider } from "./context/CartContext";

// =====> My-setup
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
)