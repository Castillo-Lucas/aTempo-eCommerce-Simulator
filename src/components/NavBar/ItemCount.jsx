import React from "react";

const ItemCount = () => {
  return (
    <div className="w-1 px-0.5 py-3 flex">
      <button
        type="button"
        className="px-1.5 bg-zinc-50 border border-zinc-300 rounded-l-md btnCounter"
      >
        <p className=" text-zinc-800 text-center font-normal text-lg btnCounterText">
          +
        </p>
      </button>
      <button
        type="button"
        className="px-2 bg-zinc-50 border border-zinc-300 hover:cursor-auto"
      >
        <p className=" text-xs text-zinc-600 text-center">1</p>
      </button>
      <button
        type="button"
        className="px-2 bg-zinc-50 border border-zinc-300 rounded-r-md btnCounter"
      >
        <p className=" text-zinc-800 text-center font-normal text-lg btnCounterText">
          -
        </p>
      </button>
    </div>
  );
};

export default ItemCount;
