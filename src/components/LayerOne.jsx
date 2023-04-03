import React from "react";


const LayerOne = ({ drawerOne, handleDrawerOne }) => {
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
