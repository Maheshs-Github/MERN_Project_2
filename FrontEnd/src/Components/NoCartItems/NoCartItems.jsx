import React from "react";
import Styles from "./NoCartItems.module.css";

const NoCartItems = () => {
  return (
    <div className={Styles.NoCartBase}>
      <h2>NO Items in Cart, Add one to see them...</h2>
    </div>
  );
};

export default NoCartItems;
