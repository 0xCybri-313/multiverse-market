import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import axios from "axios";
import MidBanner from "./components/midBanner";
import Footer from "./components/Footer";

function App() {
  const [location, setLocation] = useState();
  const [openDropDown, setOpenDropDown] = useState(false);

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

      try {
        const location = await axios.get(url);
        const exactLocation = location.data.address;

        // console.log(exactLocation);

        setOpenDropDown(false);

        setLocation(exactLocation);
      } catch (error) {
        console.log(error);
      }
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      <Navbar
        location={location}
        getLocation={getLocation}
        openDropDown={openDropDown}
        setOpenDropDown={setOpenDropDown}
      />

      <Outlet />
      <Footer />
    </>
  );
}

export default App;
