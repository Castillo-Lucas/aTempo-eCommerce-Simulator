import React, { useContext } from "react";
import { LayoutActivatorContext } from "../context/LayoutActivatorContext";

const LayerThree = () => {
  const { selectMegaMenu, handleSelectMegaMenu } = useContext(
    LayoutActivatorContext
  );
  return (
    <div
      className={`fixed z-10 min-h-full h-full bg-zinc-800/90 w-full ${
        selectMegaMenu === true ? "fidex drawerEffect" : "hidden"
      }`}
      onClick={(e) => {
        handleSelectMegaMenu(e);
      }}
    ></div>
  );
};

export default LayerThree;
