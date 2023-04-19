import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import Logo from "../Logo";

const DownNavBar = ({
  handleSelectMegaMenu,
  windowWidth,
  productList,
  generarID,
}) => {
  return (
    <div className={windowWidth <= 767 ? "hidden" : "px-5 z-40 pb-2"}>
      {/* List*/}
      <ul className="flex flex-col md:flex-row justify-between text-base font-normal">
        <li className="listMegaMenu py-2.5 md:py-0 md:mt-0 md:hidden hover:cursor-pointer hover:bg-zinc-700 md:hover:bg-transparent">
          <a
            href="#"
            className="bottomNavList aMegaMenu md:hidden text-sm md:text-base"
          >
            INICIAR SECIÓN
          </a>
        </li>

        <li
          className="hidden md:flex listMegaMenu py-2.5 md:py-0 md:mt-0 flex bottomNavList aMegaMenu hover:cursor-pointer hover:bg-zinc-700 md:hover:bg-transparent"
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
          <button
            href="#"
            className="bottomNavList aMegaMenu text-sm md:text-base"
          >
            CATEGORÍAS
          </button>
        </li>

        <li className="listMegaMenu py-2.5 md:py-0 md:mt-0 hover:cursor-pointer hover:bg-zinc-700 md:hover:bg-transparent">
          <Link
            to="/ItemListContainer/catalogo"
            className="bottomNavList aMegaMenu text-sm md:text-base"
          >
            CATÁLOGO
          </Link>
        </li>

        <li className="listMegaMenu py-2.5 md:py-0 md:mt-0 hover:cursor-pointer hover:bg-zinc-700 md:hover:bg-transparent">
          <Link
            to="/ItemListContainer/Ofertas"
            className="bottomNavList aMegaMenu text-sm md:text-base"
          >
            OFERTAS
          </Link>
        </li>

        <li className="listMegaMenu py-2.5 md:py-0 md:mt-0 hover:cursor-pointer hover:bg-zinc-700 md:hover:bg-transparent">
          <Link
            to="/ItemListContainer/Ultimos Ingresos"
            className="bottomNavList aMegaMenu text-sm md:text-base"
          >
            NUEVOS INGRESOS
          </Link>
        </li>
        <li className="listMegaMenu py-2.5 md:py-0 md:mt-0 hover:cursor-pointer hover:bg-zinc-700 md:hover:bg-transparent">
          <Link
            to="/nosotros"
            className="bottomNavList aMegaMenu text-sm md:text-base"
          >
            NOSOTROS
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DownNavBar;
