import React, { useContext } from "react";
import CartWidget from "./CartWidget";
import SearchForm from "./SearchForm";
import Logo from "../Logo";
import { LayoutActivatorContext } from "../../context/LayoutActivatorContext";

const TopNavBar = ({ productList }) => {
  const { handleDrawerOne } = useContext(LayoutActivatorContext);
  return (
    <div className="grid grid-cols-12 px-2 md:px-5 m-0 w-full">
      {/*Logo*/}
      <div className="my-auto col-span-5 md:col-span-4  lg:col-span-3">
        <Logo />
      </div>

      <div className="lg:hidden col-span-3  md:col-span-5"></div>

      {/*Search Form*/}
      <SearchForm productList={productList} />

      {/*Icons Section*/}
      <div className="my-auto col-span-2 md:col-span-2 ">
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
          <CartWidget />
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
          onClick={(e) => {
            handleDrawerOne(e, "Categories");
          }}
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
  );
};

export default TopNavBar;
