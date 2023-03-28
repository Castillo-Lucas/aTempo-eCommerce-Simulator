import React from "react";

const BannerFour = () => {
  return (
    <div>
      {/*Mobile*/}
      <div className="w-full flex justify-center md:hidden bg-zinc-800 mx-auto  mb-8">
        <div>
          <a href="">
            <img
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679767792/aTempo/Assets/homepage/Mobile/banner4Mobile_nzpa5v.png"
              alt=""
            />
          </a>
        </div>
      </div>

      {/*Desktop*/}
      <div className="w-full hidden md:flex justify-center bg-zinc-800 mx-auto  mb-8">
        <div>
          <a href="">
            <img
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679767690/aTempo/Assets/homepage/Desktop/Banner4_hblveh.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerFour;