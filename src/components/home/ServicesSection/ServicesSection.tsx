import { FaTruck, FaCheck } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";



export const ServicesSection: React.FC = () => {
 return (
    <section className="bg-gray-100 py-12 mt-8">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-6 flex flex-col items-center">
          <FaTruck size={48} />

            <h3 className="text-2xl font-bold text-center">Entrega Rápida</h3>
            <p className="text-center">Entregamos a todo el país.</p>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col items-center">
          <MdOutlinePayment size={48}  />
            <h3 className="text-2xl font-bold text-center">Pago Seguro</h3>
            <p className="text-center">Paga de manera segura con tarjeta.</p>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col items-center">
          <FaCheck size={48}  />
            <h3 className="text-2xl font-bold text-center">Garantía</h3>
            <p className="text-center">Ofrecemos garantía en nuestros productos.</p>
          </div>
        </div>
      </div>
    </section>
 );
};

