import axios from "axios";
import { createContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();

  //   fetch all products

  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      const productsData = res.data.products;
      setData(productsData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DataContext.Provider value={{ data, setData, fetchAllProducts }}>
      {children}
    </DataContext.Provider>
  );
};
