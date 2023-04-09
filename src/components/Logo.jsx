import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
        <Link to="/" className="flex items-center">
          <img
            src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679173118/aTempo/logo_o2vgxx.png"
            className="mr-3 logo"
            alt="Logo"
          />
          <span className="logName self-center pb-3  text-5xl  whitespace-nowrap text-white">
            aTempo
          </span>
        </Link>
    </div>
  );
};

export default Logo;
