import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [carrito, setCarrito] = useState("probando useContext");

  const agregarAlCarrito = () => {};
  const saludar = () => {};

  let data = { carrito, agregarAlCarrito, saludar };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
