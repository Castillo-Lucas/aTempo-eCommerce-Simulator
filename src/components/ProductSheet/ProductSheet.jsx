import React from "react";
import "../../App.css";
import BannerFive from "../ItemList/BannerFive";

const ProductSheet = () => {
  return (
    <div>
      <BannerFive />

      <div class="lg:container mx-auto 2xl:px-20 mt-4 lg:mt-8 mb-3">
        <div className="grid grid-cols-12 grid-rows-12 grid-flow-row md:grid-flow-col lg:grid-flow-row gap-4">
          <div class="col-span-12 md:row-span-4 md:col-span-6 lg:row-span-1 lg:col-span-5 border boximg">
            <img
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679928857/aTempo/Assets/Guitarras/Fender%20American%20Professional%20II%20Roasted%20Pine%20Stratocaster%20HSS%20Electric%20Guitar%20Sienna%20Sunburst/americanProf2StratHSS1_fahhlc.png"
              alt=""
            />
          </div>
          <div class="col-span-12 md:row-span-2 md:col-span-6 lg:row-span-1 lg:col-span-2 lg:order-first bg-blue-400">
            <p className="text-center">slider secundario </p>
          </div>
          <div class="col-span-12 md:row-span-6 md:col-span-6 lg:row-span-1 lg:col-span-5 bg-red-400">
            <p className="text-center">info de product</p>
          </div>
        </div>
        <div className="w-full h-fit border mt-4 py-8 px-4">
            <h1>Descripción</h1>
            <p>La serie American Ultra de guitarras y bajos es la más avanzada para músicos exigentes que exigen lo último en precisión, rendimiento y tono. La American Ultra Stratocaster HSS presenta un exclusivo perfil de mástil de " D moderna” con bordes de diapasón redondeados para horas de comodidad, y la forma del talón del mástil permite un fácil acceso al registro más alto. Un veloz diapasón de radio compuesto de 10 "a 14" con 22 trastes medium jumbo para solos precisos y sin esfuerzo, mientras que las pastillas Ultra Noiseless ™Hot Single y la Ultra Double Tap™ humbucker y las opciones avanzadas de cableado brindan infinitas posibilidades de sonido: sin zumbidos. Este versátil instrumento de última generación te inspirará a llevar tu interpretación a nuevas alturas. Otras características incluyen clavijeros de bloqueo sellados, herrajes cromados y cejilla de hueso. Incluye estuche rígido moldeado de primera calidad.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductSheet;
