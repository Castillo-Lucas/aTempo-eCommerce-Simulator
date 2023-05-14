import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import BannerFive from "./BannerFive";
import Card from "./Card";
import FilterSection from "./FilterSection";
import "../../App.css";
import Pagination from "./Pagination";
import Spinner from "../Spinner";
import { FilterContext } from "../../context/FilterContext";
import { LayoutActivatorContext } from "../../context/LayoutActivatorContext";
import { db } from "../../FirebaseSettings";
import { getDocs, collection, query, where } from "firebase/firestore";
import ItemList from "./ItemList";

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
  const { spinner, setSpinner } = useContext(LayoutActivatorContext);
  const navigate = useNavigate();

  const [productList, setProductList] = useState([]);
  const [products, setProducts] = useState([]);

  const useId = useParams();
  const [reloadData, setReloadData] = useState(false);

  //Fetching products from Firebase
  /*useEffect(() => {
    //Spinner Activator
    setSpinner(true);

    let consult;
    const itemCollection = collection(db, "aTempoProducts");

    if (useId.category === "catalogo") {
      consult = itemCollection;
    } else if (useId.category === "Ofertas") {
      consult = query(itemCollection, where("discountPrice", "!=", ""));
    } else if (useId.category === "Ultimos Ingresos") {
      consult = query(itemCollection, where("newEntry", "!=", ""));
    } else if (useId.brand !== "all") {
      consult = query(
        itemCollection,
        where("category", "==", useId.category),
        where("brand", "==", useId.brand)
      );
    } else if (
      useId.category !== "catalogo" ||
      useId.category !== "Ofertas" ||
      useId.category !== "Ultimos Ingresos"
    ) {
      consult = query(itemCollection, where("category", "==", useId.category));
    }

    getDocs(consult)
      .then((res) => {
        const products = res.docs.map((product) => {
          return product.data();
        });

        setProductList(products);
        setSpinner(false);
      })
      .catch((err) => {
        navigate("/*");
        setSpinner(false);
      });
  }, [useId, reloadData]);*/

  /*Get Items from an updated json to not consume them from firebase*/
  useEffect(() => {
    const url = `https://res.cloudinary.com/dthpuldpm/raw/upload/v1682176449/aTempo/Assets/aTempoProducts_no7idv.json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProductList(data));
  }, []);

  //Order products for first time according to "Position"
  const firstSort = productList.sort((a, b) => a.position - b.position);
  useEffect(() => {
    setProducts(firstSort);
  }, [productList]);

  //Setting Brand List
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

  //Order products according to "Ordenar Por" and Sort
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

  //Order products according to "Ordenar Por" and Filter
  useEffect(() => {
    let orderedList = [...products];
    let filterByBestSeller = selectedFiltersForFilter.includes("Más Vendidos");
    let filterNewEntry = selectedFiltersForFilter.includes("Ultimos Ingresos");
    let filterByFreeShipping =
      selectedFiltersForFilter.includes("Envío Gratis");
    let filterByOffers = selectedFiltersForFilter.includes("Ofertas");

    orderedList.sort((a, b) => a.position - b.position);

    if (filterNewEntry) {
      orderedList = firstSort;
      orderedList = orderedList.filter((prod) => prod.newEntry);
    } else if (filterByBestSeller) {
      orderedList = orderedList.filter((prod) => prod.bestSeller);
    } else if (filterByFreeShipping) {
      orderedList = orderedList.filter((prod) => prod.price >= 500);
    } else if (filterByOffers) {
      orderedList = firstSort;
      orderedList = orderedList.filter((prod) => prod.discountPercentage >= 1);
    } else {
      orderedList = firstSort;
    }

    setProducts(orderedList);
  }, [selectedFiltersForFilter]);

  //Order products according to "Categorías"
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

  //Order products according to "Marca"
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

  //Order products according to "Precio"
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

      <div className="lg:container mx-auto 2xl:px-20  grid grid-cols-12 mt-4 lg:mt-6 mb-3">
        {/*Breadcrumb */}
        <nav
          className="col-span-12 lg:pl-5 ml-4 lg:ml-0"
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-3 mb-2 pl-1">
            <li className="inline-flex items-center">
              <Link
                to="/"
                className="inline-flex items-center text-sm font-medium text-zinc-800 hover:text-cyan-500"
              >
                Inicio
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p className="ml-1 text-sm font-medium text-zinc-800">
                  {useId.category}
                </p>
              </div>
            </li>
          </ol>
        </nav>

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
              <ItemList products={products} />
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
