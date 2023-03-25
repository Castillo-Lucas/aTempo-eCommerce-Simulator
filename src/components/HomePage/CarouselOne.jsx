import React from "react";
import "../../App.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Keyboard, Autoplay } from "swiper";

const CarouselOne = () => {
  return (
    <div className="lg:container lg:px-48 mx-auto py-4 mb-2">
      <Swiper
        loop={true}
        navigation={true}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1775: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
        modules={[Navigation, Pagination, Keyboard, Autoplay]}
        className="mySwiper w-full py-1"
      >
        <SwiperSlide className="centeredCarousel">
          <div className="cardCarousel bg-transparent border-2 border-gray-200 rounded-lg shadow p-1">
            <img
              className="rounded-t-lg"
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679417937/aTempo/Assets/Bateria/ddrum%20D2%205-Piece%20Complete%20Drum%20Kit%20Deep%20Aqua%20Sparkle/ddrumAqua1_vrb9b8.png"
              alt=""
            />

            <div className="p-5">
              <h5 className="text-zinc-800 text-center font-semibold text-lg">
                Ludwig
              </h5>

              <p className="text-zinc-500 text-left font-semibold text-sm pb-2">
                Ludwig BackBeat Complete 5-Piece Drum Set With Hardware and
                Cymbals Wine Red Sparkle
              </p>
              <p className="text-zinc-800 text-start font-bold text-base pb-2">
                $<span>1500</span>
              </p>

              <button
                type="button"
                className="buttonCard py-2.5 px-5 w-full mr-2 mb-2 text-sm font-medium text-zinc-800 rounded-lg border-2
                 border-gray-200"
              >
                Ver producto
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="centeredCarousel">
          <div className="cardCarousel bg-transparent border-2 border-gray-200 rounded-lg shadow p-1">
            <img
              className="rounded-t-lg"
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679417937/aTempo/Assets/Bateria/DW%20Collector%27s%20Series%203-Piece%20Shell%20Pack%20With%2024%20Bass%20Drum%20Green%20Glass%20Chrome%20Hardware/dwGreen1_kexra9.png"
              alt=""
            />

            <div className="p-5">
              <h5 className="text-zinc-800 text-center font-semibold text-lg">
                Ludwig
              </h5>

              <p className="text-zinc-500 text-left font-semibold text-sm pb-2">
                Ludwig BackBeat Complete 5-Piece Drum Set With Hardware and
                Cymbals Wine Red Sparkle
              </p>
              <p className="text-zinc-800 text-start font-bold text-base pb-2">
                $<span>1500</span>
              </p>

              <button
                type="button"
                className="buttonCard py-2.5 px-5 w-full mr-2 mb-2 text-sm font-medium text-zinc-800 rounded-lg border-2
                 border-gray-200"
              >
                Ver producto
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="centeredCarousel">
          <div className="cardCarousel bg-transparent border-2 border-gray-200 rounded-lg shadow p-1">
            <img
              className="rounded-t-lg"
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679417937/aTempo/Assets/Bateria/DW%20Collector%27s%20Series%20Satin%20Oil%205-Piece%20Shell%20Pack%20Ebony%20Chrome%20Hardware/dwBlack1_t2paze.png"
              alt=""
            />

            <div className="p-5">
              <h5 className="text-zinc-800 text-center font-semibold text-lg">
                Ludwig
              </h5>

              <p className="text-zinc-500 text-left font-semibold text-sm pb-2">
                Ludwig BackBeat Complete 5-Piece Drum Set With Hardware and
                Cymbals Wine Red Sparkle
              </p>
              <p className="text-zinc-800 text-start font-bold text-base pb-2">
                $<span>1500</span>
              </p>

              <button
                type="button"
                className="buttonCard py-2.5 px-5 w-full mr-2 mb-2 text-sm font-medium text-zinc-800 rounded-lg border-2
                 border-gray-200"
              >
                Ver producto
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="centeredCarousel">
          <div className="cardCarousel bg-transparent border-2 border-gray-200 rounded-lg shadow p-1">
            <img
              className="rounded-t-lg"
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679417938/aTempo/Assets/Bateria/DW%20Performance%20Series%205-Piece%20Shell%20Pack%20White%20Marine%20Finish%20with%20Chrome%20Hardware/dwWhite1_l8ee9y.png"
              alt=""
            />

            <div className="p-5">
              <h5 className="text-zinc-800 text-center font-semibold text-lg">
                Ludwig
              </h5>

              <p className="text-zinc-500 text-left font-semibold text-sm pb-2">
                Ludwig BackBeat Complete 5-Piece Drum Set With Hardware and
                Cymbals Wine Red Sparkle
              </p>
              <p className="text-zinc-800 text-start font-bold text-base pb-2">
                $<span>1500</span>
              </p>

              <button
                type="button"
                className="buttonCard py-2.5 px-5 w-full mr-2 mb-2 text-sm font-medium text-zinc-800 rounded-lg border-2
                 border-gray-200"
              >
                Ver producto
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="centeredCarousel">
          <div className="cardCarousel bg-transparent border-2 border-gray-200 rounded-lg shadow p-1">
            <img
              className="rounded-t-lg"
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679417938/aTempo/Assets/Bateria/Ludwig%20BackBeat%20Complete%205-Piece%20Drum%20Set%20With%20Hardware%20and%20Cymbals%20Wine%20Red%20Sparkle/ludwigRed1_r9hrvb.png"
              alt=""
            />

            <div className="p-5">
              <h5 className="text-zinc-800 text-center font-semibold text-lg">
                Ludwig
              </h5>

              <p className="text-zinc-500 text-left font-semibold text-sm pb-2">
                Ludwig BackBeat Complete 5-Piece Drum Set With Hardware and
                Cymbals Wine Red Sparkle
              </p>
              <p className="text-zinc-800 text-start font-bold text-base pb-2">
                $<span>1500</span>
              </p>

              <button
                type="button"
                className="buttonCard py-2.5 px-5 w-full mr-2 mb-2 text-sm font-medium text-zinc-800 rounded-lg border-2
                 border-gray-200"
              >
                Ver producto
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="centeredCarousel">
          <div className="cardCarousel bg-transparent border-2 border-gray-200 rounded-lg shadow p-1">
            <img
              className="rounded-t-lg"
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679417938/aTempo/Assets/Bateria/Ludwig%20Classic%20Maple%204-Piece%20Mod%20Shell%20Pack%20with%2022%20in.%20Bass%20Drum%20Citrus%20Mod/ludwigCitrus1_bsityi.png"
              alt=""
            />

            <div className="p-5">
              <h5 className="text-zinc-800 text-center font-semibold text-lg">
                Ludwig
              </h5>

              <p className="text-zinc-500 text-left font-semibold text-sm pb-2">
                Ludwig BackBeat Complete 5-Piece Drum Set With Hardware and
                Cymbals Wine Red Sparkle
              </p>
              <p className="text-zinc-800 text-start font-bold text-base pb-2">
                $<span>1500</span>
              </p>

              <button
                type="button"
                className="buttonCard py-2.5 px-5 w-full mr-2 mb-2 text-sm font-medium text-zinc-800 rounded-lg border-2
                 border-gray-200"
              >
                Ver producto
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="centeredCarousel">
          <div className="cardCarousel bg-transparent border-2 border-gray-200 rounded-lg shadow p-1">
            <img
              className="rounded-t-lg"
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679417939/aTempo/Assets/Bateria/Ludwig%20Classic%20Maple%204-Piece%20MOD%20Shell%20Pack%20with%2022%20in.%20Bass%20Drum%20Pink%20Oyster/ludwigPink1_g9pogc.png"
              alt=""
            />

            <div className="p-5">
              <h5 className="text-zinc-800 text-center font-semibold text-lg">
                Ludwig
              </h5>

              <p className="text-zinc-500 text-left font-semibold text-sm pb-2">
                Ludwig BackBeat Complete 5-Piece Drum Set With Hardware and
                Cymbals Wine Red Sparkle
              </p>
              <p className="text-zinc-800 text-start font-bold text-base pb-2">
                $<span>1500</span>
              </p>

              <button
                type="button"
                className="buttonCard py-2.5 px-5 w-full mr-2 mb-2 text-sm font-medium text-zinc-800 rounded-lg border-2
                 border-gray-200"
              >
                Ver producto
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="centeredCarousel">
          <div className="cardCarousel bg-transparent border-2 border-gray-200 rounded-lg shadow p-1">
            <img
              className="rounded-t-lg"
              src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679417939/aTempo/Assets/Bateria/PDP%20by%20DW%20Aquabats%20Action%20Drums%204-Piece%20Shell%20Pack%20Cyan%20Blue/pdpBlue1_wyna8b.png"
              alt=""
            />

            <div className="p-5">
              <h5 className="text-zinc-800 text-center font-semibold text-lg">
                Ludwig
              </h5>

              <p className="text-zinc-500 text-left font-semibold text-sm pb-2">
                Ludwig BackBeat Complete 5-Piece Drum Set With Hardware and
                Cymbals Wine Red Sparkle
              </p>
              <p className="text-zinc-800 text-start font-bold text-base pb-2">
                $<span>1500</span>
              </p>

              <button
                type="button"
                className="buttonCard py-2.5 px-5 w-full mr-2 mb-2 text-sm font-medium text-zinc-800 rounded-lg border-2
                 border-gray-200"
              >
                Ver producto
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselOne;
