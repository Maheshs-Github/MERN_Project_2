import React from "react";
import "./BreadCrum.css";
import Arrow from "/Frontend_Assets/breadcrum_arrow.png";

// const BreadCrum = ({ Product }) => {
//   return (
//     <div>
//       <p>
//         {console.log(`Cate: ${Product.category} And Name: ${Product.name}`)}
//         HOME <img src={Arrow} alt="" /> SHOP <img src={Arrow} alt="" />{" "}
//         {Product.category} <img src={Arrow} alt="" /> {Product.name}{" "}
//       </p>
//     </div>
//   );
// };

const BreadCrum = (Props) => {
  if (!Props.Product) return null;
  const { category, name } = Props.Product;
  // const name = Props.Product.name;
  // const category = Props.Product.category;
  return (
    <div>
      <p>
        {console.log(`Cate: ${category} And Name: ${name}`)}
        HOME <img src={Arrow} alt="" /> SHOP <img src={Arrow} alt="" />{" "}
        {category} <img src={Arrow} alt="" /> {name}{" "}
      </p>
    </div>
  );
};

export default BreadCrum;
