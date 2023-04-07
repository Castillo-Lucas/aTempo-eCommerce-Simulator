import React from "react";
import "../../App.css";
import Card from "../ItemList/Card";

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
    <div className="lg:container lg:px-48 mx-auto py-4">
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
        className="mySwiper w-full py-5"
      >
        
        <SwiperSlide className="centeredCarousel">
          <div className="cardCarousel">
            <Card />
          </div>
        </SwiperSlide>

        <SwiperSlide className="centeredCarousel">
          <div className="cardCarousel">
            <Card />
          </div>
        </SwiperSlide>

        <SwiperSlide className="centeredCarousel">
          <div className="cardCarousel">
            <Card />
          </div>
        </SwiperSlide>

        <SwiperSlide className="centeredCarousel">
          <div className="cardCarousel">
            <Card />
          </div>
        </SwiperSlide>

        <SwiperSlide className="centeredCarousel">
          <div className="cardCarousel">
            <Card />
          </div>
        </SwiperSlide>


      </Swiper>
    </div>
  );
};

export default CarouselOne;
