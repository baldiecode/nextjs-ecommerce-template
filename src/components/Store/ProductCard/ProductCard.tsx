import Image from "next/image";
import Link from "next/link";

interface ProductCardInterface {
  product: ProductType;
}

export const ProductCard = ({ product }: ProductCardInterface) => {
  return (
    <Link href={`/product/${product.handle}?id=${product.id}`}>
      <article className="flex flex-col bg-white shadow-md min-h-[400px]">
        <div className="relative flex-grow">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={300}
            objectFit="cover"
            objectPosition="center"
            quality={100}
            priority
            className="h-96"
          />
        </div>
        <div className="px-4 py-4 justify-between flex flex-row">
          <div className="text-base truncate overflow-ellipsis mb-2 w-36">
            {product.title}
          </div>
          
          <p className="text-gray-700 text-lg font-semibold">
            {product.price}
          </p>
        </div>
      </article>

    </Link>
  );
};
