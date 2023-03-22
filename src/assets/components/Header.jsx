import React, { useState, useEffect } from "react";

const Header = () => {
  const [burgerState, setBurgerState] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth >= 768) {
      setBurgerState(false);
    } else {
      setBurgerState(true);
    }
  }, [windowWidth]);

  const handleBurger = () => {
    setBurgerState(!burgerState);
  };

  return (
    <div className="bg-zinc-800 mb-10">
      <div className="container mx-auto bg-zinc-800 xl:px-44 py-2.5">
        {/*Top Nav*/}
        <div className="grid grid-cols-12 px-5 m-0 w-full">
          {/*Logo*/}
          <div className="my-auto col-span-8 md:col-span-4 lg:col-span-3">
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

          {/*Search Form*/}
          <div
            className={
              burgerState
                ? "hidden"
                : "order-last md:order-none mt-3 md:my-auto col-span-12 md:col-span-6 lg:col-span-7"
            }
          >
            <form>
              <div className="flex">
                <div className="relative w-full">
                  <input
                    type="search"
                    id="search-dropdown"
                    className="block p-1.5 md:p-2.5 w-full z-20 text-sm text-gray-500 bg-gray-50 rounded-lg border-l-gray-50 border-l-2 border"
                    placeholder="Busca lo que mas te gusta..."
                    required
                  />
                  <button
                    type="submit"
                    className="buttonSearchForm absolute top-0 right-0 p-1.5 md:p-2.5 text-sm font-medium text-white bg-gray-50 rounded-r-lg focus:ring-0.5 focus:outline-none focus:ring-blue-300"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="none"
                      stroke="#1E1E1E"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/*Icons Section*/}
          <div className="my-auto col-span-3 md:col-span-2 ">
            <div className="flex justify-around">
              {/*User Icon*/}
              <svg
                width="35px"
                height="35px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="icon hidden md:block hover:cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9ZM15.8243 13.6235C17.1533 12.523 18 10.8604 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 10.8604 6.84668 12.523 8.17572 13.6235C4.98421 14.7459 3 17.2474 3 20C3 20.5523 3.44772 21 4 21C4.55228 21 5 20.5523 5 20C5 17.7306 7.3553 15 12 15C16.6447 15 19 17.7306 19 20C19 20.5523 19.4477 21 20 21C20.5523 21 21 20.5523 21 20C21 17.2474 19.0158 14.7459 15.8243 13.6235Z"
                />
              </svg>

              {/*Cart Icon*/}
              <svg
                width="35px"
                height="35px"
                viewBox="0 0 24 24"
                fill="#ffff"
                xmlns="http://www.w3.org/2000/svg"
                className="icon cartIcon hover:cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 2C1.44772 2 1 2.44772 1 3C1 3.55228 1.44772 4 2 4H2.47241C2.92336 4 3.31852 4.30182 3.43717 4.73688L3.85342 6.26312L6 14.1339V16C6 16.6935 6.23533 17.3321 6.63048 17.8402C6.23824 18.2816 6 18.863 6 19.5C6 20.8807 7.11929 22 8.5 22C9.88071 22 11 20.8807 11 19.5C11 19.3288 10.9828 19.1616 10.95 19H14.05C14.0172 19.1616 14 19.3288 14 19.5C14 20.8807 15.1193 22 16.5 22C17.8807 22 19 20.8807 19 19.5C19 19.1715 18.9366 18.8578 18.8215 18.5704C18.934 18.4086 19 18.212 19 18C19 17.4477 18.5523 17 18 17H16.5H9C8.44772 17 8 16.5523 8 16V15H18.236C19.1381 15 19.9285 14.3962 20.1657 13.5258L21.8007 7.52583C22.1473 6.25364 21.1896 5 19.871 5H5.58198L5.3667 4.21065C5.01074 2.90547 3.82526 2 2.47241 2H2ZM16.5 19C16.2239 19 16 19.2239 16 19.5C16 19.7761 16.2239 20 16.5 20C16.7761 20 17 19.7761 17 19.5C17 19.2239 16.7761 19 16.5 19ZM18.236 13H7.7638L6.12743 7H19.871L18.236 13ZM8.5 19C8.22386 19 8 19.2239 8 19.5C8 19.7761 8.22386 20 8.5 20C8.77614 20 9 19.7761 9 19.5C9 19.2239 8.77614 19 8.5 19Z"
                />
              </svg>
            </div>
          </div>
          {/*Burger Menu */}
          <div className="my-auto mx-auto text-center col-span-1 md:hidden">
            <button
              data-collapse-toggle="mega-menu"
              type="button"
              className="inline-flex items-center text-sm text-gray-50 rounded-lg md:hidden py-1 px-1 burgerMenu"
              aria-controls="mega-menu"
              aria-expanded="false"
              onClick={handleBurger}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                aria-hidden="true"
                className="w-6 h-6 burgerMenuSVG"
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
            </button>
          </div>
        </div>

        {/*Bottom Nav*/}
        <div className={burgerState ? "hidden" : "px-5 py-1"}>
          {/*Unordered List*/}
          <ul className="flex flex-col md:flex-row justify-between text-base font-normal">
            <li className="mt-3 md:mt-0 md:hidden">
              <a href="#" className="bottomNavList md:hidden">
                Iniciar sesion
              </a>
            </li>
            <li className="mt-3 md:mt-0">
              <a href="#" className="bottomNavList">
                Guitarras
              </a>
            </li>
            <li className="mt-3 md:mt-0">
              <a href="#" className="bottomNavList">
                Bajos
              </a>
            </li>
            <li className="mt-3 md:mt-0">
              <a href="#" className="bottomNavList">
                Baterías
              </a>
            </li>
            <li className="mt-3 md:mt-0">
              <a href="#" className="bottomNavList">
                Pianos
              </a>
            </li>
            <li className="mt-3 md:mt-0">
              <a href="#" className="bottomNavList">
                Amplificadores
              </a>
            </li>
            <li className="mt-3 md:mt-0">
              <a href="#" className="bottomNavList">
                Efectos
              </a>
            </li>
            <li className="mt-3 md:mt-0">
              <a href="#" className="bottomNavList">
                MIDI
              </a>
            </li>
            <li className="mt-3 md:mt-0">
              <a href="#" className="bottomNavList">
                Home Studio
              </a>
            </li>
            <li className="mt-3 md:mt-0">
              <a href="#" className="bottomNavList">
                DJ
              </a>
            </li>
            <li className="mt-3 md:mt-0">
              <a href="#" className="bottomNavList">
                Accesorios
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
