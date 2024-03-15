export default function Header() {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">Mi Tienda Online</div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/products">Productos</a>
              </li>
              <li>
                <a href="/login">Iniciar Sesión</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
