import React, { useState, useEffect, useDebugValue } from "react";
import BannerFive from "./BannerFive";
import Card from "./Card";
import FilterSection from "./FilterSection";
import "../../App.css";
import Pagination from "./Pagination";

const ItemListContainer = ({
  drawerOne,
  handleDrawerOne,
}) => {

  const [productList, setProductList] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);

  console.log(newProducts);

  useEffect(() => {
    const url = `https://res.cloudinary.com/dthpuldpm/raw/upload/v1680903467/aTempo/Assets/productList_p1hhov.json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProductList(data));
  }, []);

  useEffect(() => {
    const newProduct = productList.filter(
      (producto) => producto.bestSeller.length > 1
    );
    const bestSeller = productList.filter(
      (producto) => producto.bestSeller.length > 1
    );
    setNewProducts(newProduct);
    setBestSellers(bestSeller);
  }, [productList]);

  return (
    <div>
      <BannerFive />

      <div className="lg:container mx-auto 2xl:px-20  grid grid-cols-12 mt-4 lg:mt-8 mb-3">
        <FilterSection
          drawerOne={drawerOne}
          handleDrawerOne={handleDrawerOne}
        />

        <div className="col-span-12 lg:col-span-10">
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            {productList.map((products) => (
              <Card key={products.id} products={products} />
            ))}
          </div>

          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
