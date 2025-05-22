import React, { useContext } from "react";
import Styles from "./RelatedProducts.module.css";
import ShopContext from "../../Context/ShopContext";
import Item from "../Item/Item";

const RelatedProducts = (props) => {
  const { all_products } = useContext(ShopContext);

  return (
    <div>
      <h2>Related Products</h2>
      {/* <div className={Styles["All-Items"]}> */}
      {/* {all_products.slice(0, 4).map((Item1, i) => {
          console.log(
            `Checking: props.category = '${props.Product.category}', Item.category = '${Item1.category}'`
          );
          if (props.Product.category.toLowerCase() === Item1.category) {
            // {
            console.log("cate (In)", props.Product.category);
            console.log("Item cate ", Item1.category);
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
        })} */}

      <div className={Styles["All-Items"]}>
        {/*  */}
        {/* this approch ain't works when we want only 4 posts as it will 1st take 4 elements then matvh the category, got it  */}
        {/* {all_products.slice(0, 4).map((Item1, i) => {
          if (props.Product.category.toLowerCase() === Item1.category) {
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
          } else {
            return null;
          }
        })} */}

        {/*  */}
        {/*  */}
        {/* better approch is to 1st element (of which  category elemnts u want and then take 4 and then map) */}
        {all_products
          .filter(
            (item) =>
              item.category.toLowerCase() ===
              props.Product.category.toLowerCase()
          )
          .slice(0, 4)
          .map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              category={item.category}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
