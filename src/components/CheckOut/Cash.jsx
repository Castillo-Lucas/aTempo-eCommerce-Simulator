import React, { useState, useEffect } from "react";

const Cash = ({
  paymentInfo,
  setPaymentInfo,
  identificationInfo,
  setConfirm,
}) => {
  console.log(identificationInfo);

  const [paymentType, setPaymentType] = useState("cash");

  const handleContinuar = (e, data) => {
    e.preventDefault();

    const generarID = () => {
      const Id1 = Math.random().toString(36).substring(2);
      const Id2 = Date.now().toString(36);
      return Id1 + Id2;
    };

    const objPayment = {
      paymentType,
      id: generarID(),
    };

    setPaymentInfo([...paymentInfo, objPayment]);
    setConfirm(true);
  };
  return (
    <div className="p-4 border border-gray-200 shadow-md rounded-lg">
      <div className=" px-4">
        <h3 className="text-zinc-800 font-medium text-lg">Pago en efectivo</h3>
        <p className="text-zinc-600 my-2">
          Al finalizar la compra te enviaremos al mail{" "}
          <span className="text-zinc-800 font-medium">
            {identificationInfo[0].email}
          </span>
          {""} el cupon correspondiente a esta compra para que puedas realizar
          el pago de la misma en rapiPago o Pago Fácil.
        </p>

        <div className="flex justify- justify-evenly my-2">
          <img
            src="https://res.cloudinary.com/dthpuldpm/image/upload/v1682795765/aTempo/rapiPago_vhknid.png"
            alt=""
            className="h-8 mt-6"
          />
          <img
            src="https://res.cloudinary.com/dthpuldpm/image/upload/v1682795766/aTempo/pagoFacil_vpdjsn.png"
            alt=""
            className="h-20"
          />
        </div>

        <p className="text-zinc-600 my-2">
          Tenés 48hs para realizar el pago. Caso contrario la compra sera
          cancelada.
        </p>

        {/*Button*/}
        <div className="col-span-12 pt-2 flex justify-center">
          {/*Button*/}
          <button
            type="submit"
            className="btnFinCompr py-1 md:py-2.5 px-1  md:px-5 w-9/12 md:w-1/2  text-sm font-medium text-zinc-800 rounded-md border-2
   border-gray-200"
            onClick={(e) => handleContinuar(e)}
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cash;
