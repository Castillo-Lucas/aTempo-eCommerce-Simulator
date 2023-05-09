import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import ProductDetail from "./ProductDetail";
import { CartContext } from "../../context/CartContext";

const Cart = ({ showNavBar, setShowNavBar }) => {
  const {
    cart,
    setCart,
    opcionesDeFormato,
    handleQuantityUpdater,
    handleDelete,
    subTotalPurchaseFormat,
  } = useContext(CartContext);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    setShowNavBar(false);
  }, []);

  //ID Generator
  const generarID = () => {
    const Id1 = Math.random().toString(36).substring(2);
    const Id2 = Date.now().toString(36);
    return Id1 + Id2;
  };

  //Item Deleter
  const handleDeleteItem = (id) => {
    handleDelete(id);
  };

  //Quantity Updater
  const handleTotalPurchase = (currectProduct) => {
    handleQuantityUpdater(currectProduct);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-fit">
      {cart.length >= 1 ? (
        <div className="bodyCart container mx-auto px-2 xl:px-44 py-1 mt-4 mb-8 grid grid-cols-12">
          <div className="col col-span-12">
            <h2 className="font-bold my-5 px-4 lg:px-0">CARRITO DE COMPRAS</h2>
          </div>
          <div className="bodyCartInfo col-span-12 lg:col-span-8 h-96 lg:h-fit overflow-auto">
            <div className="hidden sm:block sm:pl-28 2xl:pl-28 border-b border-zinc-300/70 pb-4">
              <ul className="flex">
                <li className="text-xs font-semibold 2xl:pl-4">PRODUCTO</li>
                <li className="text-xs font-semibold sm:ml-36 md:ml-40 lg:ml-36 xl:ml-32 2xl:ml-40 md:pl-2">
                  PRECIO
                </li>
                <li className="text-xs font-semibold sm:ml-12 md:ml-20 lg:ml-14 xl:ml-12 2xl:ml-20 lg:pl-2">
                  CANTIDAD
                </li>
                <li className="text-xs font-semibold sm:ml-8 md:ml-16 lg:ml-12 xl:ml-6 2xl:ml-14 md:pl-2 2xl:pl-5">
                  SUBTOTAL
                </li>
              </ul>
            </div>

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
                windowWidth={windowWidth}
              />
            ))}
          </div>

          <div className="col-span-12 lg:col-span-4 mt-4 lg:mt-0 px-4 sm:px-40 lg:px-8  order-first lg:order-none">
            <div className="px-4 pt-6 pb-4 border border-zinc-300/50 shadow-md">
              <h2 className="text-center font-bold mb-5">
                RESUMEN DE LA COMPRA
              </h2>
              {/*Price Detail*/}
              <div className="w-full flex flex-col justify-end mb-4 md:mb-0 pb-2">
                <div className="w-full flex justify-between pl-2 pr-4 pb-4 my-2 border-b border-zinc-300/50">
                  <p className="font-normal text-lg text-zinc-60">Subtotal</p>
                  <p className="font-normal text-lg text-zinc-800">
                    ${subTotalPurchaseFormat}
                  </p>
                </div>
                <div className="w-full flex justify-between pl-2 pr-4 pb-4 my-2">
                  <p className=" font-bold text-lg text-zinc-60">Total</p>
                  <p className="font-bold text-lg text-zinc-800">
                    ${subTotalPurchaseFormat}
                  </p>
                </div>
              </div>

              {/*Finalize Purchase*/}
              <div className="w-full">
                <div className="w-full flex justify-center pl-2 pr-4">
                  <Link
                    to="/checkout"
                    type="button"
                    className="btnFinCompr py-1 md:py-2.5 px-1  md:px-5 w-9/12 md:w-full text-sm font-medium text-zinc-800 rounded-md border-2 border-gray-200"
                  >
                    <p className="text-center">Ir al Checkout</p>
                  </Link>
                </div>
                <div className="w-full flex justify-between pl-6 pt-2">
                  <p className="font-thin text-sm text-zinc-60">
                    *Los gastos de envío seran calculados al finalizar la compra
                  </p>
                </div>
                <div className="w-full flex justify-center mt-2 pl-2 pr-4">
                  <Link
                    to="/"
                    type="button"
                    className="btnFinCompr py-1 md:py-2.5 px-1  md:px-5 w-9/12 md:w-full text-sm font-medium text-zinc-800 rounded-md"
                  >
                    <p className="text-center">Seguir Comprando</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bodyCart emptyCart container mx-auto px-2 xl:px-44 py-1 mt-4 mb-8 flex justify-center bg-transparent">
          <div className="mt-10">
            <img
              className="lg:h-96"
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1682515820/aTempo/emptyCart_dmu7uq.png"
              alt=""
            />

            <p className="text-center text-lg font-bold mb-10">CARRITO VACIO</p>

            <div className="w-full sm:px-44">
              <div className="w-full flex justify-center pl-2 pr-4">
                <Link
                  to="/"
                  type="button"
                  className="btnFinCompr py-1 md:py-2.5 px-1  md:px-5 w-9/12 md:w-full text-sm font-medium text-zinc-800 rounded-md border-2 border-zinc-200"
                >
                  <p className="text-center">Seguir Comprando</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
