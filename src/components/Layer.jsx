import React from "react";


const Layer = ({ drawer, handleDrawer }) => {
  return (
    <div
      className={`fixed z-30 min-h-full h-full bg-zinc-800/90 w-full   
        ${drawer ? "fixed drawerEffect" : "hidden "}`}
      onClick={(e) => {
        handleDrawer(e);
      }}
    ></div>
  );
};

export default Layer;
