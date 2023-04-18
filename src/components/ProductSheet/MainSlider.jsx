import React from "react";
import "../../App.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Keyboard, Autoplay } from "swiper";

const MainSlider = ({ imagesWithSrc, generarID }) => {




  return (
    <div className="col-span-12 md:row-span-4 md:col-span-6 lg:row-span-1 lg:col-span-5 border border-zinc-300/80">
      {/*Desktop*/}
      <div>
        <Swiper
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          keyboard={{
            enabled: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Navigation, Pagination, Keyboard, Autoplay]}
          className="mySwiper -pb-20 mainSlider"
        >
          {imagesWithSrc.map((img) => (
            <SwiperSlide key={generarID()}>
              <div  className="bg-zinc-50">
                <a href="#">
                  <img
                    src={img}
                    alt=""
                  />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MainSlider;
