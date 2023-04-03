import React from "react";

const DownNavBar = ({ burgerState, handleSelectMegaMenu }) => {
  return (
    <div className={burgerState ? "hidden" : "px-5 z-40 py-2"}>
      {/* List*/}
      <ul className="flex flex-col md:flex-row justify-between text-base font-normal">
        <li className="listMegaMenu py-2.5 md:py-0 md:mt-0 md:hidden hover:cursor-pointer hover:bg-zinc-700">
          <a href="#" className="bottomNavList aMegaMenu md:hidden">
            INICIAR SECION
          </a>
        </li>

        <li
          className="listMegaMenu py-2.5 md:py-0 md:mt-0 flex bottomNavList hover:cursor-pointer hover:bg-zinc-700 md:hover:bg-transparent"
          onClick={handleSelectMegaMenu}
        >
          <svg
            aria-hidden="true"
            className="hidden md:block w-6 h-6 hover:cursor-pointer mr-2"
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
          <a href="#" className="bottomNavList aMegaMenu">
            CATEGORÍAS
          </a>
        </li>

        <li className="listMegaMenu py-2.5 md:py-0 md:mt-0 hover:cursor-pointer hover:bg-zinc-700 md:hover:bg-transparent">
          <a href="#" className="bottomNavList aMegaMenu">
            OFERTAS
          </a>
        </li>
        <li className="listMegaMenu py-2.5 md:py-0 md:mt-0 hover:cursor-pointer hover:bg-zinc-700 md:hover:bg-transparent">
          <a href="#" className="bottomNavList aMegaMenu">
            NUEVOS INGRESOS
          </a>
        </li>
        <li className="listMegaMenu py-2.5 md:py-0 md:mt-0 hover:cursor-pointer hover:bg-zinc-700 md:hover:bg-transparent">
          <a href="#" className="bottomNavList aMegaMenu">
            SUCURSALES
          </a>
        </li>
        <li className="listMegaMenu py-2.5 md:py-0 md:mt-0 hover:cursor-pointer hover:bg-zinc-700 md:hover:bg-transparent">
          <a href="#" className="bottomNavList aMegaMenu">
            NOSOTROS
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DownNavBar;
