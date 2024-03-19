"use client";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useShoppingCart } from "app/hooks/useShoppingCart";
import { ShoppingCartItem } from "./ShoppingCartItem";
import { handleCreateCart } from "app/actions";

export default function ShoppingCart() {
  const { cart } = useShoppingCart();
  const [isBuying, setIsBuying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const hasItems = cart.length > 0;

  const handleOpen = () => {
    if (hasItems) {
      setIsOpen(!isOpen)
    }
  };

  const handleBuy = async () => {
    try {
      setIsBuying(true);
      const checkoutUrl = await handleCreateCart(cart);
      if(!checkoutUrl) throw new Error('Error creating checkout');
      window.localStorage.removeItem('cart');
      window.location.href = checkoutUrl;
    } catch (error) {
      console.log(error);
    } finally {
      setIsBuying(false);
    }
  }

  return (
    <button
      className="relative bg-transparent border-none cursor-pointer text-gray-700"
      onClick={handleOpen}
    >
      <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full p-1">
        {cart.length}
      </span>
      <FaShoppingCart className="w-8 h-8 text-gray-700" />
      {isOpen && (
        <div className="absolute bg-primary border border-gray-300 bg-gray-100 rounded-lg right-0 max-w-[320px] min-w-[250px] p-4">
          {cart.map((item) => (
            <ShoppingCartItem key={item.id} item={item} />
          ))}
          <button
            onClick={handleBuy}
            className="bg-main-contrast text-text-color w-full py-1 rounded-lg border-none font-bold cursor-pointer"
            disabled={isBuying}
          >
            Buy
          </button>
        </div>
      )}
    </button>
  );
}
