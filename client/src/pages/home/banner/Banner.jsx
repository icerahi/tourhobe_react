import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner">
        <img className="img-fluid" src="https://sharetrip.net/assets/images/banner.png" alt="" />
        <div className="banner-text">
        <h1 className="text-center px-2 text-capitalize">It’s time for a <span className="">new journey !!</span> </h1>
         </div>

    </div>
  );
};

export default Banner;
