import React from "react";
import Filters from "./Filters";
import DownNavBar from "../NavBar/DownNavBar";

const DrawerLeft = ({ drawerOne, drawerOneContent, handleDrawerOne }) => {
  return (
    <div
      className={`fixed top-0 z-40 h-screen p-4 transition-transform -translate-x-full bg-zinc-50  w-80 
      ${drawerOneContent === "Filter" ? "bg-zinc-50" : drawerOneContent === "Categories" ? "bg-zinc-800" : ""}
            ${drawerOne ? "left-80 drawerIn" : "left-0 moveOut"}`}
    >
      <button
        type="button"
        data-drawer-hide="drawer-example"
        aria-controls="drawer-example"
        className="text-gray-400 ml-64 btnCloseDrawer bg-transparent hover:bg-gray-200
             hover:text-gray-900 rounded-lg text-sm p-1.5  inline-flex items-center"
        onClick={(e) => {
          handleDrawerOne(e);
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

      <div className="h-screen overflow-auto">
        {drawerOneContent === "Filter" ? (
          <Filters />
        ) : drawerOneContent === "Categories" ? (
          <DownNavBar />
        ) : null}
      </div>
    </div>
  );
};

export default DrawerLeft;
