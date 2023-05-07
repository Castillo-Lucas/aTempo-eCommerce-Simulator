import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const SearchForm = ({ productList }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [magnifyingGlass, setMagnifyingGlass] = useState(false);

  useEffect(() => {
    setProducts(productList);
  }, [productList]);

  const filtering = products.filter((product) => {
    const name = product.name.toLowerCase();
    const category = product.category.toLowerCase();
    const productos = product.product.toLowerCase();
    const searchWords = searchTerm.toLowerCase().split(" ");
    return searchWords.every(
      (word) =>
        name.includes(word) ||
        category.includes(word) ||
        productos.includes(word)
    );
  });

  useEffect(() => {
    setFilteredProducts(filtering);
  }, [searchTerm]);

  /*Function to open and close the search form field when clicked outside of it*/
  function handleClickOutside(event) {
    if (!event.target.closest(".myDiv")) {
      setMagnifyingGlass(false); /*OutSide*/
      setSearchTerm("");
    } else if (event.target.closest(".myDiv")) {
      setMagnifyingGlass(true); /*InSide*/
    }
  }

  /*Function to detect when clicked outside of search form field*/
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleCloseField = (e) => {
    setSearchTerm("");
  };

  return (
    <div className="my-auto col-span-1 lg:col-span-7">
      {/*Search Button, Mobile and Tablet */}
      <div className="relative w-full pb-12 lg:hidden mt-1 myDiv">
        <button
          type="submit"
          className="absolute top-0 right-0 p-1.5 md:p-2.5 text-sm font-medium"
        >
          <svg
            aria-hidden="true"
            className="w-7 h-7"
            fill="none"
            stroke="#F9FAFB"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>

      <div
        className={`${
          magnifyingGlass ? "absolute" : "hidden"
        } lg:inline lg:relative  w-full right-0 top-22 mx-auto px-4 md:px-10 lg:px-0 pt-4 z-40 bg-zinc-800 searchFormBox myDiv`}
      >
        {/*From*/}
        <form>
          <div className="flex">
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-1.5 md:p-2.5 w-full z-20 text-sm text-gray-500 rounded-lg  md:bg-gray-50 
                border-l-gray-50 border-l-2 border"
                placeholder="Busca lo que mas te gusta..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className={`${
                  searchTerm.length >= 1 ? "hidden" : "absolute"
                }  top-0 right-0 p-1.5 md:p-2.5`}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="none"
                  stroke="#1E1E1E"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>

        {/*Result Field*/}
        <div
          className={`${
            searchTerm.length >= 1 ? "absolute" : "hidden"
          } absolute overflow-hidden overflow-y-auto right-0 mx-auto z-40 h-fit max-h-96 py-4 pl-2 pr-4 mt-1 mr-2 md:mr-5 lg:mr-0 
          rounded-lg border-2 border-zinc-300 shadow-xl searchResult`}
        >
          {filteredProducts.length >= 1 ? (
            filteredProducts.map((product) => (
              <NavLink
                to={`/ItemDetail/${product.id}`}
                key={product.id}
                className="flex h-12 mb-3 pb-1.5 hover:bg-zinc-300 hover:cursor-pointer"
                onClick={(e) => handleCloseField(e)}
              >
                <img className="h-10" src={product.img1} alt="" />
                <div className="w-4/5 overflow-hidden whitespace-no-wrap truncate pt-2.5">
                  <p className="text-zinc-800 ml-4">{product.name}</p>
                </div>

                <div className="pt-2.5">
                  <p className="text-zinc-800 pl-4 ">${product.price}</p>
                </div>
              </NavLink>
            ))
          ) : (
            <p className="text-zinc-400 pl-2 text-sm">
              No se encontró la búsqueda
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
