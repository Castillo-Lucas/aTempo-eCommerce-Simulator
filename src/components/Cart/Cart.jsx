import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import Logo from "../Logo";
import "../../App.css";
import ProductDetail from "../NavBar/ProductDetail";

const Cart = ({
  spinner,
  setSpinner,
  setShowNavBar,
  cart,
  setCart,
  totalPurchase,
  setTotalPurchase,
  showNavBar,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  /*Spinner*/
  useEffect(() => {
    setShowNavBar(false);
    setSpinner(true);

    const timeoutId = setTimeout(() => {
      setSpinner(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  /*<div className={`${spinner ? "absolute" : "hidden"}`}>
        <Spinner />
  </div>*/

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
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
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
      {/*Header*/}
      <div className="bg-zinc-800 sticky top-0 z-20">
        <div className="bg-zinc-900 xl:px-44 py-2.5 h-1 border-b border-zinc-600"></div>
        <div className="container mx-auto bg-zinc-800 px-2 xl:px-44 py-1">
          <div className="flex justify-between">
            <Logo />
            <div className="flex">
              <svg
                width="35px"
                height="35px"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="3"
                stroke="#F4F4F5"
                fill="none"
                className="my-auto md:mr-2"
              >
                <path d="M31.74,7.19,13.36,14.85a1,1,0,0,0-.62.93V32.11h0A22.89,22.89,0,0,0,23.93,51.78l8.18,4.86,8.06-4.85a22.87,22.87,0,0,0,11.09-19.6V14.84a1,1,0,0,0-.65-.94L32.48,7.18A1,1,0,0,0,31.74,7.19Z" />
                <polyline points="22.01 33.5 29.44 39.12 42.56 20.69" />
              </svg>
              <p className="text-zinc-100 my-auto text-sm md:text-lg">
                Sitio seguro
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Body*/}
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
            <div className="px-4 py-8 bg-zinc-50 border border-zinc-300/50 shadow-md">
              <h2 className="text-center font-bold mb-5">
                RESUMEN DE LA COMPRA
              </h2>
              {/*Price Detail*/}
              <div className="w-full flex flex-col justify-end mb-4 md:mb-0 pb-2">
                <div className="w-full flex justify-between pl-2 pr-4 pb-4 my-2 border-b border-zinc-300/50">
                  <p className="font-normal text-lg text-zinc-60">Subtotal</p>
                  <p className="font-normal text-lg text-zinc-800">
                    ${totalPurchaseFormat}
                  </p>
                </div>
                <div className="w-full flex justify-between pl-2 pr-4 pb-4 my-2 border-b border-zinc-300/50">
                  <p className="font-normal text-lg text-zinc-60">
                    Gastos de envío
                  </p>
                  <p className="font-normal text-lg text-zinc-800">
                    {totalPurchase >= 500 ? "Gratis" : "$20"}
                  </p>
                </div>
                <div className="w-full flex justify-between pl-2 pr-4 pb-4 my-2">
                  <p className=" font-bold text-lg text-zinc-60">Total</p>
                  <p className="font-bold text-lg text-zinc-800">
                    ${totalPurchaseFormat}
                  </p>
                </div>
              </div>

              {/*Finalize Purchase*/}
              <div className="w-full">
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
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bodyCart emptyCart container mx-auto px-2 xl:px-44 py-1 mt-4 mb-8 flex justify-center">
          <div className="mt-10">
            <img
              className="lg:h-96"
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1682477465/aTempo/preview_tfdpse.png"
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

      {/*Footer*/}
      <div className="bg-zinc-800 sticky top-0 z-20">
        <div className="container mx-auto bg-zinc-800 px-2 xl:px-44 md:py-1">
          <div className="flex">
            <Logo />

            <p className="text-zinc-100 my-auto h-8 md:h-14 pt-1.5 md:pt-3 pl-4 ml-4 text-sm md:text-lg border-l ">
              Sitio seguro
            </p>
          </div>
        </div>
      </div>
      {/*Firma*/}
      <div className="px-0 md:px-4 pb-2 py-1 bg-zinc-900 border-t border-zinc-600 flex justify-center">
        <span className=" text-zinc-400 text-sm md:text-base">
          © 2023 <a href="https://flowbite.com/">aTempo</a>. Desarollado por{" "}
          <a
            href="https://www.linkedin.com/in/lucas-castillo-20a331193/"
            target={"_blank"}
            className="hover:text-zinc-100"
          >
            Lucas Castillo
          </a>
        </span>
      </div>
    </div>
  );
};

export default Cart;
