import React, { useEffect, useState } from "react";
import Trip from "./trip/Trip";
import axios from "axios";
import { domain } from "../../../hooks/useDomain";
import Loader from "../../shared/loader/Loader";
const Trips = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`${domain}/trips`)
        .then((res) => setTrips(res.data))
        .catch((err) => console.log(err.message));
    };
    getData();
  }, []);

  return (
    <div className="container my-5">
      <h3 className="display-6 ">Hot Deals</h3>
      <div className="row row-cols-1 justify-content-center row-cols-md-3 g-4">
        {trips.length === 0 ? (
          <Loader />
        ) : (
          trips.map((trip, index) => <Trip key={index} trip={trip} />)
        )}
      </div>
      <button
        style={{ borderRadius: "20px" }}
        className="btn btn-dark py-2 fw-bolder px-5 mx-auto my-4 d-block"
      >
        LOAD MORE
      </button>
    </div>
  );
};

export default Trips;
