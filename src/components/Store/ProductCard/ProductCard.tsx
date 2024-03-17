import Image from "next/image";

interface ProductCardInterface {
  product: ProductType;
}

export const ProductCard = ({ product }: ProductCardInterface) => {
  return (
    <>
      <article className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
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
      </article>
    </>
  );
};
