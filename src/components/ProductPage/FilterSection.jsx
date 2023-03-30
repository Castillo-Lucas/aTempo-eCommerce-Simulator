import React, { useState } from "react";
import "../../App.css";
import Filters from "./Filters";

const FilterSection = () => {
  const [acordionOrdenarPor, setAcordionOrdenarPor] = useState(false);
  const [acordionOne, setAcordionOne] = useState(false);
  const [acordionTwo, setAcordionTwo] = useState(true);
  const [acordionThree, setAcordionThree] = useState(false);
  const [filtroMobile, setFiltroMobile] = useState(false);

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

  return (
    <div className="col-span-12 lg:col-span-2 px-2">
      {/*Mobile*/}
      <div className="block lg:hidden px-4 pb-2 mb-8 border-b border-zinc-800">
        <button
          className="font-medium text-xl text-zinc-800 py-2"
          onClick={(e) => {
            handleAcordion(e, "FiltroMobile");
          }}
        >
          Filtros
        </button>

        {/*Drawer Component */}
        <div
          id="drawer-example"
          className={`fixed top-0 z-40 h-screen p-4 transition-transform -translate-x-full bg-white w-80 
            ${filtroMobile ? "left-80 drawerIn" : "left-0 moveOut"}`}
        >
          <button
            type="button"
            data-drawer-hide="drawer-example"
            aria-controls="drawer-example"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={(e) => {
              handleAcordion(e, "FiltroMobile");
            }}
          >
            <svg
              aria-hidden="true"
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
            <span className="sr-only">Close menu</span>
          </button>

          <div>
            <Filters />
          </div>
        </div>
      </div>

      {/*Desktop*/}
      <div className="hidden lg:block">
        <Filters />
      </div>
    </div>
  );
};

export default FilterSection;
