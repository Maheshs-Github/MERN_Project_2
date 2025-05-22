import React, { useEffect, useState } from "react";
import Styles from "./ListProducts.module.css";
import { ImCross } from "react-icons/im";

const ListProducts = () => {
  const [Data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch("http://localhost:4000/getAllProducts", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    const ResData = await res.json();
    // console.log("Data: ", ResData);
    setData(ResData);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log("Data: (Of State) ", Data);
  }, [Data]);

  const deleteProduct = async (ID) => {
    try {
      const DelRes = await fetch("http://localhost:4000/removeProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: ID }),
      });
      const Ans = await DelRes.json();
      if (Ans.success) {
        console.log("deleted successfully ", Ans.id);
        getData();
      } else {
        console.log("u messed up");
      }
    } catch (err) {
      console.log("there is been while deleting ", err);
    }
  };
  return (
    <div>
      <div className={Styles.CartBase}>
        <h2>All Products List</h2>

        <div className={Styles.Headers}>
          <span>Product</span>
          <span>Title</span>
          <span>Old Price</span>
          <span>New Price</span>
          <span>Category</span>
          <span>Remove</span>
        </div>

        <div className={Styles.CartItemsContent}>
          {Data.map((Product, ItemID) => {
            return (
              <div className={Styles.ContentBase1} key={ItemID}>
                <div className={Styles.ContentBase} key={ItemID}>
                  {/* {console.log(`ID (Cart): ${ItemID}`)} */}

                  <img src={Product.image} alt="" />
                  <span className={Styles.ContentName}>{Product.name}</span>
                  <span>
                    <b>${Product.new_price}</b>
                  </span>
                  <span>
                    <b>${Product.old_price}</b>
                  </span>
                  <span>
                    <b>${Product.category}</b>
                  </span>

                  <span
                    className={Styles.ContentCross}
                    onClick={() => {
                      deleteProduct(Product.id);
                    }}
                  >
                    {<ImCross />}
                  </span>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListProducts;
