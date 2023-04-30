import React, { useState } from "react";
import Identification from "./Identification";
import Shipping from "./Shipping";
import Payment from "./Payment";

const FormCheckOut = () => {
  const [showIdentification, setShowIdentification] = useState(true);
  const [showShipping, setShowShipping] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [formValidation, setFormValidation] = useState([]);

  const [identificationInfo, setIdentificationInfo] = useState([]);
  const [deliveryInfo, setDeliveryInfo] = useState("");
  const [paymentInfo, setPaymentInfo] = useState("");

  console.log(identificationInfo);

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
        showShipping={showShipping}
        showPayment={showPayment}
        identificationInfo={identificationInfo}
        handleChangeVisibility={handleChangeVisibility}
        formValidation={formValidation}
        handleValidation={handleValidation}
        handleRestartValidation={handleRestartValidation}
        setIdentificationInfo={setIdentificationInfo}
      />

      <Shipping
        showIdentification={showIdentification}
        showShipping={showShipping}
        showPayment={showPayment}
        deliveryInfo={deliveryInfo}
        handleChangeVisibility={handleChangeVisibility}
      />

      <Payment
        showIdentification={showIdentification}
        showShipping={showShipping}
        showPayment={showPayment}
        paymentInfo={paymentInfo}
        handleChangeVisibility={handleChangeVisibility}
      />
    </div>
  );
};

export default FormCheckOut;
