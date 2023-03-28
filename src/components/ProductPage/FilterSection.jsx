import React, { useState } from "react";
import "../../App.css";

const FilterSection = () => {
  const [acordionOneState, setAcordionOneState] = useState(true);

  const handleAcordion = () => {
    setAcordionOneState(!acordionOneState);
  };

  return (
    <div className="col-span-3 px-2">
      <h1 className="font-medium text-lg text-zinc-800 p-4 border-b">
        Filtros
      </h1>

      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className={acordionOneState ? "flex items-center justify-between w-full p-4 border-r" : "flex items-center justify-between w-full p-4 border-b"}
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
            onClick={handleAcordion}
          >
            <span className="font-normal text-lg text-zinc-800 text-left">
              Marcas
            </span>
            <svg
              data-accordion-icon
              className={
                acordionOneState
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
        <div
          id="accordion-collapse-body-1"
          className={acordionOneState ? "block" : "hidden"}
          aria-labelledby="accordion-collapse-heading-1"
        >
          {/*Lista*/}
          <div className="px-5 border-r border-b rounded-b-lg">
            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-base font-normal  text-zinc-800"
              >
                Yamaha
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-base font-normal  text-zinc-800"
              >
                Fender
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-base font-normal  text-zinc-800"
              >
                Ibanez
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-base font-normal  text-zinc-800"
              >
                Marshall
              </label>
            </div>
          </div>
        </div>

        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className={acordionOneState ? "flex items-center justify-between w-full p-4 border-r" : "flex items-center justify-between w-full p-4 border-b"}
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
            onClick={handleAcordion}
          >
            <span className="font-normal text-lg text-zinc-800 text-left">
              Marcas
            </span>
            <svg
              data-accordion-icon
              className={
                acordionOneState
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
        <div
          id="accordion-collapse-body-1"
          className={acordionOneState ? "block" : "hidden"}
          aria-labelledby="accordion-collapse-heading-1"
        >
          {/*Lista*/}
          <div className="px-5 border-r border-b rounded-b-lg">
            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-base font-normal  text-zinc-800"
              >
                Yamaha
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-base font-normal  text-zinc-800"
              >
                Fender
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-base font-normal  text-zinc-800"
              >
                Ibanez
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-base font-normal  text-zinc-800"
              >
                Marshall
              </label>
            </div>
          </div>
        </div>

        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className={acordionOneState ? "flex items-center justify-between w-full p-4 border-r" : "flex items-center justify-between w-full p-4 border-b"}
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
            onClick={handleAcordion}
          >
            <span className="font-normal text-lg text-zinc-800 text-left">
              Marcas
            </span>
            <svg
              data-accordion-icon
              className={
                acordionOneState
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
        <div
          id="accordion-collapse-body-1"
          className={acordionOneState ? "block" : "hidden"}
          aria-labelledby="accordion-collapse-heading-1"
        >
          {/*Lista*/}
          <div className="px-5 border-r border-b rounded-b-lg">
            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-base font-normal  text-zinc-800"
              >
                Yamaha
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-base font-normal  text-zinc-800"
              >
                Fender
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-base font-normal  text-zinc-800"
              >
                Ibanez
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded checkboxStyles"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-base font-normal  text-zinc-800"
              >
                Marshall
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
