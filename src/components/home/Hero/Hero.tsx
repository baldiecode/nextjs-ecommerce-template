import { Button } from "app/components/shared/Button";
import Image from "next/image";
import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen mt-10 bg-gradient-to-r from-blue-400">
      <div className="absolute left-0 top-0 w-1/2 h-full">
        <div className="flex flex-wrap justify-between mt-40 items-center">
          <div className="w-full lg:w-5/6 px-4 m-auto mb">
            <h1 className="text-4xl text-blue-950 md:text-6xl xl:text-7xl font-bold leading-tight mb-12">
              Welcome To Candy Shop
            </h1>
            <p className="text-xl text-blue-950 md:text-3xl lg:text-4xl mb-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-10 top-0 w-1/2 h-full rounded-full overflow-hidden">
        <Image
          className="hover:filter-none transition-filter duration-300"
          src="/images/hero-candy.jpg"
          alt="Imagen Derecha"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority
        />
      </div>
    </section>
  );
};
