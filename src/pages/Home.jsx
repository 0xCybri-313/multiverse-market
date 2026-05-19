import React from "react";
import Carousel from "../components/Carousel";
import MidBanner from "../components/midBanner";
import Feature from "../components/Feature";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Carousel />
      <div className="h-auto w-full bg-gray-100 md:py-8">
        <MidBanner />
      </div>
      <Feature />
    </div>
  );
}

export default Home;
