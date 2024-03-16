import Image from "next/image";
import React from "react";

export const Hero: React.FC = () => {
  return (
<section className="relative bg-gray-900 h-screen">
 <div className="absolute inset-0">
    <Image
      src="/images/hero.jpg"
      alt="Hero Image"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      quality={100}
      priority
    />
 </div>
 <div className="container mx-auto px-6 pt-12 pb-6 text-gray-800 relative z-10">
    <div className="flex flex-wrap justify-end">
      <div className="w-full lg:w-5/12 px-4">
        <h1 className="text-4xl text-blue-950 md:text-6xl xl:text-7xl font-bold-700 leading-tight mb-12">
          Welcome To Candy Shop
        </h1>
        <p className="text-xl text-blue-950 md:text-3xl lg:text-4xl mb-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio quaerat aliquid provident iste, repellat cupiditate facilis. Molestias, totam animi ratione iure maiores similique reprehenderit deleniti eos nobis repudiandae quam recusandae?
        </p>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded shadow">
              SHOP NOW
            </button>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded shadow">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>
    </div>
 </div>
</section>


  );
};
