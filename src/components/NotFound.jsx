import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const NotFound = () => {
  return (
    <div>
      <div className="container mx-auto mb-10 notFound">
        <img
          src="https://res.cloudinary.com/dthpuldpm/image/upload/v1680867172/aTempo/error_q7wium.jpg"
          alt=""
        />

        <div className="flex justify-center">
          <Link
            to="/"
            className="buttonCard text-center py-1 md:py-2.5 px-1  md:px-5 w-24 text-sm font-medium text-zinc-800 rounded-md border border-zinc-300/80"
          >
            Volver!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
