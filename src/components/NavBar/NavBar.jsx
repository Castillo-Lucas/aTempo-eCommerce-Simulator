import React, { useState, useEffect } from "react";
import MegaMenu from "./MegaMenu";
import DownNavBar from "./DownNavBar";
import TopNavBar from "./TopNavBar";

const NavBar = ({ selectMegaMenu, handleDrawerTwo, handleSelectMegaMenu }) => {
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
    <div className="bg-zinc-800 sticky top-0 z-20">
      <div className="container mx-auto bg-zinc-800 xl:px-44 py-2.5">
        {/*Top NavBar*/}
        <TopNavBar
          handleDrawerTwo={handleDrawerTwo}
          burgerState={burgerState}
          handleBurger={handleBurger}
        />

        {/*Down NavBar*/}
        <DownNavBar
          burgerState={burgerState}
          handleSelectMegaMenu={handleSelectMegaMenu}
        />

        <MegaMenu 
          selectMegaMenu={selectMegaMenu} 
          handleSelectMegaMenu={handleSelectMegaMenu} 
        />
      </div>
    </div>
  );
};

export default NavBar;
