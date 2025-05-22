import React from "react";
import Styles from "./DescriptionBox.module.css";

const DescriptionBox = () => {
  return (
    <div className={Styles["DescBase"]}>
      <div className={Styles.Title}>
        <span className={Styles.D1}>Description</span>
        <span className={Styles.R1}>Reviews (122)</span>
      </div>
      <div className={Styles.Desc}>
        <p>
          Shopper is a modern e-commerce website designed to deliver a smooth
          and user-friendly shopping experience. It features a clean layout with
          dedicated sections for men’s, women’s, and kids’ fashion. Users can
          easily browse categories, view detailed product pages, and make quick
          purchases. Shopper includes a secure and responsive cart system for
          managing orders efficiently. Each product displays images, pricing,
          and a short description to assist buying decisions. A dynamic search
          and sort feature allows users to filter and find items faster. The
          website is responsive across devices, ensuring great usability on
          mobile and desktop. It leverages React components for reusability and
          consistent performance. From navigation to checkout, the site
          emphasizes speed and clarity. With a stylish design and practical
          features, Shopper creates a seamless online retail experience.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
