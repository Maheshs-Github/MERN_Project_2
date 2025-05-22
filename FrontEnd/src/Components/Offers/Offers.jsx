import React from "react";
import Img from "/Frontend_Assets/exclusive_image.png";
import "./Offers.css";
const Offers = () => {
  return (
    <div className="Offers">
      <div className="Offer_Text">
        <div className="B_Text">
          <p>Exclusive</p>
          <p>Offers For You</p>
        </div>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className="btn btn-outline-danger">Check Now</button>
      </div>
      <img src={Img} alt="" />
    </div>
  );
};

export default Offers;
