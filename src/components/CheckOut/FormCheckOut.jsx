import React, { useState } from "react";
import Identification from "./Identification";
import Shipping from "./Shipping";
import Payment from "./Payment";

const FormCheckOut = () => {
  const [showIdentification, setShowIdentification] = useState(true);
  const [showShipping, setShowShipping] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [identificationInfo, setIdentificationInfo] = useState("");
  const [deliveryInfo, setDeliveryInfo] = useState("");
  const [paymentInfo, setPaymentInfo] = useState("");
  return (
    <div className="flex flex-col sm:px-4 md:pr-10">
      <Identification
        showIdentification={showIdentification}
        showShipping={showShipping}
        showPayment={showPayment}
        identificationInfo={identificationInfo}
      />

      <Shipping
        showIdentification={showIdentification}
        showShipping={showShipping}
        showPayment={showPayment}
        deliveryInfo={deliveryInfo}
      />

      <Payment
        showIdentification={showIdentification}
        showShipping={showShipping}
        showPayment={showPayment}
        paymentInfo={paymentInfo}
      />
    </div>
  );
};

export default FormCheckOut;
