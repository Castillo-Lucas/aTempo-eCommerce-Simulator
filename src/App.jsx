import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
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
import Nosotros from "./components/Nosotros";

/*Function to open the next page on top*/
function ScrollToTop({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
}

function App() {
  const [productList, setProductList] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [drawerOne, setDrawerOne] = useState(false);
  const [drawerTwo, setDrawerTwo] = useState(false);
  const [drawerOneContent, setDrawerOneContent] = useState("Filter");
  const [layerTwo, setLayerTwo] = useState(false);
  const [layerThree, setLayerThree] = useState(false);
  const [selectMegaMenu, setSelectMegaMenu] = useState(false);
  const [spinner, setSpinner] = useState(false);
  

  /*Get Items*/
  useEffect(() => {
    const url = `https://res.cloudinary.com/dthpuldpm/raw/upload/v1680903467/aTempo/Assets/productList_p1hhov.json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProductList(data));
  }, []);

  /*Separate items for carousels*/
  useEffect(() => {
    const bestSeller = productList.filter((producto) => producto.bestSeller);
    const newProduct = productList.filter((producto) => producto.newEntry);

    setBestSellers(bestSeller);
    setNewProducts(newProduct);
  }, [productList]);

  /*Function to open Drawer Left*/
  const handleDrawerOne = (e, Data) => {
    e.preventDefault(e);

    setDrawerOne(!drawerOne);
    setDrawerOneContent(Data);
  };

  /*Function to open Drawer Right*/
  const handleDrawerTwo = (e) => {
    e.preventDefault(e);

    setDrawerTwo(!drawerTwo);
    setLayerTwo(!layerTwo);
  };

  /*Function to open Mega Menu*/
  const handleSelectMegaMenu = (e) => {
    e.preventDefault(e);

    setSelectMegaMenu(!selectMegaMenu);
    setLayerThree(!layerThree);
  };

  /*ID Generator*/
  const generarID = () => {
    const Id1 = Math.random().toString(36).substring(2);
    const Id2 = Date.now().toString(36);
    return Id1 + Id2;
  };

  return (
    <div className="App p-0 m-0">
      <Router>
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
          productList={productList}
          generarID={generarID}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        <NavBar
          selectMegaMenu={selectMegaMenu}
          handleDrawerOne={handleDrawerOne}
          handleDrawerTwo={handleDrawerTwo}
          handleSelectMegaMenu={handleSelectMegaMenu}
          productList={productList}
          generarID={generarID}
        />
        <ScrollToTop>
          <Routes>
            <Route
              path="/"
              element={
                <Home bestSellers={bestSellers} newProducts={newProducts} />
              }
            />
            <Route
              path="/itemList"
              element={
                <ItemListContainer
                  drawerOne={drawerOne}
                  handleDrawerOne={handleDrawerOne}
                  productList={productList}
                  selectedFilters={selectedFilters}
                  setSelectedFilters={setSelectedFilters}
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                  spinner={spinner}
                  setSpinner={setSpinner}
                />
              }
            />
            <Route
              path="/product-sheet/:productId"
              element={
                <ProductSheet
                  productList={productList}
                  bestSellers={bestSellers}
                  newProducts={newProducts}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
            <Route path="/nosotros" element={<Nosotros />} />
          </Routes>
        </ScrollToTop>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
