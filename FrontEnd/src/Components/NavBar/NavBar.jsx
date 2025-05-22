import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import image from "./logo_big.png";
// import image1 from "../../../public/Frontend_Assets/logo_big.png";
import { FaCartShopping } from "react-icons/fa6";
import "./NavBar.css";
import ShopContext from "../../Context/ShopContext";
const NavBar = () => {
  const [Menu, setMenu] = useState("Shop");
  const { CountItems } = useContext(ShopContext);
  return (
    <>
      <div className="Nav">
        <div className="Logo">
          {/* <img src={image} alt="Logo" /> */}
          {/* <img src={image1} alt="" /> */}
          <img src="/Frontend_Assets/logo.png" alt="LOGO" />
          <h2>SHOPPER</h2>
        </div>
        <ul className="Options">
          <li
            onClick={() => {
              setMenu("Shop");
            }}
          >
            <Link to="/" className="L1">
              Shop
            </Link>
            {/* {Menu === "Shop" ? <hr className="HrStyle"/> : null} */}
          </li>
          <li
            onClick={() => {
              setMenu("Men");
            }}
          >
            <Link to="/Mens" className="L1">
              Men
            </Link>

            {/* {Menu === "Men" ? <hr /> : null} */}
          </li>
          <li
            onClick={() => {
              setMenu("Women");
            }}
          >
            <Link to="/Womens" className="L1">
              Women
            </Link>
            {/* {Menu === "Women" ? <hr /> : null} */}
          </li>
          <li
            onClick={() => {
              setMenu("Kids");
            }}
          >
            <Link to="/Kids" className="L1">
              kid
            </Link>
            {/* {Menu === "kids" ? <hr /> : null} */}
          </li>
        </ul>

        <div className="Login">
          {localStorage.getItem("auth-token") ? (
            <button
              className="btn btn-outline-secondary B1"
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.replace("/");
              }}
            >
              LogOut
            </button>
          ) : (
            <Link to="/Login">
              {" "}
              <button className="btn btn-outline-secondary B1">
                Login
              </button>{" "}
            </Link>
          )}

          <Link to="/Cart" className="L1">
            {" "}
            <div className=" position-relative d-inline-block">
              <FaCartShopping />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger Font">
                {CountItems()}
                <span className="visually-hidden">unread messages</span>
              </span>
            </div>{" "}
          </Link>
        </div>
      </div>
      {/* <hr /> */}
    </>
  );
};

export default NavBar;
