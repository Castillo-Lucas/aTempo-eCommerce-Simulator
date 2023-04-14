import React, { useState, useEffect, useDebugValue } from "react";
import BannerFive from "./BannerFive";
import Card from "./Card";
import FilterSection from "./FilterSection";
import "../../App.css";
import Pagination from "./Pagination";
import Spinner from "../Spinner";

const ItemListContainer = ({
  drawerOne,
  handleDrawerOne,
  productList,
  selectedFilters,
  setSelectedFilters,
  spinner,
  setSpinner,
}) => {
  const [orderedProducts, setOrderedProducts] = useState([]);

  console.log(orderedProducts);

  const order = () => {
    let orderedList = [...productList];

    orderedList.sort((a, b) => a.position - b.position);

    selectedFilters.forEach((filter) => {
      if (filter === "Menor a Mayor") {
        orderedList = orderedList.sort((a, b) => a.price - b.price);
      } else if (filter === "Mayor a Menor") {
        orderedList = orderedList.sort((a, b) => b.price - a.price);
      } else if (filter === "Más Vendidos") {
        orderedList = orderedList.filter((prod) => prod.bestSeller);
      } else if (filter === "Ultimos Ingresos") {
        orderedList = orderedList.filter((prod) => prod.newEntry);
      } else if (filter === "A - Z") {
        orderedList = orderedList.sort((a, b) => a.name.localeCompare(b.name));
      } else if (filter === "Z - A") {
        orderedList = orderedList.sort((a, b) => b.name.localeCompare(a.name));
      } else if (filter === "Envío Gratis") {
        orderedList = orderedList.filter((prod) => prod.price >= 500);
      } else if (filter === "Ofertas") {
        orderedList = orderedList.filter(
          (prod) => prod.discountPercentage >= 1
        );
      }
    });

    return orderedList;
  };

  useEffect(() => {
    const orderedList = order();
    setOrderedProducts(orderedList);
  }, [productList, selectedFilters]);

  useEffect(() => {
    setSpinner(true);

    const timeoutId = setTimeout(() => {
      setSpinner(false);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      <div className={`${spinner ? "absolute" : "hidden"}`}>
        <Spinner />
      </div>

      <BannerFive />

      <div className="lg:container mx-auto 2xl:px-20  grid grid-cols-12 mt-4 lg:mt-8 mb-3">
        <FilterSection
          drawerOne={drawerOne}
          handleDrawerOne={handleDrawerOne}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />

        <div className="col-span-12 lg:col-span-10">
          {spinner ? (
            <p className="text-xl pl-4 pt-6">Buscando productos...</p>
          ) : orderedProducts.length >= 1 ? (
            <div>
              <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
                {orderedProducts.map((products) => (
                  <Card key={products.id} products={products} />
                ))}
              </div>

              <Pagination />
            </div>
          ) : (
            <div className="container mx-auto flex justify-center md:py-10">
              <div>
                <img
                  src="https://res.cloudinary.com/dthpuldpm/image/upload/v1680867172/aTempo/error_q7wium.jpg"
                  alt=""
                  className="md:h-96 md:w-96"
                />
                <p className="text-3xl pl-4 pt-6">Producto no encontrado...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
