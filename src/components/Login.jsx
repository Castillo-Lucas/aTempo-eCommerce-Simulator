import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
Link;

const Login = () => {
  const [email, setEmail] = useState("");
  const [alertEmail, setAlertEmail] = useState(true);

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

  return (
    <div>
      <div className="container mx-auto h-96 my-20 border border-zinc-300 shadow-lg p-4 rounded-lg  notFound">
        <div className="">
          <div className="col-span-12 flex justify-center my-8">
            <p className="text-2xl md:text-4xl text-zinc-600 font-medium border-b border-zinc-300 pb-2">
              Login
            </p>
          </div>

          <div className="col-span-12">
            {" "}
            <p className="mb-4">
              ¡Hola! Coloca tu e-mail para que te lleguen las credenciales y claves de acceso
            </p>
          </div>

          <div className="col-span-12 mb-4">
            <div>
              <input
                type="text"
                id="Email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 formCheckOut "
                placeholder="Fake Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {!alertEmail && (
              <div>
                <p className="pl-1 pt-1 text-xs text-red-700">
                  El formato del e-mail debe ser el siguente:{" "}
                  <span className="font-medium">ejemplo@ejemplo.com</span>
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            to={`${email === "" ? '' : "/"} `}
            className={`${
              email === ""
                ? "text-zinc-800/50 cursor-auto "
                : "text-zinc-800 cursor-pointer buttonCard"
            } text-center py-1 md:py-2.5 px-1  md:px-5 w-24 text-sm font-medium
              rounded-md border border-zinc-300/80`}
          >
            Enviar
          </Link>
        </div>

        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="buttonCard text-center py-1 md:py-2.5 px-1  md:px-5 w-fit text-sm font-medium text-zinc-800 rounded-md"
          >
            Seguir Comprando
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
