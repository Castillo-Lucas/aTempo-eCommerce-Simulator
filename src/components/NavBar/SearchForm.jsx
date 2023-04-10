import React from "react";

const SearchForm = () => {
  return (
    <div className=" mt-3 md:my-auto col-span-1 md:col-span-6 lg:col-span-7">
      <div className="hidden lg:block">
        <form>
          <div className="flex">
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-1.5 md:p-2.5 w-full z-20 text-sm text-gray-500 rounded-lg  md:bg-gray-50  border-l-gray-50 border-l-2 border"
                placeholder="Busca lo que mas te gusta..."
                required
              />
              <button
                type="submit"
                className="buttonSearchForm absolute top-0 right-0 p-1.5 md:p-2.5 text-sm font-medium text-white md:bg-gray-50 rounded-r-lg focus:ring-0.5 "
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

        <div className="absolute right-0 mx-auto z-40 h-96 p-4 mt-1 rounded-lg border-2 border-zinc-300 shadow-xl searchResult"></div>
      </div>
    </div>
  );
};

export default SearchForm;
