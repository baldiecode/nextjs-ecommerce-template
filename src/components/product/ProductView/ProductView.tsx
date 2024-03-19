import Image from "next/image";
import { ProductViewItemsOrder } from "./ProductViewItemsOrder";
import { SanitizeHTML } from "app/components/shared/SanitizeHTML/SanitizeHTML";

interface ProductViewProps {
  product: ProductType;
}

export const ProductView = ({ product }: ProductViewProps) => {
  return (
    <main className="max-w-7xl mx-auto grid grid-cols-2 gap-20 mt-20 mb-32 p-6 h-screen">
      <section className="justify-self-end">
        <Image
          loading="eager"
          src={product.image}
          width={500}
          height={320}
          quality={80}
          alt={product.title}
          className="rounded-lg shadow-lg max-h-[570px]"
        />
      </section>
      <section className="flex flex-col">
        <div>
          <h1 className="text-4xl font-bold mt-0 mb-2">{product.title}</h1>
          <p className="w-20 text-lg leading-6 tracking-wide border-2 border-gray-300 text-gray-700 shadow-lg p-2 rounded-lg mt-2 mb-4">
            {product.tags}
          </p>
          <SanitizeHTML tag="p">{product.description}</SanitizeHTML>
        </div>
        <div className="flex flex-col">
          <span className="text-5xl font-bold mb-2">$ {product.price}</span>
          <ProductViewItemsOrder maxQuantity={product.quantity} product={product} />
        </div>
      </section>
    </main>
 );
};
