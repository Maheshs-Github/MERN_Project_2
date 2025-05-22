import React from "react";
import Styles from "./NavBar.module.css";
// import Logo from "/Admin_Assets/logo";
// import NavLogo from "/Admin_Assets/nav-logo ";
// import NavProfile from "/Admin_Assets/nav-profile";

const NavBar = () => {
  return (
    <div className={Styles.Base}>
      {/* <img src={Logo} alt="" /> */}

      <img src="/Admin_Assets/nav-logo.svg" alt="Nav-Logo" />
      <img
        src="/Admin_Assets/AdminLogo.png"
        alt="Nav-Profile"
        className={Styles.NavProfile}
      />
    </div>
  );
};

export default NavBar;
