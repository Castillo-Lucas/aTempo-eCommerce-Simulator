import React, { useState } from "react";
import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import Cash from "./Cash";
import "animate.css";
import SummaryInfoBox from "./SummaryInfoBox";
SummaryInfoBox;

const Payment = ({
  showIdentification,
  showShipping,
  showPayment,
  paymentInfo,
  handleChangeVisibility,
}) => {
  const [paymentMethod, setPaymentMethod] = useState("TC");
  const [cardPosition, setCardPosition] = useState("Front");

  const handlePaymentMethod = (e, data) => {
    e.preventDefault();
    setPaymentMethod(data);
    setCardPosition("Front");
  };

  const handleCardPosition = (e, data) => {
    e.preventDefault();
    setCardPosition(data);
  };
  return (
    <div className="mb-4">
      <h2 className="indicadorCheckOut text-2xl font-semibold mb-2">
        3. <span className="text-zinc-800 font-normal text-xl">Pago</span>
      </h2>

      {(showIdentification === false) & (showShipping === false) ? (
        <div>
          {/*Payment Method*/}
          <div className="w-full  flex my-4">
            {/*Credit Cart*/}
            <button
              to="/checkout"
              type="button"
              className={`${
                paymentMethod === "TC"
                  ? "bg-zinc-800 text-zinc-100"
                  : "text-zinc-800 border-y-2 border-l-2 border-r border-gray-200"
              } py-1 md:py-2.5 px-1  md:px-5 w-9/12 md:w-full text-sm font-medium rounded-l-xl
           hover:bg-zinc-800 hover:text-zinc-100 hover:border-y-2 hover:border-r-2 hover:border-gray-800`}
              onClick={(e) => handlePaymentMethod(e, "TC")}
            >
              <div className="flex justify-center">
                <img
                  src="https://res.cloudinary.com/dthpuldpm/image/upload/v1682771360/aTempo/tcIcon_oowiwd.png"
                  alt=""
                  className="h-5 mt-3 ml-1 sm:ml-0 sm:mt-1"
                />
                <p className="text-center pt-1 ml-2">Tarjeta de Credito</p>
              </div>
            </button>

            {/*Debit Card*/}
            <button
              to="/checkout"
              type="button"
              className={`${
                paymentMethod === "TD"
                  ? "bg-zinc-800 text-zinc-100"
                  : "text-zinc-800 border-y-2 border-r-2 border-gray-200 "
              } py-1 md:py-2.5 px-1  md:px-5 w-9/12 md:w-full text-sm font-medium  
           hover:bg-zinc-800 hover:text-zinc-100 hover:border-y-2 hover:border-r-2 hover:border-gray-800`}
              onClick={(e) => handlePaymentMethod(e, "TD")}
            >
              <div className="flex justify-center">
                <img
                  src="https://res.cloudinary.com/dthpuldpm/image/upload/v1682771360/aTempo/tdIcon_jns7pf.png"
                  alt=""
                  className="h-6 mt-3 ml-1 sm:ml-0 sm:mt-1"
                />
                <p className="text-center pt-1.5 ml-2">Tarjeta de Débito</p>
              </div>
            </button>

            {/*Cash*/}
            <button
              to="/checkout"
              type="button"
              className={`${
                paymentMethod === "Cash"
                  ? "bg-zinc-800 text-zinc-100"
                  : "text-zinc-800 border-y-2  border-r border-gray-200"
              } py-1 md:py-2.5 px-1  md:px-5 w-9/12 md:w-full text-sm font-medium rounded-r-xl
           hover:bg-zinc-800 hover:text-zinc-100 hover:border-y-2 hover:border-r-2 hover:border-gray-800`}
              onClick={(e) => handlePaymentMethod(e, "Cash")}
            >
              <div className="flex justify-center">
                <img
                  src="https://res.cloudinary.com/dthpuldpm/image/upload/v1682771361/aTempo/chasIcon_otcoez.png"
                  alt=""
                  className="h-6 mt-"
                />
                <p className="text-center pt-1 ml-2">Efectivo</p>
              </div>
            </button>
          </div>
          {paymentMethod === "TC" ? (
            <CreditCard
              cardPosition={cardPosition}
              handleCardPosition={handleCardPosition}
            />
          ) : paymentMethod === "TD" ? (
            <DebitCard
              cardPosition={cardPosition}
              handleCardPosition={handleCardPosition}
            />
          ) : (
            <Cash />
          )}
        </div>
      ) : (
        <SummaryInfoBox data={paymentInfo} />
      )}
    </div>
  );
};

export default Payment;
