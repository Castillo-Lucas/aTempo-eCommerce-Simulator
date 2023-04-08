import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Nosotros = () => {
  return (
    <div className="container mx-auto lg:mt-8 mb-8">
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-6">
          {" "}
          <img
            src="https://res.cloudinary.com/dthpuldpm/image/upload/v1680955717/aTempo/nosotros_wpjljs.jpg"
            alt=""
          />
          <div className="flex justify-center mt-4 pr-16">
            <Link to="/" className="flex items-center">
              <img
                src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679173118/aTempo/logo_o2vgxx.png"
                className="mr-3 logo"
                alt="Logo"
              />
              <span className="logName self-center pb-3 text-5xl font-semibold  whitespace-nowrap text-zinc-800">
                aTempo
              </span>
            </Link>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6">
          <div className="px-10 text-zinc-800">
            {" "}
            <p className="mb-4">
              ¡Bienvenidos a aTempo! Somos una empresa ubicada en la hermosa
              ciudad de Córdoba, Argentina, y nos dedicamos a la venta de
              instrumentos musicales desde hace ya 20 años. En aTempo, nos
              apasiona la música y creemos que todos deberían tener acceso a
              ella. Por eso, trabajamos arduamente para ofrecer una amplia
              variedad de instrumentos de alta calidad a precios justos. Desde
              guitarras y bajos hasta teclados y baterías, contamos con una gran
              variedad de opciones para todos los gustos y necesidades. Además
              de vender instrumentos, en aTempo también ofrecemos servicios de
              reparación y mantenimiento para garantizar que tus instrumentos
              siempre estén en óptimas condiciones y suenen como nuevos. Nuestro
              equipo está formado por expertos en música y en instrumentos, y
              siempre estamos dispuestos a ayudarte a encontrar lo que necesitas
              y responder cualquier pregunta que puedas tener. Nos enorgullece
              ofrecer un servicio personalizado y amigable, porque sabemos lo
              importante que es la música en la vida de cada uno de nuestros
              clientes.
            </p>
            <p className="mb-4">
              Además de nuestra amplia selección de instrumentos y servicios de
              reparación y mantenimiento, en aTempo también ofrecemos clases de
              música para todas las edades y niveles. Nuestros profesores son
              músicos profesionales con amplia experiencia en enseñanza, y están
              comprometidos en ayudar a cada estudiante a alcanzar sus objetivos
              musicales. En aTempo, creemos que la música es un lenguaje
              universal que puede unir a personas de diferentes culturas y
              edades. Por eso, también organizamos eventos y conciertos en
              nuestra tienda y en otros lugares de la ciudad, para celebrar y
              compartir la música con la comunidad. Como empresa, estamos
              comprometidos con el servicio al cliente y la satisfacción del
              cliente. Nos esforzamos por brindar una experiencia de compra
              excepcional en cada visita, y estamos agradecidos por la confianza
              que nuestros clientes han depositado en nosotros durante los
              últimos 20 años. Finalmente, nos gustaría agradecerles por
              considerar a aTempo como su proveedor de instrumentos y servicios
              de música. Si tienes alguna pregunta o necesitas más información
              acerca de nuestra empresa o nuestros productos, no dudes en
              contactarnos. ¡Estamos aquí para ayudarte!
            </p>
            <p className="mb-8">
              Gracias por visitar nuestra página web, y esperamos tener la
              oportunidad de ayudarte a encontrar el instrumento de tus sueños.
              ¡No dudes en contactarnos si necesitas cualquier cosa!
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              to="/"
              className="buttonCard text-center py-1 md:py-2.5 px-1  md:px-5 w-24 text-sm font-medium text-zinc-800 rounded-md border border-zinc-300/80"
            >
              Volver!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
