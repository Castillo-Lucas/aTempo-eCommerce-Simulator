import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) ?? []
  );
  const [subTotalPurchase, setSubTotalPurchase] = useState();
  const [shipping, setShipping] = useState(0);
  const [totalPurchase, setTotalPurchase] = useState();
  const [orderId, setOrderId] = useState();

  //Cart Updater
  const handleAddtoCart = (currentProduct) => {
    const itemIndex = cart.findIndex((item) => item.id === currentProduct.id);

    if (itemIndex === -1) {
      // If the product doesnt exist in the cart, its added with the amount indicated in the counter
      setCart([...cart, { ...currentProduct }]);
    } else {
      // If the product exist in the cart, its quantity is updated
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += currentProduct.quantity;
      setCart(updatedCart);
    }
  };

  //Quantity Updater
  const handleQuantityUpdater = (currectProduct) => {
    const itemIndex = cart.findIndex((item) => item.id === currectProduct.id);

    if (itemIndex === -1) {
      // If the product doesnt exist in the cart, its added with the amount indicated in the counter
      setCart([...cart, { ...currentProduct }]);
    } else {
      // If the product exist in the cart, its quantity is updated
      const updatedCart = [...cart];
      setCart(updatedCart);
    }
  };

  //Item Deleter
  const handleDelete = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  /*Getting sub total purchase*/
  useEffect(() => {
    const arrtotalPirce = cart.map((prod) => prod.totalPurchase);
    const totalPrice = arrtotalPirce.reduce(
      (acumulador, valorActual) => acumulador + valorActual,
      0
    );
    setSubTotalPurchase(totalPrice);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  /*Getting shipping price*/
  useEffect(() => {
    if (subTotalPurchase === 0) {
      setShipping(0);
    } else if (subTotalPurchase >= 1 && subTotalPurchase <= 499) {
      setShipping(20);
    } else if (subTotalPurchase >= 500) {
      setShipping(0);
    }
  }, [subTotalPurchase, cart]);

  /*Getting total purchase*/
  useEffect(() => {
    setTotalPurchase(subTotalPurchase + shipping);
  }, [subTotalPurchase, shipping]);

  //Function that formats numbers to look like this: 333.33
  const opcionesDeFormato = {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
  };

  //Setting subTotalPurchase to look like "opcionesDeFormato" format
  const subTot = Number(subTotalPurchase);
  const subTotalPurchaseFormat = subTot.toLocaleString(
    "es-ES",
    opcionesDeFormato
  );

  let data = {
    cart,
    setCart,
    subTotalPurchase,
    setSubTotalPurchase,
    shipping,
    setShipping,
    totalPurchase,
    setTotalPurchase,
    orderId,
    setOrderId,
    handleAddtoCart,
    handleQuantityUpdater,
    handleDelete,
    opcionesDeFormato,
    subTotalPurchaseFormat,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
