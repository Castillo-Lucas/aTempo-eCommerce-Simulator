import React from "react";
import BannerFour from "./BannerFour";
import BannerOne from "./BannerOne";
import BannerThree from "./BannerThree";
import BannerTwo from "./BannerTwo";
import CarouselOne from "./CarouselOne";
import CarouselTwo from "./CarouselTwo";
import Categories from "./Categories";
import HeroImage from "./HeroImage";

const Home = () => {


  return (
    <div className="h-fit w-full">
      <HeroImage />

      <BannerOne />

      {/*Tittle*/}
      <div className="md:container mx-auto mt-4 py-2 md:py-0 bg-zinc-800 md:bg-transparent">
        <p className="text-center font-bold text-sm md:text-2xl lg:text-4xl text-zinc-200 md:text-zinc-800">
          INSTRUMENTOS MUSICALES Y AUDIO PROFESIONAL
        </p>
      </div>

      {/*{<CarouselOne/>}*/}

      <BannerTwo />

      {/*<CarouselTwo />*/}

      <BannerFour />

      <Categories />

      <BannerThree />
    </div>
  );
};

export default Home;
