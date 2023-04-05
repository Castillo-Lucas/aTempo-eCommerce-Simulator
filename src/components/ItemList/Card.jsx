import React from "react";

const Card = () => {
  return (
    <div className="col-span-6 md:col-span-3 relative">

      <div className="absolute border px-3 py-1 mt-4 bg-zinc-700 rounded-r-xl">
        <p className="text-sm font-medium text-zinc-100">NUEVO</p>
      </div>

      <div className="bg-transparent border rounded-lg pb-2 lg:pb-0 pt-2 lg:pt-4 cards">
        <img
          className="rounded-t-lg h-36 lg:h-40 mx-auto my-auto"
          src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679417937/aTempo/Assets/Bateria/ddrum%20D2%205-Piece%20Complete%20Drum%20Kit%20Deep%20Aqua%20Sparkle/ddrumAqua1_vrb9b8.png"
          alt=""
        />

        <div className="p-1 md:p-2 lg:p-5">
          <h5 className="text-zinc-800 text-center font-semibold text-lg">
            Ludwig
          </h5>

          <div className="h-10 overflow-hidden px-1 mb-4">
            <p className="text-zinc-500 text-left font-semibold text-sm pb-2">
              Ludwig BackBeat Complete 5-Piece Drum Set With Hardware and
              Cymbals Wine Red Sparkle
            </p>
          </div>

          <p className="text-zinc-800 text-start font-bold text-base px-1">
            $<span>1500</span>
          </p>

          <p className="text-green-600 text-start font-bold text-xs px-1 mb-3">
            ENVIO GRATIS
          </p>

          <div className="flex justify-center">
            <button
              type="button"
              className="buttonCard py-1 md:py-2.5 px-1  md:px-5 w-9/12 md:w-full text-sm font-medium text-zinc-800 rounded-md border border-zinc-300/80"
            >
              Ver producto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
