import React from "react";
import CarouselOne from "./CarouselOne";
import HeroImage from "./HeroImage";

const Home = () => {
  return (
    <div className="h-fit w-full">
      <HeroImage />

      {/*Banner 1*/}
      <div className="md:container mx-auto md:py-4 lg:py-8 md:px-4 lg:px-44">
        {/*Mobile*/}
        <div className="mx-auto w-fit md:hidden py-4">
          <div className="flex justify-between mb-4">
            <img
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679663385/aTempo/Assets/homepage/Mobile/bannerMobileTablet1_ipb122.png"
              alt=""
              className=""
            />

            <img
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679663385/aTempo/Assets/homepage/Mobile/bannerMobileTablet2_uae56x.png"
              alt=""
              className="m-0"
            />
          </div>

          <div className="">
            <img
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679663385/aTempo/Assets/homepage/Mobile/bannerMobileTablet3_q0xyag.png"
              alt=""
              className="m-0 p-0"
            />
          </div>
        </div>

        {/*Tablet & Desktop*/}
        <div className="hidden md:grid grid-cols-12 gap-5 lg:gap-8">
          <div className="col-span-4">
            <img
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679663296/aTempo/Assets/homepage/Desktop/bannerDesktop1_qu20ub.png"
              alt=""
              className=""
            />
          </div>

          <div className="col-span-4">
            <img
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679663296/aTempo/Assets/homepage/Desktop/bannerDesktop2_wyxv4g.png"
              alt=""
              className=""
            />
          </div>

          <div className="col-span-4">
            <img
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679663296/aTempo/Assets/homepage/Desktop/bannerDesktop3_hsqega.png"
              alt=""
              className=""
            />
          </div>
        </div>
      </div>

      {/*Tittle*/}
      <div className="md:container mx-auto">
        <p className="text-center font-bold md:text-2xl lg:text-4xl">
          INSTRUMENTOS MUSICALES Y AUDIO PROFESIONAL
        </p>
      </div>

      <CarouselOne />

      {/*Banner2 Desktop*/}
      <div className="w-full hidden md:flex justify-center bg-zinc-800 mx-auto  mb-8">
        <div>
          <a href="">
            <img
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679686660/aTempo/Assets/homepage/Desktop/Banner2_1_kjx3kh.png"
              alt=""
            />
          </a>
        </div>
      </div>

      {/*Banner2 Mobile*/}
      <div className="w-full flex justify-center md:hidden bg-zinc-800 mx-auto  mb-8">
        <div>
          <a href="">
            <img
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679686972/aTempo/Assets/homepage/Mobile/banner_2_Mobile_rvw1my.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
