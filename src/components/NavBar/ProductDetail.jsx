import React, { useState, useEffect } from "react";
import ItemCount from "./ItemCount";

const ProductDetail = ({ cart, setCart, handleDeleteItem }) => {
  const {
    bestSeller,
    brand,
    category,
    description,
    discountPercentage,
    discountPrice,
    id,
    img1,
    model,
    name,
    newEntry,
    nickname,
    price,
    product,
    quantity,
    stock,
  } = cart;

  /*Function that formats numbers to look like this: 333.33*/
  const opcionesDeFormato = {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
  };

  /*Getting totals of each product separately*/
  const [total, setTotal] = useState(price * quantity);
  const [totalDiscount, setTotalDiscount] = useState(discountPrice * quantity);

  /*Setting calculation result to look like "opcionesDeFormato" format*/
  const totalFormat = total.toLocaleString("es-ES", opcionesDeFormato);
  const totalDiscFormat = totalDiscount.toLocaleString(
    "es-ES",
    opcionesDeFormato
  );

  /*ID Generator*/
  const generarID = () => {
    const Id1 = Math.random().toString(36).substring(2);
    const Id2 = Date.now().toString(36);
    return Id1 + Id2;
  };

  return (
    <div>
      <div
        key={generarID()}
        className="w-full detailProduct grid grid-rows-3 grid-flow-col border-b border-t pt1"
      >
        {/*Image and Counter*/}
        <div className="row-span-3 w-20">
          <div className="h-20 flex justify-center py-2 ">
            <img className="h-16" src={img1} alt="" />
          </div>

          <ItemCount
            stock={stock}
            quantity={quantity}
            cart={cart}
            setCart={setCart}
            total={total}
            setTotal={setTotal}
            price={price}
            setTotalDiscount={setTotalDiscount}
            discountPrice={discountPrice}
          />
        </div>

        {/*Product Name and Detail*/}
        <div className="row-span-2 col-span-4 overflow-hidden px-2">
          <p className="text-base font-medium">{brand}</p>
          <p className="text-sm  font-thin -mt-1">{product}</p>
          <div className="w-44 h-full overflow-hidden pt-1">
            <p className="text-sm font-normal">{model}</p>
          </div>
        </div>

        {/*Product Price and Trash Icon*/}
        <div className="row-span-1 col-span-4 flex justify-between px-2 my-auto">
          {discountPrice >= 1 ? (
            <div className="flex">
              {" "}
              <p className="text-base line-through">${price}</p>
              <p className="text-base font-medium ml-4">${totalDiscFormat}</p>
            </div>
          ) : (
            <div className="flex">
              {" "}
              <p className="text-base font-medium">${totalFormat}</p>
            </div>
          )}

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
              onClick={() => handleDeleteItem(id)}
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
    </div>
  );
};

export default ProductDetail;
