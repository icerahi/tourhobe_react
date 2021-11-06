import React, { useEffect, useState } from "react";
import axios from "axios";
import ManageDataRow from "./ManageDataRow";
import swal from "sweetalert";
import { domain } from "../../hooks/useDomain";
import EmptyBooking from "../shared/emptyBooking/EmptyBooking";

const ManageBooking = () => {
  const [allBooking, setAllBooking] = useState([]);
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`${domain}/allbooking`)
        .then((res) => setAllBooking(res.data));
    };
    getData();
  }, []);

  const handleBookingApprove = (id) => {
    axios.put(`${domain}/booking/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        swal("Booking approved successfully!", {
          icon: "success",
        });
        const updateItemIndex = allBooking.findIndex(
          (booking) => booking._id === id
        );
        allBooking[updateItemIndex].status = "approved";
        setAllBooking([...allBooking]);
      }
    });
  };
  const handleBookingDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this booking!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`${domain}/booking/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              swal("Poof! Your booking file has been deleted successfully!", {
                icon: "success",
              });
              const remaining = allBooking.filter(
                (booking) => booking._id !== id
              );
              setAllBooking(remaining);
            }
          })
          .catch((err) =>
            swal("Error!!", "Oh something went wrong! try again!", "error")
          );
      }
    });
  };
  console.log(allBooking.length);
  if (allBooking.length == 0) {
    return <EmptyBooking />;
  }
  return (
    <div className="container">
      <h1 className="text-center display-6">Manage Booking</h1>
      <hr className="w-50 mx-auto" />
      <div className="table-responsive">
        <table className="table table-striped ">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Trip Name</th>
              <th scope="col">Location</th>
              <th scope="col">Price </th>
              <th scope="col">Duration </th>
              <th scope="col">Status </th>
              <th scope="col">Approve/Delete </th>
            </tr>
          </thead>
          <tbody>
            {allBooking.map((booking, index) => (
              <ManageDataRow
                key={index}
                handleBookingApprove={handleBookingApprove}
                handleBookingDelete={handleBookingDelete}
                booking={booking}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBooking;
