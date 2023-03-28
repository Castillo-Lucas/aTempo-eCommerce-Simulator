import React from "react";

const BannerFive = () => {
  return (
    <div>
      {/*Mobile*/}
      <div className="w-full flex justify-center md:hidden bg-zinc-800 mx-auto">
        <div>
          <a href="">
            <img
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1680027757/aTempo/Assets/ProductPage/Mobile/Banner5Mobile_rmrthp.png"
              alt=""
            />
          </a>
        </div>
      </div>

      {/*Desktop*/}
      <div className="w-full hidden md:flex justify-center bg-zinc-800 mx-auto">
        <div>
          <a href="">
            <img
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1680027874/aTempo/Assets/ProductPage/Desktop/Banner5_l9blzv.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerFive;
