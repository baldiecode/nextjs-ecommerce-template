import { ProductsWrapper } from "app/components/Store/ProductWrapper/ProductWrapper"
import { getProducts } from "app/services/shopify/"



interface CategoryProps {
  params: {
    categories: string[],
  }
  searchParams?: string
}

export default async function Category(props: CategoryProps) {
  const products = await getProducts()
  console.log(products)
  

  return (
    <ProductsWrapper products={products} />
  )
}