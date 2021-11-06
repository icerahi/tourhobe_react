import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import BookingDataRow from "./BookingDataRow";
import swal from "sweetalert";
import { domain } from "../../hooks/useDomain";
import EmptyBooking from "../shared/emptyBooking/EmptyBooking";

const MyBooking = () => {
  const [userBookings, setUserBookings] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    const getData = async () => {
      await axios(`${domain}/mybooking?email=${user?.email}`).then((res) =>
        setUserBookings(res.data)
      );
    };
    getData();
  }, []);

  const handleBookingCancel = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once cancelled, you will not be able to recover this booking!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`${domain}/booking/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              swal("Poof! Your booking file has been cancelled successfully!", {
                icon: "success",
              });
              const remaining = userBookings.filter(
                (booking) => booking._id !== id
              );
              setUserBookings(remaining);
            }
          })
          .catch((err) =>
            swal("Error!!", "Oh something went wrong! try again!", "error")
          );
      }
    });
  };

  if (userBookings.length === 0) {
    return <EmptyBooking />;
  }
  return (
    <div className="container">
      <h1 className="text-center display-6">My Booking</h1>
      <hr className="w-50 mx-auto" />
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Trip Name</th>
              <th scope="col">Location</th>
              <th scope="col">Duration </th>
              <th scope="col">Price(BDT) </th>
              <th scope="col">Status </th>
              <th scope="col">Action </th>
            </tr>
          </thead>
          <tbody>
            {userBookings.map((booking, index) => (
              <BookingDataRow
                key={index}
                handleBookingCancel={handleBookingCancel}
                booking={booking}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;
