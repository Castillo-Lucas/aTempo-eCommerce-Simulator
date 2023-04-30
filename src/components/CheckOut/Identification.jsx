import React, { useState } from "react";
import SummaryInfoBox from "./SummaryInfoBox";

const Identification = ({
  showIdentification,
  showShipping,
  showPayment,
  identificationInfo,
  handleChangeVisibility,
}) => {
  const [identif, setIdentif] = useState("editIdentification");
  const [formValidation, setFormValidation] = useState([]);
  const [name, setName] = useState("");
  const [lasName, setLasName] = useState("");
  const [DNI, setDNI] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setEmail] = useState("");



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
    <div className="mb-4">
      <h2 className="indicadorCheckOut text-2xl font-semibold mb-2">
        1.{" "}
        <span className="text-zinc-800 font-normal text-xl">
          Identificación
        </span>
      </h2>

      {(showShipping === false) & (showPayment === false) ? (
        <div>
          {" "}
          <div className="p-4 mt-4 border border-gray-200 shadow-md rounded-lg">
            <h3 className="text-zinc-800 font-medium text-lg">
              Datos Personales
            </h3>
            <p>
              Solicitamos únicamente la informacíon esencial para finalizar la
              compra
            </p>

            <form className="mt-6">
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                {/*Name*/}
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-zinc-700"
                  >
                    Nombres
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className={`${
                      formValidation.includes("Name") && "formValidate"
                    } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 formCheckOut`}
                    placeholder="Nombres"
                    required
                    onBlur={(e) => handleValidation(e, "Name")}
                    onFocus={(e) => handleRestartValidation(e, "Name")}
                  />
                  {formValidation.includes("Name") && (
                    <div>
                      <p className="pl-1 pt-1 text-sm text-red-700">
                        Este campo es obligatorio
                      </p>
                    </div>
                  )}
                </div>

                {/*Last Name*/}
                <div>
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm font-medium text-zinc-700"
                  >
                    Apellidos
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className={`${
                      formValidation.includes("lastName") && "formValidate"
                    } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 formCheckOut`}
                    placeholder="Apellidos"
                    required
                    onBlur={(e) => handleValidation(e, "lastName")}
                    onFocus={(e) => handleRestartValidation(e, "lastName")}
                  />
                  {formValidation.includes("lastName") && (
                    <div>
                      <p className="pl-1 pt-1 text-sm text-red-700">
                        Este campo es obligatorio
                      </p>
                    </div>
                  )}
                </div>

                {/*DNI*/}
                <div>
                  <label
                    htmlFor="DNI"
                    className="block mb-2 text-sm font-medium text-zinc-700"
                  >
                    DNI
                  </label>
                  <input
                    type="text"
                    id="DNI"
                    className={`${
                      formValidation.includes("DNI") && "formValidate"
                    } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 formCheckOut`}
                    placeholder="DNI"
                    required
                    onBlur={(e) => handleValidation(e, "DNI")}
                    onFocus={(e) => handleRestartValidation(e, "DNI")}
                  />
                  {formValidation.includes("DNI") && (
                    <div>
                      <p className="pl-1 pt-1 text-sm text-red-700">
                        Este campo es obligatorio
                      </p>
                    </div>
                  )}
                </div>

                {/*Teléfono*/}
                <div>
                  <label
                    htmlFor="Teléfono"
                    className="block justify-between mb-2 text-sm font-medium text-zinc-700"
                  >
                    Teléfono / Móvil
                  </label>
                  <div className="flex">
                    <p className="pt-2 mr-2">0</p>
                    <input
                      type="text"
                      id="Teléfono"
                      className={`${
                        formValidation.includes("areaNumber") && "formValidate"
                      } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-1/2 p-2.5 mr-4 formCheckOut`}
                      required
                      onBlur={(e) => handleValidation(e, "areaNumber")}
                      onFocus={(e) => handleRestartValidation(e, "areaNumber")}
                    />
                    <input
                      type="text"
                      id="Teléfono"
                      className={`${
                        formValidation.includes("phoneNumber") && "formValidate"
                      } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-1/2 p-2.5 formCheckOut`}
                      required
                      onBlur={(e) => handleValidation(e, "phoneNumber")}
                      onFocus={(e) => handleRestartValidation(e, "phoneNumber")}
                    />
                  </div>

                  {(formValidation.includes("areaNumber") ||
                    formValidation.includes("phoneNumber")) && (
                    <div>
                      <p className="pl-4 pt-1 text-sm text-red-700">
                        Este campo es obligatorio
                      </p>
                    </div>
                  )}
                </div>

                {/*Email*/}
                <div>
                  <label
                    htmlFor="Email"
                    className="block mb-2 text-sm font-medium text-zinc-700"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="Email"
                    className={`${
                      formValidation.includes("Email") && "formValidate"
                    } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 formCheckOut`}
                    placeholder="Email"
                    required
                    onBlur={(e) => handleValidation(e, "Email")}
                    onFocus={(e) => handleRestartValidation(e, "Email")}
              
                  />
                  {formValidation.includes("Email") && (
                    <div>
                      <p className="pl-1 pt-1 text-sm text-red-700">
                        Este campo es obligatorio
                      </p>
                    </div>
                  )}
    
                </div>

                {/*Button & NewsLetter*/}
                <div className="pt-7 flex flex-col justify-center items-center md:items-start">
                  {/*Button*/}
                  <button
                    type="submit"
                    className="btnFinCompr py-1 md:py-2.5 px-1  md:px-5 w-9/12 md:w-full text-sm font-medium text-zinc-800 rounded-md border-2
                     border-gray-200"
                    onClick={(e) => handleChangeVisibility(e, "Identification")}
                  >
                    Continuar
                  </button>

                  {/*NewsLetter*/}
                  <div className="flex items-start mt-2">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded"
                        required
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="mt-0.5 text-sm  text-zinc-800"
                    >
                      Quiero recibir promociones por mail
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <SummaryInfoBox
          data={identificationInfo}
          edit={identif}
          handleChangeVisibility={handleChangeVisibility}
        />
      )}
    </div>
  );
};

export default Identification;
