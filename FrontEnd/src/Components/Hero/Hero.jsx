import React from "react";
import Hero_img from "/Frontend_Assets/hero_image.png";
import Hand from "/Frontend_Assets/hand_icon.png";
import "./Hero.css";
import Arrow from "/Frontend_Assets/arrow.png";

const Hero = () => {
  return (
    <>
      <div className="Hero">
        <div className="Text">
          <p>NEW ARRIVALS ONLY</p>
          <div className="B_Text">
            <p className="ha1">New</p>
            <img src={Hand} alt="" />
            <p>collections</p>
            <p>for everyone</p>
          </div>
          <button type="button" className="btn btn-outline-success m1">
            Check Collection <img src={Arrow} alt="" />
          </button>
        </div>
        <div className="Img-Div">
          <img src={Hero_img} alt="Hero Img" />
        </div>
      </div>
    </>
  );
};

export default Hero;
