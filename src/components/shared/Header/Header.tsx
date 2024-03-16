export default function Header() {
  return (
      <header className="bg-gray-100 text-gray-800 shadow-lg p-4 fixed top-0 w-full z-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-lg">Mi Tienda Online</div>
            <nav className="ml-auto">
              <ul className="flex space-x-4">
              <li>
                  <a href="/" className="hover:text-blue-300">Inicio</a>
                </li>
                <li>
                  <a href="/products" className="hover:text-blue-300">Productos</a>
                </li>
                <li>
                  <a href="/" className="hover:text-blue-300">Tienda</a>
                </li>
                <li>
                  <a href="/login" className="hover:text-blue-300">Iniciar Sesión</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
  );
 }
 