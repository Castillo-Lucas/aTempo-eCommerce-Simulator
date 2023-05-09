import React, { useContext } from "react";
import { LayoutActivatorContext } from "../context/LayoutActivatorContext";

const LayerOne = () => {
  const { drawerOne, handleDrawerOne } = useContext(LayoutActivatorContext);
  return (
    <div
      className={`fixed z-30 min-h-full h-full bg-zinc-800/90 w-full   
        ${drawerOne ? "fixed drawerEffect" : "hidden "}`}
      onClick={(e) => {
        handleDrawerOne(e);
      }}
    ></div>
  );
};

export default LayerOne;
