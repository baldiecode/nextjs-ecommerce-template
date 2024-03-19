import { getMainProducts } from "app/services/shopify/products";
import Image from "next/image";
import Link from "next/link";

export const MainProducts = async () => {
  const products = await getMainProducts();
  return (
    <section className="text-center text-6xl mt-40">
      <h3 className="mb-20">✨ Los mejores dulces los encontraras aquí !</h3>
      <div className="grid grid-cols-2 gap-4 max-w-7xl mx-auto">
        {products?.map((product: any) => {
          const imageSrc = product.images[0].src;
          return (
            <Link href="/store">
              <article
                key={product.id}
                className="relative min-h-[500px] min-w-[600px] flex flex-col break-words bg-white bg-clip-border border-0 border-solid border-gray-200 rounded-lg max-w-md mx-auto "
              >
                <div className="flex-grow relative">
                  <Image
                    src={imageSrc}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-2 mb-6">
                  <p className="text-4xl font-bold max-w-[500px] text-left">
                    {product.title}
                  </p>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
