import React from "react";
import "./AddTrip.css";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from 'axios'
import swal from 'sweetalert'
import { domain } from "../../hooks/useDomain";
const AddTrip = () => {
    const { register, handleSubmit } = useForm();
    const history = useHistory()
  
    const onSubmit = async (data) => {
        data.duration=data.duration+' day' //
        axios.post(`${domain}/trips`,data)
        .then((res) => {
            if (res.data.insertedId) {
              swal(
                "New Trip Added successfully!!",
                "success"
              )
              history.push('/')
            }
          })
          .catch((err) => {
            swal("Error!!", "Oh something went wrong! try again!", "error");
          });
    }
       
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="booking-card border-0 card p-3 my-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="form-control mb-2"
                placeholder="Trip Title"
                {...register("title", { required: true })}
              />
              <input
                className="form-control mb-2"
                placeholder="Image URL"
                type="text"
                {...register("image",{required:true})}
              />
              <input
                className="form-control mb-2"
                placeholder="Trip Location"
                type="text"
                {...register("location")}
              />
                <input
                className="form-control mb-2"
                placeholder="Tour Duration(in Day)"
                type="number"
                {...register("duration")}
              />
                              <input
                className="form-control mb-2"
                placeholder="Cost(Per Person)"
                type="number"
                {...register("price")}
              />
              <textarea
                rows="4"
                cols="50"
                className="form-control mb-2"
                placeholder="Itinerary Note"
                type="text"
                {...register("itinerary")}
              />
              <input
                className="btn btn-outline-dark d-block mx-auto"
                type="submit"
                value="Add a new Trip"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTrip;
