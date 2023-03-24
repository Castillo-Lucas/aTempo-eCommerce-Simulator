import React from "react";
import HeroImage from "./HeroImage";

const Home = () => {
  return (
    <div className="h-fit w-full">
      <HeroImage />

      <div className="mx-auto">
        <div className="md:container mx-auto py-4 lg:py-8 p-4 md:px-4 lg:px-44">

          {/*Mobile*/}
          <div className="grid grid-cols-12 gap-4 md:hidden mx-3">
            <div className="col-span-6 m-0 p-0">
              <img
                src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679663385/aTempo/Assets/homepage/Mobile/bannerMobileTablet1_ipb122.png"
                alt=""
                className="m-0 p-0"
              />
            </div>

            <div className="col-span-6 m-0 p-0">
              <img
                src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679663385/aTempo/Assets/homepage/Mobile/bannerMobileTablet2_uae56x.png"
                alt=""
                className="m-0 p-0"
              />
            </div>

            <div className="col-span-12 m-0 p-0">
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
      </div>
    </div>
  );
};

export default Home;
