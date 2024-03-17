import { env } from "app/config/env"

export const shopifyUrls = {
  products: {
    'all': `https://${env.SHOPIFY_HOSTNAME}/admin/api/2024-01/products.json`,
    mainProducts: `https://${env.SHOPIFY_HOSTNAME}/admin/api/2024-01/collections/465664934182/products.json`,
  },
  collections: {
    'all': `https://${env.SHOPIFY_HOSTNAME}/admin/api/2024-01/smart_collections.json`,
    'products': (id: string) => `https://${env.SHOPIFY_HOSTNAME}/admin/api/2024-01/collections/${id}/products.json`
  }
}