import React from "react";

const Payment = () => {
  return (
    <div className="mb-4">
      <h2 className="indicadorCheckOut text-2xl font-semibold mb-2">
        3. <span className="text-zinc-800 font-normal text-xl">Pago</span>
      </h2>

      <div className="p-4 border border-gray-200 shadow-md rounded-lg">
        <p className="text-zinc-600">Seleccioná tu método de pago</p>
      </div>
    </div>
  );
};

export default Payment;
