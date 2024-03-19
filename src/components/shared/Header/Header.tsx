import Link from "next/link";
import { validateAccessToken } from "app/utils/auth/validateAccessToken";
import dynamic from "next/dynamic";

const NoSSRShoppingCart = dynamic(() => import("../ShoppingCart"), {
  ssr: false,
});

export const Header = async () => {
  const customer = await validateAccessToken();

  return (
    <header className="bg-gray-100 text-gray-800 shadow-lg p-4 fixed top-0 w-full z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold">Mi Tienda Online</div>
          <nav>
            <ul className="flex space-x-8">
              {" "}
              <li>
                <Link href="/" className="hover:text-blue-950">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/store" className="hover:text-blue-950">
                  Tienda
                </Link>
              </li>
              {customer?.firstName ? (
                <p className="text-sm">Hola! {customer.firstName}</p>
              ) : (
                <Link href="/login" className="hover:text-blue-950">
                  Login
                </Link>
              )}
              <NoSSRShoppingCart />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
