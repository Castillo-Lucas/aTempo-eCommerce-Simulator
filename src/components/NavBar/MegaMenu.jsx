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

  return (
    <div>
      <div
        className={`flex fixed bg-zinc-800 ml-4 h-fit megaMenu
        ${windowWidth <= 767 && "hidden"}
        ${selectMegaMenu ? "flex fixed" : "hidden"}`}
        onMouseLeave={handleSelectMegaMenu}
      >
        {/*Dropdown menu*/}
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

        {/*Dropdown Submenu*/}
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

      <div
        className={windowWidth <= 767 ? "hidden" : "px-5 z-40 py-2 md:hidden"}
      >
        <p className="text-white">probando Mega Menu</p>
      </div>
    </div>
  );
};

export default MegaMenu;
