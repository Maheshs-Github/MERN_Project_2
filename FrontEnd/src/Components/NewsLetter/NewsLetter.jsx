import React from "react";
import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <div className="News">
      <div className="B_Text">
        <p>Get Exclusive Offers On Your Email</p>
      </div>
      <p>Subscribe to our NewsLetter and Stay Updated</p>
      <div className="Search">
        <input type="text" name="T1" placeholder="Your E-Mail ID" />
        <button className="btn btn-outline-dark">Check Now</button>
      </div>
    </div>
  );
};

export default NewsLetter;
