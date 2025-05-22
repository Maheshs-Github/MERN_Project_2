import React, { useContext } from "react";
import ShopContext from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrum from "../Components/BreadCrum/BreadCrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import Styles from "./CSS/Product.module.css";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { ProductID } = useParams();
  // console.log(`Product ID: ${ProductID}`);
  // const Product = all_products.find((e) => {
  //   console.log(`E iD: ${ProductID}`);
  //   return e.id === Number(ProductID);
  // });

  if (!all_products || all_products.length === 0) {
    return <p>Loading products...</p>;
  }
  const Product = all_products.find((e) => e.id === Number(ProductID));

  return (
    <div className={Styles["Product-Base"]}>
      <BreadCrum Product={Product} />
      <ProductDisplay Product={Product} />
      <DescriptionBox />
      <RelatedProducts Product={Product} />
    </div>
  );
};

export default Product;
