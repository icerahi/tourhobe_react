import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Banner from "./banner/Banner";
import Newsletter from "./newsletter/Newsletter";
import Partners from "./partners/Partners";
import Specialities from "./specialities/Specialities";
import Trips from "./trips/Trips";

const Home = () => {
  const location =useLocation()
  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);
  return (
    <div>
      <Banner />
      <Trips />
      <Specialities />
      <Newsletter />
      <Partners />
    </div>
  );
};

export default Home;
