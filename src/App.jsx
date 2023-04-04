import React, { useState } from "react";
import "./App.css";
import LayerOne from "./components/LayerOne";
import LayerTwo from "./components/LayerTwo";
import LayerThree from "./components/LayerThree";
import NavBar from "./components/NavBar/NavBar";
import DrawerRight from "./components/NavBar/DrawerRight";
import DrawerLeft from "./components/ItemList/DrawerLeft";
import Home from "./components/HomePage/Home";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ProductSheet from "./components/ProductSheet/ProductSheet";


import Footer from "./components/Footer";


function App() {
  const [drawerOne, setDrawerOne] = useState(false);
  const [drawerTwo, setDrawerTwo] = useState(false);
  const [drawerOneContent, setDrawerOneContent] = useState("Filter");
  const [layerTwo, setLayerTwo] = useState(false);
  const [layerThree, setLayerThree] = useState(false);
  const [selectMegaMenu, setSelectMegaMenu] = useState(false);

  const handleDrawerOne = (e, Data) => {
    e.preventDefault(e);

    setDrawerOne(!drawerOne);
    setDrawerOneContent(Data);
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
      <LayerOne drawerOne={drawerOne} handleDrawerOne={handleDrawerOne} />
      <LayerTwo layerTwo={layerTwo} handleDrawerTwo={handleDrawerTwo} />
      <LayerThree
        layerThree={layerThree}
        handleSelectMegaMenu={handleSelectMegaMenu}
      />
      <DrawerRight drawerTwo={drawerTwo} handleDrawerTwo={handleDrawerTwo} />
      <DrawerLeft
        drawerOne={drawerOne}
        drawerOneContent={drawerOneContent}
        handleDrawerOne={handleDrawerOne}
      />

      <NavBar
        selectMegaMenu={selectMegaMenu}
        handleDrawerOne={handleDrawerOne}
        handleDrawerTwo={handleDrawerTwo}
        handleSelectMegaMenu={handleSelectMegaMenu}
      />
      {/*<Home />*/}

      {/*<ItemListContainer
        drawerOne={drawerOne}
        drawerOneContent={drawerOneContent}
        handleDrawerOne={handleDrawerOne}
      />*/}

      <ProductSheet />
      <Footer />
    </div>
  );
}

export default App;
