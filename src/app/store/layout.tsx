import { getCollections } from "app/services/shopify/collections";
import Link from "next/link";

export const runtime = "edge";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collections = await getCollections();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen  p-6 mx-40">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10 mt-20">
        Explorar
      </h1>
      <nav className="w-full max-w-md mx-auto">
        <ul className="flex flex-row justify-center gap-12">
          {collections?.map((collection: any) => (
            <li key={collection.id} className="mb-4">
              <Link href={"/store/" + collection.handle}>
                <p className="block text-center text-gray-700 hover:text-gray-900 transition-colors duration-200 px-8 py-2 rounded-lg">
                  {collection.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {children}
    </main>
  );
}
