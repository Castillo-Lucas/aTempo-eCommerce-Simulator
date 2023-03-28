import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/HomePage/Home";
import ProductPage from "./components/ProductPage/ProductPage";


function App() {
  return (
    <div className="">
      <Header/>
      {/*<Home />*/}
      <ProductPage/>
      <Footer />
    </div>
  );
}

export default App;
