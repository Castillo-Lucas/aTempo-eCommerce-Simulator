import React, { useContext } from "react";
import { LayoutActivatorContext } from "../context/LayoutActivatorContext";

const LayerTwo = () => {
  const { drawerTwo,handleDrawerTwo, } = useContext(LayoutActivatorContext);
  return (
    <div
      className={`fixed z-10 min-h-full h-full bg-zinc-800/90 w-full ${
        drawerTwo === true ? "fidex drawerEffect" : "hidden"
      }`}
      onClick={(e) => {
        handleDrawerTwo(e);
      }}
    ></div>
  );
};

export default LayerTwo;
