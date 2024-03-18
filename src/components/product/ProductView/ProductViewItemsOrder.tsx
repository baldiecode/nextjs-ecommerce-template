"use client";
import { SyntheticEvent, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useShoppingCart } from "app/hooks/useShoppingCart";

interface ProductViewItemsOrderProps {
  maxQuantity: number;
  product: ProductType;
}

export const ProductViewItemsOrder = ({
  maxQuantity,
  product,
}: ProductViewItemsOrderProps) => {
  const [counter, setCounter] = useState(1);
  const { addToCart } = useShoppingCart();

  const handleAddToCart = (event: SyntheticEvent) => {
    event.preventDefault();
    addToCart({
      title: product.title,
      price: product.price,
      quantity: counter,
      id: product.id,
    });
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const handleSubtract = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === 1) return;
    setCounter(counter - 1);
  };

  const handleAdd = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === maxQuantity) return;
    setCounter(counter + 1);
  };

  return (
    <div className="grid grid-cols-2 gap-3 mt-8">
      <div className="flex items-center gap-2 rounded-lg bg-gray-200">
        <button
          onClick={handleSubtract}
          className="flex items-center justify-center h-8 w-8 text-xl font-bold text-gray-800 bg-transparent border-none cursor-pointer p-4"
        >
          -
        </button>
        <p className="m-0 text-xl font-normal">{counter}</p>
        <button
          onClick={handleAdd}
          className="flex items-center justify-center h-8 w-8 text-xl font-bold text-gray-800 bg-transparent border-none cursor-pointer p-4"
        >
          +
        </button>
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <button
          type="submit"
          className="w-full h-12 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-xl rounded-lg p-2 mt-4"
          onClick={handleAddToCart}
        >
          <FaCartShopping />
          <span>Add to cart</span>
        </button>
      </form>
    </div>
  );
};
