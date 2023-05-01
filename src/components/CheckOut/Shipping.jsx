import React, { useState } from "react";

const Shipping = ({
  showIdentification,
  showPayment,
  deliveryInfo,
}) => {
  const [ship, setShip] = useState("editShipping");
  const [checkShipping, setCheckShipping] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState("Home");

  const handleCheckShipping = (e) => {
    setCheckShipping(e);
  };

  const handleDeliveryMethod = (e, data) => {
    e.preventDefault();

    setDeliveryMethod(data);
  };

  return (
    <div className="mb-4">
      <h2 className="indicadorCheckOut text-2xl font-semibold mb-2">
        2. <span className="text-zinc-800 font-normal text-xl">Envío</span>
      </h2>

      {(showIdentification === false) & (showPayment === false) ? (
        <div>
          {" "}
          {/*Delivery Method*/}
          <div className="w-full sm:w-2/3 md:w-3/4 flex my-4">
            {/*Home*/}
            <button
              to="/checkout"
              type="button"
              className={`${
                deliveryMethod === "Home"
                  ? "bg-zinc-800 text-zinc-100"
                  : "text-zinc-800 border-y-2 border-l-2 border-r border-gray-200"
              } py-1 md:py-2.5 px-1  md:px-5 w-9/12 md:w-full text-sm font-medium rounded-l-xl
           hover:bg-zinc-800 hover:text-zinc-100 hover:border-y-2 hover:border-r-2 hover:border-gray-800`}
              onClick={(e) => handleDeliveryMethod(e, "Home")}
            >
              <div className="flex justify-center">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 -0.5 21 21"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <title>home [#1391]</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-419.000000, -720.000000)"
                      fill="#6B7280"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M379.79996,578 L376.649968,578 L376.649968,574 L370.349983,574 L370.349983,578 L367.19999,578 L367.19999,568.813 L373.489475,562.823 L379.79996,568.832 L379.79996,578 Z M381.899955,568.004 L381.899955,568 L381.899955,568 L373.502075,560 L363,569.992 L364.481546,571.406 L365.099995,570.813 L365.099995,580 L372.449978,580 L372.449978,576 L374.549973,576 L374.549973,580 L381.899955,580 L381.899955,579.997 L381.899955,570.832 L382.514204,571.416 L384.001,570.002 L381.899955,568.004 Z"
                          id="home-[#1391]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <p className="text-center pt-1 ml-2">Envío a domicilio</p>
              </div>
            </button>

            {/*Store*/}
            <button
              to="/checkout"
              type="button"
              className={`${
                deliveryMethod === "Store"
                  ? "bg-zinc-800 text-zinc-100"
                  : "text-zinc-800 border-y-2 border-r-2 border-gray-200 "
              } py-1 md:py-2.5 px-1  md:px-5 w-9/12 md:w-full text-sm font-medium  
          rounded-r-xl hover:bg-zinc-800 hover:text-zinc-100 hover:border-y-2 hover:border-r-2 hover:border-gray-800`}
              onClick={(e) => handleDeliveryMethod(e, "Store")}
            >
              <div className="flex justify-center">
                <img
                  src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679173118/aTempo/logo_o2vgxx.png"
                  className="h-7 mt-0.5"
                  alt="Logo"
                />
                <p className="text-center pt-1.5 ml-2">Retiro en tienda</p>
              </div>
            </button>
          </div>
          {deliveryMethod === "Home" ? (
            <div className="p-4 border border-gray-200 shadow-md rounded-lg">
              <h3 className="text-zinc-800 font-medium text-lg">
                Ingresá tu domicilio
              </h3>
              <p className="text-zinc-600">
                No compartiremos tu domicilio con nadie.
              </p>
              <form className="mt-6">
                <div className="grid gap-6 mb-6 grid-cols-12">
                  {/*Address*/}
                  <div className="col-span-12">
                    <div className="grid grid-cols-12 gap-6">
                      {/*Street*/}
                      <div className="col-span-12 sm:col-span-4">
                        <label
                          htmlFor="street"
                          className="block mb-2 text-sm font-medium text-zinc-700"
                        >
                          Calle
                        </label>
                        <input
                          type="text"
                          id="street"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 formCheckOut"
                          placeholder="Calle"
                          required
                        />
                      </div>

                      {/*Street Number*/}
                      <div className="col-span-12 sm:col-span-4">
                        <label
                          htmlFor="streetNumber"
                          className="block mb-2 text-sm font-medium text-zinc-700"
                        >
                          Numero
                        </label>
                        <input
                          type="text"
                          id="streetNumber"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 formCheckOut"
                          placeholder="Numero"
                          required
                        />
                      </div>

                      {/*Floor / Departament*/}
                      <div className="col-span-12 sm:col-span-4">
                        <label
                          htmlFor="floorDpto"
                          className="block mb-2 text-sm font-medium text-zinc-700"
                        >
                          Piso/Dpto
                        </label>
                        <input
                          type="text"
                          id="floorDpto"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 formCheckOut"
                          placeholder="Opcional"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/*City & Province*/}
                  <div className="col-span-12">
                    <div className="grid grid-cols-12 gap-6">
                      {/*City*/}
                      <div className="col-span-12 sm:col-span-6">
                        <label
                          htmlFor="city"
                          className="block mb-2 text-sm font-medium text-zinc-700"
                        >
                          Ciudad
                        </label>
                        <input
                          type="text"
                          id="city"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 formCheckOut"
                          placeholder="Ciudad"
                          required
                        />
                      </div>

                      {/*Province*/}
                      <div className="col-span-12 sm:col-span-6">
                        <label
                          htmlFor="province"
                          className="block mb-2 text-sm font-medium text-zinc-700"
                        >
                          Provincia
                        </label>
                        <input
                          type="text"
                          id="province"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 formCheckOut"
                          placeholder="Provincia"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/*City & Province*/}
                  <div className="col-span-12 sm:col-span-6 px-10 flex justify-between">
                    <img
                      src="https://res.cloudinary.com/dthpuldpm/image/upload/v1682674432/aTempo/expressShiping2-removebg-preview_tflcev.png"
                      alt=""
                      className="h-20"
                    />
                    <img
                      src="https://res.cloudinary.com/dthpuldpm/image/upload/v1682673764/aTempo/expressShiping-removebg-preview_y4j6x9.png"
                      alt=""
                      className="h-20"
                    />
                  </div>

                  {/*Button*/}
                  <div className="col-span-12 sm:col-span-6 flex flex-col justify-center items-center md:items-start ">
                    {/*Button*/}
                    <button
                      type="submit"
                      className="btnFinCompr py-1 md:py-2.5 px-1  md:px-5 w-9/12 md:w-full text-sm font-medium text-zinc-800 rounded-md border-2
             border-gray-200"
                    >
                      Continuar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <div className="p-4 border border-gray-200 shadow-md rounded-lg">
              <h3 className="text-zinc-800 font-medium text-lg">
                Retiro en tienda
              </h3>
              <p className="text-zinc-600">
                Te enviaremos un mail para informar cuando tu pedido este listo
                para retirar
              </p>
              <p className="text-zinc-600">
                La demora estimada es de 48hs hábiles
              </p>
              <p className="text-zinc-600 font-medium mt-4">
                Te esperamos en Av. Lorem Ipsum 3500, Córdoba
              </p>
              <p className="text-zinc-600">
                De lunes a viernes de 9:00 a 18:00
              </p>
              {/*Button*/}
              <div className="col-span-12 sm:col-span-6 flex flex-col justify-center items-center md:items-start sm:px-44 mt-4">
                {/*Button*/}
                <button
                  type="submit"
                  className="btnFinCompr py-1 md:py-2.5 px-1  md:px-5 w-9/12 md:w-full text-sm font-medium text-zinc-800 rounded-md border-2
                 border-gray-200"
                >
                  Continuar
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="p-4 border border-gray-200 shadow-md rounded-lg">
          {deliveryInfo.length >= 1 ? (
            <div className="flex justify-between">
              <div>
                <p className="text-zinc-600">
                  {deliveryInfo[0].name} {deliveryInfo[0].lastName}
                </p>
                <p className="text-zinc-600">
                  DNI: {deliveryInfo[0].DNI}
                </p>
                <p className="text-zinc-600">
                  ({deliveryInfo[0].areaNumber}){" "}
                  {deliveryInfo[0].phoneNumber}
                </p>
                <p className="text-zinc-600">{deliveryInfo[0].email}</p>
              </div>

              <button>
                <img
                  src="https://res.cloudinary.com/dthpuldpm/image/upload/v1682803677/aTempo/editar-texto_iythiq.png"
                  alt=""
                  className="h-5"
                />
              </button>
            </div>
          ) : (
            <div>
              <p className="text-zinc-400/80">
                Esperando que se complete la información
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Shipping;
