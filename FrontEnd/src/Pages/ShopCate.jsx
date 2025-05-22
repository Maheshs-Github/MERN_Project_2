import React, { useContext } from "react";
import "./CSS/ShopCate.css";
import ShopContext from "../Context/ShopContext";
import dropDown from "/Frontend_Assets/dropdown_icon.png";
import Item from "../Components/Item/Item.jsx";

const ShopCate = (props) => {
  const { all_products } = useContext(ShopContext);

  return (
    <div className="Shop-Base">
      <div className="Shop-Cate">
        <div className="Shop-Ban">
          <img src={props.banner} alt="" />
        </div>

        <div className="Item-Text">
          <div className="Shop-Items">
            <p>
              <b>Showing 1-12</b> Out of 36 Products
            </p>
          </div>
          <div className="Shop-Sort">
            <div className="btn btn-outline-secondary B1">
              <p>Sorted By</p>
              <img src={dropDown} alt="" />
            </div>
          </div>
        </div>

        <div className="Shop-Items">
          {/* {console.log("cate ", props.category)} */}
          {all_products.map((Item1, i) => {
            // console.log(
            //   `Checking: props.category = '${props.category}', Item.category = '${Item1.category}'`
            // );
            if (props.category.toLowerCase() === Item1.category) {
              // {
              //   console.log("cate (In)", props.category);
              //   console.log("Item cate ", Item1.category);
              // }
              return (
                <Item
                  key={i}
                  id={Item1.id}
                  name={Item1.name}
                  category={Item1.category}
                  image={Item1.image}
                  new_price={Item1.new_price}
                  old_price={Item1.old_price}
                />
              );
            }
          })}
        </div>
        <div className="Explore-More">
          <button className="btn btn-outline-info B2">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default ShopCate;
