import React, { useState, useEffect } from "react";

const OrderConfirmation = ({ setShowNavBar, setSpinner }) => {
  const [orderNumber, setOrderNumber] = useState();

  useEffect(() => {
    setShowNavBar(true);
    setSpinner(true);
    setOrderNumber(Math.floor(Math.random() * 90000) + 20000);

    const timeoutId = setTimeout(() => {
      setSpinner(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <div className="bodyCart container mx-auto px-2 xl:px-44 py-1 my-4">
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
            castillolucas@gmail.com
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
            <p>Compra realizada el 5/5/2023 a las 19:49</p>
            <p>Venido y entregado por aTempo</p>
            <p className="text-zinc-700 font-medium">Lucas Castillo</p>
            <p>castillolucas@gmail.com</p>
            <p>35578977</p>
            <p>+54 (351) 2000711</p>
          </div>

          <div className="text-zinc-600 mb-4">
            <h2 className="text-zinc-900 font-medium">Pago</h2>
            <p>
              Total: <span>$1500</span>
            </p>
            <p>Tarjeta de Crédito</p>
            <p>
              xxxx - xxxx - xxxx - <span>4568</span>
            </p>
            <p>
              Financiado en <span>12</span> cuotas de $<span>150</span>
            </p>
          </div>

          <div className="text-zinc-600 mb-4">
            <h2 className="text-zinc-900 font-medium">Envío</h2>
            <p className="text-zinc-400 text-sm">Entrega en 48hs hábiles</p>
            <p>Fulton 6336, 1B</p>
            <p>Córdoba, Córdoba</p>
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
                    <img
                      className="w-20"
                      src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679928857/aTempo/Assets/Guitarras/Fender%20American%20Professional%20II%20Roasted%20Pine%20Stratocaster%20HSS%20Electric%20Guitar%20Sienna%20Sunburst/americanProf2StratHSS1_fahhlc.png  "
                      alt=""
                    />
                  </td>

                  {/*Detail*/}
                  <td className="pl-4 py-4 font-medium text-zinc-800 ">
                    {" "}
                    <p className="text-base font-medium">Fender</p>
                    <p className="text-sm  font-thin -mt-1">Guitarra</p>
                    <div className="h-full overflow-hidden py-1">
                      <p className="text-sm font-normal">
                        American Professional II Roasted Pine Stratocaster HSS
                        Electric Guitar Sienna Sunburst
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-base font-medium">$1500</p>
                      <p className="text-sm font-normal pt-0.5 pr-5">
                        Cantidad: 1
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
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
  );
};

export default OrderConfirmation;
