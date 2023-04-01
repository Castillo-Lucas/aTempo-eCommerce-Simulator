import React from "react";

const ProductDetail = () => {
  return (
    <div className="w-full detailProduct grid grid-rows-3 grid-flow-col border-b border-t">
      {/*Image and Counter*/}
      <div className="row-span-3 w-20">
        <div className="h-20 flex justify-center py-2 ">
          <img
            className="h-16"
            src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679928859/aTempo/Assets/Guitarras/Fender%20American%20Ultra%20Stratocaster%20Rosewood%20Fingerboard%20Electric%20Guitar%20Arctic%20Pearl/americanUltraStrat1_xyiu6k.png"
            alt=""
          />
        </div>

        <div className="w-1 px-0.5 py-4 flex">
          <button
            type="button"
            className="px-1.5 bg-zinc-50 border border-zinc-200/70 rounded-l-md btnCounter"
          >
            <p className=" text-zinc-800 text-center font-normal text-lg btnCounterText">
              +
            </p>
          </button>
          <button
            type="button"
            className="px-2 bg-zinc-50 border border-zinc-200/70"
          >
            <p className=" text-xs text-zinc-600 text-center">1</p>
          </button>
          <button
            type="button"
            className="px-2 bg-zinc-50 border border-zinc-200/70 rounded-r-md btnCounter"
          >
            <p className=" text-zinc-800 text-center font-normal text-lg btnCounterText">
              -
            </p>
          </button>
        </div>
      </div>

      {/*Product Name and Detail*/}
      <div className="row-span-2 col-span-4 overflow-hidden px-2">
        <p className="text-base font-medium">Fender</p>
        <p className="text-sm  font-thin -mt-1">Guitarra</p>
        <div className="w-44 h-full overflow-hidden pt-1">
          <p className="text-sm font-normal">
            American Ultra Stratocaster Rosewood Fingerboard Electric Guitar
            Arctic Pearl
          </p>
        </div>
      </div>

      {/*Product Price and Trash Icon*/}
      <div className="row-span-1 col-span-4 flex justify-between px-2 my-auto">
        <p className="text-base font-medium">$1500</p>

        <div className="pt-1">
          <svg
            width="15px"
            height="15px"
            viewBox="-6.7 0 122.88 122.88"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            enableBackground="new 0 0 109.484 122.88"
            xmlSpace="preserve"
            className="trashIcon cursor-pointer"
          >
            <g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.347,9.633h38.297V3.76c0-2.068,1.689-3.76,3.76-3.76h21.144 c2.07,0,3.76,1.691,3.76,3.76v5.874h37.83c1.293,0,2.347,1.057,2.347,2.349v11.514H0V11.982C0,10.69,1.055,9.633,2.347,9.633 L2.347,9.633z M8.69,29.605h92.921c1.937,0,3.696,1.599,3.521,3.524l-7.864,86.229c-0.174,1.926-1.59,3.521-3.523,3.521h-77.3 c-1.934,0-3.352-1.592-3.524-3.521L5.166,33.129C4.994,31.197,6.751,29.605,8.69,29.605L8.69,29.605z M69.077,42.998h9.866v65.314 h-9.866V42.998L69.077,42.998z M30.072,42.998h9.867v65.314h-9.867V42.998L30.072,42.998z M49.572,42.998h9.869v65.314h-9.869 V42.998L49.572,42.998z"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
