import React, { useState, useEffect } from "react";
import "../../App.css";
import ProductDetail from "./ProductDetail";
import { Link } from "react-router-dom";

const DrawerRight = ({
  drawerTwo,
  handleDrawerTwo,
  cart,
  setCart,
  totalPurchase,
  showNavBar,
}) => {
  /*ID Generator*/
  const generarID = () => {
    const Id1 = Math.random().toString(36).substring(2);
    const Id2 = Date.now().toString(36);
    return Id1 + Id2;
  };

  /*Item Deleter*/
  const handleDeleteItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const handleTotalPurchase = (currectProduct) => {
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

  /*Function that formats numbers to look like this: 333.33*/
  const opcionesDeFormato = {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
  };

  /*Setting totalPurchase to look like "opcionesDeFormato" format*/
  const tot = Number(totalPurchase);
  const totalPurchaseFormat = tot.toLocaleString("es-ES", opcionesDeFormato);

  const handleFinishPurchase = (e) => {
    const timeoutId = setTimeout(() => {
      handleDrawerTwo(e);
    }, 1);

    return () => {
      clearTimeout(timeoutId);
    };
  };



  return (
    <div
      className={`fixed -right-96 top-0 z-10 h-screen p-4  bg-zinc-50 md:pt-36 ${
        drawerTwo ? "fixed DrawerRightIn" : "hidden"
      }`}
    >
      <button
        type="button"
        data-drawer-hide="drawer-example"
        aria-controls="drawer-example"
        className="text-gray-400  btnCloseDrawer bg-transparent hover:bg-gray-200
             hover:text-gray-900 rounded-lg text-sm p-1.5  inline-flex items-center"
        onClick={(e) => {
          handleDrawerTwo(e);
        }}
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Close menu</span>
      </button>

      <p className="text-base font-bold text-start text-zinc-600 pl-2">
        CARRITO
      </p>

      <div className="w-full h-full pt-4">
        {cart.length >= 1 ? (
          <div className="fullCart">
            {/*Product Detail*/}
            <div className="w-full h-2/4 md:h-4/6 overflow-auto border-b">
              {cart.map((currentProduct) => (
                <ProductDetail
                  key={generarID()}
                  currentProduct={currentProduct}
                  cart={cart}
                  setCart={setCart}
                  handleDeleteItem={handleDeleteItem}
                  handleTotalPurchase={handleTotalPurchase}
                  opcionesDeFormato={opcionesDeFormato}
                  showNavBar={showNavBar}
                />
              ))}
            </div>

            {/*Price Detail*/}
            <div className="w-full flex flex-col justify-end md:h-1/6 mb-4 md:mb-0 pb-2">
              <div className="w-full flex justify-between pl-2 pr-4">
                <p className="font-normal text-lg text-zinc-60">Subtotal</p>
                <p className="font-normal text-lg text-zinc-800">
                  ${totalPurchaseFormat}
                </p>
              </div>
              <div className="w-full flex justify-between pl-2 pr-4">
                <p className="font-medium text-lg text-zinc-60">Total</p>
                <p className="font-medium text-lg text-zinc-800">
                  ${totalPurchaseFormat}
                </p>
              </div>
            </div>

            {/*Finalize Purchase*/}
            <div className="w-full md:h-fit">
              <div className="w-full flex justify-center pl-2 pr-4">
                <Link
                  to="/cart"
                  type="button"
                  className="btnFinCompr py-1 md:py-2.5 px-1  md:px-5 w-9/12 md:w-full text-sm font-medium text-zinc-800 rounded-md border-2 border-gray-200"
                  onClick={(e) => {
                    handleFinishPurchase(e);
                  }}
                >
                  <p className="text-center">Finalizar Compra</p>
                </Link>
              </div>
              <div className="w-full flex justify-between pl-6 pt-2">
                <p className="font-thin text-sm text-zinc-60">
                  *Los gastos de envío seran calculados al finalizar la compra
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="pt-48 pl-14 md:pt-60 2xl:pt-72">
            {/*Empty Cart*/}
            <svg
              width="80px"
              height="80px"
              viewBox="0 0 24 24"
              fill="#52525B"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 2C1.44772 2 1 2.44772 1 3C1 3.55228 1.44772 4 2 4H2.47241C2.92336 4 3.31852 4.30182 3.43717 4.73688L3.85342 6.26312L6 14.1339V16C6 16.6935 6.23533 17.3321 6.63048 17.8402C6.23824 18.2816 6 18.863 6 19.5C6 20.8807 7.11929 22 8.5 22C9.88071 22 11 20.8807 11 19.5C11 19.3288 10.9828 19.1616 10.95 19H14.05C14.0172 19.1616 14 19.3288 14 19.5C14 20.8807 15.1193 22 16.5 22C17.8807 22 19 20.8807 19 19.5C19 19.1715 18.9366 18.8578 18.8215 18.5704C18.934 18.4086 19 18.212 19 18C19 17.4477 18.5523 17 18 17H16.5H9C8.44772 17 8 16.5523 8 16V15H18.236C19.1381 15 19.9285 14.3962 20.1657 13.5258L21.8007 7.52583C22.1473 6.25364 21.1896 5 19.871 5H5.58198L5.3667 4.21065C5.01074 2.90547 3.82526 2 2.47241 2H2ZM16.5 19C16.2239 19 16 19.2239 16 19.5C16 19.7761 16.2239 20 16.5 20C16.7761 20 17 19.7761 17 19.5C17 19.2239 16.7761 19 16.5 19ZM18.236 13H7.7638L6.12743 7H19.871L18.236 13ZM8.5 19C8.22386 19 8 19.2239 8 19.5C8 19.7761 8.22386 20 8.5 20C8.77614 20 9 19.7761 9 19.5C9 19.2239 8.77614 19 8.5 19Z"
              />
            </svg>
            <p className="text-base font-medium text-zinc-600 pl-16">
              Tu carrito esta vacío
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DrawerRight;
