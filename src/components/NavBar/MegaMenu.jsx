import React from "react";

const MegaMenu = ({ selectMegaMenu, handleSelectMegaMenu }) => {
  return (



    /*Insertar luego despues del primer operador ternario: onMouseLeave={handleSelectMegaMenu}*/
    <div>
      <div
        className={`flex fixed bg-zinc-800 ml-4 megaMenu ${
          selectMegaMenu ? "flex fixed" : "hidden"
        }`}  
        onMouseLeave={handleSelectMegaMenu}      
      >
        {/*Dropdown menu*/}
        <div
          id="dropdown"
          className="z-10 w-60 border-r border-zinc-700"
        >
          <ul className="py-2">
            <li className="py-2.5 hover:cursor-pointer hover:bg-zinc-700 listMegaMenu">
              <a className="aMegaMenu pl-4">Guitarras</a>
            </li>
            <li className="py-2.5 hover:cursor-pointer hover:bg-zinc-700 listMegaMenu">
              <a className="aMegaMenu pl-4">Bajos</a>
            </li>
            <li className="py-2.5 hover:cursor-pointer hover:bg-zinc-700 listMegaMenu">
              <a className="aMegaMenu pl-4">Baterías</a>
            </li>
            <li className="py-2.5 hover:cursor-pointer hover:bg-zinc-700 listMegaMenu">
              <a className="aMegaMenu pl-4">Pianos</a>
            </li>
            <li className="py-2.5 hover:cursor-pointer hover:bg-zinc-700 listMegaMenu">
              <a className="aMegaMenu pl-4">
                Amplificadores
              </a>
            </li>
            <li className="py-2.5 hover:cursor-pointer hover:bg-zinc-700 listMegaMenu">
              <a className="aMegaMenu pl-4">Efectos</a>
            </li>
            <li className="py-2.5 hover:cursor-pointer hover:bg-zinc-700 listMegaMenu">
              <a className="aMegaMenu pl-4">MIDI</a>
            </li>
            <li className="py-2.5 hover:cursor-pointer hover:bg-zinc-700 listMegaMenu">
              <a className="aMegaMenu pl-4">Home Studio</a>
            </li>
            <li className="py-2.5 hover:cursor-pointer hover:bg-zinc-700 listMegaMenu">
              <a className="aMegaMenu pl-4">DJ</a>
            </li>
            <li className="py-2.5 hover:cursor-pointer hover:bg-zinc-700 listMegaMenu">
              <a className="aMegaMenu pl-4">Accesorios</a>
            </li>
          </ul>
        </div>

        {/*Dropdown Submenu*/}
        <div id="dropdown" className="z-10  w-60">
          <ul className="py-2">
            <li className="py-2.5 hover:cursor-pointer hover:bg-zinc-700 listMegaMenu">
              <a className="aMegaMenu pl-4">Fender</a>
            </li>

            <li className="py-2.5 hover:cursor-pointer hover:bg-zinc-700 listMegaMenu">
              <a className="aMegaMenu pl-4">Gibson</a>
            </li>

            <li className="py-2.5 hover:cursor-pointer hover:bg-zinc-700 listMegaMenu">
              <a className="aMegaMenu pl-4">Gretch</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
