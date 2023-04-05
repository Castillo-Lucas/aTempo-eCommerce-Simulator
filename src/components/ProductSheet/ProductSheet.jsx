import React from "react";
import "../../App.css";
import BannerSix from "./BannerSix";
import MainSlider from "./MainSlider";
import SecondarySlider from "./SecondarySlider";
import ProductInfo from "./ProductInfo";
import ProductDescription from "./ProductDescription";


const ProductSheet = () => {
  return (
    <div>
      <BannerSix />

      <div className="lg:container mx-auto px-6 lg:pr-10 2xl:px-40 mt-4 lg:mt-6 mb-2">
        {/*Breadcrumb */}
        <nav className="flex lg:pl-10" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3 mb-2 pl-1">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-zinc-800 hover:text-cyan-500"
              >
                Inicio
              </a>
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
                <a
                  href="#"
                  className="ml-1 text-sm font-medium text-zinc-800 hover:text-cyan-500"
                >
                  Guitarras
                </a>
              </div>
            </li>
            <li aria-current="page">
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
                <span className="ml-1 text-sm font-medium text-zinc-800">
                  Guitarra
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-12 grid-rows-12 grid-flow-row md:grid-flow-col lg:grid-flow-row gap-4 ">
          {/*Main Slider*/}
          <MainSlider />
          
          {/*Secondary Slider*/}
          <SecondarySlider />


          {/*Product Info*/}
          <ProductInfo />

        </div>

        {/*Product Description*/}
        <ProductDescription />



      </div>
    </div>
  );
};

export default ProductSheet;
