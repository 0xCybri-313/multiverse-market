import React from "react";
import bannerImg from "../assets/mid-banner-image.jpg";

const MidBanner = () => {
  return (
    <div className="bg-gray-100 md:py-8">
      <div
        className="relative mx-auto h-144 max-w-5xl bg-cover bg-center md:h-150 md:rounded-2xl"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="bg-opacity-50 absolute inset-0 flex items-center justify-center bg-black/60 md:rounded-2xl">
          <div className="px-4 text-center text-white">
            <h1 className="mb-4 text-3xl font-bold md:text-5xl lg:text-6xl">
              Next-Gen Electronics at Your Fingertips
            </h1>
            <p className="mb-6 text-lg md:text-xl">
              Discover the latest tech innovations with unbeatable prices and
              free shipping on all orders.
            </p>
            <button className="rounded-lg bg-red-500 px-4 py-2 font-semibold text-white transition duration-300 hover:bg-red-600 md:px-6 md:py-3">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidBanner;
