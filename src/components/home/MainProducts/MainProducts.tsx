import Image from "next/image";

export const MainProducts: React.FC = () => {
 return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Main Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <Image 
              src="/images/gums.jpg" 
              alt="gums"
              width={500} 
              height={300} 
              objectFit="cover"
              objectPosition="center"
              quality={100}
              priority />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-center">Producto 1</h3>
              <p className="text-gray-600 text-center">Descripción del producto 1.</p>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
          <Image 
              src="/images/caramel.jpg" 
              alt="carael"
              width={500} 
              height={300} 
              objectFit="cover"
              objectPosition="center"
              quality={100}
              priority />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-center">Producto 2</h3>
              <p className="text-gray-600 text-center">Descripción del producto 2.</p>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
          <Image 
              src="/images/heart.jpg" 
              alt="carael"
              width={500} 
              height={300} 
              objectFit="cover"
              objectPosition="center"
              quality={100}
              priority />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-center">Producto 3</h3>
              <p className="text-gray-600 text-center">Descripción del producto 3.</p>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
          <Image 
              src="/images/sugus.jpg" 
              alt="carael"
              width={500} 
              height={300} 
              objectFit="cover"
              objectPosition="center"
              quality={100}
              priority />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-center">Producto 4</h3>
              <p className="text-gray-600 text-center">Descripción del producto 4.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
 );
};
