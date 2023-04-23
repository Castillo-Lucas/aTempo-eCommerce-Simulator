import React, { useEffect } from "react";
import Spinner from "../Spinner";

const CheckOut = ({ spinner, setSpinner }) => {
  /*Spinner*/
  useEffect(() => {
    setSpinner(true);

    const timeoutId = setTimeout(() => {
      setSpinner(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <div>
      <div className={`${spinner ? "absolute" : "hidden"}`}>
        <Spinner />
      </div>
      <p>Empezando Checkout</p>
    </div>
  );
};

export default CheckOut;
