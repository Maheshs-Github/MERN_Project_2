import React, { useContext } from "react";
import Styles from "./ProductDisplay.module.css";
import DStar from "/Frontend_Assets/star_icon.png";
import FStar from "/Frontend_Assets/star_dull_icon.png";
import ShopContext from "../../Context/ShopContext";

const ProductDisplay = ({ Product }) => {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className={Styles.Base}>
      <div className={Styles["Imgs-Grp"]}>
        <img src={Product.image} alt="" />
        <img src={Product.image} alt="" />
        <img src={Product.image} alt="" />
        <img src={Product.image} alt="" />
        {/* <img src={Product.image} alt="" /> */}
      </div>
      <div className={Styles["Big-Img"]}>
        <img src={Product.image} alt="" />
      </div>
      <div className={Styles["Product-Info"]}>
        <p>
          <b>{Product.name}</b>
        </p>
        <div className={Styles.Rate}>
          <img src={DStar} alt="" />
          <img src={DStar} alt="" />
          <img src={DStar} alt="" />
          <img src={DStar} alt="" />
          <img src={FStar} alt="" />
          <span>(122)</span>
        </div>
        <div className={Styles.Price}>
          <span className={Styles.OPrice}>${Product.old_price}</span>
          <span className={Styles.NPrice}> ${Product.new_price}</span>
        </div>
        <div className={Styles["Img-Desc"]}>
          <p>
            Stylish and durable denim jacket perfect for everyday wear. Features
            a classic fit, chest pockets, and all-season comfort.
          </p>
        </div>
        <div className={Styles.Size}>
          <h3>Select Size</h3>
          <div className={Styles.Btns}>
            <button className={`btn btn-light ${Styles.B1}`}>S</button>
            <button className={`btn btn-light ${Styles.B1}`}>M</button>
            <button className={`btn btn-light ${Styles.B1}`}>L</button>
            <button className={`btn btn-light ${Styles.B1}`}>XL</button>
            <button className={`btn btn-light ${Styles.B1}`}>XLL</button>
          </div>
        </div>
        <div className={Styles["Cart-Button"]}>
          <button
            className={`btn btn-danger ${Styles.B2}`}
            onClick={() => {
              addToCart(Product.id);
            }}
          >
            ADD TO CART
          </button>
        </div>
        <div className={Styles.Info}>
          <div>
            <b> Catgory:</b> Men, 1 t-shirt
          </div>
          <div>
            <b> Tags:</b> Modern, Latest
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
