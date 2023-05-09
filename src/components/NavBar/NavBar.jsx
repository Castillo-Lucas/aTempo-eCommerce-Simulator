import React, { useState, useEffect, useContext } from "react";
import MegaMenu from "./MegaMenu";
import DownNavBar from "./DownNavBar";
import TopNavBar from "./TopNavBar";
import { LayoutActivatorContext } from "../../context/LayoutActivatorContext";

const NavBar = ({ productList }) => {
  const { selectMegaMenu, handleSelectMegaMenu } = useContext(
    LayoutActivatorContext
  );

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

  return (
    <div className="bg-zinc-800 sticky top-0 z-20">
      <div className="container mx-auto bg-zinc-800 xl:px-44 py-2.5">
        {/*Top NavBar*/}
        <TopNavBar productList={productList} />

        {/*Down NavBar*/}
        <DownNavBar
          handleSelectMegaMenu={handleSelectMegaMenu}
          windowWidth={windowWidth}
        />

        <MegaMenu
          selectMegaMenu={selectMegaMenu}
          handleSelectMegaMenu={handleSelectMegaMenu}
          productList={productList}
          windowWidth={windowWidth}
        />
      </div>
    </div>
  );
};

export default NavBar;
