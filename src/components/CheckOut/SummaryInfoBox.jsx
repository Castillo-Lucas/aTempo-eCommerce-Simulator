import React from "react";

const SummaryInfoBox = ({ data }) => {
  return (
    <div className="p-4 border border-gray-200 shadow-md rounded-lg">
      {data.length >= 1 ? (
        <p className="text-zinc-400/80">{data}</p>
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
