import React, { createContext, useState, useEffect } from "react";

export const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const [selectedFiltersSort, setSelectedFiltersSort] = useState([]);
  const [selectedFiltersForFilter, setSelectedFiltersForFilter] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");

  let data = {
    selectedFiltersSort,
    setSelectedFiltersSort,
    selectedFiltersForFilter,
    setSelectedFiltersForFilter,
    selectedCategories,
    setSelectedCategories,
    selectedBrands,
    setSelectedBrands,
    brandList,
    setBrandList,
    fromValue,
    setFromValue,
    toValue,
    setToValue,
  };
  return (
    <FilterContext.Provider value={data}>{children}</FilterContext.Provider>
  );
};

export default FilterContextProvider;
