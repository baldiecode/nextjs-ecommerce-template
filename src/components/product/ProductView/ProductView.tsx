import Image from "next/image";
import { ProductViewItemsOrder } from "./ProductViewItemsOrder";

interface ProductViewProps {
 product: ProductType
}

export const ProductView = ({ product }: ProductViewProps) => {


 return (
    <main className="max-w-7xl mx-auto grid grid-cols-2 gap-20 mt-20">
      <section className="justify-self-end">
        <Image
          loading="eager"
          src={product.image}
          width={500}
          height={500}
          quality={80}
          alt={product.title}
          className="rounded-lg"
        />
      </section>
      <section className="flex flex-col">
        <h1 className="text-4xl font-bold mt-0 mb-2">{product.title}</h1>
        <p className="w-auto text-lg leading-6 tracking-wide border-2 border-gray-300 text-gray-700 shadow-lg p-2 rounded-lg mt-2 mb-0">{product.tags}</p>
        <p className="text-lg leading-6 tracking-wide mt-4 mb-2">
          {product.description}
        </p>
        <span className="text-5xl font-bold">
          $ {product.price}
        </span>
        <ProductViewItemsOrder maxQuantity={product.quantity} />
      </section>
    </main>
 )
};
