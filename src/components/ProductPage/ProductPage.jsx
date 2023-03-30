import React from "react";
import BannerFive from "./BannerFive";
import Card from "./Card";
import FilterSection from "./FilterSection";
import "../../App.css";
import Pagination from "./Pagination";

const ProductPage = ({ drawer, handleDrawer }) => {
  return (
    <div>
      <BannerFive />

      <div className="lg:container mx-auto 2xl:px-20  grid grid-cols-12 mt-4 lg:mt-8 mb-3">
        <FilterSection drawer={drawer} handleDrawer={handleDrawer} />

        <div className="col-span-12 lg:col-span-10">
          <div className="grid grid-cols-12 gap-4 md:gap-6 px-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
