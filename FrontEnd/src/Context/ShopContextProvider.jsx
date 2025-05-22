import React, { useEffect, useState } from "react";
import ShopContext from "./ShopContext";
// import all_products from "../Assets/all_product.js";

// const getDataFun = async () => {
//   const GetProducts = await fetch("http://localhost:4000/getAllProducts", {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//     },
//   });

//   const Data = await GetProducts.json();
//   console.log("Data of Products is : ", Data);
//   setall_products(Data);
// };

const getDefaultCart = () => {
  let Cart = {};
  for (let Index = 1; Index < 300 + 1; Index++) {
    Cart[Index] = 0;
  }
  return Cart;
};
const ShopContextProvider = (props) => {
  useEffect(() => {
    const FetchP = async () => {
      const GetProducts = await fetch("http://localhost:4000/getAllProducts", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      const Data = await GetProducts.json();
      console.log("Data of Products is : ", Data);
      setall_products(Data);
    };
    FetchP();

    const GetcartF = async () => {
      if (localStorage.getItem("auth-token")) {
        try {
          const cartData = await fetch("http://localhost:4000/getCart", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "auth-token": `${localStorage.getItem("auth-token")}`,
            },
            body: "",
          });
          const Data = await cartData.json();
          // console.log("Data: ", Data);
          setCartItems(Data);
        } catch (err) {
          console.log("Error While Getting Acrt Data", err);
        }
      }
    };

    GetcartF();
  }, []);
  const [CartItems, setCartItems] = useState(getDefaultCart());
  const [all_products, setall_products] = useState([]);

  const addToCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    // console.log(CartItems);
    if (localStorage.getItem("auth-token")) {
      try {
        const cartData = await fetch("http://localhost:4000/addToCart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "auth-token": `${localStorage.getItem("auth-token")}`,
          },
          body: JSON.stringify({ itemId: itemId }),
        });
        const Data = await cartData.json();
        console.log("Data: ", Data);
      } catch (err) {
        console.error("Error occured while sending cart to backend: ", err);
      }
    }
  };
  useEffect(() => {
    // console.log(CartItems);
  }, [CartItems]); // 👈 runs whenever CartItems is updated

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
    if (localStorage.getItem("auth-token")) {
      try {
        const cartData = await fetch("http://localhost:4000/removeFromCart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "auth-token": `${localStorage.getItem("auth-token")}`,
          },
          body: JSON.stringify({ itemId: itemId }),
        });
        const Data = await cartData.json();
        console.log("Data: ", Data);
      } catch (err) {
        console.error("Error occured while sending cart to backend: ", err);
      }
    }
  };

  const CartTotal = () => {
    let TotalAmount = 0;
    // let Count = 0;
    for (let item in CartItems) {
      // console.log(`Cart Items: ${item}`);
      if (CartItems[item] > 0) {
        // Count++;
        let itemInfo = all_products.find((Product) => {
          // console.log(`Item ID: ${item}  Product ID: ${Product.id}`);
          // console.log(`Count: ${Count}`);
          return Product.id === Number(item);
        });
        TotalAmount += itemInfo.new_price * CartItems[item];
        // console.log(`Total : ${TotalAmount}`);
      }
    }
    return TotalAmount;
  };

  const CountItems = () => {
    let Items = 0;
    for (let I1 in CartItems) {
      if (CartItems[I1] > 0) {
        Items++;
      }
    }
    return Items;
  };

  const ContextValue = {
    setCartItems,
    CartTotal,
    all_products,
    CartItems,
    addToCart,
    removeFromCart,
    CountItems,
  };

  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
