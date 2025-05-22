import React, { useContext } from "react";
import Styles from "./CartItemsComp.module.css";
import ShopContext from "../../Context/ShopContext";
import { ImCross } from "react-icons/im";

const CartItemsComp = () => {
  const {
    setCartItems,
    CartTotal,
    CartItems,
    removeFromCart,
    all_products,
    CountItems,
  } = useContext(ShopContext);
  // let [Count,setCount]= useState({})

  return (
    <div className={Styles.CartBase}>
      <div className={Styles.Headers}>
        <span>Products</span>
        <span>Title</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Total</span>
        <span>Remove</span>
      </div>
      <hr />
      <div className={Styles.CartItemsContent}>
        {Object.entries(CartItems)
          .filter(([, Count]) => Count > 0)
          .map(([ItemID, Count]) => {
            // console.log(`ID (Cart) ${ItemID}`);
            const Product = all_products.find((e) => e.id == ItemID);

            if (!Product) return null;
            else {
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
                      <b>
                        <input
                          // onClick={() => {
                          //   removeFromCart(Product.id);
                          // }}
                          type="number"
                          value={Count}
                          onChange={(e) => {
                            // setCartItems((prev) => ({
                            //   ...prev,
                            //   [ItemID]: Number(e.target.value),
                            // }));
                            const newQuantity = Number(e.target.value);

                            if (newQuantity === 0) {
                              removeFromCart(Product.id); // Remove from cart if 0
                            } else {
                              setCartItems((prev) => ({
                                ...prev,
                                [Product.id]: newQuantity,
                              }));
                            }
                          }}
                          className={Styles.Quantity}
                        />
                      </b>
                    </span>
                    <span>
                      <b>${Product.new_price * Count}</b>
                    </span>
                    <span
                      className={Styles.ContentCross}
                      onClick={() => {
                        removeFromCart(Product.id);
                      }}
                    >
                      {<ImCross />}
                    </span>
                  </div>
                  <hr />
                </div>
              );
            }
          })}
      </div>
      <div className={Styles.CartTotal}>
        <div className={Styles.CartSum}>
          <h3>Cart Totals</h3>
          <div className={Styles.F1}>
            <span>SubTotal</span>

            <span>{CartTotal()}</span>
          </div>
          <hr></hr>
          <div className={Styles.F1}>
            <span>Shopping Fee</span>
            <span>Free</span>
          </div>
          <hr></hr>
          <div className={Styles.F1}>
            <span>
              <b>Total</b>
            </span>
            <span>
              <b>{CartTotal()}</b>
            </span>
          </div>
          <hr></hr>
        </div>
        <div className={Styles.CartPromo}>
          <span>if U have a Promo Code, Enter a here</span>
          <div className={Styles.EnterCoupun}>
            <input type="text" className={Styles.EnterCoupunInput} />
            <button>Submit</button>
            {/* {console.log(`Count Items: ${CountItems()}`)} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemsComp;
