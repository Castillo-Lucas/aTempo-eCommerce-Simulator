import React, { useState } from "react";
import "../../App.css";
import Filters from "./Filters";
import DrawerLeft from "./DrawerLeft";

const FilterSection = ({
  drawerOne,
  handleDrawerOne,
  selectedFiltersSort,
  setSelectedFiltersSort,
  selectedFiltersForFilter,
  setSelectedFiltersForFilter,
  productList,
  selectedCategories,
  setSelectedCategories,
  selectedBrands,
  setSelectedBrands,
  handleFilterClick,
  brandList,
  setBrandList,
}) => {
  return (
    <div className="col-span-12 lg:col-span-2 px-2">
      {/*Mobile*/}
      <div className="block lg:hidden px-4 pb-2 mb-8 border-b border-zinc-800">
        <button
          className="font-medium text-xl text-zinc-800 py-2"
          onClick={(e) => {
            handleDrawerOne(e, "Filter");
          }}
        >
          Filtros
        </button>
        <DrawerLeft productList={productList} />
      </div>

      {/*Desktop*/}
      <div className="hidden lg:block">
        <Filters
          selectedFiltersSort={selectedFiltersSort}
          setSelectedFiltersSort={setSelectedFiltersSort}
          selectedFiltersForFilter={selectedFiltersForFilter}
          setSelectedFiltersForFilter={setSelectedFiltersForFilter}
          productList={productList}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          handleFilterClick={handleFilterClick}
          brandList={brandList}
          setBrandList={setBrandList}
        />
      </div>
    </div>
  );
};

export default FilterSection;
