import React, { useState, useEffect } from "react";
import AlertOne from "./AlertOne";

const Identification = ({
  identificationInfo,
  setIdentificationInfo,
  showShipping,
  showPayment,
  formValidation,
  handleValidation,
  handleRestartValidation,
  handleChangeVisibility,
}) => {
  const [error, setError] = useState(false);
  const [alertDNI, setAlertDNI] = useState(false);
  const [alertPhoneNumber, setAlertPhoneNumber] = useState(false);
  const [alertEmail, setAlertEmail] = useState(true);
  const [edit, setEdit] = useState(false);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [DNI, setDNI] = useState("");
  const [areaNumber, setAreaNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [newsLetter, setNewsLetter] = useState(false);

  useEffect(() => {
    if (isNaN(DNI)) {
      setAlertDNI(true);
    } else if (DNI === "") {
      setAlertDNI(false);
      setDNI("");
    }
  }, [DNI]);

  useEffect(() => {
    if (isNaN(areaNumber) || isNaN(phoneNumber)) {
      setAlertPhoneNumber(true);

      setTimeout(() => {
        setAreaNumber("");
        setPhoneNumber("");
      }, 2000);
    } else if (areaNumber === "" || areaNumber === "") {
      setAlertPhoneNumber(false);
      setAreaNumber("");
      setPhoneNumber("");
    }
  }, [areaNumber, phoneNumber]);

  useEffect(() => {
    if (email === "") {
      setAlertEmail(true);
    } else if (email !== "") {
      const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
      const resultado = regex.test(email);
      setAlertEmail(resultado);
    }
    /*;*/
  }, [email]);

  const generarID = () => {
    const Id1 = Math.random().toString(36).substring(2);
    const Id2 = Date.now().toString(36);
    return Id1 + Id2;
  };

  const handleNewsLetter = (e) => {
    setNewsLetter(e.target.checked);
  };

  const handleContinuar = (e, data) => {
    e.preventDefault();

    if (
      [name, lastName, DNI, areaNumber, phoneNumber, email].includes("") ||
      alertEmail === false
    ) {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 2500);

      return;
    }
    setError(false);

    const objIdentification = {
      name,
      lastName,
      DNI,
      areaNumber,
      phoneNumber,
      email,
      newsLetter,
      id: generarID(),
    };

    setIdentificationInfo([...identificationInfo, objIdentification]);
    handleChangeVisibility(e, data);
    setEdit(false);
  };

  const handleModificar = (e, data) => {
    handleChangeVisibility(e, data);

    setName(identificationInfo[0].name);
    setLastName(identificationInfo[0].lastName);
    setDNI(identificationInfo[0].DNI);
    setAreaNumber(identificationInfo[0].areaNumber);
    setPhoneNumber(identificationInfo[0].phoneNumber);
    setEmail(identificationInfo[0].email);
    setNewsLetter(identificationInfo[0].newsLetter);

    setIdentificationInfo([]);

    setEdit(true);
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <AlertOne
                    formValidation={formValidation}
                    validation={"Name"}
                  />
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
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <AlertOne
                    formValidation={formValidation}
                    validation={"lastName"}
                  />
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
                    value={DNI}
                    onChange={(e) => setDNI(e.target.value)}
                  />

                  <AlertOne
                    formValidation={formValidation}
                    validation={"DNI"}
                  />

                  {alertDNI && (
                    <div>
                      <p className="pl-1 pt-1 text-xs text-red-700">
                        El DNI debe ser en formato numérico
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
                      value={areaNumber}
                      onChange={(e) => setAreaNumber(e.target.value)}
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
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>

                  {(formValidation.includes("areaNumber") ||
                    formValidation.includes("phoneNumber")) && (
                    <div>
                      <p className="pl-4 pt-1 text-xs text-red-700">
                        Ambos campos son obligatorios
                      </p>
                    </div>
                  )}
                  {alertPhoneNumber && (
                    <div>
                      <p className="pl-4 pt-1 text-xs text-red-700">
                        El teléfono debe ser en formato numérico
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <AlertOne
                    formValidation={formValidation}
                    validation={"Email"}
                  />

                  {!alertEmail && (
                    <div>
                      <p className="pl-1 pt-1 text-xs text-red-700">
                        El formato del e-mail debe ser el siguente:{" "}
                        <span className="font-medium">ejemplo@ejemplo.com</span>
                      </p>
                    </div>
                  )}
                </div>

                {/*Button & NewsLetter*/}
                <div className="pt-7 flex flex-col justify-center items-center md:items-start">
                  {/*Button*/}
                  <button
                    type="submit"
                    className="btnFinCompr py-1 md:py-2.5 px-1 md:px-5 w-9/12 md:w-full text-sm font-medium text-zinc-800 rounded-md border-2
                    border-gray-200"
                    onClick={(e) => handleContinuar(e, "Identification")}
                  >
                    {edit ? <p>Guardar Cambios</p> : <p>Continuar</p>}
                  </button>

                  {/*NewsLetter*/}
                  <div className="flex items-start mt-2">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value={newsLetter}
                        checked={newsLetter}
                        className="w-4 h-4 border border-gray-300 rounded"
                        required
                        onChange={(e) => handleNewsLetter(e)}
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="mt-0.5 text-sm  text-zinc-800"
                    >
                      Quiero recibir promociones por mail
                    </label>
                  </div>

                  {error && (
                    <div>
                      <p className="pl-6 pt-1 text-xs text-red-700">
                        Todos los campos son obligatorios
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="p-4 border border-gray-200 shadow-md rounded-lg">
          <div className="flex justify-between">
            <div>
              <p className="text-zinc-600">
                {identificationInfo[0].name} {identificationInfo[0].lastName}
              </p>
              <p className="text-zinc-600">DNI: {identificationInfo[0].DNI}</p>
              <p className="text-zinc-600">
                ({identificationInfo[0].areaNumber}){" "}
                {identificationInfo[0].phoneNumber}
              </p>
              <p className="text-zinc-600">{identificationInfo[0].email}</p>
              {identificationInfo[0].newsLetter && (
                <p className="text-zinc-600/50 italic text-sm">
                  Suscrito al Newsletter
                </p>
              )}
            </div>

            <button>
              <img
                src="https://res.cloudinary.com/dthpuldpm/image/upload/v1682803677/aTempo/editar-texto_iythiq.png"
                alt=""
                className="h-5"
                onClick={(e) => handleModificar(e, "editIdentification")}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Identification;
