import React, { useEffect, useState } from "react";

const ItemCount = ({ stock, setCurrentProduct, currentProduct }) => {
  const [counter, setCounter] = useState(1);

  console.log(currentProduct);

  useEffect(() => {
    setCounter(1);
  }, [stock]);

  const handleAddCounter = () => {
    setCounter(counter + 1);
  };
  const handleSubtractCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="w-1 px-0.5 py-3 flex">
      <button
        type="button"
        className={`${
          counter === stock ? "cursor-auto " : " btnCounter"
        } px-1.5 bg-zinc-50 border border-zinc-300 rounded-l-md`}
        onClick={counter < stock ? handleAddCounter : undefined}
      >
        <p className=" text-zinc-800 text-center font-normal text-lg btnCounterText">
          +
        </p>
      </button>
      <div
        type="button"
        className="p-2 bg-zinc-50 border border-zinc-300 hover:cursor-auto"
      >
        <p className="w-3 text-xs text-zinc-600 text-center">{counter}</p>
      </div>
      <button
        type="button"
        className={`${
          counter === 1 ? "cursor-auto " : " btnCounter"
        } px-2 bg-zinc-50 border border-zinc-300 rounded-r-md `}
        onClick={counter > 1 ? handleSubtractCounter : undefined}
      >
        <p className=" text-zinc-800 text-center font-normal text-lg btnCounterText">
          -
        </p>
      </button>
    </div>
  );
};

export default ItemCount;
