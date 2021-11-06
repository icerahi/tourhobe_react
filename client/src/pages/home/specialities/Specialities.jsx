import React from "react";
import "./Specialities.css";
const Specialities = () => {
  return (
    <div className="container my-5 specialities">
      <hr className="w-50 mx-auto" />
      <div className="row my-5">
        <div className="col-md-6">
          <img
            className="img-fluid"
            src="https://www.classicjourneys.com/app/uploads/2021/07/21.4.22_blog_Robinson_family_costa_rica_vacation-1-630x352.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-5">A global collective, local at heart.</h1>
          <p className="lead">
            {" "}
            Our local leaders are all in. They’re inspired by the idea that our
            style of travel can change the world – all while showing you an
            incredible time.
          </p>
          <button className="btn btn-outline-dark py-2 px-3">
            Meet our leaders
          </button>
        </div>
      </div>
    </div>
  );
};

export default Specialities;
