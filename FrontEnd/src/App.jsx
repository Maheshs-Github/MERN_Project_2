import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import ShopCate from "./Pages/ShopCate";
import Product from "./Pages/Product";
import LoginSignUp from "./Pages/LoginSignUp";
import Men_Ban from "/Frontend_Assets/banner_mens.png";
import Women_Ban from "/Frontend_Assets/banner_women.png";
import Kid_Ban from "/Frontend_Assets/banner_kids.png";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/Mens"
            element={<ShopCate category="Men" banner={Men_Ban} />}
          />
          <Route
            path="/Womens"
            element={<ShopCate category="Women" banner={Women_Ban} />}
          />
          <Route
            path="/Kids"
            element={<ShopCate category="Kid" banner={Kid_Ban} />}
          />
          <Route path="/Product" element={<Product />} />
          <Route path="/Product/:ProductID" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Login" element={<LoginSignUp />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
