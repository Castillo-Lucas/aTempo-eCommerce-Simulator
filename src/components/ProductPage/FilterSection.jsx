import React, { useState } from "react";
import "../../App.css";

const FilterSection = () => {
  const [acordionOrdenarPor, setAcordionOrdenarPor] = useState(false);
  const [acordionOne, setAcordionOne] = useState(false);
  const [acordionTwo, setAcordionTwo] = useState(true);
  const [acordionThree, setAcordionThree] = useState(false);

  const handleAcordion = (e, data) => {
    e.preventDefault(e);

    if (data === "OrdenarPor") {
      setAcordionOrdenarPor(!acordionOrdenarPor);
    } else if (data === "Categories") {
      setAcordionOne(!acordionOne);
    } else if (data === "Brand") {
      setAcordionTwo(!acordionTwo);
    } else if (data === "Price") {
      setAcordionThree(!acordionThree);
    }
  };

  return (
    <div className="col-span-12 lg:col-span-2 px-2">

      <div className="block lg:hidden px-4 pb-2 mb-8 border-b border-zinc-800">
      <h1 className="font-medium text-xl text-zinc-800 py-2">
          Filtros
        </h1>
      </div>


      {/*Desktop*/}
      <div className="hidden lg:block">
        <h1 className="font-medium text-lg text-zinc-800 p-4 border-b">
          Filtros
        </h1>

        <div id="accordion-collapse" data-accordion="collapse">
          {/*Ordenar Por*/}
          <div className="mb-2">
            {/*Tittle*/}
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className={
                  acordionOrdenarPor
                    ? "flex items-center justify-between w-full p-4 border-r"
                    : "flex items-center justify-between w-full p-4 border-b"
                }
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
                onClick={(e) => {
                  handleAcordion(e, "OrdenarPor");
                }}
              >
                <span className="font-normal text-lg text-zinc-800 text-left">
                  Ordenar por
                </span>
                <svg
                  data-accordion-icon
                  className={
                    acordionOrdenarPor
                      ? "w-5 h-5 rotate-180 shrink-0"
                      : "w-5 h-5 rotate-0 shrink-0"
                  }
                  fill="#7D7D83"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>

            {/*Content*/}
            <div
              className={
                acordionOrdenarPor
                  ? "block px-5 border-r border-b rounded-b-lg pb-2"
                  : "hidden"
              }
            >
              <div className="flex items-center mb-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-1 text-base font-normal  text-zinc-800"
                >
                  Precio: Menor a Mayor
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-1 text-base font-normal  text-zinc-800"
                >
                  Precio: Mayor a Menor
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-1 text-base font-normal  text-zinc-800"
                >
                  A - Z
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-1 text-base font-normal  text-zinc-800"
                >
                  Z - A
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-1 text-base font-normal  text-zinc-800"
                >
                  Más Vendidos
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-1 text-base font-normal  text-zinc-800"
                >
                  Ultimos Ingresos
                </label>
              </div>
            </div>
          </div>

          {/*Categories*/}
          <div className="mb-2">
            {/*Tittle*/}
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className={
                  acordionOne
                    ? "flex items-center justify-between w-full p-4 border-r"
                    : "flex items-center justify-between w-full p-4 border-b"
                }
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
                onClick={(e) => {
                  handleAcordion(e, "Categories");
                }}
              >
                <span className="font-normal text-lg text-zinc-800 text-left">
                  Categorías
                </span>
                <svg
                  data-accordion-icon
                  className={
                    acordionOne
                      ? "w-5 h-5 rotate-180 shrink-0"
                      : "w-5 h-5 rotate-0 shrink-0"
                  }
                  fill="#7D7D83"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>

            {/*Content*/}
            <div
              className={
                acordionOne
                  ? "block px-5 border-r border-b rounded-b-lg pb-2"
                  : "hidden"
              }
            >
              <div className="flex items-center mb-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-1 text-base font-normal  text-zinc-800"
                >
                  Guitarras
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-1 text-base font-normal  text-zinc-800"
                >
                  Bajos
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-1 text-base font-normal  text-zinc-800"
                >
                  Baterías
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-1 text-base font-normal  text-zinc-800"
                >
                  Pianos
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-1 text-base font-normal  text-zinc-800"
                >
                  Amplificadores
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-1 text-base font-normal  text-zinc-800"
                >
                  Efectos
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-1 text-base font-normal  text-zinc-800"
                >
                  MIDI
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-1 text-base font-normal  text-zinc-800"
                >
                  Home Studio
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-1 text-base font-normal  text-zinc-800"
                >
                  DJ
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-1 text-base font-normal  text-zinc-800"
                >
                  Accesorios
                </label>
              </div>
            </div>
          </div>

          {/*Brand*/}
          <div className="mb-2">
            {/*Tittle*/}
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className={
                  acordionTwo
                    ? "flex items-center justify-between w-full p-4 border-r"
                    : "flex items-center justify-between w-full p-4 border-b"
                }
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
                onClick={(e) => {
                  handleAcordion(e, "Brand");
                }}
              >
                <span className="font-normal text-lg text-zinc-800 text-left">
                  Marca
                </span>
                <svg
                  data-accordion-icon
                  className={
                    acordionTwo
                      ? "w-5 h-5 rotate-180 shrink-0"
                      : "w-5 h-5 rotate-0 shrink-0"
                  }
                  fill="#7D7D83"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>

            {/*Content*/}
            <div
              className={
                acordionTwo
                  ? "block px-5 border-r border-b rounded-b-lg pb-2"
                  : "hidden"
              }
            >
              <div className="flex items-center mb-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-1 text-base font-normal  text-zinc-800"
                >
                  Fender
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-1 text-base font-normal  text-zinc-800"
                >
                  Ibanez
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-1 text-base font-normal  text-zinc-800"
                >
                  Ernie Ball
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-1 text-base font-normal  text-zinc-800"
                >
                  DW
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-1 text-base font-normal  text-zinc-800"
                >
                  Ludwig
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-1 text-base font-normal  text-zinc-800"
                >
                  Nektar
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-1 text-base font-normal  text-zinc-800"
                >
                  Gemini
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-1 text-base font-normal  text-zinc-800"
                >
                  Boss
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-1 text-base font-normal  text-zinc-800"
                >
                  M-Audio
                </label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-1 text-base font-normal  text-zinc-800"
                >
                  PreSonus
                </label>
              </div>
            </div>
          </div>

          {/*Price*/}
          <div className="mb-2">
            {/*Tittle*/}
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className={
                  acordionThree
                    ? "flex items-center justify-between w-full p-4 border-r"
                    : "flex items-center justify-between w-full p-4 border-b"
                }
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
                onClick={(e) => {
                  handleAcordion(e, "Price");
                }}
              >
                <span className="font-normal text-lg text-zinc-800 text-left">
                  Precio
                </span>
                <svg
                  data-accordion-icon
                  className={
                    acordionThree
                      ? "w-5 h-5 rotate-180 shrink-0"
                      : "w-5 h-5 rotate-0 shrink-0"
                  }
                  fill="#7D7D83"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>

            {/*Content*/}
            <div
              className={
                acordionThree
                  ? "block px-5 border-r border-b rounded-b-lg"
                  : "hidden"
              }
            >
              <div className="flex items-center mb-2 pb-2">
                <form>
                  <div className="grid gap-6 mb-4 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="from"
                        className="block mb-2 text-sm font-medium text-zinc-800/80"
                      >
                        Desde
                      </label>
                      <input
                        type="text"
                        id="from"
                        className="bg-gray-50 border border-gray-300 text-zinc-800/80 text-sm rounded-lg block w-11/12 p-2"
                        placeholder="$"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="to"
                        className="block mb-2 text-sm font-medium text-zinc-800/80"
                      >
                        Hasta
                      </label>
                      <input
                        type="text"
                        id="to"
                        className="bg-gray-50 border border-gray-300 text-zinc-800/80 text-sm rounded-lg block w-11/12 p-2"
                        placeholder="$"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="text-sm font-medium text-zinc-800 border rounded-lg w-full sm:w-auto px-4 py-2 text-center btnPrice"
                  >
                    Filtrar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
