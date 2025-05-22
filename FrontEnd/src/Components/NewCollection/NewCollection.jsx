import React from "react";
// import collection from "../../Assets/new_collections.js";
import Item from "../Item/Item";
import "./NewCollection.css";
import { useEffect } from "react";
import { useState } from "react";
const NewCollection = () => {
  const [collection, setcollection] = useState([]);
  useEffect(() => {
    const getCollectionFun = async () => {
      const getCollection = await fetch(
        "https://mern-project-2-backend-mcjh.onrender.com/getNewCollection",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );
      const Data = await getCollection.json();
      setcollection(Data);
    };
    getCollectionFun();
  }, []);
  return (
    <div className="Collection_Base">
      <h1>NEW COLLECTION</h1>
      <div className="Collection_Items">
        {collection.map((Col, i) => {
          return (
            <Item
              key={i}
              id={Col.id}
              name={Col.name}
              image={Col.image}
              old_price={Col.old_price}
              new_price={Col.new_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
