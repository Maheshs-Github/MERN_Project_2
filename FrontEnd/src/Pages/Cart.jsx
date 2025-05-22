import React, { useContext } from "react";
import CartItems from "../Components/CartItemsComp/CartItemsComp";
import ShopContext from "../Context/ShopContext";
import NoCartItems from "../Components/NoCartItems/NoCartItems";

const Cart = () => {
  const { CountItems } = useContext(ShopContext);

  return (
    <div>
      {/* {console.log(`Count Items : ${CountItems}`)} */}
      {CountItems() > 0 ? <CartItems /> : <NoCartItems />}
    </div>
  );
};

export default Cart;
