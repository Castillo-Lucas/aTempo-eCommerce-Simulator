import React from "react";

const FormCheckOut = () => {
  return (
    <div className="flex flex-col pr-10">
      {/*Identificación*/}
      <div className=" border-b border-gray-200 mb-4">
        <h2 className="indicadorCheckOut text-2xl font-semibold mb-2">
          1.{" "}
          <span className="text-zinc-800 font-normal text-xl">
            Identificación
          </span>
        </h2>
        <h3 className="tex text-lg">Datos Personales</h3>
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-1/4 p-2.5 mr-4"
                  required
                />
                <input
                  type="text"
                  id="Teléfono"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-1/2 p-2.5"
                  required
                />
              </div>
            </div>

            {/*Email*/}
            <div className="flex items-start">
              <div className="flex items-center pt-8 h-5">
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
                className="mt-0.5 text-sm pt-5 text-zinc-800"
              >
                Quiero recibir promociones por mail
              </label>
            </div>

            {/*Button*/}
            <button
              type="submit"
              className="btnFinCompr py-1 md:py-2.5 px-1  md:px-5 w-9/12 md:w-full text-sm font-medium text-zinc-800 rounded-md border-2
                 border-gray-200"
            >
              Continuar
            </button>
          </div>
        </form>
      </div>

      {/*Envío*/}
      <div className=" border-b border-gray-200 mb-4">
        <h2 className="indicadorCheckOut text-2xl font-semibold mb-2">
          2. <span className="text-zinc-800 font-normal text-xl">Envío</span>
        </h2>
        <h3 className="tex text-lg">Ingresá tu domicilio</h3>
        <p>No compartiremos tu domicilio con nadie.</p>

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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-1/4 p-2.5 mr-4"
                  required
                />
                <input
                  type="text"
                  id="Teléfono"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-1/2 p-2.5"
                  required
                />
              </div>
            </div>

            {/*Email*/}
            <div className="flex items-start">
              <div className="flex items-center pt-8 h-5">
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
                className="mt-0.5 text-sm pt-5 text-zinc-800"
              >
                Quiero recibir promociones por mail
              </label>
            </div>

            {/*Button*/}
            <button
              type="submit"
              className="btnFinCompr py-1 md:py-2.5 px-1  md:px-5 w-9/12 md:w-full text-sm font-medium text-zinc-800 rounded-md border-2
                 border-gray-200"
            >
              Continuar
            </button>
          </div>
        </form>
      </div>

      {/*Pago*/}
      <div className=" border-b border-gray-200 mb-4">
        <h2 className="indicadorCheckOut text-2xl font-semibold mb-2">
          3. <span className="text-zinc-800 font-normal text-xl">Pago</span>
        </h2>
        <h3 className="tex text-lg">Seleccioná tu método de pago</h3>

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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-1/4 p-2.5 mr-4"
                  required
                />
                <input
                  type="text"
                  id="Teléfono"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-1/2 p-2.5"
                  required
                />
              </div>
            </div>

            {/*Email*/}
            <div className="flex items-start">
              <div className="flex items-center pt-8 h-5">
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
                className="mt-0.5 text-sm pt-5 text-zinc-800"
              >
                Quiero recibir promociones por mail
              </label>
            </div>

            {/*Button*/}
            <button
              type="submit"
              className="btnFinCompr py-1 md:py-2.5 px-1  md:px-5 w-9/12 md:w-full text-sm font-medium text-zinc-800 rounded-md border-2
                 border-gray-200"
            >
              Continuar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormCheckOut;
