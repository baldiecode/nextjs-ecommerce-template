"use client";
import { SyntheticEvent, useState } from "react";
import { FaCartShopping } from 'react-icons/fa6';

interface ProductViewItemsOrderProps {
 maxQuantity: number,
}

export const ProductViewItemsOrder = ({ maxQuantity }: ProductViewItemsOrderProps) => {
 const [counter, setCounter] = useState(1);

 const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
 };

 const handleSubtract = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === 1) return;
    setCounter(counter - 1);
 }

 const handleAdd = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === maxQuantity) return;
    setCounter(counter + 1);
 }

 return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center mb-4">
        <button onClick={handleSubtract} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
          -
        </button>
        <p className="border-t border-b border-gray-300 font-semibold mx-2">{counter}</p>
        <button onClick={handleAdd} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
          +
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <FaCartShopping className="inline-block mr-2" />
          <span>Add to cart</span>
        </button>
      </form>
    </div>
 )
};
