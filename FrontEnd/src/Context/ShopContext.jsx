// import React, { createContext } from "react";
// import all_products from "../Assets/all_product.js";

// export const ShopContext = createContext(null);

// const ShopContextProvider = (props) => {
//   const ContextValue = { all_products };
//   return (
//     <ShopContext.Provider value={ContextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;

//
//
//
import { createContext } from "react";

const ShopContext = createContext(null);
export default ShopContext;
