import React from "react";

const BannerOne = () => {
  return (
    <div className="md:container mx-auto md:py-4 lg:py-8 md:px-4 lg:px-44">
      {/*Mobile*/}
      <div className="mx-auto w-fit md:hidden py-4">
        <div className="flex justify-between mb-4">
          <div className="col-span-4 overflow-hidden">
            <img
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679663385/aTempo/Assets/homepage/Mobile/bannerMobileTablet1_ipb122.png"
              alt=""
              className="transform transition-all duration-300 hover:scale-110"
            />
          </div>

          <div className="col-span-4 overflow-hidden">
            <img
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679663385/aTempo/Assets/homepage/Mobile/bannerMobileTablet2_uae56x.png"
              alt=""
              className="transform transition-all duration-300 hover:scale-110"
            />
          </div>
        </div>

        <div className="overflow-hidden">
          <img
            src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679663385/aTempo/Assets/homepage/Mobile/bannerMobileTablet3_q0xyag.png"
            alt=""
            className="transform transition-all duration-300 hover:scale-110"
          />
        </div>
      </div>

      {/*Tablet & Desktop*/}
      <div className="hidden md:grid grid-cols-12 gap-5 lg:gap-8 prueba">
        <div className="col-span-4 overflow-hidden">
          <img
            src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679663296/aTempo/Assets/homepage/Desktop/bannerDesktop1_qu20ub.png"
            alt=""
            className="transform transition-all duration-300 hover:scale-110"
          />
        </div>

        <div className="col-span-4 overflow-hidden">
          <img
            src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679663296/aTempo/Assets/homepage/Desktop/bannerDesktop2_wyxv4g.png"
            alt=""
            className="transform transition-all duration-300 hover:scale-110"
          />
        </div>

        <div className="col-span-4 overflow-hidden">
          <img
            src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679663296/aTempo/Assets/homepage/Desktop/bannerDesktop3_hsqega.png"
            alt=""
            className="transform transition-all duration-300 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerOne;
