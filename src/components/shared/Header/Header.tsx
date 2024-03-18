import Link from "next/link";
import { validateAccessToken } from "app/utils/auth/validateAccessToken";
import { ShoppingCart } from "../ShoppingCart";

export const Header = async () => {

  const customer = await validateAccessToken()
  

  return (
      <header className="bg-gray-100 text-gray-800 shadow-lg p-4 fixed top-0 w-full z-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-lg">Mi Tienda Online</div>
            <nav className="ml-auto">
              <ul className="flex space-x-4">
              <li>
                  <Link href="/" className="hover:text-blue-950">Inicio</Link>
                </li>
                <li>
                  <Link href="/store" className="hover:text-blue-950">Tienda</Link>
                </li>
                <li>
                  <a href="/login" className="hover:text-blue-950">Iniciar Sesión</a>
                </li>
              </ul>
              {customer?.firstName ? (<p>Hola! {customer.firstName}</p>) : (<Link href="/login">Login</Link>)}
              <ShoppingCart />
            </nav>
          </div>
        </div>
      </header>
  );
 }
 