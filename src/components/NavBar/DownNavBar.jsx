import React from "react";

const DownNavBar = ({ burgerState, handleSelectMegaMenu }) => {
  return (
    <div className={burgerState ? "hidden" : "px-5 py-2"}>
      {/*Unordered List*/}
      <ul className="flex flex-col md:flex-row justify-between text-base font-normal">
        <li className="mt-3 md:mt-0 md:hidden">
          <a href="#" className="bottomNavList md:hidden">
            Iniciar sesion
          </a>
        </li>

        <li
          className="mt-3 md:mt-0 flex bottomNavList"
          onClick={handleSelectMegaMenu}
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6 hover:cursor-pointer mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <a href="#" className="bottomNavList">
            CATEGORÍAS
          </a>
        </li>

        <li className="mt-3 md:mt-0">
          <a href="#" className="bottomNavList">
            OFERTAS
          </a>
        </li>
        <li className="mt-3 md:mt-0">
          <a href="#" className="bottomNavList">
            NUEVOS INGRESOS
          </a>
        </li>
        <li className="mt-3 md:mt-0">
          <a href="#" className="bottomNavList">
            SUCURSALES
          </a>
        </li>
        <li className="mt-3 md:mt-0">
          <a href="#" className="bottomNavList">
            NOSOTROS
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DownNavBar;
