// components/SecondaryBanner.tsx
import Image from 'next/image';
import React from 'react';

export const SecondBanner: React.FC = () => {
  return (
    <section className="relative h-screen mt-10">
      <div className="absolute left-0 top-0 w-1/2 h-full">
        <Image
        className="filter grayscale hover:filter-none transition-filter duration-300"
          src="/images/custom.jpg"
          alt="Imagen Izquierda"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority
        />
      </div>
      <div className="absolute right-0 top-0 w-1/2 h-full">
        <Image
        className="filter grayscale hover:filter-none transition-filter duration-300"
          src="/images/merch.jpg"
          alt="Imagen Derecha"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">Título del Banner</h2>
          <p className="text-xl text-white mt-4">
            Descripción del banner.
          </p>
        </div>
      </div>
    </section>
 );
};

