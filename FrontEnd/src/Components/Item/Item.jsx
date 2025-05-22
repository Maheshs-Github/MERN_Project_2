import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (Props) => {
  return (
    <div className="Item_Base">
      <Link to={`/Product/${Props.id}`}>
        <img onClick={window.scroll(0, 0)} src={Props.image} alt="" />
      </Link>

      <div className="Name">
        <p>{Props.name}</p>
      </div>
      <div className="New_Price">${Props.new_price}</div>
      <div className="Old_Price">${Props.old_price}</div>
    </div>
  );
};

export default Item;
