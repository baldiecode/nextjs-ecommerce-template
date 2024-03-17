import Image from "next/image";
import { ProductViewItemsOrder } from "./ProductViewItemsOrder";


interface ProductViewProps {
 product: ProductType;
}

export const ProductView = ({ product }: ProductViewProps) => {
 return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <section className="mx-auto">
        <Image
          loading="eager"
          src={product.image}
          width={500}
          height={500}
          quality={80}
          alt={product.title}
        />
      </section>
      <section className="mt-4">
        <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
        <p className="text-gray-600">{product.tags}</p>
        <p className="text-gray-600">{product.description}</p>
        <span className="text-lg font-semibold text-gray-700">
          $ {product.price}
        </span>
        <ProductViewItemsOrder maxQuantity={product.quantity} />
      </section>
    </main>
 );
};
