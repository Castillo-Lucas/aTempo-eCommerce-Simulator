import React, { useState } from "react";
import "../../App.css";

const Filters = () => {
  const [acordionOrdenarPor, setAcordionOrdenarPor] = useState(false);
  const [acordionOne, setAcordionOne] = useState(false);
  const [acordionTwo, setAcordionTwo] = useState(false);
  const [acordionThree, setAcordionThree] = useState(false);
  const [filtroMobile, setFiltroMobile] = useState(false);
  const ordenarPor = [
    "Menor a Mayor",
    "Mayor a Menor",
    "Más Vendidos",
    "Ultimos Ingresos",
    "A - Z",
    "Z - A",
    "Envío Gratis",
    "Ofertas"
  ];

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
    } else if (data === "FiltroMobile") {
      setFiltroMobile(!filtroMobile);
    }
  };

  /*ID Generator*/
  const generarIDe = () => {
    const Id1 = Math.random().toString(36).substring(2);
    const Id2 = Date.now().toString(36);
    return Id1 + Id2;
  };

  return (
    <div>
      <h1 className="font-medium text-lg  p-4 border-b">Filtros</h1>

      <div>
        {/*Ordenar Por*/}
        <div className="mb-2 accordion">
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
              <span className="font-normal text-lg  text-left">
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
            {ordenarPor.map((ordenar) => (
              <div key={generarIDe()} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-1 text-base font-normal"
                >
                  {ordenar}
                </label>
              </div>
            ))}
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
              <span className="font-normal text-lg  text-left">Categorías</span>
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
                className="ml-1 text-base font-normal"
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
                className="ml-1 text-base font-normal  "
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
                className="ml-1 text-base font-normal  "
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
                className="ml-1 text-base font-normal  "
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
                className="ml-1 text-base font-normal  "
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
                className="ml-1 text-base font-normal  "
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
                className="ml-1 text-base font-normal  "
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
                className="ml-1 text-base font-normal  "
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
                className="ml-1 text-base font-normal  "
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
                className="ml-1 text-base font-normal  "
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
              <span className="font-normal text-lg  text-left">Marca</span>
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
                className="ml-1 text-base font-normal  "
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
                className="ml-1 text-base font-normal  "
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
                className="ml-1 text-base font-normal  "
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
                className="ml-1 text-base font-normal  "
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
                className="ml-1 text-base font-normal  "
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
                className="ml-1 text-base font-normal  "
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
                className="ml-1 text-base font-normal  "
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
                className="ml-1 text-base font-normal  "
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
                className="ml-1 text-base font-normal  "
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
                className="ml-1 text-base font-normal  "
              >
                PreSonus
              </label>
            </div>
          </div>
        </div>

        {/*Price*/}
        <div className="mb-2 pb-14">
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
              <span className="font-normal text-lg  text-left">Precio</span>
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
                      className="block mb-2 text-sm font-medium /80"
                    >
                      Desde
                    </label>
                    <input
                      type="text"
                      id="from"
                      className="bg-gray-50 border border-gray-300 /80 text-sm rounded-lg block w-11/12 p-2"
                      placeholder="$"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="to"
                      className="block mb-2 text-sm font-medium /80"
                    >
                      Hasta
                    </label>
                    <input
                      type="text"
                      id="to"
                      className="bg-gray-50 border border-gray-300 /80 text-sm rounded-lg block w-11/12 p-2"
                      placeholder="$"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-sm font-medium  border rounded-lg w-full sm:w-auto px-4 py-2 text-center btnPrice"
                >
                  Filtrar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
