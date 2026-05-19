import axios from "axios";
import { createContext, useContext, useState } from "react";

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

  const getUniqueCategories = (data, property) => {
    let newVal = data?.map((item) => item[property]);

    return ["All", ...new Set(newVal)];
  };

  const categoryOnlyData = getUniqueCategories(data, "category");
  const brandOnlyData = getUniqueCategories(data, "brand");

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        fetchAllProducts,
        categoryOnlyData,
        brandOnlyData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// custom hook to get data

export const useData = () => useContext(DataContext);
