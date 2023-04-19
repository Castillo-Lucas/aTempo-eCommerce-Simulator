import React from "react";
import { Link } from "react-router-dom";
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
      {/*Mobile*/}
      <div className="block md:hidden w-full">
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
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <div>
              <Link to="/ItemListContainer/catalogo/all">
                <img
                  src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679610421/aTempo/Assets/homepage/Mobile/1_qwystt.png"
                  alt=""
                  className="w-full"
                />
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div>
              <Link to="/ItemListContainer/catalogo/all">
                <img
                  src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679610421/aTempo/Assets/homepage/Mobile/2_hmfgsr.png"
                  alt=""
                  className="w-full"
                />
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div>
              <Link to="/ItemListContainer/catalogo/all">
                <img
                  src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679610421/aTempo/Assets/homepage/Mobile/3_fkpldp.png"
                  alt=""
                  className="w-full"
                />
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide className="prueba">
            {" "}
            <div>
              <Link to="/ItemListContainer/catalogo/all">
                <img
                  src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679610421/aTempo/Assets/homepage/Mobile/4_bzwqj3.png"
                  alt=""
                  className="w-full"
                />
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>


      {/*Desktop*/}
      <div className="hidden md:block">
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
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <div>
              <Link to="/ItemListContainer/catalogo/all">
                <img
                  src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679610380/aTempo/Assets/homepage/Desktop/banner1_onzrbw.png"
                  alt=""
                />
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div>
              <Link to="/ItemListContainer/catalogo/all">
                <img
                  src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679610380/aTempo/Assets/homepage/Desktop/banner2_nazbs1.png"
                  alt=""
                />
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div>
              <Link to="/ItemListContainer/catalogo/all">
                <img
                  src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679610380/aTempo/Assets/homepage/Desktop/banner3_rqnynv.png"
                  alt=""
                />
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div>
              <Link to="/ItemListContainer/catalogo/all">
                <img
                  src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679610381/aTempo/Assets/homepage/Desktop/banner4_h6ucfj.png"
                  alt=""
                />
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  );
};

export default HeroImage;
