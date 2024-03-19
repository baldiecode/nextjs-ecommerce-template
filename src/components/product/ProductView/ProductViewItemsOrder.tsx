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
      image: product.image,
      merchandiseId: product.gql_id
    });
  }

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
    <div className="grid grid-cols-1 gap-3 mt-8">
      <div className="flex items-start gap-2 bg-white outline outline-black justify-center w-40 h-10">
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
      <form onSubmit={handleAddToCart} className="w-full">
        <button
          type="submit"
          className="w-80 h-12 flex items-start justify-center gap-2 outline outline-white text-white bg-black text-xl p-2 mt-4"
          onClick={handleAddToCart}
        >
          <div className="mt-2">
            <FaCartShopping />
          </div>
          <span>Add to cart</span>
        </button>
      </form>
    </div>
  );
};
