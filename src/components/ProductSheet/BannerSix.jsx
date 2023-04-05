import React from "react";

const BannerSix = () => {
  return (
    <div>
      {/*Mobile*/}
      <div className="w-full flex justify-center sm:hidden bannerFive mx-auto">
        <div>
          <a href="">
            <img
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1680720445/aTempo/Assets/Product%20Sheet/miniBannerMobile_xuphr6.png"
              alt=""
            />
          </a>
        </div>
      </div>



      {/*Desktop*/}
      <div className="w-full hidden sm:flex justify-center mx-auto bannerFive">
        <div className="container mx-auto lg:px-22 2xl:pl-28">
          <a href="">
            <img
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1680720105/aTempo/Assets/Product%20Sheet/bannerSixDesktop_r6yzdf.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerSix;
