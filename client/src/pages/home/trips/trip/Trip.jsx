import React from "react";
import { Link } from "react-router-dom";
import "./Trip.css";

const Trip = ({ trip }) => {
  const { title, image, duration, price, location, _id } = trip;
  return (
    <div className="col">
      <div className="card h-100 trip-card shadow-lg border-15 border-0">
        <div className="overflow-hidden">
          <img
            src={image}
            className="card-img-top trip-image border-15"
            alt="..."
          />
        </div>
        <div className="card-body">
          <div>
            <h5 className="card-title">{title}</h5>
            <div className="row justify-content-between">
              <div className="col-md-6">
                <p>
                  <i className="fas fa-map-marker-alt"></i> {location}
                </p>
                <p className="">
                  <i className="fas fa-calendar-day"></i> {duration}
                </p>
              </div>
              <div className="col-md-6">
                <Link to={`/booking/${_id}`}>
                  {" "}
                  <button className="booknow-btn float-right  ms-auto py-2 px-3">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <button className="price-button border-0">BDT {price}/person</button>
        </div>
      </div>
    </div>
  );
};

export default Trip;
