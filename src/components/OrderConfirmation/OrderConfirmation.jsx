import React, { useState, useEffect } from "react";
import Spinner from "../Spinner";

const OrderConfirmation = ({
  setShowNavBar,
  spinner,
  setSpinner,
  orderConfirmation,
  setOrderConfirmation,
}) => {
  const {
    cart,
    identificationInfo,
    shippingInfo,
    paymentInfo,
    orderNumber,
    totalPurchase,
    currentDateTime,
  } = orderConfirmation;

  const [totCtaFormat, settotCtaFormat] = useState();
  const [ultimosCuatroDigitos, setultimosCuatroDigitos] = useState();

  console.log(shippingInfo);

  /*Function that formats numbers to look like this: 333.33*/
  const opcionesDeFormato = {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
  };

  useEffect(() => {
    setShowNavBar(true);

    if (
      paymentInfo[0].paymentType === "creditCard" ||
      paymentInfo[0].paymentType === "debitCard"
    ) {
      /*Setting Installments to look like "opcionesDeFormato" format*/
      const totCta = Number(totalPurchase) / paymentInfo[0].financing;
      const totCtaFormat = totCta.toLocaleString("es-ES", opcionesDeFormato);

      //Getting the last 4 credit card numbers
      const numeroTarjeta = paymentInfo[0].cardNumber;
      const ultimosCuatroDigitos = numeroTarjeta.slice(-4);

      settotCtaFormat(totCtaFormat);
      setultimosCuatroDigitos(ultimosCuatroDigitos);
    }

    /*Spinner*/
    setSpinner(true);

    const timeoutId = setTimeout(() => {
      setSpinner(false);
    }, 10);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  /*Setting totalPurchase to look like "opcionesDeFormato" format*/
  const tot = Number(totalPurchase);
  const totalPurchaseFormat = tot.toLocaleString("es-ES", opcionesDeFormato);

  return (
    <div>
      {spinner ? (
        <div className="h-screen">
          <Spinner />
        </div>
      ) : (
        <div className="bodyCart container mx-auto px-2 xl:px-44 py-6">
          {/*Title*/}
          <div className="flex flex-col items-center">
            {" "}
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-4"
            >
              <path
                opacity="0.15"
                d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                fill="#F9FAFB"
              />
              <path
                d="M17.0001 9L10 16L7 13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="#92D050"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h2 className="mb-2 text-xl text-zinc-700 font-medium">
              ¡Gracias por la compra!
            </h2>
            <p className="text-zinc-500 text-center">
              En unos minutos vas a recibir un correo electrónico en{" "}
              <span className="text-zinc-900 font-medium">
                {identificationInfo[0].email}
              </span>{" "}
              con todos los detalles de tu compra.
            </p>
            <p className="text-zinc-500 text-center">
              Recorda de revisar la carpeta de correo no deseado o spam.
            </p>
          </div>

          <div className="grid grid-cols-12 mt-8">
            {/*Purchase Detail*/}
            <div className="col-span-12 md:col-span-6 p-4  border-r-0 md:border-r border-zinc-300/70">
              <p className="text-xl text-zinc-900 font-medium">
                Orden #{orderNumber}
              </p>
              <div className="text-zinc-600 mb-4">
                {" "}
                <p>
                  Compra realizada el {currentDateTime[0].day}/
                  {currentDateTime[0].month}/{currentDateTime[0].year} a las{" "}
                  {""}
                  {currentDateTime[1].hour}:{currentDateTime[1].minutes}
                </p>
                <p>Venido y entregado por aTempo</p>
                <p className="text-zinc-700 font-medium">
                  {identificationInfo[0].name} {identificationInfo[0].lastName}
                </p>
                <p>{identificationInfo[0].email}</p>
                <p>{identificationInfo[0].DNI}</p>
                <p>
                  +54 ({identificationInfo[0].areaNumber}){" "}
                  {identificationInfo[0].phoneNumber}
                </p>
              </div>

              <div className="text-zinc-600 mb-4">
                <h2 className="text-zinc-900 font-medium">Pago</h2>
                <p>
                  Total: <span>${totalPurchaseFormat}</span>
                </p>
                <p>
                  {paymentInfo[0].paymentType === "creditCard"
                    ? "Tarjeta de Crédito"
                    : paymentInfo[0].paymentType === "debitCard"
                    ? "Tarjeta de Débito"
                    : "Pago en efectivo"}
                </p>
                {paymentInfo[0].paymentType === "creditCard" ||
                paymentInfo[0].paymentType === "debitCard" ? (
                  <p>
                    xxxx - xxxx - xxxx - <span>{ultimosCuatroDigitos}</span>
                  </p>
                ) : null}
                {paymentInfo[0].paymentType === "creditCard" ? (
                  <p>
                    Financiado en <span>{paymentInfo[0].financing}</span> cuotas
                    de $<span>{totCtaFormat}</span>
                  </p>
                ) : paymentInfo[0].paymentType === "debitCard" ? (
                  <p>
                    Se debitará de tu cuenta un pago de $
                    <span>{totalPurchaseFormat}</span>
                  </p>
                ) : (
                  <p className="">
                    Deberas abonar por Rapipago o Pago Fácil el valor total de $
                    <span>{totalPurchaseFormat}</span>
                  </p>
                )}
              </div>

              <div className="text-zinc-600 mb-4">
                {shippingInfo[0].deliveryMethod === "Store" ? (
                  <div>
                    <h2 className="text-zinc-900 font-medium">
                      Retiro en tienda
                    </h2>
                    <p className="text-zinc-400 text-sm">
                      Listo en las próximas 48hs hábiles
                    </p>
                    <p className="text-zinc-600">
                      Te enviaremos un mail para notificarte cuando tu pedido
                      este listo para ser retirado
                    </p>
                  </div>
                ) : (
                  <div>
                    {" "}
                    <h2 className="text-zinc-900 font-medium">Envío</h2>
                    <p className="text-zinc-400 text-sm">
                      Entrega en 48hs hábiles
                    </p>
                    <p>
                      {shippingInfo[0].street} {shippingInfo[0].streetNumber}
                      {shippingInfo[0].floor !== "" && (
                        <span className="text-zinc-600">
                          , {shippingInfo[0].floor}
                        </span>
                      )}
                    </p>
                    <p>
                      {shippingInfo[0].city}, {shippingInfo[0].province}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/*Product Detail*/}
            <div className="col-span-12 md:col-span-6 px-4">
              {/*Product Detail*/}
              <div className="relative overflow-x-auto h-80 border-y md:border-y-0 border-zinc-300/70">
                <table className="w-full text-sm h-46 text-left">
                  <tbody>
                    <tr className="border-b border-zinc-300/70">
                      {/*Image*/}
                      <td className="pl-2 py-4 w-24 font-medium text-zinc-800 whitespace-nowrap">
                        {" "}
                        <img className="w-20" src={cart[0].img1} />
                      </td>

                      {/*Detail*/}
                      <td className="pl-4 py-4 font-medium text-zinc-800 ">
                        {" "}
                        <p className="text-base font-medium">{cart[0].brand}</p>
                        <p className="text-sm  font-thin -mt-1">
                          {cart[0].product}
                        </p>
                        <div className="h-full overflow-hidden py-1">
                          <p className="text-sm font-normal">{cart[0].model}</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="text-base font-medium">
                            ${cart[0].price}
                          </p>
                          <p className="text-sm font-normal pt-0.5 pr-5">
                            Cantidad: {cart[0].quantity}
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div
                id="alert-2"
                className="flex p-4 ml-32 mb-4 text-red-800 rounded-lg bg-red-100 dark:bg-gray-800 dark:text-red-400 w-fit absolute"
                role="alert"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Info</span>
                <div className="ml-3 text-sm font-medium">
                  No disponible. Por el momento...
                </div>
                <button
                  type="button"
                  className="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
                  data-dismiss-target="#alert-2"
                  aria-label="Close"
                >
                  <span className="sr-only">Close</span>
                  <svg
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
                </button>
              </div>

              {/*Buttons*/}
              <div className="w-full flex flex-col items-center mt-5 pt-4">
                <div className="w-60 flex justify-center">
                  <button
                    to="/checkout"
                    type="button"
                    className="btnFinCompr py-1 md:py-2.5 px-1  md:px-5 w-9/12 md:w-full text-sm font-medium text-zinc-800 rounded-md border-2 border-gray-200"
                  >
                    <p className="text-center">Descargar comprobante</p>
                  </button>
                </div>
                <div className="w-60 flex justify-center mt-2">
                  <button
                    to="/"
                    type="button"
                    className="btnFinCompr py-1 md:py-2.5 px-1  md:px-5 w-9/12 md:w-full text-sm font-medium text-zinc-800 rounded-md"
                  >
                    <p className="text-center">Cancelar compra</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmation;
