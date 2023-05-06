import React, { useState, useEffect, useMemo } from "react";
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
import ItemDetail from "./components/ItemDetail/ItemDetail";
import Cart from "./components/Cart/Cart";
import CheckOut from "./components/CheckOut/CheckOut";
import OrderConfirmation from "./components/OrderConfirmation/OrderConfirmation";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Nosotros from "./components/Nosotros";
import HeaderCheckOut from "./components/HeaderCheckOut";
import FooterCheckOut from "./components/FooterCheckOut";

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
  const [selectedFiltersSort, setSelectedFiltersSort] = useState([]);
  const [selectedFiltersForFilter, setSelectedFiltersForFilter] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [bestSellers, setBestSellers] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [subTotalPurchase, setSubTotalPurchase] = useState();
  const [shipping, setShipping] = useState(0);
  const [totalPurchase, setTotalPurchase] = useState();

  /*Layout Activators */
  const [drawerOne, setDrawerOne] = useState(false);
  const [drawerTwo, setDrawerTwo] = useState(false);
  const [drawerOneContent, setDrawerOneContent] = useState("Filter");
  const [layerTwo, setLayerTwo] = useState(false);
  const [layerThree, setLayerThree] = useState(false);
  const [selectMegaMenu, setSelectMegaMenu] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [showNavBar, setShowNavBar] = useState(true);

  /*Get Items*/
  useEffect(() => {
    const url = `https://res.cloudinary.com/dthpuldpm/raw/upload/v1682176449/aTempo/Assets/aTempoProducts_no7idv.json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProductList(data));
  }, []);

  /*Getting sub total purchase*/
  useEffect(() => {
    const arrtotalPirce = cart.map((prod) => prod.totalPurchase);
    const totalPrice = arrtotalPirce.reduce(
      (acumulador, valorActual) => acumulador + valorActual,
      0
    );
    setSubTotalPurchase(totalPrice);
  }, [cart]);

  /*Getting shipping price*/
  useEffect(() => {
    if (subTotalPurchase === 0) {
      setShipping(0);
    } else if (subTotalPurchase >= 1 && subTotalPurchase <= 499) {
      setShipping(20);
    } else if (subTotalPurchase >= 500) {
      setShipping(0);
      console.log("NO se cobra envio");
    }
  }, [subTotalPurchase, cart]);

  /*Getting total purchase*/
  useEffect(() => {
    setTotalPurchase(subTotalPurchase + shipping);
  }, [subTotalPurchase, shipping]);

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
        <DrawerRight
          drawerTwo={drawerTwo}
          handleDrawerTwo={handleDrawerTwo}
          cart={cart}
          setCart={setCart}
          subTotalPurchase={subTotalPurchase}
          setSubTotalPurchase={setSubTotalPurchase}
          totalPurchase={totalPurchase}
          showNavBar={showNavBar}
        />
        <DrawerLeft
          drawerOne={drawerOne}
          drawerOneContent={drawerOneContent}
          handleDrawerOne={handleDrawerOne}
          productList={productList}
          generarID={generarID}
          setSelectedFiltersSort={setSelectedFiltersSort}
          setSelectedFiltersForFilter={setSelectedFiltersForFilter}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          brandList={brandList}
          fromValue={fromValue}
          setFromValue={setFromValue}
          toValue={toValue}
          setToValue={setToValue}
        />

        {showNavBar === true ? (
          <NavBar
            selectMegaMenu={selectMegaMenu}
            handleDrawerOne={handleDrawerOne}
            handleDrawerTwo={handleDrawerTwo}
            handleSelectMegaMenu={handleSelectMegaMenu}
            productList={productList}
            generarID={generarID}
            cart={cart}
            setCart={setCart}
          />
        ) : (
          <HeaderCheckOut />
        )}

        <ScrollToTop>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  bestSellers={bestSellers}
                  newProducts={newProducts}
                  setShowNavBar={setShowNavBar}
                />
              }
            />
            <Route
              path="/ItemListContainer/:category/:brand"
              element={
                <ItemListContainer
                  handleDrawerOne={handleDrawerOne}
                  productList={productList}
                  selectedFiltersSort={selectedFiltersSort}
                  setSelectedFiltersSort={setSelectedFiltersSort}
                  selectedFiltersForFilter={selectedFiltersForFilter}
                  setSelectedFiltersForFilter={setSelectedFiltersForFilter}
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                  selectedBrands={selectedBrands}
                  setSelectedBrands={setSelectedBrands}
                  spinner={spinner}
                  setSpinner={setSpinner}
                  brandList={brandList}
                  setBrandList={setBrandList}
                  fromValue={fromValue}
                  setFromValue={setFromValue}
                  toValue={toValue}
                  setToValue={setToValue}
                />
              }
            />
            <Route
              exact
              path="/ItemDetail/:productId"
              element={
                <ItemDetail
                  productList={productList}
                  bestSellers={bestSellers}
                  newProducts={newProducts}
                  cart={cart}
                  setCart={setCart}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  setSpinner={setSpinner}
                  setShowNavBar={setShowNavBar}
                  cart={cart}
                  setCart={setCart}
                  subTotalPurchase={subTotalPurchase}
                  totalPurchase={totalPurchase}
                  showNavBar={showNavBar}
                />
              }
            />
            <Route
              path="/checkout"
              element={
                <CheckOut
                  spinner={spinner}
                  setSpinner={setSpinner}
                  subTotalPurchase={subTotalPurchase}
                  totalPurchase={totalPurchase}
                  shipping={shipping}
                  setShipping={setShipping}
                />
              }
            />
            <Route
              path="/orderConfirmation"
              element={
                <OrderConfirmation
                  setShowNavBar={setShowNavBar}
                  setSpinner={setSpinner}
                />
              }
            />

            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollToTop>

        {showNavBar ? <Footer /> : <FooterCheckOut />}
      </Router>
    </div>
  );
}

export default App;
