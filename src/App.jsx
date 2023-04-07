import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
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
import NotFound from "./components/NotFound";

/*Function to open the next page on top*/
function ScrollToTop({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
}

function App() {
  const [drawerOne, setDrawerOne] = useState(false);
  const [drawerTwo, setDrawerTwo] = useState(false);
  const [drawerOneContent, setDrawerOneContent] = useState("Filter");
  const [layerTwo, setLayerTwo] = useState(false);
  const [layerThree, setLayerThree] = useState(false);
  const [selectMegaMenu, setSelectMegaMenu] = useState(false);

  /*Function to opern Drawer Left*/
  const handleDrawerOne = (e, Data) => {
    e.preventDefault(e);

    setDrawerOne(!drawerOne);
    setDrawerOneContent(Data);
  };

  /*Function to opern Drawer Right*/
  const handleDrawerTwo = (e) => {
    e.preventDefault(e);

    setDrawerTwo(!drawerTwo);
    setLayerTwo(!layerTwo);
  };

  /*Function to opern Mega Menu*/
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

      <Router>
        <NavBar
          selectMegaMenu={selectMegaMenu}
          handleDrawerOne={handleDrawerOne}
          handleDrawerTwo={handleDrawerTwo}
          handleSelectMegaMenu={handleSelectMegaMenu}
        />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/itemList"
              element={
                <ItemListContainer
                  drawerOne={drawerOne}
                  drawerOneContent={drawerOneContent}
                  handleDrawerOne={handleDrawerOne}
                />
              }
            />
            <Route
              path="/product-sheet/:productId"
              element={<ProductSheet />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollToTop>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
