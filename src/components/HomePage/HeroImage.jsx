import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Keyboard, Autoplay } from "swiper";

const HeroImage = () => {
  return (
    <div className="mb-5">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div>
            <a href="">
              <img
                src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679596627/aTempo/Assets/homepage/banner1_hfsgvo.png"
                alt=""
              />
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div>
            <a href="">
              <img
                src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679596627/aTempo/Assets/homepage/banner2_akcxu4.png"
                alt=""
              />
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div>
            <a href="">
              <img
                src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679596627/aTempo/Assets/homepage/banner3_wcijkg.png"
                alt=""
              />
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div>
            <a href="">
              <img
                src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679596627/aTempo/Assets/homepage/banner4_zn8vdt.png"
                alt=""
              />
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroImage;
