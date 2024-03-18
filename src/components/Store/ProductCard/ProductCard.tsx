import Image from "next/image";
import Link from "next/link";

interface ProductCardInterface {
  product: ProductType;
}

export const ProductCard = ({ product }: ProductCardInterface) => {
  return (
    <Link href={`/product/${product.handle}?id=${product.id}`}>
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <Image
        src={product.image}
        alt={product.title}
        width={500}
        height={300}
        objectFit="cover"
        objectPosition="center"
        quality={100}
        priority
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {product.handle}
        </span>
      </div>
    </div>
    </Link>
 );
};
