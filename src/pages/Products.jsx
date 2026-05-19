import React, { useEffect } from "react";
import { useData } from "../context/DataContext";
import sandglass from "../assets/loading-sandglass.webm";
import FilterSection from "../components/FilterSection";
import ProductCard from "../components/ProductCard";

function Products() {
  const { data, setData, fetchAllProducts } = useData();
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="">
      <div className="mx-auto mb-10 max-w-6xl px-4">
        {data?.length > 0 ? (
          <div className="flex gap-8">
            <FilterSection />
            <div className="mt-8 flex flex-wrap gap-8">
              {data?.map((product, index) => (
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
