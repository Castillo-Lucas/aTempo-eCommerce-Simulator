import React, { useState } from "react";
import "./App.css";
import Layer from "./components/Layer";
import LayerTwo from "./components/LayerTwo";
import LayerThree from "./components/LayerThree";
import NavBar from "./components/NavBar/NavBar";
import DrawerRight from "./components/NavBar/DrawerRight";
import Home from "./components/HomePage/Home";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Footer from "./components/Footer";

function App() {
  const [drawer, setDrawer] = useState(false);
  const [drawerTwo, setDrawerTwo] = useState(false);
  const [layerTwo, setLayerTwo] = useState(false);
  const [layerThree, setLayerThree] = useState(false);
  const [selectMegaMenu, setSelectMegaMenu] = useState(false);

  console.log(layerTwo);

  const handleDrawer = (e) => {
    e.preventDefault(e);

    setDrawer(!drawer);
  };

  const handleDrawerTwo = (e) => {
    e.preventDefault(e);

    setDrawerTwo(!drawerTwo);
    setLayerTwo(!layerTwo);
  };

  const handleSelectMegaMenu = (e) => {
    e.preventDefault(e);

    setSelectMegaMenu(!selectMegaMenu);
    setLayerThree(!layerThree);
  };

  return (
    <div className="App p-0 m-0">
      <Layer drawer={drawer} handleDrawer={handleDrawer} />
      <LayerTwo layerTwo={layerTwo} handleDrawerTwo={handleDrawerTwo} />

      <LayerThree
        layerThree={layerThree}
        handleSelectMegaMenu={handleSelectMegaMenu}
      />

      <NavBar
        selectMegaMenu={selectMegaMenu}
        handleDrawerTwo={handleDrawerTwo}
        handleSelectMegaMenu={handleSelectMegaMenu}
      />
      {/*<Home />*/}

      <DrawerRight drawerTwo={drawerTwo} handleDrawerTwo={handleDrawerTwo} />

      <ItemListContainer drawer={drawer} handleDrawer={handleDrawer} />
      <Footer />
    </div>
  );
}

export default App;
