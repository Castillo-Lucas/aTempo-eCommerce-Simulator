import React, { useState } from "react";
import "../../App.css";
import Filters from "./Filters";

const FilterSection = ({drawer, handleDrawer}) => {
  return (
    <div className="col-span-12 lg:col-span-2 px-2">
      {/*Mobile*/}
      <div className="block lg:hidden px-4 pb-2 mb-8 border-b border-zinc-800">
        <button
          className="font-medium text-xl text-zinc-800 py-2"
          onClick={(e) => {
            handleDrawer(e);
          }}
        >
          Filtros
        </button>

        {/*Drawer Component */}
        <div
          className={`fixed top-0 z-40 h-screen p-4 transition-transform -translate-x-full bg-zinc-50  w-80 
            ${drawer ? "left-80 drawerIn" : "left-0 moveOut"}`}
        >
          <button
            type="button"
            data-drawer-hide="drawer-example"
            aria-controls="drawer-example"
            className="text-gray-400 mr-4 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
            onClick={(e) => {
              handleDrawer(e);
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

          <div className="">
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
