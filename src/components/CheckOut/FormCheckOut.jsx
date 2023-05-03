import React, { useState, useEffect } from "react";
import Identification from "./Identification";
import Shipping from "./Shipping";
import Payment from "./Payment";

const FormCheckOut = ({ totalPurchase, setConfirm }) => {
  const [showIdentification, setShowIdentification] = useState(true);
  const [showShipping, setShowShipping] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [formValidation, setFormValidation] = useState([]);

  const [identificationInfo, setIdentificationInfo] = useState([]);
  const [shippingInfo, setShippingInfo] = useState([]);
  const [paymentInfo, setPaymentInfo] = useState([]);

  console.log(identificationInfo);
  console.log(shippingInfo);
  console.log(paymentInfo);

  const handleChangeVisibility = (e, data) => {
    e.preventDefault();

    if (data === "Identification") {
      setShowIdentification(false);
      setShowShipping(true);
      setShowPayment(false);
    } else if (data === "Shipping") {
      setShowIdentification(false);
      setShowShipping(false);
      setShowPayment(true);
    } else if (data === "editIdentification") {
      setShowIdentification(true);
      setShowShipping(false);
      setShowPayment(false);
    } else if (data === "editShipping") {
      setShowIdentification(false);
      setShowShipping(true);
      setShowPayment(false);
    }
  };

  const handleValidation = (e, data) => {
    e.preventDefault();

    if (e.target.value.trim() === "") {
      setFormValidation([...formValidation, data]);
    } else {
      const newValidation = formValidation.filter((filt) => filt !== data);
      setFormValidation(newValidation);
    }
  };

  const handleRestartValidation = (e, data) => {
    e.preventDefault();

    const newValidation = formValidation.filter((filt) => filt !== data);
    setFormValidation(newValidation);
  };
  return (
    <div className="flex flex-col sm:px-4 md:pr-10">
      <Identification
        identificationInfo={identificationInfo}
        setIdentificationInfo={setIdentificationInfo}
        showShipping={showShipping}
        showPayment={showPayment}
        formValidation={formValidation}
        handleValidation={handleValidation}
        handleRestartValidation={handleRestartValidation}
        handleChangeVisibility={handleChangeVisibility}
      />

      <Shipping
        shippingInfo={shippingInfo}
        setShippingInfo={setShippingInfo}
        showIdentification={showIdentification}
        showPayment={showPayment}
        formValidation={formValidation}
        handleValidation={handleValidation}
        handleRestartValidation={handleRestartValidation}
        handleChangeVisibility={handleChangeVisibility}
      />

      <Payment
        paymentInfo={paymentInfo}
        setPaymentInfo={setPaymentInfo}
        showIdentification={showIdentification}
        showShipping={showShipping}
        formValidation={formValidation}
        handleValidation={handleValidation}
        handleRestartValidation={handleRestartValidation}
        handleChangeVisibility={handleChangeVisibility}
        totalPurchase={totalPurchase}
        identificationInfo={identificationInfo}
        setConfirm={setConfirm}
      />
    </div>
  );
};

export default FormCheckOut;
