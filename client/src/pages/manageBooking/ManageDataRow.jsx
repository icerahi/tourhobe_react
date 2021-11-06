import React from "react";

const ManageDataRow = ({
  booking,
  handleBookingDelete,
  handleBookingApprove,
}) => {
  const { name, email, _id, status } = booking;
  const { title, location, price, duration } = booking.booking;
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{title}</td>
      <td>{location}</td>
      <td>{price}</td>
      <td>{duration}</td>
      <td>{status}</td>
      <td>
        <button
          onClick={() => handleBookingApprove(_id)}
          className="btn btn-sm btn-secondary m-2"
          disabled={status === "approved"}
        >
         <i className="fas fa-check-square"></i>
        </button>
        <button
          onClick={() => handleBookingDelete(_id)}
          className="btn btn-sm btn-danger m-2"
        >
         <i className="fas fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default ManageDataRow;
