import React from "react";

const ProductDescription = ({ currentProduct }) => {
  return (
    <div className="h-fit -mt-2 lg:mt-2 pt-8 pb-4 px-2 lg:px-10 xl:pl-12 md:border-b md:mb-4 border-zinc-300">
      <h2 className="w-fit text-xl font-medium border-b border-b-zinc-400 mb-3">
        Descripción
      </h2>
      <p className="text-base font-normal">{currentProduct.description}</p>
    </div>
  );
};

export default ProductDescription;
