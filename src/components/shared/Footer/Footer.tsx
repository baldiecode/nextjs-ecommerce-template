
export const Footer: React.FC = () => {
 return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Contacto</h3>
            <p>Email: info@tudominio.com</p>
            <p>Teléfono: +34 123 456 789</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Enlaces</h3>
            <ul>
              <li><a href="/" className="text-white hover:text-gray-300">Inicio</a></li>
              <li><a href="/about" className="text-white hover:text-gray-300">Acerca de</a></li>
              <li><a href="/contact" className="text-white hover:text-gray-300">Contacto</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Redes Sociales</h3>
            <ul>
              <li><a href="#" className="text-white hover:text-gray-300">Facebook</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Twitter</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
 );
};

