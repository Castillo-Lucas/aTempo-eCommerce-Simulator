import React from "react";

const LayerTwo = ({ drawerTwo, handleDrawerTwo }) => {
  return (
    <div
      className={`fixed z-10 min-h-full h-full bg-zinc-800/90 w-full ${
        drawerTwo ? "fidex drawerEffect" : "hidden"
      }`}
      onClick={(e) => {
        handleDrawerTwo(e);
      }}
    ></div>
  );
};

export default LayerTwo;
