import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";

import { Routes, Route } from "react-router-dom";
import AddProducts from "../../components/AddProducts/AddProducts";
import ListProducts from "../../components/ListProducts/ListProducts";
import Styles from "./Admin.module.css";

const Admin = () => {
  return (
    <div>
      <NavBar />
      <div className={Styles["Flex-Base"]}>
        <SideBar />
        <div className={Styles["Flex-Route"]}>
          <Routes>
            <Route
              path="/"
              element={<h2> Welcome to Admin DashBoard</h2>}
            ></Route>
            <Route path="/addProduct" element={<AddProducts />}></Route>
            <Route path="/listProduct" element={<ListProducts />}>
              {" "}
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
