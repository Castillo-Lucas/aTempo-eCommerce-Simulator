import React from "react";
import { Link } from "react-router-dom";

const BannerTwo = () => {
  return (
    <div>
      {/*Mobile*/}
      <div className="w-full flex justify-center md:hidden bg-zinc-800 mx-auto  mb-8">
        <div>
          <Link to="/ItemListContainer/Ultimos Ingresos/all">
            <img
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679686972/aTempo/Assets/homepage/Mobile/banner_2_Mobile_rvw1my.png"
              alt=""
            />
          </Link>
        </div>
      </div>

      {/*Desktop*/}
      <div className="w-full hidden md:flex justify-center bg-zinc-800 mx-auto">
        <div>
          <Link to="/ItemListContainer/Ultimos Ingresos/all">
            <img
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679686660/aTempo/Assets/homepage/Desktop/Banner2_1_kjx3kh.png"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;
