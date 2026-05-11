import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "../styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

function Carousel() {
  const { data, setData, fetchAllProducts } = useContext(DataContext);
  console.log(data);
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-128 w-full"
      >
        {[...Array(6)].map((_, index) => (
          <SwiperSlide key={index} className="bg-gray-400 pt-12 text-center">
            <span className="text-2xl font-semibold">Slide {index + 1}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Carousel;
