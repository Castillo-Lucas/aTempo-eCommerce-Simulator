import React, { useState } from "react";

const Payment = () => {
  const [deliveryMethod, setDeliveryMethod] = useState("Home");
  return (
    <div className="mb-4">
      <h2 className="indicadorCheckOut text-2xl font-semibold mb-2">
        3. <span className="text-zinc-800 font-normal text-xl">Pago</span>
      </h2>

      {/*Payment Method*/}
      <div className="w-full  flex my-4">
        {/*Credit Cart*/}
        <button
          to="/checkout"
          type="button"
          className={`${
            deliveryMethod === "TC"
              ? "bg-zinc-800 text-zinc-100"
              : "text-zinc-800 border-y-2 border-l-2 border-r border-gray-200"
          } py-1 md:py-2.5 px-1  md:px-5 w-9/12 md:w-full text-sm font-medium rounded-l-xl
           hover:bg-zinc-800 hover:text-zinc-100 hover:border-y-2 hover:border-r-2 hover:border-gray-800`}
        >
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1682771360/aTempo/tcIcon_oowiwd.png"
              alt=""
              className="h-5 mt-1"
            />
            <p className="text-center pt-1 ml-2">Tarjeta de Credito</p>
          </div>
        </button>

        {/*Debit Card*/}
        <button
          to="/checkout"
          type="button"
          className={`${
            deliveryMethod === "TD"
              ? "bg-zinc-800 text-zinc-100"
              : "text-zinc-800 border-y-2 border-r-2 border-gray-200 "
          } py-1 md:py-2.5 px-1  md:px-5 w-9/12 md:w-full text-sm font-medium  
           hover:bg-zinc-800 hover:text-zinc-100 hover:border-y-2 hover:border-r-2 hover:border-gray-800`}
          onClick={(e) => handleDeliveryMethod(e, "Store")}
        >
          <div className="flex justify-center">
          <img
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1682771360/aTempo/tdIcon_jns7pf.png"
              alt=""
              className="h-6 mt-1"
            />
            <p className="text-center pt-1.5 ml-2">Tarjeta de Débito</p>
          </div>
        </button>

        {/*Cash*/}
        <button
          to="/checkout"
          type="button"
          className={`${
            deliveryMethod === "Cash"
              ? "bg-zinc-800 text-zinc-100"
              : "text-zinc-800 border-y-2  border-r border-gray-200"
          } py-1 md:py-2.5 px-1  md:px-5 w-9/12 md:w-full text-sm font-medium rounded-r-xl
           hover:bg-zinc-800 hover:text-zinc-100 hover:border-y-2 hover:border-r-2 hover:border-gray-800`}
        >
          <div className="flex justify-center">
          <img
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1682771361/aTempo/chasIcon_otcoez.png"
              alt=""
              className="h-6 mt-"
            />
            <p className="text-center pt-1 ml-2">Efectivo</p>
          </div>
        </button>
      </div>

      <div className="p-4 border border-gray-200 shadow-md rounded-lg">
        <p className="text-zinc-600">Seleccioná tu método de pago</p>
      </div>
    </div>
  );
};

export default Payment;
