import React, { useState, useEffect } from "react";

const MegaMenu = ({
  selectMegaMenu,
  handleSelectMegaMenu,
  productList,
  generarID,
  windowWidth,
}) => {
  const [categories, setCategories] = useState([]);
  const [catg, setCatg] = useState("");
  const [brands, setBrands] = useState([]);
  const [subMenuMobile, setSubMenuMobile] = useState(false);

  /*Get Categories*/
  useEffect(() => {
    const getCategories = productList.map((prod) => prod.category);
    const uniqueCategories = getCategories.filter(
      (catg, index) => getCategories.indexOf(catg) === index
    );
    setCategories(uniqueCategories);

    setCatg(categories[0]);
  }, [productList]);

  /*Get Brands*/
  useEffect(() => {
    const brand = productList.filter((prod) => {
      return prod.category.includes(catg);
    });
    const getBrand = brand.map((prod) => prod.brand);
    const uniqueBrands = getBrand.filter(
      (brand, index) => getBrand.indexOf(brand) === index
    );

    setBrands(uniqueBrands);
  }, [catg]);

  const handleSubMegaMenuMobile = (e) => {
    setCatg(e.target.innerText);
    setSubMenuMobile(!subMenuMobile);
  };

  return (
    <div>
      {/*Desktop*/}
      <div
        className={`flex fixed bg-zinc-800 ml-4 h-fit megaMenu
        ${windowWidth <= 767 && "hidden"}
        ${selectMegaMenu ? "flex fixed" : "hidden"}`}
        onMouseLeave={handleSelectMegaMenu}
      >
        {/*Menu*/}
        <div
          id="dropdown"
          className="z-10 w-60 border-r border-zinc-700 shadow"
        >
          <ul className="py-2">
            {categories.map((catg) => (
              <li
                key={generarID()}
                className="py-2.5 hover:cursor-pointer hover:bg-zinc-700 listMegaMenu"
                onMouseOver={(e) => setCatg(e.target.innerText)}
              >
                <a className="aMegaMenu pl-4">{catg}</a>
              </li>
            ))}
          </ul>
        </div>

        {/*Submenu*/}
        <div id="dropdown" className="z-10  w-60">
          <ul className="py-2">
            {brands.map((brand) => (
              <li
                key={generarID()}
                className="py-2.5 hover:cursor-pointer hover:bg-zinc-700 listMegaMenu"
              >
                <a className="aMegaMenu pl-4">{brand}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/*Mobile*/}
      <div
        className={windowWidth <= 767 ? "hidden" : "px-5 z-40 pt-2 md:hidden"}
      >
        {/*Menu*/}
        <ul className="flex flex-col md:flex-row justify-between text-base font-normal border-b border-zinc-600 mb-1.5 pb-2">
          {categories.map((catg) => (
            <li
              key={generarID()}
              className="listMegaMenu py-2.5 md:py-0 md:mt-0 md:hidden hover:cursor-pointer hover:bg-zinc-700 md:hover:bg-transparent"
              onClick={(e) => handleSubMegaMenuMobile(e)}
            >
              <a className="bottomNavList aMegaMenu">{catg}</a>
            </li>
          ))}
        </ul>

        {/*Submenu*/}
        <div
          className={`"fixed top-28 z-40 h-screen p-4 pt-4 transition-transform -translate-x-full bg-zinc-800 w-80 " ${
            subMenuMobile ? "fixed left-80 drawerIn" : "hidden"
          }`}
        >
          <div className="flex justify-between pr-2">
            <p className="text-zinc-200 uppercase pl-4 pt-1.5">{catg}</p>
            <button
              type="button"
              data-drawer-hide="drawer-example"
              aria-controls="drawer-example"
              className="text-gray-300 btnCloseDrawer bg-transparent hover:bg-gray-200
             hover:text-gray-900 rounded-lg text-sm p-1.5  inline-flex items-center"
              onClick={(e) => handleSubMegaMenuMobile(e)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <polyline
                    data-name="Right"
                    fill="none"
                    id="Right-2"
                    points="7.6 7 2.5 12 7.6 17"
                    stroke="currentcolor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />

                  <line
                    fill="none"
                    stroke="currentcolor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="21.5"
                    x2="4.8"
                    y1="12"
                    y2="12"
                  />
                </g>
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
          </div>

          <ul className="py-2">
            {brands.map((brand) => (
              <li
                key={generarID()}
                className="py-2.5 hover:cursor-pointer hover:bg-zinc-700 listMegaMenu"
              >
                <a className="aMegaMenu pl-4">{brand}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
