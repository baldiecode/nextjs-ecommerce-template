"use client";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export const ShoppingCart = () => {
 const [countItems, setCountItems] = useState(0);

 return (
    <button className="relative bg-transparent border-none cursor-pointer text-gray-700">
      <FaShoppingCart className="w-8 h-8 text-gray-700" />
      {countItems > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full p-1">
          {countItems}
        </span>
      )}
    </button>
 );
};
