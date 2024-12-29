// import React, { useState } from "react";
// import productContext from "./porductContext";

// const ProductState = (props) => {
//   let products = [
//     {
//       id: 1,
//       title: "apple",
//       description: "apple from mustang",
//       price: 100,
//       instock: 5,
//     },
//     {
//       id: 2,
//       title: "mango",
//       description: "mango from kalaiya",
//       price: 50,
//       instock: 4,
//     },
//     {
//       id: 3,
//       title: "orange",
//       description: "orange from gorkha",
//       price: 100,
//       instock: 5,
//     },
//   ];

//   const [product, setProduct] = useState(products);

//   const [articles, setArticles] = useState([]);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "https://newsapi.org/v2/top-headlines?country=us&apiKey=d125d26fbc6d49728775e0b977bddc5a"
//       );
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       const data = await response.json();
//       setArticles(data.articles);
//       console.log("Fetched data:", data.articles);
//     } catch (error) {
//       console.error("Fetching error:", error);
//     }
//   };

//   return (
//     <productContext.Provider value={{ product, articles, fetchData }}>
//       {props.children}
//     </productContext.Provider>
//   );
// };

// export default ProductState;

import React, { useReducer, useState } from "react";
import productContext from "./porductContext";
import { cartReducer } from "./Reducer";

const ProductState = (props) => {
  let products = [
    {
      id: 1,
      title: "Apple",
      description: "Apple from Mustang",
      price: 100,
      instock: 5,
    },
    {
      id: 2,
      title: "Mango",
      description: "Mango from Kalaiya",
      price: 50,
      instock: 4,
    },
    {
      id: 3,
      title: "Orange",
      description: "Orange from Gorkha",
      price: 100,
      instock: 5,
    },
    {
      id: 4,
      title: "Grapes",
      description: "Grapes from Nuwakot",
      price: 150,
      instock: 6,
    },
  ];

  const [product, setProduct] = useState(products);
  const [state, dispatch] = useReducer(cartReducer, {
    products: product,
    cart: [],
  });

  const allProduct = async () => {
    const response = await fetch("", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };

  return (
    <productContext.Provider value={{ product, allProduct, state, dispatch }}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductState;
