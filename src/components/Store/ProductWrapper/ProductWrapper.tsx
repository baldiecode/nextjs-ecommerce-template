import { ProductCard } from "../ProductCard"

interface ProductsWrapperProps {
 products: ProductType[]
}

export const ProductsWrapper = ({ products }: ProductsWrapperProps) => {
 return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Nuestros Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
 )
}
