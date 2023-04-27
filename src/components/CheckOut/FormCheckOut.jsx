import React from "react";
import Identification from "./Identification";
import Shipping from "./Shipping";
import Payment from "./Payment";

const FormCheckOut = () => {
  return (
    <div className="flex flex-col pr-10">
      <Identification />

      <Shipping />

      <Payment />
    </div>
  );
};

export default FormCheckOut;
