import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ products }) => {
  return (
    <div className=" rounded-lg py-4 px-2 hover:scale-105 border border-transparent hover:bg-white bg-gray-200  shadow-sm  hover:shadow-md transform duration-300 transition">
      <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">HOT</span>
      <img
        src={products.img}
        alt={products.name}
        className="w-full h-40 object-contain mt-2"
      />
      <h3 className="mt-3 font-semibold">{products.name}</h3>
      <div className="flex items-center mt-1">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 text-sm" />
        ))}
      </div>
      <p className="mt-2">
        <span className="font-bold text-blue-600">${products.price}</span>{" "}
        <span className="line-through text-gray-500">${products.oldPrice}</span>{" "}
        <span className="text-red-500">24% off</span>
      </p>
    </div>
  );
};

export default ProductCard;
