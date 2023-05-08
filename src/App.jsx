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
import MiniCart from "./components/Cart/MiniCart";
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
import CartContextProvider from "./context/CartContext";
import FilterContextProvider from "./context/FilterContext";

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
  const [bestSellers, setBestSellers] = useState([]);
  const [newProducts, setNewProducts] = useState([]);

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
        <FilterContextProvider>
          <CartContextProvider>
            <LayerOne drawerOne={drawerOne} handleDrawerOne={handleDrawerOne} />
            <LayerTwo layerTwo={layerTwo} handleDrawerTwo={handleDrawerTwo} />
            <LayerThree
              layerThree={layerThree}
              handleSelectMegaMenu={handleSelectMegaMenu}
            />
            <MiniCart
              drawerTwo={drawerTwo}
              handleDrawerTwo={handleDrawerTwo}
              showNavBar={showNavBar}
            />
            <DrawerLeft
              drawerOne={drawerOne}
              drawerOneContent={drawerOneContent}
              handleDrawerOne={handleDrawerOne}
              productList={productList}
              generarID={generarID}
            />

            {showNavBar === true ? (
              <NavBar
                selectMegaMenu={selectMegaMenu}
                handleDrawerOne={handleDrawerOne}
                handleDrawerTwo={handleDrawerTwo}
                handleSelectMegaMenu={handleSelectMegaMenu}
                productList={productList}
                generarID={generarID}
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
                      spinner={spinner}
                      setSpinner={setSpinner}
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
                    />
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <Cart
                      setSpinner={setSpinner}
                      showNavBar={showNavBar}
                      setShowNavBar={setShowNavBar}
                    />
                  }
                />
                <Route path="/checkout" element={<CheckOut />} />
                <Route
                  path="/orderConfirmation"
                  element={
                    <OrderConfirmation
                      setShowNavBar={setShowNavBar}
                      spinner={spinner}
                      setSpinner={setSpinner}
                    />
                  }
                />

                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </ScrollToTop>

            {showNavBar ? <Footer /> : <FooterCheckOut />}
          </CartContextProvider>
        </FilterContextProvider>
      </Router>
    </div>
  );
}

export default App;
