import { useState, useEffect } from "react";
import "../../App.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Keyboard, Autoplay } from "swiper";

const SecondarySlider = () => {
  const [isVertical, setIsVertical] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsVertical(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="col-span-12 md:row-span-2 md:col-span-6 lg:row-span-1 lg:col-span-2 lg:order-first flex">
      <Swiper
        slidesPerView={4}
        direction={isVertical ? 'vertical' : 'horizontal'}
        keyboard={{
          enabled: true,
        }}
        modules={[Navigation, Pagination, Keyboard, Autoplay]}
        className="mySwiper secondaySlider"
      >
        <SwiperSlide className="w-28 lg:-my-2 2xl:-my-1">
          <div className="bg-zinc-50 border">
            <a href="">
              <img
                src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679928857/aTempo/Assets/Guitarras/Fender%20American%20Professional%20II%20Roasted%20Pine%20Stratocaster%20HSS%20Electric%20Guitar%20Sienna%20Sunburst/americanProf2StratHSS1_fahhlc.png"
                alt=""
              />
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-28 lg:-my-2 2xl:-my-1">
          <div className=" bg-zinc-50 border">
            <a href="">
              <img
                src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679928857/aTempo/Assets/Guitarras/Fender%20American%20Professional%20II%20Roasted%20Pine%20Stratocaster%20HSS%20Electric%20Guitar%20Sienna%20Sunburst/americanProf2StratHSS2_lboifk.png"
                alt=""
              />
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-28 lg:-my-2 2xl:-my-1">
          <div className="bg-zinc-50 border">
            <a href="">
              <img
                src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679928857/aTempo/Assets/Guitarras/Fender%20American%20Professional%20II%20Roasted%20Pine%20Stratocaster%20HSS%20Electric%20Guitar%20Sienna%20Sunburst/americanProf2StratHSS3_rcjjyd.png"
                alt=""
              />
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-28 lg:-my-2 2xl:-my-1">
          <div className="bg-zinc-50 border">
            <a href="">
              <img
                src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679928857/aTempo/Assets/Guitarras/Fender%20American%20Professional%20II%20Roasted%20Pine%20Stratocaster%20HSS%20Electric%20Guitar%20Sienna%20Sunburst/americanProf2StratHSS4_bik5xf.png"
                alt=""
              />
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-28 lg:-my-2 2xl:-my-1">
          <div className="bg-zinc-50 border">
            <a href="">
              <img
                src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679928857/aTempo/Assets/Guitarras/Fender%20American%20Professional%20II%20Roasted%20Pine%20Stratocaster%20HSS%20Electric%20Guitar%20Sienna%20Sunburst/americanProf2StratHSS5_duhu6f.png"
                alt=""
              />
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-28 lg:-my-2 2xl:-my-1">
          <div className="bg-zinc-50 border">
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
  );
};

export default SecondarySlider;
