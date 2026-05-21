import React, { useEffect, useState } from "react";
import { useData } from "../context/DataContext";
import sandglass from "../assets/loading-sandglass.webm";
import FilterSection from "../components/FilterSection";
import ProductCard from "../components/ProductCard";

function Products() {
  const { data, setData, fetchAllProducts } = useData();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [price, setPrice] = useState([0, 1000]);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    console.log(category);
  };
  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

  const filteredData = data?.filter((item) => {
    const title = item.title || "";
    const searchTerm = search || "";

    return (
      title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      (brand === "All" || item.brand === brand) &&
      item.price >= price[0] &&
      item.price <= price[1]
    );
  });

  console.log(data?.length);
  console.log(filteredData?.length);

  const resetFilters = () => {
    setSearch("");
    setCategory("All");
    setBrand("All");
    setPrice([0, 1000]);
  };

  return (
    <div className="">
      <div className="mx-auto mb-10 max-w-6xl px-4">
        {data?.length > 0 ? (
          <div className="flex gap-8">
            <FilterSection
              search={search}
              setSearch={setSearch}
              category={category}
              brand={brand}
              price={price}
              setPrice={setPrice}
              handleCategoryChange={handleCategoryChange}
              handleBrandChange={handleBrandChange}
              resetFilters={resetFilters}
            />
            <div className="mt-8 flex flex-wrap gap-8">
              {filteredData?.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex h-[64vh] items-center justify-center">
            <video autoPlay loop muted>
              <source src={sandglass} type="video/webm" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
