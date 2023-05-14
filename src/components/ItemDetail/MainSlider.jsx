import React, { useState, useEffect } from "react";
import "../../App.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  EffectFade,
  Navigation,
  Pagination,
  Keyboard,
  Autoplay,
  Thumbs,
} from "swiper";

const MainSlider = ({
  imagesWithSrc,
  generarID,
  thumbsSwiper,
  handleSelectImage,
  setImageSelected,
}) => {
  const [isReady, setIsReady] = useState(false);

  setTimeout(() => {
    setIsReady(true);
  }, 100);

  const handleSlideChange = (swiper) => {
    setImageSelected(swiper.activeIndex);
  };

  return (
    <div className="col-span-12 md:row-span-4 md:col-span-6 lg:row-span-1 lg:col-span-5 border border-zinc-300/80">
      <div>
        <Swiper
          initialSlide={0}
          thumbs={isReady ? { swiper: thumbsSwiper } : { number: 1 }}
          spaceBetween={30}          
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
          modules={[
            EffectFade,
            Navigation,
            Pagination,
            Keyboard,
            Autoplay,
            Thumbs,
          ]}
          className="mySwiper -pb-20 mainSlider"
          onSlideChange={(swiper) => handleSlideChange(swiper)}
        >
          {imagesWithSrc.map((img, index) => (
            <SwiperSlide key={generarID()}>
              <div
                className="bg-zinc-50 p-1"
                onChange={(e) => handleSelectImage(e, index)}
              >
                <img src={img} alt="" className="hover:cursor-pointer" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MainSlider;
