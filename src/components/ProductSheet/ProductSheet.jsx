import React from "react";
import "../../App.css";
import BannerFive from "../ItemList/BannerFive";
import MainSlider from "./MainSlider";

const ProductSheet = () => {
  return (
    <div>
      <BannerFive />

      <div className="lg:container mx-auto px-4 2xl:px-20 mt-4 lg:mt-6 mb-2">
        {/*Breadcrumb */}
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3 mb-2 pl-1">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-zinc-800 hover:text-cyan-500"
              >
                Inicio
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <a
                  href="#"
                  className="ml-1 text-sm font-medium text-zinc-800 hover:text-cyan-500"
                >
                  Guitarras
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="ml-1 text-sm font-medium text-zinc-800">
                  Guitarra
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-12 grid-rows-12 grid-flow-row md:grid-flow-col lg:grid-flow-row gap-4">
          {/*Main Slider*/}
          <div className="col-span-12 md:row-span-4 md:col-span-6 lg:row-span-1 lg:col-span-5 border">
          <MainSlider />
          </div>

          {/*Secondary Slider*/}
          <div className="col-span-12 md:row-span-2 md:col-span-6 lg:row-span-1 lg:col-span-2 lg:order-first bg-blue-400 ">
            <p className="text-center">slider secundario </p>
          </div>

          {/*Product Price*/}
          <div className="col-span-12 md:row-span-6 md:col-span-6 lg:row-span-1 lg:col-span-5 bg-red-400">
            <p className="text-center">info de product</p>
          </div>
        </div>

        {/*Product Description*/}
        <div className="w-full h-fit mt-4 py-8 px-4">

          <h2 className="w-fit text-xl font-medium border-b border-b-zinc-400 mb-3">Descripción</h2>
          <p className="text-base font-normal">
            La serie American Ultra de guitarras y bajos es la más avanzada para
            músicos exigentes que exigen lo último en precisión, rendimiento y
            tono. La American Ultra Stratocaster HSS presenta un exclusivo
            perfil de mástil de " D moderna” con bordes de diapasón redondeados
            para horas de comodidad, y la forma del talón del mástil permite un
            fácil acceso al registro más alto. Un veloz diapasón de radio
            compuesto de 10 "a 14" con 22 trastes medium jumbo para solos
            precisos y sin esfuerzo, mientras que las pastillas Ultra Noiseless
            ™Hot Single y la Ultra Double Tap™ humbucker y las opciones
            avanzadas de cableado brindan infinitas posibilidades de sonido: sin
            zumbidos. Este versátil instrumento de última generación te
            inspirará a llevar tu interpretación a nuevas alturas. Otras
            características incluyen clavijeros de bloqueo sellados, herrajes
            cromados y cejilla de hueso. Incluye estuche rígido moldeado de
            primera calidad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductSheet;
