import React from "react";
import SummaryInfoBox from "./SummaryInfoBox";

const Identification = ({
  showIdentification,
  showShipping,
  showPayment,
  identificationInfo,
}) => {
  return (
    <div className="mb-4">
      <h2 className="indicadorCheckOut text-2xl font-semibold mb-2">
        1.{" "}
        <span className="text-zinc-800 font-normal text-xl">
          Identificación
        </span>
      </h2>

      {(showShipping === false) & (showPayment === false) ? (
        <div>
          {" "}
          <div className="p-4 mt-4 border border-gray-200 shadow-md rounded-lg">
            <h3 className="text-zinc-800 font-medium text-lg">
              Datos Personales
            </h3>
            <p>
              Solicitamos únicamente la informacíon esencial para finalizar la
              compra
            </p>

            <form className="mt-6">
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                {/*Name*/}
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-zinc-700"
                  >
                    Nombres
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 formCheckOut"
                    placeholder="Nombres"
                    required
                  />
                </div>

                {/*Last Name*/}
                <div>
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm font-medium text-zinc-700"
                  >
                    Apellidos
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 formCheckOut"
                    placeholder="Apellidos"
                    required
                  />
                </div>

                {/*DNI*/}
                <div>
                  <label
                    htmlFor="DNI"
                    className="block mb-2 text-sm font-medium text-zinc-700"
                  >
                    DNI
                  </label>
                  <input
                    type="text"
                    id="DNI"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 formCheckOut"
                    placeholder="DNI"
                    required
                  />
                </div>

                {/*Teléfono*/}
                <div>
                  <label
                    htmlFor="Teléfono"
                    className="block justify-between mb-2 text-sm font-medium text-zinc-700"
                  >
                    Teléfono / Móvil
                  </label>
                  <div className="flex">
                    <p className="pt-2 mr-2">0</p>
                    <input
                      type="text"
                      id="Teléfono"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-1/4 p-2.5 mr-4 formCheckOut"
                      required
                    />
                    <input
                      type="text"
                      id="Teléfono"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-1/2 p-2.5 formCheckOut"
                      required
                    />
                  </div>
                </div>

                {/*Email*/}
                <div>
                  <label
                    htmlFor="Email"
                    className="block mb-2 text-sm font-medium text-zinc-700"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="Email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 formCheckOut"
                    placeholder="Email"
                    required
                  />
                </div>

                {/*Button & NewsLetter*/}
                <div className="pt-7 flex flex-col justify-center items-center md:items-start">
                  {/*Button*/}
                  <button
                    type="submit"
                    className="btnFinCompr py-1 md:py-2.5 px-1  md:px-5 w-9/12 md:w-full text-sm font-medium text-zinc-800 rounded-md border-2
             border-gray-200"
                  >
                    Continuar
                  </button>

                  {/*NewsLetter*/}
                  <div className="flex items-start mt-2">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded"
                        required
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="mt-0.5 text-sm  text-zinc-800"
                    >
                      Quiero recibir promociones por mail
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <SummaryInfoBox data={identificationInfo} />
      )}
    </div>
  );
};

export default Identification;
