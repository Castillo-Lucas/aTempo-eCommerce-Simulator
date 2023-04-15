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
  selectedCategories,
  setSelectedCategories,
  spinner,
  setSpinner,
  handleFilterClick,
}) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  console.log(selectedFilters);

  const firstSort = productList.sort((a, b) => a.position - b.position);

  useEffect(() => {
    setProducts(firstSort);
  }, [productList]);

  useEffect(() => {
    let orderedList = [...products];

    orderedList.sort((a, b) => a.position - b.position);

    /*if(!selectedFilters.includes("Más Vendidos")){
      orderedList=firstSort
    }*/

    selectedFilters.forEach((filter) => {
      if (filter === "Menor a Mayor") {
        orderedList = orderedList.sort((a, b) => a.price - b.price);
      } else if (filter === "Mayor a Menor") {
        orderedList = orderedList.sort((a, b) => b.price - a.price);
      } else if (filter === "A - Z") {
        orderedList = orderedList.sort((a, b) => a.name.localeCompare(b.name));
      } else if (filter === "Z - A") {
        orderedList = orderedList.sort((a, b) => b.name.localeCompare(a.name));
      } else if (filter === "Más Vendidos") {
        orderedList = orderedList.filter((prod) => prod.bestSeller);        
      } else if (filter === "Ultimos Ingresos") {
        orderedList = orderedList.filter((prod) => prod.newEntry);
      } else if (filter === "Envío Gratis") {
        orderedList = orderedList.filter((prod) => prod.price >= 500);
      } else if (filter === "Ofertas") {
        orderedList = orderedList.filter(
          (prod) => prod.discountPercentage >= 1
        );
      }
    });

    setProducts(orderedList);
  }, [selectedFilters]);

  useEffect(() => {
    const filteringCategory = productList.filter((producto) => {
      return selectedCategories.some((categoria) =>
        producto.category.includes(categoria)
      );
    });

    if (filteringCategory.length === 0) {
      setProducts(firstSort);
    } else {
      setProducts(filteringCategory);
    }
  }, [selectedCategories]);

  /*Spinner*/
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
          productList={productList}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          handleFilterClick={handleFilterClick}
        />

        <div className="col-span-12 lg:col-span-10">
          {spinner ? (
            <p className="text-xl pl-4 pt-6">Buscando productos...</p>
          ) : products.length >= 1 ? (
            <div>
              <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
                {products.map((products) => (
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
