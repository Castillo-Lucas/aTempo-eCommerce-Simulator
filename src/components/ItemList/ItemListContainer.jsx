import React, { useState, useEffect, useContext } from "react";
import BannerFive from "./BannerFive";
import Card from "./Card";
import FilterSection from "./FilterSection";
import "../../App.css";
import Pagination from "./Pagination";
import Spinner from "../Spinner";
import { useParams } from "react-router-dom";
import { FilterContext } from "../../context/FilterContext";
import { LayoutActivatorContext } from "../../context/LayoutActivatorContext";
import { db } from "../../FirebaseSettings";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const {
    selectedFiltersSort,
    setSelectedFiltersSort,
    selectedFiltersForFilter,
    setSelectedFiltersForFilter,
    selectedCategories,
    setSelectedCategories,
    selectedBrands,
    setSelectedBrands,
    brandList,
    setBrandList,
    fromValue,
    setFromValue,
    toValue,
    setToValue,
  } = useContext(FilterContext);

  const [productList, setProductList] = useState([]);
  const { spinner, setSpinner } = useContext(LayoutActivatorContext);
  const [products, setProducts] = useState([]);
  const [selectbyURL, setSelectbyURL] = useState();
  const [categorybyURL, setCategorybyURL] = useState();
  const [brandbyURL, setBrandbyURL] = useState();

  const useId = useParams();

  useEffect(() => {
    const itemCollection = collection(db, "aTempoProducts");

    getDocs(itemCollection)
      .then((res) => {
        const products = res.docs.map((product) => {
          return product.data();
        });

        setProductList(products);
      })
      .catch((err) => console.log(err));
  }, [useId]);

  /*Order products for first time according to "Position"*/
  const firstSort = productList.sort((a, b) => a.position - b.position);

  useEffect(() => {
    setProducts(firstSort);

    //Spinner Activator
    if (productList.length === 0) {
      setSpinner(true);
    } else if (productList.length >= 1) {
      setSpinner(false);
    }
  }, [productList]);

  /*Getting products according URL*/
  useEffect(() => {
    if (
      useId.category === "catalogo" ||
      useId.category === "Ofertas" ||
      useId.category === "Ultimos Ingresos"
    ) {
      setSelectbyURL(useId.category);
    } else {
      setCategorybyURL(useId.category);
      setBrandbyURL(useId.brand);
    }
  }, [useId]);

  /*Setting Categories*/
  useEffect(() => {
    const categories = [
      ...new Set(productList.map((category) => category.category)),
    ];
    const brands = [
      ...new Set(
        productList
          .filter((product) => categories.includes(product.category))
          .map((product) => product.brand)
      ),
    ];
    const brandsTwo = [
      ...new Set(
        productList
          .filter((product) => selectedCategories.includes(product.category))
          .map((product) => product.brand)
      ),
    ];

    if (selectedCategories.length === 0) {
      setBrandList(brands);
    } else {
      setBrandList(brandsTwo);
    }
  }, [products, productList]);

  /*Order products according to "Ordenar Por" and Sort*/
  useEffect(() => {
    let orderedList = [...products];

    orderedList.sort((a, b) => a.position - b.position);

    selectedFiltersSort.forEach((filter) => {
      if (filter === "Menor a Mayor") {
        orderedList = orderedList.sort((a, b) => a.price - b.price);
      } else if (filter === "Mayor a Menor") {
        orderedList = orderedList.sort((a, b) => b.price - a.price);
      } else if (filter === "A - Z") {
        orderedList = orderedList.sort((a, b) => a.name.localeCompare(b.name));
      } else if (filter === "Z - A") {
        orderedList = orderedList.sort((a, b) => b.name.localeCompare(a.name));
      }
    });

    setProducts(orderedList);
  }, [selectedFiltersSort]);

  /*Order products according to "Ordenar Por" and Filter*/
  useEffect(() => {
    let orderedList = [...products];
    let filterByBestSeller = selectedFiltersForFilter.includes("Más Vendidos");
    let filterNewEntry = selectedFiltersForFilter.includes("Ultimos Ingresos");
    let filterByFreeShipping =
      selectedFiltersForFilter.includes("Envío Gratis");
    let filterByOffers = selectedFiltersForFilter.includes("Ofertas");

    orderedList.sort((a, b) => a.position - b.position);

    if (filterNewEntry || selectbyURL === "Ultimos Ingresos") {
      orderedList = firstSort;
      orderedList = orderedList.filter((prod) => prod.newEntry);
    } else if (filterByBestSeller) {
      orderedList = orderedList.filter((prod) => prod.bestSeller);
    } else if (filterByFreeShipping) {
      orderedList = orderedList.filter((prod) => prod.price >= 500);
    } else if (filterByOffers || selectbyURL === "Ofertas") {
      orderedList = firstSort;
      orderedList = orderedList.filter((prod) => prod.discountPercentage >= 1);
    } else if (selectbyURL === "catalogo") {
      orderedList = firstSort;
    } else {
      orderedList = firstSort;
    }

    setProducts(orderedList);
  }, [selectedFiltersForFilter, selectbyURL]);

  /*Order products according Category, Brand and URL*/
  useEffect(() => {
    const filteringCategory = productList.filter((producto) => {
      return producto.category.includes(categorybyURL);
    });

    if (filteringCategory.length === 0) {
      setProducts(firstSort);
    } else {
      setProducts(filteringCategory);
    }

    if (brandbyURL !== "all") {
      const filteringCategory = productList.filter((producto) => {
        return producto.category.includes(categorybyURL);
      });

      const filteringBrand = filteringCategory.filter((producto) => {
        return producto.brand.includes(brandbyURL);
      });

      if (filteringBrand.length === 0) {
        setProducts(firstSort);
      } else {
        setProducts(filteringBrand);
      }
    }
  }, [categorybyURL, brandbyURL]);

  /*Order products according to "Categorías"*/
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

  /*Order products according to "Marca"*/
  useEffect(() => {
    const filteringBrand = productList.filter((producto) => {
      return selectedBrands.some((brand) => producto.brand.includes(brand));
    });

    if (filteringBrand.length === 0) {
      setProducts(firstSort);
    } else {
      setProducts(filteringBrand);
    }
  }, [selectedBrands]);

  /*Order products according to "Precio"*/
  useEffect(() => {
    const filteringPrice = products.filter((producto) => {
      return producto.price >= fromValue && producto.price <= toValue;
    });

    if (filteringPrice.length === 0) {
      setProducts(firstSort);
    } else {
      setProducts(filteringPrice);
    }
  }, [fromValue, toValue]);

  return (
    <div>
      <div className={`${spinner ? "absolute" : "hidden"}`}>
        <Spinner />
      </div>

      <BannerFive />

      <div className="lg:container mx-auto 2xl:px-20  grid grid-cols-12 mt-4 lg:mt-8 mb-3">
        <FilterSection
          setSelectedFiltersSort={setSelectedFiltersSort}
          setSelectedFiltersForFilter={setSelectedFiltersForFilter}
          productList={productList}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          brandList={brandList}
          fromValue={fromValue}
          setFromValue={setFromValue}
          toValue={toValue}
          setToValue={setToValue}
        />

        <div className="col-span-12 lg:col-span-10">
          {spinner ? null : products.length >= 1 ? (
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
