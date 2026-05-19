import React, { useEffect } from "react";
import { useData } from "../context/DataContext";

function Category() {
  const { data, setData, fetchAllProducts } = useData();

  const getUniqueCategories = (data, property) => {
    let newVal = data?.map((item) => item[property]);

    return [...new Set(newVal)];
  };

  const categoryOnlyData = getUniqueCategories(data, "category");
  // console.log(categoryOnlyData);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="w-full bg-[#101829]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-4 py-7 md:justify-around">
        {categoryOnlyData?.map((item) => {
          return (
            <div key={item}>
              <button
                onClick={() => navigate(`/category/${item}`)}
                className="cursor-pointer rounded-md bg-linear-to-r from-red-500 to-purple-500 px-3 py-1 text-white uppercase"
              >
                {item}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
