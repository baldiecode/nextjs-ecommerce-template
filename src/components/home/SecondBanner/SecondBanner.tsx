// components/SecondaryBanner.tsx
import Image from 'next/image';
import React from 'react';

export const SecondBanner: React.FC = () => {
 return (
    <section className="relative bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 h-screen w-screen mt-10">\
      <div className="container mx-auto px-6 pt-12 pb-6 text-gray-800 relative z-10">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <Image
              src="/images/custom.jpg"
              alt="Próximo Producto 1"
              layout="responsive"
              width={500}
              height={300}
              objectFit="cover"
              objectPosition="center"
              quality={100}
              priority
            />
            <h2 className="text-2xl text-blue-950 font-bold mt-4">
              Próximo Producto 1
            </h2>
            <p className="text-xl text-blue-950 mt-2">
              Descripción del próximo producto 1.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <Image
              src="/images/merch.jpg"
              alt="Próximo Producto 2"
              layout="responsive"
              width={500}
              height={300}
              objectFit="cover"
              objectPosition="center"
              quality={100}
              priority
            />
            <h2 className="text-2xl text-blue-950 font-bold mt-4">
              Próximo Producto 2
            </h2>
            <p className="text-xl text-blue-950 mt-2">
              Descripción del próximo producto 2.
            </p>
          </div>
        </div>
      </div>
    </section>
 );
};

