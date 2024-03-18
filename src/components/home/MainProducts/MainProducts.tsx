import { getMainProducts } from 'app/services/shopify/products'
import Image from 'next/image'

export const MainProducts = async () => {
 const products = await getMainProducts()

 return (
    <section className="text-center text-6xl">
      <h3>✨ New products released!</h3>
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        {products?.map((product) => {
          const imageSrc = product.images[0].src;
          return (
            <article key={product.id} className="relative min-h-[400px]">
              <Image src={imageSrc} alt={product.title} layout="fill" objectFit="cover" className="opacity-40" />
              <p className="absolute top-0 right-6 z-10 text-4xl font-bold max-w-[300px] text-right">{product.title}</p>
            </article>
          )
        })}
      </div>
    </section>
 )
}
