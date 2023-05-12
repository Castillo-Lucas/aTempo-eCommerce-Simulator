import React, { useState, useEffect, useContext } from "react";
import Spinner from "../Spinner";
import ProductOrder from "./ProductOrder";
import { NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { db } from "../../FirebaseSettings";
import { collection, doc, getDoc } from "firebase/firestore";

const currentOrder = ({ setShowNavBar }) => {
  const { orderId } = useContext(CartContext);
  const navigate = useNavigate();

  const [totCtaFormat, settotCtaFormat] = useState();
  const [ultimosCuatroDigitos, setultimosCuatroDigitos] = useState();
  const [currentOrder, setSurrentOrder] = useState([]);

  const {
    items,
    identificationInfo,
    shippingInfo,
    paymentInfo,
    totalPurchase,
    currentDateTime,
  } = currentOrder;

  //Fetching order from Firebase
  useEffect(() => {
    if (orderId !== undefined) {
      const itemCollection = collection(db, "orders");
      const refDoc = doc(itemCollection, orderId);
      console.log(orderId);
      console.log(refDoc);

      getDoc(refDoc)
        .then((res) => {
          setSurrentOrder(res.data());
        })
        .catch((err) => {
          // Replace navigate with the appropriate navigation function for your app
          navigate("/*");
        });
    }
  }, [orderId]);

  useEffect(() => {
    setShowNavBar(true);

    setTimeout(() => {
      if (currentOrder.length !== 0) {
      }
      navigate("/*");
    }, 10000);

    if (currentOrder.length !== 0) {
      if (
        paymentInfo[0].paymentType === "creditCard" ||
        paymentInfo[0].paymentType === "debitCard"
      ) {
        //Setting Installments to look like "opcionesDeFormato" format
        const totCta = Number(totalPurchase) / paymentInfo[0].financing;
        const totCtaFormat = totCta.toLocaleString("es-ES", opcionesDeFormato);

        //Getting the last 4 credit card numbers
        const numeroTarjeta = paymentInfo[0].cardNumber;
        const ultimosCuatroDigitos = numeroTarjeta.slice(-4);

        settotCtaFormat(totCtaFormat);
        setultimosCuatroDigitos(ultimosCuatroDigitos);
      }
    }
  }, []);

  /*Function that formats numbers to look like this: 333.33*/
  const opcionesDeFormato = {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
  };

  /*Setting totalPurchase to look like "opcionesDeFormato" format*/
  const tot = Number(totalPurchase);
  const totalPurchaseFormat = tot.toLocaleString("es-ES", opcionesDeFormato);

  /*ID Generator*/
  const generarID = () => {
    const Id1 = Math.random().toString(36).substring(2);
    const Id2 = Date.now().toString(36);
    return Id1 + Id2;
  };

  return (
    <div>
      <div>
        {" "}
        {currentOrder.length === 0 ? (
          <div className="h-screen">
            <Spinner />
          </div>
        ) : (
          <div className="bodyCart container mx-auto px-2 xl:px-44 py-6">
            {/*Title*/}
            <div className="flex flex-col items-center">
              {" "}
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-4"
              >
                <path
                  opacity="0.15"
                  d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  fill="#F9FAFB"
                />
                <path
                  d="M17.0001 9L10 16L7 13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="#92D050"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h2 className="mb-2 text-xl text-zinc-700 font-medium">
                ¡Gracias por la compra!
              </h2>
              <p className="text-zinc-500 text-center">
                En unos minutos vas a recibir un correo electrónico en{" "}
                <span className="text-zinc-900 font-medium">
                  {identificationInfo[0].email}
                </span>{" "}
                con todos los detalles de tu compra.
              </p>
              <p className="text-zinc-500 text-center">
                Recorda de revisar la carpeta de correo no deseado o spam.
              </p>
            </div>

            <div className="grid grid-cols-12 mt-8">
              {/*Purchase Detail*/}
              <div className="col-span-12 md:col-span-6 p-4  border-r-0 md:border-r border-zinc-300/70">
                <p className="text-xl text-zinc-900 font-medium">
                  Orden {orderId}
                </p>
                <div className="text-zinc-600 mb-4">
                  {" "}
                  <p>
                    Compra realizada el {currentDateTime[0].day}/
                    {currentDateTime[0].month}/{currentDateTime[0].year} a las{" "}
                    {""}
                    {currentDateTime[1].hour}:{currentDateTime[1].minutes}
                  </p>
                  <p>Venido y entregado por aTempo</p>
                  <p className="text-zinc-700 font-medium">
                    {identificationInfo[0].name}{" "}
                    {identificationInfo[0].lastName}
                  </p>
                  <p>{identificationInfo[0].email}</p>
                  <p>{identificationInfo[0].DNI}</p>
                  <p>
                    +54 ({identificationInfo[0].areaNumber}){" "}
                    {identificationInfo[0].phoneNumber}
                  </p>
                </div>

                <div className="text-zinc-600 mb-4">
                  <h2 className="text-zinc-900 font-medium">Pago</h2>
                  <p>
                    Total: <span>${totalPurchaseFormat}</span>
                  </p>
                  <p>
                    {paymentInfo[0].paymentType === "creditCard"
                      ? "Tarjeta de Crédito"
                      : paymentInfo[0].paymentType === "debitCard"
                      ? "Tarjeta de Débito"
                      : "Pago en efectivo"}
                  </p>
                  {paymentInfo[0].paymentType === "creditCard" ||
                  paymentInfo[0].paymentType === "debitCard" ? (
                    <p>
                      xxxx - xxxx - xxxx - <span>{ultimosCuatroDigitos}</span>
                    </p>
                  ) : null}
                  {paymentInfo[0].paymentType === "creditCard" ? (
                    <p>
                      Financiado en <span>{paymentInfo[0].financing}</span>{" "}
                      cuotas de $<span>{totCtaFormat}</span>
                    </p>
                  ) : paymentInfo[0].paymentType === "debitCard" ? (
                    <p>
                      Se debitará de tu cuenta un pago de $
                      <span>{totalPurchaseFormat}</span>
                    </p>
                  ) : (
                    <p className="">
                      Deberas abonar por Rapipago o Pago Fácil el valor total de
                      $<span>{totalPurchaseFormat}</span>
                    </p>
                  )}
                </div>

                <div className="text-zinc-600 mb-4">
                  {shippingInfo[0].deliveryMethod === "Store" ? (
                    <div>
                      <h2 className="text-zinc-900 font-medium">
                        Retiro en tienda
                      </h2>
                      <p className="text-zinc-400 text-sm">
                        Listo en las próximas 48hs hábiles
                      </p>
                      <p className="text-zinc-600">
                        Te enviaremos un mail para notificarte cuando tu pedido
                        este listo para ser retirado
                      </p>
                    </div>
                  ) : (
                    <div>
                      {" "}
                      <h2 className="text-zinc-900 font-medium">Envío</h2>
                      <p className="text-zinc-400 text-sm">
                        Entrega en 48hs hábiles
                      </p>
                      <p>
                        {shippingInfo[0].street} {shippingInfo[0].streetNumber}
                        {shippingInfo[0].floor !== "" && (
                          <span className="text-zinc-600">
                            , {shippingInfo[0].floor}
                          </span>
                        )}
                      </p>
                      <p>
                        {shippingInfo[0].city}, {shippingInfo[0].province}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/*Product Detail*/}
              <div className="col-span-12 md:col-span-6 px-4">
                {/*Product Detail*/}
                <div className="relative overflow-x-auto max-h-96 border-y md:border-y-0 border-zinc-300/70">
                  {items.map((currentProduct) => (
                    <ProductOrder
                      key={generarID()}
                      currentProduct={currentProduct}
                    />
                  ))}
                </div>
                {/*Buttons*/}
                <div className="w-full flex flex-col items-center mt- pt-4">
                  <div className="w-60 flex justify-center">
                    <NavLink
                      to="/"
                      type="button"
                      className="btnFinCompr py-1 md:py-2.5 px-1  md:px-5 w-9/12 md:w-full text-sm font-medium text-zinc-800 rounded-md border-2 border-gray-200"
                    >
                      <p className="text-center">Seguir comprando</p>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default currentOrder;
