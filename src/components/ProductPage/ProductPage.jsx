import React from "react";
import BannerFive from "./BannerFive";
import FilterSection from "./FilterSection";

const ProductPage = () => {
  return (
    <div>
      <BannerFive />

      <div className="container mx-auto px-32 grid grid-cols-12 w-full border-4 my-8">

        <FilterSection/>

        <div className="col col-span-9 bg-red-300/50"></div>
      </div>
    </div>
  );
};

export default ProductPage;
