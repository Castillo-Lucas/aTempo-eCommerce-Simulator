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

const SecondarySlider = ({ imagesWithSrc, generarID }) => {

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
        direction={isVertical ? "vertical" : "horizontal"}
        keyboard={{
          enabled: true,
        }}
        modules={[Navigation, Pagination, Keyboard, Autoplay]}
        className="mySwiper lg:pt-2 secondaySlider"
      >
        {imagesWithSrc.map((img) => (
          <SwiperSlide key={generarID()} className="w-28 mx-1 lg:mx-0 lg:-my-2 2xl:-my-1">
            <div className="bg-zinc-50 border border-zinc-300/80">
              <a href="">
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
  );
};

export default SecondarySlider;
