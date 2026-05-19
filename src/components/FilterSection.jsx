import React from "react";
import { useData } from "../context/DataContext";

function FilterSection() {
  const { categoryOnlyData, brandOnlyData } = useData();

  return (
    <div className="mt-8 h-max rounded-md bg-gray-200 p-4">
      <input
        type="text"
        placeholder="Search..."
        name=""
        id="product-search-input"
        className="rounded-md border-2 border-gray-400 bg-white p-2"
      />

      {/* category only data */}

      <h3 className="my-4 text-xl font-semibold">Category</h3>
      <div className="flex flex-col gap-2">
        {categoryOnlyData?.map((item) => {
          return (
            <div key={item} className="flex items-center gap-2">
              <input type="checkbox" id="category-checkbox" />
              <button className="cursor-pointer uppercase">{item}</button>
            </div>
          );
        })}
      </div>

      {/* brand only data */}

      <h3 className="my-4 text-xl font-semibold">Brand</h3>
      <select
        name=""
        id="brand-option"
        className="w-full rounded-md border-2 border-gray-200 bg-white p-2"
      >
        {brandOnlyData.map((item, index) => {
          return <option key={index}>{item}</option>;
        })}
      </select>

      {/* price range */}

      <h3 className="my-4 text-xl font-semibold">Price Range</h3>
      <div className="flex flex-col gap-2 font-semibold">
        <label htmlFor="price-range">Price Range: $0 - $1000</label>
        <input type="range" name="price-range" id="price-range" />
      </div>

      <button className="mt-4 cursor-pointer rounded-md bg-red-500 px-2 py-1 font-semibold text-white">
        Reset Filters
      </button>
    </div>
  );
}

export default FilterSection;
