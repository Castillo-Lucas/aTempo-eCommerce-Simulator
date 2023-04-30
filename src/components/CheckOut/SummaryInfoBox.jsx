import React from "react";

const SummaryInfoBox = ({ data, edit, handleChangeVisibility }) => {
  return (
    <div className="p-4 border border-gray-200 shadow-md rounded-lg">
      {data.length >= 1 ? (
        <div className="flex justify-between">
          <p className="text-zinc-600">{data}</p>
          <button>
            <img
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1682803677/aTempo/editar-texto_iythiq.png"
              alt=""
              className="h-5"
              onClick={(e) => handleChangeVisibility(e, edit)}
            />
          </button>
        </div>
      ) : (
        <div>
          <p className="text-zinc-400/80">
            Esperando que se complete la información
          </p>
        </div>
      )}
    </div>
  );
};

export default SummaryInfoBox;
