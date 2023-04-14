import React from "react";

const Spinner = () => {
  return (
    <div className="fixed z-30 w-full min-h-full h-full pt-72 bg-zinc-800/90 ">
      <div className="container mx-auto flex justify-center">
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
