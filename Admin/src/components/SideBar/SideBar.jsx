import React from "react";
import Styles from "./SideBar.module.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className={Styles.SideBar}>
      <Link to={"/addProduct"} className={Styles.SideBarLink}>
        <div className={Styles["SideBar-Content"]}>
          <img src={"/Admin_Assets/Product_Cart.svg"} alt="" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={"/listProduct"}>
        <div className={Styles["SideBar-Content"]}>
          <img src={"/Admin_Assets/Product_list_icon.svg"} alt="" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default SideBar;
