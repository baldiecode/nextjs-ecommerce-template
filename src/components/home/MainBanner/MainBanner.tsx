import { Button } from 'app/components/shared/Button';
import Image from 'next/image'
import React from 'react'

export const MainBanner = () => {
    return (
        <div className="flex flex-col h-screen bg-blue-950 relative">
<div className="flex justify-center h-1/4 bg-blue-950 w-screen">
            <div className="w-40" >
              <Image
                src="/images/candy-logo.png"
                alt="logo image"
                layout="responsive"
                width={500}
                height={300}
                objectFit="cover"
                objectPosition="center"
                quality={100}
                priority
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-blue-950 to-transparent" />
          <section className="relative bg-gray-900 h-screen mt-0">
            <div className="absolute inset-0">
              <Image
                src="/images/back-candy.jpg"
                alt="New Banner Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
                priority
              />
            </div>
            <div className="container mx-auto px-6 pt-12 pb-6 text-gray-800 relative z-10">
                  <h1 className="text-4xl text-blue-950 md:text-6xl xl:text-7xl font-bold-700 leading-tight mb-12 text-center">
                    About Us
                  </h1>
              <div className="flex flex-wrap justify-end">
                <div className="w-full lg:w-5/12 px-4">
                <h1 className="text-4xl text-blue-950 md:text-6xl xl:text-7xl font-bold-700 leading-tight mb-12 text-center">
                    About Us
                  </h1>
                  <p className="text-xl text-blue-950 md:text-3xl lg:text-4xl mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at cursus pellentesque, nisl eros pellentesque quam, a faucibus nisl nunc id nisl.
                  </p>
                  <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                     <Button />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
     );
}

export default MainBanner