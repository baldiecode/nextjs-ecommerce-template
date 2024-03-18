"use client";
import { useShoppingCart } from "app/hooks/useShoppingCart";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";


export const ShoppingCart = () => {

  const { cart } = useShoppingCart();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);


 return (
    <button className="relative bg-transparent border-none cursor-pointer text-gray-700" onClick={handleOpen} >
      <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full p-1">
        {cart.length}
      </span>
      <FaShoppingCart className="w-8 h-8 text-gray-700" />
      {isOpen && (
        <div className="absolute bg-primary border border-gray-300 rounded-lg right-0 max-w-[320px] min-w-[250px] p-4">
          {
            cart.map(item => (
              <>
                <p key={item?.id}>{item?.title}</p>
                <p>Cantidad: {item.quantity}</p>
              </>
            ))
          }
          <button className="bg-main-contrast text-text-color w-full py-1 rounded-lg border-none font-bold cursor-pointer">
            Buy
          </button>
        </div>
      )}
    </button>
 );
};
