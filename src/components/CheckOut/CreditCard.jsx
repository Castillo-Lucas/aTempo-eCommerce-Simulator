import React from "react";

const CreditCard = ({
  cardPosition,
  handleCardPosition
}) => {
  return (
    <div className="p-4 border border-gray-200 shadow-md rounded-lg">
      {/*Card Image*/}
      <div className="hidden md:block">
        {cardPosition === "Front" ? (
          <div className="flex justify-center relative animate__animated animate__flipInX">
            <img
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1682702334/aTempo/creditCardFront_ssiej4.png"
              alt=""
              className="h-72"
            />

            {/*Number*/}
            <div className="absolute top-24 mt-1 ml-8 flex">
              <p className=" text-zinc-400 text-2xl font-medium mr-4">4856</p>
              <p className=" text-zinc-400 text-2xl font-medium mr-4">4856</p>
              <p className=" text-zinc-400 text-2xl font-medium mr-4">4856</p>
              <p className=" text-zinc-400 text-2xl font-medium">4856</p>
            </div>

            {/*Expire*/}
            <div className="absolute top-44 mt-5 pr-4 ml-28 flex">
              <p className=" text-zinc-500 text-lg font-medium mr-1">1</p>
              <span className=" text-zinc-500 text-lg font-medium mr-1">/</span>
              <p className=" text-zinc-500 text-lg font-medium mr-1">26</p>
            </div>

            {/*Name*/}
            <div className="absolute top-56 -ml-80">
              <p className=" text-zinc-400 text-xl font-medium mr-4">
                Lucas Castillo
              </p>
            </div>
          </div>
        ) : (
          <div className="flex justify-center relative animate__animated animate__jackInTheBox">
            <img
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1682702334/aTempo/creditCardBack_fw7ivx.png"
              alt=""
              className="h-72"
            />

            {/*CVC*/}
            <div className="absolute top-20 mt-6 pr-4 ml-80 flex">
              <p className=" text-zinc-700 text-lg font-medium mr-1">645</p>
            </div>
          </div>
        )}
        {/*Front*/}

        {/*Back*/}
      </div>

      {/*Form*/}
      <form className="mt-3 sm:mt-6">
        <div className="grid gap-6 mb-6 grid-cols-12">
          {/*Card Number*/}
          <div className="col-span-12 md:col-span-6">
            <label
              htmlFor="cardNumber"
              className="block mb-2 text-sm font-medium text-zinc-700"
            >
              Numero
            </label>
            <input
              type="text"
              id="cardNumber"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 formCheckOut"
              placeholder="Numero"
              required
              onClick={(e) => handleCardPosition(e, "Front")}
            />
          </div>

          {/*Name*/}
          <div className="col-span-12 md:col-span-6">
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-zinc-700"
            >
              Nombre y Apellido de Titular
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 formCheckOut"
              placeholder="Nombre y Apellido"
              required
              onClick={(e) => handleCardPosition(e, "Front")}
            />
          </div>

          {/*Expiration*/}
          <div className="col-span-12 md:col-span-6">
            <label
              htmlFor="Teléfono"
              className="block justify-between mb-2 text-sm font-medium text-zinc-700"
            >
              Fecha de Vencimiento
            </label>
            <div className="flex">
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-20 p-2.5 formCheckOut"
                aria-label="Default select example"
                id="mesVencimiento"
                name="Mes de Vencimiento"
                defaultValue="1"
                onClick={(e) => handleCardPosition(e, "Front")}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-20 p-2.5 ml-4 formCheckOut"
                aria-label="Default select example"
                id="vencimientoYear"
                name="Año de Vencimiento"
                defaultValue="2023"
                onClick={(e) => handleCardPosition(e, "Front")}
              >
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
                <option value="2031">2031</option>
                <option value="2032">2032</option>
              </select>
            </div>
          </div>

          {/*Codigo CVC*/}
          <div className="col-span-12 md:col-span-6">
            <label
              htmlFor="CVC"
              className="block mb-2 text-sm font-medium text-zinc-700"
            >
              Código CVC
            </label>
            <input
              type="text"
              id="CVC"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-20 p-2.5 formCheckOut"
              placeholder="CVC"
              required
              onClick={(e) => handleCardPosition(e, "Back")}
            />
          </div>

          {/*DNI*/}
          <div className="col-span-12 md:col-span-6">
            <label
              htmlFor="DNI"
              className="block mb-2 text-sm font-medium text-zinc-700"
            >
              DNI
            </label>
            <input
              type="text"
              id="DNI"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 formCheckOut"
              placeholder="DNI"
              required
            />
          </div>

          {/*Financing*/}
          <div className="col-span-12 md:col-span-6 order-first sm:order-none">
            <label
              htmlFor="Financing"
              className="block mb-2 text-sm font-medium text-zinc-700"
            >
              Cuotas disponibles
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 formCheckOut"
              aria-label="Default select example"
              id="vencimientoYear"
              name="Año de Vencimiento"
              defaultValue="2023"
            >
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
              <option value="2031">2031</option>
              <option value="2032">2032</option>
            </select>
          </div>

          {/*Button*/}
          <div className="col-span-12 pt-7 flex justify-center">
            {/*Button*/}
            <button
              type="submit"
              className="btnFinCompr py-1 md:py-2.5 px-1  md:px-5 w-9/12 md:w-1/2  text-sm font-medium text-zinc-800 rounded-md border-2
   border-gray-200"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreditCard;
