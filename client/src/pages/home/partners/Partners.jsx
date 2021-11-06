import React from "react";

const Partners = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center">Our Partners</h2>
      <hr className="w-50 mx-auto" />

      <div className="row text-center">
        <div className="col-md-3 col-12">
          <img
            className="img-fluid"
            src="https://utility-assets.s3.amazonaws.com/media/assets/full-logo.png"
            alt=""
          />
        </div>

        <div className="col-md-3 col-12">
          <img
            className="img-fluid"
            src="https://www.travelguru.com/travelguru/resources/beetle/images/tg/travelguru-homestay-logo-199x52.png"
            alt=""
          />
        </div>
        <div className="col-md-3 col-12">
          <img
            className="img-fluid"
            src="https://www.yatraexoticroutes.com/wp-content/uploads/2017/03/new-logo-w.png"
            alt=""
          />
        </div>
        <div className="col-md-3 col-12">
          <img
            className="img-fluid"
            src="https://www.cosmosholiday.com.bd/cosmos/custom_image/logo/1557219150_cosmos-logo.gif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
