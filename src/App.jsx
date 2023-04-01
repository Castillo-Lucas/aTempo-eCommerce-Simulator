import React, { useState } from "react";
import "./App.css";
import Layer from "./components/Layer";
import LayerTwo from "./components/LayerTwo";
import NavBar from "./components/NavBar/NavBar";
import DrawerRight from "./components/NavBar/DrawerRight";
import Home from "./components/HomePage/Home";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Footer from "./components/Footer";

function App() {
  const [drawer, setDrawer] = useState(false);
  const [drawerTwo, setDrawerTwo] = useState(false);

  const handleDrawer = (e) => {
    e.preventDefault(e);

    setDrawer(!drawer);
  };

  const handleDrawerTwo = (e) => {
    e.preventDefault(e);

    setDrawerTwo(!drawerTwo);
  };

  return (
    <div className="App p-0 m-0">
      <Layer drawer={drawer} handleDrawer={handleDrawer} />
      <LayerTwo drawerTwo={drawerTwo} handleDrawerTwo={handleDrawerTwo} />

      <NavBar handleDrawerTwo={handleDrawerTwo} />
      {/*<Home />*/}
            
      <DrawerRight drawerTwo={drawerTwo} handleDrawerTwo={handleDrawerTwo} />

      <ItemListContainer drawer={drawer} handleDrawer={handleDrawer} />
      <Footer />
    </div>
  );
}

export default App;
