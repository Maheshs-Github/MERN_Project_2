import React from "react";
// import data_product from "../../Assets/data.js";
import Item from "../Item/Item.jsx";
import "./Popular.css";
import { useEffect } from "react";
import { useState } from "react";
const Popular = () => {
  const [data_product, setdata_product] = useState([]);
  useEffect(() => {
    const getPopularFun = async () => {
      const getCollection = await fetch("http://localhost:4000/getPopular", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      const Data = await getCollection.json();
      setdata_product(Data);
    };
    getPopularFun();
  }, []);
  return (
    <div className="Popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="Popular-Items">
        {data_product.map((Item_Data, i) => {
          return (
            <Item
              key={i}
              id={Item_Data.id}
              name={Item_Data.name}
              image={Item_Data.image}
              old_price={Item_Data.old_price}
              new_price={Item_Data.new_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
