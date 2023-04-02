import React from "react";

const LayerTwo = ({ layerTwo, handleDrawerTwo }) => {
  return (
    <div
      className={`fixed z-10 min-h-full h-full bg-zinc-800/90 w-full ${
        layerTwo === true  ? "fidex drawerEffect" : "hidden"
      }`}
      onClick={(e) => {
        handleDrawerTwo(e);
      }}
    ></div>
  );
};

export default LayerTwo;
