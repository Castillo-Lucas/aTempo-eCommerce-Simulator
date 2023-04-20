import React from "react";

const BannerFive = () => {
  return (
    <div>
      {/*Mobile*/}
      <div className="w-full flex justify-center sm:hidden bannerFive mx-auto">
        <div>
          <img
            src="https://res.cloudinary.com/dthpuldpm/image/upload/v1680204262/aTempo/Assets/ProductPage/Mobile/BannerFiveDesktop_k5spzi.png"
            alt=""
          />
        </div>
      </div>

      {/*Tablet*/}
      <div className="w-full hidden sm:flex justify-center lg:hidden bannerFive mx-auto">
        <div>
          <img
            src="https://res.cloudinary.com/dthpuldpm/image/upload/v1680204962/aTempo/Assets/ProductPage/Mobile/BannerFiveTablet_bpobdg.png"
            alt=""
          />
        </div>
      </div>

      {/*Desktop*/}
      <div className="w-full hidden lg:flex justify-center mx-auto bannerFive">
        <div className="container mx-auto px-20">
          <img
            src="https://res.cloudinary.com/dthpuldpm/image/upload/v1680204308/aTempo/Assets/ProductPage/Desktop/BannerFive_pde17a.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BannerFive;
