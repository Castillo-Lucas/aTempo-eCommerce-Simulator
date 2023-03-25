import React from "react";

const BannerThree = () => {
  return (
    <div>
      {/*Mobile*/}
      <div className="w-full flex justify-center md:hidden bg-zinc-800 mx-auto">
        <div>
          <a href="">
            <img
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679745793/aTempo/Assets/homepage/Mobile/BannerTienda_Mobile_e9k0qt.png"
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
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679745254/aTempo/Assets/homepage/Desktop/BannerTienda_Desktop_bglbw0.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerThree;
