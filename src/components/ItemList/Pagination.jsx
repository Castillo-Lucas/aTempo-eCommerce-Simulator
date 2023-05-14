import React, { useEffect, useState } from "react";
import "../../App.css";

const Pagination = ({
  productsPerPage,
  currentPage,
  setCurrentPage,
  totalProducts,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleOnPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleOnNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleOnSpecificPage = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  return (
    <div className="flex justify-center mt-8 mb-4">
      {totalProducts >= 21 && (
        <div className="col-span-12 mx-auto">
          <nav aria-label="Page navigation example">
            <ul className="inline-flex items-center -space-x-px">
              {/*Button Previus*/}
              <li>
                <button
                  className={`${
                    currentPage === 1
                      ? " text-gray-500/50 cursor-auto"
                      : "btnPaginationPrevNext text-gray-500"
                  } block px-3 py-2 mr-0.5 bg-white border border-gray-300 
                rounded-l-lg `}
                  onClick={currentPage === 1 ? null : handleOnPrevPage}
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </li>

              {/*Numbers*/}
              {pageNumbers.map((page) => (
                <li key={page}>
                  <button
                    className={`px-3 py-2 leading-tight text-gray-500 bg-white border mx-0.5 border-gray-300 btnPagination ${
                      page === currentPage && "border-cyan-500 bg-cyan-500/20"
                    }`}
                    onClick={(e) => handleOnSpecificPage(e, page)}
                  >
                    {page}
                  </button>
                </li>
              ))}

              {/*Button Next*/}
              <li>
                <button
                  className={`${
                    currentPage >= pageNumbers.length
                      ? "text-gray-500/50 cursor-auto"
                      : "btnPaginationPrevNext text-gray-500"
                  } block px-3 py-2 ml-0.5 leading-tight bg-white border border-gray-300 rounded-r-lg`}
                  onClick={
                    currentPage >= pageNumbers.length ? null : handleOnNextPage
                  }
                >
                  <span className="sr-only">Next</span>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
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
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Pagination;
