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
import Login from "./components/Login";
import HeaderCheckOut from "./components/HeaderCheckOut";
import FooterCheckOut from "./components/FooterCheckOut";
import CartContextProvider from "./context/CartContext";
import FilterContextProvider from "./context/FilterContext";
import LayoutActivatorContextProvider from "./context/LayoutActivatorContext";
import ProductReaderContextProvider from "./context/ProductReaderContext";
import InstitutionalPage from "./components/InstitutionalPage";

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

  return (
    <div className="App p-0 m-0">
      <Router>
        <LayoutActivatorContextProvider>
          {" "}
          <FilterContextProvider>
            <ProductReaderContextProvider>
              <CartContextProvider>
                <LayerOne />
                <LayerTwo />
                <LayerThree />
                <MiniCart showNavBar={showNavBar} />
                <DrawerLeft />

                {showNavBar === true ? <NavBar /> : <HeaderCheckOut />}

                <ScrollToTop>
                  <Routes>
                    <Route
                      path="/"
                      element={<Home setShowNavBar={setShowNavBar} />}
                    />
                    <Route
                      path="/ItemListContainer/:category/:brand"
                      element={<ItemListContainer />}
                    />
                    <Route
                      exact
                      path="/ItemDetail/:productId"
                      element={<ItemDetail />}
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

                    <Route path="/nosotros/:sectionId" element={<Nosotros />} />
                    <Route
                      path="/institutional/:sectionId"
                      element={<InstitutionalPage />}
                    />
                    <Route path="/login" element={<Login />} />

                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </ScrollToTop>

                {showNavBar ? <Footer /> : <FooterCheckOut />}
              </CartContextProvider>
            </ProductReaderContextProvider>
          </FilterContextProvider>
        </LayoutActivatorContextProvider>
      </Router>
    </div>
  );
}

export default App;
