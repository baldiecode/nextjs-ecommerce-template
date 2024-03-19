"use client";
import Image from 'next/image'
import { FaRegTrashCan } from "react-icons/fa6";
import { useShoppingCart } from 'app/hooks/useShoppingCart';

interface ShoppingCartItemProps {
 item: CartItem
}

export const ShoppingCartItem = ({ item }: ShoppingCartItemProps) => {

 const { removeCartItem } = useShoppingCart();

 return (
    <div className="flex flex-row items-center space-x-4 gap-2">
      <Image src={item.image} alt={item.title} width={48} height={48} />
      <div className="grid grid-cols-2 gap-4 w-full items-center">
        <p className="font-bold text-xs text-left">{item?.title}</p>
        <span className="w-4 h-4">x{item.quantity}</span>
      </div>
      <button onClick={() => removeCartItem(item)} className="bg-transparent border-none cursor-pointer text-xs font-bold text-right p-0 m-0 hover:text-blue-500 underline" aria-label='trash'>
        <FaRegTrashCan />
      </button>
    </div>
 )
}
