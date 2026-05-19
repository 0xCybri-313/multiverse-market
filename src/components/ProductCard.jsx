import React from "react";
import { IoCartOutline } from "react-icons/io5";

function ProductCard({ product }) {
  console.log(product);
  return (
    <div className="relative flex h-96 w-64 cursor-pointer flex-col justify-between rounded-2xl border border-gray-100 bg-white p-4 transition-all hover:scale-105 hover:shadow-2xl">
      <img
        src={product.thumbnail}
        alt=""
        className="aspect-square rounded-t-md bg-gray-100"
      />
      <h1 className="line-clamp-2 p-1 font-semibold">{product.title}</h1>
      <p className="my-1 text-lg font-bold text-gray-800">${product.price}</p>
      <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-red-500 px-3 py-2 text-lg font-semibold text-white">
        <IoCartOutline className="h-6 w-6" /> Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
