import React, { createContext, useState, useEffect } from "react";
import { db } from "../FirebaseSettings";
import { getDocs, collection } from "firebase/firestore";

export const ProductReaderContext = createContext();

const ProductReaderContextProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);

  //Fetching products from Firebase
  /*useEffect(() => {
    const itemCollection = collection(db, "aTempoProducts");

    getDocs(itemCollection)
      .then((res) => {
        const products = res.docs.map((product) => {
          return product.data();
        });

        setProductList(products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [db]);*/

  /*Get Items from an updated json to not consume them from firebase*/
  useEffect(() => {
    const url = `https://res.cloudinary.com/dthpuldpm/raw/upload/v1682176449/aTempo/Assets/aTempoProducts_no7idv.json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProductList(data));
  }, []);

  let data = { productList };
  return (
    <ProductReaderContext.Provider value={data}>
      {children}
    </ProductReaderContext.Provider>
  );
};

export default ProductReaderContextProvider;
