import React from "react";
import "./Newsletter.css";
const Newsletter = () => {
  return (
    <div className="bg-white container-fluid" style={{boxShadow:'4px 5px 8px lightgray'}}>
      <div className="mx-auto p-5 text-center" >
        <h5 className="fw-bolder h4 ">
          GET YOUR FREE $250 <br /> TRAVEL CREDIT WHEN YOU SIGN-UP FOR OUR
          NEWSLETTER
        </h5>
        <p className="lead">
          Plus, receive travel inspiration, news and latest promotions.
        </p>
        <input
          placeholder="Email address"
          type="email"
          className="newsletter-email-input form-control w-50 mx-auto my-3 py-2 px-3"
        />
        <button className="subscribe-btn mx-auto">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
