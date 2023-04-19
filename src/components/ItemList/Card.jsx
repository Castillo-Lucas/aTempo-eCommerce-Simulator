import React from "react";
import { Link, NavLink } from "react-router-dom";

const Card = ({ products }) => {
  const {
    id,
    brand,
    model,
    price,
    img1,
    discountPrice,
    discountPercentage,
    bestSeller,
    newEntry,
    position,
  } = products;

  return (
    <div className="col-span-6 md:col-span-3 relative">
      {newEntry.length >= 1 && (
        <div className="absolute border px-3 py-1 mt-4 bg-zinc-700 rounded-r-xl">
          <p className="text-sm font-medium text-zinc-100">Nuevo</p>
        </div>
      )}

      {bestSeller.length >= 1 && (
        <div className="absolute border px-3 py-1 mt-4 bg-zinc-700 rounded-r-xl">
          <p className="text-sm font-medium text-zinc-100">Más Vendido</p>
        </div>
      )}

      {discountPercentage >= 1 && (
        <div
          className={`absolute border px-3 py-1  bg-emerald-600 rounded-r-xl ${
            newEntry.length >= 1 || bestSeller.length >= 1 ? "mt-12" : "mt-4"
          }`}
        >
          <p className="text-sm font-normal text-zinc-100">
            {discountPercentage}% OFF
          </p>
        </div>
      )}

      <div className="bg-transparent border rounded-lg pb-2 lg:pb-0 pt-2 lg:pt-4 cards">
        <img
          className="rounded-t-lg h-36 lg:h-40 mx-auto my-auto"
          src={img1}
          alt=""
        />

        <div className="p-1 md:p-2 lg:p-5">
          <h5 className="text-zinc-800 text-center font-semibold text-lg">
            {brand}
          </h5>

          <div className="h-10 overflow-hidden px-1 mb-4">
            <p className="text-zinc-500 text-left font-semibold text-sm pb-2">
              {model}
            </p>
          </div>

          {discountPrice >= 1 ? (
            <div className="flex">
              <p className="text-zinc-800 text-start font-normal text-base px-1 line-through">
                $<span>{price}</span>
              </p>
              <p className="text-zinc-800 text-start font-bold text-base px-1">
                $<span>{discountPrice}</span>
              </p>
            </div>
          ) : (
            <p className="text-zinc-800 text-start font-bold text-base px-1">
              $<span>{price}</span>
            </p>
          )}

          {price >= 500 ? (
            <p className="text-green-600 text-start font-bold text-xs px-1 mb-3">
              ENVIO GRATIS
            </p>
          ) : (
            <div className="mb-3 h-4"></div>
          )}

          <div className="flex justify-center">
            <NavLink
              to={`/ItemDetail/${id}`}
              className="buttonCard text-center py-1 md:py-2.5 px-1  md:px-5 w-9/12 md:w-full text-sm font-medium text-zinc-800 rounded-md border border-zinc-300/80"
            >
              Ver producto
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
