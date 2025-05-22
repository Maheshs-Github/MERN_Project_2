import React from "react";
import Img from "/Frontend_Assets/logo_big.png";
import IG from "/Frontend_Assets/instagram_icon.png";
import WP from "/Frontend_Assets/whatsapp_icon.png";
import Pin from "/Frontend_Assets/pintester_icon.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="Shop">
        <img src={Img} alt="" />
        <h1>SHOPPER</h1>
      </div>
      <div className="Pages">
        <ul>
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="Socials">
        <img src={IG} alt="" />
        <img src={Pin} alt="" />
        <img src={WP} alt="" />
      </div>
      <div className="Copyright">
        <hr />
        <p>CopyRight @ 2025 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
