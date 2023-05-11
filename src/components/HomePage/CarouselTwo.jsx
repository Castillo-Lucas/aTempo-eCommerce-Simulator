import React, { useState, useEffect } from "react";
import "../../App.css";
import Card from "../ItemList/Card";
import { db } from "../../FirebaseSettings";
import { getDocs, collection, query, where } from "firebase/firestore";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Keyboard, Autoplay } from "swiper";

const CarouselTwo = () => {
  const [newProducts, setNewProducts] = useState([]);

  //Fetching products from Firebase
  useEffect(() => {
    const itemCollection = collection(db, "aTempoProducts");
    const consult = query(itemCollection, where("newEntry", "!=", ""));

    getDocs(consult)
      .then((res) => {
        const products = res.docs.map((product) => {
          return product.data();
        });

        setNewProducts(products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
        {newProducts.map((products) => (
          <SwiperSlide key={products.id} className="centeredCarousel">
            <div className="cardCarousel">
              <Card key={products.id} products={products} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselTwo;
