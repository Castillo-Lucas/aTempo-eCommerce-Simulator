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

const MainSlider = () => {
  return (
    <div className="col-span-12 md:row-span-4 md:col-span-6 lg:row-span-1 lg:col-span-5 border boximg">
      {/*Desktop*/}
      <div className="">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
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
          className="mySwiper pb-8"
        >
          <SwiperSlide>
            {" "}
            <div className="bg-zinc-50">
              <a href="">
                <img
                  src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679928857/aTempo/Assets/Guitarras/Fender%20American%20Professional%20II%20Roasted%20Pine%20Stratocaster%20HSS%20Electric%20Guitar%20Sienna%20Sunburst/americanProf2StratHSS1_fahhlc.png"
                  alt=""
                />
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div className="bg-zinc-50">
              <a href="">
                <img
                  src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679928857/aTempo/Assets/Guitarras/Fender%20American%20Professional%20II%20Roasted%20Pine%20Stratocaster%20HSS%20Electric%20Guitar%20Sienna%20Sunburst/americanProf2StratHSS2_lboifk.png"
                  alt=""
                />
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div className="bg-zinc-50">
              <a href="">
                <img
                  src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679928857/aTempo/Assets/Guitarras/Fender%20American%20Professional%20II%20Roasted%20Pine%20Stratocaster%20HSS%20Electric%20Guitar%20Sienna%20Sunburst/americanProf2StratHSS3_rcjjyd.png"
                  alt=""
                />
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div className="bg-zinc-50">
              <a href="">
                <img
                  src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679928857/aTempo/Assets/Guitarras/Fender%20American%20Professional%20II%20Roasted%20Pine%20Stratocaster%20HSS%20Electric%20Guitar%20Sienna%20Sunburst/americanProf2StratHSS4_bik5xf.png"
                  alt=""
                />
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div className="bg-zinc-50">
              <a href="">
                <img
                  src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679928857/aTempo/Assets/Guitarras/Fender%20American%20Professional%20II%20Roasted%20Pine%20Stratocaster%20HSS%20Electric%20Guitar%20Sienna%20Sunburst/americanProf2StratHSS5_duhu6f.png"
                  alt=""
                />
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div className="bg-zinc-50">
              <a href="">
                <img
                  src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679928857/aTempo/Assets/Guitarras/Fender%20American%20Professional%20II%20Roasted%20Pine%20Stratocaster%20HSS%20Electric%20Guitar%20Sienna%20Sunburst/americanProf2StratHSS6_ugnlsz.png"
                  alt=""
                />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>

        
      </div>
    </div>
  );
};

export default MainSlider;
