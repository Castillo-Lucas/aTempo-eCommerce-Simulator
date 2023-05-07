import React from "react";

const ProductOrder = ({ currentProduct }) => {
  const { brand, product, model, img1, price, quantity } = currentProduct;

  return (
    <div>
      <table className="w-full text-sm h-46 text-left">
        <tbody>
          <tr className="border-b border-zinc-300/70">
            {/*Image*/}
            <td className="pl-2 py-4 w-24 font-medium text-zinc-800 whitespace-nowrap">
              {" "}
              <img className="w-20" src={img1} />
            </td>

            {/*Detail*/}
            <td className="pl-4 py-4 font-medium text-zinc-800 ">
              {" "}
              <p className="text-base font-medium">{brand}</p>
              <p className="text-sm  font-thin -mt-1">{product}</p>
              <div className="h-full overflow-hidden py-1">
                <p className="text-sm font-normal">{model}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base font-medium">${price}</p>
                <p className="text-sm font-normal pt-0.5 pr-5">
                  Cantidad: {quantity}
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductOrder;
