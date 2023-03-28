import React from "react";
import BannerFive from "./BannerFive";
import FilterSection from "./FilterSection";

const ProductPage = () => {
  return (
    <div>
      <BannerFive />

      <div className="lg:container mx-auto 2xl:px-20  grid grid-cols-12 my-4">

        <FilterSection/>

        <div className="col col-span-9 bg-red-300/50"></div>
      </div>
    </div>
  );
};

export default ProductPage;
