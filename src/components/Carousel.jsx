import { useEffect } from "react";

import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useData } from "../context/DataContext";
import Category from "./Category";

function Carousel() {
  const { data, setData, fetchAllProducts } = useData();
  // console.log(data);
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        loop={data?.length > 3}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-196 w-full md:h-144"
      >
        {data &&
          data.slice(0, 5).map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex h-full w-full items-center justify-center bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-center"
            >
              <div className="my-20 flex h-144 w-full flex-col items-center justify-center gap-10 px-4 md:my-0 md:flex-row">
                <div className="space-y-3 md:space-y-6">
                  <h3 className="font-sans text-sm font-semibold text-red-500">
                    Powering Your World with the Best in Electronics
                  </h3>
                  <h1 className="line-clamp-2 text-xl font-bold text-white uppercase md:line-clamp-3 md:w-125 md:text-4xl">
                    {item.title}
                  </h1>
                  <p className="line-clamp-3 pr-7 text-gray-400 md:w-125">
                    {item.description}
                  </p>
                  <button className="mt-2 cursor-pointer rounded-md bg-linear-to-r from-red-500 to-purple-500 px-3 py-2 text-white">
                    Shop Now
                  </button>
                </div>
                <div>
                  <img
                    src={item.images}
                    alt={item.title}
                    className="w-md rounded-full shadow-2xl shadow-red-400 transition-all hover:scale-105"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <Category />
    </>
  );
}

export default Carousel;
