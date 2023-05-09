import React, { createContext, useState } from "react";

export const LayoutActivatorContext = createContext();

const LayoutActivatorContextProvider = ({ children }) => {
  const [drawerOne, setDrawerOne] = useState(false);
  const [drawerTwo, setDrawerTwo] = useState(false);
  const [drawerOneContent, setDrawerOneContent] = useState("Filter");
  const [selectMegaMenu, setSelectMegaMenu] = useState(false);
  const [spinner, setSpinner] = useState(false);

  /*Function to open Drawer Left(Filter and Mobile Menu)*/
  const handleDrawerOne = (e, Data) => {
    e.preventDefault(e);

    setDrawerOne(!drawerOne);
    setDrawerOneContent(Data);
  };

  /*Function to open MiniCart*/
  const handleDrawerTwo = (e) => {
    e.preventDefault(e);

    setDrawerTwo(!drawerTwo);
  };

  /*Function to open Mega Menu*/
  const handleSelectMegaMenu = (e) => {
    e.preventDefault(e);

    setSelectMegaMenu(!selectMegaMenu);
  };

  let data = {
    drawerOne,
    setDrawerOne,
    drawerTwo,
    setDrawerTwo,
    drawerOneContent,
    setDrawerOneContent,
    selectMegaMenu,
    setSelectMegaMenu,
    spinner,
    setSpinner,
    handleDrawerOne,
    handleDrawerTwo,
    handleSelectMegaMenu,
  };
  return (
    <LayoutActivatorContext.Provider value={data}>
      {children}
    </LayoutActivatorContext.Provider>
  );
};

export default LayoutActivatorContextProvider;
