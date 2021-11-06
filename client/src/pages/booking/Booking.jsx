import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Booking.css";
import axios from "axios";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";
import { domain } from "../../hooks/useDomain";

const Booking = () => {
  const [trip, setTrip] = useState({});
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = async (data) => {
    data.booking = trip;
    data.status = "pending";

    await axios
      .post(`${domain}/booking`, data)
      .then((res) => {
        if (res.data.insertedId) {
          swal(
            "Thank you!!",
            "Your booking request sent successfully!!",
            "success"
          );
          history.push("/");
        }
      })
      .catch((err) => {
        swal("Error!!", "Oh something went wrong! try again!", "error");
      });
  };

  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      await axios.get(`${domain}/trips/${id}`).then((res) => setTrip(res.data));
    };
    getData();
  }, []);

  const { image, title, location, duration, price, itinerary } = trip;
  return (
    <div className="container my-5">
      <img className="img-fluid mx-auto d-block" src={image} alt="" />
      <div className="row">
        <div className="col-md-8 my-5">
          <h1 className="">{title}</h1>
          <div className="row justify-content-between">
            <div className="col-md-6">
              <p className="fw-bolder">
                <i className="fas fa-map-marker-alt"></i> {location}
              </p>
              <p className="fw-light">
                <i className="fas fa-calendar-day"></i> {duration}
              </p>
            </div>
            <div className="col-md-6 mx-auto">
              <button className="ms-auto bg-dark text-light px-3 fs-5 fw-light  d-block  border-0">
                BDT {price}/person
              </button>
            </div>
          </div>

          <div className="card booking-card border-0 p-3">
            <h5>Itinerary</h5>
            <p className="lead">{itinerary}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="booking-card border-0 card p-3 my-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                value={user.displayName}
                className="form-control mb-2"
                placeholder="Name"
                {...register("name", { required: true })}
              />
              <input
                value={user.email}
                className="form-control mb-2"
                placeholder="Email Address"
                type="email"
                {...register("email")}
              />
              <input
                className="form-control mb-2"
                placeholder="Phone Number"
                type="number"
                {...register("phone")}
              />
              <textarea
                rows="4"
                cols="50"
                className="form-control mb-2"
                placeholder="Booking Note"
                type="text"
                {...register("note")}
              />
              <input
                className="btn btn-outline-dark d-block mx-auto"
                type="submit"
                value="Make a booking"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
