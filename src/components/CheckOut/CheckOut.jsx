import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import FormCheckOut from "./FormCheckOut";

const CheckOut = ({
  spinner,
  setSpinner,
  subTotalPurchase,
  totalPurchase,
  shipping,
}) => {
  /*Spinner*/
  useEffect(() => {
    setSpinner(true);

    const timeoutId = setTimeout(() => {
      setSpinner(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  /*Function that formats numbers to look like this: 333.33*/
  const opcionesDeFormato = {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
  };

  /*Setting subTotalPurchase to look like "opcionesDeFormato" format*/
  const subTot = Number(subTotalPurchase);
  const subTotalPurchaseFormat = subTot.toLocaleString(
    "es-ES",
    opcionesDeFormato
  );

  /*Setting totalPurchase to look like "opcionesDeFormato" format*/
  const tot = Number(totalPurchase);
  const totalPurchaseFormat = tot.toLocaleString("es-ES", opcionesDeFormato);

  return (
    <div>
      {/*<div className={`${spinner ? "absolute" : "hidden"}`}>
        <Spinner />
      </div>*/}
      <div className="bodyCart container mx-auto px-2 xl:px-44 py-1 mt-4 mb-8 grid grid-cols-12">
        <div className="bodyCartInfo col-span-12 lg:col-span-8 overflow-hidden py-4">
          <FormCheckOut />
        </div>

        {/*Resumen de Compra*/}
        <div className="col-span-12 lg:col-span-4 mt-4 lg:mt-0 px-4 lg:pt-16 sm:px-40 lg:px-8 mb-4 lg:mb-2 order-first lg:order-none">
          <div className="px-4 pt-6 pb-4 border border-zinc-300/50 shadow-md rounded-lg">
            <h2 className="text-center font-bold mb-5">RESUMEN DE LA COMPRA</h2>
            {/*Price Detail*/}
            <div className="w-full flex flex-col justify-end mb-4 md:mb-0 pb-2">
              <div className="w-full flex justify-between pl-2 pr-4 pb-4 my-2 border-b border-zinc-300/50">
                <p className="font-normal text-lg text-zinc-60">Subtotal</p>
                <p className="font-normal text-lg text-zinc-800">
                  ${subTotalPurchaseFormat}
                </p>
              </div>
              <div className="w-full flex justify-between pl-2 pr-4 pb-4 my-2 border-b border-zinc-300/50">
                <p className="font-normal text-lg text-zinc-60">
                  Gastos de envío
                </p>
                <p className="font-normal text-lg text-zinc-800">
                  {subTotalPurchase >= 500 ? "Gratis" : `$${shipping}`}
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
                  to="/checkout"
                  type="button"
                  className="btnFinCompr py-1 md:py-2.5 px-1  md:px-5 w-9/12 md:w-full text-sm font-medium text-zinc-800 rounded-md border-2 border-gray-200"
                  onClick={(e) => {
                    handleFinishPurchase(e);
                  }}
                >
                  <p className="text-center">Finalizar Compra</p>
                </Link>
              </div>
              <div className="w-full flex justify-center mt-2 pl-2 pr-4">
                <Link
                  to="/"
                  type="button"
                  className="btnFinCompr py-1 md:py-2.5 px-1  md:px-5 w-9/12 md:w-full text-sm font-medium text-zinc-800 rounded-md"
                  onClick={(e) => {
                    handleFinishPurchase(e);
                  }}
                >
                  <p className="text-center">Seguir Comprando</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
