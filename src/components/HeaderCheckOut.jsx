import React from "react";
import Logo from "./Logo";

const HeaderCheckOut = () => {
  return (
    <div className="bg-zinc-800 sticky top-0 z-20">
      <div className="bg-zinc-900 xl:px-44 py-2.5 h-1 border-b border-zinc-600"></div>
      <div className="container mx-auto bg-zinc-800 px-2 xl:px-44 py-1">
        <div className="flex justify-between">
          <Logo />
          <div className="flex">
            <svg
              width="35px"
              height="35px"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              strokeWidth="3"
              stroke="#F4F4F5"
              fill="none"
              className="my-auto md:mr-2"
            >
              <path d="M31.74,7.19,13.36,14.85a1,1,0,0,0-.62.93V32.11h0A22.89,22.89,0,0,0,23.93,51.78l8.18,4.86,8.06-4.85a22.87,22.87,0,0,0,11.09-19.6V14.84a1,1,0,0,0-.65-.94L32.48,7.18A1,1,0,0,0,31.74,7.19Z" />
              <polyline points="22.01 33.5 29.44 39.12 42.56 20.69" />
            </svg>
            <p className="text-zinc-100 my-auto text-sm md:text-lg">
              Sitio seguro
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCheckOut;
