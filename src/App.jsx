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
import LayoutActivatorContextProvider from "./context/LayoutActivatorContext";

/*Function to open the next page on top*/
function ScrollToTop({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
}

function App() {
  const [showNavBar, setShowNavBar] = useState(true);
  const [productList, setProductList] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [newProducts, setNewProducts] = useState([]);

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

  return (
    <div className="App p-0 m-0">
      <Router>
        <LayoutActivatorContextProvider>
          {" "}
          <FilterContextProvider>
            <CartContextProvider>
              <LayerOne />
              <LayerTwo />
              <LayerThree />
              <MiniCart showNavBar={showNavBar} />
              <DrawerLeft productList={productList} />

              {showNavBar === true ? (
                <NavBar productList={productList} />
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
                    element={<ItemListContainer productList={productList} />}
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
                        showNavBar={showNavBar}
                        setShowNavBar={setShowNavBar}
                      />
                    }
                  />
                  <Route path="/checkout" element={<CheckOut />} />
                  <Route
                    path="/orderConfirmation"
                    element={
                      <OrderConfirmation setShowNavBar={setShowNavBar} />
                    }
                  />

                  <Route path="/nosotros" element={<Nosotros />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </ScrollToTop>

              {showNavBar ? <Footer /> : <FooterCheckOut />}
            </CartContextProvider>
          </FilterContextProvider>
        </LayoutActivatorContextProvider>
      </Router>
    </div>
  );
}

export default App;
