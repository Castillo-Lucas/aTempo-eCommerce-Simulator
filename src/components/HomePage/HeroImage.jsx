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

const HeroImage = () => {
  return (
    <div>
      {/*Desktop*/}
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
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Keyboard, Autoplay]}
        className="mySwiper hidden md:block"
      >
        <SwiperSlide className="hidden md:block">
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

        <SwiperSlide className="hidden md:block">
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

        <SwiperSlide className="hidden md:block">
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

        <SwiperSlide className="hidden md:block">
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

      {/*Mobile*/}
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
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Keyboard, Autoplay]}
        className="mySwiper block md:hidden"
      >
        <SwiperSlide className="block md:hidden">
          {" "}
          <div>
            <a href="">
              <img
                src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679610421/aTempo/Assets/homepage/Mobile/1_qwystt.png"
                alt=""
                className="w-full"
              />
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className="block md:hidden">
          {" "}
          <div>
            <a href="">
              <img
                src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679610421/aTempo/Assets/homepage/Mobile/2_hmfgsr.png"
                alt=""
                className="w-full"
              />
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className="block md:hidden">
          {" "}
          <div>
            <a href="">
              <img
                src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679610421/aTempo/Assets/homepage/Mobile/3_fkpldp.png"
                alt=""
                className="w-full"
              />
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className="block md:hidden">
          {" "}
          <div>
            <a href="">
              <img
                src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679610421/aTempo/Assets/homepage/Mobile/4_bzwqj3.png"
                alt=""
                className="w-full"
              />
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    
  );
};

export default HeroImage;
