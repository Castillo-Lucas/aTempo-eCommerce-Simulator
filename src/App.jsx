import React, { useState } from "react";
import "./App.css";
import Layer from "./components/Layer";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/HomePage/Home";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Footer from "./components/Footer";


function App() {
  const [drawer, setDrawer] = useState(false);

  const handleDrawer = (e) => {
    e.preventDefault(e);

    setDrawer(!drawer);
  };

  return (
    <div className="">
      <Layer drawer={drawer} handleDrawer={handleDrawer} />

      <NavBar />
      {/*<Home />*/}

      <ItemListContainer drawer={drawer} handleDrawer={handleDrawer} />
      <Footer />
    </div>
  );
}

export default App;
