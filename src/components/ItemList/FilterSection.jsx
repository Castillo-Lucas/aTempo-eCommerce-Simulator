import React, { useState } from "react";
import "../../App.css";
import DrawerLeft from "./DrawerLeft";
import Filters from "./Filters";

const FilterSection = ({ drawer, handleDrawer }) => {
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
        <DrawerLeft drawer={drawer} handleDrawer={handleDrawer} />
      </div>

      {/*Desktop*/}
      <div className="hidden lg:block">
        <Filters />
      </div>
    </div>
  );
};

export default FilterSection;
