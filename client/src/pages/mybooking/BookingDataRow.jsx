import React from "react";
import axios from "axios";
import swal from "sweetalert";

const BookingDataRow = ({ booking, handleBookingCancel }) => {
  const { _id, status } = booking;
  const { title, location, duration, price } = booking.booking;

  return (
    <tr>
      <td>{title}</td>
      <td>{location}</td>
      <td>{duration}</td>
      <td>{price}</td>
      <td>{status}</td>
      <td>
        {" "}
        <button
          onClick={() => handleBookingCancel(_id)}
          className="btn btn-sm btn-danger"
        >
          cancel
        </button>{" "}
      </td>
    </tr>
  );
};

export default BookingDataRow;
