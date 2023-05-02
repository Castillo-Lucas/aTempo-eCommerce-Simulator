import React, { useState, useEffect } from "react";
import AlertOne from "./AlertOne";

const CreditCard = ({
  cardPosition,
  handleCardPosition,
  formValidation,
  handleValidation,
  handleRestartValidation,
  totalPurchase,
}) => {
  const [cardNumber, setCardNumber] = useState(Number());
  const [ownerName, setOwnerName] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [dniCard, setDniCard] = useState("");
  const [financing, setFinancing] = useState("");

  const [alertCardNumberOne, setAlertCardNumberOne] = useState(false);
  const [cardNumberLength, setCardNumberLength] = useState();
  const [separateCardnumbers, setSeparateCardnumbers] = useState();

  useEffect(() => {
    if (isNaN(cardNumber)) {
      setAlertCardNumberOne(true);
    } else if (cardNumber === "") {
      setAlertCardNumberOne(false);
      setCardNumber("");
    }

    if (!isNaN(cardNumber)) {
      let totCardNumb = 16;
      const restanNum = totCardNumb - cardNumber.length;

      setCardNumberLength(restanNum);
    } else {
      setCardNumberLength(16);
    }

    let formattedCardNumber = String(cardNumber).replace(/\D/g, "");
    formattedCardNumber = formattedCardNumber.replace(
      /(\d{4})(?=\d)/g,
      "$1 - "
    );

    setSeparateCardnumbers(formattedCardNumber);
  }, [cardNumber]);

  return (
    <div className="p-4 border border-gray-200 shadow-md rounded-lg">
      {/*Card Image*/}
      <div className="hidden md:block">
        {cardPosition === "Front" ? (
          <div className="flex justify-center relative animate__animated animate__flipInX">
            <img
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1682702334/aTempo/creditCardFront_ssiej4.png"
              alt=""
              className="h-72"
            />

            {/*Number*/}
            <div className="absolute top-24 mt-1 ml-14">
              <p className=" text-zinc-400 text-start text-2xl font-medium mr-4">
                {separateCardnumbers === "0" ? "" : separateCardnumbers}
              </p>
            </div>

            {/*Expire*/}
            <div className="absolute top-44 mt-5 pr-4 ml-28 flex">
              <p className=" text-zinc-500 text-lg font-medium mr-1">1</p>
              <span className=" text-zinc-500 text-lg font-medium mr-1">/</span>
              <p className=" text-zinc-500 text-lg font-medium mr-1">26</p>
            </div>

            {/*Name*/}
            <div
              className="absolute w-full top-56 pt-1 pl-10 text-right flex justify-start"
              dir="ltr"
            >
              <p className="text-zinc-400 text-right text-xl font-medium mr-4">
                {ownerName}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex justify-center relative animate__animated animate__jackInTheBox">
            <img
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1682702334/aTempo/creditCardBack_fw7ivx.png"
              alt=""
              className="h-72"
            />

            {/*CVC*/}
            <div className="absolute top-20 mt-6 pr-4 ml-80 flex">
              <p className=" text-zinc-700 text-lg font-medium mr-1">645</p>
            </div>
          </div>
        )}
        {/*Front*/}

        {/*Back*/}
      </div>

      {/*Form*/}
      <form className="mt-3 sm:mt-6">
        <div className="grid gap-6 mb-6 grid-cols-12">
          {/*Card Number*/}
          <div className="col-span-12 md:col-span-6">
            <label
              htmlFor="cardNumber"
              className="block mb-2 text-sm font-medium text-zinc-700"
            >
              Numero
            </label>
            <input
              type="text"
              id="cardNumber"
              className={`${
                formValidation.includes("cardNumber") && "formValidate"
              } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 formCheckOut`}
              placeholder="Numero"
              required
              value={cardNumber === 0 ? "" : cardNumber}
              onBlur={(e) => handleValidation(e, "cardNumber")}
              onFocus={(e) => handleRestartValidation(e, "cardNumber")}
              onChange={(e) => setCardNumber(e.target.value)}
              onClick={(e) => handleCardPosition(e, "Front")}
            />
            <AlertOne
              formValidation={formValidation}
              validation={"cardNumber"}
            />

            {alertCardNumberOne && (
              <div>
                <p className="pl-1 pt-1 text-xs text-red-700">
                  El valor debe ser numérico
                </p>
              </div>
            )}
            {cardNumberLength <= 15 && cardNumberLength >= 1 && (
              <div>
                <p className="pl-1 pt-1 text-xs text-zinc-700">
                  Faltan {cardNumberLength} números.
                </p>
              </div>
            )}
          </div>

          {/*Name*/}
          <div className="col-span-12 md:col-span-6">
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-zinc-700"
            >
              Nombre y Apellido de Titular
            </label>
            <input
              type="text"
              id="last_name"
              className={`${
                formValidation.includes("ownerName") && "formValidate"
              } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 formCheckOut`}
              placeholder="Nombre y Apellido"
              required
              onBlur={(e) => handleValidation(e, "ownerName")}
              onFocus={(e) => handleRestartValidation(e, "ownerName")}
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              onClick={(e) => handleCardPosition(e, "Front")}
            />
            <AlertOne
              formValidation={formValidation}
              validation={"ownerName"}
            />
          </div>

          {/*Expiration*/}
          <div className="col-span-12 md:col-span-6">
            <label
              htmlFor="Teléfono"
              className="block justify-between mb-2 text-sm font-medium text-zinc-700"
            >
              Fecha de Vencimiento
            </label>
            <div className="flex flex-col">
              <div className="flex">
                {" "}
                <select
                  aria-label="Default select example"
                  id="mesVencimiento"
                  name="Mes de Vencimiento"
                  className={`${
                    formValidation.includes("expMonth") && "formValidate"
                  } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-24 p-2.5 mr-4 formCheckOut`}
                  onBlur={(e) => handleValidation(e, "expMonth")}
                  onFocus={(e) => handleRestartValidation(e, "expMonth")}
                  value={expMonth}
                  onChange={(e) => setExpMonth(e.target.value)}
                  onClick={(e) => handleCardPosition(e, "Front")}
                >
                  <option value=""></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select
                  aria-label="Default select example"
                  id="vencimientoYear"
                  name="Año de Vencimiento"
                  className={`${
                    formValidation.includes("expYear") && "formValidate"
                  } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-24 p-2.5 formCheckOut`}
                  onBlur={(e) => handleValidation(e, "expYear")}
                  onFocus={(e) => handleRestartValidation(e, "expYear")}
                  value={expYear}
                  onChange={(e) => setExpYear(e.target.value)}
                  onClick={(e) => handleCardPosition(e, "Front")}
                >
                  <option value=""></option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                  <option value="2031">2031</option>
                  <option value="2032">2032</option>
                </select>
              </div>

              {(formValidation.includes("expMonth") ||
                formValidation.includes("expYear")) && (
                <div>
                  <p className="pt-1 text-xs text-red-700">
                    Ambos campos son obligatorios
                  </p>
                </div>
              )}
            </div>
          </div>

          {/*Codigo CVC*/}
          <div className="col-span-12 md:col-span-6">
            <label
              htmlFor="CVC"
              className="block mb-2 text-sm font-medium text-zinc-700"
            >
              Código CVC
            </label>
            <input
              type="text"
              id="CVC"
              className={`${
                formValidation.includes("cardNumber") && "formValidate"
              } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-20 p-2.5 formCheckOut`}
              placeholder="CVC"
              required
              onBlur={(e) => handleValidation(e, "cvc")}
              onFocus={(e) => handleRestartValidation(e, "cvc")}
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              onClick={(e) => handleCardPosition(e, "Back")}
            />
            <AlertOne formValidation={formValidation} validation={"cvc"} />
          </div>

          {/*DNI*/}
          <div className="col-span-12 md:col-span-6">
            <label
              htmlFor="DNI"
              className="block mb-2 text-sm font-medium text-zinc-700"
            >
              DNI del Titular
            </label>
            <input
              type="text"
              id="DNI"
              className={`${
                formValidation.includes("dniCard") && "formValidate"
              } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 formCheckOut`}
              placeholder="Numero"
              required
              onBlur={(e) => handleValidation(e, "dniCard")}
              onFocus={(e) => handleRestartValidation(e, "dniCard")}
              value={dniCard}
              onChange={(e) => setDniCard(e.target.value)}
              onClick={(e) => handleCardPosition(e, "Front")}
            />
            <AlertOne formValidation={formValidation} validation={"dniCard"} />
          </div>

          {/*Financing*/}
          <div className="col-span-12 md:col-span-6 order-first sm:order-none">
            <label
              htmlFor="Financing"
              className="block mb-2 text-sm font-medium text-zinc-700"
            >
              Cuotas disponibles
            </label>
            <select
              id="financing"
              name="financing"
              className={`${
                formValidation.includes("financing") && "formValidate"
              } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 formCheckOut`}
              onBlur={(e) => handleValidation(e, "financing")}
              onFocus={(e) => handleRestartValidation(e, "financing")}
              value={financing}
              onChange={(e) => setFinancing(e.target.value)}
            >
              <option value=""></option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
              <option value="2031">2031</option>
              <option value="2032">2032</option>
            </select>
            <AlertOne
              formValidation={formValidation}
              validation={"financing"}
            />
          </div>

          {/*Button*/}
          <div className="col-span-12 pt-7 flex justify-center">
            {/*Button*/}
            <button
              type="submit"
              className="btnFinCompr py-1 md:py-2.5 px-1  md:px-5 w-9/12 md:w-1/2  text-sm font-medium text-zinc-800 rounded-md border-2
   border-gray-200"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreditCard;
