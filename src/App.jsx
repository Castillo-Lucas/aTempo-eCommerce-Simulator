import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/HomePage/Home";
import ProductPage from "./components/ProductPage/ProductPage";
import Layer from "./components/Layer";

function App() {
  const [drawer, setDrawer] = useState(false);

  const handleDrawer = (e) => {
    e.preventDefault(e);

    setDrawer(!drawer);
  };

  return (
    <div className="">
      <Layer drawer={drawer} handleDrawer={handleDrawer} />

      <Header />
      {/*<Home />*/}

      <ProductPage drawer={drawer} handleDrawer={handleDrawer} />
      <Footer />
    </div>
  );
}

export default App;
