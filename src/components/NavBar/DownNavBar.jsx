import React from "react";
import SearchForm from "./SearchForm";

const DownNavBar = ({ handleSelectMegaMenu, windowWidth }) => {
  return (
    <div className={windowWidth <= 767 ? "hidden" : "px-5 z-40 py-2"}>
      {/* Logo and Search Form*/}
      <div className="md:hidden">
        <div className="mb-4">
          <a href="#" className="flex items-center">
            <img
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679173118/aTempo/logo_o2vgxx.png"
              className="mr-3 logo"
              alt="Logo"
            />
            <span className="logName self-center pb-3  text-5xl  whitespace-nowrap text-white">
              aTempo
            </span>
          </a>
        </div>

        <SearchForm />
      </div>

      {/* List*/}
      <ul className="flex flex-col md:flex-row justify-between text-base font-normal">
        <li className="listMegaMenu py-2.5 md:py-0 md:mt-0 md:hidden hover:cursor-pointer hover:bg-zinc-700 md:hover:bg-transparent mt-4">
          <a
            href="#"
            className="bottomNavList aMegaMenu md:hidden text-sm md:text-base"
          >
            INICIAR SECIÓN
          </a>
        </li>

        <li
          className="listMegaMenu py-2.5 md:py-0 md:mt-0 flex bottomNavList aMegaMenu hover:cursor-pointer hover:bg-zinc-700 md:hover:bg-transparent"
          onClick={handleSelectMegaMenu}
        >
          <svg
            aria-hidden="true"
            className="hidden md:block w-6 h-6 hover:cursor-pointer hover:bg-zinc-700 md:hover:bg-transparent mr-2"
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
          <a href="#" className="bottomNavList aMegaMenu text-sm md:text-base">
            CATEGORÍAS
          </a>
        </li>

        <li className="listMegaMenu py-2.5 md:py-0 md:mt-0 hover:cursor-pointer hover:bg-zinc-700 md:hover:bg-transparent">
          <a href="#" className="bottomNavList aMegaMenu text-sm md:text-base">
            OFERTAS
          </a>
        </li>
        <li className="listMegaMenu py-2.5 md:py-0 md:mt-0 hover:cursor-pointer hover:bg-zinc-700 md:hover:bg-transparent">
          <a href="#" className="bottomNavList aMegaMenu text-sm md:text-base">
            NUEVOS INGRESOS
          </a>
        </li>
        <li className="listMegaMenu py-2.5 md:py-0 md:mt-0 hover:cursor-pointer hover:bg-zinc-700 md:hover:bg-transparent">
          <a href="#" className="bottomNavList aMegaMenu text-sm md:text-base">
            SUCURSALES
          </a>
        </li>
        <li className="listMegaMenu py-2.5 md:py-0 md:mt-0 hover:cursor-pointer hover:bg-zinc-700 md:hover:bg-transparent">
          <a href="#" className="bottomNavList aMegaMenu text-sm md:text-base">
            NOSOTROS
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DownNavBar;
