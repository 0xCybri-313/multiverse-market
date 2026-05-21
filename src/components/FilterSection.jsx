import React, { useState } from "react";
import { useData } from "../context/DataContext";

function FilterSection({
  search,
  setSearch,
  category,
  brand,
  price,
  setPrice,
  handleCategoryChange,
  handleBrandChange,
  resetFilters,
}) {
  const { categoryOnlyData, brandOnlyData } = useData();

  return (
    <div className="mt-8 h-max rounded-md bg-gray-200 p-4">
      <input
        type="text"
        placeholder="Search..."
        name=""
        id="product-search-input"
        className="rounded-md border-2 border-gray-400 bg-white p-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* category only data */}

      <h3 className="my-4 text-xl font-semibold">Category</h3>
      <div className="flex flex-col gap-2">
        {categoryOnlyData?.map((item) => {
          return (
            <div key={item} className="flex items-center gap-2">
              <input
                type="checkbox"
                id="category-checkbox"
                name={item}
                value={item}
                onChange={(e) => handleCategoryChange(e)}
                checked={category === item}
              />
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
        value={brand}
        onChange={(e) => handleBrandChange(e)}
      >
        {brandOnlyData.map((item, index) => {
          return <option key={index}>{item}</option>;
        })}
      </select>

      {/* price range */}

      <h3 className="my-4 text-xl font-semibold">Price Range</h3>
      <div className="flex flex-col gap-2 font-semibold">
        <label htmlFor="price-range">
          Price Range: ${price[0]} - ${price[1]}
        </label>
        <input
          type="range"
          name="price-range"
          id="price-range"
          min="0"
          max="1000"
          step="10"
          value={price[1]}
          onChange={(e) => setPrice([price[0], Number(e.target.value)])}
        />
      </div>

      <button
        className="mt-4 cursor-pointer rounded-md bg-red-500 px-2 py-1 font-semibold text-white"
        onClick={resetFilters}
      >
        Reset Filters
      </button>
    </div>
  );
}

export default FilterSection;
