import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import FormCheckOut from "./FormCheckOut";
import Swal from "sweetalert2";
import "../../App.css";

const CheckOut = ({
  cart,
  setCart,
  subTotalPurchase,
  totalPurchase,
  shipping,
  setShipping,
  setOrderConfirmation,
}) => {
  const [confirm, setConfirm] = useState(false);
  const [shippingMethod, setShippingMethod] = useState("Home");
  const navigate = useNavigate();

  const [identificationInfo, setIdentificationInfo] = useState([]);
  const [shippingInfo, setShippingInfo] = useState([]);
  const [paymentInfo, setPaymentInfo] = useState([]);
  const [orderNumber, setOrderNumber] = useState();
  const [currentDateTime, setCurrentDateTime] = useState([]);

  useEffect(() => {
    setOrderNumber(Math.floor(Math.random() * 90000) + 20000);

    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const hour = now.getHours();
    const minutes = now.getMinutes();

    const dateObject = {
      day,
      month,
      year,
    };

    const timeObject = {
      hour,
      minutes,
    };

    setCurrentDateTime([dateObject, timeObject]);
  }, []);

  /*Redirect to order confirmation section*/
  useEffect(() => {
    if (confirm) {
      Swal.fire({
        title: "Confirmar Compra",
        icon: "warning",
        iconColor: "#00b9e5",
        backdrop: "#27272a63",
        background: "#27272a",
        confirmButtonText: "Confirmar",
        customClass: {
          title: "my-custom-title",
          text: "my-custom-text",
          confirmButton: "my-custom-confirm-button",
          cancelButton: "my-custom-cancel-button",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          setOrderConfirmation([]);

          const newOrderConfirmation = {
            orderNumber: orderNumber,
            currentDateTime: currentDateTime,
            cart: cart,
            totalPurchase: totalPurchase,
            identificationInfo: identificationInfo,
            shippingInfo: shippingInfo,
            paymentInfo: paymentInfo,
          };

          setOrderConfirmation(newOrderConfirmation);
          setCart([]);
          setIdentificationInfo([]);
          setShippingInfo([]);
          setPaymentInfo([]);

          navigate("/orderConfirmation");
        }
        setConfirm(false);
        return null;
      });
    }
  }, [confirm]);

  /*Function that formats numbers to look like this: 333.33*/
  const opcionesDeFormato = {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
  };

  /*Setting subTotalPurchase to look like "opcionesDeFormato" format*/
  const subTot = Number(subTotalPurchase);
  const subTotalPurchaseFormat = subTot.toLocaleString(
    "es-ES",
    opcionesDeFormato
  );

  /*Setting totalPurchase to look like "opcionesDeFormato" format*/
  const tot = Number(totalPurchase);
  const totalPurchaseFormat = tot.toLocaleString("es-ES", opcionesDeFormato);

  return (
    <div>
      <div className="bodyCart container mx-auto px-2 xl:px-44 py-1 mt-4 mb-8 grid grid-cols-12">
        <div className="bodyCartInfo col-span-12 lg:col-span-8 overflow-hidden py-4">
          <FormCheckOut
            totalPurchase={totalPurchase}
            setConfirm={setConfirm}
            setShippingMethod={setShippingMethod}
            setShipping={setShipping}
            subTotalPurchase={subTotalPurchase}
            identificationInfo={identificationInfo}
            setIdentificationInfo={setIdentificationInfo}
            shippingInfo={shippingInfo}
            setShippingInfo={setShippingInfo}
            paymentInfo={paymentInfo}
            setPaymentInfo={setPaymentInfo}
          />
        </div>

        {/*Resumen de Compra*/}
        <div className="col-span-12 lg:col-span-4 mt-4 lg:mt-0 px-4 lg:pt-16 sm:px-40 lg:px-8 mb-4 lg:mb-2 order-first lg:order-none">
          <div className="px-4 pt-6 pb-4 border border-zinc-300/50 shadow-md rounded-lg">
            <h2 className="text-center font-bold mb-5">RESUMEN DE LA COMPRA</h2>
            {/*Price Detail*/}
            <div className="w-full flex flex-col justify-end mb-4 md:mb-0">
              <div className="w-full flex justify-between pl-2 pr-4 pb-4 my-2 border-b border-zinc-300/50">
                <p className="font-normal text-lg text-zinc-60">Subtotal</p>
                <p className="font-normal text-lg text-zinc-800">
                  ${subTotalPurchaseFormat}
                </p>
              </div>
              <div className="w-full flex justify-between pl-2 pr-4 pb-4 my-2 border-b border-zinc-300/50">
                {shippingMethod === "Home" ? (
                  <p className="font-normal text-lg text-zinc-60">
                    Envío a domicilio
                  </p>
                ) : (
                  <p className="font-normal text-lg text-zinc-60">
                    Retiro en tienda
                  </p>
                )}

                <p className="font-normal text-lg text-zinc-800">
                  {shipping === 0 ? "Gratis" : `$${shipping}`}
                </p>
              </div>
              <div className="w-full flex justify-between pl-2 pr-4 pb-4 my-2">
                <p className=" font-bold text-lg text-zinc-60">Total</p>
                <p className="font-bold text-lg text-zinc-800">
                  ${totalPurchaseFormat}
                </p>
              </div>
            </div>

            {/*Finalize Purchase*/}
            <div className="w-full">
              <div className="w-full flex justify-center pl-2 pr-4">
                <NavLink
                  to="/cart"
                  type="button"
                  className="btnFinCompr py-1 md:py-2.5 px-1  md:px-5 w-9/12 md:w-full text-sm font-medium text-zinc-800 rounded-md"
                >
                  <p className="text-center">Volver al carrito</p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
