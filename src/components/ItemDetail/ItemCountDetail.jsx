import React from "react";

const ItemCountDetail = ({
  stock,
  quantity,
  setCurrentProduct,
  currentProduct,
}) => {
  const handleAddCounter = () => {
    setCurrentProduct((prevProduct) => {
      const updatedProduct = { ...prevProduct };
      updatedProduct.quantity += 1;
      return updatedProduct;
    });
  };

  const handleSubtractCounter = () => {
    setCurrentProduct((prevProduct) => {
      const updatedProduct = { ...prevProduct };
      updatedProduct.quantity -= 1;
      return updatedProduct;
    });
  };
  return (
    <div className="w-1 px-0.5 py-3 flex">
      <button
        type="button"
        className={`${
          quantity === 1 ? "cursor-auto " : " btnCounter"
        } px-2 bg-zinc-50 border border-zinc-300 rounded-l-md `}
        onClick={quantity > 1 ? handleSubtractCounter : undefined}
      >
        <p className=" text-zinc-800 text-center font-normal text-lg btnCounterText">
          -
        </p>
      </button>

      <div
        type="button"
        className="p-2 bg-zinc-50 border border-zinc-300 hover:cursor-auto"
      >
        <p className="w-3 text-xs text-zinc-600 text-center">{quantity}</p>
      </div>

      <button
        type="button"
        className={`${
          quantity === stock ? "cursor-auto " : " btnCounter"
        } px-1.5 bg-zinc-50 border border-zinc-300 rounded-r-md`}
        onClick={quantity < stock ? handleAddCounter : undefined}
      >
        <p className=" text-zinc-800 text-center font-normal text-lg btnCounterText">
          +
        </p>
      </button>
    </div>
  );
};

export default ItemCountDetail;
