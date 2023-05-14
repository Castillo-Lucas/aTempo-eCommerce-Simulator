import React from "react";
import { Link, useParams } from "react-router-dom";

const InstitutionalPage = () => {
  const useId = useParams();
  return (
    <div className="container mx-auto lg:mt-8 mb-8">
      {useId.sectionId === "cambios y devoluciones" ? (
        <div className="grid grid-cols-12 lg:px-44">
          <div className="col-span-12 flex justify-center mt-4 mb-8">
            <p className="text-2xl md:text-4xl text-zinc-600 font-medium border-b border-zinc-300 pb-2">
              Cambios y devoluciones
            </p>
          </div>
          <div className="col-span-12">
            <div className="px-10 text-zinc-800">
              {" "}
              <p className="mb-4">
                ¡Hola! A continuación te proporcionaré un ejemplo de políticas
                de cambios y devoluciones para un negocio de comercio
                electrónico de instrumentos musicales como aTempo:
              </p>
              <p className="mb-4">Cambios:</p>
              <ul className="mb-4 pl-5 list-disc">
                <li className="mb-2">
                  Los cambios se podrán realizar dentro de los 30 días naturales
                  a partir de la fecha de recepción del producto.
                </li>
                <li className="mb-2">
                  El producto debe estar en su estado original y con todas las
                  piezas y accesorios que se enviaron.
                </li>
                <li className="mb-2">
                  El cliente deberá cubrir los gastos de envío del producto a
                  nuestra tienda y a su vez, aTempo cubrirá los gastos de envío
                  del nuevo producto al cliente.
                </li>
              </ul>
              <p className="mb-4">Devoluciones:</p>
              <ul className="mb-4 pl-5 list-disc">
                <li className="mb-2">
                  Las devoluciones se podrán realizar dentro de los 30 días
                  naturales a partir de la fecha de recepción del producto..
                </li>
                <li className="mb-2">
                  El producto debe estar en su estado original y con todas las
                  piezas y accesorios que se enviaron.
                </li>
                <li className="mb-2">
                  El cliente deberá cubrir los gastos de envío del producto a
                  nuestra tienda y una vez que se verifique el estado del
                  producto, aTempo procederá a la devolución del dinero al
                  cliente.
                </li>
              </ul>
              <p className="mb-4">
                Es importante que estas políticas estén disponibles en tu sitio
                web y que los clientes las conozcan antes de realizar una
                compra. Además, asegúrate de ser claro y específico en cuanto a
                las condiciones para hacer cambios y devoluciones.
              </p>
            </div>
          </div>
        </div>
      ) : useId.sectionId === "envios y entregas" ? (
        <div className="grid grid-cols-12 lg:px-44">
          <div className="col-span-12 flex justify-center mt-4 mb-8">
            <p className="text-2xl md:text-4xl text-zinc-600 font-medium border-b border-zinc-300 pb-2">
              Envíos y Entregas
            </p>
          </div>
          <div className="col-span-12">
            <div className="px-10 text-zinc-800">
              {" "}
              <p className="mb-4">
                ¡Hola! Aquí te proporciono algunas políticas de envío y entrega
                que puedes considerar para tu proyecto de ecommerce aTempo:
              </p>
              <ul className="mb-4 pl-5 list-disc">
                <li className="mb-2">
                  Los plazos de entrega pueden variar según el producto y la
                  ubicación del cliente. La mayoría de los pedidos se entregan
                  en un plazo de 3 a 7 días hábiles después de la confirmación
                  del pago. En caso de que haya un retraso en la entrega, nos
                  pondremos en contacto contigo para informarte de la situación.
                </li>
                <li className="mb-2">
                  El envío de los productos se realiza a través de Express. Una
                  vez que el pedido haya sido entregado a la empresa de
                  mensajería, te enviaremos un correo electrónico con el número
                  de seguimiento para que puedas realizar el seguimiento de tu
                  pedido.
                </li>
                <li className="mb-2">
                  Es importante que alguien esté presente en la dirección de
                  entrega para recibir el pedido. En caso de que no se pueda
                  realizar la entrega, el mensajero dejará una notificación y se
                  intentará una segunda entrega en los próximos días hábiles. Si
                  después de dos intentos no se ha podido realizar la entrega,
                  el pedido se devolverá a nuestras instalaciones y nos
                  pondremos en contacto contigo para acordar una nueva entrega
                  (con un costo adicional de envío).
                </li>
                <li className="mb-2">
                  Si recibes un producto dañado o incorrecto, por favor, ponte
                  en contacto con nosotros inmediatamente. Te proporcionaremos
                  un reembolso completo o te enviaremos un producto nuevo sin
                  costo adicional.
                </li>
              </ul>
              <p className="mb-4">
                En aTempo trabajamos constantemente para mejorar nuestros
                procesos de entrega y asegurarnos de que nuestros clientes estén
                satisfechos con sus compras. Si tienes alguna pregunta o
                comentario sobre nuestra política de entrega, no dudes en
                ponerte en contacto con nosotros.
              </p>
            </div>
          </div>
        </div>
      ) : useId.sectionId === "politicas de garantia" ? (
        <div className="grid grid-cols-12 lg:px-44">
          <div className="col-span-12 flex justify-center mt-4 mb-8">
            <p className="text-2xl md:text-4xl text-zinc-600 font-medium border-b border-zinc-300 pb-2">
              Políticas de Garantía
            </p>
          </div>
          <div className="col-span-12">
            <div className="px-10 text-zinc-800">
              {" "}
              <p className="mb-4">
                En aTempo nos esforzamos por ofrecer productos de alta calidad y
                garantizar la satisfacción de nuestros clientes. A continuación,
                detallamos nuestra política de garantía:
              </p>
              <ul className="mb-4 pl-5 list-disc">
                <li className="mb-2">
                  Todos los productos vendidos en nuestra tienda tienen un plazo
                  de garantía de 30 días a partir de la fecha de compra. Durante
                  este plazo, si el producto presenta algún defecto de
                  fabricación o de calidad, podrás solicitar su reparación,
                  cambio o devolución.
                </li>
                <li className="mb-2">
                  Para solicitar la garantía, debes ponerte en contacto con
                  nosotros a través de nuestro servicio de atención al cliente,
                  indicando el número de pedido y los detalles del problema que
                  presenta el producto. Te indicaremos los pasos a seguir para
                  el envío del producto a nuestras instalaciones para su
                  revisión.
                </li>
                <li className="mb-2">
                  Una vez recibido el producto, nuestro equipo técnico lo
                  evaluará para determinar si el problema presentado es un
                  defecto de fabricación o de calidad cubierto por la garantía.
                  En caso afirmativo, procederemos a la reparación o sustitución
                  del producto, o a la devolución del importe pagado.
                </li>
                <li className="mb-2">
                  La garantía no cubre daños causados por mal uso, negligencia,
                  accidentes, caídas, golpes, manipulación inadecuada, uso de
                  productos inapropiados, desgaste normal por el uso,
                  modificaciones no autorizadas, reparaciones no realizadas por
                  nuestros técnicos autorizados, entre otras causas.
                </li>
                <li className="mb-2">
                  Los gastos de envío del producto a nuestras instalaciones para
                  su revisión corren por cuenta del cliente. Sin embargo, si el
                  producto presenta un defecto de fabricación o de calidad
                  cubierto por la garantía, nosotros nos haremos cargo de los
                  gastos de envío del producto reparado o sustituido de vuelta
                  al cliente.
                </li>
              </ul>
              <p className="mb-4">
                En aTempo trabajamos constantemente para mejorar nuestros
                procesos y ofrecer productos de alta calidad. Si tienes alguna
                pregunta o comentario sobre nuestra política de garantía, no
                dudes en ponerte en contacto con nosotros.
              </p>
            </div>
          </div>
        </div>
      ) : useId.sectionId === "terminos y condiciones" ? (
        <div className="grid grid-cols-12 lg:px-44">
          <div className="col-span-12 flex justify-center mt-4 mb-8">
            <p className="text-2xl md:text-4xl text-zinc-600 font-medium border-b border-zinc-300 pb-2">
              Terminos y Condiciones
            </p>
          </div>
          <div className="col-span-12">
            <div className="px-10 text-zinc-800">
              {" "}
              <p className="mb-4">
                Estos términos y condiciones rigen el uso de la tienda en línea
                aTempo. Al acceder y utilizar nuestro sitio web, aceptas estos
                términos y condiciones en su totalidad. Si no estás de acuerdo
                con alguno de estos términos y condiciones, no debes utilizar
                nuestro sitio web.
              </p>
              <ul className="mb-4 pl-5 list-disc">
                <li className="mb-2">
                  La tienda en línea aTempo es propiedad de aTempo y tiene como
                  objetivo ofrecer productos de alta calidad a los consumidores.
                  Nos reservamos el derecho de modificar, suspender o retirar
                  cualquier producto o servicio ofrecido en nuestro sitio web
                  sin previo aviso.
                </li>
                <li className="mb-2">
                  Los precios de los productos se muestran en nuestra tienda en
                  línea y están sujetos a cambios sin previo aviso. Los precios
                  que se muestran en el momento de la compra son los precios que
                  se aplicarán al pedido. Los pagos se realizan a través de
                  varios metodos de pago y se procesan de manera segura. Nos
                  reservamos el derecho de rechazar cualquier pedido o pago que
                  consideremos sospechoso o fraudulento
                </li>
                <li className="mb-2">
                  Para conocer nuestras políticas de envío y entrega, por favor
                  consulta nuestra política de entrega.
                </li>
                <li className="mb-2">
                  Para conocer nuestra política de garantía, por favor consulta
                  nuestra política de garantía.
                </li>
                <li className="mb-2">
                  El contenido y los materiales que se muestran en nuestro sitio
                  web, incluyendo, entre otros, el diseño, los gráficos, el
                  texto, las imágenes, el software y los códigos fuente, están
                  protegidos por derechos de propiedad intelectual y son
                  propiedad de aTempo. No se permite el uso no autorizado de
                  estos materiales.
                </li>
                <li className="mb-2">
                  Para conocer nuestra política de protección de datos
                  personales, por favor consulta nuestra política de privacidad.
                </li>
                <li className="mb-2">
                  Nos esforzamos por garantizar que toda la información que se
                  muestra en nuestro sitio web sea precisa y actualizada, pero
                  no garantizamos su exactitud o integridad. No somos
                  responsables de cualquier daño o perjuicio causado por el uso
                  de nuestro sitio web o de los productos que ofrecemos. Nos
                  reservamos el derecho de modificar estos términos y
                  condiciones en cualquier momento sin previo aviso.
                </li>
              </ul>
              <p className="mb-4">
                En aTempo trabajamos constantemente para mejorar nuestros
                procesos y ofrecer productos de alta calidad a nuestros
                clientes. Si tienes alguna pregunta o comentario sobre nuestros
                términos y condiciones, no dudes en ponerte en contacto con
                nosotros.
              </p>
            </div>
          </div>
        </div>
      ) : useId.sectionId === "boton de arrepentimiento" ? (
        <div className="grid grid-cols-12 lg:px-44">
          <div className="col-span-12 flex justify-center mt-4 mb-8">
            <p className="text-2xl md:text-4xl text-zinc-600 font-medium border-b border-zinc-300 pb-2">
              Botón de Arrepentimiento
            </p>
          </div>
          <div className="col-span-12">
            <div className="px-10 text-zinc-800">
              {" "}
              <p className="mb-4">
                En aTempo, nos preocupamos por la satisfacción de nuestros
                clientes y entendemos que en ocasiones, pueden cambiar de
                opinión después de realizar una compra. Por eso, ofrecemos la
                opción del Botón de Arrepentimiento para brindar a nuestros
                clientes la tranquilidad de poder cancelar o modificar su pedido
                si lo desean.
              </p>
              <ul className="mb-4 pl-5 list-disc">
                <li className="mb-2">
                  El Botón de Arrepentimiento es una opción que ofrecemos a
                  nuestros clientes para cancelar o modificar un pedido después
                  de haberlo realizado. El botón estará disponible por un plazo
                  máximo de 7 días desde la realización de la compra, siempre y
                  cuando el pedido aún no haya sido enviado.
                </li>
                <li className="mb-2">
                  Para hacer uso del Botón de Arrepentimiento, los clientes
                  deben contactarnos a través de nuestro servicio de atención al
                  cliente, ya sea por correo electrónico, teléfono o chat en
                  vivo. Los clientes deberán proporcionar la información
                  necesaria para identificar su pedido, como el número de orden
                  y la fecha de compra.
                </li>
                <li className="mb-2">
                  El Botón de Arrepentimiento solo está disponible para pedidos
                  que aún no han sido enviados. Si el pedido ya ha sido enviado,
                  no se podrá cancelar o modificar. Además, este servicio no
                  aplica para productos personalizados o hechos a medida.
                </li>
                <li className="mb-2">
                  En caso de que el cliente haya pagado el pedido antes de usar
                  el Botón de Arrepentimiento, se realizará un reembolso
                  completo del dinero pagado. El reembolso se realizará a través
                  del mismo método de pago que se utilizó para realizar la
                  compra original. Los plazos para el reembolso pueden variar
                  según el método de pago utilizado y la institución financiera
                  correspondiente.
                </li>
              </ul>
              <p className="mb-4">
                En aTempo, nos esforzamos por ofrecer a nuestros clientes una
                experiencia de compra satisfactoria y segura. Si tienes alguna
                pregunta sobre el Botón de Arrepentimiento o necesitas
                asistencia para cancelar o modificar un pedido, por favor no
                dudes en ponerte en contacto con nosotros a través de nuestro
                servicio de atención al cliente.
              </p>
            </div>
          </div>
        </div>
      ) : null}

      <div className="flex justify-center mt-8">
        <Link
          to="/"
          className="buttonCard text-center py-1 md:py-2.5 px-1  md:px-5 w-24 text-sm font-medium text-zinc-800 rounded-md border border-zinc-300/80"
        >
          Volver!
        </Link>
      </div>
    </div>
  );
};

export default InstitutionalPage;
