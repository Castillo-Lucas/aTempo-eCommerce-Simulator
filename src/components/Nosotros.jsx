import React from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";

const Nosotros = () => {
  const useId = useParams();
  return (
    <div className="container mx-auto lg:mt-8 mb-8">
      {useId.sectionId === "nosotros" ? (
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
                guitarras y bajos hasta teclados y baterías, contamos con una
                gran variedad de opciones para todos los gustos y necesidades.
                Además de vender instrumentos, en aTempo también ofrecemos
                servicios de reparación y mantenimiento para garantizar que tus
                instrumentos siempre estén en óptimas condiciones y suenen como
                nuevos. Nuestro equipo está formado por expertos en música y en
                instrumentos, y siempre estamos dispuestos a ayudarte a
                encontrar lo que necesitas y responder cualquier pregunta que
                puedas tener. Nos enorgullece ofrecer un servicio personalizado
                y amigable, porque sabemos lo importante que es la música en la
                vida de cada uno de nuestros clientes.
              </p>
              <p className="mb-4">
                Además de nuestra amplia selección de instrumentos y servicios
                de reparación y mantenimiento, en aTempo también ofrecemos
                clases de música para todas las edades y niveles. Nuestros
                profesores son músicos profesionales con amplia experiencia en
                enseñanza, y están comprometidos en ayudar a cada estudiante a
                alcanzar sus objetivos musicales. En aTempo, creemos que la
                música es un lenguaje universal que puede unir a personas de
                diferentes culturas y edades. Por eso, también organizamos
                eventos y conciertos en nuestra tienda y en otros lugares de la
                ciudad, para celebrar y compartir la música con la comunidad.
                Como empresa, estamos comprometidos con el servicio al cliente y
                la satisfacción del cliente. Nos esforzamos por brindar una
                experiencia de compra excepcional en cada visita, y estamos
                agradecidos por la confianza que nuestros clientes han
                depositado en nosotros durante los últimos 20 años. Finalmente,
                nos gustaría agradecerles por considerar a aTempo como su
                proveedor de instrumentos y servicios de música. Si tienes
                alguna pregunta o necesitas más información acerca de nuestra
                empresa o nuestros productos, no dudes en contactarnos. ¡Estamos
                aquí para ayudarte!
              </p>
              <p className="mb-8">
                Gracias por visitar nuestra página web, y esperamos tener la
                oportunidad de ayudarte a encontrar el instrumento de tus
                sueños. ¡No dudes en contactarnos si necesitas cualquier cosa!
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
      ) : useId.sectionId === "preguntas frecuentes" ? (
        <div className="grid grid-cols-12 lg:px-44">
          <div className="col-span-12 flex justify-center mt-4 mb-8">
            <p className="text-2xl md:text-4xl text-zinc-600 font-medium border-b border-zinc-300 pb-2">
              Preguntas Frecuentes
            </p>
          </div>
          <div className="col-span-12">
            <div className="px-10 text-zinc-800">
              {" "}
              <p className="mb-4">¿Cómo hago un pedido en aTempo?</p>
              <ul className="mb-4 pl-5 list-disc">
                <li className="mb-2">
                  El Botón de Arrepentimiento es una opción que ofrecemos a
                  nuestros clientes para cancelar o modificar un pedido después
                  de haberlo realizado. El botón estará disponible por un plazo
                  máximo de 7 días desde la realización de la compra, siempre y
                  cuando el pedido aún no haya sido enviado.
                </li>
              </ul>
              <p className="mb-4">¿Cuánto tiempo tarda en llegar mi pedido?</p>
              <ul className="mb-4 pl-5 list-disc">
                <li className="mb-2">
                  El tiempo de entrega depende de la ubicación del destinatario
                  y del tipo de envío que hayas seleccionado. Por lo general, el
                  tiempo de entrega es de 4 dias. Sin embargo, ten en cuenta que
                  pueden haber retrasos imprevistos debido a factores como las
                  condiciones climáticas o la pandemia actual.
                </li>
              </ul>
              <p className="mb-4">¿Cómo puedo hacer seguimiento a mi pedido?</p>
              <ul className="mb-4 pl-5 list-disc">
                <li className="mb-2">
                  Una vez que hayas realizado tu pedido, te proporcionaremos un
                  número de seguimiento. Puedes utilizar este número para hacer
                  seguimiento a tu pedido en nuestro sitio web o en el sitio web
                  de la empresa de envío correspondiente.
                </li>
              </ul>
              <p className="mb-4">¿Puedo cancelar mi pedido?</p>
              <ul className="mb-4 pl-5 list-disc">
                <li className="mb-2">
                  Si tu pedido aún no ha sido enviado, puedes hacer uso de
                  nuestro Botón de Arrepentimiento para cancelarlo o
                  modificarlo. Si el pedido ya ha sido enviado, no se podrá
                  cancelar. Para más información sobre el Botón de
                  Arrepentimiento, consulta nuestras políticas de devolución.
                </li>
              </ul>
              <p className="mb-4">¿Cómo puedo devolver un producto?</p>
              <ul className="mb-4 pl-5 list-disc">
                <li className="mb-2">
                  Si deseas devolver un producto, por favor ponte en contacto
                  con nuestro servicio de atención al cliente para obtener
                  asistencia. Por lo general, se aceptan devoluciones dentro de
                  los 7 dias siguientes a la recepción del producto, siempre y
                  cuando el producto se encuentre en su estado original y no
                  haya sido usado..
                </li>
              </ul>
              <p className="mb-4">¿Qué métodos de pago aceptan?</p>
              <ul className="mb-4 pl-5 list-disc">
                <li className="mb-2">
                  Aceptamos una variedad de métodos de pago, como tarjetas de
                  crédito, débito y PayPal. Todos los pagos se procesan de forma
                  segura a través de nuestros proveedores de pago confiables.
                </li>
              </ul>
              <p className="mb-4">
                ¿Cómo puedo obtener asistencia si tengo alguna pregunta o
                problema?
              </p>
              <ul className="mb-4 pl-5 list-disc">
                <li className="mb-2">
                  Si tienes alguna pregunta o problema, por favor no dudes en
                  ponerte en contacto con nuestro servicio de atención al
                  cliente. Puedes comunicarte con nosotros por correo
                  electrónico, teléfono o chat en vivo. Estaremos encantados de
                  ayudarte en lo que necesites.
                </li>
              </ul>
            </div>

            <div className="flex justify-center mt-8">
              <Link
                to="/"
                className="buttonCard text-center py-1 md:py-2.5 px-1  md:px-5 w-24 text-sm font-medium text-zinc-800 rounded-md border border-zinc-300/80"
              >
                Volver!
              </Link>
            </div>
          </div>
        </div>
      ) : useId.sectionId === "trabaja con nosotros" ? (
        <div className="grid grid-cols-12 h-96 mt-20 lg:px-44">
          <div className="col-span-12 flex justify-center mt-4 mb-8">
            <p className="text-2xl md:text-4xl text-zinc-600 font-medium border-zinc-300 pb-2">
              Trabaja con Nosotros
            </p>
          </div>
          <div className="col-span-12">
            <div className="px-10 text-zinc-800">
              {" "}
              <p className="mb-4">
                Si estás interesado en unirte a nuestro equipo, por favor
                envíanos tu currículum y carta de presentación al siguiente
                correo electrónico:{" "}
                <span className="font-medium">rrhha@atempo.com</span> y
                revisaremos tu solicitud con atención y nos pondremos en
                contacto contigo si consideramos que tu perfil encaja con alguna
                de las vacantes disponibles. ¡Gracias por considerar trabajar
                con nosotros!
              </p>
            </div>

            <div className="flex justify-center mt-8">
              <Link
                to="/"
                className="buttonCard text-center py-1 md:py-2.5 px-1  md:px-5 w-24 text-sm font-medium text-zinc-800 rounded-md border border-zinc-300/80"
              >
                Volver!
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Nosotros;
