import React from "react";

const SearchForm = () => {
  return (
    <div
      className= "order-last md:order-none mt-3 md:my-auto col-span-12 md:col-span-6 lg:col-span-7"
    >
      <form>
        <div className="flex">
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-1.5 md:p-2.5 w-full z-20 text-sm text-gray-500 bg-gray-50 rounded-lg border-l-gray-50 border-l-2 border"
              placeholder="Busca lo que mas te gusta..."
              required
            />
            <button
              type="submit"
              className="buttonSearchForm absolute top-0 right-0 p-1.5 md:p-2.5 text-sm font-medium text-white bg-gray-50 rounded-r-lg focus:ring-0.5 focus:outline-none focus:ring-blue-300"
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
    </div>
  );
};

export default SearchForm;
